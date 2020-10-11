import React,{Component} from 'react';
import {TextField,Grid,Card,CardContent,Button,withStyles} from '@material-ui/core';
import{grey}from '@material-ui/core/colors';

const ColorButton = withStyles((theme)=>({
    root:{
        color:theme.palette.getContrastText(grey[500]),
        backgroundColor:grey[600],
        '&:hover':{
            backgroundColor:grey[800],
        }
    }
}))(Button);


const style ={
    root:{
        marginTop:"50%",
        backgroundColor:'white',
        border:'soild black',
        borderRadius:20
    }
}

class Email extends Component{
    render(){
        return(

            <Gird container>
                <Grid item xs={4}/>
                <Grid item xs={4}>
        <Card style={style.root1}>
              <CardContent>
                <h4 style={{color:"brown"}}>Enter your email</h4><br/>
                <TextField variant="outlined" label="email" fullWidth/>
                <ColorButton style={{marginTop:5}} color="primary" fullWidth>Get A New Password</ColorButton>
              </CardContent>
              </Card>
              <Grid item xs={4}/>
              </Grid>
              </Gird>

        )
    }
}
export default Email;
        
    
