export default function GetHexaDecimal() {
  const digit = [..."0123456789abcdef"];
  let hexadecimal = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * 16);
    hexadecimal += digit[random];
  }
  return hexadecimal;
}
