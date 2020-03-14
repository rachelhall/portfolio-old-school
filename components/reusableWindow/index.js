import "./styles.scss";

const ReusableWindow = ({ handleClick, title, bodyContent, windowOpen }) => {
  return (
    <div className="margin-container">
        {windowOpen ? 
        <div className="window">
        <header>
          <p className="close-button" onClick={handleClick}>
            &#10006;
          </p>
          <p>{title}</p>
        </header>
        <div className="body-content">{bodyContent}</div>
      </div> :
      <div></div>
        }
      
    </div>
  );
};

export default ReusableWindow;
