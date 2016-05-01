import React from "react";

import Title from "./Header/Title";

export default class Layout extends React.Component {
    render() {
        return (
            <header>
                <Title deeper={this.props.sub} />
                <small>{this.props.sub}</small>
            </header>
        );
    }
}
