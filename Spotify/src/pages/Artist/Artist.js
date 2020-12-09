import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import BannerArtist from "../../components/Artists/BannerArtist";
import firebase from "../../utils/Firebase";
import "firebase/firebase";

import "./Artist.scss";


const db = firebase.firestore(firebase);

function Artist(props) {
    const { match } = props;
    const [artist, setArtist] = useState(null);

    useEffect(() => {
        db.collection("artists")
        .doc(match?.params?.id)
        .get()
        .then(response =>{
            setArtist(response.data());
        });
    }, [match])

    return (
        <div className="artist">
            {artist && <BannerArtist artist={artist} />}
            <h2>Mas info</h2>
        </div>
    );
}

export default withRouter(Artist);

