const map = {
  "pt": {
    type: "padding",
    rules: [{
      name: "padding-top",
      value: function (selector) {
        let value = selector.match(/\d+[px|%|em]*/)[0];
        return value;
      }
    }]
  },
  "pl": {
    rules: [{
      type: "padding",
      name: "padding-left",
      value: function (selector) {
        let value = selector.match(/\d+[px|%|em]*/)[0];
        return value;
      }
    }]
  },
  "pb": {
    type: "padding",
    rules: [{
      name: "padding-bottom",
      value: function (selector) {
        let value = selector.match(/\d+[px|%|em]*/)[0];
        return value;
      }
    }]
  },
  "pr": {
    type: "padding",
    rules: [{
      name: "padding-right",
      value: function (selector) {
        let value = selector.match(/\d+[px|%|em]*/)[0];
        return value;
      }
    }]
  },
  "ph": {
    type: "padding",
    rules: [
      {
        name: "padding-left",
        value: function (selector) {
          let value = selector.match(/\d+[px|%|em]*/)[0];
          return value;
        }
      },
      {
        name: "padding-right",
        value: function (selector) {
          let value = selector.match(/\d+[px|%|em]*/)[0];
          return value;
        }
      }
    ]
  },
  "pv": {
    type: "padding",
    rules: [
      {
        name: "padding-top",
        value: function (selector) {
          let value = selector.match(/\d+[px|%|em]*/)[0];
          return value;
        }
      },
      {
        name: "padding-top",
        value: function (selector) {
          let value = selector.match(/\d+[px|%|em]*/)[0];
          return value;
        }
      }
    ]
  },
}

module.exports = map;
