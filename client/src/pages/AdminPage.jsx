import React from 'react';
import Header from '../components/home/Header';
import AdminMain from '../components/admin/AdminMain';
import Footer from '../components/home/Footer';

import '../styles/home/home.css';

const AdminPage = () => {
    return (
        <div className="homeBody">
            <Header />
            <AdminMain />
            <Footer />
        </div>
    );
};

export default AdminPage;
