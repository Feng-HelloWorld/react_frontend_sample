import axios from "axios"
import BaseApi from "../../api"

class HomeApi extends BaseApi {
  static getPosts() {
    return axios.get(`${this.apiBaseUrl}/posts`)
  }

  static getUsers() {
    return axios.get(`${this.apiBaseUrl}/users`)
  }
}

export default HomeApi
