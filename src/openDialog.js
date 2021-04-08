import React from 'react'
import ReactDOM from 'react-dom'
import DialogContainer from './dialogContainer'

let bodyStyleOverflowStack = []

const defaultOptions = {
  animate: true,
  duration: 200,
  className: '',
}

export default function openDialog(_history, Child, options){
  //Options and url
  let url = ""
  let closed = false
  let closeing = false
  if(typeof options == 'string'){
    url = options
    options = defaultOptions
  }else{
    options = {...defaultOptions,...options}
    url = options.url || url
  }

  const animate = options.animate

  //Create dialog
  const elementBase = document.createElement('div')
  const element = document.createElement('div')
  elementBase.appendChild(element)
  document.body.appendChild(elementBase)
  //body scroll
  bodyStyleOverflowStack.push(document.body.style.overflow)
  document.body.style.overflow = "hidden"
  //Dialog styles
  elementBase.style.position = 'absolute'
  elementBase.style.top = '0'
  elementBase.style.left = '0'
  element.className = options.className || ''
  element.style.position = "fixed"
  element.style.top = "0"
  element.style.width = "100vw"
  element.style.height = "100vh"
  element.style.display = 'flex'
  element.style.alignItems = 'center'
  element.style.justifyContent = 'center'

  // element.style.backgroundColor = "rgba(0,0,0,0.0)"
  element.style.transition = options.duration+'ms'
  if(animate){
    element.style.opacity = "0"
    setTimeout(()=>{
      //Delay to use transition
      // element.style.backgroundColor = "rgba(0,0,0,0.3)"
      element.style.opacity = "1"
    },0)
  }



  //Close event listeners
  const closeListeners = []

  const reactElem = <DialogContainer><Child
    close={close}
    enablePreventClose={()=>{_history.preventBack = true}}
    disablePreventClose={()=>{_history.preventBack = false}}
    addCloseListener={cb => closeListeners.push(cb)}
  /></DialogContainer>

  let triggeredByEvent = false

  //Close event
  const sub = _history.preventBackOnce(() => {
    triggeredByEvent = true
    close()
  },url)

  function close(){
    if(closeing || closed) return;

    closeing = true

    //Cancel close subsciption
    if(!triggeredByEvent) sub.cancel()

    //Restore body style
    document.body.style.overflow = bodyStyleOverflowStack[bodyStyleOverflowStack.length-1]
    bodyStyleOverflowStack.pop()

    //Emit close events (or something like that)
    for(const listener of closeListeners){
      try {
        listener()
      } catch (e) {
        console.error(e)
      }
    }

    if(animate){
      element.style.opacity = "0"
      //Remove item with delay
      setTimeout(() => {
        document.body.removeChild(elementBase)
      }, options.duration)
    }else{
      document.body.removeChild(elementBase)
    }

  }
  const reactInstance = ReactDOM.render(reactElem, element)
  return {
    close,
    reactInstance,
    reactElem,
    element,
  }
}
