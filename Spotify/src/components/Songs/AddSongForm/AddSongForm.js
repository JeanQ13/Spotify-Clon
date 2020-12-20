import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Icon, Dropdown } from "semantic-ui-react";
import { map } from "lodash";
import firebase from "../../../utils/Firebase";
import "firebase/firestore";
import "./AddSongForm.scss";


const db = firebase.firestore(firebase);

export default function AddSongForm(props) {
    const { setShowModal } = props;
    const [albums, setAlbums] = useState([]);

  useEffect(() => {
    db.collection("albums")
      .get()
      .then(response => {
        const albumsArray = [];
        map(response?.docs, album => {
            console.log(response);
          const data = album.data();
          albumsArray.push({
            key: album.id,
            value: album.id,
            text: data.name
          });
        });
        setAlbums(albumsArray);
      });
  }, []);

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
                options={albums}
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
