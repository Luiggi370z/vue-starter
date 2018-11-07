import axios from 'axios'

export default class BaseApi {
  constructor() {
    if (!this.entity) {
      throw new Error('Child api class not provide entity')
    }
  }

  getById(id = window.required()) {
    return axios.get(`${this.entity}/${id}`)
  }
}
