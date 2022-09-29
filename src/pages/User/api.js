import axios from "axios"
import BaseApi from "../../api"

class UserApi extends BaseApi {
  static getPostsbyUser(userId) {
    return axios.get(`${this.apiBaseUrl}/posts?userId=${userId}`)
  }

  static getUserbyId(userId) {
    return axios.get(`${this.apiBaseUrl}/users?id=${userId}`)
  }
}

export default UserApi
