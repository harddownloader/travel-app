import axios from 'axios';

type getCountryData = (id: string, lang: string | null) => any
const getCountryData: getCountryData = async (id, lang='en') => {
    const url = `https://rsschool-travel-app-be.herokuapp.com/countries/${id}?lang=${lang}`
    const response = await axios.get(url)
    return response.data
  }

  export default getCountryData