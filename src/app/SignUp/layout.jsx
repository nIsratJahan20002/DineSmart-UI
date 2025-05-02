import React from 'react';

export function generateMetadata() {
    return {
        title: 'Sign Up',
        description: 'This is the sign up page of the application',
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