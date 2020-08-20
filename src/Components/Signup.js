import React,{Component} from 'react';
import './SignupStyle.css';
import {Paper, Grid, TextField, Button} from '@material-ui/core';


const initialState ={
    name: "",
    email: "",
    password: "",
    repassword: "",
    nameError: "",
    emailError: "",
    passwordError: "",
    repasswordError:"",
    rememberMe: false,
}

export default class Signup extends Component{
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
        let nameError =  "";
        let emailError = "";
        let passwordError = "";
        let repasswordError = "";

        

        //-----------------------------------------

        if(!this.state.name){
            nameError = "Please enter your name";
        }else if (this.state.name.length > 20) {
            nameError = "Better to give a short name";
        }
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
        }else if(this.state.password.length < 5 || this.state.password.length >25 ){
            passwordError = "Password must have 5 to 25 characters";
        }
        
        //--------------------------------------------------------------
        if (!this.state.password) {
            repasswordError = ""
        }else if(!this.state.repassword){
            repasswordError = "Reenter the password!";
        }else if(this.state.password !== this.state.repassword ){
            repasswordError = "Check the password";
        }
        

//--------------------------------------------------------------------------
        if(emailError || nameError || passwordError || repasswordError ){
            this.setState({emailError, nameError, passwordError, repasswordError});
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
            <div class="split right">
                <div>
                    <img src = "https://trello-attachments.s3.amazonaws.com/5f242206ad769616f788b51c/5f2c0770a901ff3661b8e866/b9d635dee3efd8d649a6fe527a363642/Untitled.png" height = "250" width = "350" />
                </div>
            <form onSubmit = {this.handleSubmit}>

                <div>
                    <TextField 
                    name = "name"
                    autoFocus
                    placeholder = "Name"
                    value = {this.state.name} 
                    onChange = {this.handleChange} 
                    />
                </div>

                <div style = {{fontSize: 12, color: "red"}}>
                    {this.state.nameError}
                </div>
{/* ------------------------------------------------------------------ */}
                <div>
                    <TextField 
                    name = "email"
                    placeholder = "Email"
                    value = {this.state.email} 
                    onChange = {this.handleChange} 
                    />
                </div>

                <div style = {{fontSize: 12, color: "red"}}>
                    {this.state.emailError}
                </div>
{/* --------------------------------------------------------------------------- */}
                <div>
                    <TextField 
                    type = 'password'
                    name = "password"
                    placeholder = "password"
                    value = {this.state.password} 
                    onChange = {this.handleChange} 
                    />
                </div>
                
                <div style = {{fontSize: 12, color: "red"}}>
                    {this.state.passwordError}
                </div>
{/* --------------------------------------------------------------------------- */}
                <div>
                    <TextField 
                    type = 'password'
                    name = "repassword"
                    placeholder = "Reenter the password"
                    value = {this.state.repassword} 
                    onChange = {this.handleChange} 
                    />
                </div>
                
                <div style = {{fontSize: 12, color: "red"}}>
                    {this.state.repasswordError}
                </div>
{/* ------------------------------------------------------------- */}
                <div style = {{fontSize: 12}}>
                    <input 
                    name = 'rememberMe'
                    type = 'checkbox' 
                    checked = {this.state.rememberMe}
                    onChange = {this.handleChange}
                    />
                    &nbsp; I have read and agree to the terms and conditions
                </div>
{/* ------------------------------------------------------------------ */}

                <div>
                    <Button
                    type = 'submit'
                    >
                        Submit
                    </Button>
{/* ----------------------------------------------------------------------- */}
                </div>
            </form>
            </div>
            <div class="split left">
                
                <img src = "https://images.vexels.com/media/users/3/144860/isolated/preview/5128b7ff4b40f49cd6c0ce8698b9a19a-boy-reading-books-illustration-by-vexels.png"/>
            </div>
            </div>
        );
    }
}