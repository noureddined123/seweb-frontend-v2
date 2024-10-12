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

async function sendEmail({ name, email, website, formMessage }) {
    const apiKey = process.env.SENDGRID_API_KEY;
    const emailData = {
        personalizations: [{
            to: [{ email: 'info@xx.nl' }]
        }],
        from: { email: 'info@xx.nl' },
        reply_to: { email },
        subject: `Contact Form Submission from ${name}`,
        content: [{
            type: 'text/plain',
            value: `You have a new contact form submission:\n\nName: ${name}\nEmail: ${email}\nWebsite: ${website}\nMessage: ${formMessage}`
        }]
    };

    const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
    });

    if (!res.ok) {
        throw new Error('Failed to send email');
    }
}

export default async function handler(request) {
    if (request.method === 'POST') {
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
            await sendEmail({ name, email, website, formMessage });
            return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        } catch (error) {
            console.error('Error sending email:', error);
            return new Response(JSON.stringify({ message: 'Error sending email', error }), {
                status: 500,
                headers: { 'Content-Type': 'application/json' },
            });
        }
    } else {
        return new Response(JSON.stringify({ message: 'Method not allowed' }), {
            status: 405,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
