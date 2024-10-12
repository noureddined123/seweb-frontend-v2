export const runtime = "edge"

import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
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


export default async function handler(request) {
    if (request.method === 'POST') {
        let { name, email, website, formMessage, turnstileToken } = await request.json();

    
        // Verify Turnstile token
        const isHuman = await verifyTurnstileToken(turnstileToken);
        if (!isHuman) {
            return new Response(JSON.stringify({ message: 'Failed Turnstile verification' }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        try {
            await sendgrid.send({
                to: "info@seweb.nl", // Your email address to receive the form submission
                from: "info@seweb.nl",  // Your verified sender email
                replyTo: email,
                subject: `Contact Form Submission from ${name}`,
                text: `You have a new contact form submission:

        Name: ${name}
        Email: ${email}
        Website: ${website}
        Message: ${formMessage}`,
            });

            return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch (error) {
            console.error('Error sending email:', error);
            return new Response(JSON.stringify({ message: 'Error sending email', error }), {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }
    } else {
        return new Response(JSON.stringify({ message: 'Method not allowed' }), {
            status: 405,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}