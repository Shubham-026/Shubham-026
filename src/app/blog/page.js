// File: /app/blog/page.js
// This page is now a Server Component for better performance.

import { Github, Linkedin, Instagram, ArrowLeft, ArrowRight } from 'lucide-react';
import { allPosts } from '../../lib/posts'; // Using absolute path

// --- Reusable Components ---

// A card component for blog posts with a hover effect
const BlogCard = ({ children, className }) => (
    <div className={`bg-slate-800/60 backdrop-blur-sm border border-gray-200/20 rounded-xl shadow-lg p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/20 ${className}`}>
        {children}
    </div>
);

// A reusable tag component for categories
const CategoryTag = ({ children }) => (
    <span className="bg-purple-500/20 text-purple-300 text-xs font-medium px-3 py-1 rounded-full">
        {children}
    </span>
);

// --- Header and Footer for the Blog Page ---

const BlogHeader = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="relative flex items-center justify-center h-full">
                {/* Back button positioned to the left */}
                <a href="/" className="absolute left-0 flex items-center gap-2 text-white hover:text-sky-400 transition-colors">
                    <ArrowLeft size={20} />
                    <span className="hidden sm:inline font-semibold">Back to Portfolio</span>
                </a>
                {/* Centered Title */}
                <h1 className="text-xl md:text-2xl font-bold text-white">
                    My Personal Blog
                </h1>
            </div>
        </nav>
    </header>
);

const Footer = () => (
    <footer className="py-8 border-t border-slate-800 mt-24">
        <div className="container mx-auto px-4 text-center text-gray-500">
            <div className="flex justify-center gap-6 mb-4">
                <a href="https://www.linkedin.com/in/shubham-gupta-569576362" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors"><Linkedin size={20} /></a>
                <a href="https://github.com/Shubham-026" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors"><Github size={20} /></a>
                <a href="https://www.instagram.com/_.sg._00_" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition-colors"><Instagram size={20} /></a>
            </div>
            <p>&copy; {new Date().getFullYear()} Shubham Gupta. All Rights Reserved.</p>
        </div>
    </footer>
);


// --- Main Blog Page Component ---

export default function BlogPage() {
    // Sort posts by date, newest first
    const sortedPosts = allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <>
            <style>{`
        html::-webkit-scrollbar, body::-webkit-scrollbar {
          display: none;
        }
        html, body {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
            <div className="bg-slate-900 min-h-screen font-sans text-white">
                <BlogHeader />

                <main className="pt-24 sm:pt-32">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">From the Desk of Shubham</h1>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                Welcome to my corner of the internet where I share my thoughts on technology, programming, and personal development.
                            </p>
                        </div>

                        {/* Blog posts grid */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {sortedPosts.map((post, index) => (
                                <BlogCard key={index} className="flex flex-col">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="rounded-lg mb-4 w-full h-48 object-cover"
                                    />
                                    <div className="flex justify-between items-center mb-2">
                                        <CategoryTag>{post.category}</CategoryTag>
                                        <p className="text-gray-400 text-sm">{formatDate(post.date)}</p>
                                    </div>
                                    <h2 className="text-xl font-bold text-white mb-2 flex-grow">{post.title}</h2>
                                    <p className="text-gray-400 mb-4">{post.excerpt}</p>
                                    <a href={`/blog/${post.slug}`} className="text-sky-400 hover:text-sky-300 flex items-center gap-2 self-start mt-auto">
                                        Read More <ArrowRight size={16} />
                                    </a>
                                </BlogCard>
                            ))}
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}
