import React from "react";

export default function BreadCrumbItem({ children, ...props }) {
  return (
    <li className="breadcrumb__item" {...props}>
      {children}
    </li>
  );
}
