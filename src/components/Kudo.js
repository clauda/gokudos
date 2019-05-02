import React, { Component } from "react";

export default class Kudo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: "Anonimous",
      to: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    console.log(target.value);

    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-sm-8 col-md-6">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Kudos para...</label>
              <input
                name="to"
                value={this.state.to}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Para..."
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={this.state.message}
                onChange={this.handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Seu Nome (opcional)</label>
              <input
                name="from"
                value={this.state.from}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Para..."
              />
            </div>
            <button type="submit" className="btn btn-success btn-block">
              Enviar kudo
            </button>
          </form>
        </div>
      </div>
    );
  }
}
