'client use';
import {Card, CardContent} from '@/components/ui/card';
import React from 'react';
import Image from 'next/image';
import { Heart, MessageCircle, Star } from 'lucide-react';



const clientcard = ({client}) => {

    


    return (
        <div>
            <Card className="max-w-sm bg-white border-2 border-gray-600/30 shadow-2xl rounded-2xl p-4 ml-10">
                <div className='flex items-center justify-center space-x-4 border-b border-gray-700/30 py-5'>
                <Image className='rounded-full object-cover' alt={client.name} width={50} height={50} src={client.img}/>
                    <div>
                        <h2 className='text-lg font-semibold'>{client.name}</h2>
                        <p className='text-sm text-gray-500'>{client.position}</p>
                    </div>
                </div>

                <CardContent>

                <div className='flex'>
                    {[...Array(5)].map((_,index) => (
                        <Star key={index} fill={index < client.rating ? "currentColor":"none"} stroke='currentColor'/>
                    ))}
                </div>

                    <p className='mt-2 text-gray-700'>{client.description}</p>

                    <div className='mt-4 flex items-center justify-between text-gray-600'>
                        <div className='flex items-center space-x-1'>
                            <MessageCircle className='w-5 h-5'/>
                            <span>{client.comments}</span>
                        </div>

                        <div className='flex items-center space-x-1'>
                            <Heart className='w-5 h-5'/>
                            <span>{client.likes}</span>
                        </div>

                    </div>

                </CardContent>

            </Card>
        </div>
    );
};

export default clientcard;


/* npx shadcn@latest init */
/* npx shadcn@latest add card */
/* import { Card, CardContent } from "@/components/ui/card"; */