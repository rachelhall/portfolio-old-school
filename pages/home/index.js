import Draggable, { DraggableCore } from "react-draggable";

import "../home/styles.scss";

//componenets
import Window from "..//../components/window";

const Home = () => {
  return (
    <div className="entire-display">
      <Draggable>
        <div>
          <Window />
        </div>
      </Draggable>
    </div>
  );
};

export default Home;
