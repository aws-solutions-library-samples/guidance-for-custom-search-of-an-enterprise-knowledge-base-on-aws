import {
  Badge,
  Box,
  ExpandableSection,
  Popover,
} from '@cloudscape-design/components';
import { readTimestamp } from 'src/utils';
import ChatIcon from './ChatIcon';
import { StyledAContainer, StyledQ } from './StyledChatComponents';
import TableSources from './TableSources';
import { useContext } from 'react';
import { StreamingContext } from '.';

const SessionChatsAI = ({
  isLast,
  content: {
    text,
    timestamp,
    scoreQueryAnswer,
    contentCheckLabel,
    contentCheckSuggestion,
    sourceData,
    answerTook,
  },
}) => {
  const { streamingText, streaming } = useContext(StreamingContext);
  return (
    <StyledAContainer $isRobot>
      <StyledQ>
        <div className="icon">
          <ChatIcon name="video-on" />
        </div>
        <div className="text">{streaming && isLast ? streamingText : text}</div>
        <div className="extra">
          {readTimestamp(timestamp)}
          <Box float="right">
            <div style={{ display: 'flex', gap: '8px' }}>
              {/* <Link href={link} target="blank" rel="noopener noreferrer">
                Link <Icon name="external" />
              </Link> */}
              {contentCheckLabel && (
                <Popover
                  dismissButton={false}
                  position="top"
                  content="Label of the content check"
                  triggerType="custom"
                >
                  <Badge color="red">{contentCheckLabel}</Badge>
                </Popover>
              )}
              {contentCheckSuggestion && (
                <Popover
                  dismissButton={false}
                  position="top"
                  content="Suggestion for the content"
                  triggerType="custom"
                >
                  <Badge color="grey">{contentCheckSuggestion}</Badge>
                </Popover>
              )}
              <Popover
                dismissButton={false}
                position="top"
                content="Query-Answer Score"
                triggerType="custom"
              >
                <Badge color="blue">
                  {Number(scoreQueryAnswer).toFixed(3)}
                </Badge>
              </Popover>
            </div>
            {Number(answerTook) ? (
              <div style={{ float: 'right' }}>
                <span style={{ display: 'block', padding: '8px 0' }}>
                  {`${Number(answerTook) / 1000} s`}
                </span>
              </div>
            ) : null}
          </Box>
        </div>
      </StyledQ>
      <div className="expandable">
        {!sourceData?.length ? null : (
          <ExpandableSection
            headerText="Display Sources"
            className="display-source"
          >
            <TableSources sourceData={sourceData} />
          </ExpandableSection>
        )}
      </div>
    </StyledAContainer>
  );
};

export default SessionChatsAI;
