import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard, Alert } from "../components";
import { getHeroesByName } from "../helpers";

export const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = useMemo(() => searchParams.get("q"), [searchParams]);
  const heroes = useMemo(() => getHeroesByName(query || "") || [], [query]);

  const { searchText, onInputChange } = useForm({
    searchText: query || "",
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();

    const inputValue = searchText.trim();
    if (!inputValue) return;

    setSearchParams({ q: inputValue });
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              onChange={onInputChange}
              value={searchText || ""}
            />
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {query ? (
            heroes.length > 0 ? (
              <Alert type={"primary"}>Resultados de {query}</Alert>
            ) : (
              <Alert type={"danger"}>
                No se encontraron resultado de {query}
              </Alert>
            )
          ) : (
            <></>
          )}

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
