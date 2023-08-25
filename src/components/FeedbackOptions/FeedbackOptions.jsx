import {
  FeedbackOptionsWrapper,
  FeedbackOptionsButton,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsKeys = Object.keys(options);
  return (
    <>
      <FeedbackOptionsWrapper>
        <li>
          <FeedbackOptionsButton
            type="button"
            value={optionsKeys[0]}
            onClick={onLeaveFeedback}
          >
            Good
          </FeedbackOptionsButton>
        </li>
        <li>
          <FeedbackOptionsButton
            type="button"
            value={optionsKeys[1]}
            onClick={onLeaveFeedback}
          >
            Neutral
          </FeedbackOptionsButton>
        </li>
        <li>
          <FeedbackOptionsButton
            type="button"
            value={optionsKeys[2]}
            onClick={onLeaveFeedback}
          >
            Bad
          </FeedbackOptionsButton>
        </li>
      </FeedbackOptionsWrapper>
    </>
  );
};
