import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, url = 'https://devchristian.vercel.app/', image }) {
  const defaultTitle = "Christian Akabueze | Frontend Developer & Software Engineering Student";
  const defaultDesc = "Christian Akabueze is a modern Frontend Engineer & Software Engineering Student specializing in high-performance React applications, immersive user experiences, and scalable web architecture.";

  const pageTitle = title ? `${title} | Christian Akabueze` : defaultTitle;
  const pageDesc = description || defaultDesc;

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Christian Akabueze",
    "alternateName": "Akabueze Christian",
    "url": "https://devchristian.vercel.app/",
    "jobTitle": "Frontend Engineer",
    "worksFor": {
      "@type": "Organization",
      "name": "Software Engineering Student"
    },
    "description": "Christian Akabueze is a modern Frontend Engineer & Software Engineering Student specializing in high-performance React applications, immersive user experiences, and scalable web architecture.",
    "knowsAbout": ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "Firebase", "Typescript", "Backend Integration", "Frontend Development", "Web Development", "Responsive Design"],
    "sameAs": [
      "https://github.com/christian-fx",
      "https://x.com/too_chi_",
      "https://www.linkedin.com/in/tochukwu-akabueze-bb2b46391",
      "https://www.facebook.com/too.chi.5070"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://devchristian.vercel.app/"
    }
  };

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <meta name="keywords" content="Christian Akabueze, Akabueze Christian, Frontend Developer, Web Developer, Software Engineer, HTML, CSS, JavaScript, Portfolio" />
      <meta name="author" content="Christian Akabueze" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google-site-verification" content="0KvZBQ0wJuPFQnapQnmkRhH8ZUzwwofL-Ek_ElUMp4c" />

      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title ? `${title} - Christian Akabueze` : "Christian Akabueze - Frontend Developer"} />
      <meta property="og:description" content={title ? pageDesc : "Christian Akabueze is a Frontend Developer and Software Engineering student specializing in web development, responsive design, and modern JavaScript frameworks."} />
      <meta property="og:site_name" content="Christian Akabueze Portfolio" />
      <meta property="og:locale" content="en_US" />
      <meta property="article:author" content="https://www.facebook.com/too.chi.5070" />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${title} - Christian Akabueze` : "Christian Akabueze - Frontend Developer"} />
      <meta name="twitter:description" content={title ? pageDesc : "Portfolio of Christian Akabueze, Frontend Developer and Software Engineering student."} />
      <meta name="twitter:creator" content="@too_chi_" />
      {image && <meta property="twitter:image" content={image} />}

      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}
