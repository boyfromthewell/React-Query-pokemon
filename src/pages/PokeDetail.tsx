import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import Loading from "../components/common/Loading";
import { PokeInfo } from "../types";
import PokeInfoBox from "../components/PokeInfoBox";

function PokeDetail() {
  const location = useLocation();
  const API_URL = location.state.pokeURL;
  const fetchDetail = async () => {
    const { data } = await axios.get<PokeInfo>(API_URL);
    return data;
  };
  const { data, isFetching } = useQuery<PokeInfo, Error>(
    ["pokeDetail"],
    fetchDetail
  );

  console.log(isFetching);
  return (
    <>
      {isFetching ? (
        <Loading status="detail" />
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
