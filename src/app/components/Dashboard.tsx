"use client";
import styled from "styled-components";
import { FaHome, FaDice } from "react-icons/fa";

const ComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  background: #00c4cc;
  border-radius: 20px;
  padding: 15px;
  color: white;
  width: 200px;
  height: 160px;
  margin-top: 15px;
`;

const Titleh1 = styled.h1`
  font-size: 14px;
  margin-bottom: 1px;
  font-family: sans-serif;
`;

const Subtitle = styled.p`
  font-size: 13px;
  font-family: sans-serif;
`;

const CreateButton = styled.button`
  background-color: white;
  color: #333;
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const Button1 = styled.button`
  width: 30px;
  height: 30px;
  background: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  margin-bottom: 10px;
`;

const Container1 = styled.div`
  display: flex;
  width: 100px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-left: 35px;
  margin-top: 20px;
`;

const Title2 = styled.h1`
  font-size: 12px;
  font-family: sans-serif;
`;

const HomeIcon = styled(FaHome)`
  color: #00c4cc;
  font-size: 16px;
  cursor: pointer;
`;

const BreakLine = styled.div`
  background: linear-gradient(
    to right,
    rgba(100, 100, 100, 0.1),
    rgba(100, 100, 100, 0.5),
    rgba(100, 100, 100, 0.1)
  );
  width: 12rem;
  height: 1px;
  margin-left: 40px;
`;

const HouseContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  margin-left: 35px;
`;

const Title3 = styled.div`
  font-size: 14px;
  font-family: sans-serif;
  font-weight: bold;
`;

const CompIcon = styled(FaDice)`
  color: #00c4cc;
  font-size: 16px;
`;

export const Dashboard = () => {
  return (
    <>
      <Container1 style={{ marginBottom: "20px" }}>
        <CompIcon />
        <Title2>Hi, AltWorld</Title2>
      </Container1>

      <BreakLine />
      
      <Container1>
        <HomeIcon />
        <Title2>Dashboard</Title2>
      </Container1>

      <ComponentContainer>
        <Button1>+</Button1>
        <Titleh1>New Assignment?</Titleh1>
        <Subtitle>
          Select from pre-defined questions to have a quick turnaround.
        </Subtitle>
        <CreateButton>Create New Assignment</CreateButton>
      </ComponentContainer>
    </>
  );
};
