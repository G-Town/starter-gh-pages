import React, { Component } from 'react';
import { Routes, Route, Navigate, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Header from './Header'
import Home from './Home';
import About from './About';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
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

class Main extends Component {

  // componentDidMount() {
  //   this.props.fetchDishes();
  //   this.props.fetchComments();
  //   this.props.fetchPromos();
  //   this.props.fetchLeaders();
  // }

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/page1" element={<Page1
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
           />} />
           <Route path="/page2" element={<Page2
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
           />} />
           <Route path="/page3" element={<Page3
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
           />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Main);