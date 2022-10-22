import React, { Component } from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './Header'
import Home from './Home';
import List from './List';
import About from './About';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Footer from './Footer';
import Menu from './Menu';
import DishDetail from './DishDetail';
import Sidebar from './Sidebar';

const mapStateToProps = state => {
  return {
    reditems: state.reditems,
    comments: state.comments,
    blueitems: state.blueitems,
    greenitems: state.greenitems
  }
}

// const mapDispatchToProps = dispatch => ({
//   postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
//   fetchDishes: () => { dispatch(fetchDishes()) },
//   resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
//   fetchComments: () => dispatch(fetchComments()),
//   fetchPromos: () => dispatch(fetchPromos()),
//   fetchLeaders: () => { dispatch(fetchLeaders()) },
//   postFeedback: (firstname, lastname, telnum, email, contactType, message) => dispatch(postFeedback(firstname, lastname, telnum, email, contactType, message))
// });

function Main(props) {

  // componentDidMount() {
  //   props.fetchDishes();
  //   props.fetchComments();
  //   props.fetchPromos();
  //   props.fetchLeaders();
  // }

  const HomePage = () => {
    return (
      <Home
        reditem={props.reditems.filter((reditem) => reditem.featured)[0]}
        // blueitem={props.blueitems.find((blueitem) => blueitem.featured)}
        blueitem={{
          name: 'Page 2',
          image: process.env.PUBLIC_URL + '/assets/images/blue1.jpg',
          description: 'Menu'
        }}
        greenitem={props.greenitems.filter((greenitem) => greenitem.featured)[0]}
      />
    );
  }

  const DishWithId = () => {
    const id = parseInt(useParams().dishId, 10);
    return (
      <DishDetail dish={props.blueitems.filter((dish) => dish.id === id)[0]}
      comments={props.comments.filter((comment) => comment.dishId === id)}
      />
    );
  };

  return (
    <div>
      <Header />
      {/* <Sidebar /> */}
      <Routes>
        <Route exact path="/home" element={<HomePage />} />
        <Route path="/list" element={<List />} />
        <Route path="/about" element={<About />} />

        <Route path="/page1" element={<Page1
          blueitem={props.blueitems.filter((blueitem) => blueitem.featured)[0]}
          greenitem={props.greenitems.filter((greenitem) => greenitem.featured)[0]}
        />} />

        <Route path="/page2" element={<Page2 dishes={props.blueitems} />}>
          {/* <Route path=":dishId" element={<DishWithId />} /> */}
        </Route>
        <Route path="page2/:dishId" element={<DishWithId />} />
        <Route path="/page3" element={<Page3
          reditem={props.reditems.filter((reditem) => reditem.featured)[0]}
          blueitem={props.blueitems.filter((blueitem) => blueitem.featured)[0]}
        />} />

        {/* <Route path="/menu" element={<Menu dishes={props.blueitems} />}>
            <Route path=":dishId" element={<DishWithId />} />
          </Route> */}

        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
      <Footer />
    </div>
  )
}


export default connect(mapStateToProps)(Main);