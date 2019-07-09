import React, { Component } from "react";
import axios from "axios";

export default class ArticleLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      category: "Trucks",
      position: "",
      url: "",
      editMode: false,
      apiUrl: "https://ammonicisneros.devcamp.space/portfolio/portfolio_items",
      apiAction: "POST"
    };

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentConfig = this.componentConfig.bind(this);
    this.djsConfig = this.djsConfig.bind(this);

  }


//   componentDidUpdate() {
//     if (Object.keys(this.props.portfolioToEdit).length > 0) {
//       const {
//         id,
//         name,
//         description,
//         category,
//         position,
//         url,
//         thumb_image_url,
//         banner_image_url,
//         logo_url
//       } = this.props.portfolioToEdit;

//       this.props.clearPortfolioToEdit();

//       this.setState({
//         id: id,
//         name: name || "",
//         description: description || "",
//         category: category || "eCommerce",
//         position: position || "",
//         url: url || "",
//         editMode: true,
//         apiUrl: `https://ammonicisneros.devcamp.space/portfolio/portfolio_items/${id}`,
//         apiAction: "patch",
//         thumb_image_url: thumb_image_url || "",
//         banner_image_url: banner_image_url || "",
//         logo_url: logo_url || ""
//       });
//     }
//   }

  componentConfig() {
    return {    };
  }
  djsConfig() {
    return {
      addRemoveLinks: true,
      maxFiles: 1
    };
  }

  buildForm() {
    let formData = new FormData();

    formData.append("article_item[name]", this.state.name);
    formData.append("article_item[description]", this.state.description);
    formData.append("article_item[url]", this.state.url);
    formData.append("article_item[category]", this.state.category);
    formData.append("article_item[position]", this.state.position);
    return formData;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    axios({
      method: this.state.apiAction,
      url: this.state.apiUrl,
      data: this.buildForm(),
      withCredentials: true
    })
      .then(response => {
        if (this.state.editMode) {
          this.props.handleEditFormSubmission();
        } else {
          this.props.handleNewFormSubmission(response.data.portfolio_item);
        }

        this.setState({
          name: "",
          description: "",
          category: "Trucks",
          position: "",
          url: "",
          editMode: false,
          apiUrl: "https://ammonicisneros.devcamp.space/portfolio/portfolio_items",
          apiAction: "POST"
        });
      })
      .catch(error => {
        console.log("article form handleSubmit error", error);
      });

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="article-form-wrapper">
        <div className="two-column">
          <input
            type="text"
            name="name"
            placeholder="Article Item Name"
            className="article-element"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="url"
            placeholder="URL"
            className="url-element"
            value={this.state.url}
            onChange={this.handleChange}
          />
        </div>

        <div className="two-column">
          <input
            type="text"
            name="position"
            placeholder="Position"
            className="position-element"
            value={this.state.position}
            onChange={this.handleChange}
          />

          <select
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
            className="select-element"
          >
            <option value="Trucks">Trucks</option>
            <option value="Hydrogen">Hydrogen</option>
            <option value="PowerSports">PowerSports</option>
          </select>
        </div>

        <div className="one-column">
          <textarea
            type="text"
            name="description"
            placeholder="Description"
            className="description-element"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </div>

        <div>
          <button className="btn" type="submit">
            Save
          </button>
        </div>
      </form>
    );
  }
}