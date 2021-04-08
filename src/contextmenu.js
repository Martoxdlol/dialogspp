import ReactDOM from 'react-dom'
import React from 'react'

export default function contextmenu(e, options = [],callback){

  if(!e) e = {"X":0,"Y":0}

  const scrollY = window.scrollY || window.pageYOffset
  const top = (e.clientY || (e.target && e.target.offsetTop) || e.y || e.Y)+scrollY
  const left = e.clientX || (e.target && e.target.offsetLeft && e.target.offsetLeft+0) || e.x || e.X
  const screenWidth = window.innerWidth
  const screenHeight = window.screenHeight
  const bottom = window.innerHeight - top
  const right = screenWidth - left
  const useLeft = left > right
  const useTop = top > bottom
  const minWidth = 260
  const optionHeight = 50
  const minShownOptions = 4
  const minHeight = optionHeight * minShownOptions + moreOptionsHintHeight
  const moreOptionsHintHeight = 10

  let x = useLeft ? left - minWidth : left
  if(useLeft){
    if(x < 0) x = 0
  }else{
    if((x + minWidth) > screenWidth) x = screenWidth - minWidth
  }

  const usableHeightSpace = (useTop ? top : bottom)
  let menuHeight = minHeight-moreOptionsHintHeight
  if(options.length < minShownOptions){
    menuHeight = options.length * optionHeight
  }else if((options.length * optionHeight) > usableHeightSpace){
    menuHeight = Math.floor(usableHeightSpace-moreOptionsHintHeight / optionHeight) * optionHeight+moreOptionsHintHeight
  }else if((options.length * optionHeight) < usableHeightSpace){
    menuHeight = options.length * optionHeight
  }

  let y = useTop ? top - menuHeight : top

  if(useTop){
    if(y < 0) y = 0
  }else{
    if((y + menuHeight) > screenHeight) y = screenHeight - menuHeight
  }


  const element = document.createElement('div')
  element.className = 'contextmenu'
  element.style.top = y+'px'
  element.style.left = x+'px'
  element.style.height = menuHeight+'px'
  element.style.width = minWidth+'px'

  element.style.backgroundColor = 'white'
  element.style.display = 'inline-block'
  element.style.position = 'absolute'
  element.style.overflow = 'auto'
  element.style.overflowX = 'hidden'
  element.style.boxShadow = '2px 0px 5px -2px rgba(51,51,51,0.2)'
  element.style.zIndex = '3'

  document.body.appendChild(element)


  function close(){
    document.body.removeChild(element)
  }

  let closeListener

  //Remove listener (already closed the menu)
  closeListener = e => {
    window.removeEventListener('click',closeListener)
    window.removeEventListener('contextmenu',closeListener)
    close()
  }

  //Close menu when click anywhere
  setTimeout(() => {
    window.addEventListener('click',closeListener)
    window.addEventListener('contextmenu',closeListener)
  }, 10)

  function clickedOption(option, i, e){
    if(option.action){
      option.action(e)
    }
    if(callback){
      callback(option, i, e)
    }
  }

  const optionStyles = {
    height: '50px',
    padding: '16px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  }

  ReactDOM.render(<div>
      {options.map((option, i) => {
        if(typeof option == 'string') option = {label:option}
        if(typeof option == 'undefined') option = {label:''}
        return <span key={i} style={optionStyles} className='contextmenu-option' onClick={e => clickedOption(option, i, e)}>{option.label}</span>
      })}
    </div>, element)
}

//
// .contextmenu{
//   background-color: white;
//   display: inline-block;
//   position: absolute;
//   overflow: auto;
//   overflow-x: hidden;
//   background-color: #333;
//   box-shadow: 2px 0px 5px -2px rgba(51,51,51,0.2);
//   z-index: 3;
// }
//
// .contextmenu-option{
//   height: 50px;
//   padding: 16px;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
// }
//
// .contextmenu-option:hover{
//   background-color: #222;
// }
