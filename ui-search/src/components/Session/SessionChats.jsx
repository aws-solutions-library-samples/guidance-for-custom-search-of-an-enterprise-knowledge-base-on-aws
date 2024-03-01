import { Box, Container, SpaceBetween } from '@cloudscape-design/components';
import { readTimestamp } from 'src/utils';
import StateLoading from '../StateLoading';
import ChatIcon from './ChatIcon';
import SessionChatsAI from './SessionChatsAI';
import { StyledQ } from './StyledChatComponents';

const SessionChats = ({ conversations }) => {
  if (!conversations)
    return <StateLoading headerText="Loading conversations..." />;

  return (
    <Container>
      <SpaceBetween size="l">
        {conversations.length === 0 ? (
          <ConversationPlaceholder />
        ) : (
          conversations.map(({ type, content }, i) =>
            type === 'customer' ? (
              // customer search query record
              <StyledQ key={i}>
                <div className="icon">
                  <ChatIcon />
                </div>
                <div className="text">{content.text}</div>
                <div className="extra">{readTimestamp(content.timestamp)}</div>
              </StyledQ>
            ) : (
              // robot response record
              <SessionChatsAI content={content} key={i} />
            )
          )
        )}
      </SpaceBetween>
    </Container>
  );
};

export default SessionChats;

function ConversationPlaceholder() {
  return <Box></Box>;
}
