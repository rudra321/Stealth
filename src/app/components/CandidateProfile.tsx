"use client";
import { useEffect, useState } from "react";
import Image from 'next/image'; 
import styled from "styled-components";
import { fetchUserAssignmentScores } from "../../api";
import ig from "../../../public/ig1.png"

interface CandidateProfile {
  about_me: string;
  email: string;
  experience: string;
  full_name: string;
  hobbies: string;
  id: number;
  introduction: string;
  score: number;
  scores: {
    max_score: number;
    min_score: number;
    score_type: string;
    user_score: number;
  }[];
}

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  font-family: sans-serif;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.img`
  height: 70px;
  width: 70px;
  background-color: #333;
  border-radius: 20px;
  margin-right: 20px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
`;

const Email = styled.p`
  margin: 0;
  font-size: 14px;
  color: #a9a9a9;
`;

const Percentage = styled.div<{ score: number }>`
  font-size: 36px;
  font-weight: bold;
  color: ${(props) => (props.score > 50 ? "green" : "red")};
`;

const ScoresContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const SkillContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  position: relative; /* Added position relative */
`;

const SkillName = styled.span`
  font-size: 14px;
  font-weight: bold;
  width: 30%;
  font-family: sans-serif;
  color: #333;
`;

const ProgressBarContainer = styled.div`
  width: 300px;
  height: 10px;
  background-color: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
`;

const ProgressBar = styled.div<{ width: string; color: string }>`
  height: 100%;
  width: ${(props) => props.width};
  background-color: ${(props) => props.color};
  border-radius: 10px;
  text-align: right;
  position: relative;
`;

const SkillScore = styled.span<{ color: String }>`
  font-size: 14px;
  right: 5px;
  display: flex;
  font-family: sans-serif;
  align-items: center;
  font-weight: bold;
  color: ${(props) => (props.color)};
`;

const Details = styled.div``;
const H1 = styled.h1`
  margin-left: 20px;
  font-family: sans-serif;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 0;
`;
const P = styled.p`
  margin-top: 5px;
  margin-left: 20px;
  font-family: sans-serif;
  margin-bottom: 40px;
  font-size: 16px;
  color: #333;
`;
// ================
const Button = styled.button`
  background-color: #00c4cc;
  padding: 14px;
  border: none;
  border-radius: 15px;
  color: white;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: bold;
  width: 300px;
  margin-bottom: 20px;
`;

const MainContainer = styled.div`
  display: flex;
  width: 100%;
`;

const CandidateProfile = () => {
  const [assignment, setAssignment] = useState<CandidateProfile | null>(null);

  useEffect(() => {
    fetchUserAssignmentScores("30", "assignment123")
      .then((data) => setAssignment(data))
      .catch((error) =>
        console.error("Error fetching assignment details:", error)
      );
  }, []);

  return (
    <MainContainer>
      <div style={{ flex: 1 }}>
        <ProfileContainer>
          <Title>
            <ImageContainer />
            {assignment && (
              <InfoContainer>
                <Name>{assignment.full_name}</Name>
                <Email>{assignment.email}</Email>
              </InfoContainer>
            )}
          </Title>
          {assignment && (
            <Percentage score={assignment.score}>{assignment.score}%</Percentage>
          )}
        </ProfileContainer>
        <ScoresContainer>
          {assignment &&
            assignment.scores.map((skill, index) => (
              <SkillContainer key={index}>
                <SkillName>{skill.score_type}</SkillName>
                <ProgressBarContainer>
                  <ProgressBar
                    width={`${(skill.user_score / skill.max_score) * 100}%`}
                    color={skill.user_score < 7 ? "yellow" : "green"}
                  ></ProgressBar>
                </ProgressBarContainer>
                <SkillScore color={skill.user_score < 7 ? "yellow" : "green"}>
                  {skill.user_score} / 10
                </SkillScore>{" "}
              </SkillContainer>
            ))}
        </ScoresContainer>
        <Details>
          <H1>About</H1>
          <P>{assignment?.about_me}</P>
          <H1>Experience</H1>
          <P>{assignment?.experience}</P>
          <H1>Hobbies</H1>
          <P>{assignment?.hobbies}</P>
          <H1>Introduction</H1>
          <P>{assignment?.introduction}</P>
        </Details>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button>SHORTLIST</Button>
        </div>
      </div>
      <Image src={ig} alt="Image" style={{ height: "100%" }} />
    </MainContainer>
  );
};

export default CandidateProfile;
