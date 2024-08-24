import React from 'react'
import Layout from '../../Components/Layouts/Layout'
import AdminMenu from '../../Components/Layouts/AdminMenu';

function CreateCatagory() {
  return (
    <Layout title={"Dashboard - Create Catagory"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Catagory</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default CreateCatagory