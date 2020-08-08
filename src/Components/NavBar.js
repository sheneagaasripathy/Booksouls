import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import LibraryBooksTwoToneIcon from '@material-ui/icons/LibraryBooksTwoTone';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Logo from './Logo.png';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

class NavBar extends Component {
    constructor(props){
        super();
        this.state = {
            isLogin : true
        }
    }
    render(){
        return(
            <>
                <Router>
                    <AppBar position = "static" style = {{backgroundColor:"#EECE5C"}}>
                        <Toolbar style = {{color:"black"}}>
                        <Grid container spacing={1}>
                        <Grid item xs={2}>
                            <LibraryBooksTwoToneIcon fontSize = "large">  </LibraryBooksTwoToneIcon>
                            {/* <img src = {Logo} height="75" width="120" /> */}
                            [Logo]
                        </Grid>
                        <Grid item xs={8}/>
                        {this.state.isLogin ? (
                            <>
                            <Grid item xs={1}>
                                <Typography style = {{marginTop:"5"}}>
                                    <Button variant="outlined" color="white" >
                                        Login
                                    </Button>
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography>
                                    <Button variant="outlined" color="white" >
                                        Signup
                                    </Button>
                                </Typography>
                            </Grid></>):
                            (<>
                                <Grid item xs={1}>
                                <Typography style = {{marginTop:"5"}}>
                                    <AccountCircleIcon fontSize = "large"/>
                                    Profile
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography>
                                    <Button variant="outlined" color="white" >
                                        Signout
                                    </Button>
                                </Typography> 
                            </Grid>
                            </>)}
                        </Grid>
                        </Toolbar>
                    </AppBar>
                </Router>
            </>
        )
    }
}
export default NavBar;