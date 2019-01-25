import React, { Component } from "react";
import $ from "jquery";
import FriendList from "./FriendProfile/FriendList";
import AddListForm from './AddListForm/AddListForm';
import Lists from './Lists/Lists';
import { Link } from "react-router-dom";



class UserProfile extends Component {
  state = {
    lists: {}
  };

  addList = list => {
    //copy of existing state
    const lists = { ...this.state.lists };
    //add new list to lists
    lists[`list`] = list;
    //set new lists object to state
    this.setState({
      lists
    });
    console.log("window" + window);
  };

    addList = list => {
        //copy of existing state
        const lists = {...this.state.lists};
        //add new list to lists
         lists[`list`] = list;
         //set new lists object to state
         this.setState({
             lists
         })
         console.log("window"+window)
    }
    render() {
        return (
            <div className="profile-container">
                <h1>Profile Page</h1>
                <h2>Add New List</h2>
                <AddListForm addList={this.addList}/>
                {/* <ul className="lists">
                <ul className="lists">
                    {Object.keys(this.state.lists).map( key => 
                    <Link to={"/list"}>
                    <Lists key={key} details={this.state.lists}/>
                  </Link>
                  )}

                </ul> */}

                <FriendList />
            </div>
        );
    }
}

export default UserProfile;
