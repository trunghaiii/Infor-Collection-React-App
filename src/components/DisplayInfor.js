import React, { useState } from "react";
import './DisplayInfor.scss'
import logo from './../logo.svg'

const DisplayInfor = (props) => {
    const { listUsers, handleDeleteUser } = props;
    //console.log(this.props.listUsers);
    const [hideShowList, setHideShowList] = useState(true);

    const handleShowHide = () => {
        setHideShowList(!hideShowList);
    }

    return (
        <div className="display-infor-container">
            <span onClick={() => handleShowHide()}>
                {hideShowList === true ? "Hide the List" : "Show the List"}
            </span>

            {hideShowList &&
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
                                        <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
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

export default DisplayInfor;