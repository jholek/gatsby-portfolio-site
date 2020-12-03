import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const Error = () => {
  return (
    <Layout>
      <main className='error__page'>
        <div>
          <h1>Uh oh! There&apos;s nothing to see here...</h1>
          <Link to='/' className='btn__primary'>
            Return Home
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default Error;
