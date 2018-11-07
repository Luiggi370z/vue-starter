import BaseApi from './baseApi'

class Users extends BaseApi {
  get entity() {
    return 'users'
  }

  // Add any custom method different from CRUD actions inherited from baseApi
}

export default new Users()
