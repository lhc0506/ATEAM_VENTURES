import React from "react";
import styled from "styled-components";

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
  data: IResponse;
};

const CardContainer = styled.div`
  position: relative;
  width: 366px;
  height: 356px;
  box-sizing: border-box;
  margin-right: 16px;
  margin-bottom: 16px;
  padding: 24px 16px;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
`;

const Title = styled.div`
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: bold;
`;

const Client = styled.div`
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: 500;
`;

const Due = styled.div`
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 400;
  color: var(--dark-grey);
`;

const Line = styled.div`
  width: 100%;
  margin-bottom: 32px;
  border-bottom: 1px solid var(--soft-grey);
  text-align: center;
`;

const ContentKey = styled.div`
  display: inline-block;
  width: 70px;
  height: 20px;
  margin-right: 32px;
  margin-bottom: 8px;
`;

const ContentValue = styled.div`
  display: inline-block;
  height: 20px;
  font-weight: bolder;
`;

const StatusBox = styled.div`
  display: grid;
  position: absolute;
  align-items: center;
  top: 24px;
  right: 16px;
  width: 50px;
  height: 24px;
  border-radius: 12px;
  border: 1px solid var(--orange);
  font-size: 12px;
  text-align: center;
  color: var(--orange);
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 32px;
`;

const DetailButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 108px;
  height: 32px;
  margin-right: 8px;
  border-radius: 4px;
  background-color: var(--blue);
  font-weight: 500;
  text-align: center;
  color: var(--white);
`;

const ChatButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 32px;
  border-radius: 4px;
  border: solid 1px var(--blue);
  background-color: var(--white);
  color: var(--blue);
  text-align: center;
  font-weight: 500;
`;

export default function RequestCard({ data }: propsType) {
  const { title, client, due, count, amount, method, material, status } = data;

  return (
    <>
      <CardContainer>
        <Title>
          {title}
        </Title>
        <Client>
          {client}
        </Client>
        <Due>
          {due}
        </Due>
        <Line />
        <div>
          <ContentKey>도면개수</ContentKey>
          <ContentValue>{count}개</ContentValue>
        </div>
        <div>
          <ContentKey>총 수량</ContentKey>
          <ContentValue>{amount}개</ContentValue>
        </div>
        <div>
          <ContentKey>가공방식</ContentKey>
          <ContentValue>{method.join(", ")}</ContentValue>
        </div>
        <div>
          <ContentKey>재료</ContentKey>
          <ContentValue>{material.join(", ")}</ContentValue>
        </div>
        <ButtonContainer>
          <DetailButton>요청 내역 보기</DetailButton>
          <ChatButton>채팅하기</ChatButton>
        </ButtonContainer>
        {status === "상담중" &&
          <StatusBox>
            {status}
          </StatusBox>
        }
      </CardContainer>
    </>
  );
}
