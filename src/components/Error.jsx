import React from 'react';
import {Alert } from '@material-ui/lab';
import {SentimentVeryDissatisfied} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    alert: {
        margin: 10,
    },
    p: {
        textAlign: 'center',
        alignItems: 'center',
        height: 50,
    }
  }));

const Error = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.alert}>
            <Alert  severity="info" className={classes.p}>
              No se encontraron resultados para su búsqueda
            </Alert>
        </div>
     );
}
 
export default Error;