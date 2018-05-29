import React, {Component} from "react";
import {
    NavLink
} from "react-router-dom";

class Thebao extends Component {
    render() {
        return (
            <div className="thebao">
                <NavLink to="/thebao/thebao1" activeStyle={{background:"red",color: "#fff"}}>thebao1</NavLink>
                <NavLink to="/thebao/thebao2" activeStyle={{background:"red",color: "#fff"}}>thebao2</NavLink>
                <NavLink to="/thebao/thebao3" activeStyle={{background:"red",color: "#fff"}}>thebao3</NavLink>
                {this.props.children}
            </div>
        )
    }
}

export default Thebao;