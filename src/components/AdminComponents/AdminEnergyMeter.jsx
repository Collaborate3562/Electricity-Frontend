import React, { Component } from "react";
import { Modal, Select } from "antd";
import Nav from "../Navbar";
import axios from "axios";
import { Table, Space, Switch } from "antd";
import { Form, Input, InputNumber, Button } from 'antd';
import "../../css/energy-meter.css";
import {getHomes} from "../../services/AdminServices"


const { Option } = Select;
const columns = [
  {
    title: "№",
    dataIndex: "id",
    key: "id",
    width: "10%",
  },
  {
    title: "Home",
    dataIndex: "homeCode",
    key: "homeCode",
    width: "20%",
  },
  {
    title: "EnergyConsumption",
    dataIndex: "energyConsumption",
    width: "30%",
    key: "energyConsumption",
  },

  {
    title: "BuildingType",
    dataIndex: "buildingType",
    key: "buildingType",
    width: "25%",
  },
  {
    title: "cardNumber",
    dataIndex: "cardNumber",
    key: "cardNumber",
    width: "15%",
  },
  
  {
    title: "firstName",
    dataIndex: "firstName",
    key: "firstName",
    width: "15%",
  },

  {
    title: "Action",
    dataIndex: "",
    key: "x",
    // width: '12%',
    render: () => <a>Delete</a>,
  },
];
const data = [
  {
    key: 1,
    name: "John Brown sr.",
    age: 60,
    address: "New York No. 1 Lake Park",
    children: [
      {
        key: 11,
        name: "John Brown",
        age: 42,
        address: "New York No. 2 Lake Park",
      },
      {
        key: 12,
        name: "John Brown jr.",
        age: 30,
        address: "New York No. 3 Lake Park",
        children: [
          {
            key: 121,
            name: "Jimmy Brown",
            age: 16,
            address: "New York No. 3 Lake Park",
          },
        ],
      },
      {
        key: 13,
        name: "Jim Green sr.",
        age: 72,
        address: "London No. 1 Lake Park",
        children: [
          {
            key: 131,
            name: "Jim Green",
            age: 42,
            address: "London No. 2 Lake Park",
            children: [
              {
                key: 1311,
                name: "Jim Green jr.",
                age: 25,
                address: "London No. 3 Lake Park",
              },
              {
                key: 1312,
                name: "Jimmy Green sr.",
                age: 18,
                address: "London No. 4 Lake Park",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
];

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

class AdminEnergyMeter extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, visible: false };
    this.state = {
     homes:{},
     energies:[],
     value:'',
     target:'',
     home: -1,
     energyconsuption: 0,
     btype:'',
     visible: false,
     

 };
    this.saveEnergy = this.saveEnergy.bind(this);
           
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  onFinish = (values) => {
    this.handleOk();
    console.log(values);
    var energyObj={
      homeId: null,
      energyConsumption:null,
      residential:'',
      //institutional:'',
    }
    if (values) {
      if (values.Home.homeId) {
        energyObj.homeId = values.Home.homeId;
      }
      if(values.energyConsumption.energyConsumption){
        energyObj.energyConsumption = values.energyConsumption.energyConsumption;
      }
      if(values.residential.residential){
        energyObj.residential = values.residential.residential;
      }
      // if(values.institutional.institutional){
      //   energyObj.institutional = values.institutional.institutional;
      // }
      console.log(energyObj);
      if(energyObj.homeId&&energyObj.energyConsumption&&energyObj.residential){
        this.saveEnergy(energyObj);
        window.location.reload();
      }
    }
  };
  
  layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  componentDidMount(){
    this.getHomesList();
    this.getEnergyList();
  }
        headers = {
                // 'Content-Type': 'application/json',
                'Authorization':`Bearer ${this.token}`
          }

    saveEnergy(energy){
     
      var token = window.localStorage.getItem("token");
      console.log(token);

      var headers = {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${token}`
      }
     

      axios.post("http://localhost:8080/api/energymeter/save ",energy,{headers:headers}).then(response=>{
        if (response) {
          console.log(response);
          alert("save!") 
        }
          
        
        // this.props.energyDetails(response);
      })

    }

    handleChange=(event)=>{
        this.setState({
            btype: event.target.value,
        })
        console.log(event.target.value);
    }
    onChangeEnergy = e => {
        console.log(e.target.value);
        this.setState({ energyconsuption: e.target.value });

    }

    handleChangeHome=(newValue)=>{
        this.setState({
            home: newValue,
        })
        console.log({newValue});
    }

    getEnergyList=()=>{
      var apiBaseUrl = "http://localhost:8080/api/energymeter/all";
  
      var token = window.localStorage.getItem("token");
     
  
      var headers = {
          //'Content-Type': 'application/json',
          'Authorization':`Bearer ${token}`
      }
  
      axios.get(apiBaseUrl, { headers: headers }).then((response) =>{
          if(response&&response.data){
            console.log({response})
              this.setState({
                energies: response.data
              });
              console.log(this.state.energies);
          }
      }).catch(function (error) {
          console.log(error);
          alert(error)
  
      });
  }


  getHomesList=()=>{
    var apiBaseUrl = "http://localhost:8080/api/home/getAll";

    var token = window.localStorage.getItem("token");
    console.log(token);

    var headers = {
        //'Content-Type': 'application/json',
        'Authorization':`Bearer ${token}`
    }

    axios.get(apiBaseUrl, { headers: headers }).then((response) =>{
        if(response&&response.data){
          console.log({response})
            this.setState({
                homes: response.data
            });
        }
    }).catch(function (error) {
        console.log(error);
        alert(error)

    });
}

  validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  // change
  handleChange = (e) => {};

  render() {
    return (
      <React.Fragment>
        <div className="energy-meter-table-title">
          <h4>Energy Table</h4>
          <Button type="primary" onClick={() => this.showModal()}>
           Add Energy Meter
          </Button>
        </div>
        <Table columns={columns} dataSource={this.state.energies} bordered title={''} />

        <Modal
          className="energy-meter-modal"
          title="Create Energy Meter"
          visible={this.state.visible}
          onOk={() => this.handleOk()}
          onCancel={() => this.handleCancel()}
          footer={null}
        >
         <Form {...this.layout} name="nest-messages" onFinish={this.onFinish} validateMessages={this.validateMessages}>
          <div className="energy-meter-modal-select">
            
            <Form.Item
           
              name={['residential', 'residential']}
              noStyle
              rules={[{ required: true, message: 'Province is required' }]}
            >
              <Select onChange={this.handleChange} placeholder="Select building type">
              <Option value="residential">For Residential</Option>
              <Option value="institutional">For Institutional</Option>
              </Select>   
              
              
            </Form.Item>
          </div>

          <div className="energy-meter-modal-select">
          <Form.Item
              name={['Home', 'homeId']}
              noStyle
              rules={[{ required: true, message: 'Province is required' }]}
            >
           <Select defaultValue="home" onChange={newValue => this.handleChangeHome(newValue)}value={this.state.home} aria-label="select" >
              <Option value="home">Select home</Option>
              {/* <Option value="institutional"></Option> */}
              {
               Array.isArray(this.state.homes)?this.state.homes.map((home,key)=>(
                                 <option selected value={home.id}>{home.homeCode}, {home.homeNumber}</option>
                             )):''
                         }
            </Select>
            </Form.Item>        
          </div>

          <div className="energy-meter-modal-select energy-meter-modal-input">
          <Form.Item
              name={['energyConsumption', 'energyConsumption']}
              label="EnergyConsumption"
              rules={[
                {
                  type: 'number',
                  required: true,
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

          <div className="energy-meter-modal-submit">
            <Button type="primary" onClick={()=>this.handleOk()}>Ok</Button>
            
          </div>
        </Modal>
      </React.Fragment>
    );
  }
}
export default AdminEnergyMeter;








// class PopUp extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//           homes:{},
//           value:'',
//           home: -1,
//          energyconsuption: 0,

//           btype:'',
//           visible: false,
//       };
//       this.saveEnergy = this.saveEnergy.bind(this);
//     }
//     componentDidMount(){
//         this.getHome();
//     }

//     saveEnergy(event){
//       event.preventDefault();
//       alert(this.state);
//       let energy={
//         homeId: this.state.home,
//         // energyMeterTraffic: this.state.btype,
//         energyConsumption: this.state.energyconsuption,
//       }
//       var token = window.localStorage.getItem("token");
//       console.log(token);

//       var headers = {
//           'Content-Type': 'application/json',
//           'Authorization':`Bearer ${token}`
//       }
//       console.log(energy);

//       axios.post("http://localhost:8080/api/energymeter/save ",energy,{headers:headers}).then(response=>{
//         alert("Saqlandi!")

//         this.props.energyDetails(response);
//       })

//     }

//     handleChange=(event)=>{
//         this.setState({
//             btype: event.target.value,
//         })
//         console.log(event.target.value);
//     }
//     onChangeEnergy = e => {
//         console.log(e.target.value);
//         this.setState({ energyconsuption: e.target.value });

//     }

//     handleChangeHome=(event)=>{
//         this.setState({
//             home: event.target.value,
//         })
//         console.log(event.target.value);
//     }
//     getHome=()=>{
//         var apiBaseUrl = "http://localhost:8080/api/home/getAll";

//         var token = window.localStorage.getItem("token");
//         console.log(token);

//         var headers = {
//             // 'Content-Type': 'application/json',
//             'Authorization':`Bearer ${token}`
//         }

//         axios.get(apiBaseUrl, { headers: headers }).then((response) =>{
//             if(response&&response.data){
//                 console.log(response);
//                 this.setState({
//                     homes: response.data
//                 });
//             }
//         }).catch(function (error) {
//             console.log(error);
//             alert(error)

//         });
//     }
//     render() {

//       return (
//         <div
//           style={{
//             position: "absolute",
//             inset: "0",
//             background: "rgba(0, 0, 0, .5)",
//             display: "flex",
//           }}
//           className="justify-content-center align-items-center"
//         >
//           <div
//             className="overflow-hidden bg-white w-100 m-auto"
//             style={{ maxWidth: "35rem" }}
//           >
//             {/* <h2 className="text-white bg-primary text-center py-2">
//             Payment
//             </h2> */}

//             <div className="container p-2 overflow-hidden">
//               <div
//                 className="w-100 bg-white py-3 text-center rounded"
//                 style={{ boxShadow: "0 2px 5px 0 rgba(0, 0, 0, .5)" }}
//               >
//                Create Energy Meter:
//               </div>

//               <div className="row px-3 mt-2">

//                 <div className="col-7 pl-4">
//                   <form onSubmit={this.saveEnergy} className="py-2 border mt-2 rounded px-3 bg-white">
//                   <select onChange={this.handleChange}  class="form-select form-select-lg mb-" aria-label="Default select example">
//                     <option value="RESIDENTIAL">For Residential</option>
//                     <option value="INSTITUTIONAL">For Institutional</option>
//                     </select>

//                     <div className="col-10 pl-4">
//                     <div className="form-group">
//                       <label htmlFor="" className="form-label form-select-lg mb-">

//                       </label>
//                       <hr />

//                       <select class="form-select " onChange={this.handleChangeHome} value={this.state.home} aria-label="select">
//                       <option selected value="">Select home</option>
//                         {
//                             Array.isArray(this.state.homes)?this.state.homes.map((home,key)=>(
//                                 <option selected value={home.id}>{home.homeCode}, {home.homeNumber}</option>
//                             )):''
//                         }

//                     </select>

//                     </div>
//                     </div>
//                     <div className="form-group">
//                       <label htmlFor="" className="form-label">
//                         Energy Consumption
//                       </label>
//                       <input onChange={this.onChangeEnergy}

//                         type="number"
//                         value={this.state.energyconsuption}
//                       />
//                       <div class="form-group">
//                         <input type="submit" value="Submit" />
//                         { <button type="submit" className="btn btn-primary d-block py-1 w-100 mt-3" onClick={this.props.closePopup}>Send</button>
//                          }
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//              {/* <button type="submit" className="btn btn-primary d-block py-1 w-100 mt-3" onClick={this.saveEnergy}>Done</button> */}
//             </div>

//           </div>
//         </div>
//       );
//     }
//   }

// export default class AdminEnergyMeter extends Component {

//     constructor(props) {
//         super(props);
//         this.state = { isOpen: false, visible: false, };
//       }

//       closePopup() {
//         this.setState({ isOpen: false });
//       }


//       showModal = () => {
//         this.setState({
//           visible: true,
//         });
//       };

//       handleOk = e => {
//         console.log(e);
//         this.setState({
//           visible: false,
//         });
//       };

//       handleCancel = e => {
//         console.log(e);
//         this.setState({
//           visible: false,
//         });
//       };

//       saveEnergy(){
//         let energy={
//           homeId: this.state.home,
//           // energyMeterTraffic: this.state.btype,
//           energyConsumption: this.state.energyconsuption,
//         }
//         var token = window.localStorage.getItem("token");
//         console.log(token);

//         var headers = {
//             'Content-Type': 'application/json',
//             'Authorization':`Bearer ${token}`
//         }

//         axios.post("http://localhost:8080/api/energymeter/save ",energy,{headers:headers}).then(response=>{
//           if(response){
//             alert("Save  Saqlandi!")

//           }
//         })

//       }
//       onFinish = (values) => {
//         console.log(values);
//       };
//        layout = {
//         labelCol: {
//           span: 8,
//         },
//         wrapperCol: {
//           span: 16,
//         },
//       };
//       /* eslint-disable no-template-curly-in-string */

//        validateMessages = {
//         required: '${label} is required!',
//         types: {
//           email: '${label} is not a valid email!',
//           number: '${label} is not a valid number!',
//         },
//         number: {
//           range: '${label} must be between ${min} and ${max}',
//         },
//       };

//       updateEnergyDetails = data => console.log(data);

//     render(){

//     return (
//          <div>
//              <Nav />
//              <br />
//              <h3 className="text-center mb-1  mt-0 ">Energy Meter</h3>

//              <div className="container  mb-0  mt-1">

//                  <table className="table table-striped table-bordered table-hover ">
//                      <thead className="thead-dark">

//                        <button

//                       className="btn btn-warning"
//                       onClick={() => this.setState({ isOpen: true })}> Add </button>
//                          <tr>
//                              <th>Meter ID</th>
//                              <th>Home</th>
//                              <th>EnergyConsuption</th>
//                              <th>BuildingType</th>
//                              <th>Action</th>
//                              {/* <td> */}
//                              {/* <button style={{ marginLeft: "10px" }} onClick={() => this.deletePayment(AdminEnergyMeter.id)} className="btn btn-danger">Delete </button> */}
//                             {/* </td> */}

//                             </tr>
//                         </thead>
//                             <tbody className="text-center" >
//                             {
//                                 //this.state.energyconsuption && this.state.energyconsuption.map(
//                                   [{id: 1, name: "check", price:"100"}].map(
//                                     meter =>

//                                         <tr key={meter.id}>
//                                           <td>{meter.id}</td>
//                                             <td>{meter.home}</td>
//                                             <td>{meter.energyConsumption}</td>
//                                             <td>{meter.buiildingtype}</td>
//                                             <td>{meter.action}</td>

//                                             <td>

//                                             </td>
//                                         </tr>

//                                 )
//                             }
//                         </tbody>

//                  </table>
//              </div>
//              <>
//              <Button type="primary" onClick={this.showModal}>
//                 Open Modal with customized button props
//               </Button>
//               <Modal
//                 title="Basic Modal"
//                 visible={this.state.visible}
//                 onOk={this.handleOk}
//                 onCancel={this.handleCancel}
//                 // okButtonProps={{ disabled: true }}
//                 // cancelButtonProps={{ disabled: true }}
//               >
//                 <Form
//                  {...this.layout}
//                  name="nest-messages" onFinish={this.onFinish}
//                   validateMessages={this.validateMessages}
//                   >
//                 ` <Form.Item
//                     name={['user', 'name']}
//                     label="Name"
//                     rules={[
//                       {
//                         required: true,
//                       },
//                     ]}
//                   >
//                     <Input />
//                   </Form.Item>
//                   <Form.Item
//                     name={['user', 'email']}
//                     label="Email"
//                     rules={[
//                       {
//                         type: 'email',
//                       },
//                     ]}
//                   >
//                     <Input />
//                   </Form.Item>
//                   <Form.Item
//                     name={['user', 'age']}
//                     label="Age"
//                     rules={[
//                       {
//                         type: 'number',
//                         min: 0,
//                         max: 99,
//                       },
//                     ]}
//                   >
//                     <InputNumber />
//                   </Form.Item>
//                   <Form.Item name={['user', 'website']} label="Website">
//                     <Input />
//                   </Form.Item>
//                   <Form.Item name={['user', 'introduction']} label="Introduction">
//                     <Input.TextArea />
//                   </Form.Item>
//                   <Form.Item
//                    wrapperCol={{ ...this.layout.wrapperCol, offset: 8 }}
//                   >
//                     <Button type="primary" htmlType="submit">
//                       Submit
//                     </Button>
//                   </Form.Item>
//                 </Form>
//               </Modal>
//              </>

//             {this.state.isOpen && <PopUp closePopup={() => this.closePopup()} energyDetails={this.updateEnergyDetails} />}

//          </div>

//      )
//  }

// }
