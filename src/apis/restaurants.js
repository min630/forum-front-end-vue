import { apiHelper } from "../utils/helpers";

const getToken = () => localStorage.getItem('token')

export default {
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({page, categoryId}) //會得到像"page=1&categoryId=3"的物件，要透過toStrung()變成字串使用
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {headers: {Authorization: `Bearer ${getToken()}`}})
  },
  getFeeds() {
    return apiHelper.get('/restaurants/feeds', {headers: {Authorization: `Bearer ${getToken()}`}})
  },
  getTopRestaurants() {
    return apiHelper.get('/restaurants/top', { headers: { Authorization: `Bearer ${getToken()}` } })
  },
  getRestaurant({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`, {headers: { Authorization: `Bearer ${getToken()}` } })
  }
  
}