import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const EmployeeDetail = () => {
    const { id }                    = useParams();
    const [employee, setEmployee]   = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/employees/${id}`)
            .then((res) => {
                return res.json();
            })
            .then((resp) => {
                setEmployee(resp);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className='container'>
            <div className='row'>
                <div className='card'>
                    <div className='card-title'>
                        <h2>Employee Detail: {employee.name}</h2>
                    </div>
                    <div className='card-body'>
                        <p>ID : {employee.id}</p>
                        <p>Email : {employee.email}</p>
                        <p>Phone : {employee.phone}</p>
                    </div>
                </div>
            </div>
            <Link to='/' className='btn btn-danger'>Back</Link>
        </div>
    )
}

export default EmployeeDetail