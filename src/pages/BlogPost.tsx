import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import OptimizedImage from '../components/OptimizedImage';
import { Button } from '../components/ui/button';
import { blogPosts } from './Blog';
import { generateBlogPostSchema } from "../utils/schema";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold">Blog Post Not Found</h1>
          <Link to="/blog">
            <Button className="mt-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const blogPostSchema = generateBlogPostSchema({
    title: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: "Muhammad Idrees",
    url: `https://idrees-portfolio.vercel.app/blog/${post.slug}`
  });

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title={`${post.title} | Your Name`}
        description={post.excerpt}
        schema={blogPostSchema}
      />
      <Navbar />
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-grow container mx-auto px-4 py-8"
      >
        <article className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-block">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>

          <OptimizedImage
            src={post.image}
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />

          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                {post.readTime}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map(tag => (
                <div
                  key={tag}
                  className="flex items-center px-3 py-1 rounded-full bg-primary/10 text-sm"
                >
                  <Tag className="mr-2 h-3 w-3" />
                  {tag}
                </div>
              ))}
            </div>
          </header>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.trim().startsWith('#')) {
                const level = paragraph.match(/^#+/)[0].length;
                const text = paragraph.replace(/^#+\s/, '');
                const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
                return <HeadingTag key={index} className="mt-8 mb-4">{text}</HeadingTag>;
              }
              
              if (paragraph.trim().match(/^\d\./)) {
                return (
                  <ul key={index} className="list-decimal pl-6 my-4">
                    {paragraph.split('\n').map((item, i) => (
                      <li key={i} className="mb-2">{item.replace(/^\d\.\s/, '')}</li>
                    ))}
                  </ul>
                );
              }

              if (paragraph.trim().startsWith('```')) {
                const code = paragraph.replace(/```\w*\n/, '').replace(/```$/, '');
                return (
                  <pre key={index} className="bg-muted p-4 rounded-lg my-4">
                    <code>{code}</code>
                  </pre>
                );
              }

              return <p key={index} className="mb-4">{paragraph}</p>;
            })}
          </div>
        </article>
      </motion.main>
      <Footer />
    </div>
  );
};

export default BlogPost;
