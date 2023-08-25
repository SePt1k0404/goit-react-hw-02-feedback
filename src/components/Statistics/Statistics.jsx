import {
  FeedbackStatisticsWrapper,
  FeedbackStatisticsItem,
} from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <FeedbackStatisticsWrapper>
        <FeedbackStatisticsItem value="good">
          <p>Good: {good}</p>
        </FeedbackStatisticsItem>
        <FeedbackStatisticsItem value="neutral">
          <p>Neutral: {neutral}</p>
        </FeedbackStatisticsItem>
        <FeedbackStatisticsItem value="bad">
          <p>Bad: {bad}</p>
        </FeedbackStatisticsItem>
        <FeedbackStatisticsItem>
          <p>Total: {total}</p>
        </FeedbackStatisticsItem>
        <FeedbackStatisticsItem>
          <p>
            Positive feedback:{' '}
            {!good ? 0 : ((good / positivePercentage) * 100).toFixed(0)}%
          </p>
        </FeedbackStatisticsItem>
      </FeedbackStatisticsWrapper>
    </>
  );
};
