import React from 'react';
import { Link } from 'react-router-dom';
export default function ComingSoon() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Coming Soon</h1>
      <Link to='/'>Take me Home</Link>
    </div>
  )
}
