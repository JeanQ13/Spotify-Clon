import React from 'react'
import ReactPlayer from "react-player";
import { Grid, Progress, Icon, Input, Image } from "semantic-ui-react";

import "./Player.scss";

export default function Player() {
    return (
        <div className="player">
            <Grid>
                <Grid.Column width={4} className="left">
                    <h2>left</h2>
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
