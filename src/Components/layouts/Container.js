import React from "react";

export default function Container(props) {
  return <div className={"container mt-small " + (props.wide ? "" : "container--narrow")}>{props.children}</div>;
}
