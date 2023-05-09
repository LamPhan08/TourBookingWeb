import React from 'react';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Tours',
    path: '/dashboard/tours',
    icon: <MdIcons.MdTour />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Tour List',
        path: '/dashboard/tours/tourlist',
        icon: ""
      },
      {
        title: 'Tour Add',
        path: '/dashboard/tours/touradd',
        icon: ""
      },
    ]
  },
  {
    title: 'Customers',
    path: '/dashboard/customers',
    icon: <MdIcons.MdPerson2 />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Customer List',
        path: '/dashboard/customers/customerlist',
        icon: "",
        cName: 'sub-nav'
      },
      {
        title: 'Customer Add',
        path: '/dashboard/customers/customeradd',
        icon: ""
      },
    ]
  },
];