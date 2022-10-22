import '../App.css';
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import { NavLink } from 'react-router-dom';
import { Parallax, Background } from "react-parallax";
import Sidebar from './Sidebar';

function RenderCard({ item, page }) {
  return (
    <FadeTransform
      in
      transformProps={{
        exitTransform: 'scale(0.5) translateY(-50%)'
      }}>
      <Card style={{ width: '15rem' }} className="bg-black">
        <CardImg height='180' src={item.image} alt={item.name} />
        <CardBody className="text-light">
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
          <CardText>{item.description}</CardText>
          <NavLink to={page} className="stretched-link"></NavLink>
        </CardBody>
      </Card>
    </FadeTransform>
  );
}

function Page1(props) {
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
        <Background className="bg-page1-image">
          <div>
            <div style={insideStyles}></div>
          </div>
        </Background>

        <div style={{ height: 700 }} className="row align-items-center text-black">
          <div classname="col">
            <h1>page 1</h1>
            add icon
          </div>
        </div>
      </Parallax>

      <div className="bg-page1 pb-5">
        <div className="container text-black pb-4">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem><NavLink to="/home" className="App-link">Home</NavLink></BreadcrumbItem>
              <BreadcrumbItem>Page 1</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <header>
            <h2>Blog</h2>
          </header>
          <div className="row">
            <div className="col-12 col-md m-1">
              <p>blog entries organized chronologically<br></br>
                </p>
            </div>
          </div>
          <hr />
        </div>
        <div className="container text-white py-5 box">
          
          <div className="row">
            <div className="col-12 col-md m-1 d-flex justify-content-center">
              <RenderCard item={props.blueitem} page="/page2" />
            </div>
            <div className="col-12 col-md m-1 d-flex justify-content-center">
              <RenderCard item={props.greenitem} page="/page3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page1;