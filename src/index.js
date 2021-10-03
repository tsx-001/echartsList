import React from 'react';
import ReactDOM from 'react-dom';
import HomeIndex from './home/homeIndex';
import './index.css'
  class Index extends React.Component {
    render() {
      return (
        <div style={{width:'100%',height:'100%'}}>
          <HomeIndex />
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Index />,
    document.getElementById('root')
  );
  