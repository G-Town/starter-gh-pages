import '../App.css';
import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Breadcrumb, BreadcrumbItem,
  UncontrolledCollapse, Button, ListGroup, ListGroupItem
} from 'reactstrap';
import { Fade, FadeTransform } from 'react-animation-components';
import { Link, NavLink } from 'react-router-dom';
import { Parallax, Background } from "react-parallax";
import BlogList from './BlogList';
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

// function RenderBlog({ blogs }) {
//   const bloglist = blogs.map((blog) => {
//     return (
//       <Fade in>
//         <div className="blog-preview p-5" key={blog.id}>
//           <p>
//             {new Intl.DateTimeFormat('en-US', {
//               year: 'numeric',
//               month: 'long',
//               day: '2-digit'
//             }).format(new Date(blog.date))}
//           </p>
//           {/* <Link to={`/blogs/${blog.id}`}> */}
//           <h2>{blog.title}</h2>
//           <p>
//             {blog.body}
//             Written by {blog.author}</p>
//           {/* </Link> */}
//         </div>
//       </Fade>
//     );
//   })
//   return (
//     bloglist
//   );
// }



function Page1(props) {
  const insideStyles = {
    background: "rgba(0, 0, 0, 0.45)",
    fontSize: 18,
    borderRadius: 100,
    padding: 60,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-150%)",
  };
  // const bloglist = props.blogs.map((blog) => {
  //   return (
  //     <li>
  //     <Fade in>
  //       <div className="blog-preview p-5" key={blog.id}>
  //         <p>
  //           {new Intl.DateTimeFormat('en-US', {
  //             year: 'numeric',
  //             month: 'long',
  //             day: '2-digit'
  //           }).format(new Date(blog.date))}
  //         </p>
  //         {/* <Link to={`/blogs/${blog.id}`}> */}
  //         <h2>{blog.title}</h2>
  //         <p>
  //           {blog.body}
  //           Written by {blog.author}</p>
  //         {/* </Link> */}
  //       </div>
  //     </Fade>
  //     </li>
  //   );
  // })
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
        <Background className="bg-page1-image text-white">
          <div className="container" style={insideStyles}>
            <div className="row">
              <h1>page 1</h1>
            </div>
          </div>
        </Background>

        <div style={{ height: 700 }} className="row align-items-center text-white">
          <div className="col">

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
        </div>

        <div className="container-fluid text-white p-5 box">
          <h2>Blog</h2>
          <div className="row">
            <p>blog entries organized chronologically<br />
              Latest blogs displayed on the left. Navigation bar on the right with all blogs by year/month.
            </p>
          </div>

          <hr />
          <div className="row">
            <div className="col-8 verticalLine">

              <div className="blog-list">
                {props.blogs.map(blog => (
                  <div className="blog-preview p-5" key={blog.id}>
                    <div className="date">
                      <p>
                        {new Intl.DateTimeFormat('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: '2-digit'
                        }).format(new Date(blog.date))}
                      </p>
                    </div>
                    {/* <Link to={`/blogs/${blog.id}`}> */}
                    <h2>{blog.title}</h2>
                    {/* </Link> */}
                    <p>
                      {blog.body}
                    </p>
                    <div className="author">
                      -- Written by {blog.author}
                    </div>
                  </div>

                ))}
              </div>

            </div>

            <div className="col-4">
              Blog Archive
              <div className="archiveList">
                <ul>
                  <li>
                    <a className="">
                      <span classname="arrow" id="toggle-21">▼</span>2021
                    </a>
                    <UncontrolledCollapse toggler="#toggle-21">
                      <ul>
                        <li>
                          <a className="">
                            <span classname="arrow" id="toggle-21-8">▼</span>Oct
                          </a>
                          <UncontrolledCollapse toggler="#toggle-21-8">
                            <ul>
                              <li>
                              <a className="">1st Blog</a>
                              </li>
                            </ul>
                          </UncontrolledCollapse>
                        </li>
                      </ul>
                    </UncontrolledCollapse>
                  </li>
                  <li>
                    <a className="">
                      <span classname="arrow" id="toggle-20">▼</span>2020
                    </a>
                    <UncontrolledCollapse toggler="#toggle-20">
                      <ul>
                        <li>
                          <a className="">
                            <span classname="arrow" id="toggle-20-1">▼</span>Jan
                          </a>
                          <UncontrolledCollapse toggler="#toggle-20-1">
                            <ul>
                              <li>
                              <a className="">2nd Blog</a>
                              </li>
                            </ul>
                          </UncontrolledCollapse>
                        </li>
                      </ul>
                    </UncontrolledCollapse>
                  </li>
                  <li>
                    <a className="">
                      <span classname="arrow" id="toggle-19-5">▼</span>2019
                    </a>
                    <UncontrolledCollapse toggler="#toggle-19-5">
                      <ul>
                        <li>
                          <a className="">
                            <span classname="arrow" id="toggle-19-5">▼</span>May
                          </a>
                          <UncontrolledCollapse toggler="#toggle-19-5">
                            <ul>
                              <li>
                              <a className="">3rd Blog</a>
                              </li>
                            </ul>
                          </UncontrolledCollapse>
                        </li>
                      </ul>
                    </UncontrolledCollapse>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>



        <div className="container-fluid text-white py-5 box">



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