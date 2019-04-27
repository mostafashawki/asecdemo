import React from 'react'
// import img1 from '../img/1.jpg';
// import img2 from '../img/2.jpg';
// import img3 from '../img/3.jpg';
import ScrollspyNav from "react-scrollspy-nav";
import Typist from 'react-typist';

 const Header = () => {
  return (
    <div>
      {/* start Carsoul images header / data-interval="false" to stop auto sliding */}
        <div id="demo" data-interval="false" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
            <li data-target="#demo" data-slide-to={0} className="active" />
            <li data-target="#demo" data-slide-to={1} />
            <li data-target="#demo" data-slide-to={2} />
        </ul>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src='https://i.imgur.com/xElDMlb.jpg' width={1100} height={500}/>

            {/* <img src={img1} alt="" width={1100} height={500} /> */}
            {/* <img src={require('../img/1.jpg')} alt="" width={1100} height={500} /> */}
            <div className="carousel-caption">
                <Typist>
                    <h4>Since 1975</h4>
                    <Typist.Delay ms={500} />
                    <h4>In Cement Plants - Engineering & Management</h4>
                    <Typist.Delay ms={500} />
                    <h6>Bringing Solid Expertise</h6>
                    <Typist.Backspace count={24} delay={500} />
                    <h6 className="flash">[Possessing Know-how]</h6>
                    {/* <Typist.Backspace count={19} delay={500} />
                    <h6>From Concept to Completion</h6> */}
                </Typist>
                
                <ScrollspyNav scrollTargetIds={ ['msg'] } scrollDuration="1000">
                    <a href="#msg"><i className="fas fa-chevron-circle-down fa-3x"></i></a>
                </ScrollspyNav>
                {/* <p>We had such a great time in LA!</p> */}
            </div>   
            </div>
            <div className="carousel-item">
            <img src="https://i.imgur.com/lKhcJzA.jpg" alt="" width={1100} height={500} />
            <div className="carousel-caption">
            <h3>Bringing Solid Expertise</h3>
            </div>   
            </div>
            <div className="carousel-item">
            <img src="https://i.imgur.com/q1KsAbb.jpg" alt="" width={1100} height={500} />
            <div className="carousel-caption">
                <h3>Possessing Know-how</h3>
                
            </div>   
            </div>
        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon" />
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon" />
        </a>
        </div>
        
    </div>
  )
}
export default Header