import { Alert } from "@material-tailwind/react";
 
export default function AlertPopup({alertMessage}) {
  return <Alert color="amber">{alertMessage}</Alert>;
}