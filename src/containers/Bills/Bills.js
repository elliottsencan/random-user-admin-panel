import React from 'react';
import List from '../../components/List/List';
import { myBillsData } from '../../constants/dummy_data';
import withTrailAnimation from '../../components/Utils/withTrailAnimation';
import './Bills.css';

const Bills = ( props ) => {
  const items = [ ( <List {...myBillsData}/> ) ];

  return ( <div className="container bills">{props.renderTrailAnimation( items )}</div> );
}

export default withTrailAnimation( Bills );