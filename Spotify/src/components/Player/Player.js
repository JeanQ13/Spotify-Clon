import React from 'react'
import ReactPlayer from "react-player";
import { Grid, Progress, Icon, Input, Image } from "semantic-ui-react";

import "./Player.scss";

export default function Player(props) {
    //const { songData } = props;

    const songData = {
        image: "https://firebasestorage.googleapis.com/v0/b/spotify-dev-a3285.appspot.com/o/album%2Faeb2487e-a641-43bd-bc1b-3c3729e42e3b?alt=media&token=ff909b9e-ea9c-4b12-8cc8-51cd9e907343", 
        name: "Encore"
    };

    return (

        <div className="player">
            <Grid>
                <Grid.Column width={4} className="left">
                    <Image src={songData?.image}/>
                    {songData?.name}
                </Grid.Column>
                <Grid.Column width={8} className="center">
                    <h2>Center</h2>
                </Grid.Column>
                <Grid.Column width={4} className="right">
                    <h2>right</h2>
                </Grid.Column>
            </Grid>
        </div>
    )
}
