// 登入帳密取得 token
import { apiHelper } from "../utils/helpers";

export default {
  //帶入需要的參數
  signIn({ email, password }) {
    //return一個Promise
    return apiHelper.post('/signin', {
      email,
      password
    })
  },
  signUp (formData) {
    return apiHelper.post('/signup', {...formData})
  }
}