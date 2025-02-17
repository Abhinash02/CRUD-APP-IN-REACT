import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/UserReducer";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState(""); // 🔄 Age should be lowercase (consistent)

    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
  const navigate=useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/')
        const newUser = {
            id: users.length > 0 ? users[users.length - 1].id + 1 : 1, // 🛠 Prevent error if users is empty
            name,
            email,
            age, 
        };
        dispatch(addUser(newUser));
    };

    return (
        <div className="d-flex vh-100 justify-content-center align-items-center mt-5">
            <div className="w-50 border bg-secondary text-white p-4">
                <h1 className="text-center">Add New User</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input
                            type="number"
                            className="form-control"
                            id="age"
                            placeholder="Enter Age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mt-3">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Create;
