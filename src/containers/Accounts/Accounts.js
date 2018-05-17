import React from 'react';
import { List } from '../../components/List/List';

const myAccountsData = {
  title: 'My accounts',
  data: [
    {
      text: '+1-386-575-1232',
      subtext: 'Available',
      onClick: () => {},
      buttonText: 'Edit',
      disabled: false
    }, {
      text: '+1-844-699-4678',
      subtext: 'Not Available',
      onClick: () => {},
      buttonText: 'Delete',
      disabled: true
    }
  ]
};

export const Accounts = () => ( <List {...myAccountsData}/> );