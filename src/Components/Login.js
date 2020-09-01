import React,{Component} from 'react';
import {Paper, Grid, TextField, Button} from '@material-ui/core';
import './LoginStyle.css';
import image2 from './image2.JPG'


export default class Login extends Component{
    constructor(){
        super()
        this.state = {
            email: "",
            username : "",
            password: "",
            repassword: "",
            emailError: "",
            passwordError: "",
            repasswordError: "",
            fogot:false,
            codeSubmit : false,
            code : "",
            updatePassword:false,
        }
    }
    handelUpdatePassword = () => {
        this.setState({
            updatePassword:true
        })
    }
    UserNameOrEmail = (e) => {
        if(!this.state.email && !this.state.password ){
            this.setState({
                emailError : "This Field is Required"
            })
        }
        else if (e.target.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ){
            this.setState({
                email : e.target.value,
                emailError : ""
            })
        }
        else {
            this.setState({
                username : e.target.value,
                emailError : ""
            })
        }
    }

    fogotChange = () => {
        this.setState({
            fogot : true
        })
    }
    isCodeSubmit = () => {
        this.setState({
            codeSubmit : true
        })
    }
    CodeChange = (e) => {
        this.setState({
            code : e.target.value
        })
    }

    UserNameValidate = (e) => {
        this.setState({
            email : e.target.value
        })
        if(!this.state.email){
            this.setState({
                emailError : "Please Enter E-mail/Username"
            })
        }
        else {
            this.setState({
                emailError : ""
            })
        }

    }

    PasswordValidate = (e) =>{
        this.setState({
            password : e.target.value
        })
        if(!this.state.password){
            this.setState({
                passwordError : "Please Enter your Password"
            })
        }
        else {
            this.setState({
                passwordError : ""
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
    render(){
        return(   
            !this.state.fogot ? (   
            <div style = {{padding:30}}>
                <Grid container spacing={1}  >
                <Grid item xs = {7} style = {{marginTop:50}}>
                    <img src= {image2} heigth = "50%" width = "50%" alt = "Background Books"/>
                </Grid>
                <Grid item xs={4} style = {{backgroundColor:"#8c8c8c"}}>
                    <Paper className = 'paper'>
                    <form onSubmit = {this.handleSubmit}>
                        <div>
                            <h1>
                                Login 
                            </h1>
                        </div>
                <div>
                    <TextField 
                    name = "email"
                    placeholder = "Username/E-mail"
                    style = {{outlineColor: "black"}}
                    helperText = {this.state.emailError?(<span style = {{color: "red"}}>{this.state.emailError}</span>):("Please Enter Your Username/E-mail")}
                    label = "Username/E-mail"
                    variant="outlined"
                    onChange = {this.UserNameOrEmail}
                    onChange = {this.UserNameValidate}
                    />
                    <br/><br/>
                </div>

                <div>
                    <TextField 
                    type = 'password'
                    name = "password"
                    label="password"
                    placeholder = "password"
                    helperText = {this.state.passwordError?(<span style = {{color: "red"}}>{this.state.passwordError}</span>):("Please Enter Your password")}
                    variant="outlined"
                    onChange = {this.PasswordValidate}
                    />
                    <br/><br/>
                </div>
                <div>
                    <Button
                    type = 'submit'
                    size = 'large'
                    style = {{backgroundColor: '#8c8c8c'}}
                    >
                        Submit
                    </Button>
                </div>
                <h5>A New User <a href = "/signup">Create an Account</a></h5>
                <h5>Fogot password <u style = {{color:"blue"}}><a onClick = {this.fogotChange}>Click here</a></u></h5>
                </form>
                    </Paper>
                </Grid>
                </Grid>
            </div>
            ):( !this.state.codeSubmit ? (
                <div style = {{padding:20}}>
                <Grid container spacing={1}  >
                <Grid item xs = {7}>
                    <img src= {image2} heigth = "50%" width = "50%"/>
                </Grid>
                <Grid item xs={4} style = {{backgroundColor:"#8c8c8c"}}>
                    <Paper style = {{padding : 30}}>
                    <form onSubmit = {this.handleSubmit}>
                        <div>
                            <h1>
                                Fogotten Password 
                            </h1>
                        </div>
                <div>
                    <TextField 
                    name = "email"
                    placeholder = "Username/E-mail"
                    helperText = {this.state.emailError?(<span style = {{color: "red"}}>{this.state.emailError}</span>):("Please Enter Your Username/E-mail")}
                    label = "Username/E-mail"
                    variant="outlined"
                    onChange = {this.UserNameOrEmail}
                    onChange = {this.UserNameValidate}
                    />
                    <br/><br/>
                </div>
                <Button
                    size = 'large'
                    style = {{backgroundColor: '#8c8c8c'}}
                    onClick = {this.isCodeSubmit}
                    >
                        Send Code to the e-mail
                    </Button>
                </form>
                </Paper>
                </Grid>
                </Grid>
                </div>
            ):(!this.state.updatePassword ? (
                <div style = {{padding:20}}>
                <Grid container spacing={1}  >
                <Grid item xs = {7}>
                    <img src= {image2} heigth = "50%" width = "50%"/>
                </Grid>
                <Grid item xs={4} style = {{backgroundColor:"#8c8c8c"}}>
                    <Paper style = {{padding : 30}}>
                    <form onSubmit = {this.handleSubmit}>
                        <div>
                            <h1>
                                Varification 
                            </h1>
                        </div>
                <div>
                <TextField 
                    Required
                    name = "code"
                    variant="outlined"
                    placeholder = "code"
                    helperText = "Enter Your varification Code"
                    onChange = {this.CodeChange}
                    />
                    <br/><br/>
                </div>
                <Button
                    size = 'large'
                    style = {{backgroundColor: '#8c8c8c'}}
                    onClick = {this.handelUpdatePassword}
                    >
                        Submit
                    </Button>
                </form>
                </Paper>
                </Grid>
                </Grid>
                </div>
            ):(
                <div style = {{padding:20}}>
                <Grid container spacing={1}  >
                <Grid item xs = {7}>
                    <img src= {image2} heigth = "50%" width = "50%"/>
                </Grid>
                <Grid item xs={4} style = {{backgroundColor:"#8c8c8c"}}>
                    <Paper style = {{padding : 30}}>
                    <form onSubmit = {this.handleSubmit}>
                        <div>
                            <h1>
                                Update Password 
                            </h1>
                        </div>
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
                <Button
                    size = 'large'
                    style = {{backgroundColor: '#8c8c8c'}}
                    href = "/home"
                    // onClick={alert("Hello World!")}
                    >
                        Update
                    </Button>
                </form>
                </Paper>
                </Grid>
                </Grid>
                </div>
            )
            )
            )
            
    )
}
}