import React, {useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import postService from '../services/postService';
import "./AddEdit.css";


const Add = () => {
    
    const [title,setTitle] = useState('');
    const [date,setDate] = useState('');
    const [image,setImage] = useState('');
    const [message,setMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async(event)=>{
        event.preventDefault();

        const formData = new FormData();

        formData.append('title',title);
        formData.append('date',date);
        formData.append('image',image);

        const response = await postService.create(formData);
        if(response.data.success == true){
            setMessage('Post created successfuly.');
            navigate('/');
        }
        else {
            setMessage('Post Failed!.');
        }
        
        setTimeout(function(){
            setMessage('');
        },2000);

        event.target.reset();
    };

    return (
        <div style={{marginTop: "100px"}}>
            <form 
                style={{
                    margin: "auto",
                    padding: "15px",
                    maxWidth: "400px",
                    alignContent: "center",
                }}
                onSubmit={handleSubmit}
            >
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Enter Post Title" 
                    onChange={event => setTitle(event.target.value)}
                    required 
                />
                <label htmlFor="email">Date</label>
                <br />
                <input 
                     type="date" 
                     name="date" 
                     onChange={event => setDate(event.target.value)}
                     required 
                />
                <br />
                <label htmlFor="contact">Image</label>
                <br />
                <input 
                     type="file" 
                     name="image" 
                     onChange={event => setImage(event.target.files[0])}
                     required 
                />
                <input type="submit" value="Add"/>
                <p>{message}</p>
            </form>
        </div>
    );
};

export default Add;
