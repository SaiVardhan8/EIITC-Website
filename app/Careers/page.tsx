import React from 'react';
import Hero from '@/components/Hero';
import GrowthSection from '@/components/GrowthSection';
import Benefits from '@/components/Benefits';
import CallToAction from '@/components/CallToAction';
import NavigationMenu from '@/components/NavigationMenu';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import PageMetadata from '@/components/PageMetaData';

const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col">
      <NavigationMenu />
      <PageMetadata 
        title="Careers - Edvenswa Enterprises Website"
        description="Edvenswa Enterprises"
        keywords="Edvenswa Enterprises Software solutions, artificial intelligence, machine learning, business transformation, Edvenswa, AI consulting, enterprise AI"
        ogUrl="/"
        canonicalUrl="/"
      />
      <div className="px-4">
        <Hero />
        <GrowthSection />
        <Benefits />
        <CallToAction />
      </div>
      <Footer />
    </main>
  );
};

export default HomePage;