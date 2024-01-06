import React, { useState } from 'react'
import "./header.css"

function Header() {

  // (------------
  const [son, setSon] = useState(0)

  const button = () =>{
    setSon(son + 1);
  }
  const button1 = () =>{
    if(son >= 1){
      setSon(son - 1);
    }
  }
  const button2 = () =>{
    setSon(0);
  }
  // -------)

  // (----------

  const [textInput, setTextInput] = useState();
  const [emailInput, setEmailInput] = useState();
  const [parolInput, setParolInput] = useState();

  const [text, setText] = useState();
  const [email, setEmail] = useState();
  const [parol, setParol] = useState();

  const input = (e) =>{
    setTextInput(e.target.value)
  }
  const input1 = (e) =>{
    setEmailInput(e.target.value)
  }
  const input2 = (e) =>{
    setParolInput(e.target.value)
  }

  const form = (e) =>{
    e.preventDefault()
    setText(textInput)
    setEmail(emailInput)
    setParol(parolInput)
  }
  // --------)

  // (----------

  const [inputVal, setInputVal] = useState('')
  const [meva, setMeva] = useState([])

  const endInput = (e) =>{
    setInputVal(e.target.value)
  }

  const endButton = () =>{
    setMeva([...meva, inputVal]);
  }

  return (

    <div className='header'>
      
      
      <div className="button">
        <h1>{son}</h1>
        <button className='btn pul' onClick={button}>+</button>
        <button className='btn min'onClick={button1}>-</button>
        <button className='btn bre' onClick={button2}>0</button>
      </div>

      <form action="" onSubmit={form}>
        <input type="text" placeholder='ism' onChange={input}/>
        <input type="email" placeholder='email' onChange={input1}/>
        <input type="password" placeholder='parol' onChange={input2}/>
        <button>send</button>
        <h1>Ism: <spam>{text}</spam> </h1>
        <h1>Email: <spam>{email}</spam> </h1>
        <h1>Parol: <spam>{parol}</spam> </h1>
      </form>

      <div className='endBlock'>
        <input type="text" placeholder='meva nomi' onChange={endInput} />
        <button onClick={endButton}>add</button>
        <ol>
          {meva.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>

    </div>   
  )
}

export default Header