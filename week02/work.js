const numberReg =/(^-?\\d+$)|(^(-?\\d+)(\\.\\d+)?$)|(^[01]+$)|(^[0-7]+$)|((^0x[a-f0-9]{1,2}$)|(^0X[A-F0-9]{1,2}$)|(^[A-F0-9]{1,2}$)|(^[a-f0-9]{1,2}$))/;

const strReg = /(^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\u0021-\u002F\u003A-\u0040\u005B-\u0060\u007B-\u007E])[\u0021-\u007E]{6,16}$)|(^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E])[\x21-\x7E]{6,16}$)|((?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*)/;

function encodeUTF(text) {
  const code = encodeURIComponent(text);
  const bytes = [];
  for (let i = 0; i < code.length; i++) {
      const c = code.charAt(i);
      if (c === '%') {
          const hex = code.charAt(i + 1) + code.charAt(i + 2);
          const hexVal = parseInt(hex, 16);
          bytes.push(hexVal);
          i += 2;
      } else bytes.push(c.charCodeAt(0));
  }
  return bytes;
}