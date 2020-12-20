import React, { useState, useEffect } from 'react';
import { map } from "lodash";
import firebase from "../../utils/Firebase";
import "firebase/firestore";

import "./Albums.scss";

const db = firebase.firestore(firebase);

export default function Albums() {  
    const [albums, setAlbums] = useState([]);
    console.log(albums);

    useEffect(() => {
        db.collection("albums")
        .get()
        .then(response =>{
            const arrayAlbums = [];
            map(response?.docs, album =>{
                const data = album.data();
                data.id = album.id;
                arrayAlbums.push(data);
            });
            setAlbums(arrayAlbums);
        })
    }, [])
    
    return (
        <div className="albums">
            <h1>Albumes</h1>
        </div>
    )
}
