import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Clock, Tag, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';
import { Button } from '../components/ui/button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  slug: string;
}

const defaultImage = '/assets/images/placeholder.jpg';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Next.js 14 vs React: A Complete Comparison Guide for 2024',
    excerpt: 'An in-depth comparison between Next.js 14 and React, helping developers choose the right framework for their projects. Learn about Server Components, App Router, and performance optimizations.',
    content: `Next.js 14 has introduced groundbreaking features that are reshaping how we build web applications. In this comprehensive guide, we'll explore:

    1. Server Components vs Client Components
    2. The new App Router and its benefits
    3. Built-in SEO optimizations
    4. Performance comparisons
    5. When to choose Next.js over React
    
    Whether you're building a small project or an enterprise application, this guide will help you make an informed decision.`,
    date: '2024-01-20',
    readTime: '12 min read',
    tags: ['Next.js', 'React', 'Web Development', 'Performance'],
    image: '/assets/blog/nextjs-vs-react.jpg',
    slug: 'nextjs-14-vs-react-comparison'
  },
  {
    id: '2',
    title: 'Mastering TypeScript: Essential Tips for Modern Web Development',
    excerpt: 'Discover advanced TypeScript techniques that will improve your code quality and development workflow. From type inference to custom utility types.',
    content: `TypeScript has become an essential tool in modern web development. This guide covers:

    1. Advanced type inference techniques
    2. Creating and using utility types
    3. Best practices for large-scale applications
    4. Performance optimization tips
    5. Integration with popular frameworks
    
    Level up your TypeScript skills and write more maintainable code.`,
    date: '2024-01-18',
    readTime: '10 min read',
    tags: ['TypeScript', 'JavaScript', 'Web Development', 'Programming'],
    image: '/assets/blog/typescript-mastery.jpg',
    slug: 'mastering-typescript-essential-tips'
  },
  {
    id: '3',
    title: 'AI-Powered Web Development: Tools and Techniques for 2024',
    excerpt: 'Explore how AI is transforming web development with tools like GitHub Copilot, ChatGPT, and AI-driven testing. Learn to leverage AI for better productivity.',
    content: `AI is revolutionizing how we build websites and applications. Discover:

    1. AI coding assistants and their proper usage
    2. Automated testing with AI
    3. AI-driven design systems
    4. Performance optimization using AI
    5. Future trends in AI web development
    
    Stay ahead of the curve by mastering AI-powered development tools.`,
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['AI', 'Web Development', 'Automation', 'Future Tech'],
    image: '/assets/blog/ai-web-dev.jpg',
    slug: 'ai-powered-web-development-2024'
  },
  {
    id: '4',
    title: 'Building High-Performance React Applications: The Ultimate Guide',
    excerpt: 'Learn advanced techniques for optimizing React applications, from code splitting to rendering optimization and state management strategies.',
    content: `Create blazing-fast React applications with these proven techniques:

    1. Advanced code splitting strategies
    2. React Server Components implementation
    3. State management optimization
    4. Memory leak prevention
    5. Performance monitoring and analysis
    
    Transform your React applications into high-performance masterpieces.`,
    date: '2024-01-12',
    readTime: '15 min read',
    tags: ['React', 'Performance', 'Optimization', 'Web Development'],
    image: '/assets/blog/react-performance.jpg',
    slug: 'high-performance-react-applications'
  },
  {
    id: '5',
    title: 'The Complete Guide to Web Accessibility in 2024',
    excerpt: 'Master web accessibility (a11y) with this comprehensive guide covering WCAG guidelines, testing tools, and implementation strategies.',
    content: `Make your websites accessible to everyone with this detailed guide:

    1. WCAG 2.2 guidelines explained
    2. Accessibility testing tools and methods
    3. Keyboard navigation best practices
    4. Screen reader optimization
    5. Color contrast and typography guidelines
    
    Learn how to create inclusive web experiences that work for everyone.`,
    date: '2024-01-10',
    readTime: '11 min read',
    tags: ['Accessibility', 'Web Development', 'UX', 'WCAG'],
    image: '/assets/blog/web-accessibility.jpg',
    slug: 'complete-web-accessibility-guide'
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="Blog | Your Name"
        description="Explore our latest articles about web development, design, and technology."
      />
      <Navbar />
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow container mx-auto px-4"
      >
        <div className="pt-28 pb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">Blog</h1>
          <p className="text-muted-foreground text-lg">
            Explore articles about web development, design, and technology
          </p>
        </div>
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full max-w-md px-4 py-2 rounded-lg border border-border bg-background"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          
          <div className="flex flex-wrap gap-2 mt-4">
            {allTags.map(tag => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className="flex items-center"
              >
                <Tag className="mr-2 h-3 w-3" />
                {tag}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col bg-card rounded-lg overflow-hidden border border-border"
            >
              <OptimizedImage
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                <Link to={`/blog/${post.slug}`} className="mt-auto">
                  <Button className="w-full">
                    Read More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Blog;
