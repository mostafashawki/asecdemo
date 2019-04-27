import React from "react";
import SideBar from "../../SideBar";

export default function Intercem() {
  return (
    <div>
      <div id="msg" style={{ height: "70px" }} />
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-8">
            <h2>News</h2>
            <h3>
              Recognized Presence by ASEC in the International Cement Conference
              “Intercem, Cairo to Cape Town”
            </h3>
            <span className="badge badge-info">Cairo, September 2018</span>
            <img
              className="img-fluid"
              src="https://i.imgur.com/hUqEfW2.jpg"
              style={{ "margin-bottom": "15px", "margin-top": "15px" }}
            />
            <p>
              Under the auspices of the Ministry of Trade and Industry and in
              collaboration with the Federation of Egyptian Industries – Cement
              Division, the world’s leading cement conference and exhibition
              "Intercem" has been hosted in Cairo from 17 to 19 September, 2018.
            </p>
            <p>
              As an active participant and recognized exhibitor, ASEC has taken
              part of the event which has served as a unique opportunity for the
              company to meet with business partners to discuss possibilities to
              further their cooperation. The company officials together with the
              industry peers and key figures have deliberated the market
              challenges following the surge in production capacity which has
              come on line during this year, and the eminent reemergence of
              Egypt as a key international exporter. As an operator, ASEC added
              an important perspective regarding possibilities of fuel cost
              reduction and effective endeavors for cutting down carbon
              emissions.
            </p>
            <p>
              The exhibition was inaugurated by Trade and Industry Ministry
              adviser Mr. Hussein Al-Garhy and Vice Chairman of Chamber of
              Building Materials Industries Mr. Medhat Stefanos .
            </p>
          </div>
          <div className="col-sm-4 col-md-4">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
}
