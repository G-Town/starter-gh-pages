import '../App.css';
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import { NavLink } from 'react-router-dom';
import { Parallax, Background } from "react-parallax";
import IFrame from './IFrame';
import { Outlet } from 'react-router-dom/dist';

function Notebook(props) {
  const insideStyles = {
    background: "rgba(0, 0, 0, 0.45)",
    borderRadius: 100,
    padding: 60,
    position: "absolute",
    top: "65%",
    left: "50%",
    transform: "translate(-50%,-150%)",
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
        <Background className="bg-page3-image text-white">
        <div className="container" style={insideStyles}>
            <div className="row">
              <h1>Notebook</h1>
            </div>
            <div className="row mt-5">
              <p></p>
            </div>
          </div>
        </Background>
        <div style={{ height: 0 }} className="row align-items-center text-white">
          <div className="col">
            
          </div>
        </div>

      </Parallax>
      <div className="bg-page3 pb-5">
        <div className="container text-black pb-4">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem><NavLink to="/page3" className="App-link">Page3</NavLink></BreadcrumbItem>
              <BreadcrumbItem>Notebook</BreadcrumbItem>
            </Breadcrumb>
          </div>
          {/* <header>
            <h2>Header</h2>
          </header>
          <div className="row">
            <div className="col-12 col-md m-1">
              <p>Text<br></br>
                Text</p>
            </div>
          </div>
          <hr /> */}
        </div>
        <div className="container text-white py-5 box">

          {/* <Outlet /> */}
          <IFrame url={props.module.url} />

          {/* <JupyterNotebookViewer filepath="../notebooks/assignment1.html" notebookInputLanguage="python" /> */}
          {/* <JupyterViewer rawIpynb={assignment1}/> */}
          {/* <IFrame url="../notebooks/assignment1.html" /> */}


          {/* <Card style={{ width: '15rem' }} className="bg-black">
            <CardBody className="text-light">
              <CardText>notebook</CardText>
              <NavLink to="notebook" className="stretched-link"></NavLink>
            </CardBody>
          </Card>
          <Outlet /> */}

          {/* <div className="row">
            <div className="col-12 col-md m-1 d-flex justify-content-center">
              <FadeTransform
                in
                transformProps={{
                  exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card style={{ width: '15rem' }} className="bg-black">
                  <CardImg height='180' src={process.env.PUBLIC_URL + "/assets/images/green1.jpg"} alt="green item" />
                  <CardBody className="text-light">
                    <CardTitle>Notebook</CardTitle>
                    <NavLink to={"/notebook"} className="stretched-link"></NavLink>
                  </CardBody>
                </Card>
              </FadeTransform>
            </div>
          </div> */}

          {/* <div className="row">
            <div className="col-12 col-md m-1 d-flex justify-content-center">
              <RenderCard item={props.reditem} page="/page1" />
            </div>
            <div className="col-12 col-md m-1 d-flex justify-content-center">
              <RenderCard item={props.blueitem} page="/page2" />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Notebook;