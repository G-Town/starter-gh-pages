import '../App.css';
import React, { Component } from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
// import { actions } from 'react-redux-form';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
// import Sidebar from './Sidebar';
import Notebook from './Notebook';
import IFrame from './IFrame';

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
        reditem={{
          name: 'Page 1',
          image: process.env.PUBLIC_URL + '/assets/images/red1.jpg',
          description: 'Blog'
        }}
        blueitem={{
          name: 'Page 2',
          image: process.env.PUBLIC_URL + '/assets/images/blue1.jpg',
          description: 'Menu'
        }}
        greenitem={{
          name: 'Page 3',
          image: process.env.PUBLIC_URL + '/assets/images/green2.webp',
          description: 'Notes'
        }}
      />
    );
  }

  const Blog = () => {
    return (
      <Page1
      blueitem={{
        name: 'Page 2',
        image: process.env.PUBLIC_URL + '/assets/images/blue1.jpg',
        description: 'Menu'
      }}
      greenitem={{
        name: 'Page 3',
        image: process.env.PUBLIC_URL + '/assets/images/green2.webp',
        description: 'Notebook'
      }}
      blogs={props.reditems} />
    );
  }

  const BlogEntry = () => {

  };

  const Menu = () => {
    return (
      <Page2
          reditem={{
            name: 'Page 1',
            image: process.env.PUBLIC_URL + '/assets/images/red1.jpg',
            description: 'Blog'
          }}
          greenitem={{
            name: 'Page 3',
            image: process.env.PUBLIC_URL + '/assets/images/green2.webp',
            description: 'Notebook'
          }}
          dishes={props.blueitems} />
    )
  }

  const DishWithId = () => {
    const id = parseInt(useParams().dishId, 10);
    return (
      <DishDetail dish={props.blueitems.filter((dish) => dish.id === id)[0]}
        comments={props.comments.filter((comment) => comment.dishId === id)}
      />
    );
  };

  const Notes = () => {
    return (
      <Page3
          reditem={{
            name: 'Page 1',
            image: process.env.PUBLIC_URL + '/assets/images/red1.jpg',
            description: 'Blog'
          }}
          blueitem={{
            name: 'Page 2',
            image: process.env.PUBLIC_URL + '/assets/images/blue1.jpg',
            description: 'Menu'
          }}
          notebooks={props.greenitems} />
    );
  }

  const NotebookModule = () => {
    const id = parseInt(useParams().notebookId, 10);
    return (
      <Notebook module={props.greenitems.find(notebook => notebook.id === id)} />
    );
  }

  return (
    <div>
      <Header />
      {/* <Sidebar /> */}
      <Routes>
        <Route exact path="/home" element={<HomePage />} />
        <Route path="/list" element={<List />} />
        <Route path="/about" element={<About />} />

        <Route path="/page1" element={<Blog />} />


        <Route path="/page2" element={<Menu />} />
        <Route path="page2/:dishId" element={<DishWithId />} />


        <Route path="/page3" element={<Notes />} />
        <Route path="page3/:notebookId" element={<NotebookModule />} />


        {/* <Route path="page3/notebook" element={<Notebook />}>
          <Route path="" element={<IFrame url={process.env.PUBLIC_URL + "/notebooks/assignment1.html"} />} />
        </Route> */}

        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
      <Footer />
    </div>
  )
}


export default connect(mapStateToProps)(Main);