import React,{ Fragment, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Menu from './components/Menu';
import Artista from './components/Artista';
import Cancion from './components/Cancion';
import {Grid} from '@material-ui/core';
import Error from './components/Error';

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
  const [infoArtista, guardarInfoArtista] = useState({});
  const [valida, guardarValida] = useState(false);
  const [error, guardarError] = useState(false);

  const {artista, cancion}= busquedaLetra;

  const consultarAPILetra = async () =>{
    const url_letra = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
    const url_artista= `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

    const [letra_can, info_art] = await Promise.all([
      fetch(url_letra),
      fetch(url_artista)
    ]);

    const resp_letra = await letra_can.json();
    const resp_artista = await info_art.json();

    if(resp_letra.lyrics === null || resp_artista.artists === null){
      guardarError(true);
      return;
      
    }else{
      guardarLetra(resp_letra.lyrics)
      guardarInfoArtista(resp_artista.artists[0]);
      guardarValida(true);
      guardarError(false);
    }
  
  }


  useEffect(()=>{
    if(Object.keys(busquedaLetra).length === 0) return;
    consultarAPILetra();

  },[busquedaLetra,infoArtista])
 

  return (
      <Fragment>
          <Menu
           guardarBusqLetra={guardarBusqLetra}
          />
          <div className={classes.root}>
            {error? <Error/> : null }
            <Grid 
              container
            >
            {valida? 
              <Fragment>
                <Grid 
                  item xs={12} 
                  sm={6} 
                  className={classes.gItem}
                >
                  <Artista
                    infoArtista={infoArtista}
                  />
                </Grid>
          
                <Grid 
                  item xs={12} 
                  sm={5} 
                  className={classes.gItem}
                >
                  <Cancion
                    letra={letra}
                  />
                </Grid>
              </Fragment> 
            : null }
            </Grid>
          </div>
                
      </Fragment>
  );
}

export default App;
