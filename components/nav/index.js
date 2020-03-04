import "./styles.scss"

const Nav = () => {
  return (
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
  );
};

export default Nav;
