import '../App.css';
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';
import { NavLink } from 'react-router-dom';
import { Loading } from './Loading';
import { baseUrl } from '../shared/baseUrl';

// import logo from '../logo.svg';

function RenderCard({ item, page }) {
  return (
    <React.Fragment>
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
            <NavLink to="/page1" className="nav-link stretched-link">link</NavLink>
          </CardBody>
        </Card>
      </FadeTransform>
    </React.Fragment>
  );
}

function Home(props) {
  return (
    <div className="bg-home-image">
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
            <RenderCard item={props.dish} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md m-1 d-flex justify-content-center">
            <RenderCard item={props.promotion} link="/page2" />
          </div>
          <div className="col-12 col-md m-1 d-flex justify-content-center">
            <RenderCard item={props.leader} link="/page3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;