import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useDispatch, useSelector } from 'react-redux';
import {delteUser} from '../redux/UserReducer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const users=useSelector((state)=>state.users)
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const handleDelete=(id)=>{
    dispatch(delteUser(id));
    navigate(0)
  }
  return (
    <div className="container mt-4 text-center">
      <h2 className="mb-4 fw-bold text-primary">Simple CRUD App</h2>
      <div className="d-flex justify-content-end">
        <Link to="/create" className="btn btn-success mb-3 px-4 py-2 fw-bold">Create +</Link>
      </div>
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((users, index) => {
              return (
                <tr key={index}>
                  <td>{users.id}</td>
                  <td>{users.name}</td>
                  <td>{users.email}</td>
                  <td>{users.age}</td>
                  <td>
                  <Link to={'/edit/$(user.id)'} className='btn btn-sm-primary'>Edit</Link>
                  <button onClick={()=>handleDelete(users.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                  </td>
                  

                </tr>
              )
              })
          }

        </tbody>
      </table>
    </div>
  );
}

export default Home;
