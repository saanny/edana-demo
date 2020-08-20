import React, { useState, useEffect, useContext } from "react";

import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import DispatchContext from "../../../../../context/DispatchContext";
import StateContext from "../../../../../context/StateContext";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import DoneSharpIcon from "@material-ui/icons/DoneSharp";
import CheckBoxOutlineBlankSharpIcon from "@material-ui/icons/CheckBoxOutlineBlankSharp";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import DoneAllIcon from "@material-ui/icons/DoneAll";
export default function Tree(props) {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  const [checked, setChecked] = useState({
    checked: []
  });
  const [expanded, setExpanded] = useState({
    expanded: []
  });

  return (
    <CheckboxTree
      icons={{
        check: <DoneSharpIcon />,
        uncheck: <CheckBoxOutlineBlankSharpIcon />,
        halfCheck: (
          <span className="half-check">
            <DoneAllIcon />
          </span>
        ),
        expandClose: <ExpandMoreIcon />,
        expandOpen: <ExpandLessIcon />,
        expandAll: <span className="rct-icon rct-icon-expand-all" />,
        collapseAll: <span className="rct-icon rct-icon-collapse-all" />,
        parentClose: "",
        parentOpen: "",
        leaf: ""
      }}
      nodes={props.items}
      checked={checked.checked}
      expanded={expanded.expanded}
      onCheck={checked => setChecked({ checked })}
      onExpand={expanded => setExpanded({ expanded })}
    />
  );
}
