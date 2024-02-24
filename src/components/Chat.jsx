import React from 'react'
import Messages from './Messages'
import Input from './Input'

export default function Chat() {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
          <span className="material-symbols-outlined">photo_camera</span>
          <span className="material-symbols-outlined">add</span>
          <span className="material-symbols-outlined">more_vert</span>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}
