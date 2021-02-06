import axios from 'axios'

export const getData = async () => {
    
    try {
        const config = {
          url: 'https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json',
          method: 'get'
        }
        const response = await axios.request(config)
        return response.data
      } catch (error) {
        console.log(error)
        return error
      }
}