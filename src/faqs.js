import React, { Component } from 'react';
import ReactMarkdown from "react-markdown";
import AppMarkdown from './faqs.md';

class FAQs extends Component {
  constructor() {
    document.documentElement.style.setProperty('--logo', 'auto');
    super();
    this.state = { markdown: '' };
  }

  componentWillMount() {
    fetch(AppMarkdown).then(res => res.text()).then(text => this.setState({ markdown: text }));
  }
  render() {
    const { markdown } = this.state;
    return (
      <div className="content">
        <ReactMarkdown className="markdown-container" source={markdown} />
      </div>
      );
  }
}
export default FAQs;