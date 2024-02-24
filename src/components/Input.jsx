import React from 'react'

export default function Input() {
  return (
    <div className="input">
      <input type="text" placeholder='Type something ...' />
      <div className="send">
        <span className="material-symbols-outlined">attach_file</span>
        <input type="file" style={{display: 'none'}} id='file' />
        <label htmlFor="file">
          <span className="material-symbols-outlined">image</span>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}
