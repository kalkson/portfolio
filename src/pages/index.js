import React, { useEffect } from 'react';
import AboutSection from '../components/organisms/AboutSection/AboutSection';
import SEO from '../components/seo';

const IndexPage = () => {
  useEffect(() => {
    document.documentElement.style.setProperty('--primaryColor', '#bbb739');
  });

  return (
    <>
      <SEO
        title="Home Page"
        description="Damian Kalka webdeveloper's personal portfolio where you can browse his created projects and contact with"
      />
      <AboutSection />
    </>
  );
};

export default IndexPage;
