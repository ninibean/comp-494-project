import React, {Component} from "react";
import './App.css';
import $ from "jquery";
import DayPicker from 'react-day-picker';
import Calendar from "./components/calendar"
import 'react-day-picker/lib/style.css';
import App from "./App"
import history from './history';

const modifiers = {
  highlighted: new Date(2021, 3, 23),
  officeHours: { daysOfWeek: [1, 3] },
};

const modifiersStyles = {
  highlighted: {
    backgroundColor: 'gold',
    color: 'white',
  },

  officeHours: {
    backgroundColor: '#fffdee',
    color: '#ffc107'
  },

  outside: {
    backgroundColor: 'white',
  },
  
};

class Dashboard extends Component {
  
  render() {
    return (
      <div className="Dashboard">

        <div className="Menu-Rect">
          {/* <div className="rect3"></div>
          <div className="rect4"></div> */}
          <p className="static-title"> Office Hours Hub </p>
          <p className="welcome-message"> Hello, Macha Jones! </p>
          <ul>
              <li className="dash-components" id="dash"> Dashboard </li>
              <li className="dash-components" id="appoint"> Make An Appointment </li>
              <li className="dash-components" id="edit"> Edit Profile </li>
              <li className="dash-components" id="logout" onClick={() => history.push('/')}> Log Out </li>
          </ul>
        </div>

        <div id="datepicker"><MainCalendar /></div>

        <div className="Form-Div">
            <form className="appoitnment-form" id="newAppointmentForm">
                <fieldset>
                  <legend>New Appointment</legend>
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
                      <p>Class:</p>
                      <input type="text" placeholder="COMP 163"/>
                    </label>
                    <label>
                        <p>Reason for Attending Student Hours:</p>
                        <textarea form="newAppointmentForm"> Type your specific reason(s) here... </textarea>
                    </label>
                    <label>
                      <button type="submit">Confirm</button>
                      <button type="reset">Cancel</button>
                    </label>
                </fieldset>
            </form>
        </div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
        <script src="js/jquery-ui-datepicker.min.js"></script>
        <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>

      </div>
    );
  }

}

class MainCalendar extends Component {
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.state = {
          selectedDay: undefined,
        };
    }
    
    handleDayClick(day) {
        this.setState({ selectedDay: day });
        console.log("I am clicked");
    }
// TODO: 
// add data
    render() {
        return(
            <div style={{display: 'flex'}}>
                <DayPicker 
                  onDayClick={this.handleDayClick}
                  selectedDays={this.state.selectedDay}
                  modifiers={modifiers}
                  modifiersStyles={modifiersStyles}
                  month={new Date(2021, 3)}
                />
                {this.state.selectedDay ? (
                    <p className="day-info">You clicked {this.state.selectedDay.toLocaleDateString()}</p>
                ) : (
                    <p className="day-info">Please select a day.</p>
                )}
            </div>
        );
    }
}



export default Dashboard;
