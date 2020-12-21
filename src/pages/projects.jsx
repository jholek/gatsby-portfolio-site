import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';

const ProjectsPage = () => {
  return (
    <Layout>
      <main className='error__page'>
        <div>
          <h1>Projects Under Development</h1>
          <Link to='/' className='btn btn__primary'>
            Return Home
          </Link>
        </div>
      </main>
      {/* <div className='content__wrapper flex__container page__offset--nav'>
        Projects Content in development.
      </div> */}
    </Layout>
  );
};

export default ProjectsPage;
