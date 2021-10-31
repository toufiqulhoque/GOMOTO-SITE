import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';

const NewUser = () => {
    const { user } = useAuth()
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const { register, handleSubmit, formState: { errors, } } = useForm();

    useEffect(() => {
        fetch(`https://bloodcurdling-cat-91200.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))

    }, [])
    console.log(service)


    const onSubmit = (inputData, e) => {
        fetch('https://bloodcurdling-cat-91200.herokuapp.com/newUser', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(inputData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Added successfully')
                    e.target.reset('');

                }
            })

        e.preventDefault();
    }
    return (
        <div className='container'>
            <p> id :{service.length}</p>
            <h2 className='my-5'>Your information</h2>
            <form className='border order-form' onSubmit={handleSubmit(onSubmit)}>

                <input value={user?.displayName} className='p-3 px-5' type="text" placeholder="name" {...register("name", {})} /> <br /> <br />
                <input value={user?.email} className='p-3 px-5' type="text" placeholder="email" {...register("email", {})} /> <br /> <br />

                <input className='p-3 px-5' type="text" placeholder="address" {...register("address", {})} /> <br /><br />
                <input className='p-3 px-5' type="text" placeholder="number" {...register("number", {})} /> <br /><br />

                {/* <input type="url" placeholder="price" {...register("price", {})} /> <br /> */}

                <input className='btn btn-warning' type="submit" />

            </form>
        </div>
    );
};

export default NewUser;