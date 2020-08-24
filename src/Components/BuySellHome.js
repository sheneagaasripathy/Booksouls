import React, {Component} from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import BookListHome from './BookListHome';
import GetMobileApp from './GetMobileApp';
import Typography from '@material-ui/core/Typography';
import BookSoulsDef from './BookSoulsDef';
import WhyShouldBookSouls from './WhyShouldBookSouls';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MobileStepper from '@material-ui/core/MobileStepper';
import BackgroundImg from './BackgroundImg'



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      
    },
    margin: {
      margin: theme.spacing(1),
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing(4),
      backgroundColor: theme.palette.background.default,
    },
    img: {

      display: 'block',
      // overflow: 'hidden',
    },
  }));

  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  // const tutorialSteps = [
  //   {
  //     label: 'booksouls',
  //     imgPath:
  //       'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  //   },
  //   {
  //     label: 'Bird',
  //     imgPath:
  //       'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  //   },
  //   {
  //     label: 'Bali, Indonesia',
  //     imgPath:
  //       'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  //   },
  //   {
  //     label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
  //     imgPath:
  //       'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  //   },
  //   {
  //     label: 'Goč, Serbia',
  //     imgPath:
  //       'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  //   },
  // ];



  const style = {
    root: {
      minWidth: 275,
      backgroundImage: `url("${BackgroundImg}")`,
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



  function BuySellHome() {
    // const classes = useStyles();
    const classes = useStyles();
    // const theme = useTheme();
    // const [activeStep, setActiveStep] = React.useState(0);
    // const maxSteps = tutorialSteps.length;
  
    // const handleNext = () => {
    //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // };
  
    // const handleBack = () => {
    //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // };
  
    // const handleStepChange = (step) => {
    //   setActiveStep(step);
    // };
  
    return (
      <>
              {/* <div className={classes.root}> */}
          {/* <Paper square elevation={0} className={classes.header}>
            <Typography>{tutorialSteps[activeStep].label}</Typography>
          </Paper> */}
          {/* <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {tutorialSteps.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img className={classes.img} src={step.imgPath} alt={step.label} />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews> */}
          {/* <MobileStepper
            steps={maxSteps}
            position="static"
            variant="text"
            activeStep={activeStep}
            nextButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
              </Button>
            }
          /> */}
                
        {/* </div>   */}

      <div className={classes.root}  style={{ padding: 5 }}>
        <Grid container spacing={1} >
          <Grid item xs = {12}>
          <Paper>
              <Card style={style.root} variant="outlined" >
                <div style={{ margin: 40 }}> 
                  {/* <Grid container spacing={12} >
                    <Grid item xs = {3} style = {{backgroundColor:"#ece58b"}}> */}
                      <Grid container spacing={1} style = {{margin:20}}>
                          <Grid item xs = {7}/>
                          <Grid item xs = {2}>
                              <Paper style={{ marginTop: 10 }}>
                                  <Card variant="outlined" style = {{backgroundColor:"#EECE5C"}}> 
                                  <Button size="large" style = {{backgroundColor:"#EECE5C"}} href = "/buy">Buy</Button>
                                  </Card>
                              </Paper>
                          </Grid>
                          <Grid item xs = {2}>
                              <Paper style={{ marginTop: 10 }}>
                                  <Card variant="outlined" style = {{backgroundColor:"#EECE5C"}}> 
                                  <Button size="large" style = {{backgroundColor:"#EECE5C"}} href = "/sell">Sell</Button>
                                  </Card>
                              </Paper>
                          </Grid>
                          <Grid item xs = {1}/>
                      </Grid>
                      <Grid container spacing={1} >
                      <Grid item xs = {12}>
                        {/* <TextField
                          className={classes.margin}
                          id="input-with-icon-textfield"
                          label="Search for Books"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <IconButton type="submit" aria-label="search">
                                  <SearchIcon />
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        /> */}
                      </Grid>
                      </Grid>
                    {/* </Grid>
                  </Grid> */}
                </div>
              </Card>
            </Paper>
          </Grid>
        </Grid>
        <BookListHome/>
        <br/>
        <BookSoulsDef/>
        <WhyShouldBookSouls/>
        </div>
      </>
    )
  }

export default BuySellHome 