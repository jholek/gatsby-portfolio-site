import React from 'react';

const Projects = () => (
  <section>
    <article className='projects__container--background'>
      <div className='hero__background wave__front--bottom'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='100vw'
          viewBox='0 0 1920 256'
          preserveAspectRatio='xMidYMid meet'
        >
          <path
            class='a'
            d='M0,64l160,37.3C320,139,640,213,960,240s640,5,800-5.3L1920,224v96H0Z'
            transform='translate(1920 320) rotate(180)'
          />
        </svg>
      </div>
      <div className='hero__background wave__back--bottom'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='100vw'
          viewBox='0 0 1920 363.189'
          preserveAspectRatio='xMidYMid meet'
        >
          <path
            class='a'
            d='M0,7.29,167.783,88.777C207.591,109.462,640,246.682,960,278.04s845.29-109.909,845.29-109.909L1920,138.37V370.479H0Z'
            transform='translate(1920 370.479) rotate(180)'
          />
        </svg>
      </div>
    </article>
  </section>
);

export default Projects;
