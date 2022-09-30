import '../App.css';
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import { NavLink } from 'react-router-dom';

function RenderCard({ item, page }) {
  return (
    <FadeTransform
      in
      transformProps={{
        exitTransform: 'scale(0.5) translateY(-50%)'
      }}>
      <Card style={{ width: '15rem' }} className="bg-black">
        <CardImg height='180' src={item.image} alt={item.name} />
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
          {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
          <CardText>{item.description}</CardText>
          <NavLink to={page} className=" stretched-link">link</NavLink>
        </CardBody>
      </Card>
    </FadeTransform>
  );
}

function Page2(props) {
  return (
    <div className="bg-page2-image">
      {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      <header>
        <h1>Header</h1>
      </header>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 col-md m-1">
            Text
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md m-1 d-flex justify-content-center">
            <RenderCard item={props.dish} page="/page1" />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md m-1 d-flex justify-content-center">
            <RenderCard item={props.promotion} page="/page2" />
          </div>
          <div className="col-12 col-md m-1 d-flex justify-content-center">
            <RenderCard item={props.leader} page="/page3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2;