import React,{Component} from 'react';
import {Paper, Grid, TextField, Button} from '@material-ui/core';
import './LoginStyle.css';

const initialState ={
    email: "",
    password: "",
    emailError: "",
    passwordError: "",
}

export default class Login extends Component{
    state = initialState;

    handleChange = event =>{
        const isCheckbox = event.target.type === 'checkbox';
        this.setState({
            [event.target.name]: isCheckbox 
            ? event.target.checked 
            : event.target.value
        })
    };


    validate = () => {
        let emailError = "";
        let passwordError = "";      

//-----------------------------------------------------------
        
        if(!this.state.email){
            emailError = "* Required E-mail";
        }else{
            if (!this.state.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ){
                emailError = "invalid Email";
            };
        }        

        //------------------------------------------------------
        if(!this.state.password){
            passwordError = "Enter the password!";
        }       

//--------------------------------------------------------------------------
        if(emailError || passwordError){
            this.setState({emailError, passwordError});
            return false;
        }
        return true;
    };


    //------------------------------------------------------------------

    handleSubmit = (event) =>{
        event.preventDefault();
        const isValid = this.validate();
        if (isValid){
            console.log(this.state);
            //clear form
            this.setState(initialState);

        }
    };
    render(){
        return(        
            <div>
                {/* <center> */}
                <Grid item xs={6} class = "grid">
                    <Paper class = 'paper'>
                    <form onSubmit = {this.handleSubmit}>
                        <div>
                            <h1>
                                Login 
                            </h1>
                        </div>
                <div>
                    <TextField 
                    name = "email"
                    placeholder = "Email"
                    autoFocus
                    style = {{outlineColor: "crimson"}}
                    label = "Email"
                    variant="outlined"
                    value = {this.state.email} 
                    onChange = {this.handleChange}
                    />
    
                    <div style = {{fontSize: 12, color: "red"}}>
                    {this.state.emailError}
                    </div>
                    <br/><br/>
                </div>

                <div>
                    <TextField 
                    type = 'password'
                    name = "password"
                    label="password"
                    placeholder = "password"
                    variant="outlined"
                    value = {this.state.repassword} 
                    onChange = {this.handleChange} 
                    />
                    <div style = {{fontSize: 12, color: "red"}}>
                    {this.state.passwordError}
                    </div>
                    <br/><br/>
                </div>
                <div>
                    <Button
                    type = 'submit'
                    size = 'large'
                    color = 'inherit'
                    >
                        Submit
                    </Button>
                </div>
                </form>
                    </Paper>
                </Grid>
            </div>
    )
}
}