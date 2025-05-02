import React from 'react';

export async function generateMetadata() {
    return {
        title: 'Log In',
        description: 'This is the login page of the application',
    };
}


const Layout = ({ children }) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;