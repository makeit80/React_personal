import React, { useState } from 'react'
import './square.css';


function Square(prop) {
  // toggle button
  const [isOpne, setToggle] = useState(false)
  const toggleBtn = () => { setToggle(isOpne => !isOpne) }

  function tagSwitch(isDone) {
    if (isDone === false) {
      return 'Done'
    } else if (isDone === true) {
      return 'Cancel'
    } else {
      return '오류입니다.'
    }
  }

  function toggleColorSwitch (isDone) {
    if (isDone === true && isOpne === true) {
      return "showToggle detailDone"
    } else if (isDone === false && isOpne === true) {
      return "showToggle detailWork"
    } else {
      return "hideToggle"
    }
  }

  function btnColorSwitch () {
    if (prop.isDone === true) {
      return "doneBtn"
    } else if (prop.isDone === false) {
      return "workBtn"
    } else {
      alert('오류뜨는디')
    }
  }


  return (
    <>
      <div className={prop.isDone ? "wrapper done" : "wrapper work"}>
        <button className={`finishBtn Btn ${btnColorSwitch()}`} onClick={() => prop.finishBtn(prop.id)}>{tagSwitch(prop.isDone)}</button>

        <div className='title'>
          {prop.title}
        </div>

        <button className={`toggleBtn Btn ${btnColorSwitch()}`} onClick={toggleBtn}>상세보기</button>
        <button className={`deleteBtn Btn ${btnColorSwitch()}`} onClick={() => prop.deleteBtn(prop.id)}>X</button>
      </div>

      <ul className={toggleColorSwitch(prop.isDone)}>
        <li className='detailText'>{prop.detail}</li>
      </ul>
    </>

  )
}

export default Square;