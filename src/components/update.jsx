import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import { UpdateUser } from "../redux/UserReducer";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existinguser = users.find((user) => user.id === Number(id));
  const [uname, setName] = useState(existinguser ? existinguser.name : "");
  const [uemail, setEmail] = useState(existinguser ? existinguser.email : "");
  const [uage, setAge] = useState(existinguser ? existinguser.age : "");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(UpdateUser({ id, name: uname, email: uemail, age: uage }));
    navigate("/");
  };
  
  return (
    <div className="d-flex vh-50 justify-content-center align-item-center mt-5">
      <div className="w-90 border bg-secondary text-white p-4">
        <h1 className="text-center">Add New User</h1>
        <form onSubmit={handleUpdate}>
          <div className="form-group">
          <label htmlFor="name">Name:</label>
            <input
              type="text"
              value={uname}
              className="form-control"
              id="name"
              placeholder="Enter name"
              onChange={(e)=> setName(e.target.value)}
            />
          </div>
          <div className="form-group">
          <label htmlFor="email">Email:</label>
            <input
              type="email"
              value={uemail}
              className="form-control"
              id="name"
              placeholder="Enter Email"
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
          <label htmlFor="age">Age:</label>
            <input
              type="number"
              value={uage}
              className="form-control"
              id="name"
              onChange={(e)=> setAge(e.target.value)}
              placeholder="Enter Age"
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
