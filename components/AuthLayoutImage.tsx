"use client"

import React from 'react';
import Image from "next/image";
import {usePathname} from "next/navigation";

function AuthLayoutImage() {
    const pathname = usePathname()
    return (
        <Image
            src={pathname.includes("/success") ?"/blurLayoutImg.png":"/layoutImg.png"}
            alt="layout Image"
            width="300"
            height="100"
            className="md:w-[600px]"
        />
    );
}

export default AuthLayoutImage;