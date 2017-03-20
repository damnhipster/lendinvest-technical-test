
> lendinvest-technical-test@1.0.0 test /Users/hem/Projects/lendinvest-technical-test
> mocha --recursive --compilers js:babel-register "--reporter" "markdown"

# TOC
   - [<AvailableInvestment/>](#availableinvestment)
   - [<CurrentLoans/>](#currentloans)
     - [#handleInvest](#currentloans-handleinvest)
   - [<InvestModal/>](#investmodal)
     - [investment form](#investmodal-investment-form)
       - [when an investment amount has been entered](#investmodal-investment-form-when-an-investment-amount-has-been-entered)
       - [when no investment amount has been entered](#investmodal-investment-form-when-no-investment-amount-has-been-entered)
   - [<Loan/>](#loan)
     - [#constructor](#loan-constructor)
     - [#handleInvest()](#loan-handleinvest)
     - [<InvestModal/>)](#loan-investmodal)
   - [<LoanValues/>](#loanvalues)
<a name=""></a>
 
<a name="availableinvestment"></a>
# <AvailableInvestment/>
should show the available amount that can be invested.

```js
var props = _extends({}, defaultProps, {
  loans: [{ available: 111 }, { available: 222 }]
});
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AvailableInvestment2.default, props));
(0, _chai.expect)(wrapper.html()).to.contain('' + (111 + 222));
```

should convert the available amounts to numbers.

```js
var props = _extends({}, defaultProps, {
  loans: [{ available: "1,111" }, { available: "2,222" }]
});
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AvailableInvestment2.default, props));
(0, _chai.expect)(wrapper.html()).to.contain(_formatter.Money.format('' + (1111 + 2222)));
```

<a name="currentloans"></a>
# <CurrentLoans/>
should render the heading passed in.

```js
var props = _extends({}, defaultProps, { heading: "test" });
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_CurrentLoans2.default, props));
(0, _chai.expect)(wrapper.first().contains(_react2.default.createElement(
  'h1',
  null,
  'test'
))).to.be.true;
```

should contain a list of loans.

```js
var props = _extends({}, defaultProps, { loans: [1, 2, 3] });
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_CurrentLoans2.default, props));
(0, _chai.expect)(wrapper.find(_Loan2.default)).to.have.length(3);
```

should pass loan information through to Loan.

```js
var props = _extends({}, defaultProps, { loans: [1] });
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_CurrentLoans2.default, props));
(0, _chai.expect)(wrapper.find(_Loan2.default).props()).to.have.all.keys(['id', 'title', 'tranche', 'amount', 'annualisedReturn', 'ltv', 'termRemaining', 'available', 'invest']);
```

should contain the amount available to invest.

```js
var props = _extends({}, defaultProps, { loans: [1] });
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_CurrentLoans2.default, props));
(0, _chai.expect)(wrapper.find(_AvailableInvestment2.default).exists()).to.be.true;
```

should pass the loans through to <AvailableInvestment/>.

```js
var loans = [1, 2, 3];
var props = _extends({}, defaultProps, { loans: loans });
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_CurrentLoans2.default, props));
(0, _chai.expect)(wrapper.find(_AvailableInvestment2.default).prop('loans')).to.have.length(3);
```

<a name="currentloans-handleinvest"></a>
## #handleInvest
should reduce the available amount in a loan with the given id.

```js
var loans = [{ id: "1", available: "20" }, { id: "2", available: "30" }];
var props = _extends({}, defaultProps, { loans: loans });
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_CurrentLoans2.default, props));
wrapper.instance().handleInvest({ id: 1, amount: 10 });
(0, _chai.expect)(wrapper.state('loans')[0].available).to.equal(10);
```

should not reduce the available amount in a loan with a different id.

```js
var loans = [{ id: "1", available: "20" }, { id: "2", available: "30" }];
var props = _extends({}, defaultProps, { loans: loans });
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_CurrentLoans2.default, props));
wrapper.instance().handleInvest({ id: 1, amount: 10 });
(0, _chai.expect)(wrapper.state('loans')[1].available).to.equal(30);
```

should reduce the available amount below zero.

```js
var loans = [{ id: "1", available: "20" }];
var props = _extends({}, defaultProps, { loans: loans });
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_CurrentLoans2.default, props));
wrapper.instance().handleInvest({ id: 1, amount: 30 });
(0, _chai.expect)(wrapper.state('loans')[0].available).to.equal(0);
```

<a name="investmodal"></a>
# <InvestModal/>
should pass the isOpen prop to <Modal/>.

```js
var props = _extends({}, defaultProps, { isOpen: true });
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_InvestModal2.default, props));
(0, _chai.expect)(wrapper.find(_reactModal2.default).prop('isOpen')).to.equal(wrapper.prop('isOpen'));
```

should pass the close prop to <Modal/>.

```js
var close = function close() {};
var props = _extends({}, defaultProps, { close: close });
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_InvestModal2.default, props));
(0, _chai.expect)(wrapper.find(_reactModal2.default).prop('onRequestClose')).to.equal(close);
```

should contain the title of the loan.

```js
var props = _extends({}, defaultProps, { title: 'test' });
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_InvestModal2.default, props));
(0, _chai.expect)(wrapper.find(_reactModal2.default).children().at(1).html()).to.equal("<p>test</p>");
```

should contain the amount available to invest in the loan.

```js
var props = _extends({}, defaultProps, { amountAvailable: 99999 });
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_InvestModal2.default, props));
(0, _chai.expect)(wrapper.find(_reactModal2.default).children().at(2).html()).to.equal('<p>Amount available: ' + _formatter.Money.format(99999) + '</p>');
```

should contain the remaining time left for the loan.

```js
var props = _extends({}, defaultProps, { remainingTime: 99999 });
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_InvestModal2.default, props));
(0, _chai.expect)(wrapper.find(_reactModal2.default).children().at(3).html()).to.equal('<p>Loan ends in: ' + _moment2.default.duration(99999, 'seconds').humanize() + '</p>');
```

<a name="investmodal-investment-form"></a>
## investment form
should contain a button to invest.

```js
var props = _extends({}, defaultProps);
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_InvestModal2.default, props));
(0, _chai.expect)(wrapper.find('button').html()).to.contain('Invest');
```

<a name="investmodal-investment-form-when-an-investment-amount-has-been-entered"></a>
### when an investment amount has been entered
button should be enabled.

```js
var props = _extends({}, defaultProps, { isOpen: true });
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_InvestModal2.default, props));
wrapper.find('input').simulate('change', { target: { value: 9999 } });
(0, _chai.expect)(wrapper.find('button').prop('disabled')).to.be.false;
```

should close the modal when button is clicked.

```js
var props = _extends({}, defaultProps, { isOpen: true, close: _chai2.default.spy() });
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_InvestModal2.default, props));
wrapper.find('input').simulate('change', { target: { value: 9999 } });
wrapper.find('button').simulate('click');
(0, _chai.expect)(props.close).to.have.been.called.once;
```

should invest in the loan when button is clicked.

```js
var props = _extends({}, defaultProps, { isOpen: true, invest: _chai2.default.spy() });
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_InvestModal2.default, props));
wrapper.find('input').simulate('change', { target: { value: 9999 } });
wrapper.find('button').simulate('click');
(0, _chai.expect)(props.invest).to.have.been.called.with(9999);
```

<a name="investmodal-investment-form-when-no-investment-amount-has-been-entered"></a>
### when no investment amount has been entered
button should be disabled.

```js
var props = _extends({}, defaultProps, { isOpen: true });
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_InvestModal2.default, props));
(0, _chai.expect)(wrapper.find('button').prop('disabled')).to.be.true;
```

should not close the modal when button is clicked.

```js
var props = _extends({}, defaultProps, { isOpen: true, close: _chai2.default.spy() });
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_InvestModal2.default, props));
wrapper.find('button').simulate('click');
(0, _chai.expect)(props.close).not.to.have.been.called();
```

should not invest in the loan when button is clicked.

```js
var props = _extends({}, defaultProps, { isOpen: true, invest: _chai2.default.spy() });
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_InvestModal2.default, props));
wrapper.find('button').simulate('click');
(0, _chai.expect)(props.invest).not.to.have.been.called();
```

<a name="loan"></a>
# <Loan/>
should contain the title.

```js
var props = _extends({}, defaultProps, { title: "test" });
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Loan2.default, props));
(0, _chai.expect)(wrapper.children().at(0).matchesElement(_react2.default.createElement(
  'h2',
  null,
  'test'
))).to.be.true;
```

should contain the tranche.

```js
var props = _extends({}, defaultProps, { tranche: "test" });
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Loan2.default, props));
(0, _chai.expect)(wrapper.children().at(1).html()).to.equal("<p>Tranche: test</p>");
```

should contain the amount.

```js
var props = _extends({}, defaultProps, { amount: 99999 });
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Loan2.default, props));
(0, _chai.expect)(wrapper.children().at(2).html()).to.equal('<p>Amount: ' + _formatter.Money.format(99999) + '</p>');
```

should contain the <LoanValues/>.

```js
var props = _extends({}, defaultProps);
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Loan2.default, props));
(0, _chai.expect)(wrapper.find(_LoanValues2.default).exists()).to.be.true;
```

should set annualisedReturn and loanToValue in <LoanValues/>.

```js
var props = _extends({}, defaultProps);
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Loan2.default, props));
(0, _chai.expect)(wrapper.find(_LoanValues2.default).props()).to.have.all.keys(['annualisedReturn', 'loanToValue']);
```

should contain a button to invest.

```js
var props = _extends({}, defaultProps);
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Loan2.default, props));
(0, _chai.expect)(wrapper.find('button').exists()).to.be.true;
(0, _chai.expect)(wrapper.find('button').text()).to.equal('Invest in Loan');
```

should contain an Invested label when loan has been invested in.

```js
var props = _extends({}, defaultProps);
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Loan2.default, props));
wrapper.instance().handleInvest();
(0, _chai.expect)(wrapper.contains(_react2.default.createElement(
  'p',
  { className: 'badge' },
  'Invested'
))).to.be.true;
```

should not contain an Invested label when loan has not been invested in.

```js
var props = _extends({}, defaultProps);
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Loan2.default, props));
(0, _chai.expect)(wrapper.contains(_react2.default.createElement(
  'p',
  { className: 'badge' },
  'Invested'
))).to.be.false;
```

<a name="loan-constructor"></a>
## #constructor
should not show the modal.

```js
var props = _extends({}, defaultProps);
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Loan2.default, props));
(0, _chai.expect)(wrapper.state().showModal).to.be.false;
```

<a name="loan-handleinvest"></a>
## #handleInvest()
should set invested to be true.

```js
var props = _extends({}, defaultProps);
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Loan2.default, props));
wrapper.instance().handleInvest();
(0, _chai.expect)(wrapper.state('invested')).to.be.true;
```

should call the prop invest function.

```js
var props = _extends({}, defaultProps, { id: 1, invest: _chai2.default.spy() });
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Loan2.default, props));
wrapper.instance().handleInvest(9999);
(0, _chai.expect)(props.invest).to.have.been.called.with({ id: 1, amount: 9999 });
```

<a name="loan-investmodal"></a>
## <InvestModal/>)
should exist.

```js
var props = _extends({}, defaultProps);
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Loan2.default, props));
(0, _chai.expect)(wrapper.find(_InvestModal2.default).exists()).to.be.true;
```

should show  when the button is clicked.

```js
var props = _extends({}, defaultProps);
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Loan2.default, props));
wrapper.find('button').simulate('click');
(0, _chai.expect)(wrapper.state().showModal).to.be.true;
```

should set isOpen in <InvestModal/>.

```js
var props = _extends({}, defaultProps);
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Loan2.default, props));
var showModal = wrapper.state().showModal;
(0, _chai.expect)(wrapper.find(_InvestModal2.default).prop('isOpen')).to.equal(showModal);
```

should set a close function in <InvestModal/>.

```js
var props = _extends({}, defaultProps);
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Loan2.default, props));
(0, _chai.expect)(wrapper.find(_InvestModal2.default).prop('close')).to.equal(wrapper.instance().handleCloseModal).and.not.be.undefined;
```

should set an invest function in <InvestModal/>.

```js
var props = _extends({}, defaultProps);
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Loan2.default, props));
(0, _chai.expect)(wrapper.find(_InvestModal2.default).prop('invest')).to.equal(wrapper.instance().handleInvest).and.not.be.undefined;
```

should set title, amount available and remaining time in <InvestModal/>.

```js
var props = _extends({}, defaultProps);
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Loan2.default, props));
(0, _chai.expect)(wrapper.find(_InvestModal2.default).props()).to.contain.all.keys(['title', 'amountAvailable', 'remainingTime']);
```

<a name="loanvalues"></a>
# <LoanValues/>
should contain the annualised return.

```js
var props = _extends({}, defaultProps, { annualisedReturn: 3.14 });
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_LoanValues2.default, props));
(0, _chai.expect)(wrapper.children().at(0).html()).to.equal("<p>Annualised Return: 3.14</p>");
```

should contain the loan to value.

```js
var props = _extends({}, defaultProps, { loanToValue: 3.14 });
var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_LoanValues2.default, props));
(0, _chai.expect)(wrapper.children().at(1).html()).to.equal("<p>Loan to value: 3.14</p>");
```

