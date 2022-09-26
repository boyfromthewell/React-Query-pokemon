import React, { useEffect } from "react";
import { Pokemon } from "../types";
import axios from "axios";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import PokemonItem from "../components/PokemonItem";
import styled from "styled-components";
import Loading from "../components/common/Loading";

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
    if (status === "error") {
      alert("예상치 못한 오류가 발생했습니다.");
      return;
    }
    fetchNextPage();
  }, [inView]);

  return (
    <>
      <MainContainer>
        {data?.pages.map((page, page_idx) => (
          <React.Fragment key={page_idx}>
            {page.results.map((item: Pokemon, idx: any) => (
              <React.Fragment key={idx}>
                <PokemonItem name={item.name} url={item.url} />
              </React.Fragment>
            ))}
          </React.Fragment>
        ))}
      </MainContainer>
      {isFetchingNextPage ? (
        <Loading />
      ) : (
        <div
          style={{ display: "block", visibility: "hidden" }}
          className="ref"
          ref={ref}
        >
          im ref
        </div>
      )}
    </>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
`;

export default Home;
