interface BlogPostSchema {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  author: string;
  url: string;
}

export const generateBlogPostSchema = ({
  title,
  description,
  image,
  datePublished,
  author,
  url,
}: BlogPostSchema) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": image,
    "datePublished": datePublished,
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Muhammad Idrees",
      "logo": {
        "@type": "ImageObject",
        "url": "https://idrees-portfolio.vercel.app/assets/images/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };
};

interface PersonSchema {
  name: string;
  jobTitle: string;
  image: string;
  description: string;
  email: string;
  url: string;
  sameAs: string[];
}

export const generatePersonSchema = ({
  name,
  jobTitle,
  image,
  description,
  email,
  url,
  sameAs,
}: PersonSchema) => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    "image": image,
    "description": description,
    "email": email,
    "url": url,
    "sameAs": sameAs
  };
};
