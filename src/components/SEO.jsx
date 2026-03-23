import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://devchristian.vercel.app';

export default function SEO({
  title,
  description,
  url = BASE_URL,
  image,
  keywords,
  project,   // optional: full project object for case study rich JSON-LD
}) {
  const defaultTitle = "Christian Akabueze | Frontend Developer & Software Engineering Student";
  const defaultDesc = "Christian Akabueze is a modern Frontend Engineer & Software Engineering Student specializing in high-performance React applications, immersive user experiences, and scalable web architecture.";
  const defaultKeywords = "Christian Akabueze, Akabueze Christian, Frontend Developer, Web Developer, Software Engineer, HTML, CSS, JavaScript, React, Portfolio";

  const pageTitle = title ? `${title} | Christian Akabueze` : defaultTitle;
  const pageDesc = description || defaultDesc;
  const pageKeywords = keywords
    ? `${keywords}, Christian Akabueze, Frontend Developer`
    : defaultKeywords;

  const jsonLdPerson = {
    "name": "Christian Akabueze",
    "alternateName": "Akabueze Christian",
    "url": `${BASE_URL}/`,
    "jobTitle": "Frontend Engineer",
    "worksFor": { "@type": "Organization", "name": "Software Engineering Student" },
    "description": defaultDesc,
    "knowsAbout": ["HTML", "CSS", "JavaScript", "React", "Next.js", "Node.js", "Firebase", "TypeScript", "Backend Integration", "Frontend Development", "Web Development", "Responsive Design"],
    "sameAs": [
      "https://github.com/christian-fx",
      "https://x.com/too_chi_",
      "https://www.linkedin.com/in/tochukwu-akabueze-bb2b46391",
      "https://www.facebook.com/too.chi.5070"
    ],
    "mainEntityOfPage": { "@type": "WebPage", "@id": `${BASE_URL}/` }
  };

  // ── JSON-LD ──────────────────────────────────────────────────────────────
  const breadcrumbs = [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE_URL}/` }
  ];

  if (title === "Works") {
    breadcrumbs.push({ "@type": "ListItem", "position": 2, "name": "Works", "item": `${BASE_URL}/works` });
  } else if (title === "About") {
    breadcrumbs.push({ "@type": "ListItem", "position": 2, "name": "About", "item": `${BASE_URL}/about` });
  } else if (title === "Contact") {
    breadcrumbs.push({ "@type": "ListItem", "position": 2, "name": "Contact", "item": `${BASE_URL}/contact` });
  } else if (project) {
    breadcrumbs.push({ "@type": "ListItem", "position": 2, "name": "Works", "item": `${BASE_URL}/works` });
    breadcrumbs.push({ "@type": "ListItem", "position": 3, "name": project.title, "item": url });
  }

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      ...jsonLdPerson
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs
    }
  ];

  if (project) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": project.title,
      "description": project.description,
      "url": url,
      "image": image || project.image,
      "creator": { "@type": "Person", "name": "Christian Akabueze", "url": `${BASE_URL}/` },
      "dateCreated": project.meta?.year ? `${project.meta.year}-01-01` : undefined,
      "keywords": keywords || project.category,
    });
  }

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content="Christian Akabueze" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google-site-verification" content="0KvZBQ0wJuPFQnapQnmkRhH8ZUzwwofL-Ek_ElUMp4c" />

      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={project ? "article" : "website"} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title ? `${title} – Christian Akabueze` : "Christian Akabueze – Frontend Developer"} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:site_name" content="Christian Akabueze Portfolio" />
      <meta property="og:locale" content="en_US" />
      <meta property="article:author" content="https://www.facebook.com/too.chi.5070" />
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:width" content="1200" />}
      {image && <meta property="og:image:height" content="630" />}
      {image && <meta property="og:image:alt" content={title ? `${title} – Case Study Preview` : "Christian Akabueze Portfolio"} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@too_chi_" />
      <meta name="twitter:creator" content="@too_chi_" />
      <meta name="twitter:title" content={title ? `${title} – Christian Akabueze` : "Christian Akabueze – Frontend Developer"} />
      <meta name="twitter:description" content={pageDesc} />
      {image && <meta name="twitter:image" content={image} />}
      {image && <meta name="twitter:image:alt" content={title ? `${title} – Case Study Preview` : "Christian Akabueze Portfolio"} />}

      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>
    </Helmet>
  );
}
