import React,{ Fragment, useState} from 'react';
// import {Container} from '@material-ui/core';
import Menu from './components/Menu';

function App() {

  const [lyrics, guardarLyrics] = useState({
    artista:'',
    cancion:''
  });
  return (
      <Fragment>
          <Menu
            guardarLyrics={guardarLyrics}
            lyrics={lyrics}
          />
      </Fragment>
  );
}

export default App;
