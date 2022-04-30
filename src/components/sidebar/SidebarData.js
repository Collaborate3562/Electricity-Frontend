import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'View Profile',
    path: '/profile',
    icon: <i class="far fa-user-circle"></i>,
    cName: 'nav-text'
  },
  {
    title: 'View Bills',
    path: '/listBills',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Payment History',
    path: '/paymentHistory',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Change Password',
    path: '/changePassword',
    icon:  <i class="fa fa-undo"></i>,
    cName: 'nav-text'
  },
  {
    title: 'Logout',
    path: '/logout',
    icon: <i class="fas fa-sign-out-alt"></i>,
    cName: 'nav-text'
  }
  
];