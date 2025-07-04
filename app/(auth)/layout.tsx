import React from 'react';
import Image from "next/image";

function AuthLayout({children}: { children: React.ReactNode }) {
    return (
        <main className="relative h-screen">
            {children}
            <div className="absolute bottom-0 left-0">
                <Image src="/layoutImg.png" alt="layout Image" width="300" height="100" className="md:w-[600px] font"/>
            </div>
        </main>
    );
}

export default AuthLayout;