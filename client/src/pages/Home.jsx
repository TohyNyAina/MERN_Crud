import React, { useState, useEffect } from 'react';
import "./Home.css";
import postService from '../services/postService';

import UpdateModalComponent from './UpdateModalComponent';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const Home = () => {
   
    const [posts, setPosts] = useState({});

    const fetchPosts = async()=>{
        setPosts(await postService.getPosts());
    }

    useEffect(()=>{
        fetchPosts();
    },[]);

    const deletePost = async(id, e) =>{
        var response = await postService.deletePost(id);
        if(response.data.success == true){
            alert(response.data.msg);
            document.getElementById(id).parentElement.parentElement.remove();
        }
        else{
            alert(response.data.msg);
        }
    }

    return (
        <div style={{marginTop: "150px"}}>
            {posts.data != undefined && posts.data.data.length > 0 && (

                <table className='styled-table'>
                    <thead>
                        <tr>
                            <th style={{textAlign: "center"}}>Id</th>
                            <th style={{textAlign: "center"}}>Title</th>
                            <th style={{textAlign: "center"}}>Date</th>
                            <th style={{textAlign: "center"}}>Image</th>
                            <th style={{textAlign: "center"}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.data.data.map(post=>(
                            <tr>
                                <td>{post._id}</td>
                                <td>{post.title}</td>
                                <td>{post.date}</td>
                                <td>
                                   <img src={'http://127.0.0.1:8000/api/postImages/'+post.image} alt="" width="60px" height="60px"/> 
                                </td>
                                <td>
                                    <button id={post._id} className='btn btn-delete' onClick={(e) => deletePost(post._id,e)}>Delete</button>
                                    <UpdateModalComponent id={post._id} title={post.title} date={post.date}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            )}
        </div>
    );
}

export default Home;
