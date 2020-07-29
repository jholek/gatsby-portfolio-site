import React from 'react';

import Layout from '../components/Layout';
import Hero from '../components/lander/Hero';
import Services from '../components/lander/Services';
import Projects from '../components/lander/Projects';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Projects />
    </Layout>
  );
};

export default IndexPage;
