import '../App.css';
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
// import { FadeTransform } from 'react-animation-components';

import logo from '../logo.svg';

// function RenderCard({ item, isLoading, errMess }) {
//   if (isLoading) {
//     return (
//       <Loading />
//     );
//   }
//   else if (errMess) {
//     return (
//       <h4>{errMess}</h4>
//     );
//   }
//   else
//     return (
//       <FadeTransform
//         in
//         transformProps={{
//           exitTransform: 'scale(0.5) translateY(-50%)'
//         }}>
//         <Card>
//           <CardImg src={baseUrl + item.image} alt={item.name} />
//           <CardBody>
//             <CardTitle>{item.name}</CardTitle>
//             {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
//             <CardText>{item.description}</CardText>
//           </CardBody>
//         </Card>
//       </FadeTransform>
//     );
// }

function Home(props) {
  return (
    <div className="bg-image">
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

    </div>
  );
}

export default Home;