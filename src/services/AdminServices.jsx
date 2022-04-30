import axios from 'axios';
const Admin_API_BASE_URL = "http://localhost:8081/springfox/admin";

class AdminServices {
    // getById(adminId) {
    //     return axios.get(Admin_API_BASE_URL + '/' + adminId);
    // }

    // getAdminIdByEmail(adminEmail) {
    //     return axios.get(Admin_API_BASE_URL + '/adminEmail/' + adminEmail);
    // }

    // updateAdminProfile(admin) {
    //     return axios.put(Admin_API_BASE_URL + '/', admin);
    // }

    // addAdminDetails(admin, id) {
    //     return axios.put(Admin_API_BASE_URL +'/'+  id, admin);
    // }
     

    // getUser() {
    //     return axios.get(Admin_API_BASE_URL, {headers:{'Authorization' : 'Bearer ' + localStorage.getItem("token")}});
    // }


    // getHomes=()=>{
    //     return axios.get(`"http://localhost:8081/api/home/getAll`)
    // }

}
export default new AdminServices();