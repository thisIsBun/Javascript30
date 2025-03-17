import "./style.css";
import { useEffect, useMemo, useState, Fragment } from "react";

const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

interface City {
  city: string;
  population: string;
  rank: string;
  state: string;
}

const Demo = () => {
  const [data, setData] = useState<City[]>([]);
  const [search, setSearch] = useState("");

  const filterDate = useMemo(() => {
    if (!search) return data;
    return data.filter((item) => {
      return (
        item.city.toLocaleLowerCase().includes(search) ||
        item.state.toLocaleLowerCase().includes(search)
      );
    });
  }, [search, data]);

  useEffect(() => {
    fetch(endpoint)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value.toLocaleLowerCase());
  };

  const highlightText = (text: string) => {
    if (!search) return text;
    const parts = text.split(new RegExp(`(${search})`, "gi"));
    return parts.map((part, index) => {
      if (part.toLowerCase() === search.toLocaleLowerCase()) {
        return (
          <span className="hl" key={index}>
            {part}
          </span>
        );
      }
      return <Fragment key={index}>{part}</Fragment>;
    });
  };

  return (
    <>
      <form className="search-form">
        <input
          type="text"
          className="search text-gray-50"
          placeholder="City or State"
          onChange={handleSearch}
        />
        <ul className="suggestions">
          {filterDate.map(({ city, population, rank, state }) => {
            return (
              <li key={rank}>
                <span className="name">
                  {highlightText(city)}, {highlightText(state)}
                </span>
                <span className="population">
                  {Number(population).toLocaleString()}
                </span>
              </li>
            );
          })}
        </ul>
      </form>
    </>
  );
};

export default Demo;
