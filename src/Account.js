import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: null
    }

    this.handleDepositClick = this.handleDepositClick.bind(this)
    this.handleWithdrawClick = this.handleWithdrawClick.bind(this)
    this.handleTransferClick = this.handleTransferClick.bind(this)
  }

  handleDepositClick(e) {
    e.preventDefault();
    // gets the value of the amount
    // has the + sign so it converts this.refs.amount.value into a number
    // this.refs.amount.value is string when we refer it
    let amount = +this.refs.amount.value;

    if (amount > 0) {
      // calculates the new balance
      let newBalance = this.props.balance + amount;
      // sets the state.balance to be the new balance
      this.props.onAmountChange({ balance: newBalance, type: this.props.name})
      this.setState({
        message: 'Deposit is successful.'
      })
      // resets the form to be empty after submit
      this.refs.amount.value = '';
    } else {
      this.setState({
        message: 'Cannot deposit negative amount'
      })
    }
  }

  handleWithdrawClick(e) {
    e.preventDefault()
    let amount = +this.refs.amount.value
    if (amount > 0) {
      if (amount <= this.props.balance) {
        let newBalance = this.props.balance - amount
        this.props.onAmountChange({ balance: newBalance, type: this.props.name})
        this.setState({
          message: 'Withdraw is successful'
        })
      } else {
        this.setState({
          message: 'You have insufficient funds.'
        })
      }
    } else {
      this.setState({
        message: 'You cannot withdraw negative amount.'
      })
    }
    this.refs.amount.value = '';
  }

  handleTransferClick (e) {
    e.preventDefault()
    let amount = +this.refs.transferAmount.value
    if (amount <= this.props.balance && amount > 0) {
      let transferInfo = {
        curAccount: this.props.name,
        curBalance: this.props.balance - amount,
        change: amount
      }
      this.props.onTransferChange(transferInfo)
    } else {
      this.setState({
        message: 'You have insufficient funds'
      })
    }
    this.refs.transferAmount.value = ''
  }

  render() {
    let balanceClass = 'balance';
    if (this.props.balance === 0) {
      balanceClass += ' zero';
    }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balanceClass}>${this.props.balance}</div>
        <input type="number" placeholder="enter an amount" ref="amount" />
        <input type="button" value="Deposit" onClick={this.handleDepositClick} />
        <input type="button" value="Withdraw" onClick={this.handleWithdrawClick} />
        <input type="number" placeholder="enter an amount" ref="transferAmount" />
        <input type="button" value="Transfer" onClick={this.handleTransferClick} />
        <p>{this.state.message}</p>
      </div>
    )
  }
}
