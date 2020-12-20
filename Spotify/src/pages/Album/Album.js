import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import firebase from "../../utils/Firebase";
import "firebase/firestore";

import "./Album.scss";

const db = firebase.firestore(firebase);

function Album(props) {
    const { match, playerSong } = props;
    const [album, setAlbum] = useState(null);

    useEffect(() => {
        db.collection("albums")
          .doc(match.params.id)
          .get()
          .then(response => {
              setAlbum(response.data());
          });
      }, [match]);

    return (
        <div>
            <h2>Estamos en el album</h2>
        </div>
    )
}

export default withRouter(Album);