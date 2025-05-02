import React from 'react';

export async function generateMetadata() {
    return {
        title: 'Cart',
        description: 'This is the cart page of the application',
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