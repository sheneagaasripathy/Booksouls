import React, {Component} from "react";
import{Card,CardContent,Typography,FormControl,TextField,Grid, Paper} from "@material-ui/core";
import Button from '@material-ui/core/Button'
import NavBar from "./NavBar";

const style={
    root:{
        minWidth:450,
        
        backgroundColor:"#424242",
        marginTop:60,
        color:'#212121'
    },
    card:{
      minWidth:500,
      backgroundcolor:'#212121',
      color:"#424242",
      margin:50
    }
    
}



export default class Buy extends Component{
    render(){
        return(
          
            <Grid container>
              
        <Grid item xs={3}/>
        <Grid item xs={1}/>
        <Grid item xs={4}>
         
          <Card style={style.root}>
            <Paper style={{margin:30,}}>
            {/* <Paper style={{margin:30,backgroundcolor:""}}> */}
              <CardContent>
                {/* <form > */}
                <Grid container spacing={3}>
                  <Grid item xs={6}>

                  </Grid>
                </Grid>
                  
                  <Grid container spacing={1}>
                      <Grid item xs={12}>
                        {/* <Typography component="h1" variant="h5" TextField="center">Book Name</Typography> */}
                        <div>
                          <h4 style={{textAlign:"left"}}>Book name :-</h4>

                          <h4 style={{textAlign:"left"}}>Author :-</h4>

                          <h4 style={{textAlign:"left"}}>ISBN Number :-</h4>

                          <h4 style={{textAlign:"left"}}>Published :-</h4>

                          <h4 style={{textAlign:"left"}}>Usage :-</h4>

                          <h4 style={{textAlign:"left"}}>Price :-</h4>


                        </div>
                      </Grid>
{/* 
                      <Grid item xs={6} >
                        <FormControl >
                          <TextField
                               variant="outlined"
                               margin="normal"
                               required
                               fullWidth
                               id="author"
                               label="Author"
                               name="Author"
                               autoComplete="author"
                               autoFocus
                         />
                        </FormControl>
                      </Grid>
                        
                        <Grid item xs={6}>
                        <FormControl  >
                          <TextField
                               variant="outlined"
                               margin="normal"
                               required
                               fullWidth
                               id="isbn no"
                               label="ISBN No"
                               name="isbn no"
                               autoComplete="isbn no"
                               autoFocus
                         />
                        </FormControl>
                      </Grid> 
                      
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <TextField 
                               variant="outlined"
                               margin="normal"
                               required
                               fullWidth
                               id="published"
                               label="Published"
                               name="published"
                               autoComplete="published"
                               autoFocus
                         />
                        </FormControl>
                      </Grid>


                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <TextField 
                               variant="outlined"
                               margin="normal"
                               required
                               fullWidth
                               id="usage"
                               label="Usage"
                               name="usage"
                               autoComplete="usage"
                               autoFocus
                         />
                        </FormControl>
                      </Grid>


                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <TextField 
                               variant="outlined"
                               margin="normal"
                               required
                               fullWidth
                               id="price"
                               label="Price"
                               name="price"
                               autoComplete="price"
                               autoFocus
                         />
                        </FormControl>
                      </Grid> */}

                      
                      <Grid item xs={2}>
                        <FormControl>
                          <Button
                               type="submit"
                               fullWidth
                               variant="contained"
                               color="primary"
                           >
                             BUY
                          </Button>
                       </FormControl>
                       </Grid>

                       <Grid item xs={4}>
                        <FormControl>
                          <Button
                               type="submit"
                               fullWidth
                               variant="contained"
                               color="primary"
                           >
                             Add to Card
                          </Button>
                       </FormControl>
                       </Grid>
                    
                   </Grid> 
                 
                 {/* </form> */}
              </CardContent>
              </Paper>
        </Card>
        
        </Grid>
        <Grid item xs={4}/>
        {/* </Card> */}
      </Grid>

      
      
      
        )
    }
}

