import React from 'react';
import {Grid, GridRow } from "semantic-ui-react";
import Routes from "../../routes/Routes";
import {BrowserRouter as Router} from "react-router-dom";
import MenuLeft from "../../components/MenuLeft";
import TopBar from "../../components/TopBar";
import Player from "../../components/Player";

import "./LoggedLayout.scss";

export default function LoggedLayout(props) {
    const {user, setReloadApp} = props;



    return (
        <Router>
        <Grid className="logged-layout">
            <Grid.Row>
                <Grid.Column width={3}>
                    <MenuLeft user={user} />
                </Grid.Column>
                <Grid.Column className="content" width={13}>
                    <TopBar user={user}/>
                    <Routes user={user} setReloadApp={setReloadApp}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={16}>
                    <Player/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </Router>
    );
}
