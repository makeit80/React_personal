import './App.css';
import Square from './component/square';
import React, { useState } from "react";


function App() {
  const [titleQuery, setTitleQuery] = useState("")
  const [detailQuery, setDetailQuery] = useState("")

  const [inputList, setInputList] = useState([])


  // add button
  function clickAddButtonHandler() {
    const toDoList = {
      id: inputList.length + 1,
      title: titleQuery,
      detail: detailQuery,
      isDone: false
    }
    if (toDoList.title == "") {
      alert('제목을 입력해주세요.')
    } else if (toDoList.detail == "") {
      alert('내용을 입력해주세요.')
    } else if (toDoList.title.length > 30) {
      alert('30자 이내로 입력해주세요.')
    } else {
      setInputList([...inputList, toDoList])
    }
  }

  // finish button
  function clickCheckButtonHandler(id) {
    const newList = inputList.find(list => list.id === id);
    if (newList.isDone === false) {
      newList.isDone = true
    } else {
      newList.isDone = false
    }
    setInputList([...inputList])
  }

  // delete button
  function clickDeleteButtonHandler(id) {
    const newList = inputList.filter(list => list.id !== id);
    setInputList(newList);
  }


  return (
    <div className='warpper'>
      {/* Header */}
      <div className='header'> To Do List ✔ </div>
      {/* input */}
      <div className='inputBox'>
        <input style={{ fontSize: 14 }} className='input' type="text" placeholder=' 제목을 입력해주세요' value={titleQuery} onChange={function (e) {
          setTitleQuery(e.target.value)
        }}></input>
        <input style={{ fontSize: 14 }} className='input' type="text" placeholder=' 내용을 입력해주세요' value={detailQuery} onChange={function (e) {
          setDetailQuery(e.target.value);
        }}></input>
        <button className='inputBtn' onClick={clickAddButtonHandler}>추 가</button>
      </div>

      {/* Working */}
      <div className='container'>
        Working...🔥
        <div className='workingBox'>
          {
            inputList
              .filter(list => !list.isDone)
              .map(function (item, index) {
                return (
                  <div className='item'>
                    <Square
                      id={item.id}
                      title={item.title}
                      detail={item.detail}
                      isDone={item.isDone}
                      deleteBtn={clickDeleteButtonHandler}
                      finishBtn={clickCheckButtonHandler}
                    >
                    </Square>
                  </div>
                )
              })
          }
        </div>

        {/* Done */}
        Done...😎
        <div className='doneBox'>
          {
            inputList
              .filter(list => list.isDone)
              .map(function (item, index) {
                return (
                  <div className='item'>
                    <Square
                      id={item.id}
                      title={item.title}
                      detail={item.detail}
                      isDone={item.isDone}
                      deleteBtn={clickDeleteButtonHandler}
                      finishBtn={clickCheckButtonHandler}
                    >
                    </Square>
                  </div>
                )
              })
          }
        </div>
      </div>
    </div>
  );
}

export default App;

