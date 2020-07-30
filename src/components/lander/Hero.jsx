import React from 'react';
import { Link } from 'gatsby';

const Hero = () => (
  <header>
    Hero Section
    <article>
      <h6>Hello, I'm Jeff</h6>
      <Link to='/about/'>More About Me --></Link>
      <h1>Let's talk product.</h1>
      <p>
        Whether it’s bringing a vision to life, delighting users or simply
        trying to raise the bar, I work alongside organizations to find novel
        solutions to everyday challenges.
      </p>
      <p>Have a project in mind?</p>
      <button>Let's Chat</button>
    </article>
  </header>
);

export default Hero;
