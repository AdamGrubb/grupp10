import { useState } from "react";

export default function Location() {
  const [location, setLocation] = useState("Denna ska ändras");
  return (
    <>
      <section className="btnSearch mt-2 mr-12 justify-self-start text-sm border-2 border-solid">
        <select
          className="bg-receptDescriptionColor "
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value={""}>All Locations</option>
          <option value={"African"}>African</option>
          <option value={"American"}>American</option>
          <option value={"Chinese"}>Chinese</option>
          <option value={"European"}>European</option>
          <option value={"Greek"}>Greek</option>
          <option value={"Japanese"}>Japanese</option>
          <option value={"Mexican"}>Mexican</option>
          <option value={"Middle Eastern"}>Middle Eastern</option>
          <option value={"Thai"}>Thai</option>
          Locations
        </select>
      </section>
    </>
  );
}
