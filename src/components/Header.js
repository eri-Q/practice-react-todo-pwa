import React, { useContext } from "react";
import dig from "object-dig"
import { signInWithGoogle, logOut } from "../service/firebase";
import { AuthContext } from "../providers/AuthProvider";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles (() => ({
  toolbar: {
    justifyContent: 'space-between',
  },
  button : {
    color: '#fff'
  }
}))

const Header = () => {
  const currentUser = useContext(AuthContext);
  console.log(currentUser)
  const button = () => {
    let buttonDom
    if(dig(currentUser, 'currentUser', 'uid') ) {
      buttonDom = <Button className={classes.button} variant="inherit" onClick={logOut} >ログアウト</Button>
    }else{
      buttonDom = <Button className={classes.button} variant="inherit" onClick={signInWithGoogle} >ログイン</Button>
    }
    return buttonDom
  }

  const classes = useStyles();

  return(
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">
          React Todo
        </Typography>
        {button()}
      </Toolbar>
    </AppBar>
  )
}

export default Header;