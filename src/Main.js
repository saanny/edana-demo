import React from "react";
import { useImmerReducer } from "use-immer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StateContext from "./context/StateContext";
import DispatchContext from "./context/DispatchContext";
import "./styles.scss";

// data
import { breadCrumbData } from "./data/breadCrumb";
import { headerData } from "./data/headerData";
// Components
import Header from "./Components/layouts/Header";
import Organistaion from "./Components/organisation/";

function Main() {
  const initState = {
    selectedOptions: {},
    addRole: false,
    addRoleGroup: false,
    roleItem: ""
  };
  function appReducer(draft, action) {
    switch (action.type) {
      case "change-option":
        draft.selectedOptions = action.value;
        break;
      case "toggleRoleGroup":
        draft.addRoleGroup = !draft.addRoleGroup;
        break;
      case "toggleRole":
        draft.addRole = !draft.addRole;
        break;
      case "setItem":
        draft.roleItem = action.value;
        break;
      case "clrearItem":
        draft.roleItem = "";
        break;
    }
  }

  const [state, dispatch] = useImmerReducer(appReducer, initState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <Header headerData={headerData} />
          <Switch>
            <Route path="/">
              <Organistaion breadCrumbData={breadCrumbData} />
            </Route>
          </Switch>
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default Main;
