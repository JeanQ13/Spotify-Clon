import React, { useState, useEffect } from 'react';
import { map } from "lodash";
import { Grid } from "semantic-ui-react";
import firebase from "../../utils/Firebase";
import "firebase/firestore";

import "./Albums.scss";

const db = firebase.firestore(firebase);

export default function Albums() {  
    const [albums, setAlbums] = useState([]);


    useEffect(() => {
        db.collection("albums")
          .get()
          .then(response => {
            const arrayAlbums = [];
            map(response?.docs, album => {
              const data = album.data();
              data.id = album.id;
              arrayAlbums.push(data);
            });
            setAlbums(arrayAlbums);
          });
      }, []);
    
  return (
    <div className="albums">
      <h1>Álbumes</h1>
      <Grid>
        {map(albums, album => (
          <Grid.Column key={album.id} mobile={8} tablet={4} computer={3}>
            <Album album={album} />
          </Grid.Column>
        ))}
      </Grid>
    </div>
  );
}

function Album(props){

    const { album } = props;
    console.log(props);
    return <h2>{album.name}</h2>
}