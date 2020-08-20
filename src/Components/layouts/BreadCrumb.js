import React from "react";
import BreadCrumbItem from "./BreadCrumbItem";
import useBreadCrumb from "./useBreadCrumb";
import BreadCrumbCollapser from "./BreadCrumbCollapser";
import sprite from "../../img/sprites.svg";

const BreadCrumbSeperator = ({ children, ...props }) => (
  <li className="breadcrumb__seperator" {...props}>
    {children}
  </li>
);
const BreadCrumb = ({ separator, collapse = {}, ...props }) => {
  let children = React.Children.toArray(props.children);

  const { expanded, open } = useBreadCrumb();

  const { itemsBefore = 1, itemsAfter = 1, max = 5 } = collapse;

  const totalItems = children.length;

  const lastIndex = totalItems - 1;

  children = children.map((child, index) => <BreadCrumbItem key={`breadcrumb_item${index}`}>{child}</BreadCrumbItem>);

  children = children.reduce((acc, child, index) => {
    const notLast = index < lastIndex;
    if (notLast) {
      acc.push(
        child,
        <BreadCrumbSeperator key={`breadcrumb_sep${index}`}>
          <svg className="breadcrumb__icon">
            <use href={sprite + "#icon-more_than"} />
          </svg>
        </BreadCrumbSeperator>
      );
    } else {
      acc.push(child);
    }
    return acc;
  }, []);

  if (!expanded || totalItems <= max) {
    children = [...children.slice(0, itemsBefore), <BreadCrumbCollapser title="Expand" key="collapsed-seperator" onClick={open} />, ...children.slice(totalItems - itemsAfter, totalItems)];
  }
  return <ol className="breadcrumb">{children}</ol>;
};

export default BreadCrumb;
