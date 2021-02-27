import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleDisableOfFollow,
    toggleIsFetching,
    unfollow
} from "../../redux/usersReducer";
import Users from "./Users";
import React from "react";
import Preloader from "../common/preloader/Preloader"
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(res => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(res.Users);
                this.props.setTotalUsersCount(res.TotalCount);
            })
    }

    onPageChanged = (currentPageNumber) => {
        this.props.setCurrentPage(currentPageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(currentPageNumber, this.props.pageSize)
            .then(res => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(res.Users);
            })
    }

    render() {
        return (<>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    onPageChanged={this.onPageChanged}
                    toggleDisableOfFollow={this.props.toggleDisableOfFollow}
                    disabledFollowButtons={this.props.disabledFollowButtons}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        disabledFollowButtons: state.usersPage.disabledFollowButtons,
    }
}

const mapDispatchToProps = {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleDisableOfFollow
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);


// long way of mapDispatchToProps
// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (currentPageNumber) => {
//             dispatch(setCurrentPageAC(currentPageNumber));
//         },
//         setTotalUsersCount: (totalUsersCount) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         },
//     }
// }