import axios from 'axios';
const Payment_API_BASE_URL = "http://localhost:8081/springfox/api/payment";

class PaymentService{
    getPaymentOfCustomer(email){
        return axios.get(Payment_API_BASE_URL + '/payment/' + email);
    }
    getAllPayment(){
        return axios.get(Payment_API_BASE_URL+'/payment');
    }

    savePayment(billId,payment){
        return axios.post(Payment_API_BASE_URL+'/pay/'+billId, payment);
    }

    getPaymentById(payId){
        return axios.get(Payment_API_BASE_URL + '/pay/' + payId);
    }

   
    deletePayment(payId){
        return axios.delete(Payment_API_BASE_URL + '/' + payId);
    }
}

export default new PaymentService();