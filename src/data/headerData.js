import React from "react";
import sprite from "../img/sprites.svg";
export const headerData = [
  {
    to: "/",
    title: "People Records",
    icon: (
      <svg className="menu-list__icon">
        <use href={sprite + "#icon-user"} />
      </svg>
    )
  },
  {
    to: "/",
    title: "Organisation",
    icon: (
      <svg className="menu-list__icon">
        <use href={sprite + "#icon-genealogy"} />
      </svg>
    )
  },
  {
    to: "/",
    title: "Ed-com",
    icon: (
      <svg className="menu-list__icon">
        <use href={sprite + "#icon-new_post"} />
      </svg>
    )
  },
  {
    to: "/",
    title: "LMS admin",
    icon: (
      <svg className="menu-list__icon">
        <use href={sprite + "#icon-read"} />
      </svg>
    )
  }
];
