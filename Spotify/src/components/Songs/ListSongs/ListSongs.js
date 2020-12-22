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
                <Table.Row>
                    <Table.Cell collapsing>
                        <Icon name="play circle outline" >
                        </Icon>
                    </Table.Cell>
                    <Table.Cell>
                        Canción 01
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell collapsing>
                        <Icon name="play circle outline" >
                        </Icon>
                    </Table.Cell>
                    <Table.Cell>
                        Canción 03
                    </Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell collapsing>
                        <Icon name="play circle outline" >
                        </Icon>
                    </Table.Cell>
                    <Table.Cell>
                        Canción 03
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}
