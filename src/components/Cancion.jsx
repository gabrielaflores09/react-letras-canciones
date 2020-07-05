import React from 'react';
import {Container, Divider} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  divider: {
    color:'#15BB9D',
    borderBlockEndStyle: 'solid',
    width: 250,
  },
  parrafo: {
    marginBottom: 8,
  },
  letra: {
    whiteSpace:'pre-wrap',
  },
}));

const Cancion = ({letra}) => {

  const classes = useStyles();

    return (
        <Container>
            <p className={classes.parrafo}>Letra</p>
            <Divider
              className={classes.divider}
            />
            <p className={classes.letra}>{letra}</p>
        </Container> 
     );
}
 
export default Cancion;