import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams , useNavigate } from 'react-router-dom'
const Edit = () => {
    const { id } = useParams();
    const contacts = useSelector(state => state);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const currentContact = contacts.find(contact => contact.id === parseInt(id))

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    

    useEffect(() => {
        if (currentContact) {
            setName(currentContact.name);
            setEmail(currentContact.email);
            setNumber(currentContact.number);
        }
    }, [currentContact]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
    const checkEmail = contacts.find(contact => contact.id !== parseInt(id) && contact.email === email)
    const checkName = contacts.find(contact => contact.id !== parseInt(id) && contact.name === name)
    const checkNumber = contacts.find(contact => contact.id !== parseInt(id) && contact.number === parseInt(number))

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
        id: parseInt(id),
        name,
        number,
        email
    }
    dispatch({ type: "UPDATE_CONTACT", payload: data })

    navigate("/");
}
    return (
        <div className="container">
            {currentContact ? (
                <>
                    <div className="row">
                        <h1 className="display-3 text-center">Edit Student {id}</h1>
                        <div className="col-md-6 shadow mx-auto py-4">
                            <form onSubmit={onSubmitHandler}>
                                <div className='form-group'>
                                    <input type="text" placeholder='Name' name="name" className='form-control mt-3' value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className='form-group'>
                                    <input type="email" placeholder='Email' name="email" className='form-control mt-3' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className='form-group'>
                                    <input type="number" placeholder='Phone number' name="number" className='form-control mt-3' value={number} onChange={(e) => setNumber(e.target.value)} />
                                </div>
                                <div className='form-group mt-4'>
                                    <input type="submit" value="update" className='btn  btn-dark'/>
                                    <Link to="/" className='btn btn-danger ms-2'>Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            ) : (<h1 className="display-5 my-5 text-center">Student With id {id} is not available</h1>)}

        </div>
    )
}

export default Edit