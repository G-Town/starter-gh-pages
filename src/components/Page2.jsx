import '../App.css';
import React from 'react';
import { Parallax, Background } from "react-parallax";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardSubtitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import { Link, NavLink } from 'react-router-dom';
import FeatureCarousel from './FeatureCarousel';
import { Outlet } from "react-router-dom";
import Menu from './Menu';

function RenderMenuItem({ dish }) {
  return (
    <FadeTransform
      in
      transformProps={{
        exitTransform: 'scale(0.5) translateY(-50%)'
      }}>
      <Card key={dish.id}>
        <Link to={`/page2/${dish.id}`}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle className="text-white">{dish.name}</CardTitle>
          </CardImgOverlay>
        </Link>
      </Card>
    </FadeTransform>
  );
}

function Page2(props) {
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
  const mainmenu = props.dishes.filter(dish => dish.type === 'main').map((maindish) => {
    return (
      <div className="col-10 col-md-5 col-lg-4 col-xxl-3 mb-5">
        <RenderMenuItem dish={maindish} />
      </div>
    );
  });
  const sidemenu = props.dishes.filter(dish => dish.type === 'side').map((sidedish) => {
    return (
      <div className="col-10 col-md-5 col-lg-4 col-xxl-3 mb-5">
        <RenderMenuItem dish={sidedish} />
      </div>
    );
  });
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
        <Background className="bg-page2-image text-white">
          <div className="container" style={insideStyles}>
            <div className="row">
              <h1>page 2</h1>
            </div>
            <div className="row mt-5">
              <p>This page is designed to showcase a menu of items such as food or any merchandise.</p>
            </div>
          </div>
        </Background>

        <div style={{ height: 700 }} className="row align-items-center text-white">
          <div className="col">

          </div>
        </div>
      </Parallax>

      <div className="bg-page2 pb-5">
        <div className="container text-black pb-4">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem><NavLink to="/home" className="App-link">Home</NavLink></BreadcrumbItem>
              <BreadcrumbItem>Page 2</BreadcrumbItem>
            </Breadcrumb>
          </div>
        </div>

        <div className="container-fluid text-white p-5 box">
          <h2>Featured Items</h2>
          <p>Below are selected items to be featured.<br />
          Featured items are selected and displayed in a rotating carousel with image and description.</p>

          <div classname="col">
            <FeatureCarousel items={props.dishes.filter((item) => item.featured)} />
          </div>
          <hr />

          <Outlet />

          <h2>Menu</h2>
          <p>Menus include images and descriptions with highlited details.<br />
            Click on the Menu buttons below to see the full selection of items.
            Click on an individula item to see the details. Each item has a placeholder
            image and example details and comments.</p>

          <div className="row justify-content-center">
            <button className="btn btn-primary mb-3 mx-5 col-2" type="button" data-bs-toggle="collapse"
              data-bs-target="#mainmenu" aria-expanded="false" aria-controls="">Main</button>

            <div className="row justify-content-center mb-5 collapse" id="mainmenu">
              <div className="my-3">
                <h3>Main Items</h3>
              </div>
              {mainmenu}
              <hr />
            </div>
          </div>
          <div className="row justify-content-center">

            <button className="btn btn-primary mb-3 mx-5 col-2" type="button" data-bs-toggle="collapse"
              data-bs-target="#sidemenu" aria-expanded="false" aria-controls="">Side</button>

            <div className="row justify-content-center mb-5 collapse" id="sidemenu">
              <div className="my-3">
                <h3>Side Items</h3>
              </div>
              {sidemenu}
              <hr />
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Page2;