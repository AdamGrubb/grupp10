export default function Portions(portions, amount) {
  console.log(portions + " " + amount);
  if (portions == 4) {
    return (amount = amount);
  }
  if (portions == 6) {
    return (amount = amount * 1.5);
  }
  if (portions == 8) {
    return (amount = amount * 2);
  }

  console.log(portions + " " + amount);

  return amount;
}
