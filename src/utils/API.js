import axios from "axios";

const URL = `https://randomapi.com/api/${process.env.REFID}?key=${process.env.APIKEY}`;
const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(URL + query);
  }
};
