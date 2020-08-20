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
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import BuySellHome from './BuySellHome';
import AllBookBuy from './AllBooksBuy';




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
                        <Grid item xs={4}/>
                        <Grid item xs = {4}>
                        </Grid>
                        {this.state.isLogin ? (
                            <>
                            <Grid item xs={1}>
                                <Typography style = {{marginTop:"5"}}>
                                    <Button variant="outlined" color="white" href = "/login">
                                        Login
                                    </Button>
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography>
                                    <Button variant="outlined" color="white" href = "/signup">
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
                                    <Button variant="outlined" color="white" href = "/home">
                                        Signout
                                    </Button>
                                </Typography> 
                            </Grid>
                            </>)}
                        </Grid>
                        </Toolbar>
                    </AppBar>
                    <div>
                        <Switch>
                        <Route exact path={["/", "/home"]} component={BuySellHome} />
                        <Route exact path={'/buy'} component={AllBookBuy} />
                        </Switch>
                    </div>
                </Router>
            </>
        )
    }
}
export default NavBar;