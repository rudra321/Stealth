
import axios from 'axios';

const BASE_URL = 'https://qyzlgjq37b.execute-api.ap-south-1.amazonaws.com/dev';

export const fetchAssignmentDetails = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/assignment_details`);
    return response.data;
  } catch (error) {
    console.error('Error fetching assignment details:', error);
    throw error;
  }
};

export const fetchAssignmentSubmissions = async (status: string, limit: number, offset: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/assignment_candidates`, {
      params: {
        status,
        limit,
        offset,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching assignment submissions:', error);
    throw error;
  }
};

export const fetchUserAssignmentScores = async (userId: string, assignmentId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/candidate_assignment_data`, {
      params: {
        user_id: userId,
        assignment_id: assignmentId,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user assignment scores:', error);
    throw error;
  }
};
