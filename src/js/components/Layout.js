import React from "react";

import Header from "./Header";
import ListItem from "./ListItem";
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = { name: "Helen"};
    }
    render() {
        setTimeout(()=> {
            this.setState({name: "Alan"});
        }, 1000);
        var list = [ // We can have an array of dom elements
            <ListItem />,
            <ListItem />,
            <ListItem />
        ];
        const subTitle = "A page made purely in react";
        return ( // We can then add an array as an expression
            <div>
                <Header sub={subTitle} />
                <h2>Hi {this.state.name}</h2>
                {list}
                <Footer />
            </div>
        );
    }
}
