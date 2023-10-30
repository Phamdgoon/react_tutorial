// import axios from "axios";
import axios from "./CustomizeAxios";
const fetchAllUser = (page) => {
    return axios.get(`/api/users?page=${page}`);
};

export default fetchAllUser;
