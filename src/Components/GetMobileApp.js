import React, {Component} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      
    },
    
  }));
  const style = {
    root: {
      minWidth: 275,
      backgroundImage: `url(https://images.pexels.com/photos/3734604/pexels-photo-3734604.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)`,
      backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      marginTop: 0,
      color: 'white'
    },
    title: {
      fontSize: 24,
      textAlign:'center'
    },
}


  function GetMobileApp() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}  style={{ padding: 5 }}>
        <Grid container spacing={1} >
          <Grid item xs = {12}>
          <Paper>
              <Card style={style.root} variant="outlined">
                <Grid container spacing={1} >
                    <Grid item xs = {8}/>
                    <Grid item xs = {4}>
                        <Paper style={{ margin: 20 }}>
                            <Card variant="outlined"> 
                            <div style={{ margin: 5 }}>
                                Get our Mobile App<br/>
                                .................................................
                                <div style={{ margin: 5 }}>
                                    <Button variant="outlined">
                                        Download For IOS
                                    </Button>
                                </div>
                                <div style={{ margin: 5 }}>
                                    <Button variant="outlined">
                                        Download For Android
                                    </Button >
                                </div>
                                [Our Mobile app not yet developed]
                            </div>
                            </Card>
                        </Paper>
                    </Grid>
                </Grid>
              </Card>
            </Paper>
          </Grid>
        </Grid>
        </div>
    )
  }

export default GetMobileApp 