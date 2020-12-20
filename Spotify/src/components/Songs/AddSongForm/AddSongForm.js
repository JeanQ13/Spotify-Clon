import React from 'react';
import { Form, Input, Button, Icon, Dropdown } from "semantic-ui-react";
import "./AddSongForm.scss";

export default function AddSongForm(props) {
    const { setShowModal } = props;

    const onSubmit = () =>{
        console.log("enviando");
    }

    return (
        <Form className="add-song-form" onSubmit={onSubmit}>
            <Form.Field>
                <Input placeholder="Nombre de la canción"/>
            </Form.Field>
            <Form.Field>
                <Dropdown
                placeholder="Asigna la canción a un álbum"
                search
                selection
                
                />
            </Form.Field>
            <Form.Field>
                <h2>UploadSong</h2>
            </Form.Field>
            <Button type="submit">
                Subir canción
            </Button>
        </Form>
    )
}
