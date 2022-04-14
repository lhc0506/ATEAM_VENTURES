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
  box-sizing: border-box;
  width: 366px;
  height: 356px;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  margin-right: 16px;
  margin-bottom: 16px;
  padding: 24px 16px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Client = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 24px;
`;

const Due = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: var(--dark-grey);
  margin-bottom: 16px;
`;

const Line = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid var(--soft-grey);
  margin-bottom: 32px;
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
  position: absolute;
  display: grid;
  width: 50px;
  height: 24px;
  border-radius: 12px;
  border: 1px solid var(--orange);
  top: 24px;
  right: 16px;
  color: var(--orange);
  text-align: center;
  align-items: center;
  font-size: 12px;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 32px;
`;

const DetailButton = styled.div`
  display: flex;
  width: 108px;
  height: 32px;
  margin-right: 8px;
  background-color: var(--blue);
  color: var(--white);
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: 500;
`;

const ChatButton = styled.div`
  display: flex;
  width: 76px;
  height: 32px;
  background-color: var(--white);
  color: var(--blue);
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: solid 1px var(--blue);
  font-weight: 500;
`;

// export default function RequestCard({ id, title, client, due, count, amount, method, material, status }: IResponse) {
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
