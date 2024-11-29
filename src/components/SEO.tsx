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
  url = 'https://your-domain.com',
  type = 'website',
  author = 'Muhammad Idrees',
  twitterHandle = '@yourtwitterhandle'
}: SEOProps) => {
  const siteTitle = `${title} | Muhammad Idrees Portfolio`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Muhammad Idrees Portfolio" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional Meta Tags for SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="theme-color" content="#10B981" /> {/* Your primary color */}
      <meta name="msapplication-TileColor" content="#10B981" />
      
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
            "https://github.com/yourusername",
            "https://linkedin.com/in/yourusername",
            "https://twitter.com/yourusername"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
