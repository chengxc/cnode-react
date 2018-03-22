import React from 'react';
import { connect } from 'dva';
import DataList from '../components/DataList/DataList';
import Header from './Header/Header';

const Suggest = () => {
  return (
    <div>
      <Header />
      <DataList />
    </div>
  );
};

Suggest.propTypes = {
};

export default connect()(Suggest);
