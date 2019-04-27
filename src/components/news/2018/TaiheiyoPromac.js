import React from "react";
import SideBar from "../../SideBar";

export default function TaiheiyoPromac() {
  return (
    <div>
      <div id="msg" style={{ height: "70px" }} />
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-8">
            <h2>News</h2>
            <h3>
              ASEC Partners with TAIHEIYO ENGINEERING CORPORATION and PROMAC
              India to Provide End-to-end Solutions for Process Optimization and
              Energy Conversion.
            </h3>
            <span className="badge badge-info">Cairo, 15 January 2018</span>
            <img
              className="img-fluid"
              src="https://i.imgur.com/gGSqLaz.jpg"
              style={{ "margin-bottom": "15px", "margin-top": "15px" }}
            />
            <p>
              Cairo hosted the signing ceremony of a memorandum of understanding
              by{" "}
              <a href="http://www.taiheiyo-eng.co.jp/en/" target="_blank">
                TAIHEIYO <i class="fas fa-external-link-alt" />
              </a>
              ,{" "}
              <a href="http://promacindia.com/" target="_blank">
                PROMAC <i class="fas fa-external-link-alt" />
              </a>{" "}
              and ASEC to set the framework for their collaboration with the
              objective of introducing TEC’s cutting-edge technologies in the
              field of utilization of waste material as alternative fuel and
              latest advancements in cement manufacturing process to producers
              in Egypt and other countries. PROMAC, the EPC partner, has a
              proven record in the implementation of the new solutions
              capitalizing on its state-of-the art manufacturing facility based
              in Bangalore, India. ASEC, the leading consultant and O&M
              provider, shall capitalize on its profound expertise to identify
              and integrate solutions appropriate to technical and business
              needs specific to each cement facility.
            </p>
            <p>
              Commenting on the collaboration of the three partners, Mr. Haruo
              Tsuyuki, the Managing Director of Taiheiyo Engineering Corporation
              said, “We shall combine the technological capabilities of the
              three companies and roll out new solutions in Egypt and other
              parts of the world. We have already constructed cement plants and
              energy conversion solutions based on our engineering technology in
              India and in the Middle East and we look forward to introducing
              our groundbreaking technologies in Egypt and its neighboring
              countries capitalizing on ASEC's marketing capabilities and O&M
              experiences.
            </p>
            <p>
              From his side, Mr. J. Surendra Reddy, Chairman & Managing Director
              of Promac Engineering Industries Limited, India, announced that
              "this cooperation will synergize the unique strengths of all three
              entities to give prospective customers in the cement space access
              to World Class Technologies, State-of-the-art Manufacturing and
              unmatched Project Engineering, Consultancy and O&M Services under
              a single umbrella"
            </p>
            <p>
              “The era of cheap energy and high quality fuel has elapsed and
              conversion to alternative energy is inevitable for cement
              manufacturers” said Mr. Khaled El-Sebaei, the Managing Director of
              ASEC, “Teaming up with Taiheiyo, the Japanese technology hub in
              fuel conversion and Promac, the Indian world-class EPC contractor
              and manufacturer shall guarantee an efficient and reliable
              conversion process for our clients. ASEC has formerly played a
              pivotal role in the modernization of the cement industry in Egypt
              and the Middle East transforming the production lines from the wet
              to the dry technology, and now, it is just about time for ASEC to
              guide and smoothly integrate the conversion to alternative fuel
              into the cement facilities of current and prospective clients,
              bringing their cost of production into a perfectly competitive
              position".
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
