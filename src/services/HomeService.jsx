import axios from 'axios';
const Customer_API_BASE_URL = "http://localhost:8080/api/home";

class HomeService {
    getCustomerById(custId) {
        return axios.get(Customer_API_BASE_URL + '/' + custId);
    }

    getCurrentCostumer() {
        return axios.get(Customer_API_BASE_URL, {headers:{'Authorization' : 'Bearer ' + localStorage.getItem("token")}});
    }

    updateCustomerProfile(customer) {
        return axios.put(Customer_API_BASE_URL + '/', customer);
    }

    addMoreDetails(customer, id) {
        return axios.put(Customer_API_BASE_URL + '/addMore/' + id, customer);
    }

    getAllHomes(){
        return axios.get(Customer_API_BASE_URL+'/getAllUsersWithHomes',{headers:{'Authorization' : 'Bearer ' + localStorage.getItem("token")}});
    }

}
export default new HomeService();