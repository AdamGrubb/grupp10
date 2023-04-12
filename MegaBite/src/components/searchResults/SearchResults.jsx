import MockData from "./mockData";

export default function SearchResults() {
  let testArr = MockData();
  return (
    <section className="">
      <div>
        <ul className="flex flex-wrap justify-around">
          {testArr.map((card) => (
            <li className="mt-1">{card}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
