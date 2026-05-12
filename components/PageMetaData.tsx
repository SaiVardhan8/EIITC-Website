"use client";

import { useEffect } from 'react';
import Script from 'next/script';

interface MetadataProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  canonicalUrl?: string;
}

/**
 * PageMetadata component to update document head for SEO on client-side rendered pages
 */
export default function PageMetadata({
  title,
  description,
  keywords,
  ogImage = "/images/edvenswa-logo.png",
  ogUrl,
  canonicalUrl,
}: MetadataProps) {
  // Base URL for canonical links and OG URLs
  const baseUrl = "https://edvenswa.com";
  const fullTitle = `${title} | edvenswa.com`;
  
  useEffect(() => {
    // Update document title
    document.title = fullTitle;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords if provided
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    }
    
    // Update OG title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', fullTitle);
    }
    
    // Update OG description
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }
    
    // Update OG image
    const ogImageEl = document.querySelector('meta[property="og:image"]');
    if (ogImageEl) {
      ogImageEl.setAttribute('content', ogImage);
    }
    
    // Update OG URL
    const ogUrlEl = document.querySelector('meta[property="og:url"]');
    if (ogUrlEl && ogUrl) {
      ogUrlEl.setAttribute('content', `${baseUrl}${ogUrl}`);
    }
    
    // Update Twitter title
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', fullTitle);
    }
    
    // Update Twitter description
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) {
      twitterDesc.setAttribute('content', description);
    }
    
    // Update Twitter image
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', ogImage);
    }
    
    // Update canonical URL
    const canonicalElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonicalElement && canonicalUrl) {
      canonicalElement.href = `${baseUrl}${canonicalUrl}`;
    }
  }, [title, description, keywords, ogImage, ogUrl, canonicalUrl, fullTitle]);

  return (
    <Script id="structured-data" type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "${fullTitle}",
          "description": "${description}",
          "url": "${baseUrl}${ogUrl || ''}",
          "image": "${ogImage}"
        }
      `} 
    </Script>
  );
}
