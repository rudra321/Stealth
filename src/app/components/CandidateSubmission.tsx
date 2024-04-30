"use client";
import { useEffect, useState } from "react";
import { fetchAssignmentSubmissions } from "../../api";
import styled from "styled-components";
interface Submission {
  id: string;
  full_name: string;
  email: string;
  score: number;
}

const Container = styled.div`
  border: none;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: none;
  padding-left: 10px;
  padding-bottom: 20px;
  font-family: sans-serif;
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 15px;
  background-color: grey;
  margin-right: 10px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Align content vertically centered */
  height: 50px; /* Fixed height */
`;

const Name = styled.p`
  font-weight: bold;
  margin: 0;
`;

const Email = styled.p`
  color: grey;
  margin: 0;
`;

const Score = styled.div<{ score: number }>`
  font-weight: bold;
  font-family: sans-serif;
  font-size: 26px;
  color: ${(props) => (props.score > 50 ? "green" : "red")};
`;

const CandidateSubmission = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    fetchAssignmentSubmissions("review", 10, 0)
      .then((data) => setSubmissions(data))
      .catch((error) =>
        console.error("Error fetching candidate submissions:", error)
      );
  }, []);

  return (
    <Container>
      {submissions.map((submission) => (
        <Item key={submission.id}>
          <LeftContent>
            <Avatar />
            <Info>
              <Name>{submission.full_name}</Name>
              <Email>{submission.email}</Email>
            </Info>
          </LeftContent>
          <Score score={submission.score}>{submission.score} %</Score>
        </Item>
      ))}
    </Container>
  );
};

export default CandidateSubmission;
