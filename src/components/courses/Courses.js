import React from "react";
import eCommerce from "../../imgs/E-Commerce.png";
import javascriptToolkit from "../../imgs/Javascripttoolkit.png";
import javascriptInterview from "../../imgs/JavascriptInterviewQuestions.png";
import redux from "../../imgs/redux.jpeg";
import reactrouter from "../../imgs/reactrouter.png";
import sortable from "../../imgs/sortable.png";

const Courses = () => {
  return (
    <div className="courses">
      <div className="courses__title">My Free Courses</div>
      <div className="courses__highlighted">
        <a
          href="https://youtube.com/playlist?list=PL_kocBMOO_TxyQvK_u2AaCEwo4A59TTtN"
          target="_blank"
          rel="noreferrer"
        >
          <div className="courses__course--wrapper">
            <img className="courses__course" src={eCommerce} alt="ecom" />
            <div className="courses__course--details">
              Build a full stack MERN e-commerce application. You will develop a
              dynamic e-commerce website, while learning api development,
              database management, scss, Stripe's api (for payments) and more.
              <div className="margin__text" />
              <div className="italics">
                Keep an eye out for my series on image uploads!
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://youtube.com/playlist?list=PL_kocBMOO_TwZdvjXMxhy4W0HvLceVFSK"
          target="_blank"
          rel="noreferrer"
        >
          <div className="courses__course--wrapper">
            <img
              className="courses__course"
              src={javascriptToolkit}
              alt="toolkit"
            />
            <div className="courses__course--details">
              Learn the web development skills you need for your career. This
              course goes over important javascript features and allows you to
              dive right into development with react and more.
              <div className="margin__text" />
              <div className="italics">
                Includes: api calls, async await, object oriented programming,
                array methods and more!
              </div>
            </div>
          </div>
        </a>
        <a
          href="https://youtube.com/playlist?list=PL_kocBMOO_TxLSn7PXYENRHJSD6PalfMF"
          target="_blank"
          rel="noreferrer"
        >
          <div className="courses__course--wrapper">
            <img
              className="courses__course"
              src={javascriptInterview}
              alt="Interview Qs"
            />
            <div className="courses__course--details">
              Solve coding interview questions. Here, you will focus on solving
              interview questions in different ways. And, yes ... we do cover
              recursion ... often.
              <div className="margin__text" />
              <div className="italics">
                Questions come from Hackerrank and some of the most famous
                searching and sorting algorithms that you're already using!
              </div>
            </div>
          </div>
        </a>

        <a
          href="https://youtube.com/playlist?list=PL_kocBMOO_TzYhe9EczybRl_2gc3mWXTk"
          target="_blank"
          rel="noreferrer"
        >
          <div className="courses__course--wrapper">
            <img className="courses__course" src={sortable} alt="sortable" />
            <div className="courses__course--details">
              Implement react-sortable-hoc and make a drag and drop list. This
              list will update local state and keep track of our list elements.
              Drag n' Drop lists can create a better and more immersive
              experience for your end user.
              <div className="margin__text" />
              <div className="italics">
                We build and style the list with scss in this series!
              </div>
            </div>
          </div>
        </a>

        <a href="https://youtu.be/3bpMeVrdsjs" target="_blank" rel="noreferrer">
          <div className="courses__course--wrapper">
            <img
              className="courses__course"
              src={reactrouter}
              alt="react-router-dom"
            />
            <div className="courses__course--details">
              React-Router-Dom is the most widely used navigation package for
              React applications. Here you'll learn how to implement the package
              and handle routing in under 15 minutes! Let's get started.
              <div className="margin__text" />
              <div className="italics">
                We use this package in the e-commerce course as well!
              </div>
            </div>
          </div>
        </a>

        <a
          href="https://youtube.com/playlist?list=PL_kocBMOO_TymuwYrOA-Wj2jyp9l9agvb"
          target="_blank"
          rel="noreferrer"
        >
          <div className="courses__course--wrapper">
            <img className="courses__course" src={redux} alt="redux" />
            <div className="courses__course--details">
              Redux, Redux-Thunk, Redux-Saga ... you learn it all in this
              series. Redux allows you to use a central store of state, and
              react-redux allows you to access your centeral store of
              application state in any component.
              <div className="margin__text" />
              <div className="italics">
                If this is your first look at redux, please start with the first
                video!
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="courses__more">
        <a
          href="https://www.youtube.com/channel/UC3b871DqOlA5tKbizv4J6mg"
          target="_blank"
          rel="noreferrer"
        >
          see all courses
        </a>
      </div>
    </div>
  );
};

export default Courses;
