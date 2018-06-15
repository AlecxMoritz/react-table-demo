import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactTable from 'react-table';
import "react-table/react-table.css";

class App extends Component {

 


  render() {

    const friends = [
      { 
        name: 'Nikaya Hale',
        type: 'Backend Developer' },
      {
        name: 'Brittany Hutter',
        type: 'Fullstack Developer'
      },
      {
        name: 'Autumn Henderson',
        type: 'Backend Developer'
      },
      {
        name: 'Alecx',
        type: 'Fullstack Developer'
      },
      {
        name: "Trace Mc'Graw",
        type: 'Wordpress Developer'
      },
      {
        name: 'Zack Maynard',
        type: 'Frontend Developer'
      },
      {
        name: 'Tracy Desserich',
        type: 'Solution Architecht'
      }
    ]

    const columns = [
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Type',
        accessor: 'type'
      }
    ]

    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Friends List</h1>
          <h4>A tiny react demo app</h4>
        </header>
       
          <h5>Some Friends</h5>
        <ReactTable
        data={friends}
        columns={columns}
        defaultPageSize = {3}
        pageSizeOptions = {[3, 6]}
         />

      </div>
    );
  }
}

export default App;
