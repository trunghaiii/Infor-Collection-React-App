import React, { useState } from "react";

const AddUserInfor = (props) => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('Hoi dan IT');
    const [age, setAge] = useState('');



    const handleOnChangeName = (event) => {
        setName(event.target.value)
    }

    const handleOnChangeAge = (event) => {
        setAge(event.target.value)
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();

        props.handleAddUser({
            id: Math.floor(Math.random() * 100) + 1,
            name: name,
            age: age
        });
    }

    return (
        <div>
            My name is {name} and I am {age}
            <form onSubmit={(event) => { handleOnSubmit(event) }}>
                <input value={name}
                    onChange={(event) => { handleOnChangeName(event) }} type="text"></input>

                <input value={age}
                    onChange={(event) => { handleOnChangeAge(event) }} type="text"></input>
                <button>Submit</button>
            </form>
        </div>
    );
}

// class AddUserInfor extends React.Component {

//     state = {
//         name: "",
//         address: "Hoi dan IT",
//         age: ''
//     }


//     handleOnChangeName = (event) => {
//         this.setState({
//             name: event.target.value
//         })
//     }

//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value
//         })
//     }

//     handleOnSubmit = (event) => {
//         event.preventDefault();
//         console.log(this.state);

//         this.props.handleAddUser({
//             id: Math.floor(Math.random() * 100) + 1,
//             name: this.state.name,
//             age: this.state.age
//         });
//     }

//     render() {
//         return (
//             <div>
//                 My name is {this.state.name} and I am {this.state.age}
//                 <form onSubmit={(event) => { this.handleOnSubmit(event) }}>
//                     <input value={this.state.name}
//                         onChange={(event) => { this.handleOnChangeName(event) }} type="text"></input>

//                     <input value={this.state.age}
//                         onChange={(event) => { this.handleOnChangeAge(event) }} type="text"></input>
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

export default AddUserInfor