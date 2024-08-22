import React from 'react'
import { useUserContext } from '../contexts/UserContext'

const Details = () => {

    const { username, firstname, lastname } = useUserContext();
    return (
        <div>{username} {firstname} {lastname}</div>
    )
}

export default Details