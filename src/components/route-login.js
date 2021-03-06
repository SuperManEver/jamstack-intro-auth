import React from 'react'
import { useIdentityContext } from 'react-netlify-identity'
import { navigate } from 'gatsby'

export default function RouteLogin({ onOpen }) {
    const identity = useIdentityContext()

    if (identity && identity.isLoggedIn) {
        navigate('/dashboard/secret', { replace: true })
    }

    function handleLogin() {}

    return (
        <>
            <h1>Log In or Sign Up</h1>
            <button onClick={onOpen}>Log In</button>
        </>
    )
}
