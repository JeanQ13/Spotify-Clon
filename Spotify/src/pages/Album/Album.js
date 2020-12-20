import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import firebase from "../../utils/Firebase";
import "firebase/firestore";
import "firebase/storage";

import "./Album.scss";

const db = firebase.firestore(firebase);

function Album(props) {
    const { match, playerSong } = props;
    const [album, setAlbum] = useState(null);
    const [albumImg, setAlbumImg] = useState(null);

    useEffect(() => {
        db.collection("albums")
          .doc(match.params.id)
          .get()
          .then(response => {
              setAlbum(response.data());
          });
      }, [match]);

      useEffect(() => {
        if (album) {
          firebase
            .storage()
            .ref(`album/${album?.banner}`)
            .getDownloadURL()
            .then(url => {
              setAlbumImg(url);
            });
        }
      }, [album]);

    return (
        <div>
            <h2>Estamos en el album</h2>
        </div>
    )
}

export default withRouter(Album);