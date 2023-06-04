import React, {useState} from 'react';
import { Modal, Button } from 'react-bootstrap';
import PostService from '../services/postService';

const UpdateModalComponent = (props) => {

    const [isShow, invokeModal] = useState(false);

    const initModal = () =>{
        return invokeModal(!isShow);
    }

    //form updatation data
    const [title, setTitle] = useState(props.title);
    const [date, setDate] = useState(props.date);
    const [id, setId] = useState(props.id);
    const [selectedFile, setSelectedFile] = useState('');

    const handleSubmit = async(event) => {
        event.preventDefault();

        const formData = new FormData();

        formData.append('id', id);
        formData.append('title', title);
        formData.append('date', date);

        if(selectedFile != '' && selectedFile.length != 0){
            formData.append('image', selectedFile);
        }

        const response = await PostService.update(formData);
        if(response.data.success == true){
            alert(response.data.msg);
        }
        else{
            alert(response.data.msg);
        }

        initModal();
    
    }

    return (
        <div>
            <Button variant='success' onClick={ initModal } className='btn btn-edit'>
                Edit
            </Button>

            <Modal show={isShow}>
                <Modal.Header closeButton onClick={initModal}>
                    <Modal.Title>Update Post</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                    <Modal.Body>
                   
                        <input  type="text"
                                name='title'
                                placeholder='Enter Post Title'
                                value={title} 
                                onChange={event => setTitle(event.target.value)}
                                required />
                        <br /><br />    
                        <input  type="date"
                                name='date'
                                value={date} 
                                onChange={event => setDate(event.target.value)}
                                required />
                        <br /><br />        
                        <input  type="file"
                                name='file'
                                onChange={event => setSelectedFile(event.target.files[0])}
                                 />      

                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={initModal} className='btn btn-delete'>
                            Close
                        </Button>
                        <Button type="submit" variant="dark">
                            Update
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    );
}

export default UpdateModalComponent;
