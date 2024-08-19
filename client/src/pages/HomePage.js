import React from 'react'
import Layout from '../Components/Layouts/Layout'
import { useAuth } from '../context/auth'
export const HomePage = () => {
  const [auth,setAuth] = useAuth();
  return (
    
    <Layout title={'Best Offers'}>
        <h1>HomePage</h1>
        <pre>{JSON.stringify(auth,null,1)}</pre>
    </Layout>
   
  )
}
export default HomePage;