import React from 'react';
import ClientCard from '@/app/Component/ClientCard/clientcard';

    const clients =[
        {
            name:"Ismail Hossain",
            position:"CEO, INTERACTIVE CARE",
            img:"/Img/img000.png",
            rating:5,
            description:"Wasim is always super clear with requirements.",
            comments:12,
            likes:34,
        },
        {
            name:"Sebgatun Pranto",
            position:"CEO, INTERACTIVE CARE",
            img:"/Img/img000.png",
            rating:5,
            description:"Wasim is always super clear with requirements.",
            comments:15,
            likes:36,
        },
        {
            name:"Sajjatul Tejan",
            position:"CEO, INTERACTIVE CARE",
            img:"/Img/img000.png",
            rating:5,
            description:"Wasim is always super clear with requirements.",
            comments:6,
            likes:30,
        },
        {
            name:"Israt Jahan",
            position:"CEO, INTERACTIVE CARE",
            img:"/Img/img000.png",
            rating:4,
            description:"Wasim is always super clear with requirements.",
            comments:8,
            likes:22,
        },
        {
            name:"Israt Jahan",
            position:"CEO, INTERACTIVE CARE",
            img:"/Img/img000.png",
            rating:4,
            description:"Wasim is always super clear with requirements.",
            comments:8,
            likes:22,
        },
        {
            name:"Israt Jahan",
            position:"CEO, INTERACTIVE CARE",
            img:"/Img/img000.png",
            rating:4,
            description:"Wasim is always super clear with requirements.",
            comments:8,
            likes:22,
        },

    ];






const clientcardgrid = () => {
    return (
        <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
            {
                clients.map((client, index)=>(<ClientCard key={index} client={client}/>))
            }
        </div>
    );
};

export default clientcardgrid;