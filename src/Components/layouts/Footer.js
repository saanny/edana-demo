import React from "react";
import sprite from "../../img/sprites.svg";
export default function Footer() {
  return (
    <div className="legal">
      <svg className="legal__icon">
        <use href={sprite + "#icon-logo"} />
      </svg>
      <ul className="legal__list mb-small">
        <li className="legal__list-item">
          <a href="#/" className="legal__list-link">
            Privacy Policy
          </a>
        </li>
        <li className="legal__list-item">
          <a href="#/" className="legal__list-link">
            Terms of Use
          </a>
        </li>
      </ul>
      <div className="legal__text">&copy; 2020 by Amir Ahmadi All rights reserved</div>
    </div>
  );
}
