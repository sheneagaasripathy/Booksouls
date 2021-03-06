import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';




function Admin(){
    return(
        <>
        <Grid container spacing={1} style = {{fontFamily:"monospace"}}>
                <Grid item xs = {2}/>
                <Grid item xs = {8} style ={{margin : "5%"}}>
                    <Card style = {{backgroundColor:"#dde4e6"}}>
                        <Paper style = {{backgroundColor:"#dde4e6"}}>
                            <h1>Welcome to the Admin Board</h1>
                            <Grid container spacing={1} style ={{padding : 40}}>
                            <Grid item xs = {1}/>
                            <Grid item xs = {4} >
                                <Card style = {{backgroundColor:"#c3cacb"}}>
                                    <h3>Manage Users</h3>
                                    <br/>
                                    <Button align = "right">Add user</Button>
                                    <Button align = "left">View Users</Button>
                                </Card>
                            </Grid>
                            <Grid item xs = {2}/>
                            <Grid item xs = {4}>
                                <Card style = {{backgroundColor:"#c3cacb"}}>
                                    <h3>Manage Books</h3>
                                    <br/>
                                    <Button align = "right">Add Book</Button>
                                    <Button align = "left">View Books</Button>
                                </Card>
                            </Grid>
                            <Grid item xs = {1}/>
                            </Grid>
                        </Paper>
                    </Card>
                </Grid>
                <Grid item xs = {2}/>
        </Grid>
        </>
    )
}
export default Admin