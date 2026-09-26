import Banner from '@/components/features/home/Banner';
import Library from '@/components/features/home/Library';

import React from 'react';



const page = () => {
  return (
        <main id="top" className="min-h-screen bg-black text-white">
            <Banner />
            <Library />
        </main>
  );
};

export default page;