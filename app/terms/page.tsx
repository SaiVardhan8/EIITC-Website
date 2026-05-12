// app/terms/page.tsx (assuming you want it under /terms route in Next.js)

import React from 'react';
import TechNavigation from '@/components/TechNavigation'; // Corrected path using alias or relative
 // Corrected path using alias or relative
import Link from 'next/link'; // Ensure Link is imported if used on the page
import Footer from '@/components/Footer';

const TermsAndConditionsPage: React.FC = () => {
  return (<>
    <TechNavigation />
    <div className="container mx-auto p-8 max-w-3xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Terms & Conditions</h1>
      </div>

      {/* Welcome */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Who we are</h2>
        <p className="text-gray-700">
          Welcome to the Edvenswa website. Throughout these Terms & Conditions, we, us, and our refer to Edvenswa. By
          accessing and using our website, you agree to comply with these Terms & Conditions. If you do not agree with any part
          of these terms, please refrain from using our website.
        </p>
      </section>

      {/* Comments */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Comments</h2>
        <p className="text-gray-700">
          When visitors leave comments on our website, we collect the data shown in the comments form, as well as the visitors
          IP address and browser user agent string, to help with spam detection.
        </p>
      </section>

      {/* Media */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Media</h2>
        <p className="text-gray-700">
          If you upload images to our website, we recommend avoiding uploading images with embedded location data (EXIF
          GPS) included. Visitors to the website can download and extract any location data from images on the website.
        </p>
      </section>

      {/* Cookies */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Cookies</h2>
        <p className="text-gray-700">
          Our website may use cookies to enhance your Browse experience. These are small text files stored on your computer
          or device that help us analyze website traffic, personalize content, and provide relevant advertisements. You can choose
          to accept or decline cookies through your browser settings.
        </p>
      </section>

      {/* Embedded content from other websites */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Embedded content from other websites</h2>
        <p className="text-gray-700">
          Articles on this site may include embedded content (e.g., videos, images, articles, etc.). Embedded content from other
          websites behaves in the exact same way as if you visited the other website. These websites may collect data about you, use
          cookies, embed additional third-party tracking, and monitor your interaction with that embedded content. We have no
          control over the practices of these websites and are not responsible for their privacy policies.
        </p>
      </section>

      {/* Who we share your data with */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Who we share your data with</h2>
        <p className="text-gray-700">
          We do not share your personal data with third parties unless required by law or with your explicit consent. However, non-
          personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.
        </p>
      </section>

      {/* How long we retain your data */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">How long we retain your data</h2>
        <p className="text-gray-700">
          If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve
          any follow-up comments automatically instead of holding them in a moderation queue.
        </p>
      </section>

      {/* What rights you have over your data */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">What rights you have over your data</h2>
        <p className="text-gray-700">
          If you have left comments on our website, you can request to receive an exported file of the personal data we hold about
          you, including any data you have provided to us. You can also request that we erase any personal data we hold about
          you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
        </p>
      </section>

      {/* Where your data is sent */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Where your data is sent</h2>
        <p className="text-gray-700">
          Visitor comments may be checked through an automated spam detection service.
        </p>
      </section>

      {/* Final Clause */}
      <section className="mb-8">
        <p className="text-gray-700">
          These Terms & Conditions are subject to change without notice. We encourage you to review this page periodically for
          any updates. By continuing to use our website after any modifications to these terms, you agree to the updated terms.
        </p>
      </section>
    </div>
    <Footer />
    </>
  );
};



export default TermsAndConditionsPage;