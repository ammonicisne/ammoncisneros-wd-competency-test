import React, { Component } from "react";
import axios from "axios";


export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          Name: "",
        }
      }

      componentDidMount() {
        axios
          .get("https://ammonicisneros.devcamp.space/portfolio/portfolio_items")
          .then(response => {
                this.setState({ apiName: response.data.name });
                })
          .catch(error => {
            console.log(error);
          });
      }

render() {
    const { apiName } = this.state;
    return (
        <div>
            {i}
        </div>
    )
    }
}