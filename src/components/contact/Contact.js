import React, { forwardRef } from "react";
import {
  AiFillYoutube,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGithub,
} from "react-icons/ai";
import { FaDev, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";

const Contact = forwardRef((props, ref) => {
  return (
    <div className="contact" ref={ref}>
      <div className="contact__title">Social</div>
      <div className="contact__icons">
        <a
          className="contact__icons--email"
          href="https://github.com/asantono"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare />
        </a>

        <a
          className="contact__icons--youtube"
          href="https://www.youtube.com/channel/UC3b871DqOlA5tKbizv4J6mg"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoYoutube />
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
          <FaTwitterSquare />
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
