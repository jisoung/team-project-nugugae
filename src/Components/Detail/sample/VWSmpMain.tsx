import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { tokenState } from "../../../_LAYOUT/atom";
import * as S from "../../../STYLES/Detail/STLSmpMain";

interface IBundle {
  searchPetList?: IDetail[];
}

interface IDetail {
  adoptionStatusCd: number;
  age: string;
  classification: number;
  filePath: string;
  foundPlace: string;
  gender: number;
  gu: number;
  hairColor: string;
  memo: string;
  rescueDate: string;
  species: string;
  weight: string;
}

function VWSmpMain() {
  const ascToken = useRecoilState(tokenState);
  const [bundles, setBundles] = useState<IBundle>({});
  const [kind, setKind] = useState(1);
  const [page, setPage] = useState(1);
  useEffect(() => {
    console.log(ascToken[0])
    let config = {
      method: "get",
      url: `https://967d-222-118-155-166.jp.ngrok.io/api/pet/search?s=${kind}&p=${page}`,
      headers: {
        Authorization: `Bearer ${ascToken[0]}`,
      },
      maxRedirects: 0,
    };
    axios(config)
      .then((response) => {
        setBundles(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  Object.values(bundles).forEach((bundle): any => {
    console.log(bundle);
  });
  return (
    <S.SmpMainContainer>
      {Object.values(bundles).map((bundle) => bundle.map((detail: any): any => <img src={`https://www.daejeon.go.kr/${detail.filePath}`} width="200px" alt="none"/>))}
    </S.SmpMainContainer>
  );
}

export default React.memo(VWSmpMain);
