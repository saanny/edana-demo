import React, { useContext } from "react";
import Tree from "../../Tree/Tree";
import AddRoleGroup from "./add/AddRoleGroup";
import AddRole from "./add/AddRole";
import SearchBar from "./SearchBar";
import TopBar from "./TopBar";
import StateContext from "../../../context/StateContext";

export default function Roles(props) {
  const appState = useContext(StateContext);
  return (
    <>
      <div className="role-section-wrapper">
        <div className="role-top-bar">
          <TopBar />
        </div>
        <div className="role-search-bar">
          <SearchBar />
        </div>
        <div className="role-sec">
          <div className="tree">
            <Tree data={props.treeData} />
          </div>
          <div className="role-wrapper">
            {appState.addRoleGroup && !appState.toogleRole && <AddRoleGroup />}
            {appState.addRole && !appState.addRoleGroup && <AddRole permissionData={props.permissionData} />}
          </div>
        </div>
      </div>
    </>
  );
}
