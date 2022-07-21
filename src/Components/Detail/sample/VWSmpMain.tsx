import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { tokenState } from "../../../atom";
import * as S from "../../../STYLES/Detail/STLSmpMain";

interface IBundle {}
function VWSmpMain() {
  const ascToken = useRecoilState(tokenState);
  const [bundles, setBundles] = useState([]);
  const [kind, setKind] = useState(1);
  const [page, setPage] = useState(1);
  console.log(ascToken[0]);
  let config = {
    method: "get",
    url: `http://192.168.192.253:8080/api/pet/search?s=${kind}&p=${page}`,
    headers: {
      Authorization: `Bearer ${ascToken[0]}`,
    },
    maxRedirects: 0,
  };
  axios(config)
    .then((response) => {
      console.log(response.data);
      setBundles(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <S.SmpMainContainer>
      {bundles.map((bundle) => (
        <Link to="animal">
          <S.Bundle>{bundle}</S.Bundle>
        </Link>
      ))}
    </S.SmpMainContainer>
  );
}

export default VWSmpMain;
