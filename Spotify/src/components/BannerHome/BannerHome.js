import React, {useState, useEffect} from 'react';
import firebase from "../../utils/Firebase";
import "firebase/storage";

import "./BannerHome.scss";


export default function BannerHome() {
    const [bannerUrl, setBannerUrl] = useState(null);

    useEffect(() => {
        firebase
            .storage()
            .ref("other/spotify-banner.png")
            .getDownloadURL()
            .then(url =>{
                setBannerUrl(url);
            }).catch(() =>{})
    }, []);

    if(!bannerUrl){
        return null;
    }

    return (
        <div 
            className="banner-home"
            style={{backgroundImage:`url('${bannerUrl}')`}}

        />
    )
}
