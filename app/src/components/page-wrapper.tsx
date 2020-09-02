import React from "react";
import { useHistory } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    quickTrade: {
      textAlign: "center", 
    }
  }),
);

export default function PageWrapper () {
  /* wraps intended page in a div with key tied to location key, allowing
   * forced rerenders by react router links */
  let history = useHistory();
const classes = useStyles();
  history.push("/");
  return (
         <div className={classes.root}>
      <CircularProgress color="secondary" />
    </div>
  )

};