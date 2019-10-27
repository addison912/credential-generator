//1969-1997

module.exports = {
  gen: function() {
    let month = Math.ceil(Math.random() * 12);
    let day = Math.ceil(Math.random() * 28);
    let year = 1969 + Math.ceil(Math.random() * 28);
    return { month, day, year };
  }
};
