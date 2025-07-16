import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


// SEO Metadata
export const metadata = {
  title: "Shubham Gupta - Student & Developer from Dhanbad",
  description: "The personal portfolio of Shubham Gupta, a passionate student and developer from Dhanbad, Jharkhand, with skills in Java, Python, and Next.js. View my projects, blog, and get in touch.",
  icons: {
      icon: '/favicon.png', // adjust path if using PNG or other formats
    },
  keywords: ["Shubham Gupta", "Dhanbad", "portfolio", "developer", "student", "Java", "Python", "Next.js", "React", "software engineer"],
  authors: [{ name: 'Shubham Gupta' }],
  openGraph: {
    title: 'Shubham Gupta - Student & Developer from Dhanbad',
    description: 'The personal portfolio of Shubham Gupta, showcasing projects in Java, Python, and web development.',
    url: 'https://your-domain.com', // Replace with your actual domain name
    siteName: 'Shubham Gupta Portfolio',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/207007354?v=4', // Link to your main profile image
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
