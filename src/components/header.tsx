import React from 'react';
import './header.css';
import Search from './../containers/Search';
import AddressData from './../containers/AddressData';

const Header: React.FC = () => {
    return (
        <header className="header d-flex justify-content-center">
            <div className="content text-center">
                <h1 className="header-title">IP Address Tracker</h1>
                <Search />
            </div>
            <AddressData />
        </header>
    );
}

export default Header;