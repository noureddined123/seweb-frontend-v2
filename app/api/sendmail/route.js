// Ensure the file is located in app/api/sendmail/route.js or pages/api/sendmail.js

export const runtime = 'edge';

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

async function verifyTurnstileToken(token) {
    const response = await fetch(VERIFY_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            secret: process.env.TURNSTILE_SECRET_KEY,
            response: token,
        }),
    });
    const data = await response.json();
    return data.success;
}

export async function POST(request) {
    const { name, email, website, formMessage, turnstileToken } = await request.json();

    // Verify Turnstile token
    const isHuman = await verifyTurnstileToken(turnstileToken);
    if (!isHuman) {
        return new Response(JSON.stringify({ message: 'Failed Turnstile verification' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const emailResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                personalizations: [{
                    to: [{ email: "info@seweb.nl" }],
                    subject: `Contact Form Submission from ${name}`,
                }],
                from: { email: "info@seweb.nl" },
                reply_to: { email: email },
                content: [{
                    type: 'text/plain',
                    value: `You have a new contact form submission:
        
                    Name: ${name}
                    Email: ${email}
                    Website: ${website}
                    Message: ${formMessage}`,
                }],
            }),
        });

        if (!emailResponse.ok) {
            throw new Error('Error sending email');
        }

        return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ message: 'Error sending email', error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
