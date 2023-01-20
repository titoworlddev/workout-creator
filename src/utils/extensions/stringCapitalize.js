export function stringCapitalize(str) {
  return str.replaceAll(/\b(\w)/g, $1 => $1.toUpperCase());
}
