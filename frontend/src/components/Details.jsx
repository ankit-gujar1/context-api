import React from 'react'
import { useUserContext } from '../contexts/UserContext'

const Details = () => {

    const { username } = useUserContext();
    return (
        <div>{username}</div>
    )
}

export default Details