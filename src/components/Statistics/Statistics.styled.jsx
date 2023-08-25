import styled from 'styled-components';
import { getValue } from '../FeedbackOptions/FeedbackOptions.styled';

export const FeedbackStatisticsWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  margin: 0;
`;

export const FeedbackStatisticsItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  border-radius: 25px;
  background-color: #6377e9;
  background-color: ${getValue};
  color: ${props => {
    switch (props.value) {
      case 'good':
        return 'white';
      case 'neutral':
        return 'black';
      case 'bad':
        return 'white';
      default:
        return 'black';
    }
  }};
`;
