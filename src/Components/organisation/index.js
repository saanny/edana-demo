import React from "react";
import Sidebar from "../layouts/Sidebar";
import Page from "../layouts/Page";
import Content from "../layouts/Content";

import { contentSidebar } from "../../data/contentSidebar";
import { sidebarData } from "../../data/sidebarData";

export default function Organistaion(props) {
  return (
    <Page title="Organisation">
      <Sidebar title="Organisation" sidebarData={sidebarData} />
      <Content breadCrumbData={props.breadCrumbData} routes={contentSidebar} headLine="Admin Org Structure(Do not edit)"></Content>
    </Page>
  );
}
