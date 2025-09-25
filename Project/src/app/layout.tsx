import { ReactNode } from 'react';
import { Roboto, Roboto_Mono } from 'next/font/google';

import { metadata } from '@/metadata/global';
import '@/styles/globals.css';

const roboto = Roboto({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const robotoMono = Roboto_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export { metadata };

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${roboto.variable} ${robotoMono.variable} antialiased`}>{children}</body>
        </html>
    );
}
