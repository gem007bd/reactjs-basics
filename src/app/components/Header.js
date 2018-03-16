import React from "react";

// export class Header extends React.Component{
//   render(){
//     return(
//       <nav className="navbar navbar-default">
//         <div className="navbar-header">
//             <ul className="nav navbar-nav">
//               <li><a href="#">Home</a></li>
//             </ul>
//         </div>
//       </nav>
//     );
//   }
// }

export const Header = (props) => {
    return(
      <nav className="navbar navbar-default">
        <div className="navbar-header">
            <ul className="nav navbar-nav">
              <li><a href="#">Home</a></li>
              <li><a href="/user">User</a></li>
              <li><a href="#">Service</a></li>
            </ul>
        </div>
      </nav>
    );
};
