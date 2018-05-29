import React from "react";
// import {
//     BrowserRouter as Router,
//     Route,
//     Switch
// } from "react-router-dom";

// import Home from "../components/children/home";
// import Thebao from "../components/children/thebao/thebao";
// import Thebao1 from "../components/children/thebao/thebao1";
// import Thebao2 from "../components/children/thebao/thebao2";
// import Thebao3 from "../components/children/thebao/thebao3";
// import Shopcar from "../components/children/shopcar";
// import Me from "../components/children/me";

// let thebaoRouter = () => {
//     return (
//         <Thebao>
//             <Switch>
//                 <Route exact path="/thebao" component={Thebao1}></Route>
//                 <Route path="/thebao/thebao1" component={Thebao1}></Route>
//                 <Route path="/thebao/thebao2" component={Thebao2}></Route>
//                 <Route path="/thebao/thebao3" component={Thebao3}></Route>
//             </Switch>
//         </Thebao>
//     )
// }
let BaseRouter = () => {
    return (
        <div>
            {/* <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/thebao" component={thebaoRouter}></Route>
                <Route path="/shopcar" component={Shopcar}></Route>
                <Route path="/me" component={Me}></Route>
            </Switch> */}
            
        </div>
    )
}


export default BaseRouter;