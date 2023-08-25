import styled from 'styled-components';

export const getValue = props => {
  switch (props.value) {
    case 'good':
      return 'green';
    case 'neutral':
      return 'yellow';
    case 'bad':
      return 'red';
    default:
      console.log('Error');
  }
};

export const FeedbackOptionsWrapper = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  padding: 0;
  margin: 0;
`;

export const FeedbackOptionsButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
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
  border: none;
  padding: 5px 15px;
  border-radius: 15px;
  cursor: pointer;
`;
