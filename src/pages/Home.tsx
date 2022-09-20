import React, { useEffect } from "react";
import { Pokemon } from "../types";
import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import PokemonItem from "../components/PokemonItem";

function Home() {
  const getPokemon = async (pageParam: number) => {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?offset=${pageParam}&limit=30`
    );
    return {
      results: res.data.results,
      nextPage: pageParam,
      next: res.data.next,
    };
  };
  const { ref, inView } = useInView();
  const { data, status, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    "pokemons",
    ({ pageParam = 0 }) => getPokemon(pageParam),
    {
      getNextPageParam: (lastPage) => {
        if (lastPage.next) return lastPage.nextPage + 30;
        return undefined;
      },
    }
  );
  useEffect(() => {
    if (!inView) {
      return;
    }
    fetchNextPage();
  }, [inView]);

  console.log(status, isFetchingNextPage);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        {data?.pages.map((page, page_idx) => (
          <React.Fragment key={page_idx}>
            {page.results.map((item: Pokemon, idx: any) => (
              <React.Fragment key={idx}>
                <PokemonItem name={item.name} url={item.url} />
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </div>
      {isFetchingNextPage ? (
        <h3>loading...</h3>
      ) : (
        <div style={{ display: "block" }} className="ref" ref={ref}>
          im ref
        </div>
      )}
    </>
  );
}

export default Home;
