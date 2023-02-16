import React from 'react';
import '../styles/Error.css';
import { useRouteError } from 'react-router-dom';

export default function Error() {
  const error = useRouteError();
  return (
    <>
      <div className='error-msg'>{error.message}</div>
      <p className='contact-support'>If error persists please contact support</p>
    </>

  )
}
