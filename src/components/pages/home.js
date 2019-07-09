import React, { Component } from "react";
import axios from "axios";

import NikolaHome from "../../images/NikolaHome.jpg"
import Item from "../items/item";

export default class ItemContainer extends Component {
constructor() {
    super();
    this.state = {
    pageTitle: "Welcome",
    isLoading: false,
    data: []
    };
    this.filter = this.filter.bind(this);
}

filter(filter) {
    if (filter === "CLEAR_FILTERS") {
        this.getItems();
    } else {
        this.getItems(filter);
    }
}


getItems(filter = null) {
    axios
    .get("https://ammonicisneros.devcamp.space/portfolio/portfolio_items")
    .then(response => {
        if (filter) {
        this.setState({
            data: response.data.portfolio_items.filter(item => {
            return item.category === filter;
            })
        });
        } else {
        this.setState({
            data: response.data.portfolio_items
        });
        }
    })
    .catch(error => {
        console.log(error);
    });
}


items() {
    return this.state.data.map(item => {
        return <Item key={item.id} item={item} />;
    });
}

componentDidMount() {
    this.getItems();
}
    
render() {
    if (this.state.isLoading) {
        return <div>Loading...</div>;
    }

return (
    <div className="homePage">
        <a href="https://nikolamotor.com/one">
            <div className="newsBox"> 
                <img src = {NikolaHome} />
            </div>
        </a>
            <div className="emptyBox">
                NIKOLA NEWS
            </div>
            <div className="homeNewsBox">
                STAY UP TO DATE WITH ALL NEWS NIKOLA

                <div className="homeNewsSubBox">
                    The most innovative vehicles entering the market
                </div>
            </div>
            <div className="homeArticles">
                <div className="homeTrucks">
                    {this.items(this.filter("Trucks"))}
                </div>
                <div className="homeTrucks">
                    {this.items(this.filter("Hydrogen"))}
                </div>
                <div className="homeTrucks">
                    {this.items(this.filter("PowerSports"))}
                </div>
            </div>
            <div className="homeFooter">
                CREATED BY AMMON CISNEROS
            </div>

    </div>
    );
}
}