import React, { Component } from 'react'
export default class FullScreenPage extends Component{
  constructor(props){
    super(props)
    this.state = {}
    this.boxRefTop = React.createRef()
  }

  componentWillUnmount(){

  }

  componentDidMount(){
    this.props.addCloseListener(()=>{
      this.boxRefTop.current.style.marginLeft = '100vw'
      this.boxRefTop.current.style.boxShadow = 'none'
    })
    // this.props.removeCloseListener(f)
    setTimeout(() => {
      this.boxRefTop.current.style.marginLeft = 0
      this.boxRefTop.current.style.boxShadow = '0px 1px 7px -2px rgba(51,51,51,1)'
    }, 10);
  }

  render(){
    // const arrowBack = <svg onClick={this.props.close} style={{fill:"white"}} xmlns="http://www.w3.org/2000/svg" height={24} viewBox="0 0 24 24" width={24}><path d="M0 0h24v24H0z" fill="none" /><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" /></svg>
    const styles = {
      width: '100%',
      width: '100vw',
      height: '100%',
      marginLeft: '100vw',
      backgroundColor: '#FFF',
      transition: '0.3s',
    }

    return <div ref={this.boxRefTop} style={styles} className={this.props.className}>
      {this.props.children}
    </div>
  }
}
