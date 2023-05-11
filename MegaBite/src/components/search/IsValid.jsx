export default function IsValid(value) {
  if (value !== null && typeof value !== "undefined" && Array.isArray(value)) {
    return true;
  } else {
    return false;
  }
}
