import React from "react";
import SideBar from "../../SideBar";

export default function AmmanJordan() {
  return (
    <div>
      <div id="msg" style={{ height: "70px" }} />
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-8">
            <h2>News</h2>
            <h3>
              A Distinguished Presence for ASEC in the 23rd AICCE Held in Amman,
              Jordan
            </h3>
            <span className="badge badge-info">Cairo, November 2018</span>
            <img
              className="img-fluid"
              src="https://i.imgur.com/8XlgfYP.jpg"
              style={{ "margin-bottom": "15px", "margin-top": "15px" }}
            />
            <p>
              AMMAN, JORDAN, Under the auspices of His Excellency Dr. Omar Al
              Razzaz, Jordanian Prime Minister and His Excellency Eng. Falah
              Al-Omoush, Jordanian Minister of Public Works and Housing, the
              picturesque city of Amman, Jordan, hosted the 23rd
              Arab-International Cement Conference and Exhibition “AICCE” from
              20 – 22 November 2018.
            </p>
            <p>
              With participants exceeding 600 cement professionals from more
              than 30 countries including 103 exhibitors, AICCE is well attended
              by cement producers, service providers and equipment manufacturers
              world-wide. Throughout the conference, 45 papers were presented
              covering an array of topics encompassing every aspect of the
              cement industry; from grinding technology, alternative fuels,
              operation and maintenance to cost reduction and energy
              optimization.
            </p>
            <p>
              ASEC, being one the oldest members of the Arab Union for Cement
              and Building Materials, has had a distinguished presence this year
              with its participation in the exhibition; as well as presenting a
              technical paper titled “Replacement or In-house Fabrication…
              Challenges and Gains: Multi-channel Burning System Fully
              Re-engineered and Fabricated In-house –O&M Case Study; a paper
              that has been received with great interest by the participants
            </p>
            <p>
              Furthermore, the exhibition presented an opportunity for ASEC to
              meet with industry peers to address the region’s major challenges;
              particularly production surplus, it has evenly served as perfect
              context for connecting with decision makers for potential future
              cooperation.
            </p>
            <p>
              The conference opening ceremony has seen a round of welcome
              speeches given by the AUCBM esteemed guests and members: H.E. Eng.
              Falah Al-Omoush, Jordanian Minister of Public Works and Housing,
              Eng. Ahmed Al-Roussan, AUCBM Secretary General, Mr. Mohammad
              Al-Manasir, AUCBM Board Member, Representative of Jordan, Mr.
              Mohamed Abou Afifa, Representative of Arab League’s Secretary
              General and Dr. Hassan Rateb, AUCBM Board Vice President,
              Representative of Egypt and Conference President.
            </p>
            <p>
              The opening ceremony was followed by the exhibition opening which
              signaled the commencement of extensive sessions till the closing
              ceremony that took place by midday November 22nd, 2018.
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
