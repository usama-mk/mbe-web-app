import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ExitToApp } from '@material-ui/icons';
import {withRouter} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: "50%",
    display: "flex",
    flexDirection: "column",
  margin: "auto",
  marginTop: "80px",

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button:{
    textAlign: "center",
    backgroundColor: "#3f51b5",
    margin: "15px",
    padding: "3px",
    color: "white",
    '&:hover': {
        backgroundColor: "yellow",
        color: 'black'
    }
  },
  buttonGroup:{
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
  }
});

 function Homecard(props) {
  const classes = useStyles();
  const { history } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const bull = <span className={classes.bullet}>•</span>;
  const handleButtonClick = (pageUrl) => {
    history.push(pageUrl);
    setAnchorEl(null);
  };

  return (
    <Card className={classes.root}>
      <CardContent className={classes.buttonGroup}>
          {console.log(props.user.user.email)}
          <Typography>Logged in as: {props.user.user.email} </Typography>
           
        <Button className={classes.button}  onClick={()=> handleButtonClick('/addworklocation')}>Add Work Location</Button>
        <Button className={classes.button}  onClick={()=> handleButtonClick('/addhours')}>Add Hours and KM to Work Location</Button>
        <Button className={classes.button}>Add Material to Work Location</Button>
        
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="secondary" size="small"  startIcon={<ExitToApp />} onClick={props.user.handleLogout}>Logout</Button>
      </CardActions>
    </Card>
  );
}

export default withRouter(Homecard);
