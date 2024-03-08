export function genRandomNum(n = 100000) {
  let num = `${Math.floor(Math.random() * n)}`;
  const len = `${n}`.length - 1;
  while (num.length < len) {
    num = `0${num}`;
  }
  return num;
}

export default function genUID(n = 100000) {
  return `${Date.now()}-${genRandomNum(n)}`;
}

export function genUIDWithPrefix(prefix, n = 100000) {
  return `${prefix}-${genUID(n)}`;
}

export function genUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
