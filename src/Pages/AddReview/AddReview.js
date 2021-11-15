import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddReview.css';

const AddReview = () => {

    const { register, handleSubmit,reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://murmuring-brook-04794.herokuapp.com/services', data)
        .then(res => {
            console.log(res);
            if (res.data.insertedId) {
                alert('added successfully');
                reset();
            }
        })
    }

    return (
    
            <div className="add-review">
            <h2>Please Add a Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Username" />
                
                <textarea {...register("comment")} placeholder="Comment" />
                
                <input type="submit" />
            </form>
        
        </div>
    );
};

export default AddReview;