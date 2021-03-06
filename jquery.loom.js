(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./jquery.crank", "./jquery.weave"], factory);
  } else if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./jquery.crank"), require("./jquery.weave"));
  } else {
    root["mu-jquery-loom/jquery.loom"] = factory(root["mu-jquery-loom/jquery.crank"], root["mu-jquery-loom/jquery.weave"]);
  }
})(this, function (crank, weave) {
  var slice = Array.prototype.slice;

  return function (attr) {
    var arg = [attr];
    var args = slice.call(arguments);
    var selector = "[" + attr + "]";

    return this.extend({
      "crank": function () {
        return crank.apply(this, arg.concat(slice.call(arguments)));
      },
      "weave": function () {
        return weave.apply(this.find(selector).addBack(selector), args.concat(slice.call(arguments)));
      }
    });
  }
});
