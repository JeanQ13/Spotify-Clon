import React, { useState } from 'react'
import ReactPlayer from "react-player";
import { Grid, Progress, Icon, Input, Image } from "semantic-ui-react";

import "./Player.scss";

const songData = {
    image: "https://firebasestorage.googleapis.com/v0/b/spotify-dev-a3285.appspot.com/o/album%2Faeb2487e-a641-43bd-bc1b-3c3729e42e3b?alt=media&token=ff909b9e-ea9c-4b12-8cc8-51cd9e907343", 
    name: "Encore"
};
export default function Player(props) {
    //const { songData } = props;
    const [playing, setPlaying] = useState(false);
    const [playedSeconds, setPlayedSeconds] = useState(0);
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [volume, setVolume] = useState(0.3);


    const onStart = () => {
        setPlaying(true);
      };
    
      const onPause = () => {
        setPlaying(false);
      };

    return (

        <div className="player">
            <Grid>
                <Grid.Column width={4} className="left">
                    <Image src={songData?.image}/>
                    {songData?.name}
                </Grid.Column>
                <Grid.Column width={8} className="center">
                    <div className="controls">
                    {playing ? (
                    <Icon onClick={onPause} name="pause circle outline" />
                    ) : (
                     <Icon onClick={onStart} name="play circle outline" />
                     )}
                    </div>
                    <Progress
                     progress="value"
                     value={playedSeconds}
                     total={totalSeconds}
                     size="tiny"
                    />
                </Grid.Column>
                <Grid.Column width={4} className="right">
                    <h2>right</h2>
                </Grid.Column>
            </Grid>
        </div>
    )
}
