import React from 'react'
import Layout from '../Components/Layouts/Layout'
import UserMenu from '../Components/Layouts/UserMenu'

function Order() {
  return (
    <Layout title={"Ecommerce - User Orders"}>
      <div className="container-fluid p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h2>All Orders</h2>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Order