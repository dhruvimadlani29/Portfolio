import React, { Component } from "react";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Testimonials from "../../containers/testimonials/Testimonials";

class Home extends Component {
  render() {
    return (
      <div>
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <Testimonials theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
