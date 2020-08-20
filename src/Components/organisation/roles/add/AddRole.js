import React, { useState, useContext } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import Details from "./addRoleComponent/Details";
import Permission from "./addRoleComponent/Permission";
import StateContext from "../../../../context/StateContext";

const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8"
  },
  indicator: {
    backgroundColor: "#bf1a1a",
    top: "0"
  }
})(Tabs);

const AntTab = withStyles(theme => ({
  root: {
    textTransform: "none",
    fontSize: "1.4rem",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    fontWeight: "450",
    "&:hover": {
      color: "black",
      opacity: 1
    },
    "&$selected": {
      color: "black",
      fontWeight: theme.typography.fontWeightMedium,
      borderBottom: "none",
      fontWeight: "bold",
      borderLeft: "1px solid #80808057",
      borderRight: "1px solid #80808057",
      position: "relative",
      "&::after": {
        content: "",
        width: "100%",
        height: "2px",
        position: "absolute",
        bottom: "0"
      }
    },
    "&:focus": {
      color: "black"
    }
  },
  selected: {}
}))(props => <Tab disableRipple {...props} />);

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "#635ee7"
    }
  }
})(props => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: "none",
    color: "#fff",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1
    }
  }
}))(props => <Tab disableRipple {...props} />);
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "2rem"
  },
  padding: {
    padding: theme.spacing(3)
  },
  demo1: {
    backgroundColor: theme.palette.background.paper
  }
}));
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`full-width-tabpanel-${index}`} aria-labelledby={`full-width-tab-${index}`} {...other}>
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};
export default function AddRoleGroup(props) {
  const appState = useContext(StateContext);
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="add-role">
        <h2 className="add-role__heading">{appState.roleItem.label}</h2>
        <div className={classes.root}>
          <div className={classes.demo1}>
            <AntTabs value={value} onChange={handleChange} aria-label="ant example">
              <AntTab label="Details" />
              <AntTab label="Permissions" />
            </AntTabs>
            <TabPanel value={value} index={0}>
              <Details item={appState.roleItem} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Permission items={props.permissionData} />
            </TabPanel>
          </div>
        </div>
      </div>
    </>
  );
}
