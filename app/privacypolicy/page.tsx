// app/privacy-policy/page.tsx (or pages/privacy-policy.tsx for older Next.js)
import TechNavigation from '@/components/TechNavigation';
import React from 'react';
import Footer from '@/components/Footer';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
    <TechNavigation />
    <div className="container mx-auto p-8 max-w-3xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
      </div>

      {/* What information do we collect? */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">What information do we collect?</h2>
        <p className="text-gray-700">
          When you interact with us, we may collect various types of information, including personal information such as your
          name, email address, contact details, and any other information you voluntarily provide. Additionally, we may gather
          usage data, which includes information about your interactions with our website, products, and services. This data may
          include IP addresses, device information, and Browse activities. We may also utilize cookies and similar technologies to
          enhance your Browse experience and gather information about your preferences.
        </p>
      </section>

      {/* How do we collect information? */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">How do we collect information?</h2>
        <p className="text-gray-700">
          We collect information through different means. When you directly interact with us through our website, forms, or direct
          communication channels, we collect information that you voluntarily provide. Through the use of automated technologies
          like cookies, we collect data as you interact with our website or online services. Additionally, we may receive information
          from third-party platforms or services if you have granted them permission to share your information with us.
        </p>
      </section>

      {/* Confidentiality */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Confidentiality</h2>
        <p className="text-gray-700">
          At Edvenswa, we recognize the significance of maintaining the confidentiality of your personal information. We have
          implemented robust security measures to protect your data from unauthorized access, alteration, or disclosure. Our
          commitment to confidentiality ensures that your information is handled with the utmost care and is accessible only to
          authorized personnel who require it to fulfill their responsibilities.
        </p>
      </section>

      {/* Making a complaint */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Making a complaint</h2>
        <p className="text-gray-700 mb-4">
          If you have any concerns or complaints regarding the use or handling of your personal information, we encourage you to
          contact our Privacy Team. We take privacy-related complaints seriously and are committed to addressing them promptly
          and effectively. To file a complaint, please reach out to our Privacy Team using the contact information provided
          below:Edvenswa Privacy Team Email: <a href="mailto:privacy@edvenswa.com" className="text-blue-600 hover:underline">privacy@edvenswa.com</a>
        </p>
        <p className="text-gray-700 mb-4">
          We will thoroughly investigate and respond to any complaints received, taking appropriate actions to resolve the issue.
          We strive to ensure that your privacy concerns are addressed in a fair and transparent manner.
        </p>
        <p className="text-gray-700">
          Please note that we continuously review and update our Privacy Policy to align with relevant data protection regulations
          and reflect our ongoing commitment to safeguarding your privacy. By using our website, products, or services, you
          acknowledge that you have read and understood this Privacy Policy.
        </p>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default PrivacyPolicyPage;