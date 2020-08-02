import React from 'react';
import Image from 'gatsby-image';
import { Link, graphql, useStaticQuery } from 'gatsby';

import SocialLinks from '../SocialLinks';

const query = graphql`
  {
    file(relativePath: { eq: "hero-img-temp.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query);

  return (
    <header>
      Hero Section
      <article>
        <div className='flex-container'>
          <div className='hero-text'>
            <h6>Hello, I'm Jeff</h6>
            <Link to='/about/'>More About Me --></Link>
            <h1>Let's talk product.</h1>
            <p>
              Whether it’s bringing a vision to life, delighting users or simply
              trying to raise the bar, I work alongside organizations to find
              novel solutions to everyday challenges.
            </p>
            <p>Have a project in mind?</p>
            <button>Let's Chat</button>
            <SocialLinks />
          </div>
          <div className='hero-img'>
            {/* Flexbox conflict with Fluid style Gatsby Image. Just make static? */}
            <Image fluid={fluid} />
          </div>
        </div>
      </article>
    </header>
  );
};

export default Hero;
