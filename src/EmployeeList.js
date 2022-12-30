import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function EmployeeList() {
    const [employee, setEmployee] = useState([]);
    const navigate = useNavigate();

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

    // load detail
    const loadDetail = (id) => {
        navigate(`employee/show/${id}`);
    };

    // load remove
    const loadRemove = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch(`http://localhost:8000/employees/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" }
            })
                .then((res) => {
                    alert("Removed successfully.");
                    window.location.reload();
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
    };

    // load edit
    const loadEdit = (id) => {
        navigate(`employee/edit/${id}`);
    };

    return (
        <div className='container'>
            <div className='card'>
                <div className='card-title'>
                    <h2>Employee Listing</h2>
                </div>
                <div className='card-body'>
                    <div className='divbtn'>
                        <Link to='/employee/create' className='btn btn-success'>Add New (+)</Link>
                    </div>
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
                                                <a
                                                    onClick={() => loadEdit(item.id)}
                                                    className='btn btn-success'>
                                                    Edit
                                                </a>
                                                <a
                                                    onClick={() => loadRemove(item.id)}
                                                    className='btn btn-danger'>
                                                    Remove
                                                </a>
                                                <a
                                                    onClick={() => loadDetail(item.id)}
                                                    className='btn btn-info'>
                                                    Detail
                                                </a>
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