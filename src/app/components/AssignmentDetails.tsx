"use client";
import { useEffect, useState } from "react";
import { fetchAssignmentDetails } from "../../api";
import styled from "styled-components";
import { FaCube, FaCopy, FaPen } from "react-icons/fa";

interface Assignment {
  id: string;
  title: string;
  duration_in_seconds: number;
  ends_at: number;
  link: string;
  status: string;
}

const CardContainer = styled.div`
  background: #fff;
  padding: 16px;
  margin: 16px;
`;

const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
  color: #4caf50;
  margin-bottom: 8px;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 18px;
`;

const AssignmentInfo = styled.div`
  margin-bottom: 16px;
`;

const ButtonGroup2 = styled.div`
  display: flex;
`;
const Button3 = styled.button`
  border: none;
  border-radius: 14px;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  background-color: #fff;
  color: #333;
  font-size:12px;

  &.review {
    margin-right: 8px;
    padding: 12px 36px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  }

  &.shortlisted {
    padding: 12px 36px;
    margin-left: 2px;
    background-color: #fff;
    color: #000;
  }
  &.check{
    margin-left: 8px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  }
`;

const LinkWrapper = styled.div`
  flex: 1;
`;

const P1 = styled.p`
  font-family: sans-serif;
  font-size:14px;
  display:flex;
  color: #333;
  font-weight: 600;
  justify-content:space-between;
`;
const StyledLink = styled.a`
  text-decoration: none; 
`;


const AssignmentDetails = () => {
  const [assignment, setAssignment] = useState<Assignment | null>(null);

  useEffect(() => {
    fetchAssignmentDetails()
      .then((data) => setAssignment(data))
      .catch((error) =>
        console.error("Error fetching assignment details:", error)
      );
  }, []);
  const formatEndDate = (endDate: number) => {
    const date = new Date(endDate);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return `${day} ${monthNames[monthIndex]} ${year}`;
  };
  

  if (!assignment) {
    return <div>Loading assignment details...</div>;
  }

  return (
    <CardContainer>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 style={{ fontFamily: "sans-serif", fontSize:'17px' }}>{assignment.title}</h2>
        <StatusIndicator>
          Active
          <Button3 className="check">
            <FaPen />
          </Button3>
        </StatusIndicator>
      </div>
      <AssignmentInfo>
        <LinkWrapper>
          <P1>
            Assignment Link{" "}
            <StyledLink
              href={assignment.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {assignment.link}
            </StyledLink>
          </P1>
        </LinkWrapper>
        <P1>Assignment Hour {" "}
            <div>{assignment.duration_in_seconds / 3600} hours</div>
        </P1>
      </AssignmentInfo>
      <P1>Assignment Ends at {" "}
        <div>{formatEndDate(assignment.ends_at)}</div>
      </P1>
      <ButtonGroup2>
        <Button3 className="review">
          <FaCube style={{padding: '5px'}}/> TO REVIEW
        </Button3>
        <Button3 className="shortlisted">
          <FaCopy style={{padding: '5px'}}/> SHORTLISTED
        </Button3>
      </ButtonGroup2>
    </CardContainer>
  );
};

export default AssignmentDetails;
