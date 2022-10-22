import '../App.css';
import React, { Component } from 'react';
import { Parallax, Background } from "react-parallax";

class About extends Component {

  render() {
    const insideStyles = {
      background: "transparent",
      padding: 30,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
    };
    return (
      <>
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
          <Background className="bg-about-image">
            <div>
              <div style={insideStyles}></div>
            </div>
          </Background>

          <div style={{ height: 800 }} className="row align-items-center">
            <div className="col">
              <h2>about</h2>
              <main>
                <p>This section contains information about...</p>
              </main>
            </div>
          </div>

        </Parallax>
        <div className="bg-about">
          <div className="container d-flex align-items-center justify-content-center text-black">
            <div style={{ height: 800 }}>
              <h2>about</h2>
              <main>
                <p>This section contains information about...</p>
              </main>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default About;