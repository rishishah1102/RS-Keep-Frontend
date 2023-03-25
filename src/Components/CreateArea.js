import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import axios from "axios";

export default function CreateArea(props) {
    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {value, name} = event.target;

        setNote(prevValue => {
            return{
                ...prevValue,
                [name]: value
            }
        });
    }

    const handleClick = async (event) => {
        event.preventDefault();
        let response = await axios.post('https://rs-keepbackend.onrender.com/notes', note, {headers: {Authorization: localStorage.getItem('token')}});
        if (response.status === 200) {
            props.onChange(note);
        }
        else {
            alert("Server is down, Please try again later");
        }
        setNote({title:"", content:""});
    }

    function expand() {
        setExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded ? <input onChange={handleChange} name="title" placeholder="Title" value={note.title} /> : null}
                <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={note.content} />
                <Zoom in={isExpanded}><Fab onClick={handleClick}
                ><AddIcon /></Fab></Zoom>
            </form>
        </div>
    );
}

// Fab is like button only. It gives effect when hovered.