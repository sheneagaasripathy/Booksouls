import React,{Component} from 'react';
import './SignupStyle.css';
import {Paper,  Grid, TextField, Button} from '@material-ui/core';
import Card from '@material-ui/core/Card';


// const initialState ={
//     name: "",
//     email: "",
//     address:"",
//     password: "",
//     repassword: "",
//     nameError: "",
//     emailError: "",
//     passwordError: "",
//     repasswordError:"",
//     addressError:"",
//     rememberMe: false,
// }
export default class Signup extends Component{
    constructor(){
        super()
        this.state = {
            name: "",
            email: "",
            address:"",
            password: "",
            repassword: "",
            nameError: "",
            emailError: "",
            passwordError: "",
            repasswordError:"",
            addressError:"",
            rememberMe: false,
        }
    }
    handleChange = event =>{
        const isCheckbox = event.target.type === 'checkbox';
        this.setState({
            [event.target.name]: isCheckbox 
            ? event.target.checked 
            : event.target.value
        })
    };


    NameValidate = (e) => {
        this.setState ({
            name:e.target.value
        })
        if(!this.state.name){
            this.setState ({
                nameError:"This Field is Required"
            })
        }
        else if (this.state.name.length < 20) {
            this.setState ({
                nameError:""
            })
        }
        else if (this.state.name.length > 20) {
            this.setState ({
                nameError:"Better to give a short name"
            })
        }
    }
    AddressValidate = (e) => {
        this.setState ({
            address:e.target.value
        })
        if(!this.state.address){
            this.setState ({
                addressError:"This Field is Required"
            })
        }
        else if (this.state.address.length < 10) {
            this.setState ({
                addressError:"Please Fill fully Address"
            })
        }
        else if (this.state.address.length > 20) {
            this.setState ({
                addressError:""
            })
        }
    }
    EmailValidate = (e) => {
        this.setState ({
            email:e.target.value
        })
        if(!this.state.email){
            this.setState ({
                emailError:"e-mail id Required"
            })
        }
        else if  (this.state.email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ){
                this.setState ({
                    emailError:""
                })
        }
        else{
            this.setState ({
                emailError:"invalid Email"
            }) 
        }
    }  


    PasswordValidate = (e) => {
        this.setState ({
            password:e.target.value
        })
        if(!this.state.password){
            this.setState ({
                passwordError:"Enter the password!"
            }) 
          
        }else if(this.state.password.length < 5 || this.state.password.length >25 ){
            this.setState ({
                passwordError:"Password must have 5 to 25 characters"
            }) 
        
        }
        else{
            this.setState ({
                passwordError:""
            }) 
        }
    }

    RePasswordValidate = (e) => {
        this.setState ({
            repassword:e.target.value
        })
        if (!this.state.password) {
            this.setState ({
                repasswordError:"Reenter the password!"
            }) 
        }
        else if(this.state.password !== this.state.repassword ){
            this.setState ({
                repasswordError:"Check the password"
            }) 
        }
        else {
            this.setState ({
                repasswordError:""
            }) 
        }
    }

    // validate = () => {
    //     if( this.state.emailError ||  this.state.nameError ||  this.state.passwordError ||  this.state.repasswordError ){
    //         return false;
    //     }
    //     return true;
    // };


    //------------------------------------------------------------------

    handleSubmit = (event) =>{
        event.preventDefault();
        // const isValid = this.validate();
        // if (isValid){
            console.log(this.state);
            

        // }
    };
    render(){
        return(
            <Grid container spacing={1} style = {{marginTop:30}}>
                <Grid item xs = {7}/>
                <Grid item xs = {4} style = {{marginBottom:15}}>
                <Card style = {{backgroundColor:"#8c8c8c"}}>
                <Paper style = {{margin:10}}>
            <form onSubmit = {this.handleSubmit}>
                <br/>
                <h2>Creat an Account</h2>
                    <TextField 
                    Required
                    name = "name"
                    autoFocus
                    variant="outlined"
                    placeholder = "Username"
                    helperText ={this.state.nameError? (<sapn style = {{color: "red"}}>{this.state.nameError}</sapn>):("Please Enter Your Name")}
                    value = {this.state.name} 
                    size="small"
                    onChange = {this.NameValidate}
                    onClick = {this.NameValidate} 
                    style = {{width: 300}}
                    />
{/* ------------------------------------------------------------------ */}
                <div>
                    <TextField 
                    Required
                    name = "email"
                    size="small"
                    variant="outlined"
                    placeholder = "Email"
                    helperText ={this.state.emailError? (<span style = {{color: "red"}}>{this.state.emailError}</span>):("Please Enter Your e-mail")}
                    value = {this.state.email} 
                    onChange = {this.EmailValidate} 
                    onClick = {this.EmailValidate} 
                    style = {{width: 300}}
                    />
                </div>
{/* --------------------------------------------------------------------------- */}
                <div>
                    <TextField 
                    Required
                    name = "Address"
                    size="small"
                    variant="outlined"
                    placeholder = "Address"
                    helperText ={this.state.addressError? (<span style = {{color: "red"}}>{this.state.addressError}</span>):("Please Enter Your Address")}
                    value = {this.state.address} 
                    onChange = {this.AddressValidate} 
                    onClick = {this.AddressValidate} 
                    style = {{width: 300}}
                    />
                </div>
{/* ------------------------------------------------------------------------------- */}

                <div>
                <TextField
                    id="date"
                    variant="outlined"
                    type="date"
                    size="small"
                    helperText = " Please Enter your Date of Birth"
                    style = {{width: 300}}
                />
                </div>

{/* --------------------------------------------------------------------------- */}
                <div>
                    <TextField 
                    type = 'password'
                    variant="outlined"
                    size="small"
                    name = "password"
                    placeholder = "password"
                    helperText ={this.state.passwordError? (<span style = {{color: "red"}}>{this.state.passwordError}</span>):("Please Enter Your Password")}
                    value = {this.state.password} 
                    onChange = {this.PasswordValidate} 
                    onClick = {this.PasswordValidate} 
                    style = {{width: 300}}
                    />
                </div>
{/* --------------------------------------------------------------------------- */}
                <div>
                    <TextField 
                    type = 'password'
                    name = "repassword"
                    size="small"
                    variant="outlined"
                    helperText ={this.state.repasswordError? (<span style = {{color: "red"}}>{this.state.repasswordError}</span>):("Please Enter Your Password")}
                    placeholder = "Reenter the password"
                    value = {this.state.repassword} 
                    onChange = {this.RePasswordValidate} 
                    onClick = {this.RePasswordValidate}
                    style = {{width: 300}}
                    />
                </div>
{/* ------------------------------------------------------------- */}
                <div style = {{fontSize: 12}}>
                    <input 
                    name = 'rememberMe'
                    type = 'checkbox' 
                    id = 'check'
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

                <span style = {{fontSize: 12}}>Already have an acoount <a href = "/login">login in</a></span>
                
            </form>
            </Paper>
            </Card>
            </Grid>
            <Grid item xs = {1}/>
            </Grid>
        );
    }
}