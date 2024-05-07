import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const AuthLayout = () => {
    const isAutheticated = false;

    return (
        <>
            {isAutheticated ? (
                <Navigate to='/' />
            ) : (
                <>
                    <section className='flex flex-1 justify-center items-center py-10'>
                        <Outlet />
                    </section>

                    <img 
                    src="./assets/images/side-img.svg" 
                    alt="logo" 
                    className=' hidden xl:block w-1/2 h-screen object-cover bg-no-repeat'
                    />
                </>
            )}
        </>
    )
}

export default AuthLayout
