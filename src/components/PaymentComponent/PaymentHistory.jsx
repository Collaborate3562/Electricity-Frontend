import React, { Component } from "react";
import Nav from "../Navbar";
import "../../css/buttons.css";
import { Table, Tag, Space } from "antd";

const columns = [
  {
    title: "Payment ID",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Card Number",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Payment Amount",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Payment Date",
    //key: 'tags',
    dataIndex: "tags",
    //   render: tags => (
    //     <>
    //       {tags.map(tag => {
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'loser') {
    //           color = 'volcano';
    //         }
    //         return (
    //           <Tag color={color}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
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
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

class PaymentHistory extends Component {
  render() {
    return (
      // <>
      // <Table columns={columns} dataSource={data}/>

      // </>

      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.description}</p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={data}
        bordered
        title={() => "Payment History  "}
      />
    );
  }
}
export default PaymentHistory;

// export default class PaymentHistory extends Component{

//     render(){

//         return (
//              <div>
//                  <Nav />
//                  <br />
//                  <h3 className="text-center mb-0  mt-0 ">Payment History</h3>

//                  <div className="container  mb-0  mt-0">

//                      <table className="table table-striped table-bordered table-hover ">
//                          <thead className="thead-dark">
//                              <tr>
//                                  <th>Payment ID</th>
//                                 <th>Card Number</th>
//                                 <th>Payment Amount</th>
//                                 <th>Payment Date</th>
//                              </tr>
//                          </thead>
//                          <tbody>
//                              <td></td>
//                              <td></td>
//                              <td></td>
//                              <td></td>

//                              {
//                                  // filterBills.map(
//                                  //     bill =>
//                                  //         <tr key={bill.id}>
//                                  //             <td>{bill.id}</td>
//                                  //             <td >{this.dateFormatHandler(bill.startDate)}</td>
//                                  //             <td>{this.dateFormatHandler(bill.endDate)}</td>
//                                  //             <td>{bill.month}</td>
//                                  //             <td>{bill.paymentStatus}</td>
//                                  //             <td><button className="btn btn-info" style={{ marginLeft: "12px" }} onClick={() => this.viewBill(bill.id)} title="View Bill"><RiBillLine size='1.3rem'>View Bill</RiBillLine></button></td>

//                                  //             {(bill.paymentStatus === "Unpaid") ? (
//                                  //                 <td><button className="btn btn-warning" style={{ marginLeft: "12px" }} onClick={() => this.payment(bill.id)} title="Pay Bill"><BsCreditCard size='1.3rem'>Pay</BsCreditCard></button></td>) : (
//                                  //                 <td>
//                                  //                     <button className="btn btn-success" disabled style={{ opacity: 0.65, cursor: 'not-allowed', marginLeft: "12px" }} title="Payment Successful!"><BsCreditCard size='1.3rem'>Pay</BsCreditCard></button></td>
//                                  //             )}                                        </tr>
//                                  // )
//                              }
//                          </tbody>
//                      </table>
//                  </div>
//              </div>
//          )
//      }

// }

// export {PaymentHistory};
