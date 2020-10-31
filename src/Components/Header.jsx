import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {withRouter} from 'react-router-dom'
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { AllInclusive, BusinessCenter, Home, HourglassEmpty } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("xs")]:{
      flexGrow: 1,
      
    }
    
  },
  headerOptions: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-evenly',
  },
}));

const Header=(props)=> {
  const { history } = props;
  const classes = useStyles();
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme= useTheme(); //checks theme variable to check what breakpoint we're currently in
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));




  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageUrl) => {
    history.push(pageUrl);
    setAnchorEl(null);
  };
  const handleButtonClick = (pageUrl) => {
    history.push(pageUrl);
    setAnchorEl(null);
  };

  const menuItems = [
    {
      menuTitle: "All Materials",
      pageUrl: "/allmaterials"
    },
    {
      menuTitle: "My Materials",
      pageUrl: "/mymaterials"
    },
    {
      menuTitle: "My Hours",
      pageUrl: "/myhours"
    },
  ];

  return (
    <div className={classes.root}>
  
      <AppBar position="static">
        <Toolbar>
        <IconButton edge="start" className={classes.menuButton} 
              color="inherit" aria-label="menu" 
              onClick={()=> handleButtonClick('/')}
              > <Home style={{color: "yellow"}} />
              <Typography variant="h6" className={classes.title} >
            MBE Home
          </Typography>
            </IconButton>
          
         
            
           
             {isMobile?  (
               <>
              <IconButton edge="start" className={classes.menuButton} 
              color="inherit" aria-label="menu" 
              onClick={handleMenu}
              >
              <MenuIcon />
            </IconButton>
             <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={()=> setAnchorEl(null)}
              >
                {menuItems.map((menuItem)=>{
                  const {menuTitle, pageUrl} = menuItem;
                  return(
                    <MenuItem onClick={()=>handleMenuClick(pageUrl)}>{menuTitle}</MenuItem>

                  );
                })}

                {/* <MenuItem onClick={()=>handleMenuClick('/images')}>Images</MenuItem>
                <MenuItem onClick={()=>handleMenuClick('/videos')}>Videos</MenuItem>
                <MenuItem onClick={()=>handleMenuClick('/newsletter')}>Newsletter</MenuItem> */}
              </Menu>
              </>
              ): 
              (
                <div className={classes.headerOptions}>
               <Button startIcon={<AllInclusive style={{color: "red"}}/>} variant="contained" onClick={()=> handleButtonClick('/allmaterials')} >All Materials</Button>
               <Button startIcon={<BusinessCenter style={{color: "purple"}} />} variant="contained" onClick={()=> handleButtonClick('/mymaterials')} >My Materials</Button>
               <Button startIcon={<HourglassEmpty style={{color: "red"}} />} variant="contained" onClick={()=> handleButtonClick('/myhours')} >My Hours</Button>
              </div>
              )
              
              }
            
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withRouter(Header);
