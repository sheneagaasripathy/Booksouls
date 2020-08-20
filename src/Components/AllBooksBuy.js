import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Paper from '@material-ui/core/Paper';
import Menu from '@material-ui/core/Menu';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import FilterListIcon from '@material-ui/icons/FilterList';
import Tooltip from '@material-ui/core/Tooltip';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));
  function generate(element) {
    return [0,1,2,3,4,5,6,7,8,9,10,11,12,13].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }


function AllBookBuy() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return(
        <div className={classes.demo}>
            <Grid container spacing={1} >
                <Grid item xs = {2}/>
                <Grid item xs = {8} style ={{padding:40}}>
                    <Card >
                        <Paper style ={{padding:20}} class = "AllBookSellBG"> 
                            <div align = "left" style = {{margin:40}}>
                            <TextField
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
                            />
                            <Tooltip title="Filter">
                                <IconButton aria-haspopup="true" onClick={handleClick} >
                                    <FilterListIcon/>
                                </IconButton>
                            </Tooltip>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Sci-Fi</MenuItem>
                                    <MenuItem onClick={handleClose}>Story</MenuItem>
                                    <MenuItem onClick={handleClose}>Novels</MenuItem>
                                    <MenuItem onClick={handleClose}>Comedy</MenuItem>
                                    <MenuItem onClick={handleClose}>Comics</MenuItem>
                                </Menu>
                            </div>
                            <div>
                                <h2>Books for Sale</h2>
                            </div>
                            <List >
                            {generate(
                              
                                    <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                        <FolderIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Title"
                                        secondary="Descripition"
                                    />
                                    <ListItemSecondaryAction>
                                        <Button>Info</Button>
                                    </ListItemSecondaryAction>
                                    </ListItem>,
                            
                            )}
                            </List>
                        </Paper>
                    </Card>
                </Grid>
                <Grid item xs = {2}/>
                </Grid>
          </div>
    )
}
export default AllBookBuy