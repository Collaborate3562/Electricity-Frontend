//import React, { Component } from 'react';
import { RiBillLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import CustomerServices from '../../services/CustomerServices';
import Nav from '../Navbar';
import React, { useContext,Component, useState, useEffect, useRef } from 'react';
import { Table, Input, Button, Popconfirm, Form,Space } from 'antd';
import axios from 'axios';

const columns = [
  {
    title: '№',
    dataIndex: 'id',
    key: 'id',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Card Number',
    dataIndex: 'cardNumber',
    key: 'cardNumber',
  },
  {
    title: 'First Name',
    dataIndex: 'homeCode',
    key: 'homeCode',
  },

  {
      title: 'Gender',
      dataIndex: 'homeNumber',
      key: 'homeNumber',
    },


    {
      title: 'Birth Date',
      dataIndex: 'street',
      key: 'street',
    },

    {
      title: 'Marital Status',
      dataIndex: 'district',
      key: 'district',
    },


    {
      title: 'Photo Id',
      dataIndex: 'buildingType',
      key: 'buildingType',
    },

    
    {
      title: 'Address',
      dataIndex: 'buildingType',
      key: 'buildingType',
    },

    {
      title: 'Parents',
      dataIndex: 'buildingType',
      key: 'buildingType',
    },

    {
      title: 'City',
      dataIndex: 'buildingType',
      key: 'buildingType',
    },

    {
      title: 'Active',
      dataIndex: 'buildingType',
      key: 'buildingType',
    },


 
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.cardNumber}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

class CustomerList extends Component {

constructor(props) {
          super(props);
          this.state = {
              customer:[],
          }
      }
    // }
  componentDidMount() {
      this.getAllCustomers();

  }

  // componentDidMount() {

  //     HomeService.getAllHomes().then((res) => {
  //         this.setState({ homes: res.data });
  //     });
  // }

  getAllCustomers(){
      var apiBaseUrl = "http://localhost:8080/api/user/all  ";
      var token = window.localStorage.getItem("token");
      console.log(token);

      var headers = {
          // 'Content-Type': 'application/json',
          'Authorization':`Bearer ${token}`
      }



      axios.get(apiBaseUrl, { headers: headers }).then((response) =>{
          if(response&&response.data){
              console.log(response);
              this.setState({
                  homes: response.data
              });
          }
      }).catch(function (error) {
          //console.log(error);
          alert(error)

      });
  }

  handleClick() {
      console.log("clicked")
  }
  listHomes=[];
  




render() {
  return (
      <Table
      columns={columns}
     // rowSelection={{ ...rowSelection, checkStrictly }}
      dataSource={this.state.customer}
      
          title={() => 'Customer List'}
      />
  );
}
}
export default CustomerList





























// export default class customerList extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {

//             customers: [],

//         };
//         this.viewCustomer = this.viewCustomer.bind(this);

//     }
//     viewCustomer(id) {
//         this.props.history.push(`/viewSingleCustomer/${id}`);
//     }

//     componentDidMount() {

//         CustomerServices.getAllCustomer().then((res) => {
//             this.setState({ customers: res.data });
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <Nav /><br></br>
//                 <h3 className="text-center">ALL Customer List</h3>
//                 <div className="container" >
//                 <Link href="/adminDashboard" to="/adminDashboard"><button className="btn btn-primary" style={{ marginBottom: "10px" }}> Back</button></Link>
//                     <table className="table table-striped table-bordered table-hover " style={{ width: "100%" }}>
//                         <thead className="thead-dark">
//                             <tr className="text-center">
//                                 <th>Customer ID</th>
//                                 <th>CardNumber;</th>
//                                 <th>First Name</th>
//                                 <th>Last Name</th>
//                                 <th>Gender</th>
//                                 <th>BirthDate</th>
//                                 <th>MaritalStatus</th>
//                                 <th>PhotoId</th>
//                                 <th>Address</th>
//                                 <th>Parents</th>
//                                 <th>City</th>
//                                 <th>Active</th>
                            
//                             </tr>
//                         </thead>
//                         <tbody className="text-center" >
//                             {
//                                 this.state.customers.map(
//                                     customer =>
                                   
//                                         <tr key={customer.id}>
//                                             <td>{customer.id}</td>
//                                             <Link to={'/viewSingleCustomer/'+customer.id}>
//                                                 <td>{customer.firstName}</td>
//                                             </Link>
//                                             <td>{customer.lastName}</td>
//                                             <td>{customer.email}</td>
//                                             <td>{customer.mobile}</td>
//                                             <td>{customer.address}</td>
//                                             <td>{customer.state}</td>
//                                             <td>{customer.city}</td>
//                                             <td>{customer.pincode}</td>
//                                             <td>

//                                                 <button className="btn btn-info" style={{ marginLeft: "5" }} onClick={() => this.viewCustomer(customer.id)} title="View Customer Details"><RiBillLine size='1.5rem'>View Customer</RiBillLine></button>

//                                             </td>
//                                         </tr>
                                      
//                                 )
//                             }
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         )
//     }
// }
