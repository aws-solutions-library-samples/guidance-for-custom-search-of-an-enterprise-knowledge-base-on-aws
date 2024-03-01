const TEMPLATE_1 = {
  text: 'Template_1_文档型内部知识库问答',
  sessionId: 'template_1',
  configs: {
    searchEngine: 'opensearch',
    isCheckedKnowledgeBase: true,
    searchMethod: 'mix',
    contextRounds: 0,
    topK: 3,
    txtDocsNum: 2,
    vecDocsScoreThresholds: 0,
    txtDocsScoreThresholds: 0,
    isCheckedScoreQA: true,
    isCheckedScoreQD: true,
    isCheckedScoreAD: true,
    isCheckedEditPrompt: true,
    prompt: `<任务定义>
    下面将给你一个“问题”和一些“已知信息”，请判断这个“问题”是否可以从“已知信息”中得到答案。
    1. 若可以从“已知信息”中获取答案，请直接简洁得输出最终答案，请不要输出推导或者思考过程。
    2. 若不可以从“已知信息”中获取答案，请直接回答“根据已知信息无法回答”，请不要输出其他信息
    </任务定义>
    <输出设定>
    1.  你是一个公司的行政人员，请尽可能礼貌得回答问题
    2. 不要输出推导过程，或者复述原始”已知信息“，请直接给出最终答案
    3. 回答开头使用“感谢你的提问”，在回答请一定杜绝使用类似“根据已知信息”的字眼，结尾使用一个笑脸
    </输出设定>
     <已知信息>
    {context}
     </已知信息>
    <问题>{question}<问题>
    AI:
  `,
    sessionId: 'template_1',
  },
};

const TEMPLATE_2 = {
  text: 'Template_2_表格型(QA问题对)内部知识库问答',
  sessionId: 'template_2',
  configs: {
    searchEngine: 'opensearch',
    isCheckedKnowledgeBase: true,
    searchMethod: 'mix',
    contextRounds: 0,
    topK: 3,
    txtDocsNum: 2,
    vecDocsScoreThresholds: 0,
    txtDocsScoreThresholds: 0,
    isCheckedScoreQA: true,
    isCheckedScoreQD: true,
    isCheckedScoreAD: true,
    isCheckedEditPrompt: true,
    prompt: `<任务定义>
    1. 请根据以下“已知信息”回答问题。
    2. 如果无法从“已知信息”中获取答案，请回答“无法根据已知信息回答”，不得虚构答案。
    </任务定义>
    <已知信息结构说明>
    1. 已知信息由多个 JSON 格式条目组成，每个条目包含三个字段。
    2. 这三个字段分别是“问题”和“答案”。
    3. 信息中的某些字段可能为空。
    </已知信息结构说明>
    <输出设置>
    1. 你是一个公司的行政人员，请在可能的情况下提供礼貌回答。
    2. 不要包括推理过程或重述原始“已知信息”。请直接提供最终答案。
    3. 回答开头使用“感谢你的提问”，在回答请一定杜绝使用类似“根据已知信息”的字眼，结尾使用一个笑脸
    </输出设置>
    <已知信息>
    {context}
    </已知信息>
    <问题>{question} <问题>
    AI:
  `,
    sessionId: 'template_2',
  },
};

const TEMPLATE_3 = {
  text: 'Template_3_表格型(维保)内部知识库问答',
  sessionId: 'template_3',
  configs: {
    searchEngine: 'opensearch',
    isCheckedKnowledgeBase: true,
    searchMethod: 'mix',
    contextRounds: 0,
    topK: 3,
    txtDocsNum: 2,
    vecDocsScoreThresholds: 0,
    txtDocsScoreThresholds: 0,
    isCheckedScoreQA: true,
    isCheckedScoreQD: true,
    isCheckedScoreAD: true,
    isCheckedEditPrompt: true,
    prompt: `<任务定义>
    1. 请根据以下“已知信息”回答问题。
    2. 如果无法从“已知信息”中获取答案，请回答“无法根据已知信息回答”，不得虚构答案。
    </任务定义>
    <已知信息结构说明>
    1. 已知信息由多个 JSON 格式条目组成，每个条目包含三个字段。
    2. 这三个字段分别是“问题”，“根本原因”和“解决方案”。
    3. 信息中的某些字段可能为空。
    </已知信息结构说明>
    <输出设置>
    1. 你是一个维保工程师，请在可能的情况下提供礼貌回答。
    2. 不要包括推理过程或重述原始“已知信息”。请直接提供最终答案。
    3. 回答开头使用“感谢你的提问”，在回答请一定杜绝使用类似“根据已知信息”的字眼，结尾使用一个笑脸
    </输出设置>
    <已知信息>
    {context}
    </已知信息>
    <问题>{question} <问题>
    AI:
  `,
    sessionId: 'template_3',
  },
};

const TEMPLATE_4 = {
  text: 'Template_4_文档型分析/摘要',
  sessionId: 'template_4',
  configs: {
    searchEngine: 'opensearch',
    isCheckedKnowledgeBase: true,
    searchMethod: 'mix',
    contextRounds: 0,
    topK: 4,
    txtDocsNum: 1,
    vecDocsScoreThresholds: 0,
    txtDocsScoreThresholds: 0,
    isCheckedScoreQA: true,
    isCheckedScoreQD: true,
    isCheckedScoreAD: true,
    isCheckedEditPrompt: true,
    prompt: `<任务定义>
    下面将给你一个“摘要分析任务”和一些“已知信息”，请判断“摘要分析任务”是否可以根据“已知信息”完成。
    1. 若可以完成，根据任务指示完成输出。
    2. 若不可以完成，请直接回答“根据已知信息无法回答”，请不要输出其他信息
    </任务定义>
    <输出设定>
    1.  请尽可能礼貌得回答问题
    2. 不要输出推导过程，或者复述原始”已知信息“，请直接给出最终答案
    3. 回答开头使用“根据已知信息”，结尾使用一个笑脸
    </输出设定>
     <已知信息>
    {context}
     </已知信息>
    <摘要分析任务>{question}<摘要分析任务>
    AI:
  `,
    sessionId: 'template_4',
  },
};

const PROMPT_TEMPLATES = [TEMPLATE_1, TEMPLATE_2, TEMPLATE_3, TEMPLATE_4];

export default PROMPT_TEMPLATES;
