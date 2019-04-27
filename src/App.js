import React, { Component } from "react";
//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Nav";
import Home from "./components/Home";
import OurAssets from "./components/OurAssets";
import CompanyAtAGlance from "./components/CompanyAtAGlance";
import HistoryAndMilestones from "./components/HistoryAndMilestones";
import VisionAndMission from "./components/VisionAndMission";
import OurTeam from "./components/OurTeam";
import References from "./components/References";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import Downloads from "./components/media/Downloads";
import Papers from "./components/media/Papers";
import Articles from "./components/media/Articles";
import News from "./components/media/News";
import NewsIntercem from "./components/news/2018/Intercem";
import NewsAlminya from "./components/news/2018/Alminya";
import NewsTaiheiyoPromac from "./components/news/2018/TaiheiyoPromac";
import NewsMozambique from "./components/news/2018/Mozambique";
import NewsAmmanJordan from "./components/news/latest/AmmanJordan";
import NewsBMIC from "./components/news/latest/BMIC";
import KeyHighlights2018 from "./components/news/2018/KeyHighlights2018";
import Cemtech from "./components/news/latest/Cemtech";
import Kar from "./components/news/latest/Kar";
import Gallery from "./components/media/Gallery";
import Footer from "./components/Footer";
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/our-assets" component={OurAssets} />
          <Route path="/company-at-a-glance" component={CompanyAtAGlance} />
          <Route
            path="/history-and-milestones"
            component={HistoryAndMilestones}
          />
          <Route path="/vision-and-mission" component={VisionAndMission} />
          <Route path="/our-team" component={OurTeam} />
          <Route path="/services" component={Services} />
          <Route path="/references" component={References} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/media/downloads" component={Downloads} />
          <Route path="/media/papers" component={Papers} />
          <Route path="/media/articles" component={Articles} />
          <Route path="/media/news" component={News} />
          <Route path="/news/intercem" component={NewsIntercem} />
          <Route path="/news/alminya" component={NewsAlminya} />
          <Route path="/news/taiheiyo-promac" component={NewsTaiheiyoPromac} />
          <Route path="/news/mozambique" component={NewsMozambique} />
          <Route path="/news/amman-jordan" component={NewsAmmanJordan} />
          <Route path="/news/bmic" component={NewsBMIC} />
          <Route
            path="/news/key-highlights-2018"
            component={KeyHighlights2018}
          />
          <Route path="/news/cemtech" component={Cemtech} />
          <Route path="/news/kar" component={Kar} />
          <Route path="/media/gallery" component={Gallery} />

          {/* <br/><br/> */}
          {/* <div className="plus">sdfad</div>
          <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"/> */}

          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
