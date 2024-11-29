import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, Clock, Tag, ChevronRight } from 'lucide-react';
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

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building Scalable React Applications with TypeScript',
    excerpt: 'Learn how to structure large-scale React applications using TypeScript and modern best practices.',
    content: 'Full blog content here...',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['React', 'TypeScript', 'Architecture'],
    image: defaultImage,
    slug: 'building-scalable-react-applications'
  },
  {
    id: '2',
    title: 'The Power of Framer Motion in React',
    excerpt: 'Explore how to create stunning animations and micro-interactions using Framer Motion.',
    content: 'Full blog content here...',
    date: '2024-01-10',
    readTime: '6 min read',
    tags: ['Animation', 'React', 'UX'],
    image: defaultImage,
    slug: 'power-of-framer-motion'
  },
  {
    id: '3',
    title: 'Optimizing Performance in Modern Web Apps',
    excerpt: 'Deep dive into performance optimization techniques for modern web applications.',
    content: 'Full blog content here...',
    date: '2024-01-05',
    readTime: '10 min read',
    tags: ['Performance', 'Optimization', 'Web Development'],
    image: defaultImage,
    slug: 'optimizing-web-performance'
  }
];

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const allTags = Array.from(new Set(blogPosts.flatMap(post => post.tags)));
  
  const filteredPosts = selectedTag
    ? blogPosts.filter(post => post.tags.includes(selectedTag))
    : blogPosts;

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Blog"
        description="Insights and articles about web development, React, TypeScript, and modern development practices."
        keywords={["web development", "react", "typescript", "programming", "tech blog"]}
        type="website"
      />
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Blog & Insights
          </h1>
          
          <p className="text-lg text-muted-foreground mb-12">
            Explore articles about web development, design patterns, and modern development practices.
          </p>

          {/* Tags Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Button
              variant={selectedTag === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(null)}
              className="rounded-full"
            >
              All Posts
            </Button>
            {allTags.map(tag => (
              <Button
                key={tag}
                variant={selectedTag === tag ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(tag)}
                className="rounded-full"
              >
                {tag}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-secondary/5 rounded-xl overflow-hidden border border-border/40 hover:border-primary/40 transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden">
                  <OptimizedImage
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={338}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  {/* Meta information */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        <Tag className="w-3 h-3 inline-block mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    className="group/btn w-full justify-between hover:bg-primary/10"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
