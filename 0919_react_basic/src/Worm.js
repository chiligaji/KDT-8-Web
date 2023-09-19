// function 컴포넌트명 OR const 컴포넌트명 = () => {}

import "./worm.css";
import grass from "./grass.png";

function Worm() {
  return (
    <>
      <div className="circle head">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
        <div className="circle circle4"></div>
        <div className="circle circle6"></div>
        <div className="circle circle7"></div>
      </div>
      <img src={grass} alt="grass" width="400px" height="100px" />
    </>
  );
}

export default Worm;
