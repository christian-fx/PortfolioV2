import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, url = 'https://christian-santos.com', image }) {
  const defaultTitle = "Christian — Frontend Developer";
  const defaultDesc = "I design and build clean front-end experiences with a strong focus on clarity, performance, and minimalist visual systems.";
  
  const pageTitle = title ? `${title} | Christian` : defaultTitle;
  const pageDesc = description || defaultDesc;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDesc} />
      {image && <meta property="twitter:image" content={image} />}
    </Helmet>
  );
}
