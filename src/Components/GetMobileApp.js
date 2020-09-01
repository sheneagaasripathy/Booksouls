import React from 'react'
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
      minHeight: 200,
      backgroundImage: `url(https://www.jebbit.com/wp-content/uploads/2017/09/jebbit-facebook-cover-photo-1.jpg)`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      marginTop: 0,
      color: 'white'
    },
    title: {
      fontSize: 24,
      textAlign:'left',
      justify: 'flex-end'
    },
}


  function GetMobileApp() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}  style={{ padding: 5 }}>
        <Grid container spacing={1} >
          <Grid item xs = {12}>
              <Card style={style.root} variant="outlined">
                <Grid container spacing={1} >
                    <Grid item xs = {1}/>
                    <Grid item xs = {4} style={{justifyContent: 'bottom'}}>
                            <div className={style.title} style={{ margin: 5 }}>
                              <view></view>
                                Get our Mobile App<br/>
                                [Our Mobile app not yet developed]
                            </div>
                    </Grid>
                </Grid>
              </Card>
          </Grid>
        </Grid>
        </div>
    )
  }

export default GetMobileApp 