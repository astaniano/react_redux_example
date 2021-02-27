import * as axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8081/api/1.0/',
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    }
}
