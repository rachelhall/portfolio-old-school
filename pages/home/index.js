import Draggable, { DraggableCore } from "react-draggable";

import "../home/styles.scss";

//componenets
import Window from "../../components/window";
import Websites from "../../components/Websites"

const Home = () => {
  return (
    <div className="entire-display">
      <Draggable>
        <div>
          <Window />
        </div>
      </Draggable>
      <Draggable>
        <div>
          <Websites />
        </div>
      </Draggable>
    </div>
  );
};

export default Home;
