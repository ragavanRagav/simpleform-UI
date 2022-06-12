import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getDetails } from '../../servicecalls/backend-service-call';

const ShowDetails = () => {
    let { email } = useParams();
    const fetchDetails=async(mail)=>{
        const res = await getDetails(mail);
        console.log(res);
    }
    useEffect(() => {
        fetchDetails(email)
    }, [email])
    
  return (
    <div>Welcome,{email}</div>
  )
}

export default ShowDetails