import React from 'react'
import './customeradd.css'

const CustomerAdd = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Customer</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="Enter Username" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Enter Full Name" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="Enter Email" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="Enter Password" />
        </div>
        <div className="newUserItem">
          <label>Phone Number</label>
          <input type="text" placeholder="Enter Phone Number" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Enter Address" />
        </div>
        {/* <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div> */}
        {/* <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div> */}
        <div className="newUserItem">
          <label>Date of birth</label>
          <input type="date"/>
        </div>
      </form>

      <button className="newUserButton">Create</button>
     
    </div>
  )
}

export default CustomerAdd
