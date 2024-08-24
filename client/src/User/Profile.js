import React from 'react'
import Layout from '../Components/Layouts/Layout';
import UserMenu from '../Components/Layouts/UserMenu';

function Profile() {
  return (
    <Layout title={'Ecommere - User Profile'}>
      <div className="container-fluid p-3 m-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu/>
          </div>
          <div className="col-md-9">
            <h2>Profile</h2>  
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile