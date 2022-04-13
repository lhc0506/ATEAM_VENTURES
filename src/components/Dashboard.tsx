import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CheckList from "./CheckList";
import "./Dashboard.css";
import { PROCESSING_METHOD, MATERIAL } from "../constants"
interface IResponse {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: Array<string>;
  material: Array<string>;
  status: string;
}
interface propsType {
  estimates: IResponse[] | undefined;
}
const DashboardContainer = styled.div`

`;

const SelectContainer = styled.div`
  display: flex;
`;

export default function Dashboard({ estimates }: propsType) {
  const [methods, setMethods] = useState(new Set<string>());
  const [materials, setMeterials] = useState(new Set<string>());
  const [cards, setCards] = useState(estimates);

  useEffect(() => {
    if (methods.size === 0 && materials.size === 0) {
      setCards(estimates);
      return;
    }
    setCards(estimates?.filter(estimate => {
      for (let i = 0; i < estimate.material.length; i++) {
        if (materials.has(estimate.material[i])) {
          return true;
        }
      }

      for (let i = 0; i < estimate.method.length; i++) {
        if (methods.has(estimate.method[i])) {
          return true;
        }
      }

      return false;
    }));
  }, [methods, materials, estimates]);

  return (
    <>
      <DashboardContainer>
        <div>
          들어온 요청
        </div>
        <div>
          파트너님에게 딱 맞는 요청서를 찾아보세요.
        </div>
      </DashboardContainer>
      <SelectContainer>
        <CheckList title={PROCESSING_METHOD.title} items={PROCESSING_METHOD.items} filters={methods} setFilters={setMethods} />
        <CheckList title={MATERIAL.title} items={MATERIAL.items} filters={materials} setFilters={setMeterials} />
      </SelectContainer>
    </>
  );
}
