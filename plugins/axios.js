export default function ({ $axios, env }) {
  $axios.setBaseURL(`${env.BASE_URL}/`)
  $axios.setHeader('Accept', 'application/json')

  $axios.interceptors.response.use(
    (response) => {
      return Promise.resolve(response.data.data || response.data)
    },
    (error) => {
      return Promise.reject(error)
    }
  )
}
