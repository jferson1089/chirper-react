import React, { useEffect, useState } from 'react'
import { getCommentById } from '../services/api-helper'

function Comment({ id }) {
    const [comment, setComment] = useState('')
    const [date, setDate] = useState('')
    const [name, setName] = useState('')
    useEffect(() => {
        const makeAPICall = async () => {
            const resp = await getCommentById(id)
            setComment(resp.body)
            setDate(resp.date)
            setName(resp.username)
            // console.log('getCommentById', resp)
        }
        makeAPICall()
    }, [])

    // console.log('chirpcommnets - ', id)

    return (
        <li className="chirpStyle">
            <h6>   {name}</h6>
            <p> <i className="fa fa-comments"> {comment} </i> </p>
            <p>   Date: {date}</p>
        </li>
    )
}

export default Comment