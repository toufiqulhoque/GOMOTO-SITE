import React from 'react';
import { useForm } from 'react-hook-form';
import './CreateService.css'

const CreateService = () => {
    const { register, handleSubmit, formState: { errors, } } = useForm();


    const onSubmit = (inputData, e) => {
        fetch('https://bloodcurdling-cat-91200.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(inputData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('user add successfully')
                    e.target.reset('');

                }
            })

        e.preventDefault();
    }


    console.log(errors);
    return (
        <div className='container-fluid'>
            <h2 className='my-5 mx-auto'>Create A Service</h2>
            <form className='order-form' onSubmit={handleSubmit(onSubmit)}>
                <input className='p-3 ' type="url" placeholder="image" {...register("image", {})} /> <br /><br />
                <input className='p-3' type="text" placeholder="foodName" {...register("foodName", {})} /> <br /> <br />
                <input className='p-3 ' type="text" placeholder="description" {...register("description", {})} /> <br /><br />
                <input className='p-3' type="text" placeholder="price" {...register("price", {})} /> <br /><br />
                {/* <input type="url" placeholder="price" {...register("price", {})} /> <br /> */}

                <input className='btn btn-warning' type="submit" />

            </form>
        </div>
    );
};

export default CreateService;