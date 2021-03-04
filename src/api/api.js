import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8081/api/1.0/',
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    follow(userId) {
        return instance.post(`users/follow/${userId}`);
    },
    unfollow(userId) {
        return instance.delete(`users/follow/${userId}`)
    },

}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateUserStatus(userId, status) {
        return instance.put(`profile/status/${userId}`, {status});
    },
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
    }
}