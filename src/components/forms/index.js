
import React from 'react';
// import {useSate} from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'
import './Forms.css'
import OutputForms from '../outputform';



const Forms = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [newEntry, setNewEntry]=useState([])
    // const myData =(e)=>{
    //     setTitle(e.target.value);
    // }

    const submitData=(e)=>{
        e.preventDefault()
        const newData={title:title,description:description};
        setNewEntry([...newEntry,newData]);
        setTitle('');
        setDescription('')

    }

    const removeData=(i)=>{
        const item = newEntry.filter((element,index)=>{
            return index !== i
            
        });
        setNewEntry(item)
    }
    return (
        <>

            <Container className="text-center w-75 border mt-4">
                <h1 className="m-4 fw-bold">Add a Todo</h1>
                <Form onSubmit={submitData}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fs-4" >Todo Title</Form.Label>

                        <Form.Control
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Todo Title"
                            className="p-2"
                        />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="fs-4">Todo Description</Form.Label>

                        <Form.Control
                        
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Text Description"
                            className="p-2" />

                    </Form.Group>

                    <Button variant="primary" type="submit" className="bg-success fw-bold fs-5 m-4">
                        Add todo
                    </Button>
                </Form>
            </Container>
        <OutputForms newEntry={newEntry} removeData={(i)=>{
            removeData(i)

        }} />
        </>

    );
}

export default Forms;


