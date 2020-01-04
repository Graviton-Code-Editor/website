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
    const siteTitle = "Graviton Editor"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `graviton`, `javascript`, `nodejs`]}
        />
        <img src="./graviton.png" alt="Graviton Screenshot"  />
        <FlexAlign>
          <p >A modern code editor.</p>
        </FlexAlign>
        <FlexAlign>
          <Button onClick={openDownloads} background="#0066FF">Download</Button>
        </FlexAlign>
      </Layout>
    )
  }
}

export default IndexPage
