import {connect} from "react-redux";
import {
    follow, getUsersThunkCreator,
    setCurrentPage,
    toggleDisableOfFollow,
    unfollow
} from "../../redux/usersReducer";
import Users from "./Users";
import React from "react";
import Preloader from "../common/preloader/Preloader"
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (currentPageNumber) => {
        this.props.setCurrentPage(currentPageNumber);
        this.props.getUsers(currentPageNumber, this.props.pageSize);
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
    follow, unfollow, setCurrentPage,
    toggleDisableOfFollow,
    getUsers: getUsersThunkCreator
};

export default withAuthRedirect(
    connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
);


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
//
//
//
// getUsersThunkCreator is experimental might not be true!
//         getUsersThunkCreator: (currentPage, pageSize) => {
//             return (dispatch) => {
//                 dispatch(toggleIsFetching(true));
//                 usersAPI.getUsers(currentPage, pageSize)
//                     .then(res => {
//                         dispatch(toggleIsFetching(false));
//                         dispatch(setUsers(res.Users));
//                         dispatch(setTotalUsersCount(res.TotalCount));
//                     })
//             }
//         },
//     }
// }