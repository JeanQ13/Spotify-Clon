import React from 'react';
import { Table, Icon } from "semantic-ui-react";
import { map } from "lodash";

import "./ListSongs.scss";

export default function ListSongs(props) {
    const { songs, albumImg } = props;


    return (
        <Table inverted className="list-songs">
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell/>
                    <Table.HeaderCell>
                        Título
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {map(songs, song => (
                    <Song
                    key={song.id}
                    song={song}
                    />
                ))}
            </Table.Body>
        </Table>
    )
}

function Song(props){
    const { song, albumImg } = props;

    return(
        <Table.Row>
        <Table.Cell collapsing>
            <Icon name="play circle outline" >
            </Icon>
        </Table.Cell>
        <Table.Cell>{song.name}</Table.Cell>
    </Table.Row>
    )
}