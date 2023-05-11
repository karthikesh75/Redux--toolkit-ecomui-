import React from "react";
import "../leftbar/Leftbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
// import { faGrid2 } from '@fortawesome/pro-thin-svg-icons'
// import { faClipboardUser} from '@fortawesome/free-solid-svg-icons'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

function Leftbar() {
  let tr = "karthik";
  return (
    <>
      <div className="side-navbar">
        <div className="logo">
        <img src="https://tse1.mm.bing.net/th?id=OIP.bZCstYgFhB1QNjKNE8h8TQHaEo&pid=Api&P=0" alt="img" width="100" height="100"/>
        </div>
        <div className="left-top-profile-info">
          
          <div className="profile-img">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.GlIuUj-GYrRL_G8WvZ3YagHaHw&pid=Api&P=0"
              alt="Girl in a jacket"
              width="500"
              height="600"
            />
          </div>
          <div className="profile-info">
            <h4>Karthikesh.R</h4>
            <h5>Admin</h5>
          </div>
        </div>

        <div className="left-list-info">
          <ul>
            <h2 className="left-header">General</h2>

            <li>
              {" "}
              <FontAwesomeIcon
                className="icon-spacing"
                icon={faRightFromBracket}
              />
              E-commerce
            </li>

            <li>
              <FontAwesomeIcon
                className="icon-spacing"
                icon={faRightFromBracket}
              />
              Analytics
            </li>

            <li>
              <FontAwesomeIcon
                className="icon-spacing"
                icon={faRightFromBracket}
              />
              Banking
            </li>

            <li>
              {" "}
              <FontAwesomeIcon
                className="icon-spacing"
                icon={faRightFromBracket}
              />
              Booking
            </li>
            {tr}
          </ul>
          <ul>
            <h2 className="left-header">Management</h2>

            <li>
              {" "}
              <FontAwesomeIcon
                className="icon-spacing"
                icon={faRightFromBracket}
              />
              Users
            </li>

            <li>
              {" "}
              <FontAwesomeIcon
                className="icon-spacing"
                icon={faRightFromBracket}
              />
              E-commerce
            </li>

            <li>
              {" "}
              <FontAwesomeIcon
                className="icon-spacing"
                icon={faRightFromBracket}
              />
              Invoices
            </li>

            <li>
              {" "}
              <FontAwesomeIcon
                className="icon-spacing"
                icon={faRightFromBracket}
              />
              Blog
            </li>
          </ul>
          <ul>
            <h2 className="left-header">Apps</h2>
            <li>
              {" "}
              <FontAwesomeIcon
                className="icon-spacing"
                icon={faRightFromBracket}
              />
              Mail
            </li>
            <li>
              <FontAwesomeIcon
                className="icon-spacing"
                icon={faRightFromBracket}
              />
              Chat
            </li>
            <li>
              <FontAwesomeIcon
                className="icon-spacing"
                icon={faRightFromBracket}
              />
              Calendar
            </li>

            <li>
              <FontAwesomeIcon
                className="icon-spacing"
                icon={faRightFromBracket}
              />
              Kanban
            </li>
          </ul>

          <h2 className="left-header">
            <FontAwesomeIcon
              className="icon-spacing"
              icon={faRightFromBracket}
            />
            Log Out
          </h2>
        </div>
      </div>
      
    </>
  );
}

export default Leftbar;
