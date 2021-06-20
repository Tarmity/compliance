import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
   width: '250px',
   height: '100px',
   margin: '0 40px',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'flex-start'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 8,
  },
  pos: {
    marginBottom: 12,
  },
  box1: {
      backgroundColor: 'orange',
      height: 60,
      width: 60,
      marginLeft: '1rem',
      
      }
});

export default function ThirtyCard(props) {

    const classes = useStyles();
  //   const bull = <span className={classes.bullet}>•</span>;
  
    return (
      <Card className={classes.root}>
          <Card className={classes.box1}></Card>
        <CardContent>
            <Typography>Next 30 Days</Typography>
        </CardContent>
      </Card>
    );
  }
