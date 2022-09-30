import React from 'react';
import { Progress } from 'reactstrap';

const ProgressBar = (props) => {
  return (
    <div>
      <Progress striped value={props.value}>25%</Progress>
    </div>
  );
};

export default ProgressBar;