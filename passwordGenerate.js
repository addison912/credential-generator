module.exports = {
  gen: () => {
    const length = 12;

    let uppercase = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let lowercase = "mnbvcxzlkjhgfdsapoiuytrewq";
    let special = "*^%$#@!";

    let newString = "";

    for (let i = 0; i < length; i++) {
      if (i < 3) {
        newString += uppercase[Math.floor(Math.random() * 26)];
      } else if (i < 6) {
        newString += lowercase[Math.floor(Math.random() * 26)];
      } else if (i < 9) {
        newString += special[Math.floor(Math.random() * 7)];
      } else if (i < length) {
        newString += Math.floor(Math.random() * 10);
      }
    }

    String.prototype.shuffle = function() {
      var a = this.split(""),
        n = a.length;

      for (var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
      }
      return a.join("");
    };

    return newString.shuffle();
  }
};
