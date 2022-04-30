// import React, { Component } from "react";
// import Nav from "../Navbar";
// import axios from "axios";
// import { Table,Space,Switch, Row, Col } from 'antd';
// import { ThemeProvider } from "react-bootstrap";
// import { Card, Avatar } from 'antd';
// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

// const { Meta } = Card;




// const columns = [
//     {
//       title: '№',
//       dataIndex: 'name',
//       key: 'name',
//       width: '10%',
//     },
//     {
//       title: 'Home',
//       dataIndex: 'age',
//       key: 'age',
//       width: '20%',
//     },
//     {
//       title: 'EnergyConsumption',
//       dataIndex: 'address',
//        width: '30%',                                   
//       key: 'energyconsumption',
//     },
    
//     {
//         title: 'BuildingType',
//         dataIndex: 'age',
//         key: 'age',
//         width: '25%',
//       },   
      
//       {
//         title: 'Action',
//         dataIndex: '',
//         key: 'x',
//        // width: '12%',
//         render: () => <a>Delete</a>,
//       },



//   ];
  
//   const data = [
//     {
//       key: 1,
//       name: 'John Brown sr.',
//       age: 60,
//       address: 'New York No. 1 Lake Park',
//       children: [
//         {
//           key: 11,
//           name: 'John Brown',
//           age: 42,
//           address: 'New York No. 2 Lake Park',
//         },
//         {
//           key: 12,
//           name: 'John Brown jr.',
//           age: 30,
//           address: 'New York No. 3 Lake Park',
//           children: [
//             {
//               key: 121,
//               name: 'Jimmy Brown',
//               age: 16,
//               address: 'New York No. 3 Lake Park',
//             },
//           ],
//         },
//         {
//           key: 13,
//           name: 'Jim Green sr.',
//           age: 72,
//           address: 'London No. 1 Lake Park',
//           children: [
//             {
//               key: 131,
//               name: 'Jim Green',
//               age: 42,
//               address: 'London No. 2 Lake Park',
//               children: [
//                 {
//                   key: 1311,
//                   name: 'Jim Green jr.',
//                   age: 25,
//                   address: 'London No. 3 Lake Park',
//                 },
//                 {
//                   key: 1312,
//                   name: 'Jimmy Green sr.',
//                   age: 18,
//                   address: 'London No. 4 Lake Park',
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       key: 2,
//       name: 'Joe Black',
//       age: 32,
//       address: 'Sidney No. 1 Lake Park',
//     },
//   ];
  
//   // rowSelection objects indicates the need for row selection
//   const rowSelection = {
//     onChange: (selectedRowKeys, selectedRows) => {
//       console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//     },
//     onSelect: (record, selected, selectedRows) => {
//       console.log(record, selected, selectedRows);
//     },
//     onSelectAll: (selected, selectedRows, changeRows) => {
//       console.log(selected, selectedRows, changeRows);
//     },
//   };
  
  

  

//   class EnergyMeter extends Component{
//     constructor(props){
//       super(props);
//       this.state={
//         homeId: this.props.match.params.id,
//         // homeId: null,
//         energy: {},
//       }
//     }
//    componentDidMount(){
//      this.getEnergyByHome(this.state.homeId);
//    }
//     getEnergyByHome=(homeId)=>{
//     homeId = parseInt(homeId);
//       console.log(typeof homeId);  
//       console.log(homeId);
//       var apiBaseUrl = `http://localhost:8080/api/energymeter/getByHomeId/${homeId}`;
  
//       var token = window.localStorage.getItem("token");
      
  
//       var headers = {
//           //'Content-Type': 'application/json',
//           'Authorization':`Bearer ${token}`
//       }

  
//       axios.get(apiBaseUrl, { headers: headers }).then((response) =>{
//           if(response&&response.data){
//               console.log(response);
//               this.setState({
//                   energy: response.data
//               });
//           }
//       }).catch(function (error) {
//           console.log(error);
//           alert(error)
  
//       });
//   }

//     render(){
//         return(

//           <>
//            <Card
//             style={{ width: 300 }}
//             cover={
//               <img
//                 alt="example"
//                 src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
//               />
//             }
//             actions={[
//               <SettingOutlined key="setting" />,
//               <EditOutlined key="edit" />,
//               <EllipsisOutlined key="ellipsis" />,
//             ]}
//           >
//             <Meta
//               avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
//               title="Card title"
//               description="This is the description"
//             />
//              <p>Id: {this.state.energy.id}</p>
//               <p>Bulding type: {this.state.energy.buildingType}</p>
//               <p>CardNumber: {this.state.energy.cardNumber}</p>
//               <p>Energy consumption: {this.state.energy.energyConsumption}</p>
//               {/* <p>User: {this.state.energy.firstName}</p> */}
//               <p>User home code: {this.state.energy.homeCode}</p>
//           </Card>
//           </>
    
//           // <Table
//           //   columns={this.state.energy}
            
//           //   // expandable={{
//           //   // expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
//           //   // rowExpandable: record => record.name !== 'Not Expandable',
//           //   // }}

//           //   dataSource={data}
//           //   bordered
//           //   title={() => 'Energy Meter Data'}
            
            
//       // />
//       )
    

     
//       }
//     }


//     export default EnergyMeter
    





    






































    









































// // export default class EnergyMeter extends Component {
    

// //   render(){

// //     return (
// //          <div>
// //              <Nav />
// //              <br />
// //              <h3 className="text-center mb-1  mt-0 ">Energy Meter</h3>
            
// //              <div className="container  mb-0  mt-1">
 
// //                  <table className="table table-striped table-bordered table-hover ">
// //                      <thead className="thead-dark">
// //                          <tr>
// //                              <th>Meter ID</th>
// //                              <th>Home</th>
// //                              <th>EnergyConsuption</th>
// //                              <th>BuildingType</th>
// //                              {/* <th>HomeNumber</th>
// //                              <th>Street</th>
// //                              <th>District</th> */}
// //                          </tr>
// //                      </thead>
// //                      <tbody>
// //                          <td></td>
// //                          <td></td>
// //                          <td></td>
// //                          <td></td>
// //                          {/* <td></td>
// //                          <td></td>
// //                          <td></td> */}
// //                          {
// //                              // filterBills.map(
// //                              //     bill =>
// //                              //         <tr key={bill.id}>
// //                              //             <td>{bill.id}</td>
// //                              //             <td >{this.dateFormatHandler(bill.startDate)}</td>
// //                              //             <td>{this.dateFormatHandler(bill.endDate)}</td>
// //                              //             <td>{bill.month}</td>
// //                              //             <td>{bill.paymentStatus}</td>
// //                              //             <td><button className="btn btn-info" style={{ marginLeft: "12px" }} onClick={() => this.viewBill(bill.id)} title="View Bill"><RiBillLine size='1.3rem'>View Bill</RiBillLine></button></td>
 
// //                              //             {(bill.paymentStatus === "Unpaid") ? (
// //                              //                 <td><button className="btn btn-warning" style={{ marginLeft: "12px" }} onClick={() => this.payment(bill.id)} title="Pay Bill"><BsCreditCard size='1.3rem'>Pay</BsCreditCard></button></td>) : (
// //                              //                 <td>
// //                              //                     <button className="btn btn-success" disabled style={{ opacity: 0.65, cursor: 'not-allowed', marginLeft: "12px" }} title="Payment Successful!"><BsCreditCard size='1.3rem'>Pay</BsCreditCard></button></td>
// //                              //             )}                                        </tr>
// //                              // )
// //                          }
// //                      </tbody>
// //                  </table>
// //              </div>
// //          </div>
// //      )
// //  }
 
// // }

















// //  <table className="table table-striped table-bordered table-hover ">
// // <thead className="thead-dark">
// //     <tr>
// //         <th>Meter ID</th>
// //         <th>Home</th>
// //         <th>Amount Energy Consumption</th>
// //          <th>Current Reading</th>
// //            can we use gridview to divide equally as you said before for tables yes

        
// //         <th>Month</th>
// //         <th>Status</th>
// //         <th>View Bill</th>
// //         <th>Sum</th>
// //         <th>Payment</th> 
// //     </tr>
// // </thead>
// // <tbody>
// //     <td></td>
// //     <td></td>
// //      <td></td>
// //     <td></td>
// //     <td></td>
// //     <td></td>
// //     <td></td>
// //     <td></td> 
// //     {
// //         // filterBills.map(
// //         //     bill =>
// //         //         <tr key={bill.id}>
// //         //             <td>{bill.id}</td>
// //         //             <td >{this.dateFormatHandler(bill.startDate)}</td>
// //         //             <td>{this.dateFormatHandler(bill.endDate)}</td>
// //         //             <td>{bill.month}</td>
// //         //             <td>{bill.paymentStatus}</td>
// //         //             <td><button className="btn btn-info" style={{ marginLeft: "12px" }} onClick={() => this.viewBill(bill.id)} title="View Bill"><RiBillLine size='1.3rem'>View Bill</RiBillLine></button></td>

// //         //             {(bill.paymentStatus === "Unpaid") ? (
// //         //                 <td><button className="btn btn-warning" style={{ marginLeft: "12px" }} onClick={() => this.payment(bill.id)} title="Pay Bill"><BsCreditCard size='1.3rem'>Pay</BsCreditCard></button></td>) : (
// //         //                 <td>
// //         //                     <button className="btn btn-success" disabled style={{ opacity: 0.65, cursor: 'not-allowed', marginLeft: "12px" }} title="Payment Successful!"><BsCreditCard size='1.3rem'>Pay</BsCreditCard></button></td>
// //         //             )}                                        </tr>
// //         // )
// //     }
// // </tbody>
// // </table> 
