import React from 'react';

import Layout from '../components/Layout';
import Hero from '../components/lander/Hero';
import Services from '../components/lander/Services';
import Projects from '../components/lander/Projects';
import Contact from '../components/lander/Contact';

const IndexPage = () => (
  <Layout>
    <Hero />
    <Services />
    <Projects />
    <Contact />
  </Layout>
);

export default IndexPage;
