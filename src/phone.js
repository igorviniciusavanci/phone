export function format(value, ddd) {
  if (typeof value !== 'string' || value === '') {
    console.warn('Unsupported value');
    return '';
  }
  const phoneDigits = value.match(/\d/g);
  if (ddd) {
    if (phoneDigits.length > 0) phoneDigits.splice(0, 0, '(');
    if (phoneDigits.length > 3) phoneDigits.splice(3, 0, ') ');
    if (phoneDigits.length > 8 && phoneDigits.length <= 12)
      phoneDigits.splice(8, 0, '-');
    else if (phoneDigits.length > 12) phoneDigits.splice(9, 0, '-');
    if (phoneDigits.length > 14)
      phoneDigits.splice(14, phoneDigits.length - 14);
  } else {
    if (phoneDigits.length > 4 && phoneDigits.length < 8)
      phoneDigits.splice(4, 0, '-');
    if (phoneDigits.length > 8) phoneDigits.splice(5, 0, '-');
    if (phoneDigits.length > 9) phoneDigits.splice(9, phoneDigits.length - 9);
  }
  return phoneDigits.join('');
}
