import React, {Component} from 'react';
import UserSelector from "./UserSelector";
import User from "./User";

class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            selectindex: null
        }
          
            this.handelchange=this.handelchange.bind(this);
    }
    handelchange(index){
        this.setState(
            { selectindex : index}
        )
    }
    
    render() {
        return (
           <>
               <UserSelector
              handelchange={this.handelchange} 
             /// selectindex={this.state.selectindex}
              users={this.props.users} />
               <User  userId={this.props.users[this.state.selectindex]}  />
           </>
        );
    }
}

export default Main;