import React from "react";
import './DisplayInfor.scss'
import logo from './../logo.svg'

class DisplayInfor extends React.Component {

    state = {
        isShowList: true
    }

    handleShowHide = (event) => {
        this.setState({
            isShowList: !this.state.isShowList
        })
    }
    render() {
        const { listUsers } = this.props;
        //console.log(this.props.listUsers);

        return (
            <div className="display-infor-container">
                {/* <img src={logo} /> */}
                <div>
                    <span onClick={(event) => { this.handleShowHide(event) }}>
                        {this.state.isShowList === true ? "Hide User List" : "Show User List"}

                    </span>
                </div>
                {this.state.isShowList &&
                    <div>
                        {
                            listUsers.map((user) => {
                                return (
                                    <div key={user.id} className={user.age > 18 ? "green" : "red"}>
                                        <div>
                                            <div>My name is {user.name} </div>
                                            <div>My age is {user.age}</div>
                                        </div>
                                        <div>
                                            <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                                        </div>

                                        <hr />
                                    </div>
                                )
                            })
                        }

                    </div>
                }
            </div>
        )

    }
}

export default DisplayInfor;