import React from "react";
import Details from "../Components/organisation/details/Details";
import Roles from "../Components/organisation/roles/Roles";
import { treeData } from "./tree";
import { dataPermission } from "./rolePermission";
export const contentSidebar = [
  { path: "/", exact: true, label: "Details", render: props => <Details {...props} /> },
  { path: "/roles", exact: true, label: "Roles", render: props => <Roles {...props} treeData={treeData} permissionData={dataPermission} /> }
  // { to: "/contact", label: "Organisation Structure" }
];
