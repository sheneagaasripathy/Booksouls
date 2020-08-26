import React, {Component} from "react";
import{Card,CardContent,Typography,FormControl,TextField,Grid,Paper} from "@material-ui/core";
import Button from '@material-ui/core/Button'
import NavBar from "./NavBar";
import { green } from "@material-ui/core/colors";

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



export default class Sell extends Component{
    render(){
        return(
          
          
            <Grid container>
                <Grid item xs={4}/>
                 <Grid item xs={1}/>
                 <Grid item xs={4}>
                 <Card style={style.root}>
                   <Paper style={{margin:30,}}>
          
              <CardContent>
                <form >
                  
                  <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Typography component="h1" variant="h2" >Add Your Book</Typography>
                      </Grid>


                      
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                               variant="outlined"
                               margin="normal"
                               required
                               fullWidth
                               id="Book name"
                               label="Book Name"
                               name="book name"
                               autoComplete="book name"
                               autoFocus
                         />

                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                               variant="outlined"
                               margin="normal"
                               required
                               fullWidth
                               id="author name"
                               label="Author Name"
                               name="author name"
                               autoComplete="auther name"
                               autoFocus
                         />



                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                               variant="outlined"
                               margin="normal"
                               required
                               fullWidth
                               id="ISBN number"
                               label="ISBN Number"
                               name="ISBN Number"
                               autoComplete="ISBN number"
                               autoFocus
                         />
                        </FormControl>
                      </Grid>


                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                               variant="outlined"
                               margin="normal"
                               required
                               fullWidth
                               id="price"
                               label="Price"
                               name="Price"
                               autoComplete="Price"
                               autoFocus
                         />
                        </FormControl>
                      </Grid>


                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                               variant="outlined"
                               margin="normal"
                               required
                               fullWidth
                               id="Usage"
                               label="Usage"
                               name="Usage"
                               autoComplete="Usage"
                               autoFocus
                         />
                        </FormControl>
                      </Grid>


                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                               variant="outlined"
                               margin="normal"
                               required
                               fullWidth
                               id="phone number"
                               label="Phone Number"
                               name="phone number"
                               autoComplete="phone number"
                               autoFocus
                         />
                        </FormControl>
                      </Grid>


                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                               variant="outlined"
                               margin="normal"
                               required
                              //  fullWidth
                               id="address"
                               label="Address"
                               name="address"
                               autoComplete="address"
                               autoFocus
                         />
                        </FormControl>
                      </Grid>


                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                               variant="outlined"
                               margin="normal"
                               required
                               fullWidth
                               id="email"
                               label="E-mail"
                               name="email"
                               autoComplete="email"
                               autoFocus
                         />
                        </FormControl>
                      </Grid>

                      <Grid item xs={2}>
                        <FormControl>
                          <Button
                               type="submit"
                               fullWidth
                               variant="contained"
                               color="primary"
                           >
                             ADD
                          </Button>
                       </FormControl>
                       </Grid>
                         
                        <Grid item xs={2}>
                        <FormControl>
                          <Button
                               type="reset"
                               fullWidth
                               variant="contained"
                               color="primary"
                          >
                         RESET
                          </Button>
                        </FormControl>
                      </Grid>

                      

                      </Grid> 
                 
                  
                </form>
              </CardContent>
              </Paper>
        </Card>
        </Grid>
        <Grid item xs={4}/>
      </Grid>

      
        )
    }
}