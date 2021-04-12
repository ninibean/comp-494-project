import React, {Component} from "react";
import './App.css';

class Dashboard extends Component {
  
  render() {
    return (
      <div className="Dashboard">

        {/* make divs for each section (menu, form,) */}

        <title> Student Dashboard </title>

        <div className="Menu-Rect">
          {/* <div className="rect3"></div>
          <div className="rect4"></div> */}
          <p className="static-title"> Office Hours Hub </p>
          <p className="welcome-message"> Hello, Macha Jones! </p>
          <ul>
              <li className="dash-components" id="dash"> Dashboard </li>
              <li className="dash-components" id="appoint"> Make An Appointment </li>
              <li className="dash-components" id="edit"> Edit Profile </li>
              <li className="dash-components" id="logout"> Log Out </li>
          </ul>
        </div>

        <div className="Form-Div">
            <form className="appoitnment-form" id="newAppointmentForm">
                <h1>New Appointment</h1>
                <fieldset>
                    <label>
                        <p>First Name:</p>
                        <input type="text" placeholder="Jane"/>
                    </label>
                    <label>
                        <p>Last Name:</p>
                        <input type="text" placeholder="Doe"/>
                    </label>
                    <label>
                        <p>Student Email Address:</p>
                        <input type="email" placeholder="jdoe@aggies.ncat.edu"/>
                    </label>
                    <label>
                        <p>Reason for Attending Student Hours:</p>
                        <textarea form="newAppointmentForm"> Type your specific reason(s) here... </textarea>
                    </label>
                </fieldset>
            </form>
        </div>

        

      </div>
    );
  }

}



export default Dashboard;
