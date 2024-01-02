import axios from 'axios'

export default class ProductService {

    getProducts() {

        return axios.get("http://localhost:5295/api/Products?PageIndex=0&PageSize=5")

    }
}