import React from 'react';
import List from '../../components/List/List';

import { myAccountsData } from '../../constants/dummy_data';

export const Accounts = () => ( <List {...myAccountsData}/> );