import React from 'react';
var marked = require('marked');


class Markdown extends React.Component {
    constructor() {
        super();
        this.state = {
            txt: '# This is an tag\n## This is an tag\n###### This is an h6 tag\nhttp://github.com - automatic!\n[GitHub](http://github.com)\n\nI think you should use an`<addr>` element here instead.\n\nAs Kanye West said:\n\n > We\'re living the future so\n> the present is our past.\n\n1. Item 1\n1. Item 2\n1. Item 3\n   1. Item 3a\n   1. Item 3b\n\nIf you want to embed images, this is how you do it:\n\n![Image of FCC](https://avatars2.githubusercontent.com/u/9892522?v=3&s=400)\n\nIt\'s very easy to make some words **bold** and other words *italic* with Markdown. You can even [link to Google!](http://google.com)\n\nAnd if you\'d like to use syntax highlighting, include the language:\n```javascript\nif (isAwesome){\n return true\n}\n```'
        }
        this.update = this.update.bind(this)
    }
    update(e) {
        this.setState({ txt: e.target.value })
    }
    render() {
        return (
          <div id="markdown-component">
                <textarea id="editor" onChange={this.update} 
                defaultValue={this.state.txt}
                rows="10" cols="50"
                  />
                <div id="preview" dangerouslySetInnerHTML={{ __html: marked(this.state.txt) }} />
          </div>
        );
    }
}

export default Markdown;