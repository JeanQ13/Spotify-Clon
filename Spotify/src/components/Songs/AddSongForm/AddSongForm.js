import React, { useState, useEffect, useCallback } from 'react';
import { Form, Input, Button, Icon, Dropdown } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import { map } from "lodash";
import { toast } from "react-toastify"
import firebase from "../../../utils/Firebase";
import "firebase/firestore";
import "./AddSongForm.scss";


const db = firebase.firestore(firebase);

export default function AddSongForm(props) {
    const { setShowModal } = props;
    const [formData, setFormData] = useState(initialValueForm());
    const [albums, setAlbums] = useState([]);
    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    


  useEffect(() => {
    db.collection("albums")
      .get()
      .then(response => {
        const albumsArray = [];
        map(response?.docs, album => {
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

  const onDrop = useCallback(acceptedFiles =>{
      const file = acceptedFiles[0];
      setFile(file);
  });

  const { getRootProps, getInputProps } = useDropzone({
      accept: ".mp3",
      noKeyboard: true,
      onDrop
  })

  const onSubmit = () => {
    if (!formData.name || !formData.album) {
      toast.warning(
        "El nombre de la canción y el álbum al que pertence son obligatorios."
      );
    } else if (!file) {
      toast.warning("La canción es obligatoria.");
    } else {
      setIsLoading(true);
    }
  };

    return (
        <Form className="add-song-form" onSubmit={onSubmit}>
            <Form.Field>
                <Input 
                placeholder="Nombre de la canción"
                onChange={e => setFormData({...formData, name: e.target.value})}
                />
            </Form.Field>
            <Form.Field>
                <Dropdown
                placeholder="Asigna la canción a un álbum"
                search
                selection
                options={albums}
                onChange={(e, data) => setFormData({...formData, album: data.value})}
                />
            </Form.Field>
            <Form.Field>
                <div className="song-upload" {...getRootProps()} >
                    <input {...getInputProps()} />
                    <Icon name="cloud upload" className={file && "load"}/>
                    <div>
                        <p>Arrastra tu canción o haz click <span>aquí</span> </p>
                        {file &&(
                            <p>Canción subida: <span>{file.name}</span></p>
                        )}
                    </div>
                </div>
            </Form.Field>
            <Button type="submit">
                Subir canción
            </Button>
        </Form>
    )
}

function initialValueForm(){
    return{
        name:"",
        album:""
    }
}