import React, {Component} from 'react';

class User extends Component {
    constructor(props){
        super(props);
        this.state={
            user: null
        }
    }

     async requ(userId){
        const response= await fetch (`https://jsonplaceholder.typicode.com/users/${userId}`)
        return await (await response).json();
    }
    
    componentDidUpdate(prevProps,prevState){
        if(prevProps.userId !== this.props.userId){
          this.requ(this.props.userId).then(user => this.setState(
              {
                  user
                }
                )
            
            )}
    }
    
    render() {
             return (
                   <>
                   
                    {this.state.user && 
                        <div className="section">
                    <p> id: {this.state.user.id} </p>
                    <p> name: {this.state.user.name} </p>
                    <p> username: {this.state.user.id} </p>
                    <p> email: {this.state.user.email} </p>
                    <p> phone: {this.state.user.phone} </p>
    
                </div>}
                   </>
            
        );
    }
}

export default User;