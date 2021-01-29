import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import React from "react";
import Preloader from "../common/preloader/Preloader"

class UsersContainerAPI extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(res.data.items);
            this.props.setTotalUsersCount(res.data.totalCount);
        })
    }

    onPageChanged = (currentPageNumber) => {
        this.props.setCurrentPage(currentPageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPageNumber}&count=${this.props.pageSize}`).then(res => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(res.data.items);
        })
    }

    render() {
        return (<>
                { this.props.isFetching ? <Preloader /> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    onPageChanged={this.onPageChanged}
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
    }
}

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

const mapDispatchToProps = {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI);

export default UsersContainer;