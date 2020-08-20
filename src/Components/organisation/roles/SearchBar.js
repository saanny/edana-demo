import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import clsx from "clsx";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  root: {
    fontSize: "1.5rem !important"
  },
  input: {
    fontSize: "2.5rem !important"
  },
  textField: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
    minWidth: "100%"
  }
}));

export default function SearchBar() {
  const classes = useStyles();
  return (
    <>
      <FormControl className={clsx(classes.margin, classes.textField)}>
        <InputLabel
          htmlFor="standard-adornment-password"
          inputProps={{
            className: classes.root
          }}
        >
          Search
        </InputLabel>
        <Input
          id="standard-adornment-password"
          inputProps={{
            className: classes.root
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility">
                <SearchIcon fontSize="large" />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </>
  );
}
