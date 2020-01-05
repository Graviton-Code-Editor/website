import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from '../components/button'
import FlexAlign from '../components/flex-align'

function openDownloads(){
    window.open('https://github.com/Graviton-Code-Editor/Graviton-App/releases')
}

class IndexPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} >
        <div>
          <FlexAlign>
            <img src='assets/graviton-logo.png'  alt="Graviton Screenshot" style={{
              width:'200px'
            }}  />
          </FlexAlign>
          <FlexAlign>
            <p >A modern <b>code editor.</b></p>
          </FlexAlign>
          <SEO
            title="Home"
            keywords={[`blog`, `graviton`, `javascript`, `nodejs`]}
          />
          <img  src='assets/graviton.png'  alt="Graviton Screenshot"  />
          <FlexAlign>
            <p >Available for Windows, MacOS and Linux.</p>
          </FlexAlign>
          <FlexAlign>
            <Button onClick={openDownloads} background="#0066FF">Download</Button>
          </FlexAlign>
        </div>
      </Layout>
    )
  }
}


export default IndexPage
