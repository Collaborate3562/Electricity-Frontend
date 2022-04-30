import React, { Component } from 'react';
import Nav from '../Navbar';
import axios from 'axios';
import HomeService from '../../services/HomeService';
import { Table, Tag, Radio, Space } from 'antd';

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
      title: 'Home Code',
      dataIndex: 'homeCode',
      key: 'homeCode',
    },

    {
        title: 'Home Number',
        dataIndex: 'homeNumber',
        key: 'homeNumber',
      },


      {
        title: 'Street',
        dataIndex: 'street',
        key: 'street',
      },

      {
        title: 'District',
        dataIndex: 'district',
        key: 'district',
      },


      {
        title: 'BuildingType',
        dataIndex: 'buildingType',
        key: 'buildingType',
      },

    // {
    //   title: 'Tags',
    //   key: 'tags',
    //   dataIndex: 'tags',
    //   render: tags => (
    //     <>
    //       {tags.map(tag => {
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'loser') {
    //           color = 'volcano';
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
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

class ViewHomes extends Component {

  constructor(props) {
            super(props);
            this.state = {
                 address: '',
                costumer: null,
                homes:[],
            }
        }
      // }
    componentDidMount() {
        this.getHomes();

    }

    // componentDidMount() {

    //     HomeService.getAllHomes().then((res) => {
    //         this.setState({ homes: res.data });
    //     });
    // }

    getHomes(){
        var apiBaseUrl = "http://localhost:8080/api/home/getAll";
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
        dataSource={this.state.homes}
        
            title={() => 'Homes'}
        />
    );
  }
}
export default ViewHomes




































// export default class ViewHomes extends Component{

//     constructor(props) {
//         super(props);
//         this.state = {
//              address: '',
//             costumer: null,
//             homes:[],
//         }
//     }
    
   
//     // componentDidUpdate(){

//     // }
//     componentDidMount() {
//         this.getHomes();

//     }

//     componentDidMount() {

//         HomeService.getAllHomes().then((res) => {
//             this.setState({ homes: res.data });
//         });
//     }

//     getHomes(){
//         var apiBaseUrl = "http://localhost:8080/api/home/getAllUsersWithHomes";
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
//             //console.log(error);
//             alert(error)

//         });
//     }

//     handleClick() {
//         console.log("clicked")
//     }

    


// render(){

//    return (
//         <div>
//             <Nav />
//             <br />
//             <h3 className="text-center mb-0  mt-0 ">Home</h3>
           
//             <div className="container  mb-0  mt-1">

//                 <table className="table table-striped table-bordered table-hover ">
//                     <thead className="thead-dark">
//                         <tr>
//                             <th>№</th>
//                             <th>CardNumber</th>
//                             <th>HomeCode</th>
//                             <th>HomeNumber</th>
//                             <th>Street</th>
//                             <th>District</th>
//                             <th>BuildingType</th>
//                         </tr>
//                     </thead>
//                     <tbody>
                       

// {
//                         Array.isArray(this.state.homes)?this.state.homes.map((home, key)=>(
//                             <tr key={key}>
//                                 <td>{key+1}</td>
//                                 <td>{home.cardNumber}</td>
//                                 <td>{home.homeCode}</td>
//                                 <td>{home.homeNumber}</td>
//                                 <td>{home.street}</td>
//                                 <td>{home.district}</td>
//                                 <td>{home.buildingType}</td>
//                             </tr>
//                         )):''
//                             }
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }


    
// }






   









