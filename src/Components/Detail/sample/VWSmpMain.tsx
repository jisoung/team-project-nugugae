import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { tokenState } from "../../../atom";
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
function VWSmpMain({ url }): any {
  const ascToken = useRecoilState(tokenState);
  const [bundles, setBundles] = useState<IBundle>({});
  const [kind, setKind] = useState(1);
  const [page, setPage] = useState(1);
  let config = {
    method: "get",
    url: `${url}s=${kind}&p=${page}`,
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
  Object.values(bundles).map((bundle): any => {
    console.log(bundle);
  });
  return (
    <S.SmpMainContainer>
      {Object.values(bundles).map((bundle): any => {
        <div>{bundle}</div>;
      })}
    </S.SmpMainContainer>
  );
}

export default React.memo(VWSmpMain);
