import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <main className='error__page'>
        <div>
          <h1>About Under Development</h1>
          <Link to='/' className='btn btn__primary'>
            Return Home
          </Link>
        </div>
      </main>
      {/* <article className='content__wrapper flex__container page__offset--nav'>
        <div>About Contents in development.</div>
      </article> */}
    </Layout>
  );
};

export default AboutPage;
