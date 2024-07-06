import React from 'react';  
class UserClass extends React.Component{
    constructor(){
        super();
        this.state={
         userInfo:{
            name:'Name',
            location:'Location',
         }
        }

    }

    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/mohammadruman');
        const jsonData = await data.json();
        console.log(jsonData);
        this.setState({userInfo:jsonData});
    }
render(){
    const {name ,location,avatar_url}=this.state.userInfo;
    return(
        <div className="bg-white shadow-md rounded-lg p-6 m-4 w-full max-w-xs mx-auto">
                <img className="rounded-full w-24 h-24 mx-auto mb-4" src={avatar_url} alt="User" />
                <h1 className="text-xl font-bold text-center mb-2">{name}</h1>
                <h3 className="text-gray-700 text-center">{location}</h3>
        </div>
    )
}
}
export default UserClass;