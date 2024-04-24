import React, { Fragment } from 'react'
import Services from '../../components/services/Services'
import Info from '../../components/info/Info'
import Footer from '../../components/footer/Footer'
import CommonHeader from '../CommonHeader'
const ServicePage = () => {
  return (
    <Fragment>
        <div className='sub_page'>
        <CommonHeader />
        <Services />
        <Info />
        <Footer />
        </div>
    </Fragment>
  )
}

export default ServicePage