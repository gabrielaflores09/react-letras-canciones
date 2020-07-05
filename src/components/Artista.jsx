import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container, 
        Card,
        CardActionArea,
        CardMedia,
        CardContent,
        Typography,
        CardActions,
        Button
} from '@material-ui/core';
import {Facebook, Twitter,Web} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: 20,
    },
    media: {
      height: 330,
    },
  }));

const Artista = ({infoArtista}) => {

    const classes = useStyles();

    return (
        <Container>
            <Card fullWidth className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={infoArtista.strArtistThumb}
                  title="Logo Artista"
                />
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Genero: {infoArtista.strGenre}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    {infoArtista.strArtist}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {infoArtista.strBiographyES}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href={infoArtista.strFacebook}>
                  <Facebook/>
                </Button>
                <Button size="small" color="primary" href={infoArtista.strTwitter}>
                  <Twitter/>
                </Button>
                <Button size="small" color="primary" href={infoArtista.strWebsite}>
                  <Web/>
                </Button>
              </CardActions>
            </Card>
            
        </Container> 
      );
}
 
export default Artista;