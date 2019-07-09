import React, { Component } from "react";
import axios from "axios";

import ArticleList from "../article-creation/article-list";
import ArticleLayout from "../article-creation/article";


export default class ArticleManager extends Component {
  constructor() {
    super();

    this.state = {
      articleItems: [],
      articleEdit: {}
    };

    this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
    this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this);
    this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.clearArticleEdit = this.clearArticleEdit.bind(this);
  }

  clearArticleEdit() {
    this.setState({
      articleEdit: {}
    });
  }

  handleEditClick(articleItem) {
    this.setState({
      articleEdit: articleItem
    });
  }

  handleDeleteClick(articleItem) {
    axios
      .delete(
        `https://ammonicisneros.devcamp.space/portfolio/portfolio_items/${articleItem.id}`,
        { withCredentials: true }
      )
      .then(response => {
        this.setState({
          articleItems: this.state.articleItems.filter(item => {
            return item.id !== articleItem.id;
          })
        });

        return response.data;
      })
      .catch(error => {
        console.log("handleDeleteClick error", error);
      });
  }

  handleEditFormSubmission() {
    this.getArticleItems();
  }

  handleNewFormSubmission(articleItem) {
    this.setState({
      articleItems: [articleItem].concat(this.state.articleItems)
    });
  }

  handleFormSubmissionError(error) {
    console.log("handleFormSubmissionError error", error);
  }

  getArticleItems() {
    axios
      .get(
        "https://ammonicisneros.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc",
        {
          withCredentials: true
        }
      )
      .then(response => {
        this.setState({
          articleItems: [...response.data.portfolio_items]
        });
      })
      .catch(error => {
        console.log("error in getArticleItems", error);
      });
  }

  componentDidMount() {
    this.getArticleItems();
  }

  render() {
    return (
      <div className="article-manager-wrapper">
        <div className="left-column">
          CREATE NEW ARTICLES
          <ArticleLayout
            handleNewFormSubmission={this.handleNewFormSubmission}
            handleEditFormSubmission={this.handleEditFormSubmission}
            handleFormSubmissionError={this.handleFormSubmissionError}
            clearArticleEdit={this.clearArticleEdit}
            articleEdit={this.state.articleEdit}
          />
        </div>

        <div className="right-column">
          <ArticleList
            handleDeleteClick={this.handleDeleteClick}
            data={this.state.articleItems}
            handleEditClick={this.handleEditClick}
          />
        </div>
      </div>
    );
  }
}