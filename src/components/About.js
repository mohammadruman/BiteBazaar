import { Component } from "react";

import Userclass from "./Userclass";
class About extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){

    }
    render(){
 return (
        <div>
            <h1 className="font-bold text-center text-5xl">Team</h1>
        
          <Userclass/>
        </div>
    )
    }
   
}
export default About;