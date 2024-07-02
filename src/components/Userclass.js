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
        <div className='User-card'>
          <div className='gitimageuser-card'>  <img className='gitimageuser' src={avatar_url} alt="User Image"/></div>
               <h1>{name}</h1>
               <h3>{location}</h3>
        </div>
    )
}
}
export default UserClass;