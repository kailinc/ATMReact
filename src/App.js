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
    this.handleTransferChange = this.handleTransferChange.bind(this)
    // this.handleCheckingsChange = this.handleCheckingsChange.bind(this)
  }

  // just updates the checkings balance
  handleBalanceChange(accountInfo) {
    // updates the correct account
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

  handleTransferChange(transferInfo) {
    if (transferInfo.curAccount === 'Checking') {
      this.setState({
        checkingsBalance: transferInfo.curBalance,
        savingsBalance: this.state.savingsBalance + transferInfo.change
      })
    }
  }

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
          onAmountChange={this.handleBalanceChange}
          onTransferChange={this.handleTransferChange} />
        <Account
          name="Savings"
          balance={this.state.savingsBalance}
          onAmountChange={this.handleBalanceChange}
          onTransferChange={this.handleTransferChange}/>
        <div className="clear"></div>
      </div>
    );
  }
}

export default App;
