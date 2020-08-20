import React, { useState, useEffect, useContext } from "react";

import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import DispatchContext from "../../context/DispatchContext";
import StateContext from "../../context/StateContext";

import { MinusSquare, PlusSquare, CloseSquare, TransitionComponent } from "../../util/treeFunctions";

export default function Tree(props) {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  const StyledTreeItem = withStyles(theme => ({
    iconContainer: {
      "& .close": {
        opacity: 0.3
      }
    },
    label: {
      fontWeight: "500",
      fontSize: "1.3rem",
      lineHeight: "2.5rem",
      backgroundColor: "transparent !important",
      fontStyle: "italic"
    },

    expanded: { fontStyle: "normal" },
    selected: {
      fontStyle: "normal"
    },
    group: {
      marginLeft: 7,
      paddingLeft: 18,
      borderLeft: `1px dotted ${fade(theme.palette.text.primary, 0.4)}`
    }
  }))(props => (
    <TreeItem
      {...props}
      onClick={e => e.preventDefault()}
      label={
        <>
          <div className={`label-content ` + (props.children ? " border-left" : "")} id={props.nodeId === "root" ? "tree-root-heading" : ""}>
            {props.label}

            <div className="tree-add-btn">
              {!appState.addRole && !appState.addRoleGroup && (
                <>
                  <a
                    href="#/"
                    onClick={e => {
                      e.preventDefault();
                      console.log(e);
                      appDispatch({ type: "toggleRoleGroup" });
                      appDispatch({ type: "setItem", value: props });
                    }}
                  >
                    Add Role Group
                  </a>
                  <a
                    href="#/"
                    onClick={e => {
                      e.preventDefault();
                      appDispatch({ type: "toggleRole" });
                      appDispatch({ type: "setItem", value: props });
                    }}
                  >
                    Add Role
                  </a>
                </>
              )}
              {appState.addRole && !appState.addRoleGroup && (
                <div className="tree-add-btn">
                  <a
                    href="#/"
                    className="tree-delete-color"
                    onClick={e => {
                      e.preventDefault();
                      appDispatch({ type: "toggleRole" });
                      appDispatch({ type: "clearItem" });
                    }}
                  >
                    Delete
                  </a>
                </div>
              )}
              {!appState.addRole && appState.addRoleGroup && (
                <div className="tree-add-btn">
                  <a
                    href="#/"
                    className="tree-delete-color"
                    onClick={e => {
                      e.preventDefault();
                      appDispatch({ type: "toggleRoleGroup" });
                      appDispatch({ type: "clearItem" });
                    }}
                  >
                    Delete
                  </a>
                </div>
              )}
            </div>
          </div>
        </>
      }
    />
  ));

  const useStyles = makeStyles({
    root: {
      height: "auto",
      maxHeight: "60vh",
      flexGrow: 1,
      maxWidth: "auto",
      padding: "2rem"
    }
  });

  function renderTree(nodes) {
    return (
      <StyledTreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name} className="tree-data__item" onClick={e => e.preventDefault()}>
        {Array.isArray(nodes.children)
          ? nodes.children.map(node => {
              return <>{renderTree(node)}</>;
            })
          : null}
      </StyledTreeItem>
    );
  }
  const [treeNodes, setTreeNodes] = useState({
    treeNodes: props.data
  });
  const [expanded, setExpanded] = useState([]);
  const [selected, setSelected] = useState([]);
  const [show, setShow] = useState();
  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  const classes = useStyles();

  return (
    <TreeView onClick={e => e.preventDefault()} onNodeToggle={handleToggle} onNodeSelect={handleSelect} className={classes.root} defaultExpanded={["1", "root"]} defaultCollapseIcon={<MinusSquare />} defaultExpandIcon={<PlusSquare />}>
      {renderTree(props.data)}
    </TreeView>
  );
}
