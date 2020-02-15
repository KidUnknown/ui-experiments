import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const Layout = ({children, ...props}) => {
    const {
        title="Reactness"
      } = props

    return (
        <div>
            <Header 
                heading = { title }
            />
            <main>
                { children }
            </main>

            <Footer 
                heading="Footer"
            />
    </div>
    )
}


export default Layout 