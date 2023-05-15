import urls from './../utils/urls'
import axios from 'axios'
export default {
  getPlanets({ commit }) {
    commit('setPlanetsLoading', true)
    return axios
      .get(urls.planets)
      .then((data) => {
        commit('setPlanets', data.data.results)
        commit('setPlanetsLoading', false)
        commit('setPlanetsError', false)
        return Promise.resolve(data.data.results)
      })
      .catch((err) => {
        commit('setPlanetsError', true)
        commit('setPlanetsLoading', false)
        return Promise.reject(err)
      })
  },
  async getPeople({ commit }, urls) {
    commit('setPeopleLoading', true)
    const requests = []
    urls.forEach((url) => {
      requests.push(axios.get(url))
    })
    await Promise.all(requests)
      .then((data) => {
        commit('setPeople', data)
        commit('setPeopleLoading', false)
        commit('setPeopleError', false)
        return Promise.resolve(data)
      })
      .catch((err) => {
        commit('setPeopleLoading', false)
        commit('setPeopleError', true)
        console.log(err)
        return Promise.reject(err)
      })
  }
}
