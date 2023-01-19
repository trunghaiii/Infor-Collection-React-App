import React from "react";

class AddUserInfor extends React.Component {

    state = {
        name: "",
        address: "Hoi dan IT",
        age: ''
    }


    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);

        this.props.handleAddUser({
            id: Math.floor(Math.random() * 100) + 1,
            name: this.state.name,
            age: this.state.age
        });
    }

    render() {
        return (
            <div>
                My name is {this.state.name} and I am {this.state.age}
                <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
                    <input value={this.state.name}
                        onChange={(event) => { this.handleOnChangeName(event) }} type="text"></input>

                    <input value={this.state.age}
                        onChange={(event) => { this.handleOnChangeAge(event) }} type="text"></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddUserInfor