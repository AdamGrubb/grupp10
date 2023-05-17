export default function IsValid(value) {
  if (
    value !== null &&
    typeof value !== "undefined" &&
    Array.isArray(value) &&
    value.length !== 0
  ) {
    return true;
  } else {
    return false;
  }
}
