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
      <article className='hero__container--background'>
        <div className='hero__container content__wrapper'>
          <div className='hero__text'>
            <p>HELLO, I&#39;M JEFF.</p>
            <h1 className='hero__text--title'>
              Let&#39;s talk{' '}
              <span className='hero__text--highlight'>product.</span>
            </h1>
            <p>
              I work alongside organizations to find novel solutions to everyday
              challenges though user centric software.
            </p>
            <div className='hero__actions'>
              <button type='button' className='btn__primary'>
                My CV
              </button>
              <SocialLinks />
            </div>
          </div>
          <div className='hero__img'>
            <Image alt='cartoon hero avatar' fluid={fluid} />
          </div>
        </div>

        <div className='hero__background wave__back'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='100vw'
            viewBox='0 0 1920 363.189'
            preserveAspectRatio='xMidYMid meet'
          >
            <path
              className='a'
              d='M0,7.29,167.783,88.777C207.591,109.462,640,246.682,960,278.04s845.29-109.909,845.29-109.909L1920,138.37V370.479H0Z'
              transform='translate(0 -7.29)'
            />
          </svg>
        </div>
        <div className='hero__background wave__front'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='100vw'
            viewBox='0 0 1920 256'
            preserveAspectRatio='xMidYMid meet'
          >
            <path
              className='a'
              d='M0,64l160,37.3C320,139,640,213,960,240s640,5,800-5.3L1920,224v96H0Z'
              transform='translate(0 -64)'
            />
          </svg>
        </div>
      </article>
    </header>
  );
};

export default Hero;
