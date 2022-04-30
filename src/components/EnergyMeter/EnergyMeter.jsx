import React, { Component } from "react";
import {
  Table,
  Tag,
  Space,
  Modal,
  Button,
  Input,
  Form,
  InputNumber,
  Alert,
  DatePicker,
  Ran,
} from "antd";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import axios from "axios";


export default class EnergyMeter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeId: this.props.match.params.id,            
      energy: {},
      energyconsuption: 0,
      btype:'',
      homes:[],
      costumer: null,
      previousReading:"",
      energyMeterData:null,
      energyBillingData:null,
      paymentStatus: "Not-Paid",

      isOpen: false,
      visible: false,
      data: [
        {
          key: "1",
          name: "John Brown",
          age: 32,
          address: "",
          tags: [""],
        },
      ],

      dataBilling: [
        {
          key: "2",
          name: "John Brown",
          age: 32,
          address: "",
          tags: [""],
        },
      ],

      columns: [
        {
          title: "Meter ID",
          dataIndex: "meterId",
          key: "meterId",
          // render: (text) => <a>{text}</a>,
        },
        {
          title: "Card Number",
          dataIndex: "cardNumber",
          key: "cardNumber",
        },

        {
          title: "First Name",
          dataIndex: "firstName",
          key: "firstName",
        },

        {
          title: "Previous Reading",
          dataIndex: "previousReading",
          key: "previousReading",
        },

        {
          title: "Energy Consumption",
          dataIndex: "energyConsumption",
          key: "energyConsumption",
        },

        {
          title: "Home Code",
          dataIndex: "homeCode",
          key: "homeCode",
        },

        
        {
          title: "Building Type",
          dataIndex: "buildingType",
          key: "buildingType",
        },

        {
          title: "Month",
    
          dataIndex: "month",
          key: "month",
        },
        {
          title: "Status",
          
          dataIndex: "status",
          key: "status",
        },

        {
          title: "Payment",
          // key: "tags",
          dataIndex: "tags",
          key: "payment",

          render: (tags) => (
            <>
            <Button type="primary" onClick={() => this.showModal()}>
                    Pay
                  </Button>
              {/* {tags.map((tag) => {
                return (
                  <Button type="primary" onClick={() => this.showModal()}>
                    Pay
                  </Button>
                );
              })} */}
            </>
          ),
        },

        {
          title: "Action",
          key: "action",
          render: (text, record) => (
            <Space size="middle">
              <a>Invite {record.name}</a>
              <a>Delete</a>
            </Space>
          ),
        },
      ],

      columnsBilling: [
        {
          title: "Meter ID",
          dataIndex: "meterId",
          key: "meterId",
          render: (text) => <a>{text}</a>,
        },
        {
          title: "EnergyConsumption",
          dataIndex: "energyConsumption",
          key: "energyConsumption",
        },
        {
          title: "Amount Energy Consumption",
          dataIndex: "amountEnergyConsumption",
          key: "amountEnergyConsumption",
        },

        {
          title: "Month",
          dataIndex: "month",
          key: "month",
        },
        {
          title: "Status",
          dataIndex: "status",
          key: "status",
        },

        {
          title: "Sum",
          dataIndex: "sum",
          key: "sum",
        },

        {
          title: "Action",
          key: "action",
          render: (text, record) => (
            <Space size="middle">
              <a>Invite {record.name}</a>
              <a>Delete</a>
            </Space>
          ),
        },
      ],

    };


  }

  componentDidMount() {
    this.getEnergyByHome(this.state.homeId);
    
  }

  componentDidUpdate(){

  }

  getEnergyByHome = (homeId) => {
    console.log({ homeId });
    homeId = parseInt(homeId);
    console.log(typeof homeId);
    console.log(homeId);

    var apiBaseUrl = `http://localhost:8080/api/energymeter/getByHomeId/${homeId}`;

    var token = window.localStorage.getItem("token");

    var headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(apiBaseUrl, { headers: headers })
      .then((response) => {
        
        console.log({ response });

        if (response && response.data) {
          console.log("Response",response.data);
          
          this.setState({
            energy: response.data,
            
          });
        

          let energyData =  {
            "meterId": this.state.energy.id,
            "energyConsumption": this.state.energy.energyConsumption,
            "cardNumber":this.state.energy.home.user.cardNumber,
            "firstName": this.state.energy.home.user.firstName,
            "previousReading": this.state.energy.previousReading,
            "homeCode": this.state.energy.home.homeCode,
            "buildingType": this.state.energy.home.buildingType,
            "energyMeterId": "233",
            "month": "feb",
            "status": this.state.paymentStatus,
            "payment": 100,
            "action": "action"
          }

          this.setState({ energyMeterData: [energyData]})

        }
        console.log(this.state.energy)
      })
      .catch(function (error) {
        console.log({ error });
        alert(error);
      });
  };

  closePopup() {
    this.setState({ isOpen: false });
  }

  showModal = () => {
    this.setState({
      visible: true,
      object: ""
    });
  };

  // handleOk = (e) => {
  //   console.log(e);
  //   this.setState({
  //     visible: false,
  //   });
  // };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  onFinish = (values) => {
    console.log(values);
    let pay = {
      // "amount": values.paymentAmount.paymentAmount,
      // "citizenCardNumber": values.cardNumber.cardNumber,
      // "description": "string",
      // "redirectUrl": "service",
      // "serviceName": "ENERGY",
                "energyMeter": this.state.meterId,
                "energyConsumption": this.state.energyConsumption,
                "amountEnergyConsumption": this.state.amountEnergyConsumption,
                "sum": this.state.sum,

               
    }

    var token = window.localStorage.getItem("token");

    var headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    axios.post("http://localhost:8080/api/billing/save",headers,pay).then(res=>{
      if (res&&res.success) {
        // this.setState({object: res.object});
        this.setState({ energyBillingData: [billingData]})
      }
     

    }).catch((err)=> console.log(err))
   

    this.setState({ visible: false, paymentStatus: "Paid" });

    var data = this.state.energyMeterData[0]
    data.status = "Paid"
    this.setState({energyMeterData: [data]})

    console.log("payment Status", this.state.paymentStatus)

    let billingData =  {
      "energyMeter": this.state.meterId,
      "energyConsumption": this.state.energyConsumption,
      "amountEnergyConsumption": this.state.amountEnergyConsumption,
      "sum": this.state.sum,
    }

    this.setState({ energyBillingData: [billingData]})


    


  };
  layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };


  // submit form
  handleSubmit = () => {
    console.log("Submitted the  form")

    this.setState({ visible: false, paymentStatus: "Paid" });
  };


  

  render() {

 
    return (
     
      <React.Fragment>
        <Table
          columns={this.state.columns}
          dataSource={this.state.energyMeterData}
          bordered
          title={() => "Your Energy Meter Data"}
        />

       <Table
          columns={this.state.columnsBilling}
          dataSource={this.state.energyBillingData}
          bordered
          title={() => "Your Billing Data"}
        />

        {/* <Billing /> */}
        
        
        <Modal
          className="energy-meter-modal"
          title="Please Enter Your Payment Info "
          visible={this.state.visible}
          onOk={() => this.handleOk()}
          onCancel={() => this.handleCancel()}
          footer={null}
        >
          <Form
            {...this.layout}
            name="nest-messages"
            onFinish={this.onFinish}
            validateMessages={this.validateMessages}
          >
            <div className="billing-modal-select-select billing-modal-select-input">
              <Form.Item
                name={["cardNumber", "cardNumber"]}
                label="Card Number"
                rules={[
                  {
                    type: "number",
                    min: 0,
                    max: 999999999,
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                name={["AmountEnergyConsumption", "AmountEnergyConsumption"]}
                label="AmountEnergyConsumption"
                rules={[
                  {
                    type: "number",
                    min: 0,
                    max: 999999999,
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>

              <Form.Item
                name={["Sum", "Sum"]}
                label="Sum"
                rules={[
                  {
                    type: "number",
                    min: 0,
                    max: 999999999,
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
            </div>
            <Form.Item label=" " colon={false}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>

          <div className="billing-modal-submit">
            <Button type="primary" onClick={() => this.handleCancel()}>
              Cancel
            </Button>
            {/* <a target="_blank" href={this.state.object}>Ok</a>
            { this.state.object?(<a target="_blank" href={this.state.object}>Ok</a>):''}
            <Alert message="Success Text" type="success" /> */}
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}

// const { Meta } = Card;

// const columns = [
//   {
//     title: "№",
//     dataIndex: "name",
//     key: "name",
//     width: "10%",
//   },
//   {
//     title: "Home",
//     dataIndex: "age",
//     key: "age",
//     width: "20%",
//   },
//   {
//     title: "EnergyConsumption",
//     dataIndex: "address",
//     width: "30%",
//     key: "energyconsumption",
//   },

//   {
//     title: "BuildingType",
//     dataIndex: "age",
//     key: "age",
//     width: "25%",
//   },

//   {
//     title: "Action",
//     dataIndex: "",
//     key: "x",
//     // width: '12%',
//     render: () => <a>Delete</a>,
//   },
// ];



// rowSelection objects indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};





// class Billing extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOpen: false,
//       visible: false,
//       data: [
//         {
//           key: "1",
//           name: "John Brown",
//           age: 32,
//           address: "New York No. 1 Lake Park",
//           tags: ["New York"],
//         },
//         {
//           key: "2",
//           name: "Jim Green",
//           age: 42,
//           address: "London No. 1 Lake Park",
//           tags: ["loser"],
//         },
//         {
//           key: "3",
//           name: "Joe Black",
//           age: 32,
//           address: "Sidney No. 1 Lake Park",
//           tags: ["cool", "teacher"],
//         },
//       ],
//       columns: [
//         {
//           title: "Meter ID",
//           dataIndex: "name",
//           key: "name",
//           render: (text) => <a>{text}</a>,
//         },
//         {
//           title: "Energy Consumption",
//           dataIndex: "age",
//           key: "age",
//         },
//         {
//           title: "Amount Energy Consumption",
//           dataIndex: "address",
//           key: "address",
//         },

//         {
//           title: "Month",
//           key: "tags",
//           dataIndex: "tags",
//           key: "month",
//         },
//         {
//           title: "Status",
//           key: "tags",
//           dataIndex: "tags",
//           key: "status",
//         },

//         {
//           title: "Sum",
//           key: "tags",
//           dataIndex: "tags",
//           key: "sum",
//         },

//         {
//           title: "Action",
//           key: "action",
//           render: (text, record) => (
//             <Space size="middle">
//               <a>Invite {record.name}</a>
//               <a>Delete</a>
//             </Space>
//           ),
//         },
//       ],
//     };
//   }

//   closePopup() {
//     this.setState({ isOpen: false });
//   }

//   showModal = () => {
//     this.setState({
//       visible: true,
//     });
//   };

//   handleOk = (e) => {
//     console.log(e);
//     this.setState({
//       visible: false,
//     });
//   };

//   handleCancel = (e) => {
//     console.log(e);
//     this.setState({
//       visible: false,
//     });
//   };

//   onFinish = (values) => {
//     console.log(values);
//   };
//   layout = {
//     labelCol: {
//       span: 8,
//     },
//     wrapperCol: {
//       span: 16,
//     },
//   };
//   /* eslint-disable no-template-curly-in-string */

//   // submit form
//   handleSubmit = () => {
//     this.setState({ visible: false });
//   };

//   render() {
//     return (
//       // <React.Fragment>
//       <Table
//         columns={this.state.columns}
//         dataSource={this.state.data}
//         bordered
//         title={() => "Your Billing Data"}
//       />
//     );
//   }
// }
























//const { Meta } = Card;

// const columns = [
//   {
//     title: "№",
//     dataIndex: "name",
//     key: "name",
//     width: "10%",
//   },
//   {
//     title: "Home",
//     dataIndex: "age",
//     key: "age",
//     width: "20%",
//   },
//   {
//     title: "EnergyConsumption",
//     dataIndex: "address",
//     width: "30%",
//     key: "energyconsumption",
//   },

//   {
//     title: "BuildingType",
//     dataIndex: "age",
//     key: "age",
//     width: "25%",
//   },

//   {
//     title: "Action",
//     dataIndex: "",
//     key: "x",
//     // width: '12%',
//     render: () => <a>Delete</a>,
//   },
// ];

// const data = [
//   {
//     key: 1,
//     name: "John Brown sr.",
//     age: 60,
//     address: "New York No. 1 Lake Park",
//     children: [
//       {
//         key: 11,
//         name: "John Brown",
//         age: 42,
//         address: "New York No. 2 Lake Park",
//       },
//       {
//         key: 12,
//         name: "John Brown jr.",
//         age: 30,
//         address: "New York No. 3 Lake Park",
//         children: [
//           {
//             key: 121,
//             name: "Jimmy Brown",
//             age: 16,
//             address: "New York No. 3 Lake Park",
//           },
//         ],
//       },
//       {
//         key: 13,
//         name: "Jim Green sr.",
//         age: 72,
//         address: "London No. 1 Lake Park",
//         children: [
//           {
//             key: 131,
//             name: "Jim Green",
//             age: 42,
//             address: "London No. 2 Lake Park",
//             children: [
//               {
//                 key: 1311,
//                 name: "Jim Green jr.",
//                 age: 25,
//                 address: "London No. 3 Lake Park",
//               },
//               {
//                 key: 1312,
//                 name: "Jimmy Green sr.",
//                 age: 18,
//                 address: "London No. 4 Lake Park",
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     key: 2,
//     name: "Joe Black",
//     age: 32,
//     address: "Sidney No. 1 Lake Park",
//   },
// ];

// // rowSelection objects indicates the need for row selection
// const rowSelection = {
//   onChange: (selectedRowKeys, selectedRows) => {
//     console.log(
//       `selectedRowKeys: ${selectedRowKeys}`,
//       "selectedRows: ",
//       selectedRows
//     );
//   },
//   onSelect: (record, selected, selectedRows) => {
//     console.log(record, selected, selectedRows);
//   },
//   onSelectAll: (selected, selectedRows, changeRows) => {
//     console.log(selected, selectedRows, changeRows);
//   },
// };

//{
// // import dateFormat from 'dateformat';
// import React, { Component } from "react";
// // import { BsCreditCard } from "react-icons/bs";
// // import { RiBillLine } from "react-icons/ri";
// // import { Link } from 'react-router-dom';
// import { Input } from "reactstrap";
// import Nav from "../Navbar";
// import CloseButton from 'react-bootstrap/CloseButton'
// class PopUp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <div
//         style={{
//           position: "absolute",
//           inset: "0",
//           background: "rgba(0, 0, 0, .5)",
//           display: "flex",
//         }}
//         className="justify-content-center align-items-center"
//       >
//         <div
//           className="overflow-hidden bg-white w-100 m-auto"
//           style={{ maxWidth: "35rem" }}
//         >
//           <h2 className="text-white bg-primary text-center py-2">
//           Payment
//           </h2>
//           <CloseButton />
//           <div className="container p-2 overflow-hidden">
//             <div
//               className="w-100 bg-white py-3 text-center rounded"
//               style={{ boxShadow: "0 2px 5px 0 rgba(0, 0, 0, .5)" }}
//             >
//              Total Bill:
//             </div>
//             <div className="row px-3 mt-2">
//               <div className="col-5 py-2 border mt-2 rounded px-3">
//                 {/* <div className="py-1 px-4 d-block w-100 bg-success rounded text-white">
//                   Cash Payment
//                 </div> */}
//                 <div className="py-1 px-4 d-block w-100 bg-success rounded text-white mt-1">
//                 Payment by Card
//                 </div>
//               </div>
//               <div className="col-7 pl-2">
//                 <form className="py-2 border mt-2 rounded px-3 bg-white">
//                   <div className="form-group">
//                     <label htmlFor="" className="form-input-label">
//                     amountEnergyConsumption
//                     </label>
//                     <input
//                       type="number"
//                       name="abc"
//                       id="abc"
//                       className="form-control"
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="" className="form-label">
//                     Sum
//                     </label>
//                     <input
//                       type="number"
//                       name="abc"
//                       id="abc"
//                       className="form-control"
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="" className="form-label">
//                      Sum
//                     </label>
//                     <input
//                       type="number"
//                       name="abc"
//                       id="abc"
//                       className="form-control"
//                     />
//                   </div>
//                 </form>
//               </div>
//             </div>
//             <button className="btn btn-primary d-block py-1 w-100 mt-3" onClick={this.props.closePopup}>Send</button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default class Billing extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { isOpen: false };
//   }
//   closePopup() {
//     this.setState({ isOpen: false });
//   }
// render() {
//     return (
//       <div>
//         <Nav />
//         <br />
//         <h3 className="text-center mb-0  mt-0 ">YOUR BILLS</h3>
//         <div className="container  mb-0  mt-0">
//           <table className="table table-striped table-bordered table-hover ">
//             <thead className="thead-dark">
//               <tr>
//                 <th>Bill ID</th>
//                 <th>Previous Reading</th>
//                 <th>Current Reading</th>
//                 <th>Month</th>
//                 <th>Status</th>
//                 <th>Amount Energy Consumption</th>
//                 <th>View Bill</th>
//                 <th>Sum</th>
//                 <th>Payment</th>
//               </tr>
//             </thead>
//             <tbody>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td>
//                 <Input
//                   onChange={this.onChangeSearchMonth}
//                   placeholder="&#xF002;  Enter Month"
//                 />{" "}
//               </td>
//               <td>
//                 <Input
//                   onChange={this.onChangeSearchStatus}
//                   placeholder="&#xF002; Paid/Unpaid "
//                 />{" "}
//               </td>
//               <td></td>
//               <td></td>
//               <td></td>
//               <td>
//                 <button
//                   type="Submit"
//                   className="btn btn-warning"
//                   onClick={() => this.setState({ isOpen: true })}
//                 >
//                   Pay
//                 </button>
//               </td>
//               {
//                 // filterBills.map(
//                 //     bill =>
//                 //         <tr key={bill.id}>
//                 //             <td>{bill.id}</td>
//                 //             <td >{this.dateFormatHandler(bill.startDate)}</td>
//                 //             <td>{this.dateFormatHandler(bill.endDate)}</td>
//                 //             <td>{bill.month}</td>
//                 //             <td>{bill.paymentStatus}</td>
//                 //             <td><button className="btn btn-info" style={{ marginLeft: "12px" }} onClick={() => this.viewBill(bill.id)} title="View Bill"><RiBillLine size='1.3rem'>View Bill</RiBillLine></button></td>
//                 //             {(bill.paymentStatus === "Unpaid") ? (
//                 //                 <td><button className="btn btn-warning" style={{ marginLeft: "12px" }} onClick={() => this.payment(bill.id)} title="Pay Bill"><BsCreditCard size='1.3rem'>Pay</BsCreditCard></button></td>) : (
//                 //                 <td>
//                 //                     <button className="btn btn-success" disabled style={{ opacity: 0.65, cursor: 'not-allowed', marginLeft: "12px" }} title="Payment Successful!"><BsCreditCard size='1.3rem'>Pay</BsCreditCard></button></td>
//                 //             )}                                        </tr>
//                 // )
//               }
//             </tbody>
//           </table>
//         </div>
//         {this.state.isOpen && <PopUp closePopup={() => this.closePopup()} />}
//       </div>
//     );
//   }
// }
//}
