import React from 'react';
'use strict';

const content = React.createElement('p', {}, 'Howdy!')

export default class App extends React.Component {
  render() {
    return ( 
    <html>
        <head>
            <title>One Foot In</title>
        </head>
        <body>
            <div id='react-root'>
                {content}
            </div>
        </body>
    </html>
    )
  }
}