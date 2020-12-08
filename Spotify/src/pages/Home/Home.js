import React, {useState, useEffect} from 'react';
import { map } from "lodash";
import BannerHome from "../../components/BannerHome";
import firebase from "../../utils/Firebase";
import "firebase/firestore";

import "./Home.scss"

const db= firebase.firestore(firebase);

export default function Home() {
    const [artists, setArtists] = useState([]);
    console.log(artists)
    useEffect(() => {
        db.collection("artists")
        .get()
        .then((response) =>{
            const arrayArtists = [];
            map(response?.docs, artist =>{
                const data= artist.data();
                data.id = artist.id;
                arrayArtists.push(data);
            });
            setArtists(arrayArtists);
        })
    }, [])

    return (
        <>
        <BannerHome/>
        <div className="home">
            
            <h2>mas</h2>
        </div>
        </>
    )
}
