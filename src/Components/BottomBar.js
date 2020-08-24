import React from 'react'
import { AppBar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CopyrightIcon from '@material-ui/icons/Copyright';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';
import Logo from './Logo.png';


const useStyles = makeStyles({
    appBar: {
    //   top: 'auto',
      bottom: 0,
      backgroundColor:'#EECE5C',
      color: 'black'
    },
});


function BottomBar() {
    const classes = useStyles();
    let Year = new Date().getFullYear();

    return (
        <AppBar position="flex-end" className={classes.appBar}>
            <Grid container spacing={1}>
            <Grid item xs={2}>
                <br/>
                <br/>
                <EmailIcon/>
                <FacebookIcon/>
                <InstagramIcon />
                <TwitterIcon/>
            </Grid>
            <Grid item xs={8} style = {{margin:10}}>
                <Typography variant="overline" align="center" >
                    <img src = {Logo} height="50" width="150" /><br/>
                    Copyrights <CopyrightIcon style={{ fontSize: 15 }}/> {Year}-{Year+1} <br/> Team Privacy
                </Typography>
            </Grid>
            <Grid item xs={2}></Grid>
            </Grid>
        </AppBar>
    )
}

export default BottomBar