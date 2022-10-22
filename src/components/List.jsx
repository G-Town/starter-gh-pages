import '../App.css';
import React from 'react';
import { FadeTransform } from 'react-animation-components';
import { NavLink } from 'react-router-dom';
import { Parallax, Background } from "react-parallax";

function List(props) {

  const insideStyles = {
    background: "transparent",
    padding: 30,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };

  return (
    <Parallax
      blur={{ min: 0, max: 5 }}
      strength={150}
    // renderLayer={percentage => (
    //   <div>
    //     <div
    //       style={{
    //         position: "absolute",
    //         background: `white`,
    //         left: "50%",
    //         top: "50%",
    //         borderRadius: "50%",
    //         transform: "translate(-50%,-50%)",
    //         width: percentage * 500,
    //         height: percentage * 500,
    //       }}
    //     />
    //   </div>
    // )}
    >
      <Background className="bg-list-image">
        <div>
          <div style={insideStyles}></div>
        </div>
      </Background>

      <div style={{ height: 800 }} className="d-flex align-items-center justify-content-center"><h1>list</h1></div>

    </Parallax>
  )
}

export default List;