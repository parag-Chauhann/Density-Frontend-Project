import React, { useEffect } from 'react';
import hill1 from "./Home/Img/hill1.png";
import hill2 from "./Home/Img/hill2.png";
import hill3 from "./Home/Img/hill3.png";
import hill4 from "./Home/Img/hill4.png";
import hill5 from "./Home/Img/hill5.png";
import tree from "./Home/Img/tree.png";
import leaf from "./Home/Img/leaf.png";
import plant from "./Home/Img/plant.png";
import "./Home/Home.css";


const Effect = () => {
  useEffect(() => {
    const handleScroll = () => {
      let value = window.scrollY;

      // Adjust these values as needed for your specific layout
      document.getElementById('text').style.marginTop = value * 2.5 + "px";
      document.getElementById('leaf').style.top = value * -1.5 + "px";
      document.getElementById('leaf').style.left = value * 1.5 + "px";
      document.getElementById('hill5').style.left = value * 1.5 + 'px';
      document.getElementById('hill4').style.left = value * -1.5 + 'px';
      document.getElementById('hill1').style.top = value * 1 + 'px';
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="body">

    
      <div className="container">

        <img alt="tree" src={hill1} id="hill1" />
        <img alt="tree" src={hill2} id="hill2" />
        <img alt="tree" src={hill3} id="hill3" />
        <img alt="tree" src={hill4} id="hill4" />
        <img alt="tree" src={hill5} id="hill5" />
        <img alt="tree" src={tree} id="tree" />
        <h2 id="text">Density Animated Website Project</h2>
        <img alt="tree" src={leaf} id="leaf" />
        <img alt="tree" src={plant} id="plant" />
      </div>

    </div>
  );
};

export default Effect;
