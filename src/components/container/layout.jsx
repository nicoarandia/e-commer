import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/styleLayout.css'

const Layout = ({children}) => {
    return (
        <div className='container-layout'>
            <Link className='link-layout' to="/homePag">Home Page</Link>
            <Link className='link-layout' to="/create">Create</Link>
            <div className='layout' >{children}</div>
        </div>
    );
}

export default Layout;
