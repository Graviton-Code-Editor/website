import React from "react";

import FlexAlign from "../components/flex-align";
import SEO from "../components/seo";
import Layout from "../components/layout";

class AboutPage extends React.Component {
  render() {
    const siteTitle = "About";

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />
        <FlexAlign>
          <p>Graviton is a simple and modern code editor.</p>
        </FlexAlign>
        <FlexAlign>
          <p>
            Author: <b>Marc Espín Sanz</b>
          </p>
        </FlexAlign>
        <FlexAlign>
          <a href="https://github.com/Graviton-Code-Editor/Graviton-App">
            Source code
          </a>
        </FlexAlign>
      </Layout>
    );
  }
}

export default AboutPage;
