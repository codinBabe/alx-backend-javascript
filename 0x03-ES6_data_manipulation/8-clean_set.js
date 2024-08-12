export default function cleanSet(value, startString) {
  let str = "";
  for (const item of value) {
    if (item.startsWith(startString)) {
      str += item.slice(startString.length) + '-';
    }
  }
  return str.slice(0, str.length - 1);
}
