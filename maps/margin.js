const map = {
  "mt": {
    type: "margin",
    rules: [{
      name: "margin-top",
      value: function (selector) {
        let value = selector.match(/\d+[px|%|em]*/)[0];
        return value;
      }
    }]
  },
  "ml": {
    rules: [{
      type: "margin",
      name: "margin-left",
      value: function (selector) {
        let value = selector.match(/\d+[px|%|em]*/)[0];
        return value;
      }
    }]
  },
  "mb": {
    type: "margin",
    rules: [{
      name: "margin-bottom",
      value: function (selector) {
        let value = selector.match(/\d+[px|%|em]*/)[0];
        return value;
      }
    }]
  },
  "mr": {
    type: "margin",
    rules: [{
      name: "margin-right",
      value: function (selector) {
        let value = selector.match(/\d+[px|%|em]*/)[0];
        return value;
      }
    }]
  },
  "mh": {
    type: "margin",
    rules: [
      {
        name: "margin-left",
        value: function (selector) {
          let value = selector.match(/\d+[px|%|em]*/)[0];
          return value;
        }
      },
      {
        name: "margin-right",
        value: function (selector) {
          let value = selector.match(/\d+[px|%|em]*/)[0];
          return value;
        }
      }
    ]
  },
  "mv": {
    type: "margin",
    rules: [
      {
        name: "margin-top",
        value: function (selector) {
          let value = selector.match(/\d+[px|%|em]*/)[0];
          return value;
        }
      },
      {
        name: "margin-top",
        value: function (selector) {
          let value = selector.match(/\d+[px|%|em]*/)[0];
          return value;
        }
      }
    ]
  },
}

module.exports = map;
