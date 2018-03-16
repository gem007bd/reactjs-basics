import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home } from "./components/Home";
import { Root } from "./components/Root";
import { User } from "./components/User";



// class App extends React.Component {
//   render(){
//     return(
//       <div className="container">
//         <div className="row">
//           <div className="col-xs-10 col-xs-offset-1">
//             <Header/>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-xs-10 col-xs-offset-1">
//             <Home/>
//           </div>
//         </div>
//       </div>
//     );
//   };
// }

class App extends React.Component {

  render(){
    return(
      <Router>
        <div>
          <Route exact path="/" component={Root}/>
          <Route exact path="/user" component={User}/>
        </div>
      </Router>
    );
  }
}
render(<App /> , window.document.getElementById('app'));
