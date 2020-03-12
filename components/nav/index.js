import "./styles.scss";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <img src="/icon/thomas.png" alt="Thomas's face" />
        </li>
        <li>
          <a href="resume.pdf" target="_blank">
            Resume
          </a>
        </li>
        <li>
          <a href="https://github.com/thomasharbin" target="_blank">
            Github
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/thomasharbin/" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:thharbin@gmail.com" target="_blank">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
