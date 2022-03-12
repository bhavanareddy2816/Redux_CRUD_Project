import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const initialValues = [{ name: "", email: " ", number: "" }];

const Add = () => {

    const contacts = useSelector((state) => state);
    let navigate = useNavigate();


    const [values, setValues] = useState(initialValues);
    const { name, email, number } = values;


    const dispatch = useDispatch();

    const onChangeHandler = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();

        const checkEmail = contacts.find(contact => contact.email === email && contact)
        const checkName = contacts.find(contact => contact.name === name && contact)
        const checkNumber = contacts.find(contact => contact.number === parseInt(number))

        if (!name || !email || !number) {
            alert("Please fill in all fields");
        }
        if (checkEmail) {
            alert("This email already present");
        }
        if (checkName) {
            alert("This name already present");
        }
        if (checkNumber) {
            alert("This Number already present");
        }

        const data = {
            id: contacts[contacts.length - 1].id + 1,
            name,
            number,
            email
        }
        dispatch({ type: "ADD_CONTACT", payload: data })

        navigate("/");
    }

    return (
        <div className="container">
            <div className="row">
                <h1 className="display-3 text-center">Add Student</h1>
                <div className="col-md-6 shadow mx-auto py-4">
                    <form onSubmit={onSubmitHandler}>
                        <div className='form-group'>
                            <input type="name" placeholder='Name' className='form-control mt-3' name="name" value={name} onChange={onChangeHandler} />
                        </div>
                        <div className='form-group'>
                            <input type="email" placeholder='Email' className='form-control mt-3' name="email" value={email} onChange={onChangeHandler} />
                        </div>
                        <div className='form-group'>
                            <input type="number" placeholder='Phone number' className='form-control mt-3' name="number" value={number} onChange={onChangeHandler} />
                        </div>
                        <div className='form-group mt-4'>
                            <input type="submit" value="Add Student" className='btn btn-block btn-dark' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Add;