import React, { Component } from 'react'
export default class BottomSheet extends Component{
  constructor(props){
    super(props)
    this.state = {}
    this.boxRefTop = React.createRef()
  }

  componentWillUnmount(){

  }

  componentDidMount(){
    this.props.addCloseListener(()=>{
      this.boxRefTop.current.style.bottom = -this.height+"px"
    })
    // this.props.removeCloseListener(f)
    setTimeout(() => {
      this.boxRefTop.current.style.bottom = 0
    }, 10)
  }

  get height(){
    if(typeof window != "undefined" && Number.isInteger(window.innerHeight)){
      if(window.innerHeight > 400) return 400
      return window.innerHeight
    }
    return 400
  }

  render(){
    const styles = {
      boxShadow: '0px 1px 7px -2px rgba(51,51,51,1)',
      position: 'absolute',
      bottom: '0',
      backgroundColor: '#FFF',
      width: '100%',
      minHeight: '100px',
      transition: '0.2s',
    }
    return <div ref={this.boxRefTop} style={{...styles, height:this.height+"px", bottom: -this.height+"px"}} className={this.props.className}>
      {this.props.children}
    </div>
  }
}
