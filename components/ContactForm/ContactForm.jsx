"use client";
import React, { useState, useEffect } from 'react';
import Button from "@/components/Button";

export default function ContactForm() {

    const TURNSTILE_SITEKEY = process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const [website, setWebsite] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [formMessage, setFormMessage] = useState('');
    const [turnstileToken, setTurnstileToken] = useState('');


    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
        script.async = true;
        script.defer = true;
        script.onload = () => {
            if (window.turnstile) {
                window.turnstile.render('#turnstile-widget', {
                    sitekey: TURNSTILE_SITEKEY,
                    theme: "light",
                    callback: function (token) {
                        setTurnstileToken(token);
                    },
                });
            } else {
                console.log('Turnstile not loaded');
            }
        };

        script.onerror = () => {
            console.error('Error loading Turnstile script');
        };
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, [TURNSTILE_SITEKEY]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        if (!turnstileToken) {
            setError('Turnstile verification failed');
            return;
        }

        const response = await fetch('/api/sendmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, website, formMessage, turnstileToken }),
        });

        if (response.ok) {
            setMessage('Email sent successfully!');
        } else {
            setError('Failed to send email.');
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-sky py-10 p-5  sm:p-10 md:p-16 xl:p-[75px] rounded-2xl"
        >
            <header className="mb-10">
                <h3
                    data-aos="fade-up"
                    className="text-dark mb-2 text-3xl sm:text-4xl font-bold font-space_grotesk"
                >
                    Heeft u nog vragen?
                </h3>
                <p data-aos="fade-up" className="text-sm text-gray ">
                    Uw e-mailadres wordt niet gepubliceerd. Verplichte velden zijn gemarkeerd met *
                </p>
            </header>

            <div className="flex flex-col gap-5">
                <div className="flex flex-col md:flex-row gap-5">
                    <input
                        required
                        id="name"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Naam*"
                        className="bg-white text-gray w-full focus-visible:outline-blue placeholder:text-gray rounded-2xl  py-5 px-8"
                    />
                    <input
                        required
                        id="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email*"
                        className="bg-white text-gray w-full focus-visible:outline-blue placeholder:text-gray rounded-2xl  py-5 px-8"
                    />
                </div>
                <input
                    required
                    id="website"
                    name="webiste"
                    onChange={(e) => setWebsite(e.target.value)}
                    type="text"
                    placeholder="Uw Website"
                    className="bg-white text-gray w-full focus-visible:outline-blue placeholder:text-gray rounded-2xl  py-5 px-8"
                />
                <textarea
                    id="formMessage"
                    name="formMessage"
                    onChange={(e) => setFormMessage(e.target.value)}
                    required
                    placeholder="Bericht*"
                    className="bg-white text-gray w-full focus-visible:outline-blue h-36 placeholder:text-gray rounded-2xl  py-5 px-8"
                />
                <div id="turnstile-widget" className="mt-3"></div>
                <Button type="submit" className="bg-rose text-white hover:border-rose hover:bg-transparent hover:text-rose">
                    {" "}
                    Verstuur Bericht
                </Button>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                {message && <div style={{ color: 'green' }}>{message}</div>}
            </div>
        </form>

    );
}