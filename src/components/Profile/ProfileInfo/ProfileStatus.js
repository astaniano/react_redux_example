import React from "react";

class ProfileStatus extends React.Component {
    statusInputRef = React.createRef();

    state = {
        editMode: false,
        userStatus: this.props.userStatus,
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deactivateEditMode = () => {
        this.setState({editMode: false});
        // let userId = this.props.match.params.userId;
        // this.props.updateUserStatus(userId, this.state.userStatus);
        this.props.updateUserStatus(1, this.state.userStatus);
    }

    onStatusChange = (e) => {
        this.setState({userStatus: e.target.value})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.userStatus !== this.props.userStatus) {
            this.setState({userStatus: this.props.userStatus})
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input onChange={this.onStatusChange} autoFocus={true}
                               onBlur={ this.deactivateEditMode } value={this.state.userStatus} />
                    </div>
                    : <div>
                    <span onDoubleClick={ this.activateEditMode }>{this.props.userStatus || "-----"}</span>
                    </div>
                }
            </div>
        );
    };

}

export default ProfileStatus;