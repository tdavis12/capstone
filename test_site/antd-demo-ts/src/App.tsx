import React, { Component } from 'react';
import { Layout } from 'antd';
const { Header, Content } = Layout;


class FormsAndInputs extends Component<{}, { fullName: string}> {

  constructor(props: any){
    super(props)
    this.state = {
      fullName: ''
    }
  }

  handleSubmit = (event: any) => {
    event.preventDefault()
    const data = this.state
    console.log("Final data is", data)
  }
  handleInputChange = (event: any) => {
 
  }
  render () {
    const {fullName} = this.state
    return (
      <div>
        <Layout>
        <Header style = {{background:'black', color:'white'}}>
         ART:--   DBC:--   DBT--   | LCP:--   FCP:--   FID:--   CLS:--   TTFB:--
        </Header>
          <Layout>
          <Content>
          <h1>Forms and Inputs</h1>
          <p>Full name is: {fullName}</p>
          <form onSubmit={this.handleSubmit}>
            <p><input type='text' placeholder='Your Name' name='fullName' onChange={this.handleInputChange}/></p>
            <p><button>Send Message</button></p>
          </form>
          </Content>
          </Layout>
        </Layout>
        
      </div>
    )
  }
}

export default FormsAndInputs