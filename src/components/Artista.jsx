import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Divider} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    divider: {
      color:'#15BB9D',
      borderBlockEndStyle: 'solid',
      width: 250,
    },
    parrafo: {
        marginBottom: 8,
    },
  }));

const Artista = ({infoArtista}) => {

    // const [strArtist, strBiographyES] = artista

    const classes = useStyles();
    // console.log(infoArtista)

    return (
        <Container>
            <p className={classes.parrafo}>{infoArtista.strArtist}</p>
            <Divider
              className={classes.divider}
            />
            
        </Container> 
      );
}
 
export default Artista;