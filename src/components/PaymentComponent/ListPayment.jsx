import dateFormat from 'dateformat';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PaymentService from '../../services/PaymentService';
import Nav from '../Navbar';
import { Table, Tag, Space } from 'antd';

const columns = [
    {
      title: 'Payment ID',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
        
    },
    {
      title: 'Card Number',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Payment Amount',
      dataIndex: 'address',
      key: 'address',                 
    },
    {
      title: 'Payment Date',
      //key: 'tags',
      dataIndex: 'tags',
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
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
         {/* // <a>Invite {record.name}</a> */}
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

  class ListPayment extends Component{
  render(){
    return(
     
      // <>
      // <Table columns={columns} dataSource={data}/>

      // </>

      <Table
        columns={columns}
        
        expandable={{
        expandedRowRender: record => <p style={{ margin: 0 }}>{record.description}</p>,
        rowExpandable: record => record.name !== 'Not Expandable',
        }}

        dataSource={data}
        bordered
        title={() => 'Payment History  '}
        
        
  />)


 
  }
}
export default ListPayment