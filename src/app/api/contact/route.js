// File: /app/api/contact/route.js

import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        // Get the bot token and chat ID from environment variables
        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_CHAT_ID;

        if (!botToken || !chatId) {
            throw new Error("Missing Telegram bot token or chat ID in environment variables.");
        }

        // Format the message text for Telegram
        // Using MarkdownV2 for formatting. Note the escaping of special characters.
        const text = `
*New Portfolio Message*

*From:* ${name.replace(/([_*\[\]()~`>#+\-=|{}.!])/g, '\\$1')}
*Email:* ${email.replace(/([_*\[\]()~`>#+\-=|{}.!])/g, '\\$1')}

*Message:*
${message.replace(/([_*\[\]()~`>#+\-=|{}.!])/g, '\\$1')}
    `;

        // Construct the Telegram API URL
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

        // Send the message using the Fetch API
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: text,
                parse_mode: 'MarkdownV2',
            }),
        });

        const result = await response.json();

        if (!result.ok) {
            // Throw an error if Telegram API reports a failure
            throw new Error(`Telegram API error: ${result.description}`);
        }

        return NextResponse.json({ message: 'Message sent successfully via Telegram!' }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: `Failed to send message. ${error.message}` }, { status: 500 });
    }
}
