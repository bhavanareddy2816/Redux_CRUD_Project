import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Home = () => {
    const contacts = useSelector(state => state);
    const dispatch = useDispatch();

    const deleteContact = (id) => {
       dispatch({ type:"DELETE_CONTACT" , payload : id })
       alert("deleted Successfully");
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 text-end mt-5'>
                    <Link to="/add" className="btn btn-outline-dark">Add Contact</Link>
                </div>
                <div className='col-md-8 mx-auto'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((contact , id) => (
                                <tr key={id}>
                                  <td>{id + 1} </td>
                                  <td>{contact.name}</td>
                                  <td>{contact.email}</td>
                                  <td>{contact.number}</td>
                                  <td>
                                      <Link to={`/edit/${contact.id}`} className="btn btn-small btn-primary">Edit</Link>
                                      <button type="button" className="btn btn-small btn-danger ms-2" onClick={()=> deleteContact(contact.id)}>Delete</button>
                                  </td>
                                </tr>
                            ))}
                            </tbody>
                    </table>
                </div>
            </div>

        </div>

    )
}

export default Home