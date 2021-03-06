import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CheckList from "./CheckList";
import ToggleButton from "./ToggleButton";
import RequestCard from "./RequestCard";
import { PROCESSING_METHOD, MATERIAL } from "../constants";
import { IoMdRefresh } from "react-icons/io";

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
  isLoading: Boolean;
}

const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
  min-width: 100vh;
`;

const ContentContainer = styled.div`
  min-width: 100vh;
`;

const MiddleContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 32px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: baseline;
  }
`;

const SelectContainer = styled.div`
  display: flex;
`;

const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  right: 0px;
  @media screen and (max-width: 500px) {
    position: relative;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.div`
  margin-top: 40px;
  font-size: 20px;
  font-weight: 600;
`;

const Description = styled.div`
  margin-bottom: 32px;
  font-size: 16px;
`;

const FilterButton = styled.div`
  display: flex;
  align-items: center;
  color: var(--blue);
  cursor: pointer;
`;

const NoRequest = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1130px;
  height: 100px;
  box-sizing: border-box;
  border: solid 1px var(--grey);
  border-radius: 4px;
  color: var(--dark-grey);
`;

export default function Dashboard({ estimates, isLoading }: propsType) {
  const [methods, setMethods] = useState(new Set<string>());
  const [materials, setMaterials] = useState(new Set<string>());
  const [cards, setCards] = useState(estimates);
  const [isConsulting, setIsConsulting] = useState(false);
  const onClickToggle = () => {
    setIsConsulting(!isConsulting);
  }
  const onClickReset = () => {
    setMethods(new Set<string>());
    setMaterials(new Set<string>());
  };

  useEffect(() => {
    const copiedEstimates = isConsulting ? estimates?.filter(estimate => estimate.status === "?????????") : estimates;

    if (methods.size === 0 && materials.size === 0) {
      setCards(copiedEstimates);
      return;
    }

    setCards(copiedEstimates?.filter(estimate => {
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
  }, [methods, materials, isConsulting, estimates]);

  const showCards = () => {
    return cards?.map(card => {
      const { id } = card;
      return <RequestCard data={card} key={id} />
    });
  };

  return (
    <DashboardContainer>
      <ContentContainer>
        <Title>
          ????????? ??????
        </Title>
        <Description>
          ?????????????????? ??? ?????? ???????????? ???????????????.
        </Description>

        <MiddleContainer>
          <SelectContainer>
            <CheckList title={PROCESSING_METHOD.title} items={PROCESSING_METHOD.items} filters={methods} setFilters={setMethods} width={98} height={32} />
            <CheckList title={MATERIAL.title} items={MATERIAL.items} filters={materials} setFilters={setMaterials} width={76} height={32} />
            {(methods.size !== 0 || materials.size !== 0) && <FilterButton onClick={onClickReset}> <IoMdRefresh />????????? ??????</FilterButton>}
          </SelectContainer>
          <ButtonContainer>
            <ToggleButton handleClick={onClickToggle} /> <div>?????? ?????? ????????? ??????</div>
          </ButtonContainer>
        </MiddleContainer>
        {isLoading && <div>?????????</div>}
        {!isLoading && (cards?.length === 0 || cards === undefined) ? <NoRequest>????????? ?????? ?????? ????????? ????????????.</NoRequest> :
          <CardsContainer>
            {showCards()}
          </CardsContainer>
        }
      </ContentContainer>
    </DashboardContainer>
  );
}
