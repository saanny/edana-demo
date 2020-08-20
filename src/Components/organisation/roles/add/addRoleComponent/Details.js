import React from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
    minWidth: "100%",
    width: "30rem"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  input: {
    fontSize: "1.5rem"
  },
  selectBox: {
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: 0,
    marginTop: 0,
    fontWeight: 500,
    fontSize: "1.5rem",
    paddingTop: "1.3rem",
    minWidth: "100%",
    width: "15rem"
  },
  label: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "gray"
  },
  labelSelect: {
    fontSize: "1.8rem",
    fontWeight: "bold",
    color: "black"
  }
}));
export default function Details({ item }) {
  const classes = useStyles();

  return (
    <>
      <form action="" className="form-column">
        <div className="form-inputs">
          <Grid container>
            <Grid item>
              <FormControl className={classes.formControl}>
                <TextField
                  required
                  id="filled-required"
                  disabled
                  label="Role Name"
                  value={item.label}
                  className={classes.textField}
                  InputProps={{
                    className: classes.input
                  }}
                  InputLabelProps={{
                    className: classes.label
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl className={classes.formControl}>
                <InputLabel
                  required
                  id="demo-simple-select-helper-label"
                  classes={{
                    root: classes.labelSelect
                  }}
                >
                  Security Profile
                </InputLabel>
                <Select
                  required
                  inputProps={{
                    className: classes.selectBox
                  }}
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={0}
                >
                  <MenuItem value={0}>Default Security Profile</MenuItem>
                  <MenuItem value={1}>Inactive</MenuItem>
                  <MenuItem value={2}>Deleted</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl className={classes.formControl}>
                <InputLabel
                  required
                  id="demo-simple-select-helper-label"
                  classes={{
                    root: classes.labelSelect
                  }}
                >
                  Status
                </InputLabel>
                <Select
                  disabled
                  required
                  inputProps={{
                    className: classes.selectBox
                  }}
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={0}
                >
                  <MenuItem value={0}>Active</MenuItem>
                  <MenuItem value={1}>Inactive</MenuItem>
                  <MenuItem value={2}>Deleted</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </div>
        <div className="form-btn">
          <button className="btn btn-transparent">Go back</button>
          <button className="btn btn-blue">Create</button>
        </div>
      </form>
    </>
  );
}
