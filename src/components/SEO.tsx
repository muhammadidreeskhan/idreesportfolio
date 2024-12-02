import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  twitterHandle?: string;
}

const SEO = ({
  title,
  description,
  keywords = [],
  image = '/assets/og-image.jpg',
  url = 'https://idrees-portfolio.vercel.app/',
  type = 'website',
  author = 'Muhammad Idrees',
  twitterHandle = '@happyikhan'
}: SEOProps) => {
  const siteTitle = `${title} | Muhammad Idrees Portfolio`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>Idrees Portfolio | Frontend React Developer</title>
      <meta name="description" content="Frontend React.js Developer specializing in modern web development. Expert in MERN stack, Next.js, and full-stack development." />
      <meta name="keywords" content="Frontend developer, React.js developer, Full stack developer, Node.js developer, Next.js developer, MERN stack developer, Web Developer Portfolio" />
      <meta name="author" content={author} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Idrees Portfolio | Frontend React Developer" />
      <meta property="og:description" content="Frontend React.js Developer specializing in modern web development. Expert in MERN stack, Next.js, and full-stack development." />
      <meta property="og:image" content={image} />
      <meta property="og:url" content="https://idrees.portfolio.vercel.app" />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Muhammad Idrees Portfolio" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@happyikhan" />
      <meta name="twitter:creator" content="@happyikhan" />
      <meta name="twitter:title" content="Idrees Portfolio | Frontend React Developer" />
      <meta name="twitter:description" content="Frontend React.js Developer specializing in modern web development. Expert in MERN stack, Next.js, and full-stack development." />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags for SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="google-site-verification" content="google68d9d6bf48320b14.html" />
      <meta name="theme-color" content="#10B981" />
      <meta name="msapplication-TileColor" content="#10B981" />
      
      {/* Additional Keywords and Technologies */}
      <meta name="technologies" content="React, Next.js, Node.js, TypeScript, JavaScript, TailwindCSS, MongoDB, Express.js" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === 'profile' ? "Person" : "WebSite",
          name: author,
          url: url,
          description: description,
          image: image,
          sameAs: [
            "https://github.com/muhammadidreeskhan",
            "https://linkedin.com/in/muhammad-idrees-khan-796558117/",
            "https://twitter.com/happyikhan"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
