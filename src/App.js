import React, { Component } from 'react';
import logo from './ga.png';

import Account from './Account';

class App extends Component {
  constructor() {
    super()
    this.state = {
      checkingsBalance: 100,
      savingsBalance: 100
    }
    this.handleBalanceChange = this.handleBalanceChange.bind(this)
    // this.handleCheckingsChange = this.handleCheckingsChange.bind(this)
  }

  // just updates the checkings balance
  handleBalanceChange(accountInfo) {
    if (accountInfo.type === 'Checking') {
      this.setState({
        checkingsBalance: accountInfo.balance
      })
    } else {
      this.setState({
        savingsBalance: accountInfo.balance
      })
    }
  }

  // just updates the savings balance
  // handleSavingsChange(newBalance) {
  //   this.setState({
  //     savingsBalance: newBalance
  //   })
  // }

  render() {
    return (
      <div id="content">
        <div id="nav">
          <div id="logo"><img src={logo} alt="General Assembly logo" /></div>
          <div id="title">Bank of GA</div>
        </div>
        <Account
          name="Checking"
          balance={this.state.checkingsBalance}
          onAmountChange={this.handleBalanceChange} />
        <Account
          name="Savings"
          balance={this.state.savingsBalance}
          onAmountChange={this.handleBalanceChange}/>
        <div className="clear"></div>
      </div>
    );
  }
}

export default App;
