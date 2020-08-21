import Logo from './Logo.png';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    // marginRight:5,
    // marginLeft : 5
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: "white",
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));


const tileData = [
    {
      img: Logo,
      title: 'Image',
      author: 'author',
    },
    {
      img: Logo,
      title: 'Image',
      author: 'author',
    },
    {
      img: Logo,
      title: 'Image',
      author: 'author',
    },
    {
      img: Logo,
      title: 'Image',
      author: 'author',
    },
    {
      img: Logo,
      title: 'Image',
      author: 'author',
    },
];
export default function BookListHome() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <ListSubheader><strong>Recently Added Books</strong></ListSubheader>
        <GridList className={classes.gridList} cols={5}>
          {tileData.map((tile) => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>by: {tile.author}</span>}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton href = "/buyBook">
                    <ShoppingBasketIcon className={classes.title} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }