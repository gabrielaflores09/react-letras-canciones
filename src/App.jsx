import React,{ Fragment, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from './components/Menu';
import Cancion from './components/Cancion';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gItem: {
    padding: theme.spacing(1),
    margin:0,
  },
}));

function App() {

  const classes = useStyles();

  const [busquedaLetra, guardarBusqLetra] = useState({});
  const [letra, guardarLetra] = useState('');

  const {artista, cancion}= busquedaLetra;

  const consultarAPILetra = async () =>{
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
    
    const resp_api = await fetch(url);
    const letra_api = await resp_api.json();

    guardarLetra(letra_api.lyrics)
  }

  useEffect(()=>{
    if(Object.keys(busquedaLetra).length === 0) return;
    consultarAPILetra();

  },[busquedaLetra])

  return (
      <Fragment>
          <Menu
           guardarBusqLetra={guardarBusqLetra}
          />
          <div className={classes.root}>
            <Grid 
              container
            >
              <Grid 
                item xs={12} 
                sm={6} 
                className={classes.gItem}
              >
                <Cancion

                />
              </Grid>
              <Grid 
                item xs={12} 
                sm={6} 
                className={classes.gItem}
              >
                <Cancion
                  letra={letra}

                />
              </Grid>
            </Grid>
          </div>
                
      </Fragment>
  );
}

export default App;
