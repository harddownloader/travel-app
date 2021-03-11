import axios from 'axios';

type getCountryData = (id: string) => any
const getCountryData: getCountryData = async (id) => {    
      const response = await axios.get(`https://travel-app-demo.herokuapp.com/countries/${id}?lang=ru`)
      return response.data
  }

  export default getCountryData