import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Breadcrumbs = () => {
  return (
    <div>
      <Breadcrumb className='m-2'>
        <BreadcrumbItem active>Home</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
