import React from 'react';
import {AppBar, Toolbar, Typography,TextField, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(3),
        },
    },
    textField :{
        width: '35ch',

    },
    appBar: {
      textAlign: 'center',
    //   backgroundColor:'#12A489',
    backgroundColor: '#15BB9D',
      alignItems: 'center',
    },
    title: {
      margin: 15,
      color:"#000000",
      fontSize:25,
      fontFamily: 'Roboto',
    },
  }));

const Menu = ({guardarLyrics, lyrics}) => {

    const classes = useStyles();

    const {artista, cancion} = lyrics;

    return ( 
        <AppBar position="static" className={classes.appBar}>
            <Typography className={classes.title}>Buscador Letras de Canciones</Typography>
            <Toolbar>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField className={classes.textField} id="outlined-basic" label="Artista" variant="outlined" />
                    <TextField className={classes.textField} id="outlined-basic" label="Cancion" variant="outlined" />
                    
                    <Button type="submit"size="large" variant="contained" color="primary">Buscar</Button>
                </form>

            </Toolbar>
        </AppBar>   
     );
}
 
export default Menu;