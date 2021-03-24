// Google books API

// make api call to search books

import axios from "axios";
const API = {
    getBooks: function (term){
        return axios.get("https://www.googleapis.com/books/v1/volumes?", {params: {q:"title:" + term}})
    }
}

export default API;