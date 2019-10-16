import React from 'react';

import { Card, CardHeader } from 'reactstrap';
import SubForum from './SubForum';

const Forum = () => {
  return (
    <div>
      <Card>
        <CardHeader>Header</CardHeader>
        <SubForum />
      </Card>
    </div>
  );
};

export default Forum;
