import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import Loading from "../components/common/Loading";
import PokeInfoBox from "../components/PokeInfoBox";
import { PokeInfo } from "../types";

function PokeDetail() {
  const location = useLocation();
  const API_URL = location.state.pokeURL;
  const fetchDetail = async () => {
    const { data } = await axios.get<PokeInfo>(API_URL);
    return data;
  };
  const { data, isLoading } = useQuery<PokeInfo, Error>(
    ["pokeDetail"],
    fetchDetail
  );

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <PokeInfoBox
          mainImg={data?.sprites.other["official-artwork"].front_default!}
          subImg1={data?.sprites.front_default!}
          subImg2={data?.sprites.back_default!}
          name={data?.name!}
          height={data?.height!}
          weight={data?.weight!}
        />
      )}
    </>
  );
}

export default PokeDetail;
