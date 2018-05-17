import React from 'react';
import { List } from '../../components/List/List';

const myBillsData = {
  title: 'My bills',
  data: [
    {
      text: '+1-386-575-1232',
      subtext: 'Patty Francisco',
      onClick: () => {},
      buttonText: '$192',
      buttonSubtext: 'Bill Paid',
      disabled: false
    }, {
      text: '+1-549-746-1365',
      subtext: 'Jenee Withey',
      onClick: () => {},
      buttonText: '$144',
      buttonSubtext: 'Bill not paid',
      disabled: false
    }
  ]
};

export const Bills = () => ( <List {...myBillsData}/> );