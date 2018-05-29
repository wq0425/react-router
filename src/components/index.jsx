import React, {Component} from "react";
import "../App.css";

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";

import Home from "../components/children/home";
import Thebao from "../components/children/thebao/thebao";
import Thebao1 from "../components/children/thebao/thebao1";
import Thebao2 from "../components/children/thebao/thebao2";
import Thebao3 from "../components/children/thebao/thebao3";
import Shopcar from "../components/children/shopcar";
import Me from "../components/children/me";

//import BaseRouter from "../router/router.jsx";


class Index extends Component {
    render () {
        let thebaoRouter = () => {
            return (
                <Thebao>
                    <Switch>
                        <Route exact path="/thebao" component={Thebao1}></Route>
                        <Route path="/thebao/thebao1" component={Thebao1}></Route>
                        <Route path="/thebao/thebao2" component={Thebao2}></Route>
                        <Route path="/thebao/thebao3" component={Thebao3}></Route>
                    </Switch>
                </Thebao>
            )
        }
        return (
            <Router>
                <div className="wrap">
                    <header className="header">Header</header>
                    <section className="section">
                        <Switch>
                            <Route exact path="/" component={Home}></Route>
                            <Route path="/home" component={Home}></Route>
                            <Route path="/thebao" component={thebaoRouter}></Route>
                            <Route path="/shopcar" component={Shopcar}></Route>
                            <Route path="/me" component={Me}></Route>
                        </Switch>
                        {/* <BaseRouter/> */}
                    </section>
                    <footer className="footer">
                        <Link to="/home">主页</Link>
                        <Link to="/thebao">微淘</Link>
                        <Link to="/shopcar">购物车</Link>
                        <Link to="/me">我的</Link>
                    </footer>
                </div>
            </Router>
        )
    }
}

export default Index;