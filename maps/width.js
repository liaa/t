const map = {
  "w": {
    type: "width",
    rules: [{
      name: "width",
      value: function (selector) {
        let value = selector.match(/\d+[px|%|em]*/)[0];
        return value;
      }
    }]
  },
}

module.exports = map;

