import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { tokenState } from "../../../atom";
import * as S from "../../../STYLES/Detail/STLSmpMain";

interface IBundle {}
function VWSmpMain() {
  const ascToken = useRecoilState(tokenState);
  const [bundles, setBundles] = useState([]);
  const [kind, setKind] = useState(1);
  const [page, setPage] = useState(1);
  let config = {
    method: "get",
    url: `http://192.168.192.1:8080/api/pet/search?s=${kind}&p=${page}`,
    headers: {
      Authorization: `Bearer ${ascToken[0]}`,
    },
    maxRedirects: 0,
  };
  useEffect(() => {
    axios(config)
      .then((response) => {
        console.log(response.data);
        setBundles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <S.SmpMainContainer></S.SmpMainContainer>;
}

export default React.memo(VWSmpMain);
