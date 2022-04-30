import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import AboutUs from './components/AboutUs';
import Admin from './components/AdminComponents/Admin';
import AdminDashboard from './components/AdminComponents/AdminDashboard';
import adminLogin from './components/AdminComponents/AdminLogin';
import AdminProfile from './components/AdminComponents/AdminProfile';
import AdminUpdate from './components/AdminComponents/AdminUpdate';
import AdminViewSingleBill from './components/BillComponent/AdminViewSingleBill';
import BillList from './components/BillComponent/BillList';
import CreateBill from './components/BillComponent/CreateBill';
import ViewBillList from './components/BillComponent/ViewBillList';
import ViewSingleBill from './components/BillComponent/ViewSingleBill';
import Contact from './components/Contact';
import AddMoreDetails from './components/CustomerComponents/AddMoreDetails';
import CustomerDashboard from './components/CustomerComponents/CustomerDashboard';
import customerList from './components/CustomerComponents/CustomerList';
import CustomerLogin from './components/CustomerComponents/CustomerLogin';
import CustomerRegister from './components/CustomerComponents/CustomerRegister';
import SeeProfile from './components/CustomerComponents/SeeProfile';
import UpdateCustomer from './components/CustomerComponents/UpdateCustomer';
import ViewSingleCustomer from './components/CustomerComponents/ViewSingleCustomer';
import FAQ from './components/FAQ';
import Home from './components/Home';
import Logout from './components/Logout';
import AdminChange from './components/PasswordComponent/AdminChange';
import AdminForgot from './components/PasswordComponent/AdminForgot';
import ChangePassword from './components/PasswordComponent/ChangePassword';
import ForgotPassword from './components/PasswordComponent/ForgotPassword';
import CustomerPayment from './components/PaymentComponent/CustomerPayment';
import CustomerPaymentHistory from './components/PaymentComponent/CustomerPaymentHistory';


import PaymentHistory from './components/PaymentComponent/PaymentHistory';
import ListPayment from './components/PaymentComponent/ListPayment';
import EnergyMeter from './components/EnergyMeter/EnergyMeter';
//import { Payment } from './components/PaymentComponent/Payment';
// import EnergyMeter from './components/EnergyMeter/EnergyMeter';
import Homes from './components/Homes/Homes';
import AdminEnergyMeter from './components/AdminComponents/AdminEnergyMeter';
import ViewHomes from './components/Homes/ViewHomes';


class App extends React.Component {
  render() {
    return (

      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={Contact} />
         
          <Route path="/dashboard" component={CustomerDashboard} />
          <Route path="/logout" component={Logout} />
          <Route path="/allBills" component={ViewBillList} />
          <Route path="/add" component={AddMoreDetails} />
          <Route path="/profile" component={SeeProfile} />
          <Route path="/update" component={UpdateCustomer} />
          <Route path="/listBills" component={BillList} />
          <Route path="/viewSingleBill/:id" component={ViewSingleBill} />
          <Route path="/admin" component={Admin} />
          <Route path="/adminDashboard" component={AdminDashboard} />
          <Route path="/adminProfile" component={AdminProfile} />
          <Route path="/adminLogin" component={adminLogin} />
          <Route path="/payment/:id" component={CustomerPayment} />
          <Route path="/createBill" component={CreateBill} />
          <Route path="/paymentHistory" component={CustomerPaymentHistory} />
          <Route path="/faq" component={FAQ} />
          <Route path="/adminUpdate" component={AdminUpdate} />
          <Route path="/customerList" component={customerList} />
          <Route path="/viewSingleCustomer/:id" component={ViewSingleCustomer} />
          <Route path="/adminViewBill/:id" component={AdminViewSingleBill} />
          <Route path="/changePassword" component={ChangePassword} />
          <Route path="/forgotPassword" component={ForgotPassword} />
          <Route path="/adminForgot" component={AdminForgot} />
          <Route path="/allPayment" component={ListPayment} />
          <Route path="/adminChangePassword" component={AdminChange} />


          {/* <Route path="/adminEnergyMeter" component={AdminEnergyMeter} /> */}
          <Route path="/customerLogin" component={CustomerLogin} />
          <Route path="/register" component={CustomerRegister} />
          {/* <Route path="/bill/:id" component={Billing} /> */}
          <Route path="/pay" component={PaymentHistory} />
          <Route path="/energyMeter/:id" component= {EnergyMeter}/>
          
          <Route path="/homes" component={Homes}/>

          <Route path="/customerList" component={customerList} />
          <Route path="/adminEnergyMeter" component={AdminEnergyMeter}/>
          <Route path="/viewhome" component={ViewHomes}/>

        </Switch>
      </Router>
    )
  }
}

export default App;

