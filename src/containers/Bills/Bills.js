import React from 'react';
import List from '../../components/List/List';
import { myBillsData } from '../../constants/dummy_data';

export const Bills = () => ( <List {...myBillsData}/> );