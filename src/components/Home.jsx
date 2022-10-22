import '../App.css';
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardGroup } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import { NavLink } from 'react-router-dom';
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
import { Loading } from './Loading';
import { baseUrl } from '../shared/baseUrl';
import { FaThLarge } from 'react-icons/fa';

// import logo from '../logo.svg';

function RenderCard({ item, page }) {
  return (
    <FadeTransform
      in
      transformProps={{
        exitTransform: 'scale(0.5) translateY(-50%)'
      }}>
      <Card style={{ width: '15rem' }} className="bg-black">
        <CardImg height='190' src={item.image} alt={item.name} />
        <CardBody className="text-light">
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
          <CardText>{item.description}</CardText>
          <NavLink to={page} className="nav-link stretched-link"></NavLink>
        </CardBody>
      </Card>
    </FadeTransform>
  );
}

function Home(props) {

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
        <Background className="bg-home-image text-white">
          <div className="container" style={insideStyles}>
            <div className="row">
              <h1>home</h1>
            </div>
            <div className="row mt-5">
              <p>This is an example home page of an example/test website. It will be used as a testing ground to
                experiment with react app designs and provide skeletons to build larger and more complicated apps with.</p>
            </div>
          </div>
        </Background>

        <div style={{ height: 700 }} className="row align-items-center">
          <div className="col text-white">

          </div>
        </div>

      </Parallax>
      <div className="bg-home py-5">
        {/* <div className="container">

        </div> */}
        {/* <div className="container text-black py-4">
          <header>
            <h2>Featured Items</h2>
          </header>
          <div className="row">
            <div className="col-12 col-md m-1">
              <p>Display three featured items of different categories with a small image and description.
                Click to navigate to corresponding page.<br></br>
                Categories of featured items are color coded and are matched with different page styles.</p>
            </div>
          </div>
          <hr />
        </div> */}

        <div className="container-fluid text-white box p-5">
          <header>
            <h2>Featured Pages</h2>
          </header>
          <div className="row">
            <div className="col-12 col-md m-1">
              <p>This section displays featured items, either specific items from corresponding page style or
                featured pages.<br /><br />
                Below are three links to pages styled for different purposes. For easier handling and organizing of 
                example data, the pages are color coded to match the example data objects being used.<br />
                Click to navigate to corresponding page.</p>
            </div>
          </div>
          <hr />
          <div className="row d-flex justify-content-center my-5">
            <div className="col col-8 col-md-6 col-xxl-3 d-flex justify-content-center my-5">
              <RenderCard item={props.reditem} page="/page1" />
            </div>
            <div className="col col-8 col-md-6 col-xxl-3 d-flex justify-content-center my-5">
              <RenderCard item={props.blueitem} page="/page2" />
            </div>
            <div className="col col-8 col-md-6 col-xxl-3 d-flex justify-content-center my-5">
              <RenderCard item={props.greenitem} page="/page3" />
            </div>
          </div>
          {/* <div className="row">
            <div className="col-12 col-md m-1 d-flex justify-content-center">
              <RenderCard item={props.blueitem} page="/page2" />
            </div>
            <div className="col-12 col-md m-1 d-flex justify-content-center">
              <RenderCard item={props.greenitem} page="/page3" />
            </div>
          </div> */}
        </div>
      </div>
      <div></div>

    </>
  );
}

export default Home;