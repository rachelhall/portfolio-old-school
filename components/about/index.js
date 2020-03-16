import { Fragment } from "react";


import './styles.scss';

const About = () => {
  return (
    <Fragment>
      <div className="about">
        <h1>Thomas Harbin: Front End Developer</h1>
        <h2>Favorites:</h2>
        <br />
        <ul>
          <li>- React</li>
          <li>- Next JS</li>
          <li>- Vanilla JS</li>
          <li>- Cosmic JS</li>
        </ul>
        <br />

        <p>
          Thomas went from music teacher to tech. After years teaching
          university music classes, Thomas began revisiting a high school
          interest in web development and discovered the same type of creativity
          he loved about music abounded in the dev space.
        </p>
        <br />
        <p data-type data-type-min="1" data-type-max="9">
          Outside of work, Thomas enjoys playing and recording music with
          friends and skateboarding/rollerblading.
        </p>
        <p data-type data-type-min="1" data-type-max="12">
          Spending 15 years as a classical pianist taught Thomas the power of
          deep work and focused attention. Playing the piano is a lot more like
          coding than most people would think. It requires setting goals,
          working long, focused hours and self-evaluation. Classical pianists
          are good at identifying and learning new skills.
        </p>
        <br />
      </div>
    </Fragment>
  );
};

export default About;
