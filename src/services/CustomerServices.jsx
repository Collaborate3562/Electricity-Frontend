import axios from 'axios';
const Customer_API_BASE_URL = "http://localhost:8080/api/user";
const apiBaseUrl = "http://localhost:8080/api/account";
class CustomerServices {
    getCustomerById(custId) {
        return axios.get(Customer_API_BASE_URL + '/' + custId,{headers:{'Authorization' : 'Bearer ' + localStorage.getItem("token")}});
    }

    getCurrentCostumer() {
        return axios.get(apiBaseUrl, {headers:{'Authorization' : 'Bearer ' + localStorage.getItem("token")}});
    }

    updateCustomerProfile(customer) {
        return axios.put(Customer_API_BASE_URL + `/${customer}`, customer);
    }

    addMoreDetails(customer, id) {
        return axios.put(Customer_API_BASE_URL + '/addMore/' + id, customer);
    }

    getAllCustomer(){
        return axios.get(Customer_API_BASE_URL+'/all',{headers:{'Authorization' : 'Bearer ' + localStorage.getItem("token")}});
    }

}
export default new CustomerServices();
