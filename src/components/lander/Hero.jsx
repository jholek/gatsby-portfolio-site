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
      <article>
        <div className='hero__container content__wrapper'>
          <div className='hero__text'>
            <p>HELLO, I&#39;M JEFF!</p>
            <h1 className='hero__text--title'>
              Let&#39;s talk{' '}
              <span className='hero__text--highlight'>product.</span>
            </h1>
            <p>
              Whether it&#39;s bringing a vision to life, delighting users or
              simply trying to raise the bar, I work alongside organizations to
              find novel solutions to everyday challenges.
            </p>
            <div className='hero__actions'>
              <button type='button' className='btn__primary'>
                My CV
              </button>
              <SocialLinks />
            </div>
          </div>
          <div className='hero__img'>
            <Image fluid={fluid} />
          </div>
        </div>
      </article>
    </header>
  );
};

export default Hero;
