import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => (
  <footer className="footer">
    <div className="follow">
      <FontAwesomeIcon icon={faUserFriends} />
      <span>Follow Us:</span>
      <a href="https://www.linkedin.com/in/dariel-au-703555236/" target="_blank">Dariel Au</a>

      <a href="https://www.linkedin.com/in/isaiah-peters-30597624a" target="_blank">
        Isaiah Peters
      </a>
    </div>
    © 2022 Copyright: All Rights Reserved
  </footer>
);
