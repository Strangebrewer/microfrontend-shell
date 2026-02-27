import BaseApi from './baseApi';

class UserApi extends BaseApi {
  constructor() {
    super('users');
  }

  me() {
    return this.axiosWithAuth.get(`${this.endpoint}/me`);
  }

  login(data: any) {
    return this.axios.post(`${this.endpoint}/login`, data);
  }

  logout(token: string) {
    return this.axios.post(`/tokens/revoke`, null, { headers: { Authorization: `Bearer ${token}`}});
  }

  register(data: any) {
    return this.axios.post(`${this.endpoint}/register`, data);
  }

  updatePassword(data: any) {
    return this.axiosWithAuth.put(`${this.endpoint}/password`, data)
  }

  updateUser(data: any) {
    return this.axiosWithAuth.put(`${this.endpoint}`, data);
  }

  // override delete(id: string) {
  //   try {
  //     return this.axiosWithAuth.delete(`${this.endpoint}/${id}`);
  //   } catch (error) {
      
  //   }
  //   console.log('no functionality to delete a user since it\'s just me');
  // }
}

export default new UserApi();
