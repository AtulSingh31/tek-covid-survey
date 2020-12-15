import React from 'react';

class Test extends React.Component {
   constructor() {
      super();
      this.state = {
        header: "Header from state...",
        content: "Content from state..."
      }
   }
   render() {
      return (
         <div>
            {this.state.header}
            {this.state.content}
            {this.props.name}
         </div>
      );
   }
}

export default Test;