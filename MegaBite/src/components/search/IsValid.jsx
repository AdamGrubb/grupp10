export default function IsValid(value) {
  console.log(typeof value);
  if (typeof value == [] && value !== null && typeof value !== "undefined") {
    return true;
  } else {
    return false;
  }
}
