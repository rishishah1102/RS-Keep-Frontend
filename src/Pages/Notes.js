import React, { useEffect, useState } from "react";
import "../CSS/Notes.css";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Note from "../Components/Note";
import CreateArea from "../Components/CreateArea";
import axios from 'axios';

export default function Notes() {

    if (!localStorage.getItem('token')) {
        const url = window.location.href;
        const token = url.split("=");
        localStorage.setItem('token', token[1]);
    }
    const [items, addItem] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let response = await axios.get('https://rs-keepbackend.onrender.com/notes', {headers: {Authorization: localStorage.getItem('token')}});
            if (response.status === 200) {
                addItem(response.data.notes);
            } else {
                alert("Server is down, Please try again later!");
            }
        }
        getData();
    }, []);


    function addNote(note) {
        addItem(prevItems => {
            return [...prevItems, note]
        });
    }

    function deleteNote(id) {
        addItem(prevItems => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        });
    }
    return (
        <div className="notes">
            <Header />
            <CreateArea onChange={addNote} />
            {/* {notes.map(createNotes)} */}
            <div className="noteList">
                {items.map((note, index) => {
                    return <Note key={index} id={index} title={note.title} para={note.content} onClick={deleteNote} />
                })}
            </div>
            <Footer />
        </div>
    );
}