import React from 'react';
import {Container, Divider} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  divider: {
    color:'#15BB9D',
    borderBlockEndStyle: 'solid',
  },
  parrafo: {
    marginBottom: 8,
  }

}));

const Cancion = ({letra}) => {

  const classes = useStyles();

    return (
        <Container>
            <p className={classes.parrafo}>Letra Canción</p>
            <Divider
              className={classes.divider}
            />
            <p>{letra}</p>
        </Container> 
     );
}
 
export default Cancion;