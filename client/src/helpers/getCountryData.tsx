import axios from 'axios';

type getCountryData = (id: string) => any
const getCountryData: getCountryData = async (id) => {    
      const response = await axios.get(`https://travel-app-demo.herokuapp.com/countries/${id}`)
      return response.data
  }

  export default getCountryData