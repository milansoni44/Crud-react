import React, { useEffect, useState } from 'react'

function EmployeeList() {
    const [employee, setEmployee] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/employees").then((res) => {
            return res.json();
        }).then((resp) => {
            setEmployee(resp);
            console.log(resp);
        }).catch((err) => {
            console.log(err.message);
        });
    }, []);
    return (
        <div className='container'>
            <div className='card'>
                <div className='card-title'>
                    <h2>Employee Listing</h2>
                </div>
                <div className='card-body'>
                    <table className='table table-bordered'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employee.map(item => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>
                                                <a className='btn btn-success'>Edit</a>
                                                <a className='btn btn-danger'>Remove</a>
                                                <a className='btn btn-info'>Detail</a>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default EmployeeList