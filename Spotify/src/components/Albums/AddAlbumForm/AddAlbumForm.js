import React, { useState, useEffect, useCallback } from 'react';
import { Form, Input, Button, Image, Dropdown } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import { map } from "lodash";
import firebase from "../../../utils/Firebase";
import "firebase/firestore";
import NoImage from "../../../assets/png/no-image.png"


import "./AddAlbumForm.scss";

const db = firebase.firestore(firebase);

export default function AddAlbumForm(props) {
    const { setShowModal } = props;
    const [artists, setArtists] = useState([]);
    const [albumImage, setAlbumImage] = useState(null);
    const [file, setFile] = useState(null);

    useEffect(() => {
        db.collection("artists")
        .get()
        .then(response =>{
            const arrayArtists = [];
            map(response?.docs, artist =>{
                const data = artist.data();
                arrayArtists.push({
                    key: artist.id,
                    value: artist.id,
                    text: data.name
                })
            });
            setArtists(arrayArtists);
        })
    }, [])

    const onDrop = useCallback(acceptedFiles=>{
        const file = acceptedFiles[0];
        setFile(file);
        setAlbumImage(URL.createObjectURL(file));
    },[]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: "image/jpeg, image/png",
        noKeyboard: true,
        onDrop
    })

    const onSubmit = () =>{
        console.log("Enviando formulario");
    }

    return (
        <Form className="add-album-form" onSubmit={onSubmit}>
            <Form.Group>
                <Form.Field className="album-avatar" width={5}>
                    <div
                        {...getRootProps()}
                        className="avatar"
                        style={{
                            backgroundImage: `url('${albumImage}')` 
                        }}
                    />
                    <input {...getInputProps()} />
                    {!albumImage && <Image src={NoImage} />}
                </Form.Field>
                <Form.Field className="album-inputs" width={11}>
                    <Input placeholder="Nombre del album"/>
                    <Dropdown
                    placeholder="El álbum pertenece..."
                    fluid
                    search
                    selection
                    options={artists}
                    lazyLoad
 
          />
                </Form.Field>
            </Form.Group>
            <Button type="submit"> Crear Album </Button>
        </Form>
    )
}
