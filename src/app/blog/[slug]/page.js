// File: /app/blog/[slug]/page.js
// This is a dynamic route page for displaying a single blog post.

import { Github, Linkedin, Instagram, ArrowLeft, Clock, Tag as TagIcon } from 'lucide-react';
import { allPosts } from '../../../lib/posts'; // Using absolute path

// This function tells Next.js which pages to build
export async function generateStaticParams() {
    return allPosts.map((post) => ({
        slug: post.slug,
    }));
}

// --- Header and Footer for the Blog Post Page ---

const BlogPostHeader = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
                <a href="/" className="text-2xl font-bold text-white">
                    S<span className="text-sky-500">G</span>
                </a>
                <a href="/blog" className="flex items-center gap-2 text-white hover:text-sky-400 transition-colors">
                    <ArrowLeft size={20} />
                    <span className="font-semibold">Back to Blog</span>
                </a>
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


// --- Main Blog Post Page Component ---

export default function BlogPostPage({ params }) {
    const { slug } = params;
    const post = allPosts.find(p => p.slug === slug);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (!post) {
        return (
            <div className="bg-slate-900 min-h-screen flex items-center justify-center text-white">
                <BlogPostHeader />
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Post Not Found</h1>
                    <p className="text-gray-400 mt-4">Sorry, we couldn&apos;t find the blog post you were looking for.</p>
                    <a href="/blog" className="mt-8 inline-block text-sky-400 hover:text-sky-300">
                        &larr; Back to all posts
                    </a>
                </div>
            </div>
        );
    }

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
                <BlogPostHeader />

                <main className="pt-20">
                    <article>
                        <header className="relative h-[40vh] md:h-[50vh] flex items-center justify-center">
                            <div
                                className="absolute inset-0 bg-cover bg-center z-0"
                                style={{ backgroundImage: `url(${post.image})` }}
                            ></div>
                            <div className="absolute inset-0 bg-black/60 z-10"></div>
                            <div className="relative z-20 text-center px-4">
                                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">{post.title}</h1>
                                <div className="flex items-center justify-center gap-6 mt-4 text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <Clock size={16} />
                                        <span>{formatDate(post.date)}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <TagIcon size={16} />
                                        <span>{post.category}</span>
                                    </div>
                                </div>
                            </div>
                        </header>

                        <div className="container mx-auto px-4 mt-12 max-w-4xl">
                            <div
                                className="prose prose-lg prose-invert max-w-none prose-p:text-gray-300 prose-li:text-gray-300"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />
                        </div>
                    </article>
                </main>

                <Footer />
            </div>
        </>
    );
}
