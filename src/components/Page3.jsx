import '../App.css';
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import { NavLink } from 'react-router-dom';
import { Parallax, Background } from "react-parallax";
// import IFrame from './IFrame';
import { Outlet } from 'react-router-dom/dist';

function RenderCard({ notebook }) {
  return (
    <FadeTransform
      in
      transformProps={{
        exitTransform: 'scale(0.5) translateY(-50%)'
      }}>
      <Card style={{ width: '15rem' }} className="bg-black">
        <CardImg height='180' src={notebook.image} alt={notebook.module} />
        <CardBody className="text-light">
          <CardTitle>{notebook.module}</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText></CardText>
          <NavLink to={`/page3/${notebook.id}`} className="stretched-link"></NavLink>
        </CardBody>
      </Card>
    </FadeTransform>
  );
}

function Page3(props) {
  const insideStyles = {
    background: "rgba(0, 0, 0, 0.45)",
    fontSize: 18,
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
              <h1>page 3</h1>
            </div>
            <div className="row mt-5">
              <p>This page is for displaying notes compiled with Jupyter Notebooks.</p>
            </div>
          </div>
        </Background>
        <div style={{ height: 700 }} className="row align-items-center text-white">
          <div className="col">

          </div>
        </div>

      </Parallax>
      <div className="bg-page3 pb-5">
        <div className="container text-black pb-4">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem><NavLink to="/home" className="App-link">Home</NavLink></BreadcrumbItem>
              <BreadcrumbItem>Page 3</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>
        <div className="container text-white py-5 box">
          <h2>Jupyter Notebooks</h2>
          <div className="row">
            <div className="col-12 col-md mt-1">
              <p>Below are some examples of small completed notebooks from three different topics. Click on the
                notebook to render.
              </p>
            </div>
          </div>
          <hr />




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

          <div className="row">
            <div className="col-12 col-md m-1 d-flex justify-content-center">
              <RenderCard notebook={props.notebooks.find(notebook => notebook.id === 0)} />
            </div>

            <div className="col-12 col-md m-1 d-flex justify-content-center">
              <RenderCard notebook={props.notebooks.find(notebook => notebook.id === 1)} />
            </div>
          </div>
          <hr />

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

export default Page3;