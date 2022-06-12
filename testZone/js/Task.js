const j = 'ab';
const s = 'aabbccd';

const vs = (s.split('').filter(char => j.includes(char)).join(''));

console.log(vs.length)