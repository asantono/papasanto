import React, { forwardRef } from "react";
import portfolioecom from "../../imgs/portfolio-ecom.png";
import chewzeelargelogo from "../../imgs/chewzeebluelogo.png";

const Portfolio = forwardRef((props, ref) => {
  return (
    <div className="portfolio">
      <div className="portfolio__title" ref={ref}>
        Portfolio
      </div>
      <a
        className="portfolio__project portfolio__project--reverse"
        href="https://e-commerce-papa-santo.herokuapp.com/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="portfolio__project--left">
          <div>
            <div className="portfolio__project--title">e-com</div>
            <div className="portfolio__project--underline" />
          </div>
          <div className="portfolio__project--story">
            e-com was built to resemble Udemy. Users can create, search, upload
            images, and purchase courses (with full Stripe integration).
            <div className="portfolio__project--padding" />
            Built with React, Nodejs, MongoDb, Express, Mongoose and more.
            <div className="portfolio__project--padding" />
            <div className="italics">
              Heroku may take up to 30 seconds to load
            </div>
          </div>
        </div>
        <div className="portfolio__project--right">
          <img src={portfolioecom} alt="ecom" />
        </div>
      </a>
      <div className="portfolio__project--and">&</div>

      <a
        className="portfolio__project"
        href="https://expo.io/@asantono/projects/chewzee"
        target="_blank"
        rel="noreferrer"
      >
        <div className="portfolio__project--left">
          <img src={chewzeelargelogo} alt="ecom" />
        </div>

        <div className="portfolio__project--right">
          <div>
            <div className="portfolio__project--title">chewzee</div>
            <div className="portfolio__project--underline" />
          </div>
          <div className="portfolio__project--story">
            chewzee is a react native app available on ios and android. If you
            have ever asked "What do you want to eat?" this app is for you!
            <div className="portfolio__project--padding" />
            Built with React-Native, Google Firebase, Expo, Redux and more.
            <div className="portfolio__project--padding" />
            <div className="italics">
              iOS app available. Contact me for access
            </div>
          </div>
        </div>
      </a>
    </div>
  );
});

export default Portfolio;
