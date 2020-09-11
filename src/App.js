import React, { Component } from 'react';
import './App.css';
import {Header} from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpense } from './components/IncomeExpense';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState'

class App extends Component {
  render() {
    return (
      <GlobalProvider>
        <div className='container'>
          <Header />
          <Balance />
          <IncomeExpense />
          <TransactionList />
          <AddTransaction />
        </div>
      </GlobalProvider>
    );
  }
}

export default App;
