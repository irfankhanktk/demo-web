import React from 'react'
const Chat = () => {
  const [currentMessage,setCurrentMessage]=React.useState('');
  console.log({currentMessage});
  return (
    <div className='chat-container'>
      {/* <div className='chat-header'>Live Chat</div>
      <div className='chat-body'>
        {
          ['hi iam message','hi i am message hi ','hi i am message hi ','hi i am message hi ',
          'hi i am message hi ','hi i am message hi '
        ,'hi i am message hi ','hi i am message hi ','hi i am message hi ','hi i am message hi ','hi i am message hi ',
        'hi i am message hi ','hi i am message hi '].map((item)=>
       <div className='chat-msg'>
        {item}
       </div>
          )
        }
      </div>
      <div className='chat-footer'>
        <input  className='chat-input' placeholder='Type message here' type={'text'} onChange={(e)=>setCurrentMessage(e.target.value)}/>
        <div>send</div>
      </div> */}
    </div>
  )
}
export default Chat
