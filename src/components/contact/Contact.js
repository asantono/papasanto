import React, { forwardRef } from "react";
import {
  AiFillYoutube,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { FaDev } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = forwardRef((props, ref) => {
  return (
    <div className="contact" ref={ref}>
      <div className="contact__title">Social</div>
      <div className="contact__icons">
        <a
          className="contact__icons--email"
          href="mailto:emailpapasanto@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <MdEmail />
        </a>

        <a
          className="contact__icons--youtube"
          href="https://www.youtube.com/channel/UC3b871DqOlA5tKbizv4J6mg"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillYoutube />
        </a>

        <a
          className="contact__icons--facebook"
          href="https://www.facebook.com/PapaSantoCodes"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillFacebook />
        </a>

        <a
          className="contact__icons--twitter"
          href="https://twitter.com/papasantocodes"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillTwitterSquare />
        </a>

        <a
          className="contact__icons--linkedin"
          href="https://www.linkedin.com/in/anthonyjsanto"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>

        <a
          className="contact__icons--devto"
          href="https://dev.to/papasanto"
          target="_blank"
          rel="noreferrer"
        >
          <FaDev />
        </a>
      </div>
    </div>
  );
});

export default Contact;
