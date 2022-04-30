import dateFormat from 'dateformat';
import React, { Component } from 'react';
// import { BsCreditCard } from "react-icons/bs";
// import { RiBillLine } from "react-icons/ri";
// import { Link } from 'react-router-dom';
import { Input } from 'reactstrap';
import BillService from '../../services/BillService';
import Nav from '../Navbar';
import { Table,Tag,Space,Switch } from 'antd';



const columns = [
    {
      title: 'Bill ID',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Previous Reading',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Current Reading',
      dataIndex: 'address',
      key: 'address',
    },
  
    {
      title: 'Amount Energy Consumption',
      dataIndex: 'address',
      key: 'address',
    },
  
    {
      title: 'Month',
      key: 'tags',
      dataIndex: 'tags',
      key: 'month'
    },
  {
      title: 'Status',
      key: 'tags',
      dataIndex: 'tags',
      key: 'status'
     
  },
  
  {
    title: 'Sum',
    key: 'tags',
    dataIndex: 'tags',
    key: 'sum'
   
  },
  
  
  
  {
    title: 'Payment',
    key: 'tags',
    dataIndex: 'tags',
    key: 'payment',
    
  
    render: tags => (
      
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  
  
  
    
  
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  
  
  
  const data = [
    
  ];
  

  class BillList  extends Component{
    constructor(props) {
      super(props);
      this.state = { isOpen: false, visible: false, };
    }
  
    
    closePopup() {
      this.setState({ isOpen: false });
    }
  
    showModal = () => {
      this.setState({
        visible: true,
      });
    };
  
    handleOk = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
  
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
  
    onFinish = (values) => {
      console.log(values);
    };
     layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 16,
      },
    };
    /* eslint-disable no-template-curly-in-string */
    
    
    validateMessages = {
      required: '${label} is required!',
      types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
      },
      number: {
        range: '${label} must be between ${min} and ${max}',
      },
    };
  
    
  
  
  
    render(){
      return(
       
        // <>
        // <Table columns={columns} dataSource={data}/>
  
        // </>
  
        <Table
          columns={columns}
          dataSource={data}
          bordered
          title={() => 'Your Bills'}
          
          
    />)
  
    
   
    }
  }
  export default BillList
  
































// export default class BillList extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {

//             searchMonth: '',
//             searchStatus: '',
//             bills: [],

//         }
//         this.viewBill = this.viewBill.bind(this);
//         this.onChangeSearchMonth = this.onChangeSearchMonth.bind(this);
//         this.onChangeSearchStatus = this.onChangeSearchStatus.bind(this);

//     }
//     onChangeSearchMonth = e => {
//         this.setState({ searchMonth: e.target.value.substr(0, 20) });
//     }
//     onChangeSearchStatus = e => {
//         this.setState({ searchStatus: e.target.value.substr(0, 20) });
//     }
//     componentDidMount() {

//         let details = localStorage.getItem('customer');
//         details = JSON.parse(details);
//         let email = details?.email;


//         BillService.getBillDetails(email).then((res) => {
//             this.setState({ bills: res.data });
//         });
//     }

//     viewBill(id) {
//         this.props.history.push(`/viewSingleBill/${id}`);
//     }
//     payment(id) {
//         this.props.history.push(`/payment/${id}`);
//     }

//     dateFormatHandler = (startDate) => {
//         return dateFormat(startDate, "dd-mm-yyyy");
//     }
//     dateFormatHandler = (endDate) => {
//         return dateFormat(endDate, "dd-mm-yyyy");
//     }
//     render() {
//         let filterBills = this.state.bills.filter(
//             (bill) => {
//                 if (this.state.searchStatus) {
//                     return bill.paymentStatus.indexOf(this.state.searchStatus) !== -1;

//                 }
//                 else if (this.state.searchMonth) {
//                     return bill.month.toLowerCase().indexOf(this.state.searchMonth.toLowerCase()) !== -1;

//                 }
//                 else {
//                     return bill.month.toLowerCase().indexOf(this.state.searchMonth.toLowerCase()) !== -1;

//                 }

//             }
//         );
//         return (
//             <div>
//                 <Nav />
//                 <br />
//                 <h3 className="text-center mb-0  mt-0 ">YOUR BILLS</h3>
//                 <Link href="/dashboard" to="/dashboard"><button className="btn btn-info" style={{ marginLeft: '6%', marginBottom: '1%' }}>Back</button></Link>
//                 <div className="container  mb-0  mt-0">

//                     <table className="table table-striped table-bordered table-hover ">
//                         <thead className="thead-dark">
//                             <tr>
//                                 <th>Bill ID</th>
//                                 <th>Start Date</th>
//                                 <th>Due Date</th>
//                                 <th>Month</th>
//                                 <th>Status</th>
//                                 <th>View Bill</th>
//                                 <th>Payment</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <td></td>
//                             <td></td>
//                             <td></td>
//                             <td><Input onChange={this.onChangeSearchMonth} placeholder="&#xF002;   Enter Month" /> </td>
//                             <td><Input onChange={this.onChangeSearchStatus} placeholder="&#xF002;   Paid/Unpaid " /> </td>
//                             <td></td>
//                             <td></td>
//                             {
//                                 filterBills.map(
//                                     bill =>
//                                         <tr key={bill.id}>
//                                             <td>{bill.id}</td>
//                                             <td >{this.dateFormatHandler(bill.startDate)}</td>
//                                             <td>{this.dateFormatHandler(bill.endDate)}</td>
//                                             <td>{bill.month}</td>
//                                             <td>{bill.paymentStatus}</td>
//                                             <td><button className="btn btn-info" style={{ marginLeft: "12px" }} onClick={() => this.viewBill(bill.id)} title="View Bill"><RiBillLine size='1.3rem'>View Bill</RiBillLine></button></td>

//                                             {(bill.paymentStatus === "Unpaid") ? (
//                                                 <td><button className="btn btn-warning" style={{ marginLeft: "12px" }} onClick={() => this.payment(bill.id)} title="Pay Bill"><BsCreditCard size='1.3rem'>Pay</BsCreditCard></button></td>) : (
//                                                 <td>
//                                                     <button className="btn btn-success" disabled style={{ opacity: 0.65, cursor: 'not-allowed', marginLeft: "12px" }} title="Payment Successful!"><BsCreditCard size='1.3rem'>Pay</BsCreditCard></button></td>
//                                             )}                                        </tr>
//                                 )
//                             }
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         )
//     }
// }
