import React, { useContext, useEffect, useState } from 'react'
import { db } from '../firebase';
import { onSnapshot, doc } from 'firebase/firestore';
import { AuthContext } from '../context/AuthContext';

export default function Chats() {
  const { currentUser } = useContext(AuthContext);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
  
      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats()
  }, [currentUser.uid]);

  return (
    <div className='chats'>
      {Object.entries(chats)?.map((chat) => (
        <div className="userChat" key={chat[0]}>
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].userInfo.lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
