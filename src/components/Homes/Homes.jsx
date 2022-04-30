import React, { Component } from 'react';
import Nav from '../Navbar';
import axios from 'axios';
import HomeService from '../../services/HomeService';
import { Table, Switch, Space,} from 'antd';

const columns = [
    // {
    //   title: '№',
    //   dataIndex: 'n',
    //   key: 'n',
    //   width: '12%',
    // },
    {
      title: 'Card Number',
      dataIndex: 'cardNumber',
      key: 'cardNumber',
      width: '12%',
    },
    {
      title: 'Home Code',
      dataIndex: 'homeCode',
       width: '10%',                                   
      key: 'homeCode',
    },
    
    {
        title: 'Home Number',
        dataIndex: 'homeNumber',
        key: 'homeNumber',
        width: '12%',
      },

      {
        title: 'Street',
        dataIndex: 'street',
        key: 'street',
        width: '12%',
      },

      {
        title: 'District',
        dataIndex: 'district',
        key: 'district',
        width: '12%',
      },
      

      {
        title: 'BuildingType',
        dataIndex: 'buildingType',
        key: 'age',
        width: '12%',
      },

      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        width: '12%',
        render: (text, record) => (
            <Space size="middle">
              <a>Invite {record.name}</a>
              <a>Delete</a>
            </Space>
            )
      },



  ];
  
  const data = [
    {
      key: 1,
     // name: 'John Brown sr.',
      age: 60,
      address: 'New York No. 1 Lake Park',
      children: [
        {
          key: 11,
         // name: 'John Brown',
          age: 42,
          address: 'New York No. 2 Lake Park',
        },
        {
          key: 12,
          //name: 'John Brown jr.',
          age: 30,
          address: 'New York No. 3 Lake Park',
          children: [
            {
              key: 121,
             // name: 'Jimmy Brown',
              age: 16,
              address: 'New York No. 3 Lake Park',
            },
          ],
        },
        {
          key: 13,
          name: 'Jim Green sr.',
          age: 72,
          address: 'London No. 1 Lake Park',
          children: [
            {
              key: 131,
              name: 'Jim Green',
              age: 42,
              address: 'London No. 2 Lake Park',
              children: [
                {
                  key: 1311,
                  name: 'Jim Green jr.',
                  age: 25,
                  address: 'London No. 3 Lake Park',
                },
                {
                  key: 1312,
                  name: 'Jimmy Green sr.',
                  age: 18,
                  address: 'London No. 4 Lake Park',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      key: 2,
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];
  
  // rowSelection objects indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };
 

  
  

  class Homes extends Component{

    constructor(props) {
      super(props);
      this.state = {
          address: '',
          costumer: {},
          homes:[],
      }
    }



    componentDidMount(){
      this.getCurrentUserHomes();
    }
  
  
    
    getCurrentUserHomes=()=>{
     console.log("JDkcsjdksjndksjd skjd skdj "); 
      var apiBaseUrl = "http://localhost:8080/api/home/getHomesWithCurrentUser";
  
      var token = window.localStorage.getItem("token");
      console.log(token);
  
      var headers = {
          //'Content-Type': 'application/json',
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
          console.log(error);
          alert(error)
  
      });
  }
  

   
    render(){
        console.log(this.state.homes)
        return(
           
        // function TreeData() {
        //     const [checkStrictly, setCheckStrictly] = React.useState(false);
        //     return (
        // <>
        //     <Space align="center" style={{ marginBottom: 16 }}>
        //     CheckStrictly: <Switch checked={checkStrictly} onChange={setCheckStrictly} />
        //     </Space>
        this.state.homes && 
 
        <Table
            columns={columns}
           // rowSelection={{ ...rowSelection, checkStrictly }}
            dataSource={this.state.homes}
            
  
            // dataSource={this.state.address}
            
                title={() => 'Your Home'}
            />
        
        // </>
        );
    }
     
}
  

    export default Homes
    











































// export default class Home extends Component{

//     constructor(props) {
//         super(props);
//         this.state = {
//             address: '',
//             costumer: null,
//             homes:[],
//         }
//     }
    
   
//     componentDidUpdate(){

//     }
//     componentDidMount() {
//         this.getHomes();

//     }

//     getHomes(){
//         var apiBaseUrl = "http://localhost:8080/api/home/getHomesWithCurrentUser";
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






   

