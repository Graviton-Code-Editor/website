import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from '../components/button'
import FlexAlign from '../components/flex-align'
import styled from "styled-components"

function openDownloads(){
	window.open('https://github.com/Graviton-Code-Editor/Graviton-App/releases')
}

function openTwitter(){
	window.open('https://twitter.com/gravitoneditor')
}

function openGithub(){
	window.open('https://github.com/Graviton-Code-Editor/Graviton-App')
}

function openDiscord(){
	window.open('https://discord.gg/gg6CTYA')
}

class IndexPage extends React.Component {
  render() {
    return (
      <Layout title="Graviton" location={this.props.location} >
        <div>
          <SEO
            title="Home"
            keywords={[`blog`, `graviton`, `javascript`, `nodejs`, 'editor',' graviton editor']}
          />
         	<div style={{display: 'flex', margin: '0 40px', alignItems: 'center'}}>
			<p style={{marginBottom:0, flex: 9}}>A modern <b>code editor.</b></p>
		      <Button style={{ marginLeft: '40px',marginBottom:0,flex:1}} onClick={openDownloads} background="#0066FF">Download</Button>
		</div>
		<img  src='assets/graviton.png'  alt="Graviton Screenshot" style={{
			margin:'0'
		    }} />
          <FlexAlign>
            <ImageButton>
              <img src='assets/github_mark.png' onClick={openGithub} alt="Github link"/>
              <img src='assets/twitter.svg'  onClick={openTwitter} alt="Twitter link" style={{
                transform:'scale(1.5)'
              }}/>
		<img src='assets/discord.svg'  onClick={openDiscord} alt="Twitter link" style={{
                transform:'scale(1.3)'
              }}/>
            </ImageButton>
          </FlexAlign>
          <FlexAlign>
            <p >Available for Windows, MacOS and Linux.</p>
          </FlexAlign>
          <FlexAlign>
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
