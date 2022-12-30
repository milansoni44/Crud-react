import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const EmployeeCreate = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [active, setActive] = useState(true);
    const [validation, setValidation] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if( name.length == 0 || email.length == 0 || phone.length == 0 )
        {
            setValidation(true);
            return false;
        }

        let empData = { id, name, email, phone, active };

        fetch("http://localhost:8000/employees", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empData)
        })
        .then((res) => {
            alert("Saved successfully.");
            navigate('/');
        })
        .catch((err) => {
            console.log(err.message);
        });
    }

    return (
        <>
            <div className='row'>
                <div className='offset-lg-3 col-lg-6'>
                    <form className='container' action='#' onSubmit={handleSubmit}>
                        <div className='card' style={{ "textAlign": "left" }}>
                            <div className='card-title'>
                                <h2 className='text-center'>Employee Create</h2>
                            </div>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>ID</label>
                                            <input type="text" disabled className='form-control' />
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>Name</label>
                                            <input
                                                type="text"
                                                value={name}
                                                className='form-control'
                                                onMouseDown={e => setValidation(true)}
                                                onChange={e => setName(e.target.value)}
                                            />
                                            {name.length == 0 && validation && <span className='text-danger'>Enter the name.</span>}
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                className='form-control'
                                                onChange={e => setEmail(e.target.value)}
                                                onMouseDown={e => setValidation(true)}
                                            />
                                            {email.length == 0 && validation && <span className='text-danger'>Enter the email.</span>}
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <label>Phone</label>
                                            <input
                                                type="number"
                                                className='form-control'
                                                onChange={e => setPhone(e.target.value)}
                                                onMouseDown={e => setValidation(true)}
                                            />
                                            {phone.length == 0 && validation && <span className='text-danger'>Enter the phone.</span>}
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-check'>
                                            <input type="checkbox" className='form-check-input' checked={active} onChange={e => setActive(e.target.checked)} />
                                            <label className='form-check-label'>Active</label>
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <div className='form-group'>
                                            <button className='btn btn-primary' type='submit'>Save</button>
                                            <Link to='/' className='btn btn-danger'>Back</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EmployeeCreate