import React from 'react'
import Button from '../Elements/Button'

const Pusher = ({ handlePusher, isDeployed }) => (
  <>
    <div className={`Pusher${isDeployed ? ' is-deployed' : ''}`}>
      <h2>La navigation</h2>
    </div>
    <div className="Pusher-overlay" onClick={handlePusher} />
  </>
)

export default Pusher
