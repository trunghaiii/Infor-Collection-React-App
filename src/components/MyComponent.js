import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor"


class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "Eric", age: 16 },
            { id: 2, name: "Harry", age: 30 },
            { id: 3, name: "Hoi dan IT", age: 69 }
        ]
    }

    handleAddUser = (userObj) => {
        //console.log(userObj);
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }

    handleDeleteUser = (userId) => {
        let listUsersClone = this.state.listUsers;
        listUsersClone = listUsersClone.filter(item => item.id !== userId)

        this.setState({
            listUsers: listUsersClone
        })
    }

    render() {
        return (
            <div>
                <AddUserInfor handleAddUser={this.handleAddUser} />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                    handleDeleteUser={this.handleDeleteUser}
                />
            </div>
        );
    }
}

export default MyComponent;