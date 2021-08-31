import React, { Component } from "react";
import axios from 'axios';

export class ContactMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    this.handleInputs = (e) => {this.setState({[e.target.name]:e.target.value})};

    this.handleSubmit = (e) => {
      e.preventDefault();
      console.log(this.state)
      axios.post(url,this.state)
        .then(response => {
          console.log(response)
        })
        .catch(error=>{
          console.log(error)
        })
    };

    const url = "http://localhost:8080/contact";
  }

  render() {
    const {name,email,phone,message} = this.state
    return (
      <section className="container">
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">I would love to hear more from you</p>

            <div className="info">
              <div className="information">
                <img src="img/location.png" className="icon" alt="" />
                <p className="cont-p">Pune,</p>
              </div>
              <div className="information">
                <img src="img/email.png" className="icon" alt="" />
                <p className="cont-p">devangmanjramkar@gmail.com</p>
              </div>
              <div className="information">
                <img src="img/phone.png" className="icon" alt="" />
                <p className="cont-p">8806113283</p>
              </div>
            </div>

            <div className="social-media">
              <p className="cont-p">Connect with me :</p>
              <div className="social-icons">
                <a href="https://github.com/DevangML" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/devangm29" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/mldev02/" target="_blank">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form autoComplete="off" onSubmit={this.handleSubmit.bind(this)}>
              <h3 className="title">Contact Me</h3>
              <div className="input-container">
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Name"
                  value={name}
                  onChange={this.handleInputs.bind(this)}
                />
              </div>
              <div className="input-container">
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                  value={email}
                  onChange={this.handleInputs.bind(this)}
                />
              </div>
              <div className="input-container">
                <input
                  type="tel"
                  name="phone"
                  className="input"
                  placeholder="Phone"
                  value={phone}
                  onChange={this.handleInputs.bind(this)}
                />
              </div>
              <div className="input-container textarea">
                <textarea
                  name="message"
                  className="input"
                  placeholder="Message"
                  value={message}
                  onChange={this.handleInputs.bind(this)}
                ></textarea>
              </div>
              <input type="submit" value="Send" className="cont-btn" />
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactMe;
