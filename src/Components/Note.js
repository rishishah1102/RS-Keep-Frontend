import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

export default function Note(props) {
    const handleClick = async () => {
        let response = await axios.post('https://rs-keepbackend.onrender.com/deletenote', {index: props.id}, {headers: {Authorization: localStorage.getItem('token')}});
        if (response.status === 200) {
            props.onClick(props.id)
        }
        else {
            alert("Server is down, Please try again later");
        }
        
    }
    return <div className="note">
        <h1>{props.title}</h1>
        <p>{props.para}</p>
        <button onClick={handleClick}><DeleteIcon /></button>
    </div>
}