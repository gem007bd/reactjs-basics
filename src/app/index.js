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
  // constructor(){
  //   super();
  //   this.state = {
  //     homeLink: "Home",
  //     homeMounted: true
  //   };
  // }
  // onGreet(){
  //   alert("this is from Greet method");
  // }
  // onChangeLinkName(newName){
  //   this.setState({
  //     homeLink: newName
  //   });
  // }
  //
  // onChangeHomeMounted(){
  //   this.setState({
  //     homeMounted: !this.state.homeMounted
  //   });
  // }
  // render(){
  //   let homeComp = "";
  //   if(this.state.homeMounted){
  //     homeComp = (
  //       <Home
  //         name={"max"}
  //         initialAge={30}
  //         greet={this.onGreet}
  //         changeLink={this.onChangeLinkName.bind(this)}
  //         initialLinkName={this.state.homeLink}
  //       />
  //     );
  //   }
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
