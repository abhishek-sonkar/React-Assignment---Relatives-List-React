import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    render() {
        const relatives = ["bua", "naani", "mausi", "padosi"];
        return(
            <div id="main">
               <ol key="relativeList">
                   {relatives.map((relative, idx) => (
                       <li key={"relativeListItem" + (idx + 1)}>{relative}</li>
                   ))}
               </ol>
            </div>
        );
    }
}


export default App;
