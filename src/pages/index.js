import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from '../components/button'
import FlexAlign from '../components/flex-align'
import styled from "styled-components"

function openDownloads(){
    window.open('https://github.com/Graviton-Code-Editor/Graviton-App/releases')
}

class IndexPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location} >
        <div>
          <SEO
            title="Home"
            keywords={[`blog`, `graviton`, `javascript`, `nodejs`]}
          />
          <FlexAlign>
            <img src='assets/graviton-logo.png'  alt="Graviton Screenshot" style={{
              width:'200px'
            }}  />
          </FlexAlign>
          <FlexAlign>
            <p >A modern <b>code editor.</b></p>
          </FlexAlign>
          <img  src='assets/graviton.png'  alt="Graviton Screenshot" style={{
            margin:'0'
          }} />
          <FlexAlign>
            <ImageButton>
              <img src='assets/github_mark.png'  alt="Github link"/>
              <img src='assets/twitter.svg'  alt="Twitter link" style={{
                transform:'scale(1.5)'
              }}/>
            </ImageButton>
          </FlexAlign>
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


const ImageButton = styled.div`
  img {
    transition:0.2s;
    height:40px;
    cursor:pointer;
    margin:5px 15px;
    margin-bottom:30px;
  }
`

export default IndexPage
