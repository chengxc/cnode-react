import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Suggest from '../components/Suggest';

function IndexPage() {
  // console.log(dispatch);
  return (
    <div className={styles.normal}>
      <Suggest />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
