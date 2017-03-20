const money = {
  _formatter: new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0
  }),
  format: function (amount) {
    return amount.replace ? this._formatter.format(amount.replace(/,/g, "")) : amount;
  }
}

module.exports = {
  Money: money
}
