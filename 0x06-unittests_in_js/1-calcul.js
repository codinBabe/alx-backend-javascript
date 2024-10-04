export default function calculateNumber(type, a, b) {
  let aRound = Math.round(a);
  let bRound = Math.round(b);

  if (type === 'SUM') {
    return aRound + bRound;
  } else if (type === 'SUBTRACT') {
    return aRound - bRound;
  } else if (type === 'DIVIDE') {
    if (bRound === 0) {
      return 'Error';
    }
    return aRound / bRound;
  }
}
