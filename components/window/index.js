import { Fragment, useState, useRef } from "react";

//styles
import "./styles.scss";
const Window = ({ style }) => {
  const element = useRef();
  //   const dragElement = element => {
  //     const [position1, setPosition1] = useState(0);
  //     const [position2, setPosition2] = useState(0);
  //     const [position3, setPosition3] = useState(0);
  //     const [position4, setPosition4] = useState(0);

  //     const dragMouseDown = (e, element) => {
  //         e = e || window.event;
  //         e.preventDefault();
  //         setPosition3((position3 = e.clientX));
  //         setPosition4((position4 = e.clientY));
  //         document.onmouseup = closeDragElement;
  //         element.current.onmousedown = elementDrag;
  //     };

  //     console.log(element)

  //     // element.current.onmousedown = dragMouseDown;

  //     const elementDrag = (e, position3, position4) => {
  //         e = e || window.event;
  //         e.preventDefault();
  //         setPosition1(position3 - e.clientX);
  //         setPosition2(position4 - e.clientY);
  //         setPosition3(e.clientX);
  //         setPosition4(e.clientY);
  //         element.style.top = element.offsetTop - pos2 + "px";
  //         element.style.left = element.offsetLeft - pos2 + "px";
  //     };

  //     const closeDragElement = () => {
  //         console.log(`closeDragElement`);
  //         document.onmouseup = null;
  //         document.onmousemove = null;
  //     };
  //   };

  //   dragElement(element);
  //   };
  return (
    <Fragment>
      <div className="computer-screen" ref={element}>
        <h1>Thomas Harbin: Front End Developer</h1>

        <h2>Favorites:</h2>
        <ul>
          <li>- React</li>
          <li>- Next JS</li>
          <li>- Vanilla JS</li>
          <li>- Cosmic JS</li>
        </ul>

        <p>
          Thomas went from music teacher to tech. After years teaching
          university music classes, Thomas began revisiting a high school
          interest in web development and discovered the same type of creativity
          he loved about music abounded in the dev space.
        </p>
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

        <nav>
          <ul>
            <a href="resume.pdf" target="_blank">
              <li>Resume</li>
            </a>
            <a href="https://github.com/thomasharbin" target="_blank">
              <li>Github</li>
            </a>
            <a href="https://www.linkedin.com/in/thomasharbin/" target="_blank">
              <li>LinkedIn</li>
            </a>
            <a href="mailto:thharbin@gmail.com" target="_blank">
              <li>Contact</li>
            </a>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default Window;
