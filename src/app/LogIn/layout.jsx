import React from 'react';

export const metadata = {
    title: 'Log In',
    description: 'This is the login page of the application',
};


const Layout = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;