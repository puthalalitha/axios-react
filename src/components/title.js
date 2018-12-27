import React, { Component } from 'react';
 
class Title extends Component {
    
    render(props) { 
        return ( 
            <div className="title">
                 <h1>Welcome to {this.props.title}!</h1>
            </div>
         );
    }
}
 
export default Title;