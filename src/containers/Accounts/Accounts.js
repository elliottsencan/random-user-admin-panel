import React from 'react';
import List from '../../components/List/List';
import withTrailAnimation from '../../components/Utils/withTrailAnimation';
import { myAccountsData } from '../../constants/dummy_data';
import './Accounts.css';

/**
 * Accounts Dashboard container
 *
 * Exports List with Trailing Animation
 * @param {[type]} props [description]
 */
const Accounts = ( props ) => {
  const items = [ ( <List {...myAccountsData}/> ) ];

  return ( <div className="container accounts">{props.renderTrailAnimation( items )}</div> );
}

export default withTrailAnimation( Accounts );