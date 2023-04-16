import React from 'react'
import HeaderComponents from '../Header/HeaderComponents'
import Footer from '../Footer/Footer'

const DefaultComponent = ({ children }) => {
    return (
        <div>
            <HeaderComponents />
            {children}
            <Footer/>
        </div>
    )
}

export default DefaultComponent