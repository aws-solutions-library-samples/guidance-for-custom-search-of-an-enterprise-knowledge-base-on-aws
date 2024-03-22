import {
  Box,
  Cards,
  Container,
  SpaceBetween,
  Link,
  ContentLayout,
  Header,
} from '@cloudscape-design/components';
import { styled } from 'styled-components';
import architecture from '../assets/architecture.jpg';
import AppConfigs from './AppConfigs';

const desc = (
  <Box variant="div">
    <p>
      This Guidance demonstrates how to build an application for search based on
      the information in an enterprise knowledge base through the deployment of
      interface nodes, including large language models (LLMs). You can combine
      services to give answers to questions based on your enterprise knowledge
      base with a search engine that provides word segmentation search, fuzzy
      queries, and artificial intelligence (AI) assisted capabilities. This
      Guidance also includes methods such as manual labeling, unsupervised
      clustering, supervised classification, and an LLM to extract guide words.
      Deploying this Guidance can help you automatically split documents into
      paragraphs with embedded vectors to further establish a structured
      enterprise knowledge base.
    </p>
  </Box>
);

const Landing = ({ withConfigs = true }) => {
  return (
    <ContentLayout
      header={
        <Header
          variant="h1"
          description={desc}
          info={
            <Link
              target="_blank"
              href="https://aws.amazon.com/cn/solutions/guidance/custom-search-of-an-enterprise-knowledge-base-on-aws/?did=sl_card&trk=sl_card"
            >
              Info
            </Link>
          }
          // actions={<Button variant="primary">Button</Button>}
        >
          Guidance for Custom Search of an Enterprise Knowledge Base on AWS
        </Header>
      }
    >
      <Cards
        cardDefinition={{
          header: (item) => (
            <Link target="_blank" href={item.href} fontSize="heading-m">
              {item.name}
            </Link>
          ),
          sections: [
            {
              id: 'description',
              header: 'Description',
              content: (item) => item.description,
            },
          ],
        }}
        cardsPerRow={[{ cards: 1 }, { minWidth: 500, cards: 2 }]}
        items={[
          {
            name: '《基于智能搜索和大模型打造企业下一代知识库》系列博客',
            href: 'https://aws.amazon.com/cn/blogs/china/intelligent-search-based-enhancement-solutions-for-llm-part-one/',
            description:
              '全系列分为五篇，将为大家系统性地介绍新技术例如大语言模型如何赋能传统知识库场景，助力行业客户降本增效。内容包括：\n第一篇《典型实用场景及核心组件介绍》;\n第二篇《手把手快速部署指南》;\n第三篇《Langchain 集成及其在电商的应用》;\n第四篇《制造/金融/教育/医疗行业实战场景》;\n第五篇《与 Amazon Kendra 集成》',
          },
          {
            name: 'Solution Guidance',
            href: 'https://aws.amazon.com/cn/solutions/guidance/custom-search-of-an-enterprise-knowledge-base-on-aws/?did=sl_card&trk=sl_card',
            description:
              'This Guidance demonstrates how to build an application for search based on the information in an enterprise knowledge base through the deployment of interface nodes, including large language models (LLMs). You can combine services to give answers to questions based on your enterprise knowledge base with a search engine that provides word segmentation search, fuzzy queries, and artificial intelligence (AI) assisted capabilities...',
          },
        ]}
        visibleSections={['description', 'type', 'size']}
      />
      <SpaceBetween size="l">
        <Container
          header={
            <Header
              info={
                <Link
                  target="_blank"
                  href="https://aws.amazon.com/cn/solutions/guidance/custom-search-of-an-enterprise-knowledge-base-on-aws/?did=sl_card&trk=sl_card"
                >
                  info
                </Link>
              }
            >
              Architecture Diagram
            </Header>
          }
        >
          <StyledImg src={architecture} alt="" />
        </Container>
        {withConfigs && <AppConfigs />}
      </SpaceBetween>
    </ContentLayout>
  );
};

export default Landing;

const StyledImg = styled.img`
  height: auto;
  width: 100%;
  border-radius: 10px;
`;
