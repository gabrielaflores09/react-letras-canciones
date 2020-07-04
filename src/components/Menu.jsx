import React,{useState} from 'react';
import {AppBar, Toolbar, Typography,TextField, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: theme.spacing(2),
        },
    },
    appBar: {
      textAlign: 'center',
    backgroundColor: '#15BB9D',
      alignItems: 'center',
    },
    title: {
      margin: 15,
      color:"#000000",
      fontSize:25,
      fontFamily: 'Roboto',
    },
    btn: {
        width: '20ch',
    },
    tlbr: {
        padding:0,
    }
  }));

const Menu = ({guardarBusqLetra}) => {

    const classes = useStyles();

    const [lyrics, guardarLyrics] = useState({
        artista:'',
        cancion:''
    });

    const {artista, cancion} = lyrics;

    // Leer contenido del textfield
    const actualizarState = e =>{
        guardarLyrics({
            ...lyrics,
            [e.target.name] : e.target.value
        })
    }

    const buscarInformacion = e =>{
        e.preventDefault();
        guardarBusqLetra(lyrics)

    }

    return ( 
        <AppBar position="static" className={classes.appBar}>
            <Typography className={classes.title}>Buscador Letras de Canciones</Typography>
            <Toolbar className={classes.tlbr}>
                <form 
                    className={classes.root} 
                    autoComplete="off"
                    onSubmit={buscarInformacion}
                >
                    <TextField 
                        rows={4}
                        name="artista" 
                        id="outlined-basic" 
                        label="Artista"
                        value={artista} 
                        variant="outlined"
                        onChange={actualizarState}
                        required    
                    />
                    <TextField 
                        name="cancion" 
                        id="outlined-basic" 
                        label="Cancion"
                        value={cancion} 
                        variant="outlined" 
                        onChange={actualizarState}
                        required
                    />
                    
                    <Button 
                        type="submit" 
                        className={classes.btn}
                        variant="contained" 
                        color="primary">
                            Buscar
                    </Button>
                </form>

            </Toolbar>
        </AppBar>   
     );
}
 
export default Menu;