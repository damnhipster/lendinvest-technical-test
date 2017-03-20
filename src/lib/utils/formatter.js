const money = {
  _formatter: new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0
  }),
  format: function (amount) {
    return this._formatter.format(amount.replace ? amount.replace(/,/g, "") : amount);
  }
}

module.exports = {
  Money: money
}
