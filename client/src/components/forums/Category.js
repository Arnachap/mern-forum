import React from 'react';

import { Card, CardHeader } from 'reactstrap';
import SubCategory from './SubCategory';

const Category = () => {
  return (
    <div>
      <Card>
        <CardHeader>Header</CardHeader>
        <SubCategory />
      </Card>
    </div>
  );
};

export default Category;
