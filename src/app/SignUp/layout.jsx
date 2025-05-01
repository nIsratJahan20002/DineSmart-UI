import React from 'react';

export const metadata = {
    title: 'Sign Up',
    description: 'This is the sign up page of the application',
};


const Layout = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;