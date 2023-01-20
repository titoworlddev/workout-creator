/* eslint-disable no-extend-native */
String.prototype.capitalize = function () {
  return this.replaceAll(/\b(\w)/g, $1 => $1.toUpperCase());
};
