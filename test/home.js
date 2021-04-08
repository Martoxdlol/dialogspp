import React, { useEffect } from 'react';
import openDialog from '../src/openDialog'
import BottomSheet from '../src/bottomSheet'
import FullScreenPage from '../src/fullScreenPage'
import contextmenu from '../src/contextmenu'

function openMessageBox(){
  openDialog(history2, props => {
    const closeSVG = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
    return <div className="message-box">
      <div style={{float:'right',cursor:"pointer"}} onClick={props.close}>{closeSVG}</div>
      <h2>You have an alert</h2>
      <p>You can close this by boing back</p>
    </div>
  },"/messageBox")
}

function openBottomSheet(){
  openDialog(history2, props => {
    const closeSVG = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
    return <BottomSheet {...props} className="padding-20">
      <div style={{float:'right',cursor:"pointer"}} onClick={props.close}>{closeSVG}</div>
      <h2>You have an alert</h2>
      <p>You can close this by boing back</p>
    </BottomSheet>
  },"/fullScreenPage")
}

function openFullScreenPage(){
  openDialog(history2, props => {
    const closeSVG = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" /></svg>
    return <FullScreenPage {...props} className="padding-20">
      <div style={{float:'right',cursor:"pointer"}} onClick={props.close}>{closeSVG}</div>
      <h2>You have an alert</h2>
      <p>You can close this by boing back</p>
    </FullScreenPage>
  },"/fullScreenPage")
}


function openContextMenu(e){
  //Context menu options
  const options = [
    {label:"Primera",value:"one",action:()=>{}},
    {label:"Segunda",value:"two"},
    {label:"OPEN SETTINGS (try this)",action:openFullScreenPage},
    {label:"Cuarta",anyData:1234},
    {label:"Quinta",num:"five",action:()=>{}},
    {label:"Sexta"},
    'Only label option',
    'Only label option 2',
  ]

  contextmenu(
    e,
    options,
    e => {
      if(e.num == 'five') {alert('five');return;}
      if(e.label == 'OPEN SETTINGS (try this)') return;
      alert('Clicked: '+e.label)
    }
  )
}

const ref = React.createRef()

export default function Home(props){

  useEffect(() => {
    ref.current.addEventListener('contextmenu', e => {
      e.preventDefault()
      openContextMenu(e)
    })
  })

  return <div>
    <h1>Dialgospp test</h1>
    <button type="button" onClick={openMessageBox}>Open SIMPLE DIALOG</button>
    <button type="button" onClick={openBottomSheet}>Open BOTTOM SHEET</button>
    <button type="button" onClick={openFullScreenPage}>Open FULL SCREEN</button>
    <div id="contextmenu-div" ref={ref}>
      <h2>RIGHT CLICK</h2>
    </div>
  </div>
}
