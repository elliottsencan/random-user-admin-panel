import React from 'react';
import List from '../../components/List/List';
import withTrailAnimation from '../../components/Utils/withTrailAnimation';
import { myAccountsData } from '../../constants/dummy_data';

const Accounts = ( props ) => {
  const items = [ ( <List {...myAccountsData}/> ) ];

  return ( <div className="container">{props.renderTrailAnimation( items )}</div> );
}

export default withTrailAnimation( Accounts );