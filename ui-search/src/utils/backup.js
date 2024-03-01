const backup_convo = [
  {
    type: 'link',
    href: '/session/1709123911490-77242',
    text: 'test22',
    sessionId: '1709123911490-77242',
    configs: {
      name: 'test22',
      searchEngine: 'opensearch',
      llmData: {
        strategyName: 'test1',
        type: 'sagemaker_endpoint',
        embeddingEndpoint: 'huggingface-inference-eb',
        modelType: 'non_llama2',
        recordId: 'pytorch-inference-llm-v1-65624',
        sagemakerEndpoint: 'pytorch-inference-llm-v1',
        streaming: true,
      },
      role: '',
      language: 'chinese',
      taskDefinition: '',
      outputFormat: '',
      isCheckedGenerateReport: false,
      isCheckedContext: false,
      isCheckedKnowledgeBase: true,
      indexName: 'smart_search_qa_test',
      topK: 3,
      searchMethod: 'text',
      txtDocsNum: '3',
      vecDocsScoreThresholds: 0,
      txtDocsScoreThresholds: 0,
      isCheckedScoreQA: true,
      isCheckedScoreQD: true,
      isCheckedScoreAD: true,
      contextRounds: 3,
      isCheckedEditPrompt: false,
      prompt: '',
      tokenContentCheck: '',
      responseIfNoDocsFound: 'Cannot find the answer',
      sessionId: '1709123911490-77242',
    },
    conversations: [
      {
        type: 'customer',
        content: {
          text: '今天天气？',
          timestamp: 1709123917292,
        },
      },
      {
        type: 'robot',
        content: {
          message: 'streaming_end',
          timestamp: 1709123941695.3013,
          sourceData: [
            {
              id: 0,
              title: '亚马逊云计算服务(1).docx',
              titleLink: 'http://#',
              paragraph:
                '[24]行业领导者（2016年至今）[编辑]2016年第一季度，亚马逊云计算服务营收为25.7亿美元，净收入为6.04亿美元，与2015年第一季度同比增长64%，这使得AWS盈利首次超过亚马逊北美零售服务。,[25]贾西因此被提拔为该部门的首席执行官。,[26]在同一时期，亚马逊的股票价值因营收增长上涨42%，AWS在营收贡献中占比56%。',
              sentence:
                '[24]\n\n行业领导者（2016年至今）[编辑]\n\n2016年第一季度，亚马逊云计算服务营收为25.7亿美元，净收入为6.04亿美元，与2015年第一季度同比增长64%，这使得AWS盈利首次超过亚马逊北美零售服务。',
              scoreQueryDoc: 0.135,
              scoreAnswerDoc: 0.764,
            },
            {
              id: 1,
              title: '亚马逊云计算服务(1).docx',
              titleLink: 'http://#',
              paragraph:
                '[23]为了支持全行业培训和技能标准化，亚马逊云计算服务自2013年4月30日起开始为计算机工程师提供培训项目，以提升在云计算上的专业能力。,[24]行业领导者（2016年至今）[编辑]2016年第一季度，亚马逊云计算服务营收为25.7亿美元，净收入为6.04亿美元，与2015年第一季度同比增长64%，这使得AWS盈利首次超过亚马逊北美零售服务。,[25]贾西因此被提拔为该部门的首席执行官。',
              sentence:
                '[23]\n\n为了支持全行业培训和技能标准化，亚马逊云计算服务自2013年4月30日起开始为计算机工程师提供培训项目，以提升在云计算上的专业能力。',
              scoreQueryDoc: 0.127,
              scoreAnswerDoc: 0.494,
            },
            {
              id: 2,
              title: '亚马逊云计算服务(1).docx',
              titleLink: 'http://#',
              paragraph:
                '[21]2012年11月27日，亚马逊云计算服务举办了首次年度“re:Invent”峰会，会议着重于AWS合作伙伴和生态系统议题，[22]由超过150场活动组成。,[23]为了支持全行业培训和技能标准化，亚马逊云计算服务自2013年4月30日起开始为计算机工程师提供培训项目，以提升在云计算上的专业能力。,[24]行业领导者（2016年至今）[编辑]2016年第一季度，亚马逊云计算服务营收为25.7亿美元，净收入为6.04亿美元，与2015年第一季度同比增长64%，这使得AWS盈利首次超过亚马逊北美零售服务。',
              sentence:
                '[21]\n\n2012年11月27日，亚马逊云计算服务举办了首次年度“re:Invent”峰会，会议着重于AWS合作伙伴和生态系统议题，[22]由超过150场活动组成。',
              scoreQueryDoc: 0.114,
              scoreAnswerDoc: 0.462,
            },
          ],
          text: '根据已知信息，亚马逊云计算服务（AWS）在2016年第一季度的营收为25.7亿美元，净利润为6.04亿美元，同比增长64%。AWS的盈利首次超过亚马逊在北美的零售服务。因此，贾西被提拔为该部门的首席执行官方。在同一时期，的股价价值因收入增长上涨42%，而AWS在收入贡献中占比达到56%。来源于2016年至现在的行业领导者编辑。',
          scoreQueryAnswer: '0.181',
          contentCheckLabel: 'Pass',
          contentCheckSuggestion: 'Pass',
          answerTook: 24571,
        },
      },
    ],
  },
  {
    type: 'link',
    href: '/session/1709123978019-95941',
    text: 'test33',
    sessionId: '1709123978019-95941',
    configs: {
      name: 'test33',
      searchEngine: 'opensearch',
      llmData: {
        strategyName: 'test1',
        type: 'sagemaker_endpoint',
        embeddingEndpoint: 'huggingface-inference-eb',
        modelType: 'non_llama2',
        recordId: 'pytorch-inference-llm-v1-65624',
        sagemakerEndpoint: 'pytorch-inference-llm-v1',
        streaming: true,
      },
      role: '',
      language: 'chinese',
      taskDefinition: '',
      outputFormat: '',
      isCheckedGenerateReport: false,
      isCheckedContext: false,
      isCheckedKnowledgeBase: true,
      indexName: 'smart_search_qa_test',
      topK: '0.5',
      searchMethod: 'vector',
      txtDocsNum: '3',
      vecDocsScoreThresholds: 0,
      txtDocsScoreThresholds: 0,
      isCheckedScoreQA: true,
      isCheckedScoreQD: true,
      isCheckedScoreAD: true,
      contextRounds: 3,
      isCheckedEditPrompt: false,
      prompt: '',
      tokenContentCheck: '',
      responseIfNoDocsFound: 'Cannot find the answer',
      sessionId: '1709123978019-95941',
    },
    conversations: [
      {
        type: 'customer',
        content: {
          text: '今天天气',
          timestamp: 1709123985049,
        },
      },
      {
        type: 'robot',
        content: {
          timestamp: 1709123986840.8782,
          text: "invalid literal for int() with base 10: '0.5'",
          errorMessage: "invalid literal for int() with base 10: '0.5'",
          sourceData: [],
          message: 'error',
          contentCheckLabel: 'Pass',
          contentCheckSuggestion: 'Pass',
          answerTook: 1997,
        },
      },
    ],
  },
  {
    type: 'link',
    href: '/session/1709124140255-05425',
    text: 'vector search 1',
    sessionId: '1709124140255-05425',
    configs: {
      name: 'vector search 1',
      searchEngine: 'opensearch',
      llmData: {
        strategyName: 'test1',
        type: 'sagemaker_endpoint',
        embeddingEndpoint: 'huggingface-inference-eb',
        modelType: 'non_llama2',
        recordId: 'pytorch-inference-llm-v1-65624',
        sagemakerEndpoint: 'pytorch-inference-llm-v1',
        streaming: true,
      },
      role: '',
      language: 'chinese',
      taskDefinition: '',
      outputFormat: '',
      isCheckedGenerateReport: false,
      isCheckedContext: false,
      isCheckedKnowledgeBase: true,
      indexName: 'smart_search_qa_test',
      topK: '3',
      searchMethod: 'vector',
      txtDocsNum: '0',
      vecDocsScoreThresholds: '0.5',
      txtDocsScoreThresholds: 0,
      isCheckedScoreQA: true,
      isCheckedScoreQD: true,
      isCheckedScoreAD: true,
      contextRounds: 3,
      isCheckedEditPrompt: true,
      prompt: '',
      tokenContentCheck: '',
      responseIfNoDocsFound: 'Cannot find the answer',
      sessionId: '1709124140255-05425',
    },
    conversations: [
      {
        type: 'customer',
        content: {
          text: '天气如何？',
          timestamp: 1709124145285,
        },
      },
      {
        type: 'robot',
        content: {
          message: 'streaming_end',
          timestamp: 1709124150128.0488,
          sourceData: [],
          text: 'Cannot find the answer',
          scoreQueryAnswer: '0.33',
          contentCheckLabel: 'Pass',
          contentCheckSuggestion: 'Pass',
          answerTook: 5035,
        },
      },
      {
        type: 'customer',
        content: {
          text: 'aws怎么收费？',
          timestamp: 1709124163054,
        },
      },
      {
        type: 'robot',
        content: {
          message: 'streaming_end',
          timestamp: 1709124187341.6387,
          sourceData: [
            {
              id: 0,
              title: '亚马逊云计算服务(1).docx',
              titleLink: 'http://#',
              paragraph:
                'AWS中国大陆的北京和宁夏两个区域相互独立运营，服务费用亦不相同。,[33]网站类型\t子公司代表人物\t•\t亚当·塞利普斯基（Adam Selipsky，首席执行官）[1]•\t斯蒂芬·施密特（Stephen Schmidt，首席信息安全官）•\t马特·加尔曼（Matt Garman）•\t彼得·德桑蒂斯（Peter DeSantis）•\t巴比克·帕尔维茨（Babik Parvez）•\t詹姆斯·汉密尔顿（James Hamilton）•\t[2]营业额▲ $622亿美元（2021年）[3]息税前利润▲ $185亿美元（2021年）[4]母公司亚马逊公司子公司\t•\tAnnapurna Labs•\tAWS Elemental•\tNICE Software[5]•\tWickr网址\taws.amazon.com推出时间\t•\tWeb服务：2002年7月，21年前[6]•\t云计算：2006年3月，17年前[7]现状\t运营中',
              sentence:
                'AWS中国大陆的北京和宁夏两个区域相互独立运营，服务费用亦不相同。',
              scoreQueryDoc: 0.522,
              scoreAnswerDoc: 0.702,
            },
            {
              id: 1,
              title: '亚马逊云计算服务(1).docx',
              titleLink: 'http://#',
              paragraph:
                '[26]在同一时期，亚马逊的股票价值因营收增长上涨42%，AWS在营收贡献中占比56%。,[27]2021年3月，贾西升任亚马逊总公司的首席执行官，时任Tableau首席执行官的亚当·塞利普斯基被任命为云计算部门的新首席执行官。,[28]根据高德纳咨询公司2021年度云基础设施和平台服务的评估报告，亚马逊云计算、微软Azure、Google云端平台被列为该行业的“领导者”。',
              sentence:
                '[26]在同一时期，亚马逊的股票价值因营收增长上涨42%，AWS在营收贡献中占比56%。',
              scoreQueryDoc: 0.513,
              scoreAnswerDoc: 0.566,
            },
            {
              id: 2,
              title: '亚马逊云计算服务(1).docx',
              titleLink: 'http://#',
              paragraph:
                '亚马逊云计算服务（英语：Amazon Web Services，缩写：AWS）是亚马逊公司旗下的子公司，向个人、企业和政府提供按需即用云计算平台以及应用程序接口，并按照使用量计费。,这些云计算Web服务通过亚马逊网络服务的服务器集群提供分布式计算处理能力和软件工具。,这其中的一项服务是亚马逊弹性云计算（EC2），该服务通过互联网为用户提供实时在线的虚拟化计算机集群。',
              sentence:
                '亚马逊云计算服务（英语：Amazon Web Services，缩写：AWS）是亚马逊公司旗下的子公司，向个人、企业和政府提供按需即用云计算平台以及应用程序接口，并按照使用量计费。',
              scoreQueryDoc: 0.509,
              scoreAnswerDoc: 0.903,
            },
          ],
          text: '根据已知信息，亚马逊云计算服务（AWS）是亚马逊公司旗下的子公司，向个人、企业和政府提供按需即用的云计算平台以及应用程序接口，并按照使用量计费。其中一项服务是亚马逊弹性云计算（EC2），该服务通过互联网为用户提供实时在线的虚拟化集群。AWS在全球范围内有多个区域，包括中国大陆的北京和宁夏两个区域，这两个区域的运营和服务费用是不同的。要查询AWS的收费标准，可以访问其官方网站查看具体的信息。',
          scoreQueryAnswer: '0.673',
          contentCheckLabel: 'Pass',
          contentCheckSuggestion: 'Pass',
          answerTook: 24424,
        },
      },
      {
        type: 'customer',
        content: {
          text: 'aws有多少种服务？',
          timestamp: 1709124224298,
        },
      },
      {
        type: 'robot',
        content: {
          message: 'streaming_end',
          timestamp: 1709124244128.3914,
          sourceData: [
            {
              id: 0,
              title: '亚马逊云计算服务(1).docx',
              titleLink: 'http://#',
              paragraph:
                'AWS中国大陆的北京和宁夏两个区域相互独立运营，服务费用亦不相同。,[33]网站类型\t子公司代表人物\t•\t亚当·塞利普斯基（Adam Selipsky，首席执行官）[1]•\t斯蒂芬·施密特（Stephen Schmidt，首席信息安全官）•\t马特·加尔曼（Matt Garman）•\t彼得·德桑蒂斯（Peter DeSantis）•\t巴比克·帕尔维茨（Babik Parvez）•\t詹姆斯·汉密尔顿（James Hamilton）•\t[2]营业额▲ $622亿美元（2021年）[3]息税前利润▲ $185亿美元（2021年）[4]母公司亚马逊公司子公司\t•\tAnnapurna Labs•\tAWS Elemental•\tNICE Software[5]•\tWickr网址\taws.amazon.com推出时间\t•\tWeb服务：2002年7月，21年前[6]•\t云计算：2006年3月，17年前[7]现状\t运营中',
              sentence:
                'AWS中国大陆的北京和宁夏两个区域相互独立运营，服务费用亦不相同。',
              scoreQueryDoc: 0.518,
              scoreAnswerDoc: 0.79,
            },
            {
              id: 1,
              title: '亚马逊云计算服务(1).docx',
              titleLink: 'http://#',
              paragraph:
                '亚马逊云计算服务（英语：Amazon Web Services，缩写：AWS）是亚马逊公司旗下的子公司，向个人、企业和政府提供按需即用云计算平台以及应用程序接口，并按照使用量计费。,这些云计算Web服务通过亚马逊网络服务的服务器集群提供分布式计算处理能力和软件工具。,这其中的一项服务是亚马逊弹性云计算（EC2），该服务通过互联网为用户提供实时在线的虚拟化计算机集群。',
              sentence:
                '亚马逊云计算服务（英语：Amazon Web Services，缩写：AWS）是亚马逊公司旗下的子公司，向个人、企业和政府提供按需即用云计算平台以及应用程序接口，并按照使用量计费。',
              scoreQueryDoc: 0.513,
              scoreAnswerDoc: 0.6,
            },
            {
              id: 2,
              title: '亚马逊云计算服务(1).docx',
              titleLink: 'http://#',
              paragraph:
                '[24]行业领导者（2016年至今）[编辑]2016年第一季度，亚马逊云计算服务营收为25.7亿美元，净收入为6.04亿美元，与2015年第一季度同比增长64%，这使得AWS盈利首次超过亚马逊北美零售服务。,[25]贾西因此被提拔为该部门的首席执行官。,[26]在同一时期，亚马逊的股票价值因营收增长上涨42%，AWS在营收贡献中占比56%。',
              sentence:
                '[24]\n\n行业领导者（2016年至今）[编辑]\n\n2016年第一季度，亚马逊云计算服务营收为25.7亿美元，净收入为6.04亿美元，与2015年第一季度同比增长64%，这使得AWS盈利首次超过亚马逊北美零售服务。',
              scoreQueryDoc: 0.513,
              scoreAnswerDoc: 0.555,
            },
          ],
          text: '如何查询AWS的收费标准？\n\n根据已知信息，AWS在中国大陆的北京和宁夏两个区域相互独立运营，服务费用亦不相同。要查询AWS的，您可以直接访问AWS官方网站（https://aws.amazon.com/），您可以找到详细的收费信息和价格计算器。此外，您联系AWS的客户支持团队，他们将为您提供更具体的信息和建议。',
          scoreQueryAnswer: '0.491',
          contentCheckLabel: 'Pass',
          contentCheckSuggestion: 'Pass',
          answerTook: 20005,
        },
      },
      {
        type: 'customer',
        content: {
          text: 'aws有多少种服务？',
          timestamp: 1709124625504,
        },
      },
      {
        type: 'robot',
        content: {
          timestamp: 1709124817465.7395,
          text: 'Error raised by inference endpoint: An error occurred (ModelError) when calling the InvokeEndpoint operation: Received server error (503) from primary with message "{\n  "code": 503,\n  "type": "WlmCapacityException",\n  "message": "Worker queue capacity exceeded for model: LLM_baichuan_deploy_code (READY)"\n}\n". See https://us-east-1.console.aws.amazon.com/cloudwatch/home?region=us-east-1#logEventViewer:group=/aws/sagemaker/Endpoints/pytorch-inference-llm-v1 in account 967876493504 for more information.',
          errorMessage:
            'Error raised by inference endpoint: An error occurred (ModelError) when calling the InvokeEndpoint operation: Received server error (503) from primary with message "{\n  "code": 503,\n  "type": "WlmCapacityException",\n  "message": "Worker queue capacity exceeded for model: LLM_baichuan_deploy_code (READY)"\n}\n". See https://us-east-1.console.aws.amazon.com/cloudwatch/home?region=us-east-1#logEventViewer:group=/aws/sagemaker/Endpoints/pytorch-inference-llm-v1 in account 967876493504 for more information.',
          sourceData: [],
          message: 'error',
          contentCheckLabel: 'Pass',
          contentCheckSuggestion: 'Pass',
          answerTook: 192164,
        },
      },
    ],
  },
  {
    type: 'link',
    href: '/session/1709124280664-44991',
    text: 'mixed search 1',
    sessionId: '1709124280664-44991',
    configs: {
      name: 'mixed search 1',
      searchEngine: 'opensearch',
      llmData: {
        strategyName: 'test1',
        type: 'sagemaker_endpoint',
        embeddingEndpoint: 'huggingface-inference-eb',
        modelType: 'non_llama2',
        recordId: 'pytorch-inference-llm-v1-65624',
        sagemakerEndpoint: 'pytorch-inference-llm-v1',
        streaming: true,
      },
      role: '',
      language: 'chinese',
      taskDefinition: '',
      outputFormat: '',
      isCheckedGenerateReport: false,
      isCheckedContext: false,
      isCheckedKnowledgeBase: true,
      indexName: 'smart_search_qa_test',
      topK: 3,
      searchMethod: 'mix',
      txtDocsNum: '3',
      vecDocsScoreThresholds: '0.5',
      txtDocsScoreThresholds: '0.5',
      isCheckedScoreQA: true,
      isCheckedScoreQD: true,
      isCheckedScoreAD: true,
      contextRounds: 3,
      isCheckedEditPrompt: false,
      prompt: '',
      tokenContentCheck: '',
      responseIfNoDocsFound: 'Cannot find the answer',
      sessionId: '1709124280664-44991',
    },
    conversations: [
      {
        type: 'customer',
        content: {
          text: '天气怎么样？',
          timestamp: 1709124292097,
        },
      },
      {
        type: 'robot',
        content: {
          message: 'streaming_end',
          timestamp: 1709124296865.6152,
          sourceData: [],
          text: 'Cannot find the answer',
          scoreQueryAnswer: '0.292',
          contentCheckLabel: 'Pass',
          contentCheckSuggestion: 'Pass',
          answerTook: 4983,
        },
      },
      {
        type: 'customer',
        content: {
          text: 'aws怎么收费？',
          timestamp: 1709124316785,
        },
      },
      {
        type: 'robot',
        content: {
          message: 'streaming_end',
          timestamp: 1709124392090.564,
          sourceData: [
            {
              id: 0,
              title: '亚马逊云计算服务(1).docx',
              titleLink: 'http://#',
              paragraph:
                'AWS中国大陆的北京和宁夏两个区域相互独立运营，服务费用亦不相同。,[33]网站类型\t子公司代表人物\t•\t亚当·塞利普斯基（Adam Selipsky，首席执行官）[1]•\t斯蒂芬·施密特（Stephen Schmidt，首席信息安全官）•\t马特·加尔曼（Matt Garman）•\t彼得·德桑蒂斯（Peter DeSantis）•\t巴比克·帕尔维茨（Babik Parvez）•\t詹姆斯·汉密尔顿（James Hamilton）•\t[2]营业额▲ $622亿美元（2021年）[3]息税前利润▲ $185亿美元（2021年）[4]母公司亚马逊公司子公司\t•\tAnnapurna Labs•\tAWS Elemental•\tNICE Software[5]•\tWickr网址\taws.amazon.com推出时间\t•\tWeb服务：2002年7月，21年前[6]•\t云计算：2006年3月，17年前[7]现状\t运营中',
              sentence:
                'AWS中国大陆的北京和宁夏两个区域相互独立运营，服务费用亦不相同。',
              scoreQueryDoc: 0.522,
              scoreAnswerDoc: 0.361,
            },
            {
              id: 1,
              title: '亚马逊云计算服务(1).docx',
              titleLink: 'http://#',
              paragraph:
                '[26]在同一时期，亚马逊的股票价值因营收增长上涨42%，AWS在营收贡献中占比56%。,[27]2021年3月，贾西升任亚马逊总公司的首席执行官，时任Tableau首席执行官的亚当·塞利普斯基被任命为云计算部门的新首席执行官。,[28]根据高德纳咨询公司2021年度云基础设施和平台服务的评估报告，亚马逊云计算、微软Azure、Google云端平台被列为该行业的“领导者”。',
              sentence:
                '[26]在同一时期，亚马逊的股票价值因营收增长上涨42%，AWS在营收贡献中占比56%。',
              scoreQueryDoc: 0.513,
              scoreAnswerDoc: 0.433,
            },
            {
              id: 2,
              title: '亚马逊云计算服务(1).docx',
              titleLink: 'http://#',
              paragraph:
                '亚马逊云计算服务（英语：Amazon Web Services，缩写：AWS）是亚马逊公司旗下的子公司，向个人、企业和政府提供按需即用云计算平台以及应用程序接口，并按照使用量计费。,这些云计算Web服务通过亚马逊网络服务的服务器集群提供分布式计算处理能力和软件工具。,这其中的一项服务是亚马逊弹性云计算（EC2），该服务通过互联网为用户提供实时在线的虚拟化计算机集群。',
              sentence:
                '亚马逊云计算服务（英语：Amazon Web Services，缩写：AWS）是亚马逊公司旗下的子公司，向个人、企业和政府提供按需即用云计算平台以及应用程序接口，并按照使用量计费。',
              scoreQueryDoc: 0.509,
              scoreAnswerDoc: 0.433,
            },
            {
              id: 3,
              title: '亚马逊云计算服务(1).docx',
              titleLink: 'http://#',
              paragraph:
                '当年，市场观察家首次预测亚马逊云计算服务的收入超过15亿美元。,[21]2012年11月27日，亚马逊云计算服务举办了首次年度“re:Invent”峰会，会议着重于AWS合作伙伴和生态系统议题，[22]由超过150场活动组成。,[23]为了支持全行业培训和技能标准化，亚马逊云计算服务自2013年4月30日起开始为计算机工程师提供培训项目，以提升在云计算上的专业能力。',
              sentence:
                '当年，市场观察家首次预测亚马逊云计算服务的收入超过15亿美元。',
              scoreQueryDoc: 0.604,
              scoreAnswerDoc: 0.372,
            },
            {
              id: 4,
              title: '亚马逊云计算服务(1).docx',
              titleLink: 'http://#',
              paragraph:
                '[21]2012年11月27日，亚马逊云计算服务举办了首次年度“re:Invent”峰会，会议着重于AWS合作伙伴和生态系统议题，[22]由超过150场活动组成。,[23]为了支持全行业培训和技能标准化，亚马逊云计算服务自2013年4月30日起开始为计算机工程师提供培训项目，以提升在云计算上的专业能力。,[24]行业领导者（2016年至今）[编辑]2016年第一季度，亚马逊云计算服务营收为25.7亿美元，净收入为6.04亿美元，与2015年第一季度同比增长64%，这使得AWS盈利首次超过亚马逊北美零售服务。',
              sentence:
                '[21]\n\n2012年11月27日，亚马逊云计算服务举办了首次年度“re:Invent”峰会，会议着重于AWS合作伙伴和生态系统议题，[22]由超过150场活动组成。',
              scoreQueryDoc: 0.567,
              scoreAnswerDoc: 0.453,
            },
            {
              id: 5,
              title: '亚马逊云计算服务(1).docx',
              titleLink: 'http://#',
              paragraph:
                '[20]在2012年之前，AWS被视作Amazon.com的一部分，所以其盈利并未在亚马逊公司的财务报表中单列。,当年，市场观察家首次预测亚马逊云计算服务的收入超过15亿美元。,[21]2012年11月27日，亚马逊云计算服务举办了首次年度“re:Invent”峰会，会议着重于AWS合作伙伴和生态系统议题，[22]由超过150场活动组成。',
              sentence:
                '[20]在2012年之前，AWS被视作Amazon.com的一部分，所以其盈利并未在亚马逊公司的财务报表中单列。',
              scoreQueryDoc: 0.509,
              scoreAnswerDoc: 0.462,
            },
          ],
          text: '亚马逊',
          scoreQueryAnswer: '0.479',
          contentCheckLabel: 'Pass',
          contentCheckSuggestion: 'Pass',
          answerTook: 75480,
        },
      },
      {
        type: 'customer',
        content: {
          text: 'aws怎么收费？',
          timestamp: 1709124527335,
        },
      },
      {
        type: 'customer',
        content: {
          text: 'aws有多少种服务？',
          timestamp: 1709124898237,
        },
      },
      {
        type: 'robot',
        content: {
          timestamp: 1709124912696.4646,
          text: 'Error raised by inference endpoint: An error occurred (ModelError) when calling the InvokeEndpoint operation: Received server error (503) from primary with message "{\n  "code": 503,\n  "type": "WlmCapacityException",\n  "message": "Worker queue capacity exceeded for model: LLM_baichuan_deploy_code (READY)"\n}\n". See https://us-east-1.console.aws.amazon.com/cloudwatch/home?region=us-east-1#logEventViewer:group=/aws/sagemaker/Endpoints/pytorch-inference-llm-v1 in account 967876493504 for more information.',
          errorMessage:
            'Error raised by inference endpoint: An error occurred (ModelError) when calling the InvokeEndpoint operation: Received server error (503) from primary with message "{\n  "code": 503,\n  "type": "WlmCapacityException",\n  "message": "Worker queue capacity exceeded for model: LLM_baichuan_deploy_code (READY)"\n}\n". See https://us-east-1.console.aws.amazon.com/cloudwatch/home?region=us-east-1#logEventViewer:group=/aws/sagemaker/Endpoints/pytorch-inference-llm-v1 in account 967876493504 for more information.',
          sourceData: [],
          message: 'error',
          contentCheckLabel: 'Pass',
          contentCheckSuggestion: 'Pass',
          answerTook: 14647,
        },
      },
    ],
  },
  {
    type: 'link',
    href: '/session/1709196456004-17502',
    text: 'XiongTest1',
    sessionId: '1709196456004-17502',
    configs: {
      name: 'XiongTest1',
      searchEngine: 'opensearch',
      llmData: {
        strategyName: 'test',
        type: 'third_party_api',
        embeddingEndpoint: 'huggingface-inference-eb',
        modelType: 'bedrock',
        modelName: 'anthropic.claude-v2',
        recordId: 'anthropic.claude-v2-69590',
        apiUrl: '',
        apiKey: '',
        secretKey: '',
      },
      role: '',
      language: 'chinese',
      taskDefinition: '',
      outputFormat: '',
      isCheckedGenerateReport: false,
      isCheckedContext: false,
      isCheckedKnowledgeBase: true,
      indexName: 'autel_dc_cn',
      topK: '2',
      searchMethod: 'mix',
      txtDocsNum: '2',
      vecDocsScoreThresholds: 0,
      txtDocsScoreThresholds: 0,
      isCheckedScoreQA: false,
      isCheckedScoreQD: false,
      isCheckedScoreAD: false,
      contextRounds: 3,
      isCheckedEditPrompt: true,
      prompt:
        "<Task Defination>\n下面会给你一些“告警码或者告警信息”，请根据上述内容从以下“备选告警信息集“根据“匹配规则”选择匹配的条目，并输出对应的“指定字段”。若不能够从”备选告警信息集“中获取匹配的条目，请回答”没有找到相关告警信息和维修指南“，请不要自行编造。\n\n<告警码或者告警信息结构>\n1. 输入的信息可能同时包含告警码和告警信息，也可能仅包含其中一个\n2. 每个告警码由4位数字组成，输入的告警码可能包含一个或者多个\n</告警码或者告警信息结构>\n\n<匹配规则>\n1. 对于输入的为告警码：\na. 若是单个4位告警码，则必须要完全匹配，例如输入为0001，则“备选告警信息集”中寻找告警码为0001的条目\nb. 若是多个4位告警码，则分别进行匹配，例如输入为0001和0021，则分别从“备选告警信息集”中寻找告警码为0001和0021的条目\n2. 对于输入是告警信息描述，则根据语意进行匹配，注意只要语意符合即可，不必追求完全的字段匹配\n</匹配规则>\n\n<备选告警信息集结构>\n1. 备选告警信息集由一条或者多条备选告警信息组成\n2. 每条告警信息格式位JSON格式\n3. 包含的字段有：'告警码','告警信息-CN', '判断条件-CN', '维修指引(运营商家端)-CN', '远程维修指引(桩企)-CN', '现场维修指引(桩企)-CN'\n</备选告警信息集结构>\n\n<指定字段>\n“告警码”，“告警信息”，“维修指引(运营商家端)”，“远程维修指引(桩企)”和“现场维修指引(桩企)”\n</指定字段>\n</Task Defination>\n\n<备选告警信息集>\n{context}\n</备选告警信息集>\n\n<告警码或者告警信息>\n{question}\n</告警码或者告警信息>\n\n<Output Rules>\n1. 若告警码或者告警信息能够匹配备选告警信息，按照”指定字段“依次直接输出内容\n2. 若告警码或者告警信息不能够从”备选告警信息集“中获取匹配的条目，请回答”没有找到相关告警信息和维修指南“\n<Output Rules>\n\nAI:",
      tokenContentCheck: '',
      responseIfNoDocsFound: 'Cannot find the answer',
      sessionId: '1709196456004-17502',
    },
    conversations: [
      {
        type: 'customer',
        content: {
          text: '[February 29, 2024, 4:45 PM] Xiong, Junfeng: 充电枪温度探头短路和开路',
          timestamp: 1709196484138,
        },
      },
      {
        type: 'robot',
        content: {
          message: 'streaming_end',
          timestamp: 1709196514475.1724,
          sourceData: [
            {
              id: 0,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.692,
              scoreAnswerDoc: -1,
            },
            {
              id: 1,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.653,
              scoreAnswerDoc: -1,
            },
            {
              id: 2,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 3.339,
              scoreAnswerDoc: -1,
            },
            {
              id: 3,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 3.23,
              scoreAnswerDoc: -1,
            },
          ],
          text: ' 根据输入的告警信息"充电枪温度探头短路和开路",我在备选告警信息集中找到了以下两条匹配信息:\n\n告警码: 205C  \n告警信息: 充电枪温度探头短路\n维修指引(运营商家端): 硬件问题,充电枪可能被损坏,联系技术支持指导现场操作\n远程维修指引(桩企): 指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀  \n现场维修指引(桩企): 现场用测温枪测试实际温度,如果并无明显过温,推测温度采样问题,考虑温度传感器和CCU;如果确实过温,检查车和桩端充电接口是否有异物、磨损或烧蚀\n\n告警码: 205B\n告警信息: 充电枪温度探头开路  \n维修指引(运营商家端): 过温故障可能由软件误报和硬件故障造成,先进行软件复位,如果再次出现相同故障报警,联系客服指导现场操作\n远程维修指引(桩企): 指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀\n现场维修指引(桩企): 现场用测温枪测试实际温度,如果并无明显过温,推测温度采样问题,考虑温度传感器和CCU;如果确实过温,检查车和桩端充电接口是否有异物、磨损或烧蚀',
          scoreQueryAnswer: '-1',
          contentCheckLabel: 'Pass',
          contentCheckSuggestion: 'Pass',
          answerTook: 30400,
        },
      },
      {
        type: 'customer',
        content: {
          text: '充电枪温度探头短路和开路',
          timestamp: 1709196920078,
        },
      },
      {
        type: 'robot',
        content: {
          message: 'streaming_end',
          timestamp: 1709196959608.4277,
          sourceData: [
            {
              id: 0,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '2005', '告警信息-CN': '充电枪过温故障', '判断条件-CN': '当充电枪温度高于过温故障限值90℃持续5S，报过温故障，停止充电', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '2005', '告警信息-CN': '充电枪过温故障', '判断条件-CN': '当充电枪温度高于过温故障限值90℃持续5S，报过温故障，停止充电', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.585,
              scoreAnswerDoc: -1,
            },
            {
              id: 1,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.567,
              scoreAnswerDoc: -1,
            },
            {
              id: 2,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 9.66,
              scoreAnswerDoc: -1,
            },
            {
              id: 3,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 8.954,
              scoreAnswerDoc: -1,
            },
          ],
          text: ' 根据输入的告警信息,我提取到以下关键信息:\n\n1. 充电枪温度传感器出现了故障\n2. 充电枪温度传感器短路和开路故障的原因\n3. 对充电枪温度传感器短路和开路故障的确认和处理\n\n针对第一个问题,从备选告警信息集中,我找到了以下匹配的条目:\n\n告警码:205B\n告警信息:充电枪温度探头开路  \n维修指引(运营商家端):过温故障可能由软件误报和硬件故障造成,先进行软件复位,如果再次出现相同故障报警,联系客服指导现场操作\n远程维修指引(桩企):指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀\n现场维修指引(桩企):现场用测温枪测试实际温度,如果并无明显过温,推测温度采样问题,考虑温度传感器和CCU;如果确实过温,检查车和桩端充电接口是否有异物、磨损或烧蚀\n\n告警码:205C  \n告警信息:充电枪温度探头短路\n维修指引(运营商家端):硬件问题,充电枪可能被损坏,联系技术支持指导现场操作\n远程维修指引(桩企):指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀  \n现场维修指引(桩企):现场用测温枪测试实际温度,如果并无明显过温,推测温度采样问题,考虑温度传感器和CCU;如果确实',
          scoreQueryAnswer: '-1',
          contentCheckLabel: 'Pass',
          contentCheckSuggestion: 'Pass',
          answerTook: 39562,
        },
      },
      {
        type: 'customer',
        content: {
          text: '充电枪温度探头短路',
          timestamp: 1709197030827,
        },
      },
      {
        type: 'robot',
        content: {
          message: 'streaming_end',
          timestamp: 1709197091666.6792,
          sourceData: [
            {
              id: 0,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '2005', '告警信息-CN': '充电枪过温故障', '判断条件-CN': '当充电枪温度高于过温故障限值90℃持续5S，报过温故障，停止充电', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '2005', '告警信息-CN': '充电枪过温故障', '判断条件-CN': '当充电枪温度高于过温故障限值90℃持续5S，报过温故障，停止充电', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.558,
              scoreAnswerDoc: -1,
            },
            {
              id: 1,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.527,
              scoreAnswerDoc: -1,
            },
            {
              id: 2,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 24.172,
              scoreAnswerDoc: -1,
            },
            {
              id: 3,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 22.193,
              scoreAnswerDoc: -1,
            },
          ],
          text: ' 根据您提供的告警信息,我在备选告警信息集中找到以下两条相关信息:\n\n告警码: 205B  \n告警信息: 充电枪温度探头开路\n维修指引(运营商家端): 过温故障可能由软件误报和硬件故障造成,先进行软件复位,如果再次出现相同故障报警,联系客服指导现场操作\n远程维修指引(桩企): 指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀\n现场维修指引(桩企): 现场用测温枪测试实际温度,如果并无明显过温,推测温度采样问题,考虑温度传感器和CCU;如果确实过温,检查车和桩端充电接口是否有异物、磨损或烧蚀\n\n告警码: 205C\n告警信息: 充电枪温度探头短路  \n维修指引(运营商家端): 硬件问题,充电枪可能被损坏,联系技术支持指导现场操作\n远程维修指引(桩企): 指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀\n现场维修指引(桩企): 现场用测温枪测试实际温度,如果并无明显过温,推测温度采样问题,考虑温度传感器和CCU;如果确实过温,检查车和桩端充电接口是否有异物、磨损或烧蚀\n\n针对您后续提出的问题,我总结充电枪温度传感器短路和开路故障的原因可能包括:\n\n1. 车和桩端充电接口有',
          scoreQueryAnswer: '-1',
          contentCheckLabel: 'Pass',
          contentCheckSuggestion: 'Pass',
          answerTook: 60860,
        },
      },
      {
        type: 'customer',
        content: {
          text: '1',
          timestamp: 1709262520960,
        },
      },
      {
        type: 'robot',
        content: {
          message: 'streaming_end',
          timestamp: 1709262553193.4963,
          sourceData: [
            {
              id: 0,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '2005', '告警信息-CN': '充电枪过温故障', '判断条件-CN': '当充电枪温度高于过温故障限值90℃持续5S，报过温故障，停止充电', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '2005', '告警信息-CN': '充电枪过温故障', '判断条件-CN': '当充电枪温度高于过温故障限值90℃持续5S，报过温故障，停止充电', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.659,
              scoreAnswerDoc: -1,
            },
            {
              id: 1,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.651,
              scoreAnswerDoc: -1,
            },
            {
              id: 2,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 3.717,
              scoreAnswerDoc: -1,
            },
            {
              id: 3,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 3.556,
              scoreAnswerDoc: -1,
            },
          ],
          text: ' 根据输入的告警信息描述,无法从备选告警信息集中找到完全匹配的条目。但是可以分析得出以下信息:\n\n充电枪温度传感器短路和开路故障的原因可能有:\n\n1. 充电枪温度传感器本身质量问题,导致容易损坏。\n\n2. 充电枪使用环境恶劣,温度过高或过低,导致温度传感器损坏。\n\n3. 充电枪使用不当,碰撞、跌落等外力作用导致温度传感器损坏。 \n\n4. 充电枪接头脱落,温度传感器接触不良。\n\n5. 充电枪内部线路问题,导致温度传感器供电不稳定。\n\n6. 充电枪控制器问题,导致对温度传感器的检测电路异常。\n\n7. 车辆端充电接口脏污,与充电枪接触不良,导致过热烧坏温度传感器。\n\n8. 充电过程中电流过大,充电枪发热,温度传感器损坏。\n\n9. 外界电磁干扰,导致温度传感器输出信号异常。\n\n10. 软件算法问题,导致对温度传感器信号判断错误。\n\n以上是我根据经验分析得出的可能原因,如果不能确定具体故障原因,需要现场检测定位。',
          scoreQueryAnswer: '-1',
          contentCheckLabel: 'Pass',
          contentCheckSuggestion: 'Pass',
          answerTook: 32949,
        },
      },
      {
        type: 'customer',
        content: {
          text: '充电枪温度探头短路',
          timestamp: 1709269510686,
        },
      },
      {
        type: 'robot',
        content: {
          message: 'streaming_end',
          timestamp: 1709269539435.7832,
          sourceData: [
            {
              id: 0,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.716,
              scoreAnswerDoc: -1,
            },
            {
              id: 1,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '2005', '告警信息-CN': '充电枪过温故障', '判断条件-CN': '当充电枪温度高于过温故障限值90℃持续5S，报过温故障，停止充电', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '2005', '告警信息-CN': '充电枪过温故障', '判断条件-CN': '当充电枪温度高于过温故障限值90℃持续5S，报过温故障，停止充电', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.663,
              scoreAnswerDoc: -1,
            },
            {
              id: 2,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 3.404,
              scoreAnswerDoc: -1,
            },
            {
              id: 3,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 3.008,
              scoreAnswerDoc: -1,
            },
          ],
          text: ' 根据输入的告警信息"充电枪温度探头短路故障的原因可能有哪些?",在备选告警信息集中找到相关匹配条目:\n\n告警码: 205C\n告警信息: 充电枪温度探头短路\n维修指引(运营商家端): 硬件问题,充电枪可能被损坏,联系技术支持指导现场操作\n远程维修指引(桩企): 指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀  \n现场维修指引(桩企): 现场用测温枪测试实际温度,如果并无明显过温,推测温度采样问题,考虑温度传感器和CCU;如果确实过温,检查车和桩端充电接口是否有异物、磨损或烧蚀',
          scoreQueryAnswer: '-1',
          contentCheckLabel: 'Pass',
          contentCheckSuggestion: 'Pass',
          answerTook: 28796,
        },
      },
      {
        type: 'customer',
        content: {
          text: '充电枪温度探头短路',
          timestamp: 1709269613284,
        },
      },
      {
        type: 'robot',
        content: {
          message: 'streaming_end',
          timestamp: 1709269648631.998,
          sourceData: [
            {
              id: 0,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '2005', '告警信息-CN': '充电枪过温故障', '判断条件-CN': '当充电枪温度高于过温故障限值90℃持续5S，报过温故障，停止充电', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '2005', '告警信息-CN': '充电枪过温故障', '判断条件-CN': '当充电枪温度高于过温故障限值90℃持续5S，报过温故障，停止充电', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.566,
              scoreAnswerDoc: -1,
            },
            {
              id: 1,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.566,
              scoreAnswerDoc: -1,
            },
            {
              id: 2,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 24.194,
              scoreAnswerDoc: -1,
            },
            {
              id: 3,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 22.62,
              scoreAnswerDoc: -1,
            },
          ],
          text: ' 根据输入的告警信息“充电枪温度探头短路故障的原因可能有哪些?”,无法从备选告警信息集中找到完全匹配的条目。但是根据告警信息分析,充电枪温度探头短路故障的原因可能包括:\n\n1. 温度传感器本身质量问题,内部线路接触不良导致短路。 \n\n2. 充电枪使用环境恶劣,温度过高导致温度传感器烧坏短路。\n\n3. 充电枪碰撞、跌落等外力作用导致温度传感器线路短路。\n\n4. 充电枪内部线路接触不良,导致与温度传感器短路。\n\n5. 车辆端充电接口脏污,与充电枪接触不当,造成短路烧坏温度传感器。 \n\n6. 充电过程中电流过大,造成充电枪过热烧坏温度传感器。\n\n所以无法从备选告警信息集中找到完全匹配的告警信息和维修指南。',
          scoreQueryAnswer: '-1',
          contentCheckLabel: 'Pass',
          contentCheckSuggestion: 'Pass',
          answerTook: 35413,
        },
      },
      {
        type: 'customer',
        content: {
          text: '充电枪温度探头短路',
          timestamp: 1709269922180,
        },
      },
      {
        type: 'robot',
        content: {
          message: 'streaming_end',
          timestamp: 1709269932407.381,
          sourceData: [
            {
              id: 0,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.725,
              scoreAnswerDoc: -1,
            },
            {
              id: 1,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '2005', '告警信息-CN': '充电枪过温故障', '判断条件-CN': '当充电枪温度高于过温故障限值90℃持续5S，报过温故障，停止充电', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '2005', '告警信息-CN': '充电枪过温故障', '判断条件-CN': '当充电枪温度高于过温故障限值90℃持续5S，报过温故障，停止充电', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.639,
              scoreAnswerDoc: -1,
            },
            {
              id: 2,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 3.327,
              scoreAnswerDoc: -1,
            },
            {
              id: 3,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 2.932,
              scoreAnswerDoc: -1,
            },
          ],
          text: ' 根据输入的告警信息"充电枪温度探头短路的原因可能有哪些?",我在备选告警信息集中没有找到完全匹配的条目。所以我的回答是:没有找到相关告警信息和维修指南。',
          scoreQueryAnswer: '-1',
          contentCheckLabel: 'Pass',
          contentCheckSuggestion: 'Pass',
          answerTook: 10248,
        },
      },
    ],
  },
  {
    type: 'link',
    href: '/session/1709270000396-98608',
    text: 'XiongTest2',
    sessionId: '1709270000396-98608',
    configs: {
      name: 'XiongTest2',
      searchEngine: 'opensearch',
      llmData: {
        strategyName: 'test',
        type: 'third_party_api',
        embeddingEndpoint: 'huggingface-inference-eb',
        modelType: 'bedrock',
        modelName: 'anthropic.claude-v2',
        recordId: 'anthropic.claude-v2-69590',
        apiUrl: '',
        apiKey: '',
        secretKey: '',
      },
      role: '',
      language: 'chinese',
      taskDefinition: '',
      outputFormat: '',
      isCheckedGenerateReport: false,
      isCheckedContext: false,
      isCheckedKnowledgeBase: true,
      indexName: 'autel_dc_cn',
      topK: '2',
      searchMethod: 'mix',
      txtDocsNum: '2',
      vecDocsScoreThresholds: 0,
      txtDocsScoreThresholds: 0,
      isCheckedScoreQA: false,
      isCheckedScoreQD: false,
      isCheckedScoreAD: false,
      contextRounds: 3,
      isCheckedEditPrompt: true,
      prompt:
        "<Task Defination>\n下面会给你一些“告警码或者告警信息”，请根据上述内容从以下“备选告警信息集“根据“匹配规则”选择匹配的条目，并输出对应的“指定字段”。若不能够从”备选告警信息集“中获取匹配的条目，请回答”没有找到相关告警信息和维修指南“，请不要自行编造。\n\n<告警码或者告警信息结构>\n1. 输入的信息可能同时包含告警码和告警信息，也可能仅包含其中一个\n2. 每个告警码由4位数字组成，输入的告警码可能包含一个或者多个\n</告警码或者告警信息结构>\n\n<匹配规则>\n1. 对于输入的为告警码：\na. 若是单个4位告警码，则必须要完全匹配，例如输入为0001，则“备选告警信息集”中寻找告警码为0001的条目\nb. 若是多个4位告警码，则分别进行匹配，例如输入为0001和0021，则分别从“备选告警信息集”中寻找告警码为0001和0021的条目\n2. 对于输入是告警信息描述，则根据语意进行匹配，注意只要语意符合即可，不必追求完全的字段匹配\n</匹配规则>\n\n<备选告警信息集结构>\n1. 备选告警信息集由一条或者多条备选告警信息组成\n2. 每条告警信息格式位JSON格式\n3. 包含的字段有：'告警码','告警信息-CN', '判断条件-CN', '维修指引(运营商家端)-CN', '远程维修指引(桩企)-CN', '现场维修指引(桩企)-CN'\n</备选告警信息集结构>\n\n<指定字段>\n“告警码”，“告警信息”，“维修指引(运营商家端)”，“远程维修指引(桩企)”和“现场维修指引(桩企)”\n</指定字段>\n</Task Defination>\n\n<备选告警信息集>\n{context}\n</备选告警信息集>\n\n<告警码或者告警信息>\n{question}\n</告警码或者告警信息>\n\n<Output Rules>\n1. 若告警码或者告警信息能够匹配备选告警信息，按照”指定字段“依次直接输出内容\n2. 若告警码或者告警信息不能够从”备选告警信息集“中获取匹配的条目，请回答”没有找到相关告警信息和维修指南“\n<Output Rules>\n\nAI:",
      tokenContentCheck: '',
      responseIfNoDocsFound: 'Cannot find the answer',
      sessionId: '1709270000396-98608',
    },
    conversations: [
      {
        type: 'customer',
        content: {
          text: '充电枪温度探头短路',
          timestamp: 1709270008310,
        },
      },
      {
        type: 'robot',
        content: {
          message: 'streaming_end',
          timestamp: 1709270027328.0215,
          sourceData: [
            {
              id: 0,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.827,
              scoreAnswerDoc: -1,
            },
            {
              id: 1,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.696,
              scoreAnswerDoc: -1,
            },
            {
              id: 2,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 2.706,
              scoreAnswerDoc: -1,
            },
            {
              id: 3,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 2.366,
              scoreAnswerDoc: -1,
            },
          ],
          text: ' 根据输入的告警信息"充电枪温度探头短路",在备选告警信息集中找到匹配的条目:\n\n告警码: 205C\n告警信息: 充电枪温度探头短路  \n维修指引(运营商家端): 硬件问题,充电枪可能被损坏,联系技术支持指导现场操作\n远程维修指引(桩企): 指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀\n现场维修指引(桩企): 现场用测温枪测试实际温度,如果并无明显过温,推测温度采样问题,考虑温度传感器和CCU;如果确实过温,检查车和桩端充电接口是否有异物、磨损或烧蚀',
          scoreQueryAnswer: '-1',
          contentCheckLabel: 'Pass',
          contentCheckSuggestion: 'Pass',
          answerTook: 19045,
        },
      },
      {
        type: 'customer',
        content: {
          text: '充电枪温度探头短路',
          timestamp: 1709274937382,
        },
      },
      {
        type: 'robot',
        content: {
          message: 'streaming_end',
          timestamp: 1709274972332.9246,
          sourceData: [
            {
              id: 0,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.611,
              scoreAnswerDoc: -1,
            },
            {
              id: 1,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '3059', '告警信息-CN': '充电模块过温告警（个别充电模块）', '判断条件-CN': '2s周期查询功率模块实时状态数据，根据模块反馈检测', '维修指引(运营商家端)-CN': '模块异常，联系后台确认故障原因，确认后排除异常或更换模块', '远程维修指引(桩企)-CN': '指导客户检查滤网是否堵塞，风扇是否正常工作', '现场维修指引(桩企)-CN': '检查充电模块是否故障、散热条件是否有异常'}",
              sentence:
                "{'告警码': '3059', '告警信息-CN': '充电模块过温告警（个别充电模块）', '判断条件-CN': '2s周期查询功率模块实时状态数据，根据模块反馈检测', '维修指引(运营商家端)-CN': '模块异常，联系后台确认故障原因，确认后排除异常或更换模块', '远程维修指引(桩企)-CN': '指导客户检查滤网是否堵塞，风扇是否正常工作', '现场维修指引(桩企)-CN': '检查充电模块是否故障、散热条件是否有异常'}",
              scoreQueryDoc: 0.541,
              scoreAnswerDoc: -1,
            },
            {
              id: 2,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 3.991,
              scoreAnswerDoc: -1,
            },
            {
              id: 3,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 3.514,
              scoreAnswerDoc: -1,
            },
          ],
          text: ' 根据输入的告警信息,在备选告警信息集中找到相关的两条告警信息:\n\n告警码: 205C  \n告警信息: 充电枪温度探头短路\n维修指引(运营商家端): 硬件问题,充电枪可能被损坏,联系技术支持指导现场操作\n远程维修指引(桩企): 指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀  \n现场维修指引(桩企): 现场用测温枪测试实际温度,如果并无明显过温,推测温度采样问题,考虑温度传感器和CCU;如果确实过温,检查车和桩端充电接口是否有异物、磨损或烧蚀\n\n告警码: 205B\n告警信息: 充电枪温度探头开路  \n维修指引(运营商家端): 过温故障可能由软件误报和硬件故障造成,先进行软件复位,如果再次出现相同故障报警,联系客服指导现场操作\n远程维修指引(桩企): 指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀\n现场维修指引(桩企): 现场用测温枪测试实际温度,如果并无明显过温,推测温度采样问题,考虑温度传感器和CCU;如果确实过温,检查车和桩端充电接口是否有异物、磨损或烧蚀\n\n温度探头短路可能表示充电枪硬件故障,温度传感器故障等。应该检查充电接口是否有异物、磨损或烧',
          scoreQueryAnswer: '-1',
          contentCheckLabel: 'Pass',
          contentCheckSuggestion: 'Pass',
          answerTook: 35077,
        },
      },
      {
        type: 'customer',
        content: {
          text: '充电枪温度探头短路',
          timestamp: 1709275002349,
        },
      },
      {
        type: 'robot',
        content: {
          message: 'streaming_end',
          timestamp: 1709275011490.0212,
          sourceData: [
            {
              id: 0,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.596,
              scoreAnswerDoc: -1,
            },
            {
              id: 1,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '3057', '告警信息-CN': '充电模块输出短路告警（个别充电模块）', '判断条件-CN': '2s周期查询功率模块实时状态数据，根据模块反馈检测', '维修指引(运营商家端)-CN': '模块异常，联系后台确认故障原因，确认后排除异常或更换模块', '远程维修指引(桩企)-CN': '指导客户或现场人员检查充电模块是否正常工作', '现场维修指引(桩企)-CN': '检查充电模块是否正常工作，尝试替换'}",
              sentence:
                "{'告警码': '3057', '告警信息-CN': '充电模块输出短路告警（个别充电模块）', '判断条件-CN': '2s周期查询功率模块实时状态数据，根据模块反馈检测', '维修指引(运营商家端)-CN': '模块异常，联系后台确认故障原因，确认后排除异常或更换模块', '远程维修指引(桩企)-CN': '指导客户或现场人员检查充电模块是否正常工作', '现场维修指引(桩企)-CN': '检查充电模块是否正常工作，尝试替换'}",
              scoreQueryDoc: 0.525,
              scoreAnswerDoc: -1,
            },
            {
              id: 2,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 3.991,
              scoreAnswerDoc: -1,
            },
            {
              id: 3,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 3.514,
              scoreAnswerDoc: -1,
            },
          ],
          text: ' 根据输入的告警信息,在备选告警信息集中未找到相关匹配信息。\n\n回答如下:\n\n没有找到相关告警信息和维修指南。',
          scoreQueryAnswer: '-1',
          contentCheckLabel: 'Pass',
          contentCheckSuggestion: 'Pass',
          answerTook: 9270,
        },
      },
      {
        type: 'customer',
        content: {
          text: '充电枪温度探头短路',
          timestamp: 1709275020651,
        },
      },
      {
        type: 'robot',
        content: {
          message: 'streaming_end',
          timestamp: 1709275035973.2327,
          sourceData: [
            {
              id: 0,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.596,
              scoreAnswerDoc: -1,
            },
            {
              id: 1,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '3057', '告警信息-CN': '充电模块输出短路告警（个别充电模块）', '判断条件-CN': '2s周期查询功率模块实时状态数据，根据模块反馈检测', '维修指引(运营商家端)-CN': '模块异常，联系后台确认故障原因，确认后排除异常或更换模块', '远程维修指引(桩企)-CN': '指导客户或现场人员检查充电模块是否正常工作', '现场维修指引(桩企)-CN': '检查充电模块是否正常工作，尝试替换'}",
              sentence:
                "{'告警码': '3057', '告警信息-CN': '充电模块输出短路告警（个别充电模块）', '判断条件-CN': '2s周期查询功率模块实时状态数据，根据模块反馈检测', '维修指引(运营商家端)-CN': '模块异常，联系后台确认故障原因，确认后排除异常或更换模块', '远程维修指引(桩企)-CN': '指导客户或现场人员检查充电模块是否正常工作', '现场维修指引(桩企)-CN': '检查充电模块是否正常工作，尝试替换'}",
              scoreQueryDoc: 0.525,
              scoreAnswerDoc: -1,
            },
            {
              id: 2,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 3.991,
              scoreAnswerDoc: -1,
            },
            {
              id: 3,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 3.514,
              scoreAnswerDoc: -1,
            },
          ],
          text: ' 根据输入的告警信息,在备选告警信息集中未找到相关匹配信息。\n\n回答如下:\n\n没有找到相关告警信息和维修指南。',
          scoreQueryAnswer: '-1',
          contentCheckLabel: 'Pass',
          contentCheckSuggestion: 'Pass',
          answerTook: 15467,
        },
      },
    ],
  },
  {
    type: 'link',
    href: '/session/1709275058251-94046',
    text: 'XiongTest3',
    sessionId: '1709275058251-94046',
    configs: {
      name: 'XiongTest3',
      searchEngine: 'opensearch',
      llmData: {
        strategyName: 'test',
        type: 'third_party_api',
        embeddingEndpoint: 'huggingface-inference-eb',
        modelType: 'bedrock',
        modelName: 'anthropic.claude-v2',
        recordId: 'anthropic.claude-v2-69590',
        apiUrl: '',
        apiKey: '',
        secretKey: '',
      },
      role: '',
      language: 'chinese',
      taskDefinition: '',
      outputFormat: '',
      isCheckedGenerateReport: false,
      isCheckedContext: false,
      isCheckedKnowledgeBase: true,
      indexName: 'autel_dc_cn',
      topK: '2',
      searchMethod: 'mix',
      txtDocsNum: '2',
      vecDocsScoreThresholds: 0,
      txtDocsScoreThresholds: 0,
      isCheckedScoreQA: false,
      isCheckedScoreQD: false,
      isCheckedScoreAD: false,
      contextRounds: '0',
      isCheckedEditPrompt: true,
      prompt:
        "<Task Defination>\n下面会给你一些“告警码或者告警信息”，请根据上述内容从以下“备选告警信息集“根据“匹配规则”选择匹配的条目，并输出对应的“指定字段”。若不能够从”备选告警信息集“中获取匹配的条目，请回答”没有找到相关告警信息和维修指南“，请不要自行编造。\n\n<告警码或者告警信息结构>\n1. 输入的信息可能同时包含告警码和告警信息，也可能仅包含其中一个\n2. 每个告警码由4位数字组成，输入的告警码可能包含一个或者多个\n</告警码或者告警信息结构>\n\n<匹配规则>\n1. 对于输入的为告警码：\na. 若是单个4位告警码，则必须要完全匹配，例如输入为0001，则“备选告警信息集”中寻找告警码为0001的条目\nb. 若是多个4位告警码，则分别进行匹配，例如输入为0001和0021，则分别从“备选告警信息集”中寻找告警码为0001和0021的条目\n2. 对于输入是告警信息描述，则根据语意进行匹配，注意只要语意符合即可，不必追求完全的字段匹配\n</匹配规则>\n\n<备选告警信息集结构>\n1. 备选告警信息集由一条或者多条备选告警信息组成\n2. 每条告警信息格式位JSON格式\n3. 包含的字段有：'告警码','告警信息-CN', '判断条件-CN', '维修指引(运营商家端)-CN', '远程维修指引(桩企)-CN', '现场维修指引(桩企)-CN'\n</备选告警信息集结构>\n\n<指定字段>\n“告警码”，“告警信息”，“维修指引(运营商家端)”，“远程维修指引(桩企)”和“现场维修指引(桩企)”\n</指定字段>\n</Task Defination>\n\n<备选告警信息集>\n{context}\n</备选告警信息集>\n\n<告警码或者告警信息>\n{question}\n</告警码或者告警信息>\n\n<Output Rules>\n1. 若告警码或者告警信息能够匹配备选告警信息，按照”指定字段“依次直接输出内容\n2. 若告警码或者告警信息不能够从”备选告警信息集“中获取匹配的条目，请回答”没有找到相关告警信息和维修指南“\n<Output Rules>\n\nAI:",
      tokenContentCheck: '',
      responseIfNoDocsFound: 'Cannot find the answer',
      sessionId: '1709275058251-94046',
    },
    conversations: [
      {
        type: 'customer',
        content: {
          text: '充电枪温度探头短路',
          timestamp: 1709275064716,
        },
      },
      {
        type: 'robot',
        content: {
          message: 'streaming_end',
          timestamp: 1709275077904.4385,
          sourceData: [
            {
              id: 0,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.827,
              scoreAnswerDoc: -1,
            },
            {
              id: 1,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.696,
              scoreAnswerDoc: -1,
            },
            {
              id: 2,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 2.706,
              scoreAnswerDoc: -1,
            },
            {
              id: 3,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 2.366,
              scoreAnswerDoc: -1,
            },
          ],
          text: ' 根据输入的告警信息"充电枪温度探头短路",在备选告警信息集中找到匹配的条目:\n\n告警码: 205C\n告警信息: 充电枪温度探头短路  \n维修指引(运营商家端): 硬件问题,充电枪可能被损坏,联系技术支持指导现场操作\n远程维修指引(桩企): 指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀\n现场维修指引(桩企): 现场用测温枪测试实际温度,如果并无明显过温,推测温度采样问题,考虑温度传感器和CCU;如果确实过温,检查车和桩端充电接口是否有异物、磨损或烧蚀',
          scoreQueryAnswer: '-1',
          contentCheckLabel: 'Pass',
          contentCheckSuggestion: 'Pass',
          answerTook: 13330,
        },
      },
      {
        type: 'customer',
        content: {
          text: '充电枪温度探头短路',
          timestamp: 1709275093968,
        },
      },
      {
        type: 'robot',
        content: {
          message: 'streaming_end',
          timestamp: 1709275108265.647,
          sourceData: [
            {
              id: 0,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.827,
              scoreAnswerDoc: -1,
            },
            {
              id: 1,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.696,
              scoreAnswerDoc: -1,
            },
            {
              id: 2,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 2.706,
              scoreAnswerDoc: -1,
            },
            {
              id: 3,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 2.366,
              scoreAnswerDoc: -1,
            },
          ],
          text: ' 根据输入的告警信息"充电枪温度探头短路",在备选告警信息集中找到匹配的条目:\n\n告警码: 205C\n告警信息: 充电枪温度探头短路  \n维修指引(运营商家端): 硬件问题,充电枪可能被损坏,联系技术支持指导现场操作\n远程维修指引(桩企): 指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀\n现场维修指引(桩企): 现场用测温枪测试实际温度,如果并无明显过温,推测温度采样问题,考虑温度传感器和CCU;如果确实过温,检查车和桩端充电接口是否有异物、磨损或烧蚀',
          scoreQueryAnswer: '-1',
          contentCheckLabel: 'Pass',
          contentCheckSuggestion: 'Pass',
          answerTook: 14436,
        },
      },
      {
        type: 'customer',
        content: {
          text: '充电枪温度探头短路',
          timestamp: 1709275118118,
        },
      },
      {
        type: 'robot',
        content: {
          message: 'streaming_end',
          timestamp: 1709275138664.38,
          sourceData: [
            {
              id: 0,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.827,
              scoreAnswerDoc: -1,
            },
            {
              id: 1,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.696,
              scoreAnswerDoc: -1,
            },
            {
              id: 2,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 2.706,
              scoreAnswerDoc: -1,
            },
            {
              id: 3,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 2.366,
              scoreAnswerDoc: -1,
            },
          ],
          text: ' 根据输入的告警信息"充电枪温度探头短路",在备选告警信息集中找到匹配的条目:\n\n告警码: 205C\n告警信息: 充电枪温度探头短路  \n维修指引(运营商家端): 硬件问题,充电枪可能被损坏,联系技术支持指导现场操作\n远程维修指引(桩企): 指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀\n现场维修指引(桩企): 现场用测温枪测试实际温度,如果并无明显过温,推测温度采样问题,考虑温度传感器和CCU;如果确实过温,检查车和桩端充电接口是否有异物、磨损或烧蚀',
          scoreQueryAnswer: '-1',
          contentCheckLabel: 'Pass',
          contentCheckSuggestion: 'Pass',
          answerTook: 20686,
        },
      },
      {
        type: 'customer',
        content: {
          text: '充电枪温度探头短路',
          timestamp: 1709275147852,
        },
      },
      {
        type: 'robot',
        content: {
          message: 'streaming_end',
          timestamp: 1709275163245.881,
          sourceData: [
            {
              id: 0,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.827,
              scoreAnswerDoc: -1,
            },
            {
              id: 1,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.696,
              scoreAnswerDoc: -1,
            },
            {
              id: 2,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 2.706,
              scoreAnswerDoc: -1,
            },
            {
              id: 3,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 2.366,
              scoreAnswerDoc: -1,
            },
          ],
          text: ' 根据输入的告警信息"充电枪温度探头短路",在备选告警信息集中找到匹配的条目:\n\n告警码: 205C\n告警信息: 充电枪温度探头短路  \n维修指引(运营商家端): 硬件问题,充电枪可能被损坏,联系技术支持指导现场操作\n远程维修指引(桩企): 指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀\n现场维修指引(桩企): 现场用测温枪测试实际温度,如果并无明显过温,推测温度采样问题,考虑温度传感器和CCU;如果确实过温,检查车和桩端充电接口是否有异物、磨损或烧蚀',
          scoreQueryAnswer: '-1',
          contentCheckLabel: 'Pass',
          contentCheckSuggestion: 'Pass',
          answerTook: 15514,
        },
      },
      {
        type: 'customer',
        content: {
          text: '充电枪温度探头短路',
          timestamp: 1709275178285,
        },
      },
      {
        type: 'robot',
        content: {
          message: 'streaming_end',
          timestamp: 1709275192527.5166,
          sourceData: [
            {
              id: 0,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.827,
              scoreAnswerDoc: -1,
            },
            {
              id: 1,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.696,
              scoreAnswerDoc: -1,
            },
            {
              id: 2,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 2.706,
              scoreAnswerDoc: -1,
            },
            {
              id: 3,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 2.366,
              scoreAnswerDoc: -1,
            },
          ],
          text: ' 根据输入的告警信息"充电枪温度探头短路",在备选告警信息集中找到匹配的条目:\n\n告警码: 205C\n告警信息: 充电枪温度探头短路  \n维修指引(运营商家端): 硬件问题,充电枪可能被损坏,联系技术支持指导现场操作\n远程维修指引(桩企): 指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀\n现场维修指引(桩企): 现场用测温枪测试实际温度,如果并无明显过温,推测温度采样问题,考虑温度传感器和CCU;如果确实过温,检查车和桩端充电接口是否有异物、磨损或烧蚀',
          scoreQueryAnswer: '-1',
          contentCheckLabel: 'Pass',
          contentCheckSuggestion: 'Pass',
          answerTook: 14379,
        },
      },
      {
        type: 'customer',
        content: {
          text: '充电枪温度探头短路',
          timestamp: 1709275205902,
        },
      },
      {
        type: 'robot',
        content: {
          message: 'streaming_end',
          timestamp: 1709275220557.5981,
          sourceData: [
            {
              id: 0,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.827,
              scoreAnswerDoc: -1,
            },
            {
              id: 1,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.696,
              scoreAnswerDoc: -1,
            },
            {
              id: 2,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 2.706,
              scoreAnswerDoc: -1,
            },
            {
              id: 3,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 2.366,
              scoreAnswerDoc: -1,
            },
          ],
          text: ' 根据输入的告警信息"充电枪温度探头短路",在备选告警信息集中找到匹配的条目:\n\n告警码: 205C\n告警信息: 充电枪温度探头短路  \n维修指引(运营商家端): 硬件问题,充电枪可能被损坏,联系技术支持指导现场操作\n远程维修指引(桩企): 指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀\n现场维修指引(桩企): 现场用测温枪测试实际温度,如果并无明显过温,推测温度采样问题,考虑温度传感器和CCU;如果确实过温,检查车和桩端充电接口是否有异物、磨损或烧蚀',
          scoreQueryAnswer: '-1',
          contentCheckLabel: 'Pass',
          contentCheckSuggestion: 'Pass',
          answerTook: 14792,
        },
      },
      {
        type: 'customer',
        content: {
          text: '充电枪温度探头短路',
          timestamp: 1709275452055,
        },
      },
      {
        type: 'customer',
        content: {
          text: '充电枪温度探头短路',
          timestamp: 1709275530822,
        },
      },
      {
        type: 'robot',
        content: {
          message: 'streaming_end',
          timestamp: 1709275543896.3904,
          sourceData: [
            {
              id: 0,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.827,
              scoreAnswerDoc: -1,
            },
            {
              id: 1,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.696,
              scoreAnswerDoc: -1,
            },
            {
              id: 2,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 2.706,
              scoreAnswerDoc: -1,
            },
            {
              id: 3,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 2.366,
              scoreAnswerDoc: -1,
            },
          ],
          text: ' 根据输入的告警信息"充电枪温度探头短路",在备选告警信息集中找到匹配的条目:\n\n告警码: 205C\n告警信息: 充电枪温度探头短路  \n维修指引(运营商家端): 硬件问题,充电枪可能被损坏,联系技术支持指导现场操作\n远程维修指引(桩企): 指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀\n现场维修指引(桩企): 现场用测温枪测试实际温度,如果并无明显过温,推测温度采样问题,考虑温度传感器和CCU;如果确实过温,检查车和桩端充电接口是否有异物、磨损或烧蚀',
          scoreQueryAnswer: '-1',
          contentCheckLabel: 'Pass',
          contentCheckSuggestion: 'Pass',
          answerTook: 13215,
        },
      },
      {
        type: 'customer',
        content: {
          text: '充电枪温度探头短路',
          timestamp: 1709275615507,
        },
      },
      {
        type: 'robot',
        content: {
          message: 'streaming_end',
          timestamp: 1709275632225.358,
          sourceData: [
            {
              id: 0,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.827,
              scoreAnswerDoc: -1,
            },
            {
              id: 1,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 0.696,
              scoreAnswerDoc: -1,
            },
            {
              id: 2,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205C', '告警信息-CN': '充电枪温度探头短路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头短路时，持续5S，报充电枪温度探头短路故障', '维修指引(运营商家端)-CN': '硬件问题，充电枪可能被损坏，联系技术支持指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 2.706,
              scoreAnswerDoc: -1,
            },
            {
              id: 3,
              title: 'DC故障维修指引',
              titleLink: 'http://#',
              paragraph:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              sentence:
                "{'告警码': '205B', '告警信息-CN': '充电枪温度探头开路', '判断条件-CN': '当充电枪采集的温度值接近充电枪温度探头开路时，持续5S，报充电枪温度探头开路故障', '维修指引(运营商家端)-CN': '过温故障可能由软件误报和硬件故障造成，先进行软件复位，如果再次出现相同故障报警，联系客服指导现场操作', '远程维修指引(桩企)-CN': '指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀', '现场维修指引(桩企)-CN': '现场用测温枪测试实际温度，如果并无明显过温，推测温度采样问题，考虑温度传感器和CCU；如果确实过温，检查车和桩端充电接口是否有异物、磨损或烧蚀'}",
              scoreQueryDoc: 2.366,
              scoreAnswerDoc: -1,
            },
          ],
          text: ' 根据输入的告警信息"充电枪温度探头短路",在备选告警信息集中找到匹配的条目:\n\n告警码: 205C\n告警信息: 充电枪温度探头短路  \n维修指引(运营商家端): 硬件问题,充电枪可能被损坏,联系技术支持指导现场操作\n远程维修指引(桩企): 指导客户或现场人员检查车和桩端充电接口是否有异物、磨损或烧蚀\n现场维修指引(桩企): 现场用测温枪测试实际温度,如果并无明显过温,推测温度采样问题,考虑温度传感器和CCU;如果确实过温,检查车和桩端充电接口是否有异物、磨损或烧蚀',
          scoreQueryAnswer: '-1',
          contentCheckLabel: 'Pass',
          contentCheckSuggestion: 'Pass',
          answerTook: 16857,
        },
      },
    ],
  },
];

export default backup_convo;
