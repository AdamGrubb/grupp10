export default function Portions(portions, amount) {
  if (portions == 2) return amount * 0.5;
  if (portions == 4) {
    return amount;
  }
  if (portions == 6) {
    return amount * 1.5;
  }
  if (portions == 8) {
    return amount * 2;
  }

  return amount;
}
