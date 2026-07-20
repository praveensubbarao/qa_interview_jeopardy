// AUTO-GENERATED — edit data/ files, then run: npm run build
// Sources: data/categories.json + data/questions/*.json

const CATEGORIES = [
  {
    "id": "ai-foundations",
    "label": "AI QE Foundations",
    "icon": "brain",
    "color": "green",
    "keywords": [
      "claude",
      "cursor",
      "copilot",
      "chatgpt",
      "openai",
      "gemini",
      "codium",
      "diffblue",
      "kubernetes",
      "snowflake",
      "go"
    ],
    "count": 20
  },
  {
    "id": "test-generation",
    "label": "Test Generation",
    "icon": "code-2",
    "color": "blue",
    "keywords": [
      "playwright",
      "selenium",
      "cypress",
      "webdriverio",
      "puppeteer",
      "appium",
      "espresso",
      "xcuitest",
      "detox",
      "jest",
      "mocha",
      "jasmine",
      "vitest",
      "nunit",
      "xunit",
      "pytest",
      "rspec",
      "junit",
      "postman",
      "rest assured",
      "karate",
      "supertest",
      "pact",
      "hoverfly",
      "claude",
      "cursor",
      "copilot",
      "chatgpt",
      "openai",
      "gemini",
      "codium",
      "diffblue",
      "dynatrace",
      "ruby"
    ],
    "count": 17
  },
  {
    "id": "self-healing",
    "label": "Self-Healing Automation",
    "icon": "wrench",
    "color": "violet",
    "keywords": [
      "playwright",
      "selenium",
      "cypress",
      "webdriverio",
      "puppeteer",
      "claude",
      "cursor",
      "copilot",
      "chatgpt",
      "openai",
      "gemini",
      "codium",
      "diffblue"
    ],
    "count": 12
  },
  {
    "id": "agentic-ai",
    "label": "Agentic AI",
    "icon": "bot",
    "color": "amber",
    "keywords": [
      "claude",
      "cursor",
      "copilot",
      "chatgpt",
      "openai",
      "gemini",
      "codium",
      "diffblue",
      "pact",
      "xray",
      "testrail"
    ],
    "count": 25
  },
  {
    "id": "data-defects",
    "label": "Data & Defects",
    "icon": "database",
    "color": "orange",
    "keywords": [
      "mongodb",
      "postgresql",
      "mysql",
      "redis",
      "dynamodb",
      "cassandra",
      "snowflake",
      "datadog",
      "new relic",
      "splunk",
      "dynatrace",
      "honeycomb",
      "jaeger",
      "grafana",
      "jest",
      "mocha",
      "jasmine",
      "vitest",
      "nunit",
      "xunit",
      "pytest",
      "rspec",
      "junit"
    ],
    "count": 34
  },
  {
    "id": "leadership",
    "label": "QA Leadership",
    "icon": "users",
    "color": "teal",
    "keywords": [
      "jenkins",
      "github actions",
      "gitlab ci",
      "circleci",
      "azure devops",
      "travis",
      "teamcity",
      "buildkite",
      "xray",
      "zephyr",
      "testrail",
      "allure",
      "reportportal",
      "qase",
      "go",
      "snowflake"
    ],
    "count": 44
  },
  {
    "id": "performance",
    "label": "Performance Testing",
    "icon": "activity",
    "color": "rose",
    "keywords": [
      "k6",
      "jmeter",
      "gatling",
      "locust",
      "artillery",
      "vegeta",
      "neoload",
      "loadrunner",
      "grafana",
      "datadog",
      "new relic",
      "splunk",
      "dynatrace",
      "honeycomb",
      "jaeger",
      "aws",
      "azure",
      "gcp",
      "kubernetes",
      "docker"
    ],
    "count": 41
  },
  {
    "id": "technology",
    "label": "Technology & Tools",
    "icon": "cpu",
    "color": "indigo",
    "keywords": [
      "typescript",
      "javascript",
      "python",
      "java",
      "c#",
      ".net",
      "go",
      "ruby",
      "kotlin",
      "swift",
      "react",
      "angular",
      "vue",
      "next.js",
      "spring",
      "fastapi",
      "django",
      "rails",
      "aws",
      "azure",
      "gcp",
      "terraform",
      "docker",
      "kubernetes",
      "helm",
      "playwright",
      "selenium",
      "cypress",
      "webdriverio",
      "puppeteer",
      "dynatrace"
    ],
    "count": 46
  },
  {
    "id": "compliance-governance",
    "label": "Compliance & Governance",
    "icon": "shield-check",
    "color": "cyan",
    "keywords": [
      "soc2",
      "soc 2",
      "ccpa",
      "gdpr",
      "hipaa",
      "pci dss",
      "pci-dss",
      "iso 27001",
      "iso27001",
      "fedramp",
      "nist",
      "cis controls",
      "owasp",
      "sox",
      "ferpa",
      "coppa",
      "glba",
      "dynatrace"
    ],
    "count": 27
  },
  {
    "id": "jmeter",
    "label": "JMeter",
    "icon": "gauge",
    "color": "sky",
    "keywords": [
      "jmeter",
      "thread group",
      "sampler",
      "listener",
      "assertion",
      "extractor",
      "csv data set",
      "correlation",
      "groovy",
      "jsr223",
      "beanshell",
      "influxdb",
      "grafana",
      "distributed",
      "jtl",
      "apdex",
      "throughput",
      "jdbc",
      "websocket",
      "kafka",
      "kubernetes",
      "docker",
      "jenkins",
      "grpc",
      "oauth2",
      "jwt"
    ],
    "count": 53
  },
  {
    "id": "python-for-qa",
    "label": "Python for QA",
    "icon": "terminal",
    "color": "emerald",
    "keywords": [
      "python",
      "pytest",
      "unittest",
      "conftest",
      "fixture",
      "parametrize",
      "mock",
      "patch",
      "requests",
      "selenium",
      "playwright",
      "beautifulsoup",
      "pandas",
      "faker",
      "factory_boy",
      "hypothesis",
      "coverage",
      "tox",
      "pydantic",
      "dataclass",
      "asyncio",
      "locust",
      "allure",
      "pytest-bdd",
      "behave"
    ],
    "count": 105
  },
  {
    "id": "javascript",
    "label": "JavaScript",
    "icon": "file-code",
    "color": "yellow",
    "keywords": [
      "javascript",
      "typescript",
      "var",
      "let",
      "const",
      "promise",
      "async",
      "await",
      "closure",
      "event loop",
      "hoisting",
      "prototype",
      "arrow function",
      "destructuring",
      "spread",
      "rest",
      "map",
      "filter",
      "reduce",
      "debounce",
      "throttle",
      "localstorage",
      "sessionstorage",
      "dom",
      "event bubbling",
      "memoization",
      "nan",
      "strict mode",
      "node",
      "browser"
    ],
    "count": 50
  },
  {
    "id": "playwright",
    "label": "Playwright",
    "icon": "theater",
    "color": "pink",
    "keywords": [
      "playwright",
      "typescript",
      "page object",
      "fixture",
      "locator",
      "auto-waiting",
      "trace viewer",
      "codegen",
      "browser context",
      "test runner",
      "expect",
      "screenshot",
      "network interception",
      "mobile emulation"
    ],
    "count": 40
  },
  {
    "id": "aws-cloud",
    "label": "AWS & Cloud",
    "icon": "cloud",
    "color": "fuchsia",
    "keywords": [
      "aws",
      "glue",
      "redshift",
      "lambda",
      "s3",
      "sagemaker",
      "step functions",
      "emr",
      "quicksight",
      "cloudwatch",
      "iam",
      "vpc",
      "ec2",
      "ecs",
      "fargate",
      "terraform",
      "cloudformation"
    ],
    "count": 45
  },
  {
    "id": "bdd-gherkin",
    "label": "BDD & Gherkin",
    "icon": "list-checks",
    "color": "lime",
    "keywords": [
      "bdd",
      "gherkin",
      "cucumber",
      "given",
      "when",
      "then",
      "scenario",
      "feature file",
      "step definition",
      "scenario outline",
      "background",
      "data table",
      "tags",
      "hooks",
      "behave",
      "specflow"
    ],
    "count": 35
  },
  {
    "id": "api-testing",
    "label": "API Testing",
    "icon": "arrow-left-right",
    "color": "purple",
    "keywords": [
      "rest",
      "graphql",
      "api",
      "postman",
      "swagger",
      "openapi",
      "contract testing",
      "pact",
      "rest assured",
      "supertest",
      "http",
      "status code",
      "authentication",
      "oauth",
      "jwt",
      "rate limiting",
      "pagination"
    ],
    "count": 39
  },
  {
    "id": "mabl",
    "label": "mabl",
    "icon": "zap",
    "color": "red",
    "keywords": [
      "mabl",
      "agentic testing",
      "active coverage",
      "deep quality context",
      "auto-healing",
      "adaptive assertions",
      "mcp server",
      "outer-loop",
      "inner-loop",
      "self-healing",
      "low-code testing",
      "agentic ai"
    ],
    "count": 25
  },
  {
    "id": "others",
    "label": "Others",
    "icon": "more-horizontal",
    "color": "slate",
    "keywords": [],
    "count": 51
  }
];

const QUESTIONS = [
  {
    "id": "f1",
    "category": "ai-foundations",
    "question": "What is the key difference between AI-assisted testing and agentic AI testing?",
    "options": [
      "AI-assisted tests APIs; agentic tests UIs automatically",
      "AI-assisted uses ML; agentic uses rule-based scripting",
      "AI-assisted is human-in-the-loop; agentic removes the human for routine decisions — humans review exceptions, not every step",
      "There is no difference — both terms describe the same testing approach"
    ],
    "answer": 2,
    "explanation": "AI-assisted saves authoring time; agentic changes the operating model. The practical difference is who makes the routine decisions — a human or the agent."
  },
  {
    "id": "f2",
    "category": "ai-foundations",
    "question": "What are the four components of an AI agent, and how do they map to QE?",
    "options": [
      "Perception, memory, reasoning, and action — mapping to spec ingestion, test history, gap analysis, and script generation",
      "Input, processing, output, and storage — mapping to requirements, test design, execution, and reporting",
      "Planning, execution, monitoring, and reporting — mapping to the four phases of a test cycle",
      "Model, prompt, tool, and evaluation — the core pillars of any LLM-based system"
    ],
    "answer": 0,
    "explanation": "Understanding this decomposition lets you design better agents and debug them when they fail — it is architectural thinking, not just tool knowledge."
  },
  {
    "id": "f3",
    "category": "ai-foundations",
    "question": "How do you test non-deterministic AI outputs where the same input does not always produce the same result?",
    "options": [
      "Run the same test 100 times and accept results if 95% pass",
      "Use property-based testing — assert the output satisfies properties rather than matching an exact value — combined with golden set evaluation",
      "Skip automated testing and rely entirely on manual review for AI outputs",
      "Use exact-match assertions on every run and flag any variance as a defect"
    ],
    "answer": 1,
    "explanation": "Properties might include: does the response contain required fields, is it within the expected domain, does it cite traceable sources. Golden sets detect quality drift over time."
  },
  {
    "id": "f4",
    "category": "ai-foundations",
    "question": "What is a golden set evaluation and what specific problem does it solve?",
    "options": [
      "A collection of high-priority tests selected by stakeholders as the mandatory regression suite",
      "A performance benchmark run of the fastest-executing tests used to set SLA targets",
      "A set of the highest-value test cases automatically identified by an ML prioritisation model",
      "A curated set of representative inputs with human-evaluated expected outputs, run regularly to detect model drift"
    ],
    "answer": 3,
    "explanation": "Golden set evaluation catches the gradual degradation of AI output quality that only shows up over time — invisible without measurement, which is why a baseline must be established at deployment."
  },
  {
    "id": "f5",
    "category": "ai-foundations",
    "question": "What is LLM-as-judge, and what critical step do most candidates miss when describing it?",
    "options": [
      "Using a secondary LLM to evaluate primary AI outputs at scale — the critical step is calibrating the judge model against human scores first",
      "Using a human panel to rate LLM outputs — the critical step is blinding reviewers to the model version",
      "Running an LLM against predefined compliance rules — the critical step is version-controlling the rule set",
      "Using an LLM to generate test assertions — the critical step is running assertions against a mocked environment"
    ],
    "answer": 0,
    "explanation": "If the judge model does not agree with human scores on the golden set, it is not a reliable judge for production evaluation — calibration is the guardrail most candidates skip."
  },
  {
    "id": "f6",
    "category": "ai-foundations",
    "question": "What is model drift and how do you detect it in a production AI system?",
    "options": [
      "Model drift is version skew between environments; detected by comparing model IDs in deployment manifests",
      "Model drift is increased API latency under load; detected by percentile response time monitoring",
      "Model drift is the gradual degradation of AI output quality over time; detected through scheduled golden set evaluations and production proxy metrics",
      "Model drift is when a model is retrained on stale data; detected by comparing training dataset timestamps"
    ],
    "answer": 2,
    "explanation": "Drift is invisible without measurement — a baseline must be established at deployment, not after the first complaint. Proxy metrics include user rejection rates and downstream error rates."
  },
  {
    "id": "f7",
    "category": "ai-foundations",
    "question": "How does prompt engineering relate to Quality Engineering — and what framing signals QE maturity to an interviewer?",
    "options": [
      "\"Prompts are configuration\" — they should be managed in environment variables like any other setting",
      "\"Prompts are documentation\" — they describe the intended AI behavior for future maintainers",
      "\"Prompts are code\" — version-controlled, reviewed, and tested with the same rigour as any software artifact",
      "\"Prompts are temporary\" — they change too frequently to warrant formal engineering practices"
    ],
    "answer": 2,
    "explanation": "Prompt engineering applies in two QE directions: prompting AI tools to generate better tests, and testing AI-powered products to validate their prompts produce safe, accurate, consistent outputs."
  },
  {
    "id": "f8",
    "category": "ai-foundations",
    "question": "What are the three testing layers for a RAG (Retrieval Augmented Generation) system?",
    "options": [
      "Unit, integration, and end-to-end — the standard three-tier testing pyramid adapted for AI systems",
      "Prompt testing, context testing, and output testing — matching the three stages of RAG processing",
      "Schema validation, load testing, and hallucination detection — covering structure, scale, and accuracy",
      "Retrieval quality (right documents fetched?), generation quality (context used correctly?), and end-to-end accuracy (final answer correct and traceable?)"
    ],
    "answer": 3,
    "explanation": "Each layer requires a different testing approach — NDCG metrics for retrieval, factual consistency checks for generation, and golden set evaluation for end-to-end accuracy."
  },
  {
    "id": "f9",
    "category": "ai-foundations",
    "question": "What are hallucinations in AI systems, and what industry-standard technique detects them?",
    "options": [
      "Random errors in AI outputs; detected by running the same query multiple times and checking consistency",
      "Outdated information in responses; detected by comparing against a real-time external knowledge base",
      "Confidently wrong outputs not grounded in source context; detected using a factual consistency check",
      "Off-topic responses that ignore the user's query; detected by keyword filtering and intent classification"
    ],
    "answer": 2,
    "explanation": "A factual consistency check passes the AI's output and source context to an evaluation model and asks whether every claim is supported — scoring consistency rather than exact match."
  },
  {
    "id": "f10",
    "category": "ai-foundations",
    "question": "What are the three layers of AI guardrails in a QE context, and what does each layer do?",
    "options": [
      "Rate limiting, authentication, and encryption — the standard security layers applied to AI APIs",
      "Syntax checking, semantic checking, and behavioral testing — validating structure, meaning, and behavior",
      "Input validation (query in scope?), output validation (response meets policy?), and monitoring (guardrails bypassed in production?)",
      "Unit tests, integration tests, and smoke tests — the standard test pyramid adapted for AI systems"
    ],
    "answer": 2,
    "explanation": "For AI QE tooling specifically, guardrails mean assertion quality gates — AI-generated tests must have meaningful assertions before entering the suite, with human review within one sprint."
  },
  {
    "id": "ai1",
    "category": "ai-foundations",
    "question": "What is the main responsibility of a Quality Engineering Manager in defining and integrating AI-first mindset in test engineering lifecycle?",
    "options": [
      "Designing automation frameworks",
      "Incorporating AI tools into test automation workflows",
      "Leading quality initiatives aligned to project and product needs",
      "Driving products from inception to release through technical and thought leadership on quality"
    ],
    "answer": 2,
    "explanation": "The correct answer is the option: 'Incorporating AI tools into test automation workflows'. This shows practical knowledge of applying AI-assisted testing in the test engineering lifecycle, as required by the job description."
  },
  {
    "id": "ai2",
    "category": "ai-foundations",
    "question": "What would you do to prevent regressions from reaching production when integrating automated tests into CI/CD pipelines?",
    "options": [
      "Define quality gates within deployment pipelines",
      "Run manual tests before deploying to production",
      "Use AI tools for test generation and execution",
      "Monitor pipeline health and test flakiness"
    ],
    "answer": 0,
    "explanation": "The correct answer is option: 'Define quality gates within deployment pipelines'. This shows practical knowledge of integrating automated tests into CI/CD pipelines, enforcing quality gates to prevent regressions."
  },
  {
    "id": "ai3",
    "category": "ai-foundations",
    "question": "In Jest, what type of module does the `expect.extend` function expect as its first argument to extend the set of matchers?",
    "options": [
      "module",
      "function",
      "string",
      "regexp"
    ],
    "answer": 1,
    "explanation": "The `expect.extend` function expects a function as its first argument, which provides the new matcher."
  },
  {
    "id": "ai4",
    "category": "ai-foundations",
    "question": "What is the correct command in Playwright to wait for a specific element on the page, allowing it to reload the page automatically when the element becomes available?",
    "options": [
      "waitForSelector(), then reload();",
      "waitForLoadState('networkidle2'), then reload();",
      "await page.goto('https://example.com'); then page.reload();",
      "await page.waitForLoadState('networkidle0')"
    ],
    "answer": 3,
    "explanation": "The correct command in Playwright to wait for a specific element on the page and automatically reload the page when the element becomes available is `page.waitForLoadState('networkidle0')`. This method allows the page to reload when the network idle state reaches zero."
  },
  {
    "id": "ai5",
    "category": "ai-foundations",
    "question": "How does the `kubernetes` API support rolling updates of a deployment, and what is the primary mechanism for achieving this?",
    "options": [
      "Rollbacks to previous versions",
      "Using the `rollingUpdate` field in the deployment spec",
      "Sending SIGTERM signals to pods that are not yet replaced",
      "Updating the image field in the deployment spec"
    ],
    "answer": 1,
    "explanation": "The primary mechanism for rolling updates of a deployment is the use of the `rollinUpdate` field in the deployment specification. When you update this field, Kubernetes automatically updates the pods that are not yet replaced."
  },
  {
    "id": "ai6",
    "category": "ai-foundations",
    "question": "What type of data validation is required to ensure correct meter read synchronization in smart grids?",
    "options": [
      "SQL",
      "Snowflake",
      "ETL",
      "Data Mining"
    ],
    "answer": 1,
    "explanation": "The question tests the candidate's proficiency in using SQL or Snowflake for back-end data validation."
  },
  {
    "id": "ai7",
    "category": "ai-foundations",
    "question": "In the context of AI-assisted testing, what is the primary challenge when developing robust unit tests for deep learning models?",
    "options": [
      "Data augmentation",
      "Label smearing",
      "Unbounded output spaces",
      "Non-differentiable loss functions"
    ],
    "answer": 1,
    "explanation": "The correct answer is 'Label smearing'. In AI-assisted testing, one of the main challenges when developing robust unit tests for deep learning models is handling label smear, which refers to the phenomenon where a model's performance degrades due to subtle changes in input data that do not affect the original labels."
  },
  {
    "id": "ai8",
    "category": "ai-foundations",
    "question": "When verifying the correctness of AI-assisted test results, which approach would you use to critically evaluate these outputs?",
    "options": [
      "Source-checking the AI-assisted output against a gold standard",
      "Peer-reviewing AI-assisted findings with a colleague",
      "Applying manual test cases to validate AI-assisted test results",
      "Using automated testing frameworks to re-test AI-generated data"
    ],
    "answer": 0,
    "explanation": "You would use source-checking to verify the accuracy of the AI-assisted output against a gold standard, ensuring that the results are reliable and trustworthy."
  },
  {
    "id": "ai9",
    "category": "ai-foundations",
    "question": "In Snowflake, what command would you use to create a file format statement that describes a CSV file with header rows?",
    "options": [
      "CREATE FILE FORMAT 'CSV WITH HEADER';",
      "CREATE FILE FORMAT 'CSV NO_HEADER';",
      "CREATE FILE FORMAT 'JSON WITH HEARTHER';",
      "CREATE FILE FORMAT 'AVRO NO_HEADER';"
    ],
    "answer": 0,
    "explanation": "Snowflake's file format statement needs to specify the header row behavior. This command allows for the use of CSV files with header rows."
  },
  {
    "id": "ai10",
    "category": "ai-foundations",
    "question": "What is the term for the subset of reinforcement learning research that focuses on developing efficient algorithms for training AI agents to perform specific tasks, as applied in CrewAI?",
    "options": [
      "Exploration-Exploitation Trade-off",
      "Asynchronous Advantage Actor-Critic",
      "Value Function Approximation",
      "Behavioral Cloning with TD-Lambda"
    ],
    "answer": 1,
    "explanation": "This term refers to the research focus on efficient algorithms for reinforcement learning, such as Asynchronous Advantage Actor-Critic."
  },
  {
    "id": "tg1",
    "category": "test-generation",
    "question": "What are the five stages of an autonomous test generation pipeline?",
    "options": [
      "Ingestion, scenario identification, script generation, static review, and execution with triage",
      "Planning, design, implementation, execution, and reporting — the standard SDLC phases adapted for AI",
      "Parsing, templating, compilation, running, and alerting — the technical stages of code generation",
      "Discovery, analysis, synthesis, validation, and deployment — the AI research pipeline adapted for QE"
    ],
    "answer": 0,
    "explanation": "At Care.com this pipeline reduced manual authoring time by 60% across 40 engineers — the key was making the output match team conventions, not generic AI boilerplate."
  },
  {
    "id": "tg2",
    "category": "test-generation",
    "question": "What are the three main risks of autonomous test generation?",
    "options": [
      "High cost, slow execution, and framework incompatibility — the operational risks of AI integration",
      "Hallucinated confidence (tests that pass but assert nothing), coverage illusion (high count, low real coverage), and maintenance debt (tests nobody understands)",
      "False negatives, flaky tests, and network timeouts — the standard execution risks amplified at scale",
      "Merge conflicts, version mismatch, and code duplication — the source control risks of AI-generated code"
    ],
    "answer": 1,
    "explanation": "A smaller trusted suite beats a large doubted one — 200 tests the team believes in beats 2,000 they have stopped looking at."
  },
  {
    "id": "tg3",
    "category": "test-generation",
    "question": "What is the most effective technique for ensuring AI-generated tests match a team's coding conventions?",
    "options": [
      "Run a linter after generation and auto-fix style issues — enforcing format without slowing the pipeline",
      "Ask developers to manually rewrite generated tests to match conventions as part of code review",
      "Use a code formatter to standardise all generated output to a neutral style",
      "Provide few-shot examples — actual tests from the suite — in the generation prompt so the model learns style from examples, not instructions"
    ],
    "answer": 3,
    "explanation": "Include three exemplar tests (happy path, negative, edge case) from the actual suite. The model learns naming convention, assertion style, and structure from examples rather than defaulting to generic boilerplate."
  },
  {
    "id": "tg4",
    "category": "test-generation",
    "question": "What is the correct approach when a requirement is ambiguous or incomplete before test generation?",
    "options": [
      "Generate for the happy path only and skip edge cases until specifications are finalized",
      "Add a spec quality gate that scores requirements for clarity and returns ambiguous specs to authors before generation begins",
      "Proceed with generation and flag the output as low-confidence so reviewers know to scrutinize it",
      "Require developers to write test cases manually for any ambiguous requirement before AI generation runs"
    ],
    "answer": 1,
    "explanation": "A clarity gate prevents the most dangerous failure: tests confidently covering the wrong behavior because the spec was misinterpreted. It also improves upstream requirement quality over time."
  },
  {
    "id": "tg5",
    "category": "test-generation",
    "question": "What is few-shot prompting and why does it dramatically improve first-generation test quality?",
    "options": [
      "Sending multiple prompts in rapid succession to improve output accuracy through iteration",
      "Providing concrete examples of the desired output before asking the model to generate — the model learns style from examples rather than instructions",
      "Limiting the LLM's context window to only the most relevant few sentences to improve focus",
      "Prompting the model with only a few words for maximum processing speed and lowest token cost"
    ],
    "answer": 1,
    "explanation": "Few-shot examples from the actual suite reduce human review burden because the output is already close to what the team expects — it is the difference between 95% acceptance and 60% rejection."
  },
  {
    "id": "tg6",
    "category": "test-generation",
    "question": "On what four dimensions do you measure the quality of AI-generated test cases?",
    "options": [
      "Execution speed, pass rate, code coverage percentage, and line count — the standard QA metrics applied to generation",
      "Token cost, generation time, format compliance, and file size — the efficiency metrics for AI test pipelines",
      "Correctness, assertion depth, locator stability, and coverage additionality — each measured to catch a different failure mode",
      "Number generated, categories covered, review turnaround time, and defect rate — the throughput and quality balance"
    ],
    "answer": 2,
    "explanation": "A static analysis agent automates the first three dimensions before tests enter the review queue; human acceptance rate tracks overall quality and signals when prompts need tuning."
  },
  {
    "id": "tg7",
    "category": "test-generation",
    "question": "What is the difference between test case generation and test script generation, and why does the two-stage approach matter?",
    "options": [
      "Test cases are written by testers; test scripts are written by developers — no technical difference in what they produce",
      "Test cases cover UI; test scripts cover APIs — splitting by test layer rather than abstraction level",
      "Test cases produce human-readable scenarios; test scripts produce executable code — validated with stakeholders before being converted to code",
      "There is no meaningful difference — \"test case\" and \"test script\" are interchangeable terms in modern QA"
    ],
    "answer": 2,
    "explanation": "Generating cases first and validating them with stakeholders before generating scripts avoids the most common AI QE mistake: going directly from spec to code and skipping the validation step."
  },
  {
    "id": "tg8",
    "category": "test-generation",
    "question": "When test generation is integrated into a CI/CD workflow, should the gate be advisory or blocking at the PR stage?",
    "options": [
      "Always blocking — no merge should be allowed without complete test coverage for the changed code",
      "Always advisory — tests should never be allowed to block development delivery",
      "Advisory at the PR stage — tests flag gaps without blocking merges; follow-up tickets track the gap",
      "Blocking for frontend changes; advisory for backend changes where tests are harder to generate"
    ],
    "answer": 2,
    "explanation": "An advisory gate prevents delivery being held hostage to generation quality, while follow-up tickets ensure gaps are tracked and addressed rather than silently ignored."
  },
  {
    "id": "tg9",
    "category": "test-generation",
    "question": "What is Chain-of-Thought prompting and when is it most useful for QE test generation?",
    "options": [
      "Chaining multiple prompts together in sequence to build up context for complex generation tasks",
      "Asking the LLM to reason through failure modes step-by-step before generating test cases — best for complex, high-risk scenarios",
      "Providing a chain of test steps for the model to convert into executable automation code",
      "Connecting multiple AI agents in sequence so each reviews the previous agent's output"
    ],
    "answer": 1,
    "explanation": "Chain-of-Thought produces more thorough edge case coverage at the cost of higher token usage — use it for complex scenarios and standard prompting for routine happy-path generation."
  },
  {
    "id": "tg10",
    "category": "test-generation",
    "question": "How should ownership and maintenance of AI-generated tests be structured?",
    "options": [
      "Automatically maintained by the same AI system that generated them — no human involvement after generation",
      "Owned by the QA lead who governs the entire test generation and maintenance process",
      "Left unowned — anyone can modify AI-generated tests as needed when they break",
      "Tagged as drafts; a named engineer formally adopts each test within one sprint, taking full ownership"
    ],
    "answer": 3,
    "explanation": "If AI maintains everything and humans maintain nothing, engineers stop understanding the suite and cannot debug failures when the AI cannot self-heal them. Adoption rate is itself a monthly quality signal."
  },
  {
    "id": "te1",
    "category": "test-generation",
    "question": "What is Playwright primarily used for?",
    "options": [
      "Unit testing",
      "End-to-end browser testing",
      "Load testing",
      "API testing"
    ],
    "answer": 1,
    "explanation": "Playwright is a browser automation framework for end-to-end testing."
  },
  {
    "id": "te2",
    "category": "test-generation",
    "question": "What technology would you use to perform API testing if embedded on a sprint team as an individual contributor?",
    "options": [
      "Selenium",
      "Playwright",
      ".NET Core",
      "Azure DevOps"
    ],
    "answer": 1,
    "explanation": "The correct answer is option: 'Playwright'. This shows practical knowledge of using preferred technologies, such as Playwright or C#, in API testing."
  },
  {
    "id": "te3",
    "category": "test-generation",
    "question": "What is an effective technique for enhancing automation efficiency, reliability, and maintainability in a test automation framework?",
    "options": [
      "Code refactoring",
      "Automated testing of the automation scripts",
      "Integrating code reviews with CI/CD pipelines",
      "Analyzing and optimizing workflow processes"
    ],
    "answer": 3,
    "explanation": "Analyzing and optimizing workflow processes helps identify potential bottlenecks, reduces manual intervention, and streamlines automation tasks. This is a key aspect of championing automated testing best practices across teams."
  },
  {
    "id": "te4",
    "category": "test-generation",
    "question": "When integrating GitHub Copilot with a Playwright test, which option correctly sets the number of concurrent tasks?",
    "options": [
      "Task queue capacity",
      "Worker pool size",
      "Task timeout duration",
      "Concurrency level"
    ],
    "answer": 1,
    "explanation": "The 'worker pool size' configuration option in GitHub Copilot controls the number of concurrent tasks that can be executed simultaneously."
  },
  {
    "id": "te5",
    "category": "test-generation",
    "question": "What is a key consideration when designing a cloud architecture discussion for a proof-of-concept that involves multiple PoCs?",
    "options": [
      "Interoperability between different cloud services",
      "Security measures for data transfer and storage",
      "Scalability to accommodate varying load scenarios",
      "Ease of deployment for DevOps teams"
    ],
    "answer": 2,
    "explanation": "When designing a cloud architecture discussion for a proof-of-concept, scalability is crucial as it ensures the PoC can handle varying loads and meet the customer's needs. This concept is relevant to Dynatrace's product offerings and is an important consideration when collaborating with sales representatives."
  },
  {
    "id": "te6",
    "category": "test-generation",
    "question": "What is the primary purpose of the Functional Test Lead role at National Grid?",
    "options": [
      "Define test strategies for cloud architecture",
      "Ensure 100% billing accuracy across residential and industrial customer classes",
      "Lead end-to-end functional testing strategy for Front Office and Back Office systems",
      "Develop comprehensive test scenarios and acceptance criteria for utility regulatory requirements"
    ],
    "answer": 2,
    "explanation": "According to the job description, the Functional Test Lead role is responsible for leading the end-to-end functional testing strategy for Front Office (Customer Portals, CRM) and Back Office (Billing, Invoicing, Financials) systems."
  },
  {
    "id": "te7",
    "category": "test-generation",
    "question": "To set up automated tests for a pact service, what is the correct way to specify the consumer contract?",
    "options": [
      "By using the `pact configure` command",
      "By editing the `pact.json` file directly",
      "By creating a custom Ruby script",
      "By using a third-party tool like Codeception"
    ],
    "answer": 0,
    "explanation": "The correct approach to setting up automated tests for a pact service is by using the `pact configure` command, which allows you to specify the consumer contract and generate the necessary files."
  },
  {
    "id": "sh1",
    "category": "self-healing",
    "question": "What problem does self-healing test automation actually solve — and why is the correct framing important in interviews?",
    "options": [
      "Test execution speed — reducing overall CI/CD pipeline duration by removing slow manual test steps",
      "Code coverage gaps — automatically generating tests for uncovered paths when coverage drops below a threshold",
      "Maintenance cost — 30–50% of engineering time spent fixing broken tests rather than writing new coverage",
      "Flaky test detection — identifying tests with intermittent failures before they block the pipeline"
    ],
    "answer": 2,
    "explanation": "Most candidates say \"self-healing fixes broken locators.\" The correct answer is \"self-healing solves the maintenance cost problem.\" Lead with the business problem, not the technical mechanism."
  },
  {
    "id": "sh2",
    "category": "self-healing",
    "question": "What are the five categories of test failures and the correct healing strategy for assertion failures specifically?",
    "options": [
      "Assertion failures should be auto-fixed — the AI updates the expected value to match the actual output",
      "Assertion failures should be retried with a longer timeout — the value may change after additional processing",
      "Assertion failures should trigger a rollback — the deployment that caused the assertion mismatch is reverted automatically",
      "Assertion failures should always be escalated to human review — they are potential real bugs and must never be auto-fixed"
    ],
    "answer": 3,
    "explanation": "If expected value no longer matches actual, that is the definition of a potential real bug. Auto-fixing the assertion would suppress a genuine defect signal — this is the most important limit of self-healing."
  },
  {
    "id": "sh3",
    "category": "self-healing",
    "question": "What happens after a self-healing fix is applied — and why is this step critical?",
    "options": [
      "The fix is immediately committed to the repository and the pipeline continues without re-running the test",
      "A human engineer reviews the fix within 24 hours before the test is allowed to re-run",
      "The healed test re-runs to validate the fix did not create a false positive — if it passes, the fix is committed; if not, it escalates to human review",
      "The test is quarantined for 48 hours to monitor for recurrence before being readmitted to the suite"
    ],
    "answer": 2,
    "explanation": "The re-run validation step is what most candidates miss. Without it, a self-healing system may create false positives — tests that pass after healing while the underlying issue remains."
  },
  {
    "id": "sh4",
    "category": "self-healing",
    "question": "What is a self-healing learning loop and what quality signal tells you it is working?",
    "options": [
      "A developer feedback loop where engineers rate healing decisions — tracked by feedback response rate",
      "A retraining pipeline that continuously fine-tunes the healing model — tracked by model accuracy score",
      "A vector database storing successful healing decisions; future similar failures retrieve the known fix — tracked by decreasing LLM call rate over time",
      "A monitoring loop that checks system health — tracked by uptime percentage of the healing infrastructure"
    ],
    "answer": 2,
    "explanation": "As the loop matures, the LLM becomes the fallback for novel failures rather than the primary path. If LLM call rate stays high, the failures are not accumulating reusable patterns — a structural instability worth investigating."
  },
  {
    "id": "sh5",
    "category": "self-healing",
    "question": "How does API self-healing fundamentally differ from UI self-healing?",
    "options": [
      "API healing uses machine learning; UI healing uses rule-based pattern matching for element discovery",
      "API healing is about contract governance — detecting schema divergence; UI healing is about element discovery — finding alternative stable locators",
      "API healing is manual; UI healing is automated because locator changes are more frequent and predictable",
      "API healing requires a separate tool; UI healing is built into modern test frameworks like Playwright"
    ],
    "answer": 1,
    "explanation": "API failures are typically schema changes, auth token expiry, or service unavailability — requiring contract validation rather than alternative selector discovery."
  },
  {
    "id": "sh6",
    "category": "self-healing",
    "question": "What is the technical process of the self-healing diagnostic system from failure to fix?",
    "options": [
      "Retry three times with exponential backoff → if still failing, quarantine the test → alert the QA team",
      "Check the test log → compare to previous successful run → apply the most recent passing test's locators",
      "Capture DOM snapshot, network trace, logs, screenshot → LLM classifies root cause → suggested fix is applied → test re-runs to validate",
      "Match the failure to a known error pattern → apply the pre-defined fix from the healing rule library → commit automatically"
    ],
    "answer": 2,
    "explanation": "The LLM classifier returns both a category and a suggested fix — for selector failures, alternative locators using ARIA role and visible text; for timing, a polling wait condition."
  },
  {
    "id": "sh7",
    "category": "self-healing",
    "question": "What is the most important evaluation criterion when assessing commercial self-healing tools?",
    "options": [
      "Price and vendor reputation — the total cost of ownership over a 3-year contract",
      "Dashboard quality and real-time monitoring capabilities for executive reporting",
      "Framework compatibility — the tool must integrate with your existing Playwright/Selenium setup without requiring a full migration",
      "Cloud provider support — the tool must work on AWS, Azure, and GCP to avoid vendor lock-in"
    ],
    "answer": 2,
    "explanation": "Framework compatibility is the first gate — before evaluating failure category coverage, false positive rates, or audit trails. A great tool that requires full framework migration has a hidden cost that often exceeds its benefit."
  },
  {
    "id": "sh8",
    "category": "self-healing",
    "question": "What is the primary ROI metric for self-healing automation, and what secondary metric signals a negative ROI scenario?",
    "options": [
      "Primary: number of tests automatically healed per sprint; negative ROI signal: fewer healed tests than expected",
      "Primary: reduction in CI/CD pipeline duration; negative ROI signal: pipeline times increase after implementation",
      "Primary: engineering hours reclaimed from fixing broken tests; negative ROI signal: high false positive rate — real bugs being suppressed",
      "Primary: decrease in production defects; negative ROI signal: defect escape rate increases after implementation"
    ],
    "answer": 2,
    "explanation": "Multiply the reclaimed engineering hours by average hourly rate for a dollar figure. A high false positive rate — where real bugs are suppressed as healed tests — converts positive ROI to negative."
  },
  {
    "id": "se1",
    "category": "self-healing",
    "question": "When using GitHub Copilot in a Playwright integration test, what should you use to specify the AI-driven code suggestions for your tests?",
    "options": [
      "Python decorators",
      "Java annotations",
      "TypeScript type hints",
      "JavaScript comments"
    ],
    "answer": 0,
    "explanation": "GitHub Copilot leverages natural language processing (NLP) to suggest code completions. In a Playwright integration test, you would use Python decorators for specifying AI-driven code suggestions."
  },
  {
    "id": "se2",
    "category": "self-healing",
    "question": "What is the primary purpose of performing a rolling upgrade of a container orchestration platform during a self-healing automation process?",
    "options": [
      "ensures high availability",
      "provides backwards compatibility",
      "minimizes downtime risk",
      "reduces operational complexity"
    ],
    "answer": 2,
    "explanation": "The correct answer minimizes downtime risk, as rolling upgrades are designed to avoid single points of failure and ensure continuous service delivery during the upgrade process."
  },
  {
    "id": "se3",
    "category": "self-healing",
    "question": "What approach would you use to drive the quality strategy for large-scale, mission-critical utility systems in this role?",
    "options": [
      "Test Pyramid",
      "Shift-Left Testing",
      "Behavior-Driven Development (BDD)",
      "Technical Debt Reduction"
    ],
    "answer": 1,
    "explanation": "As a Functional Test Lead, implementing 'Shift-Left Testing' would involve moving some of the testing efforts closer to the beginning of the software development process, enabling catch-and-fix early on and reducing overall rework."
  },
  {
    "id": "se4",
    "category": "self-healing",
    "question": "In self-healing automation, what is the primary purpose of creating a quality signal that tells you when it's working?",
    "options": [
      "To measure team velocity",
      "To monitor defect density",
      "To indicate when the learning loop has converged",
      "To track project burndown"
    ],
    "answer": 2,
    "explanation": "The explanation is about the self-healing concept, where it highlights the importance of quality signals to monitor progress. A quality signal tells you that the learning loop has converged, implying that the self-healing fix is effective."
  },
  {
    "id": "ag1",
    "category": "agentic-ai",
    "question": "When should you build a multi-agent QE system rather than a single agent?",
    "options": [
      "Always — multi-agent systems are architecturally superior to single agents for all QE tasks",
      "When the team has more than 10 engineers; single agents are only sufficient for smaller teams",
      "Multi-agent for cloud environments; single agent for on-premises infrastructure",
      "When tasks benefit from specialisation, require independent validation between stages, and need failure isolation — not to signal sophistication"
    ],
    "answer": 3,
    "explanation": "Complexity should match the problem. A single agent suffices for focused tasks like \"generate tests for this one ticket\" — specialist agents add value when the pipeline stages benefit from being independently owned and verified."
  },
  {
    "id": "ag2",
    "category": "agentic-ai",
    "question": "Why would you choose LangGraph over CrewAI for a production QE pipeline?",
    "options": [
      "LangGraph is open source while CrewAI requires a paid license for production use",
      "LangGraph runs faster because it uses fewer API calls per workflow step",
      "LangGraph has better native integrations with Jira and TestRail than CrewAI",
      "LangGraph offers explicit state management, conditional edges for branching on failure, and a graph model mapping naturally to test lifecycle stages"
    ],
    "answer": 3,
    "explanation": "CrewAI is better for rapid POCs and demos — the \"crew of specialists\" metaphor is immediately understandable. LangGraph is the choice for something that needs to run reliably at 2am in a CI pipeline."
  },
  {
    "id": "ag3",
    "category": "agentic-ai",
    "question": "What is MCP (Model Context Protocol) and why does it improve AI test generation quality?",
    "options": [
      "A model compression protocol that reduces LLM token usage in production deployments",
      "A security framework for encrypting messages between AI agents and external APIs",
      "A testing framework specifically designed for validating multi-model AI pipelines",
      "A standardised protocol allowing AI agents to connect to external tools (Jira, Confluence, TestRail) so they have live structured context rather than stale copy-pasted information"
    ],
    "answer": 3,
    "explanation": "Generation quality is substantially better than prompt-only approaches because the agent's context is always current — it reads requirements, specs, and existing coverage in real time."
  },
  {
    "id": "ag4",
    "category": "agentic-ai",
    "question": "What three controls prevent agent loops and runaway costs in a production agentic QE system?",
    "options": [
      "Rate limiting, circuit breakers, and timeout configurations — the standard API resilience patterns",
      "Human review gates, approval workflows, and cost alerts — keeping humans in control of all agent actions",
      "Hard iteration cap, token budget monitor, and progress assertion — detecting when an agent is stuck and escalating before costs accumulate",
      "Memory limits, CPU throttling, and parallel execution controls — infrastructure-level guardrails"
    ],
    "answer": 2,
    "explanation": "An unguarded agentic system on a broken task can run indefinitely and generate meaningful cloud costs. The progress assertion — requiring measurable progress after each step — catches loops the other two may miss."
  },
  {
    "id": "ag5",
    "category": "agentic-ai",
    "question": "At what three levels do you test an agentic QE system itself?",
    "options": [
      "Functional testing, regression testing, and performance testing — the standard software QA pyramid applied to agents",
      "Unit testing of tool calls, integration testing of agent handoffs, and end-to-end golden set evaluation with adversarial inputs",
      "Developer testing, QA testing, and user acceptance testing — the standard release validation workflow",
      "Static analysis, dynamic analysis, and runtime monitoring — covering code, execution, and production behavior"
    ],
    "answer": 1,
    "explanation": "The system should fail loudly and escalate when uncertain, not silently produce low-quality output. Adversarial inputs — ambiguous specs, malformed data — validate graceful degradation."
  },
  {
    "id": "ag6",
    "category": "agentic-ai",
    "question": "What is the key difference between a tool-use agent and a reasoning agent in QE?",
    "options": [
      "Tool-use agents work offline; reasoning agents require internet connectivity for real-time data",
      "Tool-use agents are for UI testing; reasoning agents are for API testing",
      "Tool-use agents are cheaper; reasoning agents are more accurate but always require human review before acting",
      "Tool-use agents call predefined tools with the LLM deciding which to use; reasoning agents plan multi-step before acting — suited for design tasks, not execution tasks"
    ],
    "answer": 3,
    "explanation": "Match cognitive overhead to task complexity. Tool-use for execution (run test, file bug, update ticket); reasoning for design (analyse testability gaps, design test strategy for a feature)."
  },
  {
    "id": "ag7",
    "category": "agentic-ai",
    "question": "How should model version changes be handled in a production agentic QE system?",
    "options": [
      "Always use the \"latest\" model alias to automatically benefit from provider improvements without any action required",
      "Upgrade models immediately when the provider announces a new version to stay current",
      "Let each team independently choose which model version to use based on their specific use case",
      "Pin model versions explicitly; run golden set evaluation before upgrading; treat model upgrades like any dependency upgrade — tested in staging, validated against benchmarks"
    ],
    "answer": 3,
    "explanation": "Pinning to a specific version (e.g. claude-sonnet-4-6) prevents a provider model update from silently changing agent behavior overnight — which would be invisible without a golden set evaluation."
  },
  {
    "id": "ag8",
    "category": "agentic-ai",
    "question": "What is Claude Code and how would you apply it in a QE workflow?",
    "options": [
      "A cloud-based test execution platform that uses AI to analyse and categorise test results",
      "A Claude-powered code review tool that checks assertion quality in pull requests",
      "A visual test recorder that converts browser interactions into Playwright scripts automatically",
      "Anthropic's terminal-based agentic coding tool; used for gap analysis, PR-triggered test generation, and self-healing loops — operating directly inside the codebase"
    ],
    "answer": 3,
    "explanation": "Claude Code reads files, writes code, and runs commands without a human triggering each step — making it suited for autonomous PR-level workflows where a developer shouldn't have to prompt it manually."
  },
  {
    "id": "ag9",
    "category": "agentic-ai",
    "question": "What makes a successful 2-week AI QE proof-of-concept?",
    "options": [
      "Covers as many use cases as possible in the two weeks to demonstrate the breadth of AI QE capability",
      "Uses a demo environment to avoid any risk to production code, data, or team workflows",
      "Targets one narrow high-value use case on real production code; measures time, quality, and adoption rate before and after",
      "Focuses on generating the maximum number of test cases as the primary success metric"
    ],
    "answer": 2,
    "explanation": "Neutral results across all three metrics indicate the wrong starting use case, not a failed approach. Real data from a pilot converts sceptics who would not believe a projection."
  },
  {
    "id": "ag10",
    "category": "agentic-ai",
    "question": "How do you explain agentic AI QE ROI to a non-technical executive?",
    "options": [
      "Explain the technical architecture in detail so they can make a fully informed investment decision",
      "Focus on the competitive advantage of being an AI-first QE organization ahead of industry peers",
      "Show the total number of tests generated per sprint as the primary quantitative ROI metric",
      "Lead with the business outcome (\"2 days → 2 hours automatically\"), then connect to metrics they own — release frequency, defect escape rate, time to market"
    ],
    "answer": 3,
    "explanation": "Leadership does not need to understand how the system works — they need to see the business outcome it drives. Automated dashboards showing quality ROI in real time are more persuasive than any slide deck."
  },
  {
    "id": "ag11",
    "category": "agentic-ai",
    "question": "What is the recommended approach for designing innovative testing strategies in a product-aligned operating model, according to this job description?",
    "options": [
      "Shift-left approaches",
      "Shift-right practices",
      "GenAI-enhanced testing",
      "Test data management"
    ],
    "answer": 1,
    "explanation": "The correct answer is 'shift-right practices', citing the mention of 'establish and monitor QE metrics' and 'introduce shift-right practices, including observability, synthetic monitoring, and production-quality validation'."
  },
  {
    "id": "ag12",
    "category": "agentic-ai",
    "question": "In GitHub Copilot, which AI-driven feature allows you to generate natural language test scenarios from a simple API documentation?",
    "options": [
      "Code Completion",
      "API Documentation Analysis",
      "Test Data Generation",
      "Intelligent Testing"
    ],
    "answer": 2,
    "explanation": "GitHub Copilot's Test Data Generation feature leverages AI to analyze API documentation and generate high-quality, relevant test scenarios. This allows for more efficient and effective testing."
  },
  {
    "id": "ag13",
    "category": "agentic-ai",
    "question": "What strategy should you use to prioritize feature development in an agentic AI system that handles complex, interconnected scenarios?",
    "options": [
      "Hierarchical prioritization",
      "Weighted scoring",
      "Heuristics-based selection",
      "Causal graph analysis"
    ],
    "answer": 3,
    "explanation": "Causal graph analysis takes into account the interdependencies between features and prioritizes them based on their impact on the overall system."
  },
  {
    "id": "ag14",
    "category": "agentic-ai",
    "question": "Which of the following test frameworks is most suitable for managing User Acceptance Testing (UAT) and regression suites in the given Functional Test Lead role?",
    "options": [
      "Testrail",
      "XRAY",
      "JIRA",
      "Behave"
    ],
    "answer": 2,
    "explanation": "The explanation is based on the job description, which mentions XRAY as a testing infrastructure tool that the candidate should be an expert-level user of."
  },
  {
    "id": "ag15",
    "category": "agentic-ai",
    "question": "When implementing Pact, what contract testing feature allows you to verify API calls based on HTTP headers?",
    "options": [
      "Consumer Data Tests",
      "Provider Verifications",
      "Request-Response Matches",
      "Test Suites with Conditional Logic"
    ],
    "answer": 1,
    "explanation": "Pact's Provider Verifications feature enables the verification of API calls based on HTTP headers."
  },
  {
    "id": "ag16",
    "category": "agentic-ai",
    "question": "What is the core difference between traditional AI and agentic AI in quality engineering?",
    "options": [
      "Traditional AI uses larger language models while agentic AI uses smaller, faster models",
      "Traditional AI runs in the cloud while agentic AI runs locally on developer machines",
      "Traditional AI is a tool that produces output from input; agentic AI perceives, decides, acts, observes results, and loops autonomously toward a goal",
      "Traditional AI handles test generation while agentic AI handles only test execution"
    ],
    "answer": 2,
    "explanation": "Traditional AI in QE acts as a tool where you provide input and receive output. Agentic AI operates autonomously: it sets objectives, plans steps, executes actions, observes results, and iterates without requiring human intervention at each step."
  },
  {
    "id": "ag17",
    "category": "agentic-ai",
    "question": "What are the four fundamental components of any AI agent in a QE system?",
    "options": [
      "Input, Processing, Output, Storage",
      "Perception, Memory, Reasoning, Action",
      "Planning, Execution, Validation, Reporting",
      "Collection, Analysis, Generation, Deployment"
    ],
    "answer": 1,
    "explanation": "Every AI agent has four components: Perception (reading inputs like specs and test results), Memory (short-term task context and long-term historical patterns), Reasoning (the LLM brain that plans and evaluates), and Action (tool calls that execute tasks like running tests or writing code)."
  },
  {
    "id": "ag18",
    "category": "agentic-ai",
    "question": "What are the three phases of a self-healing test framework in an agentic system?",
    "options": [
      "Scan, Fix, Deploy",
      "Identify, Quarantine, Retry",
      "Detection (capture failure evidence), Diagnosis (classify root cause), Remediation (apply category-specific fix)",
      "Alert, Escalate, Resolve"
    ],
    "answer": 2,
    "explanation": "A robust self-healing framework works in three phases: Detection captures DOM snapshots, network traces, and error context; Diagnosis classifies the failure as a selector change, timing issue, data state problem, or visual change; Remediation applies the appropriate fix based on the diagnosis category."
  },
  {
    "id": "ag19",
    "category": "agentic-ai",
    "question": "What distinguishes LLM-assisted test generation from fully autonomous test generation?",
    "options": [
      "LLM-assisted uses GPT models while autonomous uses Claude models",
      "LLM-assisted generates more tests per hour than autonomous generation",
      "In LLM-assisted, a human provides specs and reviews output at each step; in autonomous, the agent reads specs, generates, executes, triages, and updates the suite with humans handling only exceptions",
      "LLM-assisted works only with unit tests while autonomous works with E2E tests"
    ],
    "answer": 2,
    "explanation": "LLM-assisted generation keeps humans in the loop at every step, accelerating authoring time. Autonomous generation transforms the pipeline so agents read specifications, identify scenarios, generate scripts, execute them, triage failures, and update the suite independently, with humans reviewing only exceptions."
  },
  {
    "id": "ag20",
    "category": "agentic-ai",
    "question": "What is the primary role of an 'AI Change Agent' in a QE organization?",
    "options": [
      "Writing all AI-generated test scripts for the organization",
      "Selecting and purchasing AI tools for the QE team",
      "Driving both the technical implementation of AI tools and the cultural transformation needed for teams to adopt them",
      "Training machine learning models on test data for defect prediction"
    ],
    "answer": 2,
    "explanation": "An AI Change Agent's primary challenge is organizational, not just technical. They must build the AI tools and frameworks that prove the new approach works, while also convincing engineers, managers, and leaders to change how they've worked for years. Technical work is only half the job."
  },
  {
    "id": "ag21",
    "category": "agentic-ai",
    "question": "What guardrails are essential for deploying agentic AI in a regulated industry QE environment?",
    "options": [
      "Rate limiting and caching to reduce API costs",
      "No real PII in agent context, human review gates for critical assertions, immutable execution logs, assertion quality enforcement, and model version pinning",
      "Using only open-source AI models to avoid vendor lock-in",
      "Restricting AI to test generation only, with no access to production-like environments"
    ],
    "answer": 1,
    "explanation": "Regulated industries require strict guardrails: no real PII enters agent context (synthetic data only), human sign-off for critical financial assertions, immutable audit logs with full provenance, automated assertion quality checks, and pinned model versions to prevent silent behavior changes."
  },
  {
    "id": "ag22",
    "category": "agentic-ai",
    "question": "In a multi-agent QE architecture, what is the recommended role breakdown for specialist agents?",
    "options": [
      "Frontend Agent, Backend Agent, Database Agent, Deployment Agent",
      "Analyst Agent (reads specs), Generator Agent (writes tests), Executor Agent (runs tests), Reviewer Agent (triages failures), Reporter Agent (formats results)",
      "Planning Agent, Coding Agent, Debugging Agent",
      "Input Agent, Processing Agent, Output Agent, Storage Agent"
    ],
    "answer": 1,
    "explanation": "A production multi-agent QE system benefits from specialist roles: an Analyst that extracts requirements from specs, a Generator that writes test scripts, an Executor that runs them and captures results, a Reviewer that distinguishes real bugs from flakiness, and a Reporter that updates tracking tools. Each agent is small, focused, and independently testable."
  },
  {
    "id": "ag23",
    "category": "agentic-ai",
    "question": "What is the biggest risk with autonomous test generation that most teams overlook?",
    "options": [
      "AI-generated tests run too slowly in CI pipelines",
      "The false confidence created by a large test suite with low-quality assertions that execute code without asserting meaningful business logic",
      "AI models cannot understand business requirements well enough to generate useful tests",
      "Autonomous generation requires too much compute power to be cost-effective"
    ],
    "answer": 1,
    "explanation": "The biggest overlooked risk is false confidence: AI can generate thousands of tests that look correct and execute the right endpoints but only assert on response status codes, not business logic values. A large suite with weak assertions is worse than a small, trusted one because it masks real bugs."
  },
  {
    "id": "ag24",
    "category": "agentic-ai",
    "question": "How does a learning loop improve a self-healing test system over time?",
    "options": [
      "It retrains the LLM model on new test data every week",
      "It stores successful fix patterns in a vector database so future similar failures are resolved from the store before calling the LLM, reducing costs and improving speed",
      "It automatically generates new test cases based on previously healed tests",
      "It tracks which developers introduce the most bugs and routes failures to them"
    ],
    "answer": 1,
    "explanation": "A learning loop stores successful healing decisions in a vector database. When a similar failure occurs, the system queries the store first instead of calling the LLM. Over time, the LLM becomes a fallback rather than the primary path, reducing API costs and accelerating fix times."
  },
  {
    "id": "ag25",
    "category": "agentic-ai",
    "question": "Why is testing non-deterministic AI features (like AI-assisted underwriting) fundamentally different from traditional functional testing?",
    "options": [
      "AI features require more test data than traditional features",
      "AI features can only be tested manually because automated tools cannot evaluate AI outputs",
      "AI outputs vary between runs, requiring statistical validation, boundary testing, and fairness checks instead of exact-match assertions",
      "AI features are always slower to test because they require GPU resources"
    ],
    "answer": 2,
    "explanation": "Non-deterministic AI features produce outputs that may vary between runs, making exact-match assertions ineffective. QE must use statistical validation approaches, boundary testing, bias and fairness checks, and confidence-based assertions to validate that AI outputs fall within acceptable ranges."
  },
  {
    "id": "dd1",
    "category": "data-defects",
    "question": "What two problems does AI-driven synthetic test data generation solve that rule-based tools like Faker cannot?",
    "options": [
      "Execution speed and storage efficiency — AI generates data faster and in more compact formats",
      "Version control and reproducibility — AI ensures the same data is generated across environments",
      "Licensing cost and setup complexity — AI tools require no manual schema configuration",
      "Privacy compliance (no real PII needed) and semantic coherence — understanding field relationships and generating meaningful edge cases humans would not specify"
    ],
    "answer": 3,
    "explanation": "AI understands that a California address needs a valid CA zip code, an enterprise user implies different patterns than a consumer — producing semantically coherent data, not just statistically random values."
  },
  {
    "id": "dd2",
    "category": "data-defects",
    "question": "On what three dimensions do you validate that synthetic data is representative of production data?",
    "options": [
      "Volume, velocity, and variety — the three V's of big data applied to test data quality",
      "Accuracy, completeness, and timeliness — the data quality dimensions from data governance frameworks",
      "Statistical distribution, referential integrity, and functional equivalence — validated through parallel test runs",
      "Format compliance, encryption status, and access control alignment — ensuring security parity with production"
    ],
    "answer": 2,
    "explanation": "A parallel test run — same suite against production-sampled data and synthetic data — validates functional equivalence. Divergence indicates gaps in the synthetic data that would hide real defects."
  },
  {
    "id": "dd3",
    "category": "data-defects",
    "question": "What features does a defect prediction ML model use, and what does the output enable QA to do?",
    "options": [
      "API response time, memory usage, and CPU load — predicting which services will fail under peak load",
      "Test execution time, pass/fail history, and code coverage — predicting which tests are at risk of becoming flaky",
      "User complaint volume, support ticket count, and error rate — predicting which features have the most production defects",
      "Code churn, prior bug density, complexity, developer history, and test staleness — enabling risk-based testing that directs effort toward highest-risk areas"
    ],
    "answer": 3,
    "explanation": "The model output is a risk score per module. QA directs deep testing toward high-risk areas and lighter testing toward stable modules — making the same testing capacity more effective."
  },
  {
    "id": "dd4",
    "category": "data-defects",
    "question": "What are the four intelligent triage categories for test failures, and which one should never block a PR?",
    "options": [
      "Pass, fail, flaky, and error — errors should never block a PR as they indicate infrastructure rather than application issues",
      "Critical, major, minor, and informational — informational failures should never block a PR",
      "New, known, regressed, and intermittent — intermittent failures should never block a PR as they are by definition unreliable",
      "Real product bug (block PR), flaky test (route to self-healing), environment issue (alert DevOps), and test code issue (route to QA) — environment issues should not block PRs"
    ],
    "answer": 3,
    "explanation": "Correct classification determines action. The quality signal that triage is working: engineers stop ignoring failure notifications because triage correctly separates signal from noise."
  },
  {
    "id": "dd5",
    "category": "data-defects",
    "question": "How should AI-assisted root cause analysis be positioned — and what is its second, often overlooked use?",
    "options": [
      "As the final word on root cause — AI analysis is objective and faster than human review",
      "As a replacement for human RCA on all non-critical production incidents",
      "As the starting point — surfacing causal hypotheses faster than manual log analysis; second use is pattern recognition across six months of incidents to surface systemic architectural risks",
      "As a documentation tool — generating incident reports automatically from monitoring system data"
    ],
    "answer": 2,
    "explanation": "AI is the starting point; a human engineer validates before the RCA is official. Pattern recognition across many incidents surfaces risks that individual bug reports hide — a systemic view individual RCAs cannot provide."
  },
  {
    "id": "dd6",
    "category": "data-defects",
    "question": "What is the critical additional test scenario for an AI data validation system beyond standard accuracy testing?",
    "options": [
      "Load testing — validating that the validator maintains accuracy under high-volume data ingestion",
      "Security testing — validating that the validator cannot be manipulated by malformed input injection",
      "Integration testing — validating that the validator connects correctly to all upstream data sources",
      "Distributional shift testing — when production data evolves beyond the training distribution, the validator should flag uncertainty rather than confidently misclassify"
    ],
    "answer": 3,
    "explanation": "Testing false positive rate (valid records flagged as invalid) and false negative rate (invalid records missed) covers accuracy. Distributional shift catches the silent degradation as data patterns evolve post-deployment."
  },
  {
    "id": "dd7",
    "category": "data-defects",
    "question": "What are the two specific QE applications for vector databases, and which implementation approach avoids adding infrastructure?",
    "options": [
      "Test result storage and historical trend analysis — pgvector on PostgreSQL avoids a separate service",
      "LLM response caching and prompt deduplication — Redis with vector extension avoids a separate service",
      "Self-healing learning loops (store fix decisions, retrieve similar past fixes) and test deduplication (semantic similarity search before generation) — pgvector on existing PostgreSQL avoids adding a new component",
      "Coverage gap analysis and requirement embedding — Weaviate is preferred for its native GraphQL interface"
    ],
    "answer": 2,
    "explanation": "The self-healing loop reduces LLM calls over time; test deduplication prevents the coverage illusion where AI generates tests functionally identical to existing ones with different wording."
  },
  {
    "id": "dd8",
    "category": "data-defects",
    "question": "What is the foundational rule for AI QE systems and data privacy — and why must it be enforced architecturally, not by policy?",
    "options": [
      "Encrypt all data before passing to AI systems using AES-256 — policies may be overlooked but encryption cannot be bypassed",
      "Obtain explicit user consent before using any data in an AI pipeline — consent is tracked in the architecture's data lineage",
      "Store all AI system logs for 90 days — architectural log retention cannot be disabled by individual engineers",
      "No real PII ever enters an AI agent's context — policies can be accidentally violated; a masking layer at the architecture level cannot be bypassed by an individual engineer's mistake"
    ],
    "answer": 3,
    "explanation": "A data masking pipeline replaces PII with synthetic equivalents that preserve format and distribution before data reaches any LLM. Using providers with zero data retention agreements (e.g. Anthropic API) is documented as compliance evidence."
  },
  {
    "id": "dd9",
    "category": "data-defects",
    "question": "What is observability-driven QE, and how does AI improve it beyond threshold-based alerting?",
    "options": [
      "Using QA metrics to drive infrastructure provisioning decisions — AI improves this by predicting capacity needs",
      "Monitoring test execution in real time to catch failures as they occur — AI improves this by auto-retrying flaky tests",
      "Observing user behavior in production to identify untested scenarios — AI improves this by generating tests from session recordings",
      "Using production telemetry (metrics, logs, traces) as a quality signal alongside test results — AI shifts from threshold alerts to pattern-recognition, catching regressions that do not breach a fixed threshold"
    ],
    "answer": 3,
    "explanation": "Pattern-recognition detects that error rate is \"behaving differently than after any previous deployment\" — a subtle signal that threshold-based monitoring would miss until it breaches the fixed alert boundary."
  },
  {
    "id": "dd10",
    "category": "data-defects",
    "question": "What are the three numbers that anchor a compelling business case for AI QE investment?",
    "options": [
      "ROI percentage, payback period, and net present value — the standard financial metrics for any technology investment",
      "Team size, tooling cost, and implementation timeline — the practical parameters for executive approval",
      "Test count, coverage percentage, and defect escape rate — the technical metrics translated into business terms",
      "Current cost (hours fixing broken tests × hourly rate), projected saving (from pilot data), and risk cost avoidance (what production incidents actually cost the business)"
    ],
    "answer": 3,
    "explanation": "Real pilot data beats projections every time. One production incident in a payment system often costs more than the entire AI QE investment — making risk avoidance the most compelling number in the case."
  },
  {
    "id": "da1",
    "category": "data-defects",
    "question": "What type of data quality issue is typically addressed by using statistical methods like mean absolute percentage error (MAPE) and coefficient of determination (R²)?",
    "options": [
      "Data quality drift",
      "Sensor noise",
      "Concept drift",
      "Incorrect data normalization"
    ],
    "answer": 1,
    "explanation": "MAPE and R² are used to evaluate the accuracy of predictions made by machine learning models, which helps identify sensor noise or other data inaccuracies."
  },
  {
    "id": "da2",
    "category": "data-defects",
    "question": "How do you correctly configure JUnit to run a test suite with parallel execution using Jenkins?",
    "options": [
      "Use the 'parallel' parameter in the Maven Surefire plugin",
      "Add a 'parallel' variable in your pom.xml file",
      "Configure Jenkins to use the TestNG parallel runner",
      "Run multiple Maven commands simultaneously using the '&&' operator"
    ],
    "answer": 0,
    "explanation": "Jenkins allows you to run JUnit test suites with parallel execution by configuring the Maven Surefire plugin. This option provides a concise and effective way to achieve parallel testing within Jenkins."
  },
  {
    "id": "da3",
    "category": "data-defects",
    "question": "What is the correct way to configure Playwright's `tracing` option when using GitHub Copilot for AI-assisted test automation?",
    "options": [
      "Enable tracing globally with `playwright.config.ts`",
      "Set tracing for individual tests with a single line of code",
      "Disable tracing altogether for improved performance",
      "Only enable tracing for failed tests"
    ],
    "answer": 0,
    "explanation": "Playwright's tracing option helps debug browser issues when integrating AI tools like GitHub Copilot. The correct configuration is to enable it globally."
  },
  {
    "id": "da4",
    "category": "data-defects",
    "question": "What Dynatrace feature allows troubleshooting of technical issues by producing a working outcome, which you would need to manage and oversee the process?",
    "options": [
      "Real User Monitoring",
      "PurePath",
      "Application Performance Management",
      "Process Flow Analysis"
    ],
    "answer": 3,
    "explanation": "This feature is crucial in ensuring success as a Solution Engineer at Dynatrace, as it allows you to troubleshoot technical issues and produce a working outcome."
  },
  {
    "id": "da5",
    "category": "data-defects",
    "question": "While performing data-driven validation using Snowflake, which option correctly sets the filtering criteria for meters in a specific geographic region?",
    "options": [
      "WHERE meter_region = 'specific_region'",
      "FROM meter_data WHERE region_name = 'specific_region'",
      "SELECT * FROM meter_data WHERE region_code = 'specific_region'",
      "ALL Meters IN 'specific_region'"
    ],
    "answer": 0,
    "explanation": "To filter meters by a specific geographic region in Snowflake, you use the WHERE clause and specify the desired region."
  },
  {
    "id": "da6",
    "category": "data-defects",
    "question": "When using RSpec, how do you correctly configure a shared context to share setup and teardown steps between multiple examples?",
    "options": [
      "Use a separate describe block for each example",
      "Create a module and include it in each example",
      "Use the around keyword to wrap setup and teardown code",
      "Define a global method that encapsulates the shared behavior"
    ],
    "answer": 2,
    "explanation": "RSpec's around keyword allows you to wrap setup and teardown code, making it ideal for sharing setup and teardown steps between multiple examples."
  },
  {
    "id": "dd16",
    "category": "data-defects",
    "question": "What is a 'golden dataset' in test data management, and why is it essential for test reliability?",
    "options": [
      "A dataset containing the largest volume of test data possible for performance testing",
      "A known, version-controlled clean state that the database is reset to before each test suite run, ensuring deterministic test results",
      "A production database snapshot taken on a specific date used as the baseline for all environments",
      "A dataset generated by AI that contains statistically perfect distributions"
    ],
    "answer": 1,
    "explanation": "A golden dataset is a known-good state stored as version-controlled SQL scripts. Resetting the database to this state before each test run eliminates test pollution from previous runs, improving reliability from 65% to 98% in real-world cases."
  },
  {
    "id": "dd17",
    "category": "data-defects",
    "question": "When generating synthetic test data at scale, why is using weighted distributions important?",
    "options": [
      "Weighted distributions make the data generation process faster",
      "Weighted distributions ensure the synthetic data mirrors real-world statistical patterns, revealing issues like index degradation at high volume that uniform random data would miss",
      "Weighted distributions are required by GDPR compliance for test data",
      "Weighted distributions only matter for machine learning training data, not test data"
    ],
    "answer": 1,
    "explanation": "Weighted distributions generate data that mirrors production patterns (e.g., addresses weighted by population density, realistic transaction amounts). Tests with uniform random data may miss performance issues that only appear with realistic data distributions."
  },
  {
    "id": "dd18",
    "category": "data-defects",
    "question": "What is the recommended approach to ensure reproducibility when generating synthetic test data?",
    "options": [
      "Generate fresh random data before each test run for maximum coverage",
      "Use a fixed seed value in data generators so the same data is produced across test runs",
      "Store generated data in a shared database that all environments reference",
      "Use production data instead of synthetic data to avoid reproducibility concerns"
    ],
    "answer": 1,
    "explanation": "Using a fixed seed value in Faker libraries or custom generators ensures the same data is produced every time, making test results reproducible across runs and environments. This enables reliable debugging when tests fail."
  },
  {
    "id": "dd19",
    "category": "data-defects",
    "question": "What is the key benefit of ephemeral environments in a DevOps testing context?",
    "options": [
      "They are cheaper than permanent environments because they use spot instances",
      "They spin up per PR or per branch via infrastructure-as-code, providing isolated testing without team interference, then are destroyed after merge",
      "They run all tests faster because they are optimized for test execution",
      "They automatically replicate production data for realistic testing"
    ],
    "answer": 1,
    "explanation": "Ephemeral environments (created via Terraform/Helm per PR, destroyed after merge) eliminate the shared staging instability caused by competing team deployments. Each team tests in isolation, and the stable shared environment is reserved for integration runs."
  },
  {
    "id": "dd20",
    "category": "data-defects",
    "question": "What are the key areas of database testing that a QA Architect should ensure are covered?",
    "options": [
      "Only test query performance since that is the most common database issue",
      "Schema validation, data integrity, stored procedure correctness, migration testing with rollback verification, and query performance analysis",
      "Only test database backups and recovery procedures",
      "Focus exclusively on connection pool testing since that affects application performance"
    ],
    "answer": 1,
    "explanation": "Database testing covers schema validation (correct structure and constraints), data integrity (referential integrity enforcement), stored procedure testing, migration testing (including rollback verification), and performance (execution plans, index usage). Each area catches different classes of defects."
  },
  {
    "id": "dd21",
    "category": "data-defects",
    "question": "What is the principle of 'promote artifacts, not code' in environment management?",
    "options": [
      "Only use precompiled binaries, never source code, in test environments",
      "Build the application once and deploy the same artifact through all environments (QA, staging, prod) rather than rebuilding from source for each environment",
      "Promote QA team members who write the best test artifacts to lead positions",
      "Use artifact repositories like Nexus instead of source code repositories like Git"
    ],
    "answer": 1,
    "explanation": "Building once and promoting the same artifact through environments ensures you test exactly what will be deployed to production. Rebuilding from source per environment risks introducing differences that cause 'works in staging, fails in production' scenarios."
  },
  {
    "id": "dd22",
    "category": "data-defects",
    "question": "How should test data for third-party email integrations be handled in automated test environments?",
    "options": [
      "Send real emails through the production email service and verify delivery manually",
      "Replace the email service with an SMTP capture tool like Mailhog, then verify email content by querying the capture API in tests",
      "Skip email testing entirely since it is unreliable in automated environments",
      "Use a dedicated real email account that receives all test emails"
    ],
    "answer": 1,
    "explanation": "SMTP capture tools (Mailhog, Mailtrap) intercept all emails sent from the test environment. Tests verify email content, recipients, and subject lines by querying the capture tool's API, avoiding sending real emails that pollute deliverability metrics and may reach unintended recipients."
  },
  {
    "id": "dd23",
    "category": "data-defects",
    "question": "What is defect density, and how is it used strategically by a QA Architect?",
    "options": [
      "The total number of defects in a release, used to determine if the release is ready to ship",
      "The number of defects per unit of code size (KLOC or function points), used to identify high-risk modules that need refactoring and concentrated test effort",
      "The ratio of critical to minor defects, used to prioritize which defects to fix first",
      "The number of defects found per tester per sprint, used to measure QA team productivity"
    ],
    "answer": 1,
    "explanation": "Defect density (defects/KLOC) identifies modules with disproportionately high bug rates. A module at 3.5 defects/KLOC when the median is 0.8 signals poor design or insufficient testing, providing evidence for targeted refactoring and test investment."
  },
  {
    "id": "dd24",
    "category": "data-defects",
    "question": "What is the most dangerous misconception about code coverage metrics, and what supplements them?",
    "options": [
      "That code coverage is useless; the supplement is manual testing",
      "That 100% line coverage means zero bugs; mutation testing supplements coverage by verifying that tests actually assert meaningful behavior",
      "That code coverage should never exceed 80% because beyond that ROI decreases",
      "That code coverage is only relevant for unit tests; integration tests do not contribute to coverage"
    ],
    "answer": 1,
    "explanation": "80% line coverage means 80% of lines were executed, but tests can execute code without asserting anything meaningful. Mutation testing verifies assertion quality by introducing small code changes (mutations) and checking if tests detect them. A high mutation score confirms tests are truly validating logic."
  },
  {
    "id": "dd25",
    "category": "data-defects",
    "question": "What are the DORA metrics, and which two does QA most directly impact?",
    "options": [
      "Defect count, Operational uptime, Release velocity, Automation rate; QA impacts defect count and automation rate",
      "Deployment Frequency, Lead Time for Changes, Change Failure Rate, MTTR; QA most directly impacts Change Failure Rate and Lead Time",
      "Developer satisfaction, Operational cost, Revenue impact, Availability; QA impacts availability and operational cost",
      "Documentation coverage, Onboarding time, Regression suite size, Accessibility score; QA impacts regression suite size and accessibility"
    ],
    "answer": 1,
    "explanation": "DORA metrics are Deployment Frequency, Lead Time for Changes, Change Failure Rate, and MTTR. QA most directly impacts Change Failure Rate (quality gates reduce failed deployments) and Lead Time (slow test suites increase commit-to-production time)."
  },
  {
    "id": "dd26",
    "category": "data-defects",
    "question": "How do you manage the defect lifecycle from discovery to closure in an enterprise QA program?",
    "options": [
      "Log all defects in a spreadsheet and review them in a weekly meeting with the team",
      "Assign all defects to the development lead and let them manage triage and resolution",
      "Follow a structured workflow — discovery, triage (severity/priority assignment), root cause analysis, assignment, fix verification, regression validation, and closure with documented resolution — tracked in a defect management tool with SLAs per severity",
      "Only track critical defects; minor and cosmetic issues are noted but not formally tracked"
    ],
    "answer": 2,
    "explanation": "A structured defect lifecycle ensures no defect is lost or forgotten. Severity-based SLAs drive timely resolution, root cause analysis prevents recurrence, fix verification confirms the resolution, and regression validation ensures the fix did not introduce new issues. Closure documentation builds institutional knowledge."
  },
  {
    "id": "dd27",
    "category": "data-defects",
    "question": "How do you validate PostgreSQL data states as part of an automated test suite?",
    "options": [
      "Manually query the database after each test run and visually inspect the results",
      "Use database assertions in test code — connect to PostgreSQL, execute queries to verify expected state (row counts, field values, referential integrity), and clean up test data in teardown hooks",
      "Export the entire database to CSV after each test and compare with a baseline file",
      "Skip database validation and rely solely on API response validation"
    ],
    "answer": 1,
    "explanation": "Database assertions verify that API operations correctly persist data. Test code connects to PostgreSQL, executes targeted queries (checking row existence, field values, constraint enforcement), and cleans up in teardown hooks to maintain test isolation. This catches bugs where the API returns success but data is incorrect."
  },
  {
    "id": "dd28",
    "category": "data-defects",
    "question": "What is a Grafana dashboard in a QE context, and what metrics should be displayed on it?",
    "options": [
      "A code coverage visualization tool — display line, branch, and function coverage percentages",
      "A real-time monitoring dashboard showing test execution results, pipeline health, defect trends, environment status, and performance baselines — enabling the team to spot quality issues at a glance",
      "A project management board showing sprint progress and story points",
      "A log aggregation viewer that replaces the need for Splunk or ELK stack"
    ],
    "answer": 1,
    "explanation": "QE Grafana dashboards provide real-time visibility into test execution pass rates, pipeline duration trends, flaky test frequency, environment health, and performance test baselines. They enable teams to spot regressions, environment issues, and quality trends without manually reviewing CI logs."
  },
  {
    "id": "dd29",
    "category": "data-defects",
    "question": "What is data validation in enterprise systems, and what are the most important boundary conditions QA must test?",
    "options": [
      "Checking that data is encrypted at rest — QA tests encryption algorithms and key rotation",
      "Ensuring submitted information is accurate and complete — QA must test required field enforcement, format validation, cross-field dependencies, and boundary values at min/max thresholds",
      "Verifying that data is replicated across all database nodes — QA tests replication lag",
      "Confirming that data is archived after a retention period — QA tests the archival scheduler"
    ],
    "answer": 1,
    "explanation": "Data validation ensures information accuracy and completeness. QA must test boundary conditions including minimum and maximum values, required vs. optional field combinations, format validation (dates, currencies, identifiers), and cross-field dependency rules where one field's valid values depend on another."
  },
  {
    "id": "dd30",
    "category": "data-defects",
    "question": "When testing financial data analysis features, what key calculations must QA validate for accuracy?",
    "options": [
      "Only the total revenue figure, since all other calculations derive from it",
      "Working capital (current assets minus current liabilities), debt-to-equity ratios, profit margins, and cash flow calculations — each with boundary and rounding validation",
      "Only the final risk score output, since intermediate calculations are internal implementation details",
      "Only the display formatting of currency values in the user interface"
    ],
    "answer": 1,
    "explanation": "Financial analysis features compute multiple derived metrics. QA must validate each calculation independently, test rounding behavior at boundaries, verify that negative values are handled correctly, and ensure that ratio calculations handle zero denominators gracefully."
  },
  {
    "id": "dd31",
    "category": "data-defects",
    "question": "What are KPIs (Key Performance Indicators) in analytics dashboards, and what defect types commonly affect them?",
    "options": [
      "KPIs are only relevant for project management tools and are not tested by QA",
      "Measurable indicators like turnaround time, cost ratios, and processing speed — common defects include incorrect aggregation logic, timezone errors in time-based metrics, and stale cache data",
      "KPIs are static labels displayed on dashboards that never change after initial configuration",
      "KPIs are user preferences that customize the dashboard layout and have no calculation logic"
    ],
    "answer": 1,
    "explanation": "KPIs are measurable indicators that track operational performance. Common defects in KPI dashboards include incorrect aggregation (summing instead of averaging), timezone mismatches in time-based calculations, stale cached values, and filter interactions that silently exclude data."
  },
  {
    "id": "dd32",
    "category": "data-defects",
    "question": "What is analytics-driven risk assessment, and what data quality issues can cause incorrect risk scores?",
    "options": [
      "A manual review process that uses spreadsheets — data quality issues are limited to typos",
      "Using data analytics to improve risk selection and scoring — data quality issues like missing values, stale data, inconsistent formats, and duplicate records can skew risk scores and lead to incorrect decisions",
      "A real-time monitoring system that only uses current data — historical data quality is irrelevant",
      "An AI system that self-corrects data quality issues automatically, requiring no QA validation"
    ],
    "answer": 1,
    "explanation": "Analytics-driven risk assessment uses historical and current data to score risk. Data quality issues such as missing values being treated as zeros, stale records from failed integrations, format inconsistencies across data sources, and duplicate records inflating metrics can all produce incorrect risk scores."
  },
  {
    "id": "dd33",
    "category": "data-defects",
    "question": "How should QA test the impact of inflation and supply chain variables on financial calculation systems?",
    "options": [
      "Inflation testing is outside QA's scope and belongs to the business analysis team",
      "Only test with current inflation rates since historical scenarios are no longer relevant",
      "Test with variable cost escalation scenarios, supply chain delay simulations, and boundary conditions where cost increases push calculations past threshold triggers",
      "Use production data directly since synthetic inflation scenarios are unrealistic"
    ],
    "answer": 2,
    "explanation": "Financial systems that account for inflation and supply chain factors must be tested with variable scenarios. QA should test cost escalation at different rates, verify threshold triggers when costs exceed limits, validate recalculation logic when input assumptions change, and test edge cases where delays compound cost impacts."
  },
  {
    "id": "l1",
    "category": "leadership",
    "question": "What are the three root causes of resistance to AI QE adoption, and why does each need a different response?",
    "options": [
      "Budget constraints, tool immaturity, and lack of executive sponsorship — each addressed by building a business case",
      "Technical complexity, vendor lock-in risk, and compliance concerns — each addressed by the Architecture Guild governance model",
      "Team skill gaps, poor documentation, and insufficient training programs — each addressed by structured onboarding",
      "Fear of job replacement, past bad automation experiences, and lack of time to learn — each requiring a distinct response: reframe, working pilot, and effortless adoption tooling"
    ],
    "answer": 3,
    "explanation": "Naming the three specific sources of resistance rather than saying \"I bring people along\" shows real experience with the human side of AI adoption — not just the technical side."
  },
  {
    "id": "l2",
    "category": "leadership",
    "question": "How do you prevent engineers from losing QE expertise as AI automates routine tasks?",
    "options": [
      "Limit AI automation to no more than 50% of any engineer's test portfolio to maintain direct ownership",
      "Rotate engineers monthly between AI-managed and manually managed test areas to keep skills current",
      "Require engineers to review every AI-generated test before it runs, maintaining familiarity with the suite",
      "Keep humans in the loop for design decisions; reserve time for exploratory testing that requires human intuition about what matters to a user — AI handles the routine, humans own the judgement"
    ],
    "answer": 3,
    "explanation": "Over-automating creates a risk: when something novel breaks, there is no human expertise to fall back on. Exploratory testing is the skill AI augments least effectively — it is where human value compounds."
  },
  {
    "id": "l3",
    "category": "leadership",
    "question": "How do you govern AI tool selection across a large engineering organization — and what failure mode do you watch for most closely?",
    "options": [
      "Centralise all AI tool decisions with the CTO for consistency — watch for teams bypassing the CTO's decisions",
      "Limit the organization to one approved AI tool per testing category — watch for teams using multiple tools in the same category",
      "Allow any tool that passes a security scan — watch for tools that store training data without consent",
      "Architecture Guild review for security and compliance; approved catalogue with fast two-week approval; watch for shadow AI — teams adopting unapproved tools because the approval process is too slow"
    ],
    "answer": 3,
    "explanation": "Shadow AI is the governance failure to watch for most closely. Making the approval process fast and actively expanding the catalogue based on team requests prevents the workarounds that create it."
  },
  {
    "id": "l4",
    "category": "leadership",
    "question": "What is the build-first mentoring model for AI QE, and what element drives deeper learning than abstract instruction?",
    "options": [
      "Have engineers complete online certifications before using AI tools — structured progression drives depth",
      "Start with theoretical concepts and apply them to toy projects — understanding the foundations drives depth",
      "Assign AI QE work to senior engineers and have juniors observe for 90 days — observation drives learning",
      "Pair on a real task with the engineer driving; assign domain ownership (\"you're the expert on AI generation for the checkout service\") — accountability drives deeper learning"
    ],
    "answer": 3,
    "explanation": "Domain ownership gives engineers a reason to go deeper because they are accountable for it — not just because they were instructed to learn it. Ownership converts instruction into intrinsic motivation."
  },
  {
    "id": "l5",
    "category": "leadership",
    "question": "What is the quarter-by-quarter structure of a 12-month AI QE roadmap starting from zero?",
    "options": [
      "Q1: training; Q2: tooling procurement; Q3: pilot; Q4: full rollout — the standard technology adoption sequence",
      "Q1–Q2: planning; Q3: implementation; Q4: measurement — allowing enough time to get the architecture right",
      "Q1: buy tools; Q2–Q3: configure and integrate; Q4: run first fully automated test cycle",
      "Q1: audit + one POC; Q2: scale to 3 teams + establish metrics baseline; Q3: second capability; Q4: measure ROI + secure next-horizon investment"
    ],
    "answer": 3,
    "explanation": "Each quarter builds on the previous — no capability is added until the prior one is stable and measured. Q4 uses real data to secure investment for the next horizon, not projections from Q1."
  },
  {
    "id": "l6",
    "category": "leadership",
    "question": "What should be accomplished in each phase of the first 30-60-90 days of an AI QE transformation?",
    "options": [
      "30 days: hire AI QE engineers; 60 days: select and procure tools; 90 days: run the first automated tests",
      "30 days: write the strategy document; 60 days: get budget approval; 90 days: begin implementation planning",
      "30 days: train the team on AI concepts; 60 days: set up infrastructure; 90 days: deploy to production",
      "30 days: listen and audit — understand landscape, pain points, appetite for change; 60 days: build and prove — pilot with one real team; 90 days: socialise and plan — use pilot results to build the roadmap"
    ],
    "answer": 3,
    "explanation": "By day 90 the question should shift from \"should we do this\" to \"how fast can we scale it\" — driven by the concrete results from the pilot, not by projected benefits from a slide deck."
  },
  {
    "id": "l7",
    "category": "leadership",
    "question": "What is the correct response when an AI QE initiative does not deliver the expected results?",
    "options": [
      "Immediately switch to a different AI tool or vendor — the technology selection was probably wrong",
      "Increase the budget and timeline and try the same approach again with more resources",
      "Report the failure to leadership and reduce the scope of the AI QE program to avoid further risk",
      "Structured retrospective to identify if the failure was use case selection, implementation, measurement, or adoption — then communicate transparently with leadership about what to change"
    ],
    "answer": 3,
    "explanation": "Most AI QE failures are use case failures — the capability is real but the problem was not the right fit. A leader who only reports successes loses credibility when the first failure appears."
  },
  {
    "id": "l8",
    "category": "leadership",
    "question": "How is the QE engineer role evolving over the next 3–5 years with AI — and what skills become most valuable?",
    "options": [
      "QE engineers will be replaced entirely by AI agents across all automation functions within 5 years",
      "QE engineers will specialise more narrowly in manual testing as AI takes over all automation work",
      "QE engineers will focus primarily on AI model training and fine-tuning as the core new skill",
      "The role shifts from test executor to quality architect — designing quality systems; exploratory testing, risk analysis, and system thinking become the irreplaceable core skills"
    ],
    "answer": 3,
    "explanation": "The engineers most valuable in 5 years understand both the engineering system and the AI system well enough to design quality programs that leverage both — not those who only know one."
  },
  {
    "id": "l9",
    "category": "leadership",
    "question": "What is the recommended AI QE learning approach — and why do hands-on projects outperform certifications alone?",
    "options": [
      "Focus exclusively on vendor-specific certifications for tools your organization uses — depth over breadth",
      "Complete university machine learning courses before touching any AI QE tooling — foundations before tools",
      "AI QE requires no formal certification — on-the-job experience alone is sufficient for senior roles",
      "Combine AI foundations certification (Claude AI Fluency, Google Gen AI Leader) with building a real pipeline — the field moves faster than certifications can track; shipping something reveals what reading cannot"
    ],
    "answer": 3,
    "explanation": "The best learning comes from shipping something real and iterating on what does not work. Certifications force deep learning; hands-on projects reveal the limitations documentation does not mention."
  },
  {
    "id": "l10",
    "category": "leadership",
    "question": "What is the build-to-learn model for staying current with AI QE tooling when the field changes weekly?",
    "options": [
      "Subscribe to AI newsletters and attend at least two industry conferences per year",
      "Follow vendor roadmaps and wait for tools to reach production maturity before evaluating",
      "Assign one dedicated team member as the AI tools specialist responsible for monitoring the entire landscape",
      "2 hours to build a working prototype on a real problem rather than reading documentation; one evaluation per month shared as a team-accessible note; monthly knowledge sessions to multiply learning across the team"
    ],
    "answer": 3,
    "explanation": "Ten engineers each exploring something different and sharing findings multiplies learning capacity beyond what one person covering the whole field can achieve — and the prototype reveals trade-offs that documentation hides."
  },
  {
    "id": "l11",
    "category": "leadership",
    "question": "What is the correct structure for a senior AI QE \"tell me about yourself\" answer?",
    "options": [
      "Start with your full career chronology from first job to present, then highlight the most relevant experience",
      "Focus on years of experience, team sizes managed, and company names — establishing seniority first",
      "Open with your educational background and certifications before transitioning to work history",
      "Lead with a concrete impact metric, name the specific technical capability built to achieve it, and close with what genuinely draws you to AI QE — deliver in 90 seconds then stop"
    ],
    "answer": 3,
    "explanation": "\"I built intelligent workflow automation that cut authoring time 60% across 40 engineers\" — concrete, specific, and memorable. Then pause. If they ask for more on any thread, go deeper on that one, not all of them at once."
  },
  {
    "id": "l12",
    "category": "leadership",
    "question": "What is the most memorable and effective response to \"anything else you'd like us to know?\" in a senior QE interview?",
    "options": [
      "Reiterate your top three strengths and connect each one to the specific role requirements listed in the job description",
      "Ask a thoughtful question that demonstrates your knowledge of the company's specific QE challenges and culture",
      "Describe your 30-60-90 day plan for the role, showing you have already thought about how to make an impact",
      "Share a failure and what it taught you — \"the question I wish you would ask is: what didn't work, and what did you learn from it?\" — it shows engineering maturity and real experience more than any success story"
    ],
    "answer": 3,
    "explanation": "Describing a failure honestly (first LLM prototype rejected due to convention mismatch → drove the few-shot prompting approach) is the most human answer in the interview, which is what people remember."
  },
  {
    "id": "le1",
    "category": "leadership",
    "question": "How would you ensure clear and consistent bug reporting practices in a team?",
    "options": [
      "Conducting regular team meetings to discuss defect reports",
      "Setting up automated test results reporting",
      "Providing training sessions on standard bug reporting templates",
      "Overseeing root cause analysis on defects"
    ],
    "answer": 3,
    "explanation": "The correct answer is option: 'Providing training sessions on standard bug reporting templates'. This shows practical knowledge of setting and enforcing standards for exploratory, functional, and regression testing across the team."
  },
  {
    "id": "le2",
    "category": "leadership",
    "question": "As a Quality Engineering Manager, what would be your main objective in conducting performance reviews?",
    "options": [
      "To make compensation recommendations based on individual skills",
      "To identify gaps and build targeted development plans for the team members",
      "To hold team members accountable to their KPIs and objectives",
      "To provide timely and constructive feedback"
    ],
    "answer": 1,
    "explanation": "The correct answer is option: 'To identify gaps and build targeted development plans for the team members'. This shows practical knowledge of conducting performance reviews, setting individual objectives and KPIs, and managing full employee lifecycle."
  },
  {
    "id": "le3",
    "category": "leadership",
    "question": "What regulatory guidelines does the successful candidate need to be familiar with?",
    "options": [
      "FDA QMSR, ISO 13485",
      "FDA QMSR, EU MDR",
      "ISO 13485, CAPA",
      "All of the above"
    ],
    "answer": 3,
    "explanation": "The correct answer is 'All of the above'. The job description mentions that the candidate should be aware of FDA regulations including QSRs and relevant international standards such as ISO 13485."
  },
  {
    "id": "le4",
    "category": "leadership",
    "question": "What key performance indicator (KPI) would you use to monitor the effectiveness of the Quality Management System (QMS)?",
    "options": [
      "First-Time Right",
      "Defect Density",
      "Compliance Rate",
      "Process Efficiency"
    ],
    "answer": 3,
    "explanation": "The correct answer is 'Compliance Rate'. The job description mentions that the candidate should develop and implement quality metrics to monitor the effectiveness of the QMS."
  },
  {
    "id": "le5",
    "category": "leadership",
    "question": "As the Delivery Lead, Quality Engineering & Automation, what essential component would you prioritize integrating into CI/CD pipelines to ensure secure, reliable releases?",
    "options": [
      "API key management",
      "Test data catalog",
      "Automated security testing",
      "In-place build validation"
    ],
    "answer": 2,
    "explanation": "This question assesses the candidate's understanding of integrations and security in CI/CD pipelines, which is a critical aspect of their role."
  },
  {
    "id": "le6",
    "category": "leadership",
    "question": "While leading the company Loans' quality practice, how would you handle a situation where one of your direct reports is strongly advocating for automated testing approaches that depart from established standards and best practices?",
    "options": [
      "Reiterate the importance of following established standards",
      "Understand their concerns but reinforce the existing guidelines",
      "Acknowledge their perspective but ultimately require compliance with current procedures",
      "Encourage innovation and experimentation while still ensuring adherence to standards"
    ],
    "answer": 2,
    "explanation": "This scenario showcases leadership prowess in balancing team autonomy with organizational requirements. As a Director of Quality Engineering, one must navigate this delicate balance by demonstrating understanding while still upholding the importance of established best practices."
  },
  {
    "id": "le7",
    "category": "leadership",
    "question": "As a Quality Engineering Manager, what should you prioritize while conducting performance reviews with your team members?",
    "options": [
      "Setting clear goals and expectations",
      "Providing constructive feedback only",
      "Focusing on past achievements alone",
      "Emphasizing the importance of certifications"
    ],
    "answer": 0,
    "explanation": "As a Quality Engineering Manager, prioritizing setting clear goals and expectations while conducting performance reviews ensures that team members have a clear direction and are motivated to achieve their objectives. This helps in fostering a culture of continuous improvement and employee growth."
  },
  {
    "id": "le8",
    "category": "leadership",
    "question": "As a Quality Engineering Manager, what approach would you take to ensure that your team's adoption of AI-powered testing tools aligns with the company's overall quality strategy and goals?",
    "options": [
      "Develop a dedicated AI-focused roadmap for each team",
      "Integrate AI usage into existing quarterly objectives",
      "Create a centralized committee to govern AI tool selection and adoption",
      "None of the above"
    ],
    "answer": 2,
    "explanation": "This approach ensures that AI-powered testing tools align with the company's overall quality strategy and goals by creating a centralized committee to govern AI tool selection and adoption."
  },
  {
    "id": "le9",
    "category": "leadership",
    "question": "What is the recommended approach to determine the comprehensive test scenarios and acceptance criteria for complex utility regulatory requirements in XRAY?",
    "options": [
      "Using automated workflows only",
      "Manually creating test scripts and user stories",
      "Implementing a data-driven approach with SQL or Snowflake",
      "Staying focused on functional validation only"
    ],
    "answer": 2,
    "explanation": "The correct answer is 'Implementing a data-driven approach with SQL or Snowflake'. According to the job description, the candidate should have hands-on experience validating Field Activity logic and proficiency in using SQL or Snowflake for back-end data validation. This suggests that the candidate prefers a data-driven approach."
  },
  {
    "id": "le10",
    "category": "leadership",
    "question": "As a QA Leadership expert, what is the primary strategy for prioritizing team QA efforts when faced with multiple complex projects simultaneously?",
    "options": [
      "Prioritize based on business value",
      "Prioritize based on project timelines",
      "Prioritize based on technical feasibility",
      "Prioritize based on customer feedback"
    ],
    "answer": 1,
    "explanation": "This is an important consideration for a QA Leader, as it sets the tone for how QA efforts will be allocated and managed in a busy environment. The correct answer is prioritizing based on project timelines."
  },
  {
    "id": "le17",
    "category": "leadership",
    "question": "What is the recommended phased approach for building a QA team from scratch in a startup with no existing QA function?",
    "options": [
      "Hire a large team of junior QA engineers immediately to cover all testing needs across the product",
      "Outsource all QA to a third-party vendor until the product stabilizes",
      "Assess current quality state, define target QA architecture, hire a mix of senior SDETs and QA engineers embedded in feature teams, then establish practices and iterate",
      "Start by purchasing enterprise test management tools and then hire engineers to operate them"
    ],
    "answer": 2,
    "explanation": "Building a QA team from scratch requires a phased approach: first assess the current state, then define the architecture, hire strategically (prioritizing problem-solving skills over tool knowledge), embed QA in feature teams to avoid silos, and iterate on practices with measurable outcomes."
  },
  {
    "id": "le18",
    "category": "leadership",
    "question": "What is the most effective strategy for resolving recurring conflict between QA and development teams over defect severity?",
    "options": [
      "Establish a formal escalation path where a VP makes the final call on all disputed defects",
      "Allow developers to close any bugs they disagree with since they know the code best",
      "Introduce 3-amigos sessions before development so product, dev, and QA define acceptance criteria together, eliminating post-development disputes",
      "Assign QA engineers to report only to development managers to align their priorities"
    ],
    "answer": 2,
    "explanation": "The 3-amigos approach (product, dev, QA) aligns expectations before development begins. When everyone agrees upfront on what 'done' looks like, the 'by design' dispute disappears because acceptance criteria are collaboratively defined."
  },
  {
    "id": "le19",
    "category": "leadership",
    "question": "How should testing standards be established across multiple teams without creating resentment or low adoption?",
    "options": [
      "Have the QA Architect write all standards in a document and mandate compliance through management enforcement",
      "Let each team define its own standards independently to maximize autonomy and innovation",
      "Establish a QA Guild with representatives from each team, define standards through an RFC process with team input, and make the right thing the easy thing through tooling defaults",
      "Copy industry-standard testing practices from a well-known tech company and apply them directly"
    ],
    "answer": 2,
    "explanation": "A QA Guild with an RFC process ensures teams have input into the standards they follow. Providing shared template repos, centralized reporting, and sensible tooling defaults drives adoption because teams helped design the standards themselves."
  },
  {
    "id": "le20",
    "category": "leadership",
    "question": "What is the key principle of risk-based testing when time is limited before a major release?",
    "options": [
      "Reduce test coverage proportionally across all features to fit within the available time",
      "Skip all low-priority tests and run only automated regression on everything else",
      "Prioritize test effort by assessing each feature's likelihood of failure and business impact, allocating deep testing to high-risk items and smoke tests to low-risk items",
      "Delay the release until the full regression suite can be completed"
    ],
    "answer": 2,
    "explanation": "Risk-based testing uses a likelihood-times-impact matrix to allocate effort proportionally. High risk items get full regression plus exploratory testing, medium risk gets functional tests, and low risk gets smoke tests only. This enables defensible release decisions."
  },
  {
    "id": "le21",
    "category": "leadership",
    "question": "What is the most effective onboarding structure for new QA team members to achieve productivity quickly?",
    "options": [
      "Provide a comprehensive 90-page test plan document to read during the first week",
      "Assign the new hire to shadow a senior QA engineer for the first month without independent tasks",
      "Start with a quick success on Day 1 (run the test suite), progress to fixing a flaky test, then writing tests for a real feature by end of Week 1",
      "Begin with a two-week training course on all testing tools before any hands-on work"
    ],
    "answer": 2,
    "explanation": "Effective QA onboarding starts with a quick, independent success on Day 1 (running the suite), then progressively increases responsibility through real tasks. Pair programming transfers knowledge faster than documentation reading, and real contributions build confidence."
  },
  {
    "id": "le22",
    "category": "leadership",
    "question": "How should testing strategy change in a continuous delivery environment with 50+ deploys per day?",
    "options": [
      "Run the full regression suite before every deployment to maintain quality",
      "Eliminate all automated testing and rely on production monitoring exclusively",
      "Shift from pre-release regression to fast PR gates, automated canary analysis comparing new vs old deployment metrics, and production observability as the safety net",
      "Limit deployments to once per day so the full test suite can complete"
    ],
    "answer": 2,
    "explanation": "High-frequency deployment requires fast PR gates (3-8 min), canary deployments with automated rollback triggers on metric deviation, and strong production observability. Full regression runs weekly rather than blocking every deploy."
  },
  {
    "id": "le23",
    "category": "leadership",
    "question": "How should a QA Architect argue for a budget increase to non-technical executive leadership?",
    "options": [
      "Present the total number of test cases and automation percentage as evidence of QA maturity",
      "Frame quality as a financial risk using cost-of-quality data: prevention costs vs. production incident costs, showing automation ROI with real numbers",
      "Highlight the team's certifications and technical skills to justify higher compensation",
      "Compare the QA budget to industry benchmarks and request alignment"
    ],
    "answer": 1,
    "explanation": "Non-technical leadership responds to business language. Using the cost-of-quality model, show that production incidents cost real money (engineering time, customer churn, SLA penalties) and that automation investment provides measurable ROI by preventing those incidents."
  },
  {
    "id": "le24",
    "category": "leadership",
    "question": "In a SAFe (Scaled Agile Framework) environment, what is the QA Architect's primary responsibility across multiple Agile Release Trains?",
    "options": [
      "Write all test cases for every team in the ART to ensure consistency",
      "Attend every team's daily standup to monitor testing progress",
      "Define team-level done criteria, align program-level testing to PI objectives, and establish shared test data and environment strategies across teams",
      "Focus exclusively on the System Demo and ignore team-level testing activities"
    ],
    "answer": 2,
    "explanation": "In SAFe, the QA Architect defines quality at every level: team-level done criteria, program-level test alignment to PI objectives, and cross-team integration strategies. Shared test data and environments prevent integration conflicts at IP sprints."
  },
  {
    "id": "le25",
    "category": "leadership",
    "question": "What is the primary cultural shift needed to move from 'QA as gatekeeper' to 'QA as quality enabler'?",
    "options": [
      "Rename the QA department to 'Quality Enablement' to signal the change",
      "Give developers full authority to skip QA reviews when they are confident in their code",
      "Establish shared quality ownership where bugs are team failures, QA participates in design phases, and quality metrics are reported in business impact terms",
      "Automate all testing so QA engineers can focus on writing documentation"
    ],
    "answer": 2,
    "explanation": "Moving from gatekeeper to enabler requires shared quality ownership. QA participates in design (not just verification), bugs are treated as team failures (not 'QA found your bug'), and quality is communicated in risk and business terms rather than test metrics."
  },
  {
    "id": "le26",
    "category": "leadership",
    "question": "What is the best approach when a QA team's quality metrics (2,000 test cases, 95% pass rate) look healthy but production defect rates remain high?",
    "options": [
      "Increase the number of test cases to improve coverage further",
      "Switch the dashboard to actionable metrics like defect escape rate, test execution trends, and customer-reported defects to reveal the real quality picture",
      "Add more manual testing sessions to catch the bugs automation is missing",
      "Hire additional QA engineers to increase testing throughput"
    ],
    "answer": 1,
    "explanation": "Vanity metrics like total test count and pass rate can mask real quality problems. Switching to defect escape rate (bugs reaching production), pipeline execution trends, and customer-reported defects provides an honest picture and gives the team meaningful improvement goals."
  },
  {
    "id": "le27",
    "category": "leadership",
    "question": "How do you serve as a QE advocate to business units that do not understand QE value?",
    "options": [
      "Send weekly reports showing the number of bugs found and tests executed",
      "Translate QE outcomes into business language: cost of defect escapes, release confidence, time saved through automation, and risk reduction metrics that stakeholders care about",
      "Invite business stakeholders to attend daily standups so they can observe the QA process",
      "Reduce QE involvement to minimize the perceived cost and interference with delivery timelines"
    ],
    "answer": 1,
    "explanation": "Business stakeholders respond to business language. Translating 'we found 40 bugs' into 'we prevented 40 production incidents that would have impacted 10,000 users' makes quality tangible. Framing QE as risk reduction rather than a cost center changes the conversation."
  },
  {
    "id": "le28",
    "category": "leadership",
    "question": "How do you build a Community of Practice (CoP) for QE across multiple engineering squads?",
    "options": [
      "Create a mandatory weekly meeting where all QE engineers present their work",
      "Build a shared Slack channel and hope people organically start sharing knowledge",
      "Establish regular knowledge-sharing sessions with rotating presenters, maintain a shared wiki of patterns and solutions, and create cross-squad pairing opportunities on real problems",
      "Assign a single QE lead to write all standards and distribute them to the squads"
    ],
    "answer": 2,
    "explanation": "A CoP works when participation creates value. Rotating presenters build ownership, a shared wiki captures institutional knowledge, and cross-squad pairing builds relationships while solving real problems. Mandatory attendance without value destroys engagement."
  },
  {
    "id": "le29",
    "category": "leadership",
    "question": "How do you handle a situation where performance test results conflict with what the team wants to hear?",
    "options": [
      "Soften the results to avoid conflict and present a more optimistic view",
      "Present the raw data without interpretation and let the team draw their own conclusions",
      "Present the data clearly with business impact context, propose specific remediation options with timelines, and make a recommendation while respecting that the business owns the risk decision",
      "Escalate directly to senior leadership without discussing with the immediate team first"
    ],
    "answer": 2,
    "explanation": "QE credibility depends on honest reporting. Present facts with business context, offer remediation options, and make a recommendation. The business ultimately owns the risk decision, but QE must ensure the decision is informed rather than based on wishful thinking."
  },
  {
    "id": "le30",
    "category": "leadership",
    "question": "How do you function as an escalation point for SDETs without becoming a bottleneck?",
    "options": [
      "Review every test case and approve every test plan before execution begins",
      "Be available for escalation but establish decision frameworks, document resolution patterns as runbooks, and empower the team to resolve recurring issues independently",
      "Delegate all escalations to the most senior SDET on the team to free up your time",
      "Set strict office hours for escalations and defer all questions until the scheduled time"
    ],
    "answer": 1,
    "explanation": "Effective escalation management means handling novel or high-impact issues directly while building the team's capability to handle recurring ones. Documenting resolution patterns as runbooks converts individual knowledge into team capability and reduces future escalation volume."
  },
  {
    "id": "le31",
    "category": "leadership",
    "question": "How do you manage vendor service providers during large-scale testing events?",
    "options": [
      "Let vendors manage their own scope and timelines independently",
      "Define clear deliverables, SLAs, and communication protocols upfront; conduct regular checkpoints; and maintain an escalation path for blockers",
      "Assign a junior team member to coordinate with vendors to free up senior staff",
      "Avoid using vendors entirely and handle all testing with internal resources"
    ],
    "answer": 1,
    "explanation": "Vendor management requires clear expectations documented upfront: deliverables, timelines, quality standards, and communication cadence. Regular checkpoints catch drift early, and a defined escalation path ensures blockers are resolved quickly without derailing the testing schedule."
  },
  {
    "id": "le32",
    "category": "leadership",
    "question": "How do you manage the balance between hands-on technical work and strategic leadership as a senior QE leader?",
    "options": [
      "Focus entirely on strategy and delegate all technical work to the team",
      "Spend all your time writing code to maintain technical credibility with the team",
      "Maintain a deliberate split (e.g., 25% strategic, 75% hands-on) by blocking calendar time for each, and adjust the ratio based on team maturity and project phase",
      "Alternate weeks between strategic planning and hands-on work to keep both skills sharp"
    ],
    "answer": 2,
    "explanation": "The hands-on/strategic balance shifts based on context. Early in an engagement or with a junior team, hands-on work builds credibility and accelerates delivery. As the team matures, the ratio shifts toward strategy. Blocking calendar time prevents one mode from consuming the other."
  },
  {
    "id": "le33",
    "category": "leadership",
    "question": "Why is relationship management considered a critical leadership skill for QA leaders working with enterprise clients?",
    "options": [
      "It helps negotiate lower pricing for testing tools and licenses",
      "It ensures that all testing documentation is reviewed by stakeholders",
      "It builds trust and long-term collaboration, enabling proactive risk identification and smoother cross-team coordination",
      "It reduces the need for formal change management processes"
    ],
    "answer": 2,
    "explanation": "In enterprise environments, QA success relies heavily on trust and long-term collaboration between teams, vendors, and clients. Strong relationships enable proactive quality conversations, faster issue resolution, and better alignment between testing priorities and business goals."
  },
  {
    "id": "le34",
    "category": "leadership",
    "question": "What is underwriting governance, and how does the concept apply to QA leadership and test approval authority?",
    "options": [
      "A process for auditing test automation code for security vulnerabilities",
      "A framework that defines approval authority, escalation paths, controls, and accountability for decisions",
      "A method for assigning test cases to individual team members based on seniority",
      "A regulatory requirement specific to financial services testing"
    ],
    "answer": 1,
    "explanation": "Governance frameworks define who has approval authority, what controls are in place, escalation paths, and accountability structures. QA leaders apply similar principles when defining who can approve test plans, sign off on releases, waive test criteria, and escalate quality risks."
  },
  {
    "id": "le35",
    "category": "leadership",
    "question": "What is portfolio diversification in the context of QA risk strategy?",
    "options": [
      "Using multiple test automation frameworks to avoid vendor lock-in",
      "Spreading QA investment and focus across different risk areas, product lines, and test types rather than concentrating on a single area",
      "Hiring QA engineers with diverse programming language skills",
      "Running tests across multiple browsers and operating systems simultaneously"
    ],
    "answer": 1,
    "explanation": "Portfolio diversification in QA means spreading testing investment across different risk areas, product lines, and test types. Over-concentrating QA effort on one area (e.g., only functional testing) leaves other risk areas exposed, similar to how financial portfolio concentration creates vulnerability."
  },
  {
    "id": "le36",
    "category": "leadership",
    "question": "What executive-level metrics should a QA leader monitor to demonstrate the business impact of quality engineering?",
    "options": [
      "Number of test cases executed, lines of code covered, and test scripts maintained",
      "Team velocity, sprint burndown, and story points completed per engineer",
      "Revenue protected by prevented defects, cost of quality vs. investment, delivery turnaround time, customer retention impact, and profitability contribution",
      "Number of bugs found, severity distribution, and mean time to fix"
    ],
    "answer": 2,
    "explanation": "Executive-level QA metrics must translate quality outcomes into business language. Metrics like revenue protected by prevented defects, cost of quality vs. investment, delivery speed, customer satisfaction, and profitability impact resonate with leadership far more than technical test counts."
  },
  {
    "id": "le37",
    "category": "leadership",
    "question": "How should a QA leader design an AI-first quality organization that balances automation with human expertise?",
    "options": [
      "Automate all repetitive testing and reassign QA engineers to development roles",
      "Combine human expertise for risk assessment and exploratory testing with intelligent automation for regression, data generation, and triage",
      "Implement AI tools first and train the team afterward based on which tools are selected",
      "Outsource AI implementation to specialized vendors and keep the existing QA team focused on manual testing"
    ],
    "answer": 1,
    "explanation": "An AI-first quality organization combines human expertise in risk assessment, exploratory testing, and quality strategy with intelligent automation for high-volume, repetitive tasks. The goal is augmentation, not replacement, ensuring humans focus on judgment-intensive work while AI handles routine execution."
  },
  {
    "id": "le38",
    "category": "leadership",
    "question": "What is the single most important principle underpinning successful QA leadership in enterprise environments?",
    "options": [
      "Technical excellence in test automation frameworks and tools",
      "Strict adherence to formal testing methodologies and documentation standards",
      "Trust — between QA teams, development, product, clients, and leadership — enabling transparent quality communication",
      "Comprehensive test coverage metrics exceeding 90% across all codebases"
    ],
    "answer": 2,
    "explanation": "Trust is the foundation of effective QA leadership. When teams trust QA's judgment, quality conversations happen earlier, risks are raised without fear, and the organization makes better decisions. Technical skills matter, but without trust, quality information does not flow effectively."
  },
  {
    "id": "p1",
    "category": "performance",
    "question": "How do you design a performance test strategy for a cloud-native microservices application?",
    "options": [
      "Start with end-to-end tests and add unit-level performance tests as bottlenecks are identified",
      "Focus only on the slowest endpoint to maximize performance improvement per sprint",
      "Run performance tests before major releases only — not in daily CI/CD to avoid slowing the pipeline",
      "Define SLA baselines first; design load, stress, spike, and soak tests; test each service independently then integrate; gate everything in CI/CD"
    ],
    "answer": 3,
    "explanation": "Testing each microservice against its own SLA before layering end-to-end integration load isolates bottlenecks and prevents one slow service from masking the performance of others."
  },
  {
    "id": "p2",
    "category": "performance",
    "question": "What is the difference between stress testing and spike testing?",
    "options": [
      "Stress tests measure response time; spike tests measure error rate — complementary metrics for different failure modes",
      "Stress tests run for 24+ hours; spike tests run for under 5 minutes — duration is the key differentiator",
      "Stress tests use real user scripts; spike tests use synthetic load — fidelity is the key differentiator",
      "Stress tests push beyond peak load to find the breaking point; spike tests simulate sudden massive bursts like a flash sale or news event"
    ],
    "answer": 3,
    "explanation": "Soak/endurance tests catch memory leaks and connection pool exhaustion that only appear over hours. Spike tests validate graceful handling of flash sale traffic — a pattern common in hospitality and retail systems."
  },
  {
    "id": "p3",
    "category": "performance",
    "question": "What is the correct diagnostic workflow for a performance bottleneck in a microservices system?",
    "options": [
      "Check infrastructure metrics first (CPU, memory, disk) since most bottlenecks are resource exhaustion",
      "Start at the database layer since the majority of microservice bottlenecks trace back to slow SQL queries",
      "Run all diagnostic tools simultaneously to gather the maximum data in the shortest time",
      "Load generator shows symptom → APM traces show location → infrastructure metrics show cause → code profiler shows root — follow the trace, never guess"
    ],
    "answer": 3,
    "explanation": "Dynatrace distributed traces show exactly which service and method is responsible before drilling into CPU, memory, or I/O. Guessing the cause leads to fixing the wrong thing and re-running unnecessarily expensive load tests."
  },
  {
    "id": "p4",
    "category": "performance",
    "question": "Who should define performance SLAs, and what three inputs inform them?",
    "options": [
      "The QA team independently, based on industry benchmarks for similar application types",
      "The cloud provider, based on the infrastructure SLAs they guarantee under contract",
      "The engineering team alone, as they have the best understanding of what the system can technically achieve",
      "Product, engineering, and business stakeholders together — informed by historical production data, business abandonment tolerance, and infrastructure cost"
    ],
    "answer": 3,
    "explanation": "A QA-defined SLA nobody else owns is just a suggestion. Co-ownership is what makes SLAs enforceable — and once agreed, they are encoded as automated assertions in the pipeline that block deployments."
  },
  {
    "id": "p5",
    "category": "performance",
    "question": "What is service virtualization in performance testing and when is it essential?",
    "options": [
      "Virtualizing physical servers to reduce infrastructure costs during high-volume load test runs",
      "Creating virtual users that simulate realistic browser behavior for more accurate load test results",
      "Abstracting the service layer to enable testing without a running application in any environment",
      "Simulating dependent services that cannot handle load test traffic — used for third-party payment gateways, unready upstream services, or APIs where real load would cause harm"
    ],
    "answer": 3,
    "explanation": "Service virtualization with realistic latency (e.g. 120ms average, 5% variance) isolates exactly what is being tested and prevents results being corrupted by a slow, unavailable, or load-sensitive dependency."
  },
  {
    "id": "p6",
    "category": "performance",
    "question": "What is correlation in performance testing and what happens to test results without it?",
    "options": [
      "Correlation is matching test results to production monitoring data to validate real-world impact — without it, test results cannot be extrapolated to production behavior",
      "Correlation is statistical analysis of concurrency versus response time — without it, you cannot identify the knee of the performance curve",
      "Correlation is mapping API endpoints to test scenarios — without it, you risk testing the wrong endpoints under load",
      "Correlation extracts dynamic values (session tokens, CSRF tokens) from server responses and injects them into subsequent requests — without it, every virtual user sends the same token and the server rejects all but the first"
    ],
    "answer": 3,
    "explanation": "Without correlation, the load test measures error handling, not real performance. For a system with SSO and loyalty session management, correct correlation is the difference between a meaningful test and 10,000 401 errors."
  },
  {
    "id": "p7",
    "category": "performance",
    "question": "What is the correct structure of a JMeter test plan for an API?",
    "options": [
      "Test Suite → Test Cases → Assertions → Reports → Cleanup — the logical sequence for any test plan",
      "Ramp-up → Peak load → Ramp-down → Recovery → Baseline — the load profile phases for a complete test",
      "Thread Group → HTTP Defaults → Config Elements (CSV, Cookie Manager) → Samplers per API call → Assertions → Backend Listeners → Post-Processors for correlation",
      "Discovery → Design → Script → Execute → Analyse — the five-stage performance test lifecycle"
    ],
    "answer": 2,
    "explanation": "Listeners are disabled during actual runs and replaced with backend listeners pushing to InfluxDB/Grafana. Post-Processors handle dynamic correlation — extracting session tokens from login responses for all subsequent requests."
  },
  {
    "id": "p8",
    "category": "performance",
    "question": "How do you present performance test results to non-technical stakeholders?",
    "options": [
      "Share the raw JMeter HTML report with all response time charts and percentile distributions",
      "Focus on technical improvements: reduced p99, lower error rate, and higher throughput over the baseline",
      "Show infrastructure metrics (CPU, memory, network) to demonstrate the system is operating healthily",
      "Translate metrics into business impact: \"1 in 20 bookings takes 2+ seconds at peak — abandonment spikes after 2 seconds\" rather than \"p95 latency was 2.3s\" — lead with SLA status, then trend, then recommendation"
    ],
    "answer": 3,
    "explanation": "Three sections: what we found, what it means for the business, what we are doing about it. Decision-makers act on business outcomes, not percentile charts — the translation is your job as the QE leader."
  },
  {
    "id": "pe1",
    "category": "performance",
    "question": "What metric do you use in Playwright to measure the duration of a page load?",
    "options": [
      "Console timing",
      "Network timing",
      "Performance tracing",
      "All of the above"
    ],
    "answer": 2,
    "explanation": "Playwright provides performance tracing as a built-in feature, allowing developers to measure the duration of specific actions or actions chains. This helps identify performance bottlenecks and optimize load times."
  },
  {
    "id": "pe2",
    "category": "performance",
    "question": "What is the correct command to set the initial user load for a k6 test run?",
    "options": [
      "k6 run -u <number>",
      "k6 run --users=<number>",
      "k6 run -U <number>",
      "k6 run --user=<number>"
    ],
    "answer": 1,
    "explanation": "The correct command to set the initial user load for a k6 test run is k6 run --users=<number>. This option specifies the number of virtual users that should be simulated during the test."
  },
  {
    "id": "pe3",
    "category": "performance",
    "question": "What is the recommended methodology for creating a comprehensive QA strategy in a system with multiple microservices, based on industry-leading practices?",
    "options": [
      "Test-Driven Development (TDD)",
      "Behavior-Driven Development (BDD)",
      "Scenario-Based Testing",
      "Hybrid Approach"
    ],
    "answer": 3,
    "explanation": "The Hybrid Approach combines different testing methodologies to provide a comprehensive QA strategy for complex systems like microservices. It considers the strengths of each method and applies them accordingly."
  },
  {
    "id": "p9",
    "category": "performance",
    "question": "What is k6 and what makes it different from traditional performance testing tools like JMeter?",
    "options": [
      "k6 is a GUI-based tool that generates test scripts from recorded browser sessions",
      "k6 is a developer-centric CLI tool where tests are written in JavaScript, designed for CI/CD integration",
      "k6 is a cloud-only platform that requires a paid subscription for any usage",
      "k6 focuses exclusively on browser-level performance testing"
    ],
    "answer": 1,
    "explanation": "k6 is an open-source, developer-centric performance testing tool. Tests are written in JavaScript, run from the CLI, and are designed to integrate easily into CI/CD pipelines. Unlike JMeter's GUI-based approach, k6 treats tests as code."
  },
  {
    "id": "p10",
    "category": "performance",
    "question": "What is a virtual user (VU) in k6?",
    "options": [
      "A real person interacting with the application through a proxy",
      "A simulated user that runs the default function in a loop, generating concurrent load",
      "A browser instance that renders and interacts with the UI",
      "A mock server that responds to incoming requests"
    ],
    "answer": 1,
    "explanation": "Each VU in k6 runs the default exported function in a loop. More VUs means more concurrent simulated users hitting the service. VUs share the same script but maintain their own execution state."
  },
  {
    "id": "p11",
    "category": "performance",
    "question": "What are the four lifecycle functions in k6 and in what order do they execute?",
    "options": [
      "connect() → request() → validate() → disconnect()",
      "init (global scope) → setup() → default function (per VU) → teardown()",
      "before() → test() → after() → report()",
      "configure() → warmup() → execute() → cleanup()"
    ],
    "answer": 1,
    "explanation": "k6 has four lifecycle stages: init code runs once during script parsing, setup() runs once before all VUs start, the default function runs repeatedly for each VU, and teardown() runs once after all VUs finish."
  },
  {
    "id": "p12",
    "category": "performance",
    "question": "What are 'checks' in k6 and how do they differ from thresholds?",
    "options": [
      "Checks and thresholds are identical concepts with different names",
      "Checks validate individual responses (pass/fail assertions); thresholds are pass/fail criteria for the entire test run based on aggregate metrics",
      "Checks run before the test; thresholds run after",
      "Checks are optional but thresholds are mandatory"
    ],
    "answer": 1,
    "explanation": "Checks are per-request assertions (e.g., status is 200, body contains expected data). Thresholds are aggregate criteria for the entire test (e.g., p95 < 500ms, error rate < 1%). A failed threshold causes k6 to exit with non-zero status, failing the CI pipeline."
  },
  {
    "id": "p13",
    "category": "performance",
    "question": "What are the common load test types supported by k6 scenarios?",
    "options": [
      "Unit, integration, and end-to-end tests",
      "Smoke, load, stress, spike, and soak tests",
      "Functional, regression, and acceptance tests",
      "Alpha, beta, and gamma tests"
    ],
    "answer": 1,
    "explanation": "k6 supports smoke tests (minimal load to verify the script works), load tests (expected traffic), stress tests (beyond expected limits), spike tests (sudden traffic bursts), and soak/endurance tests (sustained load over hours to find memory leaks)."
  },
  {
    "id": "p14",
    "category": "performance",
    "question": "What is a k6 'scenario' and what advantage does it provide over simple VU/duration options?",
    "options": [
      "A scenario is a test report format",
      "Scenarios allow defining multiple independent workloads with different executors, VU counts, and timing in a single test",
      "A scenario is a way to skip specific test functions",
      "Scenarios are only available in the k6 cloud version"
    ],
    "answer": 1,
    "explanation": "Scenarios let you define multiple independent workloads in a single test script. Each scenario can use a different executor (constant VUs, ramping VUs, per-second arrival rate, etc.), enabling complex traffic patterns like mixed API and browser users."
  },
  {
    "id": "p15",
    "category": "performance",
    "question": "What is the purpose of the 'ramping-arrival-rate' executor in k6?",
    "options": [
      "It gradually increases the number of VUs over time",
      "It controls the rate of new iterations per second, ramping up or down regardless of response times",
      "It randomly varies the request rate to simulate chaotic traffic",
      "It automatically adjusts VU count based on server response time"
    ],
    "answer": 1,
    "explanation": "The ramping-arrival-rate executor controls iterations per second rather than concurrent VUs. This models real-world traffic more accurately — if the server slows down, k6 spawns more VUs to maintain the target request rate, exposing queuing effects."
  },
  {
    "id": "p16",
    "category": "performance",
    "question": "What is SharedArray in k6 and why is it important for large test data sets?",
    "options": [
      "A distributed data structure shared between k6 instances in a cluster",
      "A read-only array that is loaded once and shared across all VUs to minimize memory usage",
      "A JavaScript array that automatically syncs between setup and default functions",
      "A cloud storage mechanism for persisting test results"
    ],
    "answer": 1,
    "explanation": "SharedArray loads data once during init and shares the same memory across all VUs (read-only). Without it, each VU would get its own copy of the data, causing memory usage to multiply by the VU count — critical for tests with large CSV files."
  },
  {
    "id": "p17",
    "category": "performance",
    "question": "How do you parameterize k6 tests with external data files?",
    "options": [
      "Use environment variables for all test data",
      "Use SharedArray with open() to load CSV/JSON files during init, then access rows per VU using VU index",
      "Embed all test data directly in the script as constants",
      "k6 does not support external data files"
    ],
    "answer": 1,
    "explanation": "Use open() to read CSV/JSON files during the init phase, wrap them in SharedArray for memory efficiency, then access specific rows using __VU and __ITER built-in variables to ensure each VU uses different data."
  },
  {
    "id": "p18",
    "category": "performance",
    "question": "How does k6 handle cookies and session management?",
    "options": [
      "Cookies must be managed manually using custom headers",
      "k6 automatically manages cookies per VU with a built-in cookie jar, similar to a browser session",
      "Cookies are shared across all VUs for consistency",
      "k6 does not support cookies"
    ],
    "answer": 1,
    "explanation": "k6 maintains a cookie jar per VU that automatically stores and sends cookies, simulating a real browser session. You can also manually set, get, and clear cookies for fine-grained control."
  },
  {
    "id": "p19",
    "category": "performance",
    "question": "What is the purpose of 'groups' in k6?",
    "options": [
      "Grouping VUs into teams with different scripts",
      "Organizing related requests under a named group for clearer reporting and timing metrics",
      "Creating separate test suites within a single file",
      "Grouping test data by category"
    ],
    "answer": 1,
    "explanation": "Groups organize related HTTP requests (e.g., 'Login Flow', 'Search Products') under a named label. k6 reports timing metrics per group, making it easy to identify which user flow is the bottleneck."
  },
  {
    "id": "p20",
    "category": "performance",
    "question": "How do you tag requests in k6 and why?",
    "options": [
      "Tags are decorative labels with no functional purpose",
      "Tags add custom key-value metadata to requests, enabling filtering and grouping in metrics output and dashboards",
      "Tags replace the URL in metrics output for privacy",
      "Tags are only available in k6 cloud"
    ],
    "answer": 1,
    "explanation": "Tags attach metadata (e.g., {type: 'api', endpoint: '/login'}) to requests. They enable filtering metrics in output (e.g., show p95 only for login requests) and creating targeted thresholds."
  },
  {
    "id": "p21",
    "category": "performance",
    "question": "How do you test WebSocket endpoints with k6?",
    "options": [
      "k6 does not support WebSocket testing",
      "Use the k6/ws module to open connections, send/receive messages, and assert on response content and timing",
      "Convert WebSocket to HTTP polling before testing",
      "Use a separate tool and import results into k6"
    ],
    "answer": 1,
    "explanation": "k6 has a built-in k6/ws module for WebSocket testing. You can open connections, send messages, set up event handlers for incoming messages, and use checks to validate response content and timing."
  },
  {
    "id": "p22",
    "category": "performance",
    "question": "How do you integrate k6 into a CI/CD pipeline?",
    "options": [
      "Run k6 manually after each deployment",
      "Add a k6 run step with thresholds that fail the pipeline on performance regression",
      "k6 requires a dedicated performance testing server and cannot run in CI",
      "Use k6 only for pre-release performance validation"
    ],
    "answer": 1,
    "explanation": "Add k6 as a pipeline step (e.g., GitHub Actions, Jenkins) that runs tests with defined thresholds. If any threshold fails (e.g., p95 > 500ms), k6 exits with a non-zero code, failing the pipeline and blocking the deployment."
  },
  {
    "id": "p23",
    "category": "performance",
    "question": "How do you output k6 results to external monitoring systems?",
    "options": [
      "k6 only supports console output",
      "Use output extensions to stream metrics to InfluxDB, Prometheus, Datadog, Grafana Cloud, or JSON files",
      "Manually copy results from the terminal",
      "Use k6 cloud as the only option for result storage"
    ],
    "answer": 1,
    "explanation": "k6 supports multiple output backends via the --out flag. Common integrations include InfluxDB+Grafana for dashboards, Prometheus for alerting, Datadog for unified observability, and JSON files for custom analysis."
  },
  {
    "id": "p24",
    "category": "performance",
    "question": "How does k6 handle distributed load testing?",
    "options": [
      "k6 runs distributed tests natively with built-in clustering",
      "Use k6 operator for Kubernetes to distribute load across multiple pods, or k6 cloud for managed distribution",
      "Distributed testing is not possible with k6",
      "Each VU automatically runs on a separate machine"
    ],
    "answer": 1,
    "explanation": "For distributed load, use the k6 operator to run across Kubernetes pods, or k6 cloud for managed global distribution. Each pod runs a portion of the total VUs, and results are aggregated centrally."
  },
  {
    "id": "p25",
    "category": "performance",
    "question": "What is 'think time' in k6 and why is it important for realistic load tests?",
    "options": [
      "Think time is the server processing time for each request",
      "Think time is a pause between VU iterations (using sleep()) that simulates real user behavior between actions",
      "Think time is the timeout for failed requests",
      "Think time is the warm-up period before the test starts"
    ],
    "answer": 1,
    "explanation": "Think time (sleep()) simulates the delay between user actions — reading a page, filling a form, etc. Without think time, VUs hammer the server unrealistically fast, producing misleading results that don't reflect real-world usage patterns."
  },
  {
    "id": "p26",
    "category": "performance",
    "question": "What are custom metrics in k6 and when would you create one?",
    "options": [
      "Custom metrics replace the built-in metrics for cleaner output",
      "Custom metrics track application-specific measurements like business transaction duration or data processing latency beyond built-in HTTP metrics",
      "Custom metrics are only available in the paid version",
      "Custom metrics are for labeling tests, not for measurement"
    ],
    "answer": 1,
    "explanation": "Custom metrics (Counter, Gauge, Rate, Trend) track measurements specific to your application. For example, tracking order processing time, items per search result, or payment gateway latency — metrics that k6's built-in HTTP metrics don't capture."
  },
  {
    "id": "p27",
    "category": "performance",
    "question": "When comparing k6 vs JMeter vs Gatling, which tool is best suited for developer-driven CI/CD performance testing?",
    "options": [
      "JMeter, because it has the most plugins and community support",
      "Gatling, because it uses Scala which is better for complex scenarios",
      "k6, because tests are JavaScript code that lives alongside application code and integrates natively with CI pipelines",
      "All three are equally suitable for CI/CD integration"
    ],
    "answer": 2,
    "explanation": "k6 excels in CI/CD because tests are plain JavaScript files (version-controlled like code), run from CLI (no GUI needed), and exit with non-zero status on threshold failures. JMeter requires XML configs and a GUI, Gatling uses Scala."
  },
  {
    "id": "p28",
    "category": "performance",
    "question": "How do you establish a performance baseline and detect regressions?",
    "options": [
      "Compare results to industry benchmarks published by testing organizations",
      "Run the same test repeatedly and take the average as the baseline",
      "Record baseline metrics during a known-good state, then set thresholds that flag deviations beyond an acceptable tolerance in CI",
      "Use production monitoring data exclusively as the baseline"
    ],
    "answer": 2,
    "explanation": "Establish baselines by running tests against a known-good build under controlled conditions. Store results, then use thresholds in CI (e.g., p95 must not exceed baseline + 10%) to automatically detect regressions before deployment."
  },
  {
    "id": "p29",
    "category": "performance",
    "question": "How do you test the scalability of a cloud data pipeline under increased load?",
    "options": [
      "Double the hardware and re-run the same test",
      "Gradually increase data volume and throughput while monitoring auto-scaling triggers, processing latency, and resource utilization at each tier",
      "Test only the database layer since that is always the bottleneck",
      "Scalability testing is only possible in production"
    ],
    "answer": 1,
    "explanation": "Scalability testing involves gradually increasing load while monitoring how the system scales — auto-scaling triggers, queue depths, processing latency per tier, and resource utilization. Test at each component (ingestion, processing, storage, serving) to identify which tier becomes the bottleneck."
  },
  {
    "id": "p30",
    "category": "performance",
    "question": "What is the purpose of k6 extensions (xk6)?",
    "options": [
      "Extensions add new themes to the k6 CLI output",
      "Extensions allow building custom k6 binaries with additional protocol support (gRPC, SQL, Kafka, browser) via Go modules",
      "Extensions are plugins that only work in k6 cloud",
      "Extensions replace the JavaScript runtime with another language"
    ],
    "answer": 1,
    "explanation": "xk6 is a build tool that creates custom k6 binaries with additional capabilities. Extensions add support for protocols like gRPC, SQL databases, Kafka, Redis, and even browser-level testing, extending k6 beyond HTTP."
  },
  {
    "id": "p31",
    "category": "performance",
    "question": "What are the six types of performance tests, and which one specifically catches memory leaks?",
    "options": [
      "Smoke, regression, integration, acceptance, exploratory, and security; exploratory testing catches memory leaks",
      "Load, stress, soak/endurance, spike, volume, and scalability; soak/endurance tests catch memory leaks by sustaining load over extended periods",
      "Unit, component, contract, integration, E2E, and visual; E2E tests catch memory leaks through full journey simulation",
      "Baseline, benchmark, capacity, configuration, failover, and recovery; capacity tests catch memory leaks"
    ],
    "answer": 1,
    "explanation": "The six performance test types are load (expected traffic), stress (beyond expected), soak/endurance (sustained over hours), spike (sudden burst), volume (large data), and scalability (resource scaling). Soak tests specifically reveal memory leaks and connection pool exhaustion that only appear over time."
  },
  {
    "id": "p32",
    "category": "performance",
    "question": "What is the correct approach for integrating performance testing into a CI/CD pipeline without slowing deployments?",
    "options": [
      "Run the full load test suite before every deployment, accepting slower deployments for better quality",
      "Run a short performance smoke test (2-3 min, low load) on every merge to main, and run full load tests nightly or before releases",
      "Skip performance testing in CI entirely and rely on production monitoring to catch regressions",
      "Run performance tests only quarterly as part of the release planning cycle"
    ],
    "answer": 1,
    "explanation": "A tiered approach works best: short performance smoke tests (30 seconds, 100 virtual users) run in CI on every merge to catch obvious regressions, while comprehensive load tests (15+ minutes, thousands of VUs) run nightly or before releases to validate SLOs thoroughly."
  },
  {
    "id": "p33",
    "category": "performance",
    "question": "When diagnosing a performance bottleneck, what is the USE method?",
    "options": [
      "User Story Estimation: a method for estimating performance test development effort",
      "Utilization, Saturation, and Errors measured per resource: a systematic approach to identifying which component (CPU, memory, I/O, network) is the bottleneck",
      "Unified System Evaluation: a framework for comparing performance across different environments",
      "Unit Stress Execution: running unit tests under simulated load conditions"
    ],
    "answer": 1,
    "explanation": "The USE method examines Utilization (how busy the resource is), Saturation (queued work beyond capacity), and Errors (error events) for each system resource. This systematic approach identifies which resource saturates first, directing investigation before expensive guesswork."
  },
  {
    "id": "p34",
    "category": "performance",
    "question": "What is chaos engineering, and how does it differ from traditional performance testing?",
    "options": [
      "Chaos engineering is just another name for stress testing with randomized parameters",
      "Chaos engineering proactively injects failures to verify system resilience, while performance testing measures behavior under load; they are complementary approaches",
      "Chaos engineering replaces performance testing in cloud-native environments",
      "Chaos engineering is only applicable to Netflix-scale systems and is not relevant for typical applications"
    ],
    "answer": 1,
    "explanation": "Traditional performance testing verifies expected behavior under load. Chaos engineering (using tools like Gremlin, LitmusChaos) injects failures like pod kills, network latency, and disk pressure to verify the system handles unexpected conditions gracefully. Both are essential for production readiness."
  },
  {
    "id": "p35",
    "category": "performance",
    "question": "What is the Apdex score, and why is it preferred over average response time for reporting?",
    "options": [
      "Apdex is an internal application performance index measured by APM tools; it replaces all other performance metrics",
      "Apdex combines satisfied, tolerating, and frustrated user counts into a 0-1 score representing overall user experience, while average response time hides tail latency",
      "Apdex only measures frontend rendering time and ignores server-side performance",
      "Apdex is a deprecated metric replaced by P95 latency in modern performance testing"
    ],
    "answer": 1,
    "explanation": "Apdex = (Satisfied + 0.5 x Tolerating) / Total, producing a 0-1 score. It provides a single user-experience-centric metric that is more meaningful than average response time, which can hide the fact that 5% of users experience unacceptable latency."
  },
  {
    "id": "p36",
    "category": "performance",
    "question": "Why is P99 latency more important than mean latency for SLA compliance?",
    "options": [
      "P99 is easier to calculate and requires less data processing than mean",
      "P99 reveals the worst-case experience for 1% of real users, which mean hides by averaging fast and slow requests together",
      "P99 is only important for financial applications; mean is sufficient for most other domains",
      "P99 and mean always move together so there is no practical difference"
    ],
    "answer": 1,
    "explanation": "Mean latency can look acceptable (200ms) while P99 is 8 seconds, meaning 1 in 100 users has a terrible experience. For SLAs, P99 (or P95) matters because it represents what real users in the tail actually experience, and at scale, even 1% of users is a large number."
  },
  {
    "id": "p37",
    "category": "performance",
    "question": "What is the key difference between testing horizontal scaling and auto-scaling in cloud environments?",
    "options": [
      "They are the same thing; horizontal scaling and auto-scaling are interchangeable terms",
      "Horizontal scaling tests whether adding instances improves throughput linearly; auto-scaling tests whether the system scales up fast enough to avoid degradation during sudden demand",
      "Horizontal scaling applies to databases; auto-scaling applies to application servers",
      "Horizontal scaling is manual; auto-scaling cannot be tested because it is managed by the cloud provider"
    ],
    "answer": 1,
    "explanation": "Horizontal scaling tests verify that adding instances produces proportional throughput gains (linear scaling). Auto-scaling tests verify that the system detects load increases and provisions new instances quickly enough (scale-out latency) to prevent user-facing degradation during traffic spikes."
  },
  {
    "id": "p38",
    "category": "performance",
    "question": "What performance metric combination provides the most complete picture of system health under load?",
    "options": [
      "Response time mean and total request count",
      "Response time percentiles (P90, P95, P99), throughput (requests per second), error rate, and resource utilization (CPU/memory/connection pool)",
      "CPU utilization and memory consumption only",
      "Pass/fail rate of functional tests executed during load"
    ],
    "answer": 1,
    "explanation": "A complete performance picture requires response time percentiles (not just mean), throughput, error rate, and resource utilization measured together. Each metric tells a different story: high throughput with high P99 indicates queuing, low error rate with high CPU indicates approaching capacity."
  },
  {
    "id": "te1",
    "category": "technology",
    "question": "What certification strategy would you oversee for various Align locations and legal manufacturers?",
    "options": [
      "Single-Point-of-Contact",
      "Multi-Site Certification",
      "Certification Body Management",
      "Audit Cycle Streamlining"
    ],
    "answer": 1,
    "explanation": "The correct answer is 'Single-Point-of-Contact'. The job description mentions that the candidate would be the single point of contact for communication with QMS certification bodies."
  },
  {
    "id": "te2",
    "category": "technology",
    "question": "In a GitHub Action workflow file, which keyword indicates the start of an 'only' block?",
    "options": [
      "uses",
      "with",
      "only",
      "steps"
    ],
    "answer": 2,
    "explanation": "The 'only' block is used to filter steps in the workflow file."
  },
  {
    "id": "te3",
    "category": "technology",
    "question": "What is the best way to manage release dependencies between multiple backend platforms and mobile applications when using GitHub Actions?",
    "options": [
      "Configure separate workflows for each platform",
      "Use a single workflow with conditional steps based on environment",
      "Leverage GitHub's built-in dependency management feature",
      "Implement a custom automation framework"
    ],
    "answer": 2,
    "explanation": "GitHub provides a built-in dependency management feature that allows you to specify dependencies between workflows. This approach ensures that your release process is orchestrated correctly and reduces the complexity of managing multiple workflows."
  },
  {
    "id": "te4",
    "category": "technology",
    "question": "In a Jenkins pipeline file, which option correctly specifies the number of executors for a given job?",
    "options": [
      "Number Of Nodes",
      "Node",
      "Executor Count",
      "Agent Instances"
    ],
    "answer": 2,
    "explanation": "The Executor Count option sets the number of executors for a job in Jenkins."
  },
  {
    "id": "te5",
    "category": "technology",
    "question": "What technology is commonly used to record and replay browser interactions, simplifying automation coding?",
    "options": [
      "Appium",
      "Selenium",
      "Cypress",
      "Postman"
    ],
    "answer": 2,
    "explanation": "Cypress simplifies the process of recording and replaying browser interactions, allowing for more efficient and effective test automation."
  },
  {
    "id": "te6",
    "category": "technology",
    "question": "What AI-powered coding assistant feature in GitHub does the candidate have hands-on experience with?",
    "options": [
      "CodeLens",
      "IntelliSense",
      "GitHub Copilot",
      "Readme"
    ],
    "answer": 2,
    "explanation": "The candidate has mentioned exposure to GitHub Copilot, an AI-powered coding assistant that provides real-time code suggestions and insights."
  },
  {
    "id": "te7",
    "category": "technology",
    "question": "Which cloud provider's client-side monitoring library is used to automatically capture Java-specific errors?",
    "options": [
      "AWS X-Ray",
      "Azure Application Insights",
      "Google Cloud Client Library for Java",
      "Dynatrace OneAgent"
    ],
    "answer": 3,
    "explanation": "The Google Cloud Client Library for Java includes a client-side monitoring library that can be used to automatically capture Java-specific errors."
  },
  {
    "id": "te8",
    "category": "technology",
    "question": "What is the correct Go command to execute an existing binary and pass it a custom flag?",
    "options": [
      "go run main.go -flag",
      "go build -o main /path/to/main go -flapg",
      "go run -c 1.17 main.go -flag",
      "go get github.com/example/main(go -flag)"
    ],
    "answer": 0,
    "explanation": "In Go, the correct way to run an existing binary and pass a custom flag is by using the 'go run' command. This command compiles and runs the program in a single step, allowing you to easily pass flags to your binary."
  },
  {
    "id": "te9",
    "category": "technology",
    "question": "What technology framework enables you to implement automated visual regression testing using Open CV, which detects changes in user interfaces?",
    "options": [
      "Applitools Eyes",
      "Testim",
      "Taiko Framework",
      "Katalon Studio"
    ],
    "answer": 0,
    "explanation": "Applitools Eyes is a popular open-source framework used for automated visual regression testing. It utilizes Open CV to detect changes in user interfaces, enabling the detection of visual differences between two UI states."
  },
  {
    "id": "te10",
    "category": "technology",
    "question": "Which dbt (data build tool) configuration file defines transformations and models, but is not executed directly?",
    "options": [
      "dbt_project.yml",
      "dbt_seeds.yml",
      "dbt_models.yml",
      "dbt_profiles.yml"
    ],
    "answer": 1,
    "explanation": "The dbt_project.yml file configures the overall project structure and does not execute transformations or models."
  },
  {
    "id": "te11",
    "category": "technology",
    "question": "What is straight-through processing (STP) in enterprise platforms, and why is it relevant to QA?",
    "options": [
      "A manual review process where every transaction is inspected by a human before approval",
      "Automated end-to-end processing of low-risk transactions without manual intervention, requiring thorough automation testing",
      "A database optimization technique for faster query execution in test environments",
      "A testing methodology where regression suites run sequentially without parallel execution"
    ],
    "answer": 1,
    "explanation": "Straight-through processing automates the complete handling of low-risk transactions from submission to completion without manual review. QA teams must validate the rules engine that determines which transactions qualify for STP and ensure edge cases are routed for manual review."
  },
  {
    "id": "te12",
    "category": "technology",
    "question": "What is workflow orchestration in enterprise platforms, and what QA challenge does it introduce?",
    "options": [
      "A system that generates test data automatically for integration tests",
      "Coordination of tasks, approvals, and system actions across multiple departments and services",
      "A CI/CD pipeline configuration tool for deploying microservices",
      "A load balancing technique that distributes test execution across multiple machines"
    ],
    "answer": 1,
    "explanation": "Workflow orchestration coordinates tasks, approvals, and automated actions across departments and services. For QA, this creates complex end-to-end testing scenarios where failures at any step can cascade, requiring thorough integration and state transition testing."
  },
  {
    "id": "te13",
    "category": "technology",
    "question": "What is OCR (Optical Character Recognition) technology, and what is its primary QA testing concern?",
    "options": [
      "A network protocol for secure file transfers between testing environments",
      "Technology that converts scanned documents into searchable digital text, requiring accuracy validation across document types",
      "An automated code review tool that scans source code for vulnerabilities",
      "A monitoring solution that captures on-screen errors during manual testing"
    ],
    "answer": 1,
    "explanation": "OCR converts scanned or photographed documents into machine-readable text. QA must validate recognition accuracy across different document qualities, fonts, languages, and formats, as well as test error handling for unreadable or ambiguous characters."
  },
  {
    "id": "te14",
    "category": "technology",
    "question": "What is cloud-native architecture, and which testing consideration is most critical for QA teams?",
    "options": [
      "Applications hosted on any cloud provider, requiring only browser compatibility testing",
      "Architecture designed for scalability and resilience using containers and orchestration, requiring resilience and chaos testing",
      "Legacy applications migrated to virtual machines in the cloud, requiring only smoke testing",
      "A deployment model where all services share a single database, simplifying data validation testing"
    ],
    "answer": 1,
    "explanation": "Cloud-native architecture is designed for scalability, resilience, and modern deployment using containers, orchestration, and distributed systems. QA must test auto-scaling behavior, failover scenarios, and service resilience through approaches like chaos engineering."
  },
  {
    "id": "te15",
    "category": "technology",
    "question": "What are microservices, and what unique testing challenge do they introduce compared to monolithic applications?",
    "options": [
      "Small teams that each own a single test suite, requiring team coordination testing",
      "Independent services that communicate via APIs, requiring contract testing and distributed system validation",
      "Miniature versions of production systems used exclusively for performance testing",
      "Pre-built software modules that eliminate the need for unit testing"
    ],
    "answer": 1,
    "explanation": "Microservices split large applications into smaller, independently deployable services that communicate via APIs. This introduces testing challenges around service contract validation, distributed transaction consistency, network failure handling, and end-to-end integration across service boundaries."
  },
  {
    "id": "te16",
    "category": "technology",
    "question": "What is a rules engine in an enterprise platform, and how should QA approach testing it?",
    "options": [
      "A code linting tool that enforces coding standards, tested by running static analysis",
      "A system that automatically applies configurable business logic and approval criteria, requiring combinatorial testing of rule interactions",
      "A project management tool that assigns tasks based on team capacity",
      "A database constraint system that prevents invalid data entry, tested through schema validation"
    ],
    "answer": 1,
    "explanation": "Rules engines automatically apply business logic, approval criteria, and routing decisions based on configurable rules. QA must test individual rules, rule interactions, priority conflicts, boundary conditions, and the impact of rule changes on existing workflows."
  },
  {
    "id": "te17",
    "category": "technology",
    "question": "How is AI used in enterprise platforms for risk assessment and decision-making?",
    "options": [
      "AI replaces all human decision-making with fully autonomous approval workflows",
      "AI analyzes financial data, detects anomalies, prioritizes risks, and improves decision accuracy while humans validate outcomes",
      "AI is limited to generating test reports and dashboards for management review",
      "AI only handles chatbot interactions and has no role in backend processing"
    ],
    "answer": 1,
    "explanation": "AI in enterprise platforms analyzes financial data, detects anomalies, prioritizes risks, and improves decision accuracy. QA teams must validate AI model outputs, test for bias, verify explainability of decisions, and ensure human-in-the-loop oversight remains functional."
  },
  {
    "id": "te18",
    "category": "technology",
    "question": "What is e-signature technology integration, and what must QA validate?",
    "options": [
      "A biometric scanning system requiring only hardware compatibility testing",
      "Technology that enables legal electronic signing of documents, requiring validation of signing workflows, audit trails, and compliance",
      "An email notification system that alerts users when documents are ready",
      "A version control system for tracking document changes over time"
    ],
    "answer": 1,
    "explanation": "E-signature technology allows legally binding electronic signing of documents. QA must validate the signing workflow, signer authentication, document integrity after signing, audit trail completeness, multi-party signing sequences, and compliance with electronic signature regulations."
  },
  {
    "id": "te19",
    "category": "technology",
    "question": "What is data validation in enterprise systems, and why is it a high-priority QA focus area?",
    "options": [
      "The process of backing up data to prevent loss, requiring backup verification tests",
      "Ensuring submitted information is accurate, complete, and consistent across systems, preventing downstream processing errors",
      "Converting data between different file formats for cross-system compatibility",
      "Encrypting sensitive data fields to meet security compliance requirements"
    ],
    "answer": 1,
    "explanation": "Data validation ensures that submitted information is accurate, complete, and conforms to expected formats and business rules. QA must test validation rules for boundary conditions, required fields, cross-field dependencies, and error messaging for invalid submissions."
  },
  {
    "id": "te20",
    "category": "technology",
    "question": "When modernizing a legacy enterprise platform, which approach combines the most critical technical strategies?",
    "options": [
      "Rewriting the entire application from scratch in a single release cycle",
      "Cloud migration, API-first design, workflow automation, analytics integration, and AI-assisted processing",
      "Simply upgrading the existing database and adding a new front-end UI layer",
      "Outsourcing all development to a third-party vendor while maintaining the existing architecture"
    ],
    "answer": 1,
    "explanation": "Legacy platform modernization typically combines cloud migration for scalability, API-first design for integration, workflow automation for efficiency, analytics for data-driven decisions, and AI for intelligent processing. QA must test each layer and their interactions during phased migration."
  },
  {
    "id": "te21",
    "category": "technology",
    "question": "What is chaos engineering in a QE context, and what is its primary goal?",
    "options": [
      "Randomly deleting test data to verify backup procedures work correctly",
      "Intentionally injecting failures into a system to verify it can withstand turbulent conditions and recover gracefully",
      "Running tests in random order to find hidden dependencies between test cases",
      "Generating random user input to test application boundary conditions"
    ],
    "answer": 1,
    "explanation": "Chaos engineering intentionally injects failures (network latency, pod crashes, disk pressure) into production-like environments to verify the system degrades gracefully. Tools like Chaos Monkey and Litmus help QE teams validate resilience before real incidents occur."
  },
  {
    "id": "te22",
    "category": "technology",
    "question": "How do you test Kubernetes pod autoscaling behavior under load?",
    "options": [
      "Manually increase the replica count and observe if the application handles more traffic",
      "Generate sustained load exceeding current capacity, then monitor HPA metrics, pod spin-up time, load balancer registration, and graceful scale-down after the load subsides",
      "Disable autoscaling and test with the maximum number of replicas pre-provisioned",
      "Only test autoscaling in production since lower environments lack realistic traffic patterns"
    ],
    "answer": 1,
    "explanation": "Testing autoscaling requires generating load that triggers the Horizontal Pod Autoscaler, then validating the full cycle: metric threshold breach, new pod scheduling, readiness probe passing, load balancer registration, traffic distribution, and graceful scale-down with connection draining."
  },
  {
    "id": "te23",
    "category": "technology",
    "question": "How is Dynatrace used during and after a performance test?",
    "options": [
      "Only for generating HTML performance reports after the test completes",
      "To replace the load generator by simulating virtual users directly from the APM platform",
      "During the test to trace distributed transactions in real time and pinpoint bottlenecks; after the test to compare baselines and identify regression trends",
      "Exclusively for monitoring infrastructure CPU and memory, not application-level metrics"
    ],
    "answer": 2,
    "explanation": "During a performance test, Dynatrace PurePath traces every transaction end-to-end across microservices, revealing which service and method is the bottleneck. After the test, baseline comparison highlights regressions between builds and informs tuning priorities."
  },
  {
    "id": "te24",
    "category": "technology",
    "question": "How do you use Splunk to correlate application logs with performance test events?",
    "options": [
      "Export Splunk logs to a spreadsheet and manually match timestamps with load test events",
      "Use Splunk only for security log analysis, not performance correlation",
      "Tag load test phases with unique identifiers, then query Splunk to correlate log patterns, error spikes, and latency changes to specific test ramp stages",
      "Replace Splunk with the load generator's built-in log viewer for simpler correlation"
    ],
    "answer": 2,
    "explanation": "Injecting unique test run identifiers into log entries allows Splunk queries to isolate logs from a specific test phase. Correlating error rate spikes and slow query logs with ramp-up stages reveals bottlenecks that aggregate metrics alone would miss."
  },
  {
    "id": "te25",
    "category": "technology",
    "question": "What are quality gates in a CI/CD pipeline, and how should they be enforced?",
    "options": [
      "Manual approval steps where a QA manager reviews every build before deployment",
      "Automated checkpoints that enforce pass/fail criteria (test pass rate, code coverage, security scan results, performance thresholds) and block deployment if any criteria fail",
      "Weekly scheduled review meetings where the team decides which builds can be promoted",
      "Dashboard reports that show quality trends but do not block any deployments"
    ],
    "answer": 1,
    "explanation": "Quality gates are automated pipeline checkpoints that enforce measurable criteria before a build progresses. Effective gates include unit test pass rate, minimum code coverage, zero critical security vulnerabilities, and performance thresholds — all enforced programmatically to prevent human bypass."
  },
  {
    "id": "te26",
    "category": "technology",
    "question": "What is the purpose of a code review process within a QA automation team?",
    "options": [
      "To ensure all test scripts follow the same naming convention and nothing else",
      "To catch logic errors, enforce framework conventions, share knowledge across the team, and prevent test debt accumulation",
      "To slow down the development process so fewer changes are released per sprint",
      "To replace automated linting tools with manual inspection of every line of code"
    ],
    "answer": 1,
    "explanation": "Code reviews in QA teams catch flaky locator strategies, missing assertions, poor test isolation, and framework anti-patterns. They also serve as a knowledge-sharing mechanism, ensuring the team collectively understands the automation codebase rather than relying on individual ownership."
  },
  {
    "id": "te27",
    "category": "technology",
    "question": "What is Infrastructure as Code (IaC) and how does it relate to quality engineering?",
    "options": [
      "Writing application code that runs on cloud infrastructure instead of local servers",
      "Managing and provisioning test environments through machine-readable definition files, enabling reproducible, version-controlled environments",
      "A technique for writing test scripts that interact directly with cloud provider APIs",
      "A methodology where infrastructure teams write the test automation code instead of QA"
    ],
    "answer": 1,
    "explanation": "IaC tools like Terraform and Pulumi define environments as code, enabling QA to spin up identical test environments on demand, version-control environment configurations, and eliminate environment drift as a source of test failures."
  },
  {
    "id": "te28",
    "category": "technology",
    "question": "How do you test non-deterministic AI agent behavior where the same input may not produce the same output?",
    "options": [
      "Run each test once and accept whatever output the AI produces as correct",
      "Disable the AI model's randomness parameter and test only deterministic outputs",
      "Use semantic validation (intent matching, constraint checking, output boundary assertions) instead of exact string matching, and run statistical sampling across multiple executions",
      "Test the AI model only in isolation using unit tests and skip integration testing entirely"
    ],
    "answer": 2,
    "explanation": "Non-deterministic AI outputs require testing strategies that validate intent rather than exact matches. Semantic assertions check that outputs meet constraints (correct format, relevant content, within safety guardrails) while statistical sampling detects inconsistency patterns across multiple runs."
  },
  {
    "id": "te29",
    "category": "technology",
    "question": "What is contract testing and when is it essential in a microservices architecture?",
    "options": [
      "Testing legal contracts and terms of service pages for accuracy and completeness",
      "Verifying that API consumers and providers agree on the request/response schema, preventing breaking changes when services deploy independently",
      "Testing network connectivity contracts between cloud regions to ensure latency SLAs are met",
      "Validating that third-party vendor API pricing contracts match the billing dashboard"
    ],
    "answer": 1,
    "explanation": "Contract testing (using tools like Pact) verifies that API consumers and providers share a mutual understanding of the API contract. It catches breaking changes before deployment, which is critical when microservices are deployed independently by different teams."
  },
  {
    "id": "te30",
    "category": "technology",
    "question": "How do you test feature flags (e.g., LaunchDarkly) in a CI/CD pipeline?",
    "options": [
      "Feature flags do not need testing because they only control UI visibility",
      "Test all code paths for both flag-on and flag-off states, validate flag-dependent behavior in automated tests, and ensure stale flags are cleaned up to prevent technical debt",
      "Only test the flag-on state since that represents the new feature being shipped",
      "Test feature flags manually in a staging environment after deployment"
    ],
    "answer": 1,
    "explanation": "Feature flag testing must cover both states (on/off), the transition between states, and combinations with other flags. Automated tests should parameterize flag states. Stale flags that remain in code after full rollout create hidden complexity and should be tracked for cleanup."
  },
  {
    "id": "te31",
    "category": "technology",
    "question": "What is OpenTelemetry and how does it integrate with QE practices?",
    "options": [
      "A test automation framework for generating end-to-end tests from API specifications",
      "An open-source observability framework that provides standardized APIs for collecting traces, metrics, and logs, giving QE teams production-quality signals for test validation",
      "A communication protocol for sending test results between CI/CD pipeline stages",
      "A cloud-native database designed specifically for storing test execution history"
    ],
    "answer": 1,
    "explanation": "OpenTelemetry provides vendor-neutral instrumentation for distributed tracing, metrics, and logging. QE teams use it to validate that services emit correct telemetry, correlate test failures with trace data, and ensure observability coverage matches critical user journeys."
  },
  {
    "id": "te32",
    "category": "technology",
    "question": "What is the difference between SLOs (Service Level Objectives) and SLIs (Service Level Indicators)?",
    "options": [
      "SLOs and SLIs are the same thing with different names used by different teams",
      "SLOs are the target thresholds a service aims to meet; SLIs are the actual measured metrics that track whether the SLO is being achieved",
      "SLOs are defined by the QA team; SLIs are defined by the operations team",
      "SLOs apply only to production environments; SLIs apply only to test environments"
    ],
    "answer": 1,
    "explanation": "SLIs are the concrete measurements (e.g., request latency, error rate, availability percentage). SLOs are the target values for those measurements (e.g., p99 latency under 200ms, 99.9% availability). QE teams validate that applications meet SLOs by asserting against SLIs in pipelines."
  },
  {
    "id": "te33",
    "category": "technology",
    "question": "What guardrails should you build around AI-assisted test generation at enterprise scale?",
    "options": [
      "No guardrails are needed since AI-generated tests are inherently more reliable than human-written tests",
      "Only allow AI to generate unit tests, never integration or end-to-end tests",
      "Human review of generated tests, validation that tests follow framework conventions, deduplication checks against existing coverage, and assertion quality verification",
      "Restrict AI test generation to a single approved LLM vendor to simplify procurement"
    ],
    "answer": 2,
    "explanation": "AI-generated tests can have shallow assertions, duplicate existing coverage with different wording, or violate framework conventions. Guardrails include mandatory human review, convention linting, semantic deduplication against the existing suite, and verification that assertions test meaningful behavior."
  },
  {
    "id": "te34",
    "category": "technology",
    "question": "How do you optimize an existing test automation framework that has become slow or flaky?",
    "options": [
      "Rewrite the entire framework from scratch using the latest tool",
      "Increase the test timeout values so flaky tests have more time to pass",
      "Analyze failure patterns to categorize flakiness sources, parallelize independent tests, fix shared state issues, replace brittle locators, and add retry logic only where infrastructure instability is the root cause",
      "Delete all failing tests and only keep the ones that consistently pass"
    ],
    "answer": 2,
    "explanation": "Framework optimization starts with root cause analysis of failures: environment issues, shared test state, timing-dependent assertions, or brittle selectors. Parallelization, test isolation, stable locator strategies, and targeted retries address specific categories without masking real defects."
  },
  {
    "id": "te35",
    "category": "technology",
    "question": "What is the primary architectural goal when designing test automation for a large-scale CI/CD pipeline?",
    "options": [
      "Maximize the total number of test cases to achieve comprehensive coverage",
      "Fast feedback loops, parallelization, environment isolation, and determinism with no shared state between tests",
      "Run all tests sequentially to ensure accurate reporting of failures",
      "Focus automation exclusively on E2E tests since they provide the most business value"
    ],
    "answer": 1,
    "explanation": "A well-designed test automation architecture prioritizes fast feedback (unit/lint under 5 min), parallel execution via sharding, containerized environment isolation per test run, and deterministic tests with no shared state between them."
  },
  {
    "id": "te36",
    "category": "technology",
    "question": "What is the most effective architectural solution for eliminating flaky tests caused by timing issues?",
    "options": [
      "Add longer sleep() calls to give the application more time to respond",
      "Run the test multiple times and accept it if it passes at least once",
      "Use explicit wait conditions that poll for expected state changes instead of arbitrary sleep durations",
      "Move all flaky tests to a nightly run where timing is less critical"
    ],
    "answer": 2,
    "explanation": "Flaky tests caused by timing issues should be fixed with explicit wait conditions (e.g., Playwright auto-wait) that poll until the expected state is reached, rather than arbitrary sleep() calls which are unreliable and slow."
  },
  {
    "id": "te37",
    "category": "technology",
    "question": "When evaluating test automation tools for an organization, what approach provides the most reliable basis for decision-making?",
    "options": [
      "Select the tool with the highest market share based on industry analyst reports",
      "Choose the tool recommended by the engineering team's most senior developer",
      "Run a time-boxed proof of concept with the same test scenarios in each candidate tool and compare results",
      "Select the tool with the lowest licensing cost to maximize budget efficiency"
    ],
    "answer": 2,
    "explanation": "A PoC (proof of concept) with identical test scenarios across candidate tools provides data-driven evidence for tool selection, evaluating real-world capabilities like cross-browser support, debugging experience, and team onboarding rather than relying on marketing claims."
  },
  {
    "id": "te38",
    "category": "technology",
    "question": "What is the primary purpose of service virtualization in a CI pipeline?",
    "options": [
      "To create virtual machines for each test run to improve isolation",
      "To simulate dependent services that are unavailable, unstable, or costly in test environments",
      "To run tests on virtual browsers instead of real ones for faster execution",
      "To compress test artifacts for faster storage and retrieval"
    ],
    "answer": 1,
    "explanation": "Service virtualization simulates the behavior of dependent components like third-party APIs, payment processors, or databases, enabling tests to run independently of external dependencies that may be unavailable, unstable, or expensive to call in CI pipelines."
  },
  {
    "id": "te39",
    "category": "technology",
    "question": "When does a Page Object Model (POM) become an anti-pattern, and what alternative should be considered?",
    "options": [
      "POM is never an anti-pattern; it is always the best practice for any UI automation project",
      "When page objects become God classes with embedded test logic; consider the Screenplay pattern for better separation of concerns",
      "When the application has fewer than 10 pages; use raw selectors instead for simplicity",
      "When running tests in parallel, since POM cannot handle concurrent access to page elements"
    ],
    "answer": 1,
    "explanation": "POM becomes an anti-pattern when page objects grow into God classes containing conditional test logic. The Screenplay pattern (Actors, Tasks, Questions) provides better separation of concerns for complex flows, especially in component-based applications."
  },
  {
    "id": "te40",
    "category": "technology",
    "question": "What is the most effective approach to cross-browser test strategy when CI suite execution time is a constraint?",
    "options": [
      "Run all tests on all browser/OS combinations on every build to ensure maximum coverage",
      "Test only on Chrome since it has the largest market share and skip all other browsers",
      "Use analytics data to tier browser/OS combinations: full regression on Tier 1 in CI, smoke tests on Tier 2 nightly, and exploratory on Tier 3",
      "Randomly select different browsers for each CI run to distribute coverage over time"
    ],
    "answer": 2,
    "explanation": "A risk-based cross-browser strategy uses real user analytics to prioritize. Tier 1 browsers (80%+ users) get full regression in CI, Tier 2 (next 15%) get nightly smoke tests, and Tier 3 (remaining) get periodic exploratory testing."
  },
  {
    "id": "te41",
    "category": "technology",
    "question": "How should test suites be parallelized to reduce CI pipeline execution time?",
    "options": [
      "Run all tests in a single thread but on a faster machine with more CPU cores",
      "Shard test suites by file, by tag, or by historical timing data across multiple parallel jobs",
      "Only parallelize E2E tests since unit tests are already fast enough",
      "Use test prioritization to run only the most important tests and skip the rest"
    ],
    "answer": 1,
    "explanation": "Test parallelization works by sharding suites across multiple jobs. Sharding can be done by file, by tag grouping, or by timing history (balancing shard duration). This approach reduced one team's suite from 90 minutes to 8 minutes."
  },
  {
    "id": "te42",
    "category": "technology",
    "question": "What is a flaky test quarantine mechanism and why is it important for CI reliability?",
    "options": [
      "A system that automatically deletes tests that fail more than three times",
      "A process where flaky tests are tagged and isolated so they do not block builds, while being tracked for resolution",
      "A setting that reruns failed tests up to five times before marking them as failures",
      "A dashboard that displays all test results regardless of flakiness status"
    ],
    "answer": 1,
    "explanation": "A flaky test quarantine mechanism tags tests identified as non-deterministic, excludes them from build-blocking gates, and routes them for investigation. This prevents teams from ignoring CI signals due to known flaky failures while tracking them as a metric."
  },
  {
    "id": "te43",
    "category": "technology",
    "question": "What artifact strategy is recommended for test failures in CI pipelines?",
    "options": [
      "Capture screenshots, videos, and traces for every test run regardless of outcome",
      "Never capture artifacts since they consume storage and slow down pipelines",
      "Capture screenshots, videos, and traces only on failure to balance debugging capability with pipeline performance",
      "Only capture console logs since visual artifacts are not useful for debugging"
    ],
    "answer": 2,
    "explanation": "Best practice is to capture debugging artifacts (screenshots, videos, traces) only on failure. This balances having rich diagnostic data when needed with not bloating storage or slowing pipelines on passing tests."
  },
  {
    "id": "te44",
    "category": "technology",
    "question": "What distinguishes a Component Object Model from a Page Object Model in test automation for React or Vue applications?",
    "options": [
      "Component Object Model is the COM interface used in Windows programming",
      "Component Object Model maps to individual reusable UI components rather than entire pages, enabling composition and reuse",
      "Component Object Model is just a different name for Page Object Model used in mobile testing",
      "Component Object Model requires a specific testing framework while POM works with any framework"
    ],
    "answer": 1,
    "explanation": "In component-based applications (React, Vue, Angular), a Component Object Model maps each reusable UI component to a test object. Unlike page-level POM, these composable objects mirror the component hierarchy and enable more maintainable tests."
  },
  {
    "id": "te45",
    "category": "technology",
    "question": "What is the recommended approach when CI tests need to interact with third-party payment processing APIs?",
    "options": [
      "Call the real payment API in every test run to ensure maximum fidelity",
      "Skip payment-related tests entirely in CI and run them manually before release",
      "Use WireMock to record real API responses and replay them in CI, avoiding costs and external dependency",
      "Use only unit tests for payment flows and never test the integration layer"
    ],
    "answer": 2,
    "explanation": "WireMock record/replay allows recording real payment API responses once and replaying them in CI. This eliminates per-call costs, removes dependency on external service availability, and makes tests deterministic and fast."
  },
  {
    "id": "te46",
    "category": "technology",
    "question": "In a cloud-native application, what is the key concern when testing auto-scaling behavior?",
    "options": [
      "That the application can handle more users when manually adding servers",
      "That auto-scaling responds fast enough to prevent degradation during traffic spikes, including measuring scale-out latency",
      "That the application uses the minimum number of servers possible to reduce cost",
      "That load balancers distribute traffic equally across all instances"
    ],
    "answer": 1,
    "explanation": "Auto-scaling has inherent lag that can cause outages during traffic spikes. Testing must measure scale-out latency (time from trigger to new instances serving traffic) and verify that error rates remain within SLO during the scaling window."
  },
  {
    "id": "co1",
    "category": "compliance-governance",
    "question": "What are the key steps to ensure the security of protected health information (PHI) during a data breach under HIPAA?",
    "options": [
      "Conduct an internal investigation",
      "Report the breach to affected individuals only",
      "Encrypt the breached data",
      "Notify all business associates"
    ],
    "answer": 2,
    "explanation": "Encrypting the breached data ensures that PHI is secure and reduces the risk of unauthorized access. This step also helps organizations comply with HIPAA's breach notification requirements."
  },
  {
    "id": "co2",
    "category": "compliance-governance",
    "question": "While reviewing test data for a Field Productivity platform, you notice that the data is not fully utilizing AWS Glue's capabilities. Which of the following steps would you take to optimize test data management?",
    "options": [
      "Configure AWS Lake Formation to create a centralized metadata repository",
      "Use Informatica TDM to automate test data creation and dissemination",
      "Implement Amazon SageMaker's automized feature engineering for test data enrichment",
      "Employ AWS Secrets Manager to secure sensitive data for testing"
    ],
    "answer": 0,
    "explanation": "By configuring AWS Lake Formation, you can create a centralized metadata repository that allows for better data discovery, cataloging, and utilization. This step enables optimized test data management and takes advantage of AWS Glue's capabilities."
  },
  {
    "id": "co3",
    "category": "compliance-governance",
    "question": "To ensure compliance with regulatory requirements, which testing framework would a QA Director use when evaluating AI-powered loan workflows?",
    "options": [
      "Jest",
      "Cypress",
      "MSW",
      "Selenium"
    ],
    "answer": 3,
    "explanation": "MSW is used for mocking API responses in testing. As a compliance-focused role, the QA Director would utilize MSW to simulate realistic scenarios and ensure AI-powered loan workflows comply with regulatory requirements."
  },
  {
    "id": "co4",
    "category": "compliance-governance",
    "question": "What should a QA Director do when implementing quality thinking early in the product lifecycle, rather than as an afterthought?",
    "options": [
      "Embed QA into each sprint",
      "Spend more time on manual testing",
      "Actively participate in cross-functional planning and architectural decisions",
      "Focus solely on test case design"
    ],
    "answer": 2,
    "explanation": "The correct answer is to Actively participate in cross-functional planning and architectural decisions. This allows the QA Director to influence architecture, execution quality, and technology capabilities from the beginning."
  },
  {
    "id": "co5",
    "category": "compliance-governance",
    "question": "When conducting AI-enabled testing for large deals, what approach would you take to ensure test data management and test environments are properly aligned?",
    "options": [
      "Create a separate test environment for each stakeholder",
      "Utilize cloud-based services like AWS or Azure to scale up test environments",
      "Develop a centralized database to manage test data across multiple stakeholders",
      "Conduct a thorough requirements gathering phase before setting up test environments"
    ],
    "answer": 2,
    "explanation": "Creating a centralized database allows for better data management and ensures that test data is consistent across all stakeholders. This approach enables efficient collaboration and reduces the risk of misaligned test data."
  },
  {
    "id": "co6",
    "category": "compliance-governance",
    "question": "Which compliance framework would a Solution Engineer at Dynatrace be most familiar with to ensure proper handling of customer data during sales opportunities?",
    "options": [
      "HIPAA",
      "GDPR",
      "SOX",
      "SOC 2"
    ],
    "answer": 0,
    "explanation": "As a Solution Engineer, they would need to handle PHI (Protected Health Information) in compliance with HIPAA."
  },
  {
    "id": "co7",
    "category": "compliance-governance",
    "question": "When translating complex regulatory requirements into comprehensive test scenarios and acceptance criteria, what method would you use to capture business process mapping?",
    "options": [
      "Flowcharts",
      "Use cases",
      "swimlane diagrams",
      "Mind maps"
    ],
    "answer": 0,
    "explanation": "Business process mapping can involve various methods, but mind maps are a popular choice as they allow for visual representation of complex processes."
  },
  {
    "id": "co8",
    "category": "compliance-governance",
    "question": "When implementing leading practice standards of quality in software development and testing processes, which certification would be most beneficial for a Senior Manager in PwC's Software and Product Innovation team?",
    "options": [
      "ISTQB",
      "CSQA/CSQE",
      "Master's Degree in Computer Science",
      "Mastery in PwC Digital Quality Assurance Framework"
    ],
    "answer": 1,
    "explanation": "The correct answer, ISTQB (International Software Testing Qualifications Board), is beneficial for a Senior Manager in software and product innovation because it allows them to demonstrate their expertise in quality engineering, test process management, and software testing."
  },
  {
    "id": "cg7",
    "category": "compliance-governance",
    "question": "Which OWASP Top 10 category does Broken Access Control belong to, and what is the recommended testing approach?",
    "options": [
      "It is a low-priority category that only applies to public-facing websites; test with basic login verification",
      "It is the top-ranked web security risk; test by systematically verifying that users cannot access resources or functions beyond their permissions using role-based test matrices",
      "It only applies to API-based applications; test with SAST tools exclusively",
      "It is addressed automatically by modern frameworks and does not require explicit testing"
    ],
    "answer": 1,
    "explanation": "Broken Access Control is the most critical OWASP Top 10 category. Testing requires systematic verification that authorization is enforced at every endpoint, including IDOR testing (accessing other users' resources), vertical privilege escalation (user performing admin actions), and horizontal privilege testing."
  },
  {
    "id": "cg8",
    "category": "compliance-governance",
    "question": "What is the correct placement of SAST, DAST, and IAST tools within a CI/CD pipeline?",
    "options": [
      "Run all three tools at the same pipeline stage to catch the maximum vulnerabilities at once",
      "SAST at PR time for fast code-level feedback, DAST against deployed staging for runtime vulnerabilities, and IAST during E2E test execution for code-context runtime findings",
      "DAST first since it catches the most vulnerabilities, then SAST, then IAST only before major releases",
      "Only run SAST since it covers all vulnerability categories that DAST and IAST would find"
    ],
    "answer": 1,
    "explanation": "SAST runs earliest (PR time, 2-3 min) catching code-level issues like injection patterns and hardcoded secrets. DAST runs against a deployed staging environment to find runtime vulnerabilities. IAST instruments the app during E2E tests, combining runtime detection with code-level context for lower false positives."
  },
  {
    "id": "cg9",
    "category": "compliance-governance",
    "question": "Why must test data management be treated as a security and compliance concern, not just a testing logistics issue?",
    "options": [
      "Because test data takes up too much storage space in cloud environments",
      "Because using production data in test environments without masking or anonymization violates GDPR and HIPAA regulations and risks exposing real PII",
      "Because developers might accidentally commit test data to public repositories",
      "Because test data formats differ between environments causing test failures"
    ],
    "answer": 1,
    "explanation": "Using production data containing real PII in non-production environments violates data protection regulations like GDPR and HIPAA. A secure test data strategy requires synthetic data generation, production data masking that preserves referential integrity, and secrets management for API keys in pipelines."
  },
  {
    "id": "cg10",
    "category": "compliance-governance",
    "question": "What is penetration testing, and why is it described as a point-in-time assessment rather than a continuous safety net?",
    "options": [
      "Penetration testing continuously monitors the application for vulnerabilities 24/7",
      "Penetration testing is an authorized simulated attack that reveals exploitable vulnerabilities at a specific moment; new code changes after the test may introduce new vulnerabilities",
      "Penetration testing only covers network-level vulnerabilities, not application-level ones",
      "Penetration testing is performed by automated DAST tools and requires no human expertise"
    ],
    "answer": 1,
    "explanation": "Penetration testing simulates real attacks to find exploitable vulnerabilities but reflects security posture at a single point in time. New code deployed after the test may introduce new vulnerabilities, which is why pen testing must be complemented by continuous SAST/DAST in CI and bug bounty programs."
  },
  {
    "id": "cg11",
    "category": "compliance-governance",
    "question": "What is the most reliable defense against SQL injection, and how should QA verify it?",
    "options": [
      "Input validation using regex patterns; verify by testing that special characters are rejected in all input fields",
      "Parameterized queries or prepared statements; verify by sending injection payloads and asserting the response returns zero results with a 400 status, not a 500 error",
      "Web application firewalls; verify by confirming the WAF blocks all malicious requests",
      "Encoding all user input to HTML entities; verify by checking that special characters display correctly"
    ],
    "answer": 1,
    "explanation": "Parameterized queries prevent SQL injection by separating SQL logic from user data. QA verifies the fix by submitting classic injection payloads (e.g., ' OR '1'='1) and asserting a 400 Bad Request response (not 500, which indicates the query was executed)."
  },
  {
    "id": "cg12",
    "category": "compliance-governance",
    "question": "What is the IDOR (Insecure Direct Object Reference) vulnerability, and how should API security testing detect it?",
    "options": [
      "IDOR is a server misconfiguration that exposes directory listings; detected by scanning for open directories",
      "IDOR occurs when a user can access another user's resources by changing an ID in the URL or request body; detected by using User A's token to request User B's resource IDs",
      "IDOR is a type of SQL injection specific to NoSQL databases; detected by SAST tools",
      "IDOR is a denial-of-service vulnerability caused by too many object references; detected by load testing"
    ],
    "answer": 1,
    "explanation": "IDOR allows unauthorized access to other users' data by manipulating resource identifiers. Testing involves authenticating as User A and attempting to access User B's resources by changing IDs in API requests. A properly secured API should return 403 or 404, not the data."
  },
  {
    "id": "cg13",
    "category": "compliance-governance",
    "question": "What remediation SLA tiers are recommended for security vulnerabilities found during testing?",
    "options": [
      "All vulnerabilities should be fixed within 30 days regardless of severity",
      "Critical within 24 hours, High within 7 days, Medium within 30 days, with findings tracked through remediation and used to improve SAST/DAST rules",
      "Only Critical vulnerabilities require a fixed timeline; all others are addressed in the next sprint",
      "Security vulnerabilities should be deferred to a dedicated security sprint once per quarter"
    ],
    "answer": 1,
    "explanation": "Severity-based SLAs ensure critical vulnerabilities (e.g., remote code execution) are fixed within 24 hours, High within 7 days, and Medium within 30 days. Findings should also feed back into SAST/DAST rules and code review checklists to prevent recurrence."
  },
  {
    "id": "cg14",
    "category": "compliance-governance",
    "question": "What are the five key dimensions of API security testing that a QA Architect should cover?",
    "options": [
      "Performance, scalability, availability, reliability, and maintainability",
      "Authentication, authorization, input validation, rate limiting, and data exposure verification",
      "Unit testing, integration testing, contract testing, load testing, and chaos testing",
      "Encryption, logging, monitoring, alerting, and incident response"
    ],
    "answer": 1,
    "explanation": "API security testing covers authentication (JWT validation, token expiry), authorization (IDOR, privilege escalation), input validation (injection via JSON body), rate limiting (brute force protection), and data exposure (ensuring responses do not leak sensitive fields)."
  },
  {
    "id": "cg15",
    "category": "compliance-governance",
    "question": "What does DevSecOps mean in a QE context and how is it implemented?",
    "options": [
      "A separate security testing phase added after development and before deployment",
      "Integrating security testing into every stage of the CI/CD pipeline — SAST in code commits, DAST in staging, dependency scanning in builds, and secrets detection in PRs",
      "Hiring a dedicated security team that reviews all QA test scripts for vulnerabilities",
      "Running penetration tests quarterly and sharing results with the development team"
    ],
    "answer": 1,
    "explanation": "DevSecOps shifts security left by embedding automated security checks throughout the pipeline: static analysis on every commit, dynamic analysis in staging, dependency vulnerability scanning in builds, and secrets detection in pull requests. Security becomes continuous, not a phase."
  },
  {
    "id": "cg16",
    "category": "compliance-governance",
    "question": "How do you approach software security testing in a critical infrastructure environment such as an energy utility or healthcare system?",
    "options": [
      "Use the same security testing approach as any other software project since threats are universal",
      "Apply industry-specific security standards (NERC CIP for energy, HIPAA for healthcare), test for domain-specific attack vectors, and validate that safety-critical functions degrade gracefully under attack",
      "Focus security testing only on the network perimeter since internal systems are trusted",
      "Defer all security testing to a third-party penetration testing firm and accept their findings"
    ],
    "answer": 1,
    "explanation": "Critical infrastructure has domain-specific compliance frameworks (NERC CIP, IEC 62443 for utilities; HIPAA for healthcare) and unique attack vectors. Testing must validate that safety-critical functions maintain safe states even under security incidents rather than failing in unpredictable ways."
  },
  {
    "id": "cg17",
    "category": "compliance-governance",
    "question": "How does working in a regulated industry (banking, healthcare, energy) change your approach to QA governance?",
    "options": [
      "It does not change the approach since good QA practices are the same regardless of industry",
      "It requires additional documentation of test evidence, traceability from requirements to test execution, audit-ready reporting, and validation that every change meets regulatory requirements before release",
      "It means only manual testing is acceptable because regulators do not trust automated tests",
      "It requires hiring compliance officers to sit on the QA team and approve every test case"
    ],
    "answer": 1,
    "explanation": "Regulated industries require audit trails linking requirements to test cases to execution evidence. QA must produce traceability matrices, maintain version-controlled test artifacts, and ensure every release has documented evidence that regulatory requirements were validated."
  },
  {
    "id": "cg18",
    "category": "compliance-governance",
    "question": "What is accessibility compliance (WCAG) and how should QA approach it for web applications?",
    "options": [
      "An optional best practice that only applies to government websites",
      "A set of guidelines ensuring web content is usable by people with disabilities, requiring automated scanning (axe, Lighthouse), manual screen reader testing, and keyboard navigation validation",
      "A visual design standard that only the UX team is responsible for implementing",
      "A compliance requirement that is satisfied by adding alt text to all images"
    ],
    "answer": 1,
    "explanation": "WCAG compliance requires a layered testing approach: automated tools (axe-core, Lighthouse) catch structural issues, manual testing with screen readers (NVDA, VoiceOver) validates real user experience, and keyboard-only navigation testing ensures all functionality is accessible without a mouse."
  },
  {
    "id": "cg19",
    "category": "compliance-governance",
    "question": "How do you manage integration testing for a safety-critical system where failures could have real-world consequences?",
    "options": [
      "Run integration tests only in production with feature flags to minimize risk",
      "Use a production-mirrored test environment with realistic data, simulate failure modes and edge cases, validate graceful degradation, and maintain rollback procedures for every deployment",
      "Skip integration testing and rely on comprehensive unit tests since they are faster and safer",
      "Test only the happy path scenarios since safety-critical systems are designed to always work correctly"
    ],
    "answer": 1,
    "explanation": "Safety-critical systems require integration testing in environments that mirror production fidelity. Failure mode testing validates that the system degrades safely rather than failing catastrophically when sensors fail, networks partition, or dependent services become unavailable."
  },
  {
    "id": "cg20",
    "category": "compliance-governance",
    "question": "What is compliance monitoring in enterprise platforms, and what must QA validate?",
    "options": [
      "A manual quarterly review of test documentation by external auditors",
      "Automated continuous monitoring that ensures operations follow laws and regulations — QA must validate monitoring rules, alert accuracy, and reporting completeness",
      "A process for ensuring all team members have completed mandatory training",
      "A code review practice that checks for coding standard violations"
    ],
    "answer": 1,
    "explanation": "Compliance monitoring continuously ensures that platform operations follow applicable laws, regulations, and internal policies. QA must validate that monitoring rules trigger correctly, alerts are accurate and timely, false positives are minimized, and compliance reports are complete and auditable."
  },
  {
    "id": "cg21",
    "category": "compliance-governance",
    "question": "What is audit logging, and what are the essential QA test scenarios for it?",
    "options": [
      "A performance optimization technique that logs slow database queries for later analysis",
      "A system that tracks who changed data and when, for compliance and security — QA must verify completeness, immutability, and tamper resistance of audit records",
      "A debugging practice where developers log all function calls during code review",
      "A project management feature that tracks who approved each user story"
    ],
    "answer": 1,
    "explanation": "Audit logging records every data change with who made it, when, and what changed. QA must test that logs capture all required events, cannot be modified or deleted by users, include sufficient detail for investigation, and are retained according to regulatory requirements."
  },
  {
    "id": "cg22",
    "category": "compliance-governance",
    "question": "Why is cybersecurity testing critical for enterprise platforms that handle sensitive data?",
    "options": [
      "Cybersecurity testing is optional if the platform uses HTTPS and a firewall",
      "Enterprise platforms contain sensitive financial, legal, and identity information, making them high-value targets requiring comprehensive security validation",
      "Cybersecurity testing is only required for platforms that process credit card transactions",
      "Security testing is the sole responsibility of the DevOps team and is outside QA's scope"
    ],
    "answer": 1,
    "explanation": "Enterprise platforms store sensitive financial, legal, and personally identifiable information, making them high-value targets for attackers. QA must validate authentication, authorization, encryption, input sanitization, session management, and vulnerability scanning as part of comprehensive security testing."
  },
  {
    "id": "cg23",
    "category": "compliance-governance",
    "question": "What are the key ethical concerns when testing AI-powered decision-making systems?",
    "options": [
      "AI systems have no ethical concerns if they pass functional testing",
      "Bias in training data, explainability of decisions, and fairness across demographic groups — QA must validate that AI decisions are auditable and equitable",
      "The only concern is processing speed — slower AI decisions are considered unethical",
      "Ethical concerns only apply to AI systems used in healthcare, not in other industries"
    ],
    "answer": 1,
    "explanation": "AI-powered decision systems raise concerns about bias, explainability, and fairness. QA must test that AI models do not discriminate against protected groups, that decisions can be explained and audited, and that the system treats all applicants equitably regardless of demographic factors."
  },
  {
    "id": "cg24",
    "category": "compliance-governance",
    "question": "What is risk-adjusted pricing, and what should QA validate in systems that implement it?",
    "options": [
      "A pricing model where all customers pay the same rate regardless of risk — QA validates the flat rate calculation",
      "Pricing adjusted according to the assessed level of risk — QA must validate that risk scores correctly influence pricing, boundary conditions are handled, and regulatory pricing limits are enforced",
      "A discount strategy based on customer loyalty — QA validates the discount engine",
      "A pricing model that only applies during high-demand periods — QA validates time-based triggers"
    ],
    "answer": 1,
    "explanation": "Risk-adjusted pricing sets rates based on the assessed risk level. QA must validate that risk scoring algorithms correctly influence pricing calculations, that boundary conditions between risk tiers are handled properly, and that regulatory caps or floors on pricing are enforced."
  },
  {
    "id": "cg25",
    "category": "compliance-governance",
    "question": "What future trends in digital compliance should QA teams prepare for?",
    "options": [
      "Compliance requirements are decreasing as industries deregulate globally",
      "Digital-first documentation, AI-powered compliance monitoring, predictive risk analytics, and integrated regulatory ecosystems requiring end-to-end test automation",
      "All compliance testing will be replaced by manual audits within five years",
      "Future compliance will only require annual penetration testing with no ongoing monitoring"
    ],
    "answer": 1,
    "explanation": "Future compliance trends include digital-first documentation replacing paper processes, AI-powered compliance monitoring, predictive analytics for risk identification, and integrated ecosystems where multiple regulatory bodies share data. QA teams must prepare for automated, continuous compliance validation at scale."
  },
  {
    "id": "jm1",
    "category": "jmeter",
    "question": "What is the correct JMeter CLI command to run a test plan in non-GUI mode, save results, and generate an HTML dashboard report?",
    "options": [
      "jmeter --headless --plan TestPlan.jmx --out /output/report",
      "jmeter -gui false -t TestPlan.jmx -report /output",
      "jmeter -n -t TestPlan.jmx -l results.jtl -e -o /output/report",
      "jmeter -run TestPlan.jmx --html /output/report --log results.jtl"
    ],
    "answer": 2,
    "explanation": "The -n flag enables non-GUI mode, -t specifies the test plan, -l sets the results log file (.jtl), -e triggers report generation, and -o sets the output folder. This is the standard CI/CD invocation pattern."
  },
  {
    "id": "jm2",
    "category": "jmeter",
    "question": "Which JMeter component correctly models 500 virtual users starting over 100 seconds and running for 10 minutes?",
    "options": [
      "HTTP Request Sampler with 500 connections and 600s timeout",
      "Thread Group with Threads=500, Ramp-Up=100s, Duration=600s",
      "Constant Throughput Timer set to 500 req/min for 600s",
      "Transaction Controller wrapping 500 samplers with a 10-minute loop"
    ],
    "answer": 1,
    "explanation": "The Thread Group is the container for virtual users. Threads=500 sets the user count, Ramp-Up=100s adds 5 users/second, and Duration=600s runs the test for 10 minutes. The Constant Throughput Timer controls TPS, not user count."
  },
  {
    "id": "jm3",
    "category": "jmeter",
    "question": "What is correlation in JMeter and how is it typically implemented?",
    "options": [
      "Synchronizing multiple thread groups to fire simultaneously using a barrier",
      "Calculating statistical correlation between response time and error rate",
      "Sharing test data across threads using a common CSV file",
      "Capturing a dynamic server response value (e.g., session token) with a Post-Processor extractor and injecting it into subsequent requests"
    ],
    "answer": 3,
    "explanation": "Correlation uses a Regular Expression or JSON Extractor Post-Processor to capture dynamic values like session tokens or trade reference IDs from responses, then references them in later requests via ${variableName}. Without correlation, stateful workflows fail with 401/403 errors."
  },
  {
    "id": "jm4",
    "category": "jmeter",
    "question": "What is the key difference between a Load Test, Stress Test, and Soak Test?",
    "options": [
      "Load tests use real users; stress tests use synthetic load; soak tests use recorded scripts",
      "Load tests run under 1 minute; stress tests run 1-8 hours; soak tests run 24+ hours",
      "Load tests validate at expected volume; stress tests push beyond capacity to find the breaking point; soak tests run sustained load to detect memory leaks and connection exhaustion",
      "Load tests check throughput only; stress tests check error rate; soak tests check latency"
    ],
    "answer": 2,
    "explanation": "Load tests verify SLA compliance at expected concurrency. Stress tests increase load until the system fails, identifying the breaking point and failure mode. Soak tests run at steady load for 8-12+ hours to expose memory leaks, connection pool exhaustion, and performance degradation over time."
  },
  {
    "id": "jm5",
    "category": "jmeter",
    "question": "What is the difference between JMeter Variables (vars) and Properties (props)?",
    "options": [
      "Variables are stored in .properties files on disk; properties are stored in heap memory",
      "Variables persist across test runs automatically; properties reset each run",
      "Variables are local to a single thread; properties are shared globally across all threads and can be set from the command line with -J flags",
      "Variables can only hold string values; properties support all Java data types"
    ],
    "answer": 2,
    "explanation": "vars.put/get is thread-local — each virtual user has its own copy. props.put/get is JVM-global, visible to all threads. Properties set via jmeter -Jenv=uat enable a single test plan to target different environments without modification."
  },
  {
    "id": "jm6",
    "category": "jmeter",
    "question": "When should you use a JSON Extractor instead of a Regular Expression Extractor?",
    "options": [
      "Always use JSON Extractor since it is faster for all response types",
      "Use JSON Extractor for JSON API responses using JSONPath expressions; use RegEx Extractor for HTML, XML, plain-text, or binary responses",
      "Use JSON Extractor only when the response is under 1 KB; use RegEx for larger payloads",
      "JSON Extractor works only with GET requests; RegEx Extractor works with POST responses"
    ],
    "answer": 1,
    "explanation": "JSON Extractor uses JSONPath (e.g., $.data.trade.status) and is purpose-built for JSON APIs. Regular Expression Extractor is more flexible and handles HTML forms, XML, FIX protocol messages, and any text-based format where JSONPath is not applicable."
  },
  {
    "id": "jm7",
    "category": "jmeter",
    "question": "Why should JSR223 with Groovy always be preferred over the BeanShell sampler in load tests?",
    "options": [
      "Groovy has better IDE support than BeanShell so scripts are easier to write",
      "BeanShell requires a separate license for commercial use while Groovy is free",
      "JSR223/Groovy scripts are compiled and cached at runtime, making them significantly faster under concurrent load; BeanShell is interpreted on every invocation",
      "BeanShell cannot access JMeter variables, while Groovy has full access to vars and props"
    ],
    "answer": 2,
    "explanation": "JMeter compiles and caches Groovy scripts for reuse across thread iterations, providing near-Java performance. BeanShell interprets scripts on every call, introducing CPU overhead that skews latency results and limits maximum achievable TPS in large tests."
  },
  {
    "id": "jm8",
    "category": "jmeter",
    "question": "How does the Constant Throughput Timer control test load, and how do you configure it for exactly 50 TPS?",
    "options": [
      "Set Thread Count to 50 and Ramp-Up to 1 second in the Thread Group",
      "Set Target throughput to 50 in the timer — the unit is requests per second",
      "Set Target throughput to 3000 in the timer — the unit is requests per minute (50 x 60 = 3000)",
      "Set Loop Count to 50 and Duration to 60 seconds to achieve 50 TPS"
    ],
    "answer": 2,
    "explanation": "The Constant Throughput Timer's Target throughput field is in requests-per-minute. To achieve 50 TPS: 50 x 60 = 3000. Setting 'Calculate Throughput Based On: All active threads' distributes this rate across all threads in the group."
  },
  {
    "id": "jm9",
    "category": "jmeter",
    "question": "What does the Transaction Controller do, and why is it essential for SLA testing?",
    "options": [
      "It wraps JDBC samplers to ensure database operations are atomic",
      "It groups multiple HTTP samplers into a single logical transaction, reporting combined end-to-end response time as one sample",
      "It controls the order of HTTP requests to prevent race conditions",
      "It rolls back test data if any sampler in the group fails"
    ],
    "answer": 1,
    "explanation": "SLAs are typically defined at the business transaction level (e.g., 'end-to-end trade submission < 500ms'), not per individual HTTP request. The Transaction Controller aggregates login + submit + acknowledgement into one measurement, so Aggregate Report shows the correct end-to-end figure."
  },
  {
    "id": "jm10",
    "category": "jmeter",
    "question": "In JMeter distributed testing, what are the roles of the Controller and Agent (remote) machines?",
    "options": [
      "The controller generates load; agents monitor server metrics on the target application hosts",
      "Agents record the test scripts; the controller replays them across multiple machines",
      "One controller orchestrates multiple remote agents (jmeter-server), each running a copy of the test plan and generating a portion of the total load",
      "Each agent tests a different endpoint; the controller aggregates results from all agents into one report"
    ],
    "answer": 2,
    "explanation": "The controller sends the test plan to all agents via RMI (port 1099). Each agent executes the full plan against the target. With 3 agents x 500 threads each = 1500 concurrent virtual users. The controller merges .jtl results at the end. Use jmeter -n -t plan.jmx -r to run on all agents in remote_hosts."
  },
  {
    "id": "jm11",
    "category": "jmeter",
    "question": "Which JVM setting combination is recommended for JMeter running a 10,000-thread load test?",
    "options": [
      "-Xms512m -Xmx1g -XX:+UseSerialGC (minimize footprint for high thread counts)",
      "-Xms4g -Xmx8g -XX:+UseG1GC -XX:MaxGCPauseMillis=100 -server",
      "-Xms2g -Xmx2g -XX:+UseParallelGC (fixed heap prevents GC overhead)",
      "-Xms8g -Xmx8g -XX:+UseConcMarkSweepGC -XX:+DisableExplicitGC"
    ],
    "answer": 1,
    "explanation": "Large heap (Xmx8g) prevents OutOfMemoryError with thousands of threads. G1GC provides predictable pause times under high concurrency. MaxGCPauseMillis=100 avoids GC pauses that artificially inflate response times. The -server flag enables JIT optimizations for long-running processes."
  },
  {
    "id": "jm12",
    "category": "jmeter",
    "question": "Which listeners should be enabled during a production load test run and which should be disabled?",
    "options": [
      "Enable all listeners to capture maximum data; disable only View Results Tree",
      "Enable View Results Tree and Aggregate Report; disable Backend Listener to reduce network overhead",
      "Enable only Backend Listener (streaming to InfluxDB/Grafana) and Simple Data Writer; disable View Results Tree — it is a memory hog that stores every request/response",
      "Enable Aggregate Report only; all other listeners add too much overhead for accurate results"
    ],
    "answer": 2,
    "explanation": "View Results Tree stores request and response bodies in memory for every sample — at high TPS this causes OutOfMemoryError and skews results. Backend Listener streams metrics to InfluxDB/Grafana in real time without memory accumulation. Simple Data Writer writes to .jtl for post-test analysis."
  },
  {
    "id": "jm13",
    "category": "jmeter",
    "question": "How do you integrate JMeter into a Jenkins CI/CD pipeline with a pass/fail performance gate?",
    "options": [
      "Install JMeter GUI on the Jenkins agent and record tests using the proxy recorder plugin",
      "Use the Jenkins JMeter plugin to set thread counts and compare results to the previous build automatically",
      "Run JMeter in non-GUI mode from a shell step, then use the Performance Plugin (perfReport) to fail the build if error rate > threshold or p95 > SLA",
      "Push results to a shared S3 bucket and trigger a Lambda function to evaluate thresholds after the Jenkins job completes"
    ],
    "answer": 2,
    "explanation": "The declarative pipeline runs 'jmeter -n -t ...' in a sh step, then 'perfReport errorUnstableThreshold: 2, errorFailedThreshold: 5, sourceDataFiles: results.jtl' evaluates the .jtl. The build fails or becomes unstable based on error rate and latency, creating a performance regression gate."
  },
  {
    "id": "jm14",
    "category": "jmeter",
    "question": "What does the JDBC Sampler require before it can execute SQL queries in a JMeter test?",
    "options": [
      "A JSR223 Pre-Processor that establishes the connection before each request",
      "A JDBC Connection Configuration element with the connection URL, driver class, credentials, and a Variable Name that the sampler references",
      "An HTTP Header Manager with the database connection string in the Authorization header",
      "A CSV file containing the JDBC URL and credentials so each thread uses a different database connection"
    ],
    "answer": 1,
    "explanation": "JDBC Connection Configuration defines the pool (URL, driver, username, password, max connections) and binds it to a Variable Name (e.g., 'myDB'). The JDBC Sampler then references that name to borrow a connection from the pool. Without this config element, the sampler has no connection to use."
  },
  {
    "id": "jm15",
    "category": "jmeter",
    "question": "What is the Apdex score and how is it calculated for a system with T=500ms, 8000 satisfied, 1500 tolerating, and 500 frustrated responses out of 10,000 total?",
    "options": [
      "Apdex = Satisfied / Total = 8000 / 10000 = 0.80",
      "Apdex = (Satisfied + Tolerating) / Total = (8000 + 1500) / 10000 = 0.95",
      "Apdex = (Satisfied + Tolerating/2) / Total = (8000 + 750) / 10000 = 0.875",
      "Apdex = (Satisfied - Frustrated) / Total = (8000 - 500) / 10000 = 0.75"
    ],
    "answer": 2,
    "explanation": "Apdex formula: (Satisfied + Tolerating/2) / Total. Satisfied = response <= T, Tolerating = T < response <= 4T, Frustrated = response > 4T. Result: (8000 + 1500/2) / 10000 = 8750/10000 = 0.875 — rated 'Good' (0.85-0.94 range). A score >= 0.85 is a common release gate."
  },
  {
    "id": "jm16",
    "category": "jmeter",
    "question": "What are the key performance metrics in the Aggregate Report, and what SLA targets apply to financial trade APIs?",
    "options": [
      "Only Average and Max matter; percentiles are statistical noise that varies between runs",
      "Throughput (TPS >= 500), Average (< 300ms), p90 (< 800ms), p95 (< 1200ms), p99 (< 2000ms), Error Rate (< 0.1%)",
      "Total Samples and Error Count are the only metrics required to assess SLA compliance",
      "p50 (median) is the primary SLA metric; high percentiles are only relevant for real-time trading systems"
    ],
    "answer": 1,
    "explanation": "SLAs for financial APIs are typically defined at high percentiles: p95 < 1200ms (trade inquiry), p99 < 2000ms (trade submission), Error Rate < 0.1%. Average response time alone hides tail latency caused by GC pauses, lock contention, or slow DB queries."
  },
  {
    "id": "jm17",
    "category": "jmeter",
    "question": "When analyzing JMeter results you see p99 >> p95 but p95 is within SLA. What does this pattern indicate?",
    "options": [
      "The system is healthy — p99 will always be higher than p95 by definition, this is expected",
      "The network connection between JMeter and the server is unstable, causing occasional packet loss",
      "Long-tail latency caused by JVM GC pauses, database lock contention, or a slow-path code branch affecting a small percentage of requests",
      "The thread ramp-up is too aggressive, causing the first wave of users to queue behind the last wave"
    ],
    "answer": 2,
    "explanation": "A wide gap between p95 and p99 signals long-tail latency: a small percentage of requests experience dramatically worse response times. Root causes include Stop-The-World GC pauses, database deadlocks, connection pool starvation, or a slow code path hit by edge-case inputs."
  },
  {
    "id": "jm18",
    "category": "jmeter",
    "question": "How do you test REST API pagination in JMeter where each response contains a 'hasNextPage' flag?",
    "options": [
      "Set Loop Count in the Thread Group equal to the expected number of pages",
      "Use a Random Controller to pick different page numbers and merge results",
      "Use a While Controller with a Groovy condition checking hasNextPage, a JSON Extractor to capture the flag after each request, and a JSR223 Post-Processor to increment the page counter",
      "Use a CSV Data Set Config listing all page numbers and set Stop Thread on EOF to true"
    ],
    "answer": 2,
    "explanation": "Pagination requires dynamic loop control: initialize pageNum=1 and hasMore=true, then use a While Controller with condition ${__groovy(vars.get('hasMore') == 'true')}. Each iteration fetches the next page, the JSON Extractor captures hasNextPage, and a Post-Processor increments the page counter until exhausted."
  },
  {
    "id": "jm19",
    "category": "jmeter",
    "question": "How do you run JMeter workers at scale using Kubernetes for a cloud load test?",
    "options": [
      "Deploy the JMeter GUI in a Kubernetes pod and record tests against the target service cluster",
      "Use a Kubernetes CronJob that runs JMeter on a schedule using a shared PersistentVolume for test plans",
      "Deploy multiple jmeter-server worker pods, dynamically gather their Pod IPs, and run the controller with jmeter -n -t plan.jmx -R <worker-IPs> to distribute load across all workers",
      "Package the .jmx file as a ConfigMap and use a Kubernetes Job with initContainers to inject the test plan at runtime"
    ],
    "answer": 2,
    "explanation": "The Kubernetes pattern uses a Deployment of jmeter-server worker pods (each exposing RMI port 1099). The master queries kubectl for worker Pod IPs, then executes: WORKERS=$(kubectl get pods -l app=jmeter-worker -o jsonpath='{.items[*].status.podIP}' | tr ' ' ',') && jmeter -n -t plan.jmx -R $WORKERS -l results.jtl"
  },
  {
    "id": "jm20",
    "category": "jmeter",
    "question": "Which combination represents JMeter best practices for an enterprise financial performance test?",
    "options": [
      "Run in GUI mode for easy monitoring, enable all listeners, hard-code test data in the script, use BeanShell for complex logic",
      "Run non-GUI (-n), parameterize environments via -J flags, store test data in CSV, use JSR223/Groovy, tune JVM heap, disable View Results Tree, stream metrics to Grafana, implement correlation for all dynamic tokens",
      "Run performance tests only in a dedicated performance environment — never in CI/CD since load tests slow the pipeline",
      "Use a single Thread Group for all user types and rely on Random Controller to simulate mixed workflows"
    ],
    "answer": 1,
    "explanation": "Enterprise financial systems require: non-GUI mode, parameterized environments (SIT/UAT/PROD), CSV data (unique IDs per virtual user), Groovy (compiled scripts), proper JVM tuning, no View Results Tree (memory), real-time Grafana monitoring, and correlation for stateful APIs. These practices ensure accurate, reproducible, maintainable results."
  },
  {
    "id": "jm21",
    "category": "jmeter",
    "question": "What are the core components of a JMeter Test Plan in their correct hierarchical order?",
    "options": [
      "Test Plan > Sampler > Thread Group > Config Element > Listener",
      "Test Plan > Thread Group > Samplers, Logic Controllers, Config Elements, Pre/Post-Processors, Assertions, Listeners",
      "Thread Group > Test Plan > Sampler > Assertion > Listener",
      "Test Plan > Config Element > Thread Group > Sampler > Listener"
    ],
    "answer": 1,
    "explanation": "The Test Plan is the root container. Thread Groups define virtual users and sit directly under it. Under each Thread Group: Samplers send requests, Logic Controllers direct flow, Config Elements set defaults, Pre/Post-Processors transform data, Assertions validate responses, and Listeners collect results. This hierarchy governs scope and execution order."
  },
  {
    "id": "jm22",
    "category": "jmeter",
    "question": "How do you configure an HTTP Request Sampler for a POST request with a JSON body?",
    "options": [
      "Set Method=POST, add the JSON to the Path field, and add Content-Type header via the Sampler's Headers tab",
      "Set Method=POST, enter the JSON body in the Body Data tab, and add an HTTP Header Manager with Content-Type: application/json",
      "Use a JSR223 Pre-Processor to build the request body and pass it to the sampler via vars.put('body',...)",
      "Set Method=POST and add the JSON fields as individual Parameters rows — JMeter auto-encodes them as JSON"
    ],
    "answer": 1,
    "explanation": "In the HTTP Request Sampler: select Method=POST, click the 'Body Data' tab and paste or parameterize your JSON (e.g., {\"tradeId\": \"${tradeId}\"}). Add an HTTP Header Manager scoped to the sampler or Thread Group with Content-Type: application/json. Using the Parameters tab sends form-encoded data, not JSON."
  },
  {
    "id": "jm23",
    "category": "jmeter",
    "question": "How does CSV Data Set Config enable data-driven testing, and what does 'Sharing Mode: All Threads' mean?",
    "options": [
      "CSV Data Set Config loads all rows into memory at startup; All Threads means every thread reads every row",
      "CSV Data Set reads one row per thread per iteration; All Threads means all threads share a single file pointer — each thread gets the next unused row, preventing duplicate data across concurrent users",
      "Sharing Mode: All Threads causes all virtual users to read the same row simultaneously — useful for simulating identical concurrent users",
      "CSV Data Set Config only works with Get requests; POST requests require JSR223 to read CSV files"
    ],
    "answer": 1,
    "explanation": "With Sharing Mode: All Threads, a single file pointer advances globally. Thread 1 reads row 1, Thread 2 reads row 2, etc. — each virtual user gets a unique data row. With 'Current Thread' mode, each thread gets its own pointer and re-reads from the start. Recycle on EOF=true loops the file; Stop Thread on EOF=true ends threads when data runs out."
  },
  {
    "id": "jm24",
    "category": "jmeter",
    "question": "How do you parameterize the base URL and port so the same .jmx file targets SIT, UAT, or PROD without editing the plan?",
    "options": [
      "Create three separate .jmx files — one per environment — and select the correct one in Jenkins",
      "Add an HTTP Request Defaults Config Element with Protocol=${protocol}, Server=${host}, Port=${port} and set defaults in User Defined Variables; override at runtime with -Jhost=api-uat.example.com",
      "Hard-code the UAT URL as default and add If Controllers to switch URLs based on a thread number range",
      "Use the JMeter Test Fragment element to swap environment configs at runtime"
    ],
    "answer": 1,
    "explanation": "HTTP Request Defaults sets the base URL for all samplers in scope. User Defined Variables define protocol=https, host=api-sit.example.com, port=443 as defaults. CI/CD overrides them: jmeter -n -t plan.jmx -Jhost=api-uat.example.com -Jport=8443. Samplers use ${protocol}, ${host}, ${port} and never need editing between environments."
  },
  {
    "id": "jm25",
    "category": "jmeter",
    "question": "What types of assertions does JMeter support, and when would you use a JSR223 Assertion over a Response Assertion?",
    "options": [
      "JMeter only supports Response Assertion and Duration Assertion — all other types require plugins",
      "Response Assertion checks text/codes; Duration Assertion checks latency; Size Assertion checks bytes; JSON Assertion checks JSONPath values; JSR223 Assertion uses Groovy for complex multi-field validation logic that standard assertions cannot express",
      "Response Assertion and JSON Assertion are identical — JSON Assertion just adds JSONPath syntax sugar",
      "JSR223 Assertion is only used to set custom HTTP response codes; all content validation uses Response Assertion"
    ],
    "answer": 1,
    "explanation": "Built-in assertions: Response (body/code/headers), Duration (SLA enforcement), Size (non-empty check), JSON (JSONPath field value). JSR223 Assertion with Groovy handles conditions like: 'fail if tradeId is missing AND status is not PENDING' — compound logic impossible with a single standard assertion. Use it sparingly as it adds CPU overhead per sample."
  },
  {
    "id": "jm26",
    "category": "jmeter",
    "question": "How do you handle OAuth2 JWT authentication in JMeter, including token refresh for long soak tests?",
    "options": [
      "Hard-code the JWT token in an HTTP Header Manager — tokens for test environments typically never expire",
      "Use a CSV file containing pre-generated tokens and rotate them per thread via CSV Data Set Config",
      "POST to the /oauth/token endpoint, extract the access_token with JSON Extractor, inject it via HTTP Header Manager as 'Bearer ${access_token}', and use a JSR223 Pre-Processor to re-authenticate when token age exceeds the expiry window",
      "Add the client credentials to the HTTP Authorization Manager — JMeter handles OAuth2 token negotiation automatically"
    ],
    "answer": 2,
    "explanation": "Step 1: HTTP Request POST /oauth/token with client_id and client_secret. Step 2: JSON Extractor captures $.access_token. Step 3: HTTP Header Manager adds Authorization: Bearer ${access_token}. Step 4 (soak tests): JSR223 Pre-Processor checks (System.currentTimeMillis() - token_issued) > 3500000 and re-authenticates before the token expires, preventing 401 failures mid-test."
  },
  {
    "id": "jm27",
    "category": "jmeter",
    "question": "What is the difference between Constant Timer, Uniform Random Timer, and Constant Throughput Timer?",
    "options": [
      "All three add delays between requests — the only difference is whether the delay is fixed, random, or based on thread count",
      "Constant Timer adds a fixed pause between samplers; Uniform Random Timer adds a randomized pause (simulating realistic think time); Constant Throughput Timer controls target TPS globally regardless of the pause duration",
      "Constant Throughput Timer replaces the Thread Group — you do not need threads when using it",
      "Uniform Random Timer is deprecated; use Gaussian Random Timer instead for all load tests"
    ],
    "answer": 1,
    "explanation": "Constant Timer: fixed delay (e.g., 1000ms). Uniform Random Timer: Constant Offset + random(0, Random Delay) — simulates human think-time variation. Constant Throughput Timer: throttles TPS to a target rate regardless of think time or thread count — the correct tool when you need to hit exactly 100 TPS. Gaussian Random Timer adds normally-distributed delays for more realistic modeling."
  },
  {
    "id": "jm28",
    "category": "jmeter",
    "question": "How do Logic Controllers (If, While, Loop, Random, Throughput) direct sampler execution in JMeter?",
    "options": [
      "Logic Controllers only control the order of Thread Groups — samplers inside a group always execute sequentially",
      "If Controller evaluates a condition; While Controller loops until a condition is false; Loop Controller repeats N times; Random Controller picks one child randomly; Throughput Controller runs children a percentage of the time",
      "Logic Controllers are exclusively used for error handling — they execute only when a sampler fails",
      "Random Controller and Interleave Controller are identical in behavior; only the naming differs"
    ],
    "answer": 1,
    "explanation": "If Controller: executes children when condition is true (e.g., retryCount < 3). While Controller: loops until condition is false — ideal for polling async settlement status. Loop Controller: repeats N times. Random Controller: picks one child per iteration for A/B workflow simulation. Throughput Controller: executes children for N% of iterations — models realistic traffic mixes (e.g., 70% read, 30% write)."
  },
  {
    "id": "jm29",
    "category": "jmeter",
    "question": "How do you chain requests so that a value from Response 1 feeds into Request 2, which feeds into Request 3?",
    "options": [
      "Use a Transaction Controller — it automatically passes response data between samplers in the group",
      "Store the chain in a CSV file and use CSV Data Set Config to correlate values across requests",
      "After Request 1 use a JSON Extractor to capture the referenceId into ${refId}; use ${refId} in Request 2's path; extract status into ${status}; use an If Controller to conditionally fire Request 3 based on ${status}",
      "Use the JSR223 Timer between requests to pause while JMeter internally passes the previous response to the next sampler"
    ],
    "answer": 2,
    "explanation": "Request chaining: POST /trades/submit -> JSON Extractor captures $.data.referenceId -> ${tradeRef} is used in GET /trades/${tradeRef}/status -> JSON Extractor captures $.status -> If Controller checks status == 'PENDING' before firing POST /trades/${tradeRef}/confirm. Each extractor runs as a Post-Processor attached to its parent sampler."
  },
  {
    "id": "jm30",
    "category": "jmeter",
    "question": "How do you generate an HTML dashboard report from an existing .jtl results file without re-running the test?",
    "options": [
      "Open JMeter GUI, load the .jtl in View Results Tree, then export as HTML from the File menu",
      "Run jmeter -g results.jtl -o /reports/run1 to generate the dashboard from the existing results file",
      "Use the jmeter-report CLI tool which ships separately from the main JMeter distribution",
      "HTML reports can only be generated during a live test run using the -e -o flags; post-test generation requires a third-party tool"
    ],
    "answer": 1,
    "explanation": "jmeter -g results.jtl -o /reports/run1 generates the full HTML dashboard from any existing .jtl file without re-running the test. The report includes APDEX, Statistics table (avg/p90/p95/p99), Response Time Percentiles graph, Active Threads Over Time, and TPS trend. Customize thresholds in reportgenerator.properties (e.g., apdex_satisfied_threshold=500)."
  },
  {
    "id": "jm31",
    "category": "jmeter",
    "question": "How do you configure the Backend Listener to stream JMeter metrics to InfluxDB for real-time Grafana monitoring?",
    "options": [
      "Add a Grafana Listener plugin and configure the Grafana server URL and dashboard ID",
      "Use a JSR223 Listener that calls the InfluxDB REST API after each sample completes",
      "Add Backend Listener with Implementation=InfluxdbBackendListenerClient; set influxdbUrl=http://influx:8086/write?db=jmeter; set percentiles=90;95;99 and summaryOnly=false",
      "Configure InfluxDB as a JDBC data source in JMeter and write metrics using a JDBC Sampler after each request"
    ],
    "answer": 2,
    "explanation": "Backend Listener with InfluxdbBackendListenerClient pushes per-sample metrics (count, avg, min, max, pct90/95/99, error_count) tagged by transaction name and application. Grafana queries InfluxDB with InfluxQL to render real-time dashboards. This enables ops teams to monitor latency and error spikes during live load tests without waiting for the .jtl post-analysis."
  },
  {
    "id": "jm32",
    "category": "jmeter",
    "question": "How do you test WebSocket connections in JMeter?",
    "options": [
      "JMeter natively supports WebSocket through the HTTP Request Sampler by setting protocol=ws://",
      "Use the WebSocket Samplers plugin (by Peter Doornbosch) with Open Connection, Text Frame (send), and Read Text Frame samplers to simulate subscribe/publish workflows",
      "Use the TCP Sampler with port 80 — WebSocket is just HTTP on port 80 with an upgrade header",
      "WebSocket testing requires a custom JSR223 Sampler; no plugin provides native WebSocket support"
    ],
    "answer": 1,
    "explanation": "The WebSocket Samplers plugin provides: WebSocket Open Connection (handshake), WebSocket Text Frame (send message), and WebSocket Read Text Frame (receive with timeout). Chain them in a Thread Group: Open Connection -> Send subscribe message -> Read response frame -> Assert content. Ideal for testing market-data streaming or real-time notification APIs."
  },
  {
    "id": "jm33",
    "category": "jmeter",
    "question": "How do you publish messages to a Kafka topic from a JMeter test?",
    "options": [
      "Use the HTTP Request Sampler to POST to the Kafka REST Proxy if it is available; otherwise use JSR223 with Kafka client libraries added to the JMeter lib/ext folder",
      "Use the built-in Kafka Sampler that ships with JMeter — configure bootstrap.servers and topic name in the sampler UI",
      "Use a JDBC Sampler connected to the Kafka metadata database to insert records directly into the topic tables",
      "Kafka testing requires a separate Gatling test plan — JMeter does not support async messaging protocols"
    ],
    "answer": 0,
    "explanation": "JMeter has no built-in Kafka Sampler. Options: (1) If a Kafka REST Proxy is deployed, use HTTP Request POST with JSON payload. (2) For direct broker access, add kafka-clients.jar to lib/ext and use JSR223 Sampler with Groovy: create KafkaProducer, call producer.send(new ProducerRecord<>('topic', key, value)), flush. This validates message throughput and producer latency under load."
  },
  {
    "id": "jm34",
    "category": "jmeter",
    "question": "What is the Throughput Shaping Timer (plugin) and how does it differ from the Constant Throughput Timer?",
    "options": [
      "They are identical — Throughput Shaping Timer is just a renamed version in a newer JMeter release",
      "Throughput Shaping Timer defines a step schedule (ramp up, hold, spike, ramp down) with different TPS per time window; Constant Throughput Timer holds a single fixed TPS for the entire test",
      "Constant Throughput Timer is more accurate; Throughput Shaping Timer introduces up to 20% TPS variance",
      "Throughput Shaping Timer requires a separate Thread Group per step; Constant Throughput Timer works with any Thread Group configuration"
    ],
    "answer": 1,
    "explanation": "Throughput Shaping Timer lets you define rows: (Start TPS=0, End TPS=100, Duration=60s), (100, 100, 180s), (100, 500, 60s), (500, 0, 60s) — modeling pre-market ramp, steady state, peak burst, and cooldown. Constant Throughput Timer only holds one fixed rate. Combine with Concurrency Thread Group for dynamic thread management matching the TPS schedule."
  },
  {
    "id": "jm35",
    "category": "jmeter",
    "question": "How do you test file upload (multipart/form-data) in JMeter with dynamically generated files?",
    "options": [
      "File uploads require the HTTP File Upload plugin; the standard HTTP Request Sampler does not support multipart",
      "In HTTP Request Sampler go to the Files Upload tab; set File Path, Parameter Name, and MIME Type. Use a JSR223 Pre-Processor to generate the file content dynamically before the sampler executes",
      "Set Content-Type: multipart/form-data in the Header Manager and paste the file bytes as base64 in the Body Data tab",
      "Use a JDBC Sampler to write the file to a database BLOB column which the API then reads via a webhook"
    ],
    "answer": 1,
    "explanation": "HTTP Request Sampler > Files Upload tab: set File Path (absolute path or ${generatedFile}), Parameter Name (matches API field name), MIME Type (text/csv, application/pdf, etc.). Pair with a JSR223 Pre-Processor that creates the file dynamically per thread: new File('/tmp/batch_'+vars.get('batchId')+'.csv').text = 'header\\nrow1'. Store the path in a variable and reference it in the Files Upload tab."
  },
  {
    "id": "jm36",
    "category": "jmeter",
    "question": "How do you detect a memory leak on the target application server during a JMeter soak test?",
    "options": [
      "Enable the View Results Tree listener — it shows heap memory per request in its Response Data tab",
      "Set JMeter thread count to 1 and run for 24 hours; any error after the first hour indicates a memory leak",
      "Run a soak test (e.g., 200 users, 8 hours); collect JVM heap metrics via jstat, JMX, or PerfMon Agent on the target server; alert if heap usage grows linearly over time without GC recovery — a sign of objects not being collected",
      "Memory leaks can only be detected by developers using heap dump analysis — JMeter provides no visibility into server memory"
    ],
    "answer": 2,
    "explanation": "Memory leak signature: heap usage trends upward across the soak test duration instead of stabilizing after GC cycles. Collect server-side metrics via jstat -gcutil <PID> 30000 or JMX MBean (java.lang:type=Memory). JMeter's PerfMon plugin can graph server heap alongside TPS in real time. Confirm with a heap dump (jmap) and analyze with Eclipse MAT or VisualVM."
  },
  {
    "id": "jm37",
    "category": "jmeter",
    "question": "How do you analyze a JMeter .jtl results file from the command line to calculate error rate and 95th percentile?",
    "options": [
      "Open the .jtl in Excel and use PERCENTILE() and COUNTIF() formulas on the elapsed column",
      "Use awk to count errors: awk -F',' 'NR>1{total++; if($8==\"false\") err++} END{print err/total*100\"%\"}' results.jtl; and to get p95: awk -F',' 'NR>1{print $2}' results.jtl | sort -n | awk '{a[NR]=$0} END{print a[int(NR*0.95)+1]}'",
      "JMeter .jtl files are binary format and cannot be parsed with standard text tools",
      "Use grep to filter failed requests: grep 'false' results.jtl | wc -l, then divide by total line count"
    ],
    "answer": 1,
    "explanation": "JTL files are CSV (by default) with columns: timeStamp, elapsed, label, responseCode, responseMessage, threadName, dataType, success, failureMessage. Column 2 = elapsed time (ms), column 8 = success flag. Python pandas is the most powerful option: df = pd.read_csv('results.jtl'); df['elapsed'].quantile(0.95) gives p95; (df['success']=='false').mean()*100 gives error rate."
  },
  {
    "id": "jm38",
    "category": "jmeter",
    "question": "What is the difference between response time, latency, and throughput in JMeter measurements?",
    "options": [
      "Response time and latency are synonyms in JMeter — the Aggregate Report displays only one of them",
      "Response time = time from request sent to last byte received (includes server processing + transfer); Latency = time to first byte (TTFB — connect + server processing only); Throughput = requests per second sustained over the test duration",
      "Latency is measured at the network layer; response time is measured at the application layer — JMeter only measures response time",
      "Throughput is the count of successful requests; latency is the count of failed requests divided by total"
    ],
    "answer": 1,
    "explanation": "Latency (TTFB) = connect time + time waiting for first byte — indicates server processing speed. Response time = latency + data transfer time — the user-perceived total. Throughput = total samples / test duration in seconds. Little's Law relates them: N (concurrent users) = Throughput x Average Response Time. Use latency to diagnose server-side bottlenecks vs. large response bodies."
  },
  {
    "id": "jm39",
    "category": "jmeter",
    "question": "How do you design a realistic mixed-workload load model for a financial trading API?",
    "options": [
      "Use a single Thread Group with all endpoints and set Loop Count to Infinite — JMeter will distribute requests naturally",
      "Create separate Thread Groups per business function weighted by production traffic ratios (e.g., 40% trade submit, 35% inquiry, 15% settlement query, 10% cancel/amend) and use Constant Throughput Timer or Throughput Controller to enforce the mix",
      "Use a Random Controller under one Thread Group — it automatically weights requests based on response time",
      "Run separate test plans for each endpoint and combine the HTML reports after each run"
    ],
    "answer": 1,
    "explanation": "Realistic load models derive weights from production traffic logs. Separate Thread Groups per workflow allow independent TPS targets, separate Aggregate Report rows, and granular pass/fail criteria. Throughput Controller (Percent Executions mode) can also enforce ratios within a single Thread Group. Avoid single-endpoint tests — they miss the contention effects of concurrent mixed workloads."
  },
  {
    "id": "jm40",
    "category": "jmeter",
    "question": "How do you implement retry logic in JMeter for a polling scenario where you retry until status becomes SETTLED?",
    "options": [
      "Set the Thread Group Loop Count to a high number and use a Response Assertion to stop the thread when SETTLED is detected",
      "Use a JSR223 Pre-Processor to initialize retryCount=0 and status=PENDING; add a While Controller with condition: ${__groovy(vars.get('status')!='SETTLED' && vars.get('retryCount').toInteger()<5)}; inside place a Constant Timer, the GET status sampler, JSON Extractor, and a JSR223 Post-Processor to increment retryCount",
      "Set On Sample Error=Start Next Thread Loop — JMeter will automatically retry the failed request",
      "Use a Loop Controller with Loop Count=5 and a Response Assertion that passes only when status=SETTLED"
    ],
    "answer": 1,
    "explanation": "Pattern: init vars -> While Controller (status != 'SETTLED' && retryCount < 5) -> Constant Timer 2000ms -> GET /trades/${tradeRef}/status -> JSON Extractor captures $.status -> JSR223 Post-Processor: vars.put('retryCount', String.valueOf(Integer.parseInt(vars.get('retryCount'))+1)). This correctly polls with backoff and a maximum retry cap, matching asynchronous settlement workflows."
  },
  {
    "id": "jm41",
    "category": "jmeter",
    "question": "How does JMeter ensure session isolation between virtual users in a concurrent test?",
    "options": [
      "JMeter shares one HTTP session across all threads by default — you must add a Thread Isolation plugin to separate them",
      "Each thread maintains its own HTTP Cookie Manager, variable namespace (vars), and HTTP Cache Manager, providing natural session isolation. Configure HTTP Cookie Manager at Thread Group scope with 'Clear cookies each iteration' to create a fresh session per loop",
      "Session isolation requires separate Thread Groups — threads within the same group always share cookies and session tokens",
      "Add a unique User-Agent header per thread using ${__threadNum} to prevent the server from merging sessions"
    ],
    "answer": 1,
    "explanation": "JMeter threads are isolated by design: each has its own vars namespace (thread-local), its own HTTP Cookie jar, and its own HTTP Cache. HTTP Cookie Manager at Thread Group scope with 'Clear cookies each iteration' resets session state. CSV Data Set Config with unique credentials per row ensures each thread authenticates independently, preventing test data collisions."
  },
  {
    "id": "jm42",
    "category": "jmeter",
    "question": "How do you configure JMeter to handle mutual TLS (mTLS) for APIs that require client certificates?",
    "options": [
      "Add the client certificate as a Base64 string in the Authorization HTTP header",
      "mTLS is not supported by JMeter — use curl scripts via a JSR223 Sampler instead",
      "Set javax.net.ssl.keyStore, javax.net.ssl.keyStorePassword, and javax.net.ssl.keyStoreType=PKCS12 in jmeter.properties; or use the Keystore Configuration element with per-thread certificate alias assignment",
      "Install the client certificate in the OS certificate store — JMeter inherits system TLS settings automatically"
    ],
    "answer": 2,
    "explanation": "For mTLS: in jmeter.properties set javax.net.ssl.keyStore=/certs/client.p12 and javax.net.ssl.keyStorePassword=${__P(ks_pass)}. For per-thread certificates (different cert per virtual user), use the Keystore Configuration element with Start Index=0 to rotate through aliases in the keystore. Always use -Pks_pass= at runtime — never hard-code credentials in the .jmx file."
  },
  {
    "id": "jm43",
    "category": "jmeter",
    "question": "What is the JMeter Debug Sampler, when should you use it, and what is its critical production risk?",
    "options": [
      "Debug Sampler is a performance optimization tool that reduces request overhead in production load tests",
      "Debug Sampler outputs all current JMeter Variables, Properties, and System Properties to the View Results Tree — invaluable for verifying that extracted values (tokens, IDs) are correct during script development. Critical risk: it stores all variable state in memory per sample — never leave it enabled in load tests",
      "Debug Sampler replaces the HTTP Request Sampler during dry-run mode to validate test plan structure without sending real requests",
      "Debug Sampler captures network-level packet traces for each request — similar to Wireshark integration"
    ],
    "answer": 1,
    "explanation": "Debug Sampler shows JMeterVariables (tradeId, sessionToken, retryCount), JMeterProperties (env, baseurl), and SystemProperties in View Results Tree. Essential for confirming extractions work before scaling to 500 threads. Production risk: every thread records all variable state into memory per iteration — at 500 TPS this causes rapid heap exhaustion. Disable or wrap in an If Controller that only fires when a debug flag is set."
  },
  {
    "id": "jm44",
    "category": "jmeter",
    "question": "How do you record a test script using JMeter's HTTP(S) Test Script Recorder?",
    "options": [
      "JMeter installs as a browser extension that records clicks and form submissions directly into a .jmx file",
      "Enable the Script Recorder from the Test Plan, point the browser proxy to localhost:8888, import JMeter's CA certificate into the browser, browse the application, then clean up the recording by removing static assets and adding correlation for dynamic values",
      "Use the JMeter Proxy Recorder only for HTTP sites — HTTPS recording requires Fiddler or Charles Proxy",
      "The Script Recorder automatically adds correlation and parameterization — no cleanup is needed after recording"
    ],
    "answer": 1,
    "explanation": "Setup: WorkBench > HTTP(S) Test Script Recorder > Port 8888 > Target: Recording Controller. Browser: Manual Proxy localhost:8888. Import ApacheJMeterTemporaryRootCA.crt into browser trust store for HTTPS. After recording: filter static resources (EXCLUDE .*\\.(css|js|png|jpg|gif|ico)$), add JSON/RegEx Extractors for session tokens and dynamic IDs, parameterize hard-coded values with CSV variables."
  },
  {
    "id": "jm45",
    "category": "jmeter",
    "question": "How do you test a gRPC service in JMeter?",
    "options": [
      "JMeter natively supports gRPC through the HTTP/2 Request Sampler — set Protocol=grpc in the sampler",
      "Use the gRPC Request plugin (e.g., zalopay-oss) which requires the .proto file, service method, and JSON-formatted request; or use JSR223 Sampler with gRPC Java stub libraries added to lib/ext",
      "Convert gRPC calls to REST using a grpc-gateway sidecar and test with standard HTTP Request Samplers",
      "gRPC testing is not supported in JMeter — use k6 with the k6-grpc extension instead"
    ],
    "answer": 1,
    "explanation": "Option 1: gRPC plugin — configure Host, Port, Proto File path, Full Method name (com.example.Service/Method), Metadata (authorization token), and Request (JSON). Option 2: JSR223 Sampler — add grpc-netty, protobuf-java jars to lib/ext; use ManagedChannelBuilder and generated stub to call the service. gRPC is used in high-performance internal microservice communication where REST overhead is unacceptable."
  },
  {
    "id": "jm46",
    "category": "jmeter",
    "question": "How do you implement a custom Java Sampler in JMeter for a proprietary protocol?",
    "options": [
      "Edit the JMeter source code to add the new protocol — there is no plugin API for custom samplers",
      "Extend AbstractJavaSamplerClient, override getDefaultParameters() to define inputs and runTest() to implement the protocol logic and return a SampleResult with timing, success flag, and response data; package as a JAR in lib/ext",
      "Use a JSR223 Sampler — it provides equivalent capability to a custom Java Sampler with less development overhead",
      "Custom samplers must be registered in jmeter.properties before JMeter will recognize them at runtime"
    ],
    "answer": 1,
    "explanation": "Custom sampler skeleton: class MyProtocolSampler extends AbstractJavaSamplerClient { public Arguments getDefaultParameters() { /* define host, port, etc. */ } public SampleResult runTest(JavaSamplerContext ctx) { SampleResult r = new SampleResult(); r.sampleStart(); /* send protocol message */ r.sampleEnd(); r.setSuccessful(true); return r; } }. Package as JAR in lib/ext. Use for FIX, SWIFT, proprietary binary protocols where no plugin exists."
  },
  {
    "id": "jm47",
    "category": "jmeter",
    "question": "How do you test API rate limiting in JMeter to verify that 429 responses are correctly returned above the quota?",
    "options": [
      "Set the Thread Group to a very high thread count — JMeter will naturally exceed any rate limit",
      "Use a Constant Throughput Timer set above the rate limit (e.g., 7200 req/min if limit is 100 TPS), use a Response Assertion to expect 429 responses, and use a JSR223 Assertion to count 429 hits via props for cross-thread accumulation; verify Retry-After header is present via RegEx Extractor",
      "Rate limit testing requires a dedicated commercial tool — JMeter cannot precisely control per-second request rates",
      "Disable all timers in the test plan — the resulting maximum TPS from JMeter threads will exceed any practical rate limit"
    ],
    "answer": 1,
    "explanation": "Design: Thread Group 50 users, ramp 0s, loop 20 = ~1000 simultaneous requests. Constant Throughput Timer: 7200 req/min (120 TPS) exceeds a 100 TPS limit. Response Assertion: Contains 429. JSR223 Assertion: props.put('rateLimitHits', String.valueOf(Integer.parseInt(props.get('rateLimitHits')?:'0')+1)). RegEx Post-Processor captures Retry-After header value. Verify: 429 rate matches expected quota enforcement behavior."
  },
  {
    "id": "jm48",
    "category": "jmeter",
    "question": "How do you compare performance test results across two releases to detect regressions?",
    "options": [
      "Run both tests back-to-back on the same day and visually compare the HTML report charts",
      "Use Python pandas to load both .jtl files, compute per-sampler p90/p95/p99 for each, calculate percentage change, and flag any sampler where p95 increased more than 10% as a regression",
      "Store results in a spreadsheet and use a t-test to determine if differences are statistically significant",
      "Compare only the Average response time columns in the two Aggregate Reports — percentile differences are not meaningful across runs"
    ],
    "answer": 1,
    "explanation": "Python comparison: v1=pd.read_csv('v1.jtl'); v2=pd.read_csv('v2.jtl'); def summary(df): return df.groupby('label')['elapsed'].agg(p95=lambda x: x.quantile(0.95)); diff = summary(v2)/summary(v1)-1; regressions = diff[diff['p95']>0.1]. A >10% p95 increase triggers a performance investigation. Automate this in Jenkins post-test to create automatic regression gates between releases."
  },
  {
    "id": "jm49",
    "category": "jmeter",
    "question": "What are the essential JMeter plugins from the JMeter Plugins Manager for enterprise performance testing?",
    "options": [
      "The only essential plugin is the HTML Reporter — all other JMeter functionality is built-in",
      "jpgc-Standard Set (Throughput Shaping Timer, Response Times Over Time, TPS graphs), jpgc-PerfMon (server-side CPU/memory/IO monitoring via ServerAgent), WebSocket Samplers, and jpgc-CMD (CLI automation)",
      "Only the JDBC plugin needs to be installed — all protocol and reporting plugins are included in the base JMeter download",
      "The BlazeMeter plugin is the only community-supported plugin; avoid all others due to stability risks"
    ],
    "answer": 1,
    "explanation": "Essential plugins: (1) jpgc-Standard Set: Throughput Shaping Timer for stepped load profiles, Response Times Over Time and TPS graphs for Grafana-style analysis in GUI. (2) jpgc-PerfMon: deploy ServerAgent (startAgent.sh --tcp-port 4444) on target servers to capture CPU%, memory, disk I/O, and network in sync with JMeter load data. (3) WebSocket Samplers: for WS protocol testing. (4) Concurrency Thread Group: dynamic thread scaling matched to TPS schedule."
  },
  {
    "id": "jm50",
    "category": "jmeter",
    "question": "A JMeter test shows TPS is stable but average response time doubles after 30 minutes. What is the most likely cause and diagnostic approach?",
    "options": [
      "The JMeter Controller machine is running out of memory — restart JMeter with more heap and rerun",
      "Network latency increased due to test environment contention — run at a lower thread count to reduce network load",
      "The target application is experiencing resource exhaustion (connection pool saturation, heap growth, or thread pool starvation) — correlate JMeter latency trend with server-side metrics: heap usage, DB connection pool active count, thread dump, and GC log to identify the resource being exhausted",
      "The .jtl file is growing too large and slowing down the Simple Data Writer listener, which blocks sampling threads"
    ],
    "answer": 2,
    "explanation": "Stable TPS with rising latency = server-side degradation over time. Diagnostic steps: (1) Check server heap trend via jstat — if growing linearly, memory leak or object accumulation. (2) Check DB connection pool active count — if at max, connection starvation. (3) Check thread pool queue depth — if growing, CPU saturation. (4) Review GC log for increasing pause duration. This pattern distinguishes application degradation from load generator issues."
  },
  {
    "id": "jm51",
    "category": "jmeter",
    "question": "What are the five 'On Sample Error' settings in a JMeter Thread Group, and when would you use 'Start Next Thread Loop' vs 'Stop Thread'?",
    "options": [
      "There are only two options: Continue or Stop Test — fine-grained error handling requires JSR223 scripting",
      "Continue (log error, keep running), Start Next Thread Loop (skip remaining samplers in current iteration and begin the next loop), Stop Thread (terminate only this virtual user), Stop Test (graceful stop after in-flight samples), Stop Test Now (immediate forced halt) — use 'Start Next Thread Loop' when a failed login should skip the rest of that iteration but retry on the next loop; use 'Stop Thread' when a user's test data is exhausted",
      "On Sample Error only applies to HTTP 5xx responses — 4xx responses are always treated as successes",
      "Stop Test and Stop Test Now are identical — both immediately terminate all threads without waiting for in-flight samples"
    ],
    "answer": 1,
    "explanation": "These five modes control fault tolerance per Thread Group. 'Continue' (default) logs the error and proceeds — standard for load tests measuring error rate. 'Start Next Thread Loop' skips the rest of the current iteration (e.g., if login fails, skip trade submit and go straight to the next loop's login) — ideal for stateful workflows where downstream requests depend on prior success. 'Stop Thread' kills one virtual user permanently — used when unique test data is consumed. 'Stop Test' waits for in-flight samples to complete, then stops all threads gracefully. 'Stop Test Now' force-kills immediately — use only for emergency abort."
  },
  {
    "id": "jm52",
    "category": "jmeter",
    "question": "How do you test a FIX (Financial Information eXchange) protocol gateway using JMeter?",
    "options": [
      "Use the standard HTTP Request Sampler with Content-Type: application/fix — JMeter auto-encodes FIX messages",
      "Use the TCP Sampler configured with the FIX gateway host and port, with the SOH (\\x01) delimiter as the End of Line marker, and construct FIX messages (e.g., 8=FIX.4.4|35=D|49=SENDER|56=TARGET|...) in the request body; or use a custom Java Sampler with the QuickFIX/J library for full session-level testing",
      "FIX protocol testing requires a dedicated FIX testing tool like FIXimulator — JMeter cannot send raw TCP messages",
      "Use the JMS Sampler to connect to the FIX message broker since FIX is a messaging protocol built on JMS"
    ],
    "answer": 1,
    "explanation": "FIX is a binary/text protocol over raw TCP, not HTTP. JMeter's TCP Sampler connects to the FIX gateway on its port (e.g., 9878), sends FIX-formatted messages with the SOH character (\\x01) as the field delimiter. For simple connectivity and throughput testing, TCP Sampler suffices. For full session-level testing (logon, heartbeat, sequence numbers, resend requests), use a custom Java Sampler extending AbstractJavaSamplerClient with QuickFIX/J — a standard open-source FIX engine — added to JMeter's lib/ext directory."
  },
  {
    "id": "jm53",
    "category": "jmeter",
    "question": "How do you systematically identify whether a performance bottleneck is in the application layer, database layer, or network layer using JMeter results?",
    "options": [
      "JMeter cannot distinguish between layers — you must use APM tools exclusively for bottleneck isolation",
      "Compare only the Average response time in the Aggregate Report — if it exceeds the SLA, the bottleneck is always in the application layer",
      "Correlate four patterns: (1) response time increases linearly with TPS while error rate stays low — CPU or thread pool saturation on the app server; (2) error rate spikes at a specific TPS threshold — resource exhaustion (DB connection pool, socket limits); (3) JDBC Sampler is slow but HTTP Sampler is fast — database layer bottleneck; (4) JMeter Connect Time is high but server-side processing is fast — network layer or load balancer issue",
      "Run separate tests against each layer independently — the layer with the highest average latency is the bottleneck"
    ],
    "answer": 2,
    "explanation": "Bottleneck isolation requires cross-referencing JMeter metrics with server-side monitoring. Pattern 1: linearly rising latency with increasing TPS suggests CPU saturation — verify with CPU% and thread dumps on the app server. Pattern 2: a sudden error spike at a TPS threshold (e.g., exactly at 200 TPS) points to a hard resource limit — check DB connection pool max, OS socket limits (ulimit -n), or thread pool size. Pattern 3: if the JDBC Sampler p95 is 800ms but the HTTP API Sampler wrapping it is 850ms, the database is the bottleneck — run EXPLAIN PLAN on slow queries. Pattern 4: high Connect Time in JMeter (visible in the .jtl) with low server-side processing indicates network latency or load balancer queueing."
  },
  {
    "id": "pyqa1",
    "category": "python-for-qa",
    "question": "What does this pytest fixture do, and when is teardown executed?\n\n```python\n@pytest.fixture(autouse=True)\ndef reset_db(db):\n    yield\n    db.rollback()\n```",
    "options": [
      "Setup runs before each test; rollback() fires before the next test begins",
      "autouse=True injects the fixture into every test in scope without explicit declaration; code before yield is setup, code after yield is teardown — rollback() runs after each test completes",
      "yield pauses test execution; rollback() only fires if the test raises an exception",
      "autouse=True means the fixture runs once per module, not per test"
    ],
    "answer": 1,
    "explanation": "autouse=True removes the need to declare the fixture in every test function signature. The yield splits setup (before) from teardown (after). db.rollback() always runs after the test — pass or fail — preventing database state leakage between tests."
  },
  {
    "id": "pyqa2",
    "category": "python-for-qa",
    "question": "What is the output of this code?\n\n```python\n@pytest.mark.parametrize('a,b,expected', [\n    (1, 2, 3),\n    (0, 0, 0),\n    (-1, 1, 0),\n])\ndef test_add(a, b, expected):\n    assert a + b == expected\n```",
    "options": [
      "One test runs with all three tuples combined into a single assertion",
      "Three separate test cases run: test_add[1-2-3], test_add[0-0-0], test_add[-1-1-0] — each with its own pass/fail status",
      "The test raises a ValueError because parametrize cannot unpack tuples",
      "Only the first tuple runs; pytest stops at the first passing case"
    ],
    "answer": 1,
    "explanation": "@pytest.mark.parametrize generates N independent test nodes from N tuples. Each test gets its own node ID in the report. This is the primary data-driven testing pattern in pytest — far cleaner than a loop inside one test function."
  },
  {
    "id": "pyqa3",
    "category": "python-for-qa",
    "question": "What does `pytest.raises` verify in this snippet?\n\n```python\ndef test_divide_by_zero():\n    with pytest.raises(ZeroDivisionError, match=r'division by zero'):\n        result = 10 / 0\n```",
    "options": [
      "It verifies that 10/0 returns infinity instead of raising an exception",
      "It asserts that ZeroDivisionError is raised AND its string representation matches the regex — the test fails if the exception is not raised or the message doesn't match",
      "match= is optional metadata and has no effect on pass/fail",
      "pytest.raises catches the exception silently; the test always passes regardless of exception type"
    ],
    "answer": 1,
    "explanation": "pytest.raises acts as a context manager that asserts the named exception must be raised. The optional match= parameter applies re.search() against str(excinfo.value), so the test also fails if the error message doesn't match the pattern. This lets you verify both exception type and message in one statement."
  },
  {
    "id": "pyqa4",
    "category": "python-for-qa",
    "question": "What is the purpose of `conftest.py` in a pytest project?",
    "options": [
      "It is a configuration file only for pytest.ini settings; fixtures cannot be defined there",
      "conftest.py is auto-discovered by pytest and makes fixtures, hooks, and plugins available to all tests in the same directory and subdirectories — without any import",
      "It must be imported explicitly in every test file that wants to use its fixtures",
      "conftest.py is used exclusively for session-scoped fixtures; function-scoped fixtures must live in the test file"
    ],
    "answer": 1,
    "explanation": "pytest auto-collects conftest.py files walking up from the test file to the rootdir. Fixtures defined there are available to all tests in that directory tree with no import. Multiple conftest.py files can exist at different levels, each scoping their fixtures to their subtree."
  },
  {
    "id": "pyqa5",
    "category": "python-for-qa",
    "question": "What does `unittest.mock.patch` do in this test?\n\n```python\nfrom unittest.mock import patch\n\ndef test_send_email():\n    with patch('myapp.mailer.smtplib.SMTP') as mock_smtp:\n        send_welcome_email('user@test.com')\n        mock_smtp.assert_called_once()\n```",
    "options": [
      "patch replaces smtplib.SMTP in the standard library globally for the entire test session",
      "patch temporarily replaces myapp.mailer's reference to smtplib.SMTP with a MagicMock for the duration of the with block — restoring the real class afterwards",
      "patch only works with functions, not classes — this code would raise AttributeError",
      "assert_called_once() verifies that SMTP was imported once, not instantiated once"
    ],
    "answer": 1,
    "explanation": "patch targets the name as it exists in the module under test (myapp.mailer.smtplib.SMTP), not in the source module — a critical distinction. Within the with block, any call to smtplib.SMTP inside myapp.mailer hits the mock. After the block, the real class is restored. This prevents real emails from being sent during tests."
  },
  {
    "id": "pyqa6",
    "category": "python-for-qa",
    "question": "What is the bug in this test and how should it be fixed?\n\n```python\nresponse_list = []\n\n@pytest.fixture\ndef client():\n    app = create_app()\n    return app.test_client()\n\ndef test_get_users(client):\n    resp = client.get('/users')\n    response_list.append(resp)\n    assert resp.status_code == 200\n```",
    "options": [
      "No bug — appending to a module-level list is a common logging pattern",
      "response_list is a module-level mutable shared across test runs; it accumulates state between tests and can cause memory leaks or false assertions in later tests — move it inside the test or use a fixture",
      "The bug is that client is a fixture, not a function — it cannot be called inside test_get_users",
      "app.test_client() must be yielded from the fixture to allow teardown"
    ],
    "answer": 1,
    "explanation": "Module-level mutable state is a classic test isolation bug. response_list persists across test runs (and even across repeated pytest sessions in watch mode). If another test later checks len(response_list) it will see stale data. All test state should live in fixtures with appropriate scope, or inside the test function itself."
  },
  {
    "id": "pyqa7",
    "category": "python-for-qa",
    "question": "What does the `@pytest.fixture(scope='session')` decorator change?\n\n```python\n@pytest.fixture(scope='session')\ndef db_connection():\n    conn = create_connection(DB_URL)\n    yield conn\n    conn.close()\n```",
    "options": [
      "The fixture runs once per test file (module), not once per session",
      "The fixture is created once for the entire pytest session and shared across all tests — conn.close() runs only once when the session ends",
      "scope='session' means the fixture is stored in a database session object",
      "It runs before the session but teardown (conn.close) never executes in session scope"
    ],
    "answer": 1,
    "explanation": "scope='session' is the broadest scope. The fixture is set up once when first requested and torn down after the last test in the session finishes. Useful for expensive resources like DB connections or browser instances. Other scopes: function (default), class, module, package."
  },
  {
    "id": "pyqa8",
    "category": "python-for-qa",
    "question": "What will this assertion print on failure?\n\n```python\nactual = {'status': 'error', 'code': 500}\nexpected = {'status': 'ok', 'code': 200}\nassert actual == expected, f'API response mismatch: got {actual}'\n```",
    "options": [
      "AssertionError with no message — custom messages are ignored by pytest",
      "AssertionError: API response mismatch: got {'status': 'error', 'code': 500} — pytest prints the custom message AND its own diff of the two dicts",
      "The test silently passes because the custom message overrides the assertion check",
      "SyntaxError — f-strings are not allowed in assert statements"
    ],
    "answer": 1,
    "explanation": "pytest captures the custom message after the comma in an assert statement and includes it in the failure output alongside its own introspected diff. Using f-strings with the actual values in assert messages is a best practice — it surfaces the bad data immediately without needing to re-run with -s or print statements."
  },
  {
    "id": "pyqa9",
    "category": "python-for-qa",
    "question": "What does this code test and what is the QA technique being demonstrated?\n\n```python\nimport pytest\nfrom hypothesis import given, strategies as st\n\n@given(st.text(min_size=1, max_size=200))\ndef test_username_sanitizer_never_raises(s):\n    result = sanitize_username(s)\n    assert isinstance(result, str)\n```",
    "options": [
      "It tests sanitize_username with three hardcoded edge-case strings",
      "Property-based testing: Hypothesis generates hundreds of random strings matching the strategy and verifies the invariant (always returns str) — automatically finding edge cases the developer didn't think of",
      "It uses fuzzing to crash the application and record the crash payload",
      "st.text generates SQL injection payloads to test input sanitization security"
    ],
    "answer": 1,
    "explanation": "Hypothesis is Python's property-based testing library. Instead of specific example inputs, you define a strategy (st.text) and an invariant (result is always a str). Hypothesis generates many random inputs, shrinks failures to the minimal reproducing case, and re-runs known failures from its database. Essential for testing parsers, serializers, and input sanitizers."
  },
  {
    "id": "pyqa10",
    "category": "python-for-qa",
    "question": "What is wrong with this test for an async function?\n\n```python\n# BAD\ndef test_fetch_user():\n    result = fetch_user(42)  # async function\n    assert result['id'] == 42\n```",
    "options": [
      "Nothing — Python automatically awaits coroutines when called in test functions",
      "fetch_user(42) returns a coroutine object, not the result — result['id'] will raise TypeError. The fix: use `pytest-asyncio` and mark the test `async def` with `await`",
      "The test will work but run synchronously, making it slower",
      "assert must be replaced with asyncio.run(assert ...) for async tests"
    ],
    "answer": 1,
    "explanation": "Calling an async function without await returns a coroutine object, not the resolved value. The fix is to use pytest-asyncio: mark the test `@pytest.mark.asyncio` (or set asyncio_mode='auto') and declare it `async def test_fetch_user(): result = await fetch_user(42)`. Failing to await is a silent bug — the coroutine is truthy so assertions on it may pass incorrectly."
  },
  {
    "id": "pyqa11",
    "category": "python-for-qa",
    "question": "What does `mocker.spy` do differently from `mocker.patch`?\n\n```python\ndef test_discount_called(mocker):\n    spy = mocker.spy(PricingService, 'apply_discount')\n    PricingService().calculate(100)\n    assert spy.call_count == 1\n```",
    "options": [
      "mocker.spy replaces apply_discount with a MagicMock that always returns None",
      "mocker.spy wraps the real apply_discount method — the original implementation still executes, but call count, args, and return values are recorded for assertion",
      "spy and patch are identical; mocker.spy is just an alias for mocker.patch",
      "mocker.spy only works on module-level functions, not class methods"
    ],
    "answer": 1,
    "explanation": "mocker.spy is a pytest-mock utility that instruments a method without replacing it. The real code runs and produces real side-effects, but the spy tracks calls exactly like a mock. Use it when you need to verify a method was called a certain number of times without breaking the actual behavior the other parts of the test depend on."
  },
  {
    "id": "pyqa12",
    "category": "python-for-qa",
    "question": "What does this `requests` snippet assert about the API response?\n\n```python\nimport requests\n\ndef test_create_user_api():\n    payload = {'name': 'Alice', 'email': 'alice@test.com'}\n    resp = requests.post('http://api/users', json=payload)\n    assert resp.status_code == 201\n    body = resp.json()\n    assert body['email'] == payload['email']\n    assert 'id' in body\n```",
    "options": [
      "It only verifies the HTTP status code; the body assertions are unreachable",
      "It verifies: the endpoint returns 201 Created, the response body echoes back the submitted email, and an id field was generated by the server",
      "resp.json() raises an exception if the status code is not 200",
      "assert 'id' in body checks that the string 'id' appears anywhere in the JSON text"
    ],
    "answer": 1,
    "explanation": "This covers three tiers of API assertion: status code (contract), round-trip field correctness (email echoed back), and server-generated field existence (id). resp.json() works on any 2xx/4xx/5xx response that returns JSON. The pattern of asserting both the mirror field and the generated field is a fundamental API test structure."
  },
  {
    "id": "pyqa13",
    "category": "python-for-qa",
    "question": "What is the purpose of `@pytest.mark.xfail` in this test?\n\n```python\n@pytest.mark.xfail(reason='BUG-1234: endpoint returns 500 on empty string')\ndef test_search_empty_string():\n    resp = client.get('/search?q=')\n    assert resp.status_code == 200\n```",
    "options": [
      "The test is skipped entirely and marked as TODO",
      "The test runs normally but a failure is expected; if it fails it reports XFAIL (expected failure), if it passes it reports XPASS (unexpected pass) — neither blocks the CI build by default",
      "xfail makes the test always pass regardless of the actual result",
      "It marks the test as flaky so pytest retries it up to 3 times"
    ],
    "answer": 1,
    "explanation": "xfail is the correct way to document a known bug without deleting the test or disabling CI. XFAIL means the bug is confirmed. XPASS means someone fixed it — alerting the team to update the mark. Using strict=True turns XPASS into a failure, enforcing that the mark is removed once the bug is fixed."
  },
  {
    "id": "pyqa14",
    "category": "python-for-qa",
    "question": "What does the `Faker` library produce in this test data factory?\n\n```python\nfrom faker import Faker\nfake = Faker()\n\ndef make_user():\n    return {\n        'name': fake.name(),\n        'email': fake.email(),\n        'dob': fake.date_of_birth(minimum_age=18).isoformat()\n    }\n```",
    "options": [
      "make_user() always returns the same dict — Faker generates deterministic data by default",
      "Each call generates a realistic but random name, email, and adult date of birth — useful for seeding test data without hardcoding values that might conflict with real data",
      "fake.email() calls a real mail server to verify the address exists",
      "Faker only generates English locale data; internationalized tests require a different library"
    ],
    "answer": 1,
    "explanation": "Faker generates locale-aware realistic fake data. Using it in test data factories prevents hardcoded values that cause unique-constraint violations when tests run repeatedly. Seed with Faker(seed=42) for reproducibility. Faker supports 30+ locales and dozens of providers (address, company, credit card, etc.)."
  },
  {
    "id": "pyqa15",
    "category": "python-for-qa",
    "question": "What does the `@pytest.mark.parametrize` indirect pattern do here?\n\n```python\n@pytest.fixture\ndef user(request):\n    return create_user(role=request.param)\n\n@pytest.mark.parametrize('user', ['admin', 'viewer'], indirect=True)\ndef test_dashboard_access(user):\n    assert user.can_view_dashboard()\n```",
    "options": [
      "indirect=True passes the parameter values directly to test_dashboard_access as a list",
      "indirect=True routes the parameter values through the user fixture via request.param — the fixture receives 'admin' then 'viewer' and creates the appropriate user object for each test run",
      "indirect=True means the fixture is only created when the parameter is truthy",
      "It causes the parametrize decorator to be ignored and user fixture runs with default values"
    ],
    "answer": 1,
    "explanation": "indirect=True tells pytest to pass parametrize values as request.param to the named fixture rather than directly to the test function. This is the pattern for parameterizing across different setups (e.g., different user roles, database backends, browser types) while keeping test logic clean."
  },
  {
    "id": "pyqa16",
    "category": "python-for-qa",
    "question": "What does this context manager test verify?\n\n```python\ndef test_file_cleanup():\n    with tempfile.NamedTemporaryFile(delete=False) as f:\n        f.write(b'test data')\n        path = f.name\n    process_file(path)\n    assert not os.path.exists(path)\n```",
    "options": [
      "It verifies that NamedTemporaryFile raises an error when delete=False is set",
      "It verifies that process_file() deletes the file as part of its processing — the temp file is created outside the context manager's auto-delete scope so its existence after the call can be meaningfully asserted",
      "delete=False means the file is automatically deleted after the with block exits",
      "os.path.exists() always returns False for temporary files"
    ],
    "answer": 1,
    "explanation": "delete=False prevents NamedTemporaryFile from auto-deleting on close, so the file persists after the with block. The test then calls process_file() which should consume and delete the file. The final assertion verifies the side effect. This pattern tests file-processing functions without touching the real filesystem in a risky way."
  },
  {
    "id": "pyqa17",
    "category": "python-for-qa",
    "question": "What is the output of this comparison and why does it matter for QA?\n\n```python\nassert 0.1 + 0.2 == 0.3  # raises AssertionError!\nimport math\nassert math.isclose(0.1 + 0.2, 0.3, rel_tol=1e-9)  # passes\n```",
    "options": [
      "Both assertions pass — Python handles floating point exactly",
      "0.1 + 0.2 == 0.30000000000000004 in IEEE 754 floating point, so the first assertion fails; math.isclose() uses a relative tolerance to compare floats safely — essential when asserting on prices, percentages, or measurements",
      "math.isclose is only for complex numbers; use round() for floats",
      "The second assertion passes by accident because Python caches float literals"
    ],
    "answer": 1,
    "explanation": "IEEE 754 floating point cannot represent 0.1 or 0.2 exactly, so 0.1 + 0.2 evaluates to 0.30000000000000004. Never use == for float comparisons in tests. Use math.isclose(), pytest.approx(), or round() depending on context. pytest.approx(0.3) is the idiomatic pytest way: assert 0.1 + 0.2 == pytest.approx(0.3)."
  },
  {
    "id": "pyqa18",
    "category": "python-for-qa",
    "question": "What does `pytest.approx` do in this API test?\n\n```python\ndef test_tax_calculation():\n    result = calculate_tax(price=99.99, rate=0.08)\n    assert result == pytest.approx(7.9992, rel=1e-3)\n```",
    "options": [
      "pytest.approx rounds result to 4 decimal places before comparing",
      "pytest.approx wraps the expected value with a relative tolerance (0.1% here) so the assertion passes if result is within that tolerance of 7.9992 — preventing float precision failures",
      "rel=1e-3 means the comparison retries up to 1000 times",
      "pytest.approx only works with integers; floats require math.isclose"
    ],
    "answer": 1,
    "explanation": "pytest.approx is the idiomatic way to compare floats in pytest. rel=1e-3 sets a 0.1% relative tolerance. It also works on dicts and lists of floats, comparing each element: assert {'tax': 7.99} == pytest.approx({'tax': 7.9992}, rel=1e-2). Indispensable for financial, scientific, or any numeric assertion."
  },
  {
    "id": "pyqa19",
    "category": "python-for-qa",
    "question": "What does this `MagicMock` configuration test?\n\n```python\nfrom unittest.mock import MagicMock\n\ndef test_retry_on_failure():\n    mock_api = MagicMock()\n    mock_api.call.side_effect = [Exception('timeout'), Exception('timeout'), {'status': 'ok'}]\n    result = retry_wrapper(mock_api.call, retries=3)\n    assert result == {'status': 'ok'}\n    assert mock_api.call.call_count == 3\n```",
    "options": [
      "side_effect with a list means the mock raises all exceptions simultaneously",
      "side_effect consumes the list in order — first two calls raise Exception('timeout'), third call returns the dict; the test verifies retry_wrapper retries on failure and returns the successful result after 3 attempts",
      "MagicMock cannot raise exceptions via side_effect; use return_value instead",
      "call_count tracks how many times the mock was imported, not called"
    ],
    "answer": 1,
    "explanation": "When side_effect is a list, each call to the mock consumes the next item: if it's an exception it's raised, if it's a value it's returned. This is the canonical pattern for testing retry logic — simulate N failures followed by success. call_count verifies the retry mechanism actually retried the right number of times."
  },
  {
    "id": "pyqa20",
    "category": "python-for-qa",
    "question": "What is the purpose of `responses` library in this test?\n\n```python\nimport responses\n\n@responses.activate\ndef test_get_weather():\n    responses.add(\n        responses.GET,\n        'https://api.weather.com/v1/current',\n        json={'temp': 72, 'unit': 'F'},\n        status=200\n    )\n    result = get_current_weather()\n    assert result['temp'] == 72\n```",
    "options": [
      "responses makes a real HTTP request but caches the result for faster future calls",
      "responses intercepts any requests.get() call to the registered URL and returns the configured JSON mock — preventing real network calls and making the test deterministic",
      "responses.activate is required for all requests tests to enable connection pooling",
      "@responses.activate raises an error if the URL is not registered, forcing intentional stubs"
    ],
    "answer": 1,
    "explanation": "The responses library monkey-patches the requests library within the decorated test. Any unregistered URL raises ConnectionError by default (passthrough_prefixes can override this). This is the standard way to unit-test code that calls external HTTP APIs without spinning up a mock server. httpretty and pytest-httpserver are alternatives."
  },
  {
    "id": "pyqa21",
    "category": "python-for-qa",
    "question": "What is the QA risk in this parametrized test?\n\n```python\n@pytest.mark.parametrize('email', [\n    'user@example.com',\n    'user@example.com',\n    'user@test.org',\n])\ndef test_email_validation(email):\n    assert is_valid_email(email)\n```",
    "options": [
      "No risk — duplicate values are valid and pytest deduplicates them automatically",
      "The duplicate 'user@example.com' entry means test_email_validation[email1] and test_email_validation[email0] test the same input — one test case is wasted and if the first fails, the second gives false confidence",
      "Parametrize with duplicate values raises a ValueError at collection time",
      "is_valid_email will raise a unique constraint violation on the second identical email"
    ],
    "answer": 1,
    "explanation": "Duplicate parametrize values waste a test slot and create misleading test IDs. Pytest won't error — it runs all three. To add meaningful coverage, the third slot should test a boundary case: an invalid format, a subdomain email, an internationalized domain, or an edge case length. Review parametrize sets for coverage gaps, not just correctness."
  },
  {
    "id": "pyqa22",
    "category": "python-for-qa",
    "question": "What does `capfd` capture in this pytest test?\n\n```python\ndef test_cli_output(capfd):\n    run_cli_command('--version')\n    out, err = capfd.readouterr()\n    assert 'v2.1.0' in out\n    assert err == ''\n```",
    "options": [
      "capfd captures only log messages from the logging module",
      "capfd captures stdout and stderr at the file-descriptor level — out contains whatever was printed to stdout, err contains stderr; this tests CLI output without mocking print()",
      "capfd.readouterr() resets the process stdout/stderr permanently",
      "capfd only works with sys.stdout.write(), not print()"
    ],
    "answer": 1,
    "explanation": "capfd (file-descriptor level) and capsys (Python sys.stdout level) are pytest built-in fixtures for capturing output. capfd works with C extensions and subprocesses that write directly to fd 1/2. readouterr() returns and clears the captured buffers. Use it to test CLIs, logging output, and any code that produces console output."
  },
  {
    "id": "pyqa23",
    "category": "python-for-qa",
    "question": "What does this dataclass-based test model provide over a plain dict?\n\n```python\nfrom dataclasses import dataclass\n\n@dataclass\nclass UserResponse:\n    id: int\n    email: str\n    role: str\n\ndef test_user_response_shape():\n    raw = api_client.get('/users/1').json()\n    user = UserResponse(**raw)\n    assert user.role == 'admin'\n```",
    "options": [
      "Nothing — dataclasses and dicts have identical performance characteristics",
      "UserResponse(**raw) fails with TypeError if the API response is missing required fields — giving immediate structural validation; accessing user.role gives IDE autocomplete and raises AttributeError on typos unlike dict['role']",
      "Dataclasses automatically validate field types, so user.id = 'string' would raise TypeError",
      "The @dataclass decorator adds JSON serialization — UserResponse can be sent directly back to the API"
    ],
    "answer": 1,
    "explanation": "Unpacking an API response into a typed dataclass gives structural contract checking for free: extra unexpected fields raise TypeError, missing required fields raise TypeError. Attribute access (user.role) is typo-safe compared to dict key access. For full type coercion and validation, use Pydantic's BaseModel instead."
  },
  {
    "id": "pyqa24",
    "category": "python-for-qa",
    "question": "What is this pattern used for in test data setup?\n\n```python\nimport factory\nfrom factory.django import DjangoModelFactory\n\nclass UserFactory(DjangoModelFactory):\n    class Meta:\n        model = User\n    email = factory.LazyFunction(lambda: f'{uuid.uuid4()}@test.com')\n    role = 'viewer'\n    is_active = True\n```",
    "options": [
      "DjangoModelFactory is a read-only fixture that fetches users from the database",
      "factory_boy's DjangoModelFactory creates and persists model instances with sensible defaults; LazyFunction generates a unique email per instance — preventing unique-constraint failures when many users are created across tests",
      "factory.LazyFunction runs only once and caches the result for all factory calls",
      "UserFactory.create() returns a dict, not a Django model instance"
    ],
    "answer": 1,
    "explanation": "factory_boy is the standard Python test data factory library. LazyFunction/LazyAttribute are evaluated fresh on every factory call. UserFactory.create() saves to the DB; UserFactory.build() creates without saving. Override defaults: UserFactory(role='admin'). Subfactories handle relations: factory.SubFactory(TeamFactory)."
  },
  {
    "id": "pyqa25",
    "category": "python-for-qa",
    "question": "What does the `@pytest.mark.skip` vs `@pytest.mark.skipif` difference matter for CI?\n\n```python\n@pytest.mark.skip(reason='manually disabled')\ndef test_payment_flow():\n    ...\n\n@pytest.mark.skipif(os.getenv('ENV') != 'staging', reason='only on staging')\ndef test_stripe_webhook():\n    ...\n```",
    "options": [
      "Both are identical — skip and skipif behave the same way",
      "skip unconditionally skips regardless of environment — risky in CI if forgotten; skipif evaluates a condition at collection time so test_stripe_webhook automatically runs on staging and skips elsewhere — conditional skip is the safer pattern",
      "skipif only accepts boolean literals, not environment variable checks",
      "Tests marked with skip are excluded from coverage reports; skipif tests are still counted"
    ],
    "answer": 1,
    "explanation": "Unconditional skip is a code smell — it often signals a test was disabled temporarily and never re-enabled. skipif ties the skip to a condition that resolves automatically. Common patterns: skip on Windows (sys.platform), skip without API key (not os.getenv('API_KEY')), skip on CI (os.getenv('CI')). Use skip only as a truly temporary measure with a ticket reference in reason=."
  },
  {
    "id": "pyqa26",
    "category": "python-for-qa",
    "question": "What does this `patch.object` technique test about dependency injection?\n\n```python\nfrom unittest.mock import patch, PropertyMock\n\ndef test_feature_flag_disabled():\n    with patch.object(FeatureFlags, 'new_checkout', new_callable=PropertyMock, return_value=False):\n        response = client.post('/checkout', json=order)\n        assert response.status_code == 200\n        assert 'legacy' in response.json()['flow']\n```",
    "options": [
      "patch.object replaces the FeatureFlags class itself with a MagicMock",
      "patch.object replaces the new_checkout property on FeatureFlags with a PropertyMock returning False — simulating the feature flag being off without modifying real config files or environment variables",
      "PropertyMock is only needed for static methods, not properties",
      "new_callable=PropertyMock raises an error because properties cannot be mocked"
    ],
    "answer": 1,
    "explanation": "Mocking a @property requires PropertyMock — a regular MagicMock won't intercept property access correctly. patch.object targets the specific attribute on the class (not an instance). This technique lets you test both branches of a feature flag in the same test suite without touching configuration, making it safe for CI across environments."
  },
  {
    "id": "pyqa27",
    "category": "python-for-qa",
    "question": "What is the QA technique demonstrated by this `allure` snippet?\n\n```python\nimport allure\n\n@allure.feature('User Registration')\n@allure.story('Email Validation')\ndef test_duplicate_email_rejected():\n    with allure.step('Create first user'):\n        user1 = create_user('alice@test.com')\n    with allure.step('Attempt duplicate registration'):\n        resp = register('alice@test.com')\n    assert resp.status_code == 409\n```",
    "options": [
      "allure.step() replaces pytest fixtures for setup/teardown",
      "Allure decorators and steps add structured reporting — features and stories map tests to requirements in the Allure report; allure.step() adds named checkpoints visible in the timeline, making failures pinpoint which step failed without reading code",
      "allure.feature creates a test suite that groups tests into a class automatically",
      "with allure.step() catches exceptions and marks the test as a warning instead of failure"
    ],
    "answer": 1,
    "explanation": "Allure is a test reporting framework that layers requirements mapping (feature/story/epic), step visualization, and attachment support onto pytest. Steps collapse verbose test logic into readable named actions in the HTML report. When a step fails, the report shows exactly which step — invaluable for investigating failures in long end-to-end tests."
  },
  {
    "id": "pyqa28",
    "category": "python-for-qa",
    "question": "What does this list comprehension do for test data validation?\n\n```python\ndef test_all_users_have_email(api_client):\n    users = api_client.get('/users').json()\n    missing = [u['id'] for u in users if 'email' not in u or not u['email']]\n    assert missing == [], f'Users missing email: {missing}'\n```",
    "options": [
      "It verifies only the first user has an email field",
      "The comprehension collects IDs of all users that are missing or have an empty email field; the assertion fails with the specific offending IDs — a bulk data quality check in one assertion",
      "missing == [] raises TypeError because you cannot compare lists with ==",
      "The comprehension mutates the users list by removing invalid entries"
    ],
    "answer": 1,
    "explanation": "This pattern — collect violations into a list, assert list is empty — is the idiomatic Python way to do bulk assertions. It reports ALL failures at once (e.g., 'Users missing email: [3, 17, 42]') rather than stopping at the first. Contrast with a loop of individual asserts that stops at the first failure, hiding the scale of the problem."
  },
  {
    "id": "pyqa29",
    "category": "python-for-qa",
    "question": "What does `freezegun` do in this time-sensitive test?\n\n```python\nfrom freezegun import freeze_time\nfrom datetime import datetime\n\n@freeze_time('2024-01-15 10:00:00')\ndef test_session_expiry():\n    session = create_session(ttl_minutes=30)\n    assert session.is_valid()\n    freeze_time.tick(delta=timedelta(minutes=31))\n    assert not session.is_valid()\n```",
    "options": [
      "freeze_time slows down the system clock by a factor of 30 to test TTL faster",
      "freeze_time patches datetime.datetime.now() and related time functions to return the frozen timestamp — making time-dependent logic deterministic and testable without waiting real time",
      "freeze_time is only compatible with the time module, not datetime",
      "tick() advances the real system clock, requiring root privileges"
    ],
    "answer": 1,
    "explanation": "freezegun intercepts datetime.datetime, datetime.date, time.time(), and time.gmtime() returning the frozen value. tick() advances the frozen clock by a delta without affecting real wall time. This makes any TTL, expiry, scheduled job, or time-windowed logic testable instantly. Essential for testing token expiry, cache invalidation, and subscription billing logic."
  },
  {
    "id": "pyqa30",
    "category": "python-for-qa",
    "question": "What is the purpose of this `conftest.py` pattern using `request.addfinalizer`?\n\n```python\n@pytest.fixture\ndef browser(request):\n    driver = webdriver.Chrome()\n    def teardown():\n        driver.quit()\n    request.addfinalizer(teardown)\n    return driver\n```",
    "options": [
      "addfinalizer is deprecated — yield-based fixtures are preferred, but both achieve the same result",
      "addfinalizer registers teardown() to run after the test even if the fixture setup fails partway through — useful when multiple cleanup steps must all run regardless of failures; yield only executes teardown if yield is reached",
      "addfinalizer makes driver.quit() run before the test starts",
      "addfinalizer is required for Selenium fixtures; yield-based fixtures crash WebDriver"
    ],
    "answer": 1,
    "explanation": "Both addfinalizer and yield-based fixtures are valid. The key difference: multiple addfinalizer calls can be registered and all will run (in LIFO order) even if earlier ones raise. With yield, you can only have one teardown block, and if it raises partway through, remaining cleanup is skipped. addfinalizer is useful when tearing down multiple resources independently."
  },
  {
    "id": "pyqa31",
    "category": "python-for-qa",
    "question": "What does this `patch` decorator ordering mean for the test arguments?\n\n```python\n@patch('myapp.services.EmailService.send')\n@patch('myapp.services.SMSService.send')\ndef test_notification(mock_sms, mock_email):\n    notify_user(user_id=1)\n    mock_email.assert_called_once()\n    mock_sms.assert_called_once()\n```",
    "options": [
      "Decorators apply top-to-bottom so mock_email corresponds to EmailService.send",
      "patch decorators apply bottom-to-top, so the innermost (closest to def) patch is the first argument — mock_sms is SMSService.send, mock_email is EmailService.send",
      "The argument order matches the decorator order — mock_sms is EmailService, mock_email is SMSService",
      "The argument names must exactly match the class names for patch to work correctly"
    ],
    "answer": 1,
    "explanation": "Python decorators wrap bottom-to-top. The decorator closest to the function is applied first and its mock becomes the first parameter. So @patch('SMSService.send') → mock_sms (first arg), @patch('EmailService.send') → mock_email (second arg). Getting this backwards is one of the most common mock-related bugs in Python tests."
  },
  {
    "id": "pyqa32",
    "category": "python-for-qa",
    "question": "What does this `pytest-bdd` scenario test?\n\n```python\n# test_login.feature\n# Scenario: Successful login\n#   Given the user 'alice' exists with password 'secret'\n#   When she logs in with correct credentials\n#   Then she is redirected to the dashboard\n\nfrom pytest_bdd import scenario, given, when, then\n\n@scenario('login.feature', 'Successful login')\ndef test_successful_login(): pass\n\n@given(\"the user 'alice' exists with password 'secret'\")\ndef alice_user(db): db.create_user('alice', 'secret')\n```",
    "options": [
      "pytest-bdd compiles the feature file into a Python class with test methods",
      "pytest-bdd maps Gherkin scenarios to Python step functions — the feature file serves as living documentation readable by non-technical stakeholders while the step functions contain the actual test logic",
      "The .feature file is a comment-only file; scenario logic lives entirely in the Python file",
      "pytest-bdd requires Selenium; it cannot test APIs or unit logic"
    ],
    "answer": 1,
    "explanation": "Behavior-Driven Development (BDD) with pytest-bdd bridges business requirements and test code. The .feature files use Gherkin (Given/When/Then) that product managers and QA leads can write and read. Step decorators bind each line to a Python function. Scenarios are parameterizable, reusable across features, and show up in test reports with business-friendly names."
  },
  {
    "id": "pyqa33",
    "category": "python-for-qa",
    "question": "What does this `logging` assertion technique verify?\n\n```python\nimport logging\n\ndef test_error_logged_on_failure(caplog):\n    with caplog.at_level(logging.ERROR, logger='myapp.processor'):\n        process_invalid_record(record={})\n    assert 'invalid record' in caplog.text\n    assert any(r.levelno == logging.ERROR for r in caplog.records)\n```",
    "options": [
      "caplog.text contains the raw bytes of the log file on disk",
      "caplog captures log records emitted during the test; at_level sets the capture threshold; the assertions verify that an ERROR-level log containing 'invalid record' was emitted — testing observability behavior, not just return values",
      "caplog only captures logs from the root logger; logger='myapp.processor' is ignored",
      "caplog.records is a list of strings, not LogRecord objects"
    ],
    "answer": 1,
    "explanation": "pytest's caplog fixture captures Python logging output in-memory. Testing that your code logs correctly is testing observability — critical for production incident response. caplog.records gives full LogRecord objects with levelno, message, exc_info etc. at_level scopes capture to avoid noise from other loggers. Essential for testing error handlers, background workers, and audit trails."
  },
  {
    "id": "pyqa34",
    "category": "python-for-qa",
    "question": "What is the QA technique in this Pydantic-based contract test?\n\n```python\nfrom pydantic import BaseModel, EmailStr\nfrom typing import Optional\n\nclass UserSchema(BaseModel):\n    id: int\n    email: EmailStr\n    name: str\n    role: Optional[str] = None\n\ndef test_user_api_contract():\n    raw = api_client.get('/users/1').json()\n    user = UserSchema(**raw)  # raises ValidationError if contract broken\n    assert user.id > 0\n```",
    "options": [
      "Pydantic only validates types in Python 3.10+; older versions silently coerce",
      "Pydantic's BaseModel performs runtime type coercion and validation — if the API response is missing id, has a malformed email, or returns the wrong types, UserSchema(**raw) raises ValidationError immediately, acting as an API contract test",
      "UserSchema(**raw) creates the model only if all fields match exactly — extra fields cause failure",
      "EmailStr validation requires a DNS lookup to verify the email domain exists"
    ],
    "answer": 1,
    "explanation": "Pydantic is Python's de facto data validation library. Using it in tests as a schema validator turns API responses into strongly-typed objects with automatic contract checking. ValidationError messages are detailed: which field failed, why, and what was received. By default, extra fields are ignored (extra='ignore'); set extra='forbid' to detect undocumented API fields."
  },
  {
    "id": "pyqa35",
    "category": "python-for-qa",
    "question": "What does this `subprocess` test technique validate?\n\n```python\nimport subprocess\n\ndef test_cli_exit_code():\n    result = subprocess.run(\n        ['python', 'cli.py', '--validate', 'bad_input.json'],\n        capture_output=True, text=True\n    )\n    assert result.returncode == 1\n    assert 'validation failed' in result.stderr\n```",
    "options": [
      "subprocess.run blocks indefinitely — a timeout is required to prevent test hangs",
      "It tests the CLI as a black box: verifying the exit code (1 for failure) and that the error message appears on stderr — testing the contract that other scripts or CI pipelines depend on",
      "capture_output=True is only available in Python 3.9+",
      "result.returncode will always be 0 if the process does not raise an exception"
    ],
    "answer": 1,
    "explanation": "subprocess.run() is the right tool for integration-testing CLI tools. Exit codes are process contracts — POSIX tools return 0 for success, non-zero for failure. Verifying stderr messages ensures error output is machine-parseable. Add timeout= to prevent test suite hangs from a hung subprocess. capture_output=True is equivalent to stdout=PIPE, stderr=PIPE."
  },
  {
    "id": "pyqa36",
    "category": "python-for-qa",
    "question": "What does this JSON Schema validation technique provide over simple assertions?\n\n```python\nimport jsonschema\n\nUSER_SCHEMA = {\n    'type': 'object',\n    'required': ['id', 'email'],\n    'properties': {\n        'id': {'type': 'integer', 'minimum': 1},\n        'email': {'type': 'string', 'format': 'email'}\n    },\n    'additionalProperties': False\n}\n\ndef test_user_response_schema():\n    body = api_client.get('/users/1').json()\n    jsonschema.validate(body, USER_SCHEMA)  # raises ValidationError on contract violation\n```",
    "options": [
      "jsonschema.validate only works with OpenAPI 3.0 schemas, not JSON Schema draft 7",
      "JSON Schema validation tests the full structural contract: required fields, types, value constraints, and that no undocumented fields are returned (additionalProperties: false) — far more comprehensive than individual assert statements",
      "additionalProperties: False raises an error during schema definition, not during validation",
      "jsonschema.validate returns True/False — you need to assert on the return value"
    ],
    "answer": 1,
    "explanation": "jsonschema.validate() raises a detailed ValidationError on first failure. additionalProperties: False is a contract enforcement technique — if the API adds an unexpected field, the test catches it, forcing intentional schema updates. Schemas can be loaded from OpenAPI spec files (schemathesis does this automatically). Use ajv-formats for format validators like 'email' and 'date-time'."
  },
  {
    "id": "pyqa37",
    "category": "python-for-qa",
    "question": "What is the issue with this test using a mutable default argument?\n\n```python\ndef make_test_payload(overrides={}):\n    base = {'status': 'active', 'role': 'user'}\n    base.update(overrides)\n    return base\n\n# Test 1\npayload1 = make_test_payload({'role': 'admin'})\n# Test 2\npayload2 = make_test_payload()\n```",
    "options": [
      "No issue — overrides={} creates a fresh dict for each call",
      "The default {} is created once at function definition time and shared across all calls — but since base is a new dict created inside the function and overrides is only read (not mutated), this specific code is actually safe; the real danger is mutating the default directly",
      "base.update(overrides) mutates overrides, corrupting the default dict for subsequent calls — use overrides=None and set overrides = {} inside the function body",
      "dict.update() raises TypeError when overrides is an empty dict"
    ],
    "answer": 2,
    "explanation": "The mutable default argument {} is Python's most notorious gotcha. In this code, base.update(overrides) reads from overrides but doesn't mutate it — so this specific function is actually safe. However, the canonical safe pattern is: def make_test_payload(overrides=None): overrides = overrides or {}. This prevents bugs if someone later adds code that mutates overrides directly."
  },
  {
    "id": "pyqa38",
    "category": "python-for-qa",
    "question": "What does this `@pytest.fixture(params=[...])` pattern do?\n\n```python\n@pytest.fixture(params=['chrome', 'firefox', 'safari'])\ndef browser(request):\n    driver = get_driver(request.param)\n    yield driver\n    driver.quit()\n\ndef test_login_form(browser):\n    browser.get(LOGIN_URL)\n    assert browser.find_element(By.ID, 'submit').is_displayed()\n```",
    "options": [
      "browser fixture creates all three drivers simultaneously and the test runs once",
      "pytest automatically runs test_login_form three times — once with each browser driver — multiplying test coverage across browsers without duplicating test logic",
      "params= only works with string values; objects require indirect parametrize",
      "request.param inside a fixture only returns the first parameter value"
    ],
    "answer": 1,
    "explanation": "Fixture parametrization multiplies every test that uses the fixture. With 3 browser params and 10 tests, you get 30 test nodes. Combined with pytest-xdist, these run in parallel across workers. This is the standard pattern for cross-browser test matrices. The test IDs become test_login_form[chrome], test_login_form[firefox], test_login_form[safari]."
  },
  {
    "id": "pyqa39",
    "category": "python-for-qa",
    "question": "What does this `assert_called_with` vs `assert_called_once_with` difference catch?\n\n```python\nmock_db.save.assert_called_with(user)       # passes if LAST call had user\nmock_db.save.assert_called_once_with(user)  # passes only if called exactly once with user\n```",
    "options": [
      "Both methods are identical aliases",
      "assert_called_with only checks the arguments of the most recent call — it passes even if save() was called 10 times with different args; assert_called_once_with additionally asserts the mock was called exactly once, catching unexpected duplicate saves",
      "assert_called_once_with raises if the mock was called with keyword arguments",
      "assert_called_with fails if the mock was never called; assert_called_once_with passes if the mock was never called"
    ],
    "answer": 1,
    "explanation": "assert_called_with() only validates the LAST call's arguments — if save() was called 5 times, it passes as long as the last call matched. assert_called_once_with() combines call count and argument validation. For most business logic tests, you want assert_called_once_with to catch extra unintended saves. Use assert_has_calls() to verify a specific sequence of calls."
  },
  {
    "id": "pyqa40",
    "category": "python-for-qa",
    "question": "What does this `tmpdir` vs `tmp_path` fixture choice mean?\n\n```python\n# Old style\ndef test_write_report_old(tmpdir):\n    report_file = tmpdir.join('report.csv')\n    write_report(str(report_file))\n    assert report_file.read() != ''\n\n# New style\ndef test_write_report_new(tmp_path):\n    report_file = tmp_path / 'report.csv'\n    write_report(str(report_file))\n    assert report_file.stat().st_size > 0\n```",
    "options": [
      "tmpdir is faster; tmp_path uses more memory for large files",
      "tmpdir returns a py.path.local object (from the older py library); tmp_path returns a pathlib.Path object — the modern Python standard; prefer tmp_path for new tests as it integrates naturally with pathlib operations like / for joining paths",
      "tmp_path persists after the test; tmpdir is automatically cleaned up",
      "Both fixtures share the same temporary directory between tests"
    ],
    "answer": 1,
    "explanation": "tmp_path is the pytest 3.9+ recommended fixture. It returns a pathlib.Path, enabling the / operator for path construction and all pathlib methods (.read_text(), .write_bytes(), .glob(), etc.). Both are scoped per-test and cleaned up automatically (keeping the last 3 runs for debugging). Use tmp_path for all new tests."
  },
  {
    "id": "pyqa41",
    "category": "python-for-qa",
    "question": "What does this `deepdiff` technique provide for API response comparison?\n\n```python\nfrom deepdiff import DeepDiff\n\ndef test_user_update_only_changes_name():\n    before = api.get('/users/1').json()\n    api.patch('/users/1', json={'name': 'New Name'})\n    after = api.get('/users/1').json()\n    diff = DeepDiff(before, after)\n    assert diff == {'values_changed': {\"root['name']\": {\n        'new_value': 'New Name', 'old_value': 'Alice'\n    }}}\n```",
    "options": [
      "DeepDiff only works on flat dicts; nested objects require a custom comparator",
      "DeepDiff produces a structured diff of two objects — the assertion verifies that ONLY the name field changed, catching unintended mutations to other fields like updated_at, role, or email",
      "DeepDiff == {} always passes when both dicts have the same keys",
      "The assertion will fail because DeepDiff returns a string, not a dict"
    ],
    "answer": 1,
    "explanation": "DeepDiff is essential for testing partial updates (PATCH endpoints). Rather than asserting individual fields, you assert the exact diff — proving that only intended fields changed. This catches side-effect bugs where a PATCH to name accidentally resets role to a default. DeepDiff handles nested objects, lists, type changes, and can ignore specific paths with exclude_paths."
  },
  {
    "id": "pyqa42",
    "category": "python-for-qa",
    "question": "What does this `pytest-timeout` decorator do for flaky network tests?\n\n```python\n@pytest.mark.timeout(5)\ndef test_external_api_response_time():\n    resp = requests.get('https://internal-api/health')\n    assert resp.status_code == 200\n```",
    "options": [
      "The test logs a warning if it takes more than 5 seconds but still passes",
      "The test is killed and marked as FAILED with a timeout error if it runs longer than 5 seconds — preventing one hung test from blocking the entire test suite",
      "timeout=5 sets a 5-second retry window before the request is abandoned",
      "pytest-timeout only works in combination with pytest-xdist parallel execution"
    ],
    "answer": 1,
    "explanation": "Without timeouts, a test waiting on a hung socket can block the CI pipeline indefinitely. @pytest.mark.timeout(N) kills the test after N seconds via thread or signal (configurable). Set a global timeout in pytest.ini: timeout = 30. Also set timeout on the requests call itself: requests.get(url, timeout=5) for defense in depth — both the HTTP call and the test should have limits."
  },
  {
    "id": "pyqa43",
    "category": "python-for-qa",
    "question": "What does this generator-based test data technique accomplish?\n\n```python\ndef generate_boundary_ids():\n    yield 0          # zero/null boundary\n    yield 1          # minimum valid\n    yield 2**31 - 1  # max int32\n    yield 2**31      # overflow int32\n    yield -1         # negative\n\n@pytest.mark.parametrize('user_id', generate_boundary_ids())\ndef test_user_lookup_handles_boundaries(user_id):\n    resp = api.get(f'/users/{user_id}')\n    assert resp.status_code in (200, 404)  # not 500\n```",
    "options": [
      "The generator runs only until the first yield; subsequent values are lost",
      "Boundary value analysis in code: the generator yields edge cases systematically; the test verifies no 500 errors at any boundary — a clean way to encode equivalence partitioning without a long hardcoded list",
      "parametrize requires lists; generators raise TypeError at collection time",
      "yield inside parametrize causes the test to run asynchronously"
    ],
    "answer": 1,
    "explanation": "pytest.mark.parametrize accepts any iterable — including generators. This pattern encodes boundary value analysis: zero, min valid, max int32, overflow, negative. The generator can be reused across multiple test functions. The assertion is defensive: we accept 200 or 404 but not 500, testing robustness rather than correctness at each boundary."
  },
  {
    "id": "pyqa44",
    "category": "python-for-qa",
    "question": "What does `coverage.py` measure and how is branch coverage different from line coverage?\n\n```bash\npytest --cov=myapp --cov-report=html --cov-branch\n```",
    "options": [
      "coverage.py only measures which files were imported during tests",
      "Line coverage tracks which lines executed; branch coverage additionally tracks which conditional branches were taken — e.g., whether both if and else paths were exercised — giving a more accurate picture of untested logic",
      "--cov-branch measures the number of function calls per line",
      "Branch coverage is always 100% if line coverage is 100%"
    ],
    "answer": 1,
    "explanation": "Line coverage can reach 100% while leaving branches untested. Example: if x > 0: return 1 — if tests only ever pass positive x, the line is covered but the implicit else (returning None) is never exercised. Branch coverage finds this gap. The HTML report highlights uncovered branches in yellow. Use # pragma: no cover for intentionally excluded lines."
  },
  {
    "id": "pyqa45",
    "category": "python-for-qa",
    "question": "What does this `@dataclass` with `__post_init__` provide for test data?\n\n```python\nfrom dataclasses import dataclass, field\nfrom datetime import datetime\n\n@dataclass\nclass TestOrder:\n    product_id: int\n    quantity: int\n    created_at: datetime = field(default_factory=datetime.utcnow)\n    \n    def __post_init__(self):\n        if self.quantity <= 0:\n            raise ValueError(f'quantity must be positive, got {self.quantity}')\n```",
    "options": [
      "__post_init__ runs after pickling, not after instance creation",
      "__post_init__ runs after __init__ enabling validation — creating TestOrder(product_id=1, quantity=-1) raises ValueError immediately, catching invalid test data before the test even runs; default_factory ensures created_at is unique per instance",
      "field(default_factory=...) is only needed for mutable defaults like lists — datetime is immutable so it could be written as created_at: datetime = datetime.utcnow()",
      "__post_init__ cannot raise exceptions — it must set attributes or return None"
    ],
    "answer": 1,
    "explanation": "Default mutable arguments in dataclasses must use field(default_factory=...) — but datetime.utcnow is also a function call, so default_factory is needed to ensure each instance gets its own timestamp (not a shared one from class definition time). __post_init__ is the correct hook for validation. Without it, invalid test data silently propagates to the test, making failures harder to diagnose."
  },
  {
    "id": "pyqa46",
    "category": "python-for-qa",
    "question": "What does this `monkeypatch` fixture do differently from `patch`?\n\n```python\ndef test_env_based_config(monkeypatch):\n    monkeypatch.setenv('PAYMENT_API_KEY', 'test_key_abc')\n    monkeypatch.setattr('myapp.config.TIMEOUT', 1)\n    result = charge_customer(amount=50)\n    assert result['status'] == 'success'\n```",
    "options": [
      "monkeypatch.setenv persists the environment variable permanently after the test",
      "monkeypatch is a pytest fixture that patches environment variables and object attributes for the duration of the test, then automatically reverts all changes — no context manager or decorator needed; cleaner syntax than unittest.mock.patch for simple attribute overrides",
      "monkeypatch.setattr works identically to os.environ['KEY'] = value",
      "monkeypatch cannot patch module-level constants — only class attributes"
    ],
    "answer": 1,
    "explanation": "monkeypatch is pytest's built-in patching fixture. All changes are automatically undone after the test (no teardown code needed). Key methods: setenv/delenv for OS env vars, setattr/delattr for object attributes, setitem/delitem for dicts, chdir for current directory. It's scoped to the test function by default. More concise than unittest.mock.patch for simple substitutions."
  },
  {
    "id": "pyqa47",
    "category": "python-for-qa",
    "question": "What is the purpose of `pytest-recording` / VCR cassettes in API testing?\n\n```python\nimport pytest\n\n@pytest.mark.vcr()\ndef test_github_api_rate_limit():\n    resp = requests.get('https://api.github.com/rate_limit',\n                        headers={'Authorization': 'token TEST'})\n    assert resp.json()['rate']['limit'] == 60\n```",
    "options": [
      "VCR makes a live API call on every test run and asserts on real data",
      "VCR records real HTTP interactions to a YAML cassette file on first run; subsequent runs replay from the cassette — tests run offline, fast, and deterministically without real API credentials",
      "@pytest.mark.vcr() automatically generates mock data using Faker",
      "VCR cassettes store only request headers, not response bodies"
    ],
    "answer": 1,
    "explanation": "VCR (Video Cassette Recorder) is the HTTP record-and-replay testing pattern. Libraries: vcrpy, pytest-recording (wraps vcrpy). The cassette YAML file is committed to the repo. When the real API changes, you re-record by deleting the cassette and running with network access. Cassettes should be scrubbed of real credentials using filter_headers/filter_query_parameters."
  },
  {
    "id": "pyqa48",
    "category": "python-for-qa",
    "question": "What does this `csv.DictReader` pattern enable for data-driven QA?\n\n```python\nimport csv\nimport pytest\n\ndef load_test_cases(filepath):\n    with open(filepath) as f:\n        return list(csv.DictReader(f))\n\n@pytest.mark.parametrize('case', load_test_cases('tests/data/login_cases.csv'))\ndef test_login_scenarios(case, client):\n    resp = client.post('/login', json={'user': case['username'], 'pass': case['password']})\n    assert str(resp.status_code) == case['expected_status']\n```",
    "options": [
      "load_test_cases() must be called inside the test function to avoid file-not-found errors at collection time",
      "CSV rows become test cases — non-technical QA engineers can add test scenarios by editing the spreadsheet without touching Python code; each row gets its own test node ID in the report",
      "csv.DictReader requires column names to exactly match function parameter names",
      "parametrize cannot accept a list of dicts — it requires lists of tuples"
    ],
    "answer": 1,
    "explanation": "Externalizing test data to CSV enables collaboration: product managers and manual QA testers can maintain test cases in Excel/Google Sheets and export as CSV. The Python test framework picks them up automatically. Variants: Excel (openpyxl), YAML, JSON. Note that load_test_cases() runs at collection time — file path must be relative to the pytest rootdir, not the test file."
  },
  {
    "id": "pyqa49",
    "category": "python-for-qa",
    "question": "What does the `--lf` (last failed) flag do for debugging test suites?\n\n```bash\npytest --lf --tb=short\n```",
    "options": [
      "--lf loads test fixtures from a local file cache for faster startup",
      "--lf (last failed) re-runs only the tests that failed in the previous run, skipping passing tests — dramatically speeds up the red-green-refactor cycle when fixing failures",
      "--lf fails with an error if no previous test run data exists",
      "--lf deselects all passing tests permanently from the suite"
    ],
    "answer": 1,
    "explanation": "pytest stores last-run results in .pytest_cache/. --lf re-runs only failures; --ff (failed first) runs failures first then the rest. Combined with --tb=short for concise tracebacks, this is the standard debug workflow: fix a failure, run pytest --lf to verify the fix, then run the full suite. -x (exit on first failure) is another common pairing."
  },
  {
    "id": "pyqa50",
    "category": "python-for-qa",
    "question": "What does this `socket` monkeypatch do for offline tests?\n\n```python\nimport pytest\nimport socket\n\n@pytest.fixture(autouse=True)\ndef no_network(monkeypatch):\n    def guard(*args, **kwargs):\n        raise RuntimeError('Real network access forbidden in unit tests')\n    monkeypatch.setattr(socket, 'socket', guard)\n```",
    "options": [
      "Blocks only TCP connections; UDP sockets are still allowed",
      "Any test that tries to open a real network socket will raise RuntimeError immediately — enforcing that unit tests are truly isolated and cannot accidentally make real HTTP/DB calls that slow the suite or depend on external services",
      "monkeypatch.setattr on socket.socket only affects the test that declares the fixture",
      "autouse=True on this fixture means it runs once per session, not per test"
    ],
    "answer": 1,
    "explanation": "Patching socket.socket at the lowest level blocks all network I/O regardless of what HTTP library is used (requests, httpx, aiohttp all eventually call socket). This is stricter than mocking individual libraries and catches accidental network calls in third-party code. Put this fixture in conftest.py with autouse=True for true unit test isolation. pytest-socket provides this as a plugin with --disable-socket."
  },
  {
    "id": "pyqa51",
    "category": "python-for-qa",
    "question": "What does this `re` pattern verify in an API test?\n\n```python\nimport re\n\ndef test_user_id_format():\n    body = api.post('/users', json={'name': 'Bob'}).json()\n    assert re.fullmatch(r'usr_[a-z0-9]{12}', body['id']), \\\n        f\"id format wrong: {body['id']}\"\n```",
    "options": [
      "re.fullmatch checks if 'usr_' appears anywhere in the string",
      "re.fullmatch asserts the entire id string matches the pattern exactly: prefix 'usr_' followed by exactly 12 lowercase alphanumeric characters — catching format regressions if the ID generator changes",
      "re.fullmatch returns True/False, but assert requires it to return a non-empty string",
      "The pattern [a-z0-9]{12} also matches uppercase letters"
    ],
    "answer": 1,
    "explanation": "re.fullmatch() requires the entire string to match (unlike re.search which finds a substring). Asserting ID format is contract testing — if the backend changes the ID scheme (e.g., switching from usr_abc123 to numeric IDs), this test catches the breaking change before dependent systems fail. The custom message shows the actual bad value on failure."
  },
  {
    "id": "pyqa52",
    "category": "python-for-qa",
    "question": "What is the risk in this test that reuses a fixture object across assertions?\n\n```python\n@pytest.fixture\ndef session_token():\n    return auth.login('test_user', 'password')\n\ndef test_profile_access(session_token):\n    profile = api.get('/profile', headers={'X-Token': session_token})\n    assert profile.status_code == 200\n    \n    # Revoke the token\n    api.post('/logout', headers={'X-Token': session_token})\n    \n    profile2 = api.get('/profile', headers={'X-Token': session_token})\n    assert profile2.status_code == 401\n```",
    "options": [
      "No risk — testing multiple states in one test is always more efficient",
      "If the first assertion fails, the revoke and 401 check never run — the test conflates two independent scenarios (authenticated access and post-revocation rejection) that should be separate tests for clear failure attribution",
      "session_token fixture must use yield to work with multiple API calls",
      "api.post('/logout') changes the session_token variable to None"
    ],
    "answer": 1,
    "explanation": "Multi-assertion tests with state changes violate single responsibility. If the first assert fails, you don't know if logout revocation works. If the second assert fails, you don't know if basic auth works. Split into test_authenticated_access and test_token_revoked_returns_401. Each test should test one behavior so failures have unambiguous meaning."
  },
  {
    "id": "pyqa53",
    "category": "python-for-qa",
    "question": "What does `pytest-xdist` enable and what fixture scope constraint does it add?\n\n```bash\npytest -n 4  # run with 4 parallel workers\n```",
    "options": [
      "pytest-xdist runs tests on 4 remote machines via SSH",
      "pytest-xdist distributes tests across 4 worker processes for parallel execution; session-scoped fixtures are re-created per worker (not shared across workers) — so expensive session fixtures like DB setup must be worker-aware or use scope='session' with --dist=loadscope",
      "-n 4 always uses exactly 4 CPU cores regardless of the machine's CPU count",
      "session-scoped fixtures are fully shared across all xdist workers automatically"
    ],
    "answer": 1,
    "explanation": "xdist spawns N separate processes — session scope means once per worker, not once for all workers. Use -n auto to use all CPU cores. For DB tests, either: isolate each worker with a separate schema, use transactions that rollback, or use --dist=loadscope to keep all tests of a module on one worker. Tests must be independently runnable (no cross-test dependencies)."
  },
  {
    "id": "pyqa54",
    "category": "python-for-qa",
    "question": "What does this `responses.CallbackResponse` pattern simulate?\n\n```python\nimport responses\n\ndef flaky_callback(request):\n    flaky_callback.count = getattr(flaky_callback, 'count', 0) + 1\n    if flaky_callback.count < 3:\n        return (503, {}, 'Service Unavailable')\n    return (200, {}, json.dumps({'data': 'ok'}))\n\n@responses.activate\ndef test_retry_on_503(flaky_callback):\n    responses.add_callback(responses.GET, 'http://api/data', callback=flaky_callback)\n    result = fetch_with_retry('http://api/data', max_retries=3)\n    assert result == {'data': 'ok'}\n```",
    "options": [
      "CallbackResponse replaces the real HTTP server with a Python WSGI app",
      "The callback function returns different responses on successive calls — simulating a flaky service that fails twice before succeeding; the test verifies fetch_with_retry handles transient 503s and eventually returns the successful response",
      "responses.add_callback requires a real function — lambdas are not supported",
      "The callback only fires on the first request; subsequent requests get the default 200"
    ],
    "answer": 1,
    "explanation": "add_callback gives full dynamic control over mock responses. The stateful counter simulates a flaky upstream that recovers after N failures. This tests retry logic more realistically than side_effect lists on mocks. Function-level state (flaky_callback.count) is a simple way to add statefulness to a callback without external state."
  },
  {
    "id": "pyqa55",
    "category": "python-for-qa",
    "question": "What does this `@property` mock pattern test about read-only attributes?\n\n```python\nclass Config:\n    @property\n    def max_retries(self):\n        return int(os.environ.get('MAX_RETRIES', 3))\n\ndef test_high_retry_count(mocker):\n    mocker.patch.object(Config, 'max_retries',\n                        new_callable=mocker.PropertyMock,\n                        return_value=10)\n    result = run_with_config(Config())\n    assert result.attempt_count <= 10\n```",
    "options": [
      "mocker.patch.object on a property raises AttributeError — properties cannot be mocked",
      "PropertyMock is required to mock @property attributes; without it, patch.object would replace the property descriptor with a MagicMock object rather than intercepting attribute access, returning the mock itself instead of 10",
      "return_value=10 sets the default retry count permanently in all subsequent tests",
      "This test modifies os.environ to set MAX_RETRIES=10"
    ],
    "answer": 1,
    "explanation": "Regular MagicMock replaces the property descriptor object on the class — accessing instance.max_retries then returns a MagicMock, not 10. PropertyMock wraps the descriptor correctly so property access returns return_value. This is a very common pytest-mock gotcha. new_callable=PropertyMock means 'use PropertyMock as the mock class instead of MagicMock'."
  },
  {
    "id": "pyqa56",
    "category": "python-for-qa",
    "question": "What does this `io.StringIO` trick enable for testing file-writing code?\n\n```python\nimport io\nfrom unittest.mock import patch, mock_open\n\ndef test_export_csv_content():\n    with patch('builtins.open', mock_open()) as m:\n        export_users_to_csv([{'name': 'Alice', 'age': 30}])\n    handle = m()\n    written = ''.join(call.args[0] for call in handle.write.call_args_list)\n    assert 'Alice' in written\n    assert 'age' in written\n```",
    "options": [
      "mock_open creates a real temp file and captures its contents",
      "mock_open patches builtins.open with a MagicMock that supports file-like operations; write() calls are recorded and can be reconstructed from call_args_list to verify CSV content without touching the real filesystem",
      "mock_open() only works with binary mode opens (mode='rb')",
      "handle.write.call_args_list contains the file path, not the written content"
    ],
    "answer": 1,
    "explanation": "mock_open is the standard way to test file I/O without temp files. It supports read_data= for simulating file reads. For writes, you reconstruct content by joining the args of each write() call. Alternatively, using io.StringIO directly (and injecting it instead of patching open) is a cleaner design that avoids this reconstruction step."
  },
  {
    "id": "pyqa57",
    "category": "python-for-qa",
    "question": "What does `pytest-randomly` do to improve test suite quality?\n\n```bash\npytest --randomly-seed=12345\n```",
    "options": [
      "It randomly selects a subset of tests to run for faster CI",
      "It randomizes test execution order, detecting hidden order dependencies (test A only passes if test B ran first) — a fixed seed allows reproducing a specific order when debugging a discovered dependency",
      "--randomly-seed sets the Python random number generator seed for Faker and Hypothesis",
      "Random ordering requires each test to have a unique priority mark"
    ],
    "answer": 1,
    "explanation": "Tests should be order-independent. pytest-randomly shuffles test order each run, surfacing hidden dependencies where test setup bleeds state into later tests. When an order-dependent failure is found, --randomly-seed=N reproduces the exact order. Once fixed, the test suite is more robust. pytest-randomly also randomizes the order within parametrize sets."
  },
  {
    "id": "pyqa58",
    "category": "python-for-qa",
    "question": "What does this `assert_any_call` method verify?\n\n```python\ndef test_notification_sent_to_all_admins(mock_notifier):\n    send_critical_alert('Server down')\n    mock_notifier.send.assert_any_call(recipient='admin1@co.com', message='Server down')\n    mock_notifier.send.assert_any_call(recipient='admin2@co.com', message='Server down')\n```",
    "options": [
      "assert_any_call verifies the mock was called exactly once with those arguments",
      "assert_any_call checks that at least one call among ALL calls to the mock used those arguments — it passes even if send() was called 10 times, as long as the specified call appears at least once",
      "assert_any_call and assert_called_with are identical",
      "Each assert_any_call call resets the mock's call list"
    ],
    "answer": 1,
    "explanation": "assert_any_call is for multi-call scenarios where you verify specific calls occurred among many. Here, send() is called once per admin — we verify each admin was notified without caring about order. Contrast: assert_called_with checks the last call, assert_called_once_with enforces exactly one call, assert_has_calls checks a sequence (optionally ordered)."
  },
  {
    "id": "pyqa59",
    "category": "python-for-qa",
    "question": "What does the `--durations` flag reveal about test performance?\n\n```bash\npytest --durations=10\n```",
    "options": [
      "It shows the 10 fastest tests to identify well-optimized code",
      "It prints the 10 slowest test setup/call/teardown phases at the end of the run — identifying bottlenecks like slow fixtures, unnecessary sleep() calls, or tests that make real network calls",
      "--durations counts assertion operations per test",
      "It enables profiling mode that instruments every function call"
    ],
    "answer": 1,
    "explanation": "Slow tests kill developer productivity. --durations=0 shows ALL tests sorted by duration. The output separates setup, call, and teardown phases — so you can see whether the slow part is fixture initialization or the test itself. Common culprits: real network calls, real DB queries without proper mocking, time.sleep() calls, and session-scoped fixtures running per-test due to scope misconfiguration."
  },
  {
    "id": "pyqa60",
    "category": "python-for-qa",
    "question": "What does this `Locust` task class test?\n\n```python\nfrom locust import HttpUser, task, between\n\nclass APILoadTest(HttpUser):\n    wait_time = between(1, 3)\n\n    @task(3)\n    def get_products(self):\n        self.client.get('/api/products')\n\n    @task(1)\n    def create_order(self):\n        self.client.post('/api/orders', json={'product_id': 1, 'qty': 2})\n```",
    "options": [
      "Both tasks run an equal number of times; the task weight is ignored",
      "@task(3) means get_products is 3× more likely to be chosen than create_order (weight 1) in each iteration — simulating realistic traffic where reads outnumber writes, which is typical production behavior",
      "wait_time = between(1, 3) means each user runs for exactly 2 seconds",
      "Locust tasks must be async functions to run concurrently"
    ],
    "answer": 1,
    "explanation": "Locust task weights define the relative probability of selection. A 3:1 ratio for reads vs writes reflects real-world API traffic patterns. wait_time between(min, max) adds a random delay between tasks per user, simulating human think time. Locust uses gevent greenlets (not threads) for concurrency — thousands of virtual users on a single machine."
  },
  {
    "id": "pyqa61",
    "category": "python-for-qa",
    "question": "What is the difference between `assert x in response` and `assert response == x` in API tests?",
    "options": [
      "They are equivalent — Python's == operator calls __contains__ for membership testing",
      "'in' tests containment (substring, list membership, dict key existence) and is order-insensitive for collections; == tests exact equality including order and all fields — use 'in' to verify a partial match, '==' to assert the complete response matches exactly",
      "'in' only works with strings; for dicts use == or .get()",
      "response == x raises TypeError for HTTP response objects"
    ],
    "answer": 1,
    "explanation": "Choose assertion strictness intentionally. assert {'id': 1} in users_list checks list membership. assert 'error' in resp.text checks substring. assert resp.json() == expected_dict checks exact equality — fails if the API adds a new field. For API contract testing, asserting specific keys rather than full equality is more resilient to non-breaking API changes."
  },
  {
    "id": "pyqa62",
    "category": "python-for-qa",
    "question": "What does this `__enter__` / `__exit__` pattern enable for test cleanup?\n\n```python\nclass ManagedBrowser:\n    def __enter__(self):\n        self.driver = webdriver.Chrome()\n        return self.driver\n    def __exit__(self, exc_type, exc_val, exc_tb):\n        self.driver.quit()\n        return False  # re-raise exceptions\n\ndef test_home_page():\n    with ManagedBrowser() as driver:\n        driver.get('http://localhost:3000')\n        assert 'Home' in driver.title\n```",
    "options": [
      "return False in __exit__ suppresses the exception so the test always passes",
      "__exit__ is called even if the test fails or raises — driver.quit() always runs; return False means exceptions propagate normally (not suppressed), so test failures still surface",
      "__enter__ must return self, not self.driver",
      "The with block requires the fixture to be declared in the test function signature"
    ],
    "answer": 1,
    "explanation": "Context managers guarantee cleanup via __exit__ regardless of exceptions. return False (or None) lets exceptions propagate; return True suppresses them. For test infrastructure, never suppress exceptions — the test should still fail. This pattern is equivalent to a try/finally block. pytest fixtures with yield are the preferred abstraction over manual context managers in test code."
  },
  {
    "id": "pyqa63",
    "category": "python-for-qa",
    "question": "What does `pytest.ini` `markers` configuration prevent?\n\n```ini\n[pytest]\nmarkers =\n    smoke: fast critical path tests\n    regression: full regression suite\n    integration: requires external services\n```",
    "options": [
      "Nothing — markers work without being registered in pytest.ini",
      "Registering markers prevents PytestUnknownMarkWarning and documents the marker's meaning; unregistered markers still work but produce warnings that can be treated as errors with --strict-markers in CI",
      "pytest.ini markers automatically apply the marks to all tests in the file",
      "Only registered markers can be used with -m flag for test selection"
    ],
    "answer": 1,
    "explanation": "Unregistered markers produce PytestUnknownMarkWarning (just a warning, not an error) — typos like @pytest.mark.smok instead of smoke silently create a new mark that selects no tests. Add --strict-markers to CI flags to turn warnings into errors. This catches marker typos in PRs before they result in empty test runs with no failures."
  },
  {
    "id": "pyqa64",
    "category": "python-for-qa",
    "question": "What does this `responses.assert_all_requests_are_fired` option enforce?\n\n```python\n@responses.activate\ndef test_checkout_calls_payment_and_inventory():\n    responses.add(responses.POST, 'http://payment-svc/charge', json={'charged': True})\n    responses.add(responses.PUT, 'http://inventory-svc/reserve', json={'reserved': True})\n    checkout(order_id=1)\n```",
    "options": [
      "Without assert_all_requests_are_fired=True, if checkout() only calls payment but never calls inventory, the test still passes — a silent coverage gap in integration logic",
      "responses automatically fails if any registered mock is not called",
      "assert_all_requests_are_fired causes a ConnectionError for uncalled mocks",
      "The option only applies to DELETE requests, not POST or PUT"
    ],
    "answer": 0,
    "explanation": "By default, responses registered but never called are silently ignored — the test passes even if checkout() forgot to call the inventory service. Set responses.assert_all_requests_are_fired = True (or pass it as a parameter) to enforce that every registered mock was called. This turns your stub registrations into both stubs AND expectations — a powerful integration contract check."
  },
  {
    "id": "pyqa65",
    "category": "python-for-qa",
    "question": "What does this type-annotated test helper provide over a plain function?\n\n```python\nfrom typing import TypedDict\n\nclass LoginResponse(TypedDict):\n    token: str\n    expires_in: int\n    user_id: int\n\ndef login_as_admin() -> LoginResponse:\n    resp = api.post('/auth', json={'user': 'admin', 'pass': 'secret'})\n    return resp.json()\n```",
    "options": [
      "TypedDict enforces types at runtime — accessing token when it's missing raises KeyError",
      "TypedDict is a static type hint only — mypy/pyright can verify that callers use the returned dict correctly (e.g., body['tokn'] raises a static type error for the typo), improving test helper maintainability without runtime overhead",
      "Return type annotations in test helpers are illegal — pytest strips them at collection",
      "TypedDict requires all keys to be present at construction time"
    ],
    "answer": 1,
    "explanation": "TypedDict documents the expected shape of the returned dict and enables static analysis. mypy will flag body['tokn'] as a TypedDict access error. This makes test helper functions self-documenting and catches typos before runtime. For stronger runtime validation, use Pydantic. For test helpers called frequently across a large suite, type hints significantly reduce debugging time."
  },
  {
    "id": "pyqa66",
    "category": "python-for-qa",
    "question": "What does this `tox.ini` configuration accomplish for a QA project?\n\n```ini\n[tox]\nenvlist = py310, py311, py312, lint\n\n[testenv]\ndeps = pytest pytest-cov\ncommands = pytest --cov=myapp tests/\n\n[testenv:lint]\ndeps = flake8 mypy\ncommands =\n    flake8 myapp/\n    mypy myapp/\n```",
    "options": [
      "tox runs all environments sequentially in a single Python interpreter",
      "tox creates isolated virtual environments for each Python version and for linting — tests run against py310, py311, and py312 in isolation, catching version-specific breakage; lint environment runs type checking and style checks separately",
      "tox only installs dependencies listed in requirements.txt, not the deps= key",
      "envlist = py310,py311,py312 requires those Python versions to be installed globally as python3.10 etc."
    ],
    "answer": 1,
    "explanation": "tox is the standard Python multi-environment test runner. Each envlist entry gets its own isolated virtualenv. This catches Python version compatibility bugs (e.g., walrus operator not available in 3.7) and ensures your test suite doesn't depend on globally installed packages. CI typically runs tox to validate all environments in parallel."
  },
  {
    "id": "pyqa67",
    "category": "python-for-qa",
    "question": "What does this `@pytest.mark.usefixtures` decorator achieve?\n\n```python\n@pytest.mark.usefixtures('reset_cache', 'seed_db')\nclass TestCheckoutFlow:\n    def test_add_to_cart(self, client):\n        ...\n    def test_apply_coupon(self, client):\n        ...\n    def test_complete_purchase(self, client):\n        ...\n```",
    "options": [
      "usefixtures makes the fixtures available as test attributes (self.reset_cache)",
      "usefixtures applies reset_cache and seed_db to every method in the class without declaring them as parameters — cleaner than adding them to every method signature when the fixture side effect (not return value) is what's needed",
      "usefixtures on a class runs the fixtures once for the entire class, not per method",
      "usefixtures requires the fixtures to be defined in the same file as the class"
    ],
    "answer": 1,
    "explanation": "usefixtures is for fixtures used for their side effects (setup/teardown) rather than their return value. If you need the fixture's return value, declare it in the method signature instead. Applying it to the class avoids repetition across all methods. Useful for: DB cleanup, cache reset, log capture setup — anything that every test in the class needs but doesn't inspect directly."
  },
  {
    "id": "pyqa68",
    "category": "python-for-qa",
    "question": "What does this `Pydantic` model validation test cover?\n\n```python\nimport pytest\nfrom pydantic import BaseModel, validator\n\nclass OrderRequest(BaseModel):\n    quantity: int\n    price: float\n\n    @validator('quantity')\n    def quantity_must_be_positive(cls, v):\n        if v <= 0:\n            raise ValueError('quantity must be > 0')\n        return v\n\ndef test_negative_quantity_rejected():\n    with pytest.raises(ValidationError) as exc:\n        OrderRequest(quantity=-5, price=9.99)\n    assert 'quantity must be > 0' in str(exc.value)\n```",
    "options": [
      "Pydantic validators run asynchronously and cannot be tested with pytest.raises",
      "The test verifies that the business rule (positive quantity) is enforced at the model level — ValidationError is raised immediately on instantiation with a helpful message, not deep inside business logic where it's harder to attribute",
      "@validator is deprecated in Pydantic v2; use @field_validator",
      "pytest.raises(ValidationError) requires importing ValidationError from pytest, not pydantic"
    ],
    "answer": 1,
    "explanation": "Testing validators directly on Pydantic models is unit testing your data contracts. The model is the boundary — invalid data should never reach business logic. Note: in Pydantic v2, @validator is replaced by @field_validator with slightly different syntax. Testing the error message string ensures validator messages are human-readable and stable across refactors."
  },
  {
    "id": "pyqa69",
    "category": "python-for-qa",
    "question": "What does this `pytest-mock`'s `mocker.patch.dict` technique test?\n\n```python\ndef test_feature_flag_enabled(mocker):\n    mocker.patch.dict('os.environ', {'ENABLE_NEW_CHECKOUT': '1', 'LOG_LEVEL': 'DEBUG'})\n    result = process_order(order_id=42)\n    assert result['checkout_version'] == 'v2'\n```",
    "options": [
      "patch.dict modifies os.environ permanently for all subsequent tests",
      "patch.dict temporarily adds/overwrites the specified keys in os.environ for the test duration, then restores the original state — other environment variables are unaffected; this is safer than setenv because it batches multiple env var changes",
      "mocker.patch.dict requires the dictionary to be empty before the test runs",
      "patch.dict on os.environ requires the test to be marked @pytest.mark.env"
    ],
    "answer": 1,
    "explanation": "patch.dict takes a dict or string import path and a dict of overrides. It merges the overrides, runs the test, and restores the original state. Non-overridden keys in os.environ are untouched. Use clear=True to completely replace the dict (useful for testing code that breaks with certain system env vars). Equivalent to monkeypatch.setenv for each key but more concise for multiple variables."
  },
  {
    "id": "pyqa70",
    "category": "python-for-qa",
    "question": "What is the risk in this parallel test setup?\n\n```python\n# conftest.py\n@pytest.fixture(scope='session')\ndef db():\n    return connect('postgresql://localhost/testdb')\n\ndef test_create_user(db):\n    db.execute('INSERT INTO users VALUES (1, \"alice\")')\n    assert db.execute('SELECT count(*) FROM users').scalar() == 1\n\ndef test_create_product(db):\n    assert db.execute('SELECT count(*) FROM users').scalar() == 0  # FAILS!\n```",
    "options": [
      "No risk — session-scoped fixtures are thread-safe in pytest-xdist",
      "Both tests share the same DB session; test_create_user inserts a row without rollback, so test_create_product sees the leaked row and its count assertion fails — session scope without cleanup causes test ordering dependencies",
      "db.execute is not a valid method on psycopg2 connections",
      "The INSERT will fail because user ID 1 already exists from a previous run"
    ],
    "answer": 1,
    "explanation": "Session-scoped fixtures persist their state across all tests. Without transaction rollback or table truncation between tests, data accumulates. Fix options: (1) use function-scoped fixture that wraps each test in a transaction and rolls back, (2) use a function-scoped fixture that truncates tables, (3) use pytest-postgresql or a per-test database. This is the most common cause of order-dependent test failures."
  },
  {
    "id": "pyqa71",
    "category": "python-for-qa",
    "question": "What does the `@functools.lru_cache` issue mean for test isolation?\n\n```python\n# application code\n@functools.lru_cache(maxsize=None)\ndef get_config(key: str) -> str:\n    return os.environ.get(key, '')\n\n# test code\ndef test_config_with_overridden_env(monkeypatch):\n    monkeypatch.setenv('DB_HOST', 'test-db')\n    assert get_config('DB_HOST') == 'test-db'  # May FAIL if cached\n```",
    "options": [
      "lru_cache has no effect on test isolation — cached values are per-process",
      "If get_config('DB_HOST') was called before this test (e.g., during import or in a previous test), the cached value is returned regardless of monkeypatch — the test gets stale data; fix by calling get_config.cache_clear() in teardown",
      "monkeypatch.setenv automatically invalidates all lru_cache entries",
      "lru_cache is safe with monkeypatch because monkeypatch patches at the OS level, below the cache"
    ],
    "answer": 1,
    "explanation": "lru_cache caches function results based on arguments. If get_config('DB_HOST') was called before the monkeypatch sets the env var, the cached (real) value is returned. The fix: add a fixture that calls get_config.cache_clear() in setup/teardown, or use autouse=True. This is a classic test isolation bug in config-reading code. Consider injecting config rather than reading env vars directly."
  },
  {
    "id": "pyqa72",
    "category": "python-for-qa",
    "question": "What does this `httpx` async test pattern require compared to `requests`?\n\n```python\nimport pytest\nimport httpx\n\n@pytest.mark.asyncio\nasync def test_async_api_call():\n    async with httpx.AsyncClient() as client:\n        resp = await client.get('http://api/health')\n    assert resp.status_code == 200\n```",
    "options": [
      "httpx.AsyncClient works identically to requests.Session — no async/await needed",
      "Async HTTP calls require an async test function (async def) with await; pytest-asyncio is required to run async tests; httpx.AsyncClient must be used as an async context manager to ensure the connection is properly closed",
      "@pytest.mark.asyncio is optional — pytest auto-detects async test functions",
      "httpx cannot be mocked with the responses library"
    ],
    "answer": 1,
    "explanation": "httpx supports both sync and async. For async, you need pytest-asyncio (or anyio) and must declare the test async def. The async context manager (async with) ensures proper cleanup of connections. To mock httpx in tests, use pytest-httpx or respx libraries (the responses library only patches requests). Set asyncio_mode='auto' in pytest.ini to avoid marking every test."
  },
  {
    "id": "pyqa73",
    "category": "python-for-qa",
    "question": "What does this `pandas` technique validate for data pipeline QA?\n\n```python\nimport pandas as pd\n\ndef test_etl_output_schema():\n    df = run_etl_pipeline()\n    assert list(df.columns) == ['user_id', 'event', 'timestamp', 'value']\n    assert df['user_id'].dtype == 'int64'\n    assert df['timestamp'].dtype == 'datetime64[ns]'\n    assert not df['user_id'].isnull().any()\n```",
    "options": [
      "pandas dtype comparison with == raises TypeError for non-numeric dtypes",
      "These assertions form a data contract test for the ETL output: correct column order and names, correct data types, and no nulls in required fields — catching schema drift when upstream data sources change",
      "df.columns returns a list; == comparison checks reference equality not value equality",
      "datetime64[ns] is not a valid pandas dtype string"
    ],
    "answer": 1,
    "explanation": "Data pipeline tests should validate schema (columns, order, types) and data quality (nullability, ranges, uniqueness). pandas dtype assertions catch silent type coercion bugs — e.g., timestamps arriving as strings. Use pd.testing.assert_frame_equal() for comparing full DataFrames with tolerance control. Libraries like great_expectations and pandera provide declarative data quality frameworks built on this idea."
  },
  {
    "id": "pyqa74",
    "category": "python-for-qa",
    "question": "What does `pandera` provide over raw pandas assertions?\n\n```python\nimport pandera as pa\nfrom pandera import Column, DataFrameSchema, Check\n\nschema = DataFrameSchema({\n    'user_id': Column(int, Check.greater_than(0)),\n    'email': Column(str, Check(lambda s: s.str.contains('@'))),\n    'score': Column(float, Check.in_range(0, 100), nullable=True)\n})\n\ndef test_pipeline_output():\n    df = run_pipeline()\n    schema.validate(df)  # raises SchemaError with detailed report\n```",
    "options": [
      "pandera only works with DataFrames from CSV files, not programmatically created ones",
      "pandera provides declarative schema validation — the schema is reusable documentation, validate() gives a structured SchemaError identifying which rows and columns failed, and schemas can be generated from sample DataFrames automatically",
      "Check.in_range(0, 100) is equivalent to assert all(0 <= x <= 100) and has no performance advantage",
      "nullable=True means the column accepts None but still raises on NaN"
    ],
    "answer": 1,
    "explanation": "pandera is a statistical typing framework for pandas DataFrames. Schemas are reusable, composable, and generate detailed error reports with the failing rows and values. Unlike raw assert statements, pandera schemas can decorate functions (@pa.check_input, @pa.check_output) to validate at function boundaries automatically. Great for testing data engineering pipelines and ML feature pipelines."
  },
  {
    "id": "pyqa75",
    "category": "python-for-qa",
    "question": "What does this `@pytest.fixture(name=...)` option solve?\n\n```python\n@pytest.fixture(name='user')\ndef user_fixture():\n    return create_test_user()\n\ndef test_profile(user):\n    assert user.email is not None\n```",
    "options": [
      "name= renames the fixture in test reports only; the function must still be called user_fixture",
      "name='user' makes the fixture available as 'user' in test parameters — the function can have a descriptive Python name (user_fixture) to avoid conflicts with local variables or imported names while keeping the test signature clean",
      "name= is required when two fixtures have the same return type",
      "pytest ignores the name= parameter; fixtures are always resolved by function name"
    ],
    "answer": 1,
    "explanation": "Without name=, a fixture is requested by its function name. If the function is named user, it shadows any local user variable in the test — confusing readers. Naming the function user_fixture (descriptive, avoids shadowing) while exposing it as user (clean test signature) is the best of both worlds. This is especially useful in conftest.py where fixture functions can have verbose descriptive names."
  },
  {
    "id": "pyqa76",
    "category": "python-for-qa",
    "question": "What does this `BeautifulSoup` snippet test about HTML rendering?\n\n```python\nfrom bs4 import BeautifulSoup\n\ndef test_error_message_displayed():\n    html = client.post('/login', data={'password': 'wrong'}).text\n    soup = BeautifulSoup(html, 'html.parser')\n    error_div = soup.find('div', class_='error-message')\n    assert error_div is not None\n    assert 'Invalid credentials' in error_div.text\n```",
    "options": [
      "BeautifulSoup only parses well-formed XML, not HTML",
      "This is a server-side rendering test: it verifies that the HTML response contains a div with class 'error-message' containing the correct text — testing that error states are rendered and accessible, not just that the status code is correct",
      "soup.find() raises NavigableStringError if the class is not found",
      "error_div.text returns the raw HTML including child tags"
    ],
    "answer": 1,
    "explanation": "BeautifulSoup tests are valuable for server-rendered HTML applications where the test client receives full HTML pages. Testing DOM structure verifies that error messages, form labels, and accessibility attributes are present. For SPAs, use Playwright/Selenium instead. error_div.text returns the rendered text content (no tags); .decode_contents() returns inner HTML."
  },
  {
    "id": "pyqa77",
    "category": "python-for-qa",
    "question": "What does this `pytest` output capture trick reveal about test quality?\n\n```python\ndef test_calculation(capsys):\n    result = compute(42)\n    print(f'DEBUG: intermediate={result.intermediate}')  # production code!\n    assert result.final == 84\n    out, _ = capsys.readouterr()\n    assert out == ''  # Fails! Production code is printing debug output\n```",
    "options": [
      "capsys.readouterr() clears stdout so the assertion on out always passes",
      "This tests that compute() does not produce any stdout output — finding that production code has leftover debug print() calls that should be replaced with proper logging",
      "print() in production code is fine and does not affect test outcomes",
      "assert out == '' will always pass because pytest captures stdout by default"
    ],
    "answer": 1,
    "explanation": "Asserting that code produces no stdout output catches debug print() statements left in production code — a code quality issue that clutters logs. Proper observability uses the logging module (not print), which can be controlled by log level. This technique is also used to verify that verbose libraries aren't producing unexpected output. capsys.readouterr() returns and clears captured output."
  },
  {
    "id": "pyqa78",
    "category": "python-for-qa",
    "question": "What does this `@contextmanager` utility enable for test cleanup?\n\n```python\nfrom contextlib import contextmanager\n\n@contextmanager\ndef temp_feature_flag(flag_name, value):\n    original = get_flag(flag_name)\n    set_flag(flag_name, value)\n    try:\n        yield\n    finally:\n        set_flag(flag_name, original)\n\ndef test_premium_checkout():\n    with temp_feature_flag('premium_checkout', True):\n        result = checkout(cart, user='premium')\n    assert result['discount_applied'] is True\n```",
    "options": [
      "@contextmanager converts a generator function into a decorator",
      "@contextmanager creates a reusable context manager from a generator; the try/finally guarantees the original flag value is restored even if the test raises — safer than patch() for domain-specific state that isn't a simple attribute",
      "The finally block only runs if an exception is raised within the with block",
      "yield can only appear once in a @contextmanager function"
    ],
    "answer": 1,
    "explanation": "contextmanager is the lightweight way to create context managers without a full class. try/finally ensures cleanup even on failure. This pattern is ideal for domain-specific state management (feature flags, config overrides, rate limits) that doesn't map cleanly to unittest.mock.patch. The context manager can be combined with pytest fixtures or used inline in tests."
  },
  {
    "id": "pyqa79",
    "category": "python-for-qa",
    "question": "What does `schemathesis` do differently from hand-written API contract tests?\n\n```bash\nschemathesis run http://api/openapi.json --checks all\n```",
    "options": [
      "schemathesis only validates that the OpenAPI spec file is valid JSON",
      "schemathesis reads the OpenAPI spec and auto-generates test cases for every endpoint — fuzzing parameters, testing edge cases, and verifying responses conform to the declared schemas — without writing a single test function",
      "schemathesis requires a running server; it cannot test offline",
      "--checks all enables only status code validation, not schema conformance"
    ],
    "answer": 1,
    "explanation": "schemathesis is a property-based API testing tool powered by Hypothesis. It generates test cases from your OpenAPI/Swagger spec and checks: 5xx responses (should not happen on valid inputs), response schema conformance, auth handling, and custom checks. It finds bugs that hand-written tests miss because it explores the input space systematically. Add to CI for continuous API contract validation."
  },
  {
    "id": "pyqa80",
    "category": "python-for-qa",
    "question": "What does this `patch` on `datetime.datetime.now` accomplish?\n\n```python\nfrom unittest.mock import patch\nimport datetime\n\ndef test_audit_log_timestamp():\n    fixed_time = datetime.datetime(2024, 1, 15, 12, 0, 0)\n    with patch('myapp.audit.datetime') as mock_dt:\n        mock_dt.datetime.now.return_value = fixed_time\n        log_entry = create_audit_entry(user_id=1, action='login')\n    assert log_entry['timestamp'] == '2024-01-15T12:00:00'\n```",
    "options": [
      "Patching datetime.datetime.now raises AttributeError — datetime is a C extension and cannot be mocked",
      "Patching the datetime module reference inside myapp.audit (not the stdlib) overrides now() for the duration of the test — the audit entry gets a predictable timestamp that can be asserted exactly, rather than a real timestamp that changes every run",
      "fixed_time must be a string in ISO format for mock_dt to accept it",
      "datetime.datetime.now is a classmethod and cannot be mocked with return_value"
    ],
    "answer": 1,
    "explanation": "datetime.datetime is a C extension — you cannot patch datetime.datetime.now directly. Instead, patch the module reference in the target code: patch('myapp.audit.datetime'). Then set mock_dt.datetime.now.return_value = fixed_time. Alternatively, use the freezegun library which handles all the datetime patching complexity. Always patch where it's used, not where it's defined."
  },
  {
    "id": "pyqa81",
    "category": "python-for-qa",
    "question": "What is the 'Arrange-Act-Assert' pattern and why is it enforced in QA teams?\n\n```python\ndef test_apply_discount():\n    # Arrange\n    cart = Cart(items=[Item('book', price=20.00)])\n    coupon = Coupon(code='SAVE10', discount_pct=10)\n    \n    # Act\n    cart.apply_coupon(coupon)\n    \n    # Assert\n    assert cart.total == 18.00\n```",
    "options": [
      "AAA is just a comment style preference with no structural impact on test quality",
      "AAA separates test setup (Arrange), the operation under test (Act), and verification (Assert) into distinct phases — one Act per test ensures a single behavior is tested; it makes tests readable and failures easy to attribute to setup, logic, or assertion issues",
      "The pattern requires three separate test functions: one to arrange, one to act, one to assert",
      "Arrange-Act-Assert is only applicable to unit tests; integration tests use Given-When-Then"
    ],
    "answer": 1,
    "explanation": "AAA (or Given-When-Then in BDD) is the universal test structure pattern. One Act per test is the key rule — if you find yourself writing Act-Assert-Act-Assert, you have two tests. This structure enables: fast failure attribution (which phase broke?), clear refactoring targets, and consistent readability across a large test suite. pytest doesn't enforce it — it's a team convention."
  },
  {
    "id": "pyqa82",
    "category": "python-for-qa",
    "question": "What does this `mock.create_autospec` provide over plain `MagicMock`?\n\n```python\nfrom unittest.mock import create_autospec\n\nclass PaymentGateway:\n    def charge(self, amount: float, currency: str) -> dict:\n        ...\n\ndef test_payment_called_correctly():\n    mock_gateway = create_autospec(PaymentGateway)\n    process_payment(mock_gateway, amount=50.0)\n    mock_gateway.charge.assert_called_once_with(50.0, 'USD')\n```",
    "options": [
      "create_autospec creates a mock with the same attribute names but no spec enforcement",
      "create_autospec creates a mock that mirrors the real class's method signatures — calling mock_gateway.charge(wrong_args) raises TypeError just like the real class would; it catches API misuse bugs that plain MagicMock would silently accept",
      "create_autospec requires the spec class to have type annotations",
      "create_autospec cannot be used with instance methods — only module-level functions"
    ],
    "answer": 1,
    "explanation": "MagicMock accepts any arguments on any method — mock.charge(1, 2, 3, wrong=True) silently passes. create_autospec mirrors the real signature: wrong number of arguments raises TypeError. This catches refactoring bugs where a real method's signature changes but the test mock isn't updated. Use spec_set=True to also prevent setting attributes not on the original."
  },
  {
    "id": "pyqa83",
    "category": "python-for-qa",
    "question": "What does this `pytest` `warnings` filter do in the test configuration?\n\n```ini\n[pytest]\nfilterwarnings =\n    error\n    ignore::DeprecationWarning:third_party_lib\n```",
    "options": [
      "filterwarnings = error only affects Python 3.11+ where warnings are errors by default",
      "error promotes ALL warnings to exceptions (causing test failures) except DeprecationWarnings from third_party_lib — forcing the team to address deprecations proactively while ignoring noise from dependencies they don't control",
      "filterwarnings only applies to ResourceWarning, not DeprecationWarning",
      "ignore::DeprecationWarning:third_party_lib silences warnings from all libraries"
    ],
    "answer": 1,
    "explanation": "filterwarnings = error is one of the most valuable pytest configurations for code quality. It turns your own DeprecationWarnings, PendingDeprecationWarnings, and ResourceWarnings into test failures, forcing the team to fix them before they become bugs. The ignore filter for third-party libs prevents upstream library noise from breaking your CI. Use -W error on the command line for a one-time check."
  },
  {
    "id": "pyqa84",
    "category": "python-for-qa",
    "question": "What does this `pytest` `--tb=short` flag change about failure output?\n\n```bash\npytest --tb=short    # condensed traceback\npytest --tb=long     # full traceback with locals\npytest --tb=no       # only test names, no tracebacks\npytest --tb=line     # one line per failure\n```",
    "options": [
      "All --tb options show identical information; the flag only controls color",
      "--tb controls traceback verbosity: short shows the failing line and immediate context; long adds local variable values; no is useful in CI where tracebacks are stored separately; line is useful for a quick count of failures across a huge suite",
      "--tb=long causes pytest to re-run each failing test to collect variable state",
      "--tb=no skips teardown fixtures to show failures faster"
    ],
    "answer": 1,
    "explanation": "Choosing the right --tb level for the context speeds up debugging. In local development: --tb=short or --tb=long. In CI reports: --tb=short (stored in artifacts). In a quick sanity check: --tb=line or --tb=no. The default is --tb=short since pytest 7. --tb=long with -l (show locals) gives maximum debug information when tracking down subtle failures."
  },
  {
    "id": "pyqa85",
    "category": "python-for-qa",
    "question": "What does this `typing.Protocol` approach enable for test doubles?\n\n```python\nfrom typing import Protocol\n\nclass EmailSender(Protocol):\n    def send(self, to: str, subject: str, body: str) -> bool: ...\n\nclass FakeEmailSender:\n    def __init__(self):\n        self.sent = []\n    def send(self, to: str, subject: str, body: str) -> bool:\n        self.sent.append({'to': to, 'subject': subject})\n        return True\n\ndef test_welcome_email_sent():\n    fake = FakeEmailSender()\n    register_user('alice@test.com', sender=fake)\n    assert len(fake.sent) == 1\n    assert fake.sent[0]['to'] == 'alice@test.com'\n```",
    "options": [
      "Protocol requires FakeEmailSender to inherit from EmailSender",
      "Protocol-based design enables dependency injection with static type checking — FakeEmailSender implicitly satisfies EmailSender without inheritance; the test double records sent emails for inspection; mypy validates the fake implements the protocol correctly",
      "FakeEmailSender.sent must be declared as a class variable for Protocol compliance",
      "Protocol is only available in Python 3.10+ via typing_extensions"
    ],
    "answer": 1,
    "explanation": "Protocol (PEP 544) enables structural subtyping — if FakeEmailSender has the right methods with the right signatures, it IS an EmailSender, no inheritance needed. This is the Pythonic dependency injection pattern for testability. The Fake (records interactions for inspection) is a test double preferable to MagicMock for complex interactions because it's readable, type-checked, and reusable."
  },
  {
    "id": "pyqa86",
    "category": "python-for-qa",
    "question": "What does this `pytest` marker combination do for test suite organization?\n\n```bash\npytest -m 'smoke and not slow'  # fast smoke tests\npytest -m 'regression or integration'  # thorough tests\npytest -m 'not external'  # offline tests only\n```",
    "options": [
      "Marker expressions only support a single marker — combining with 'and'/'or' raises SyntaxError",
      "-m accepts boolean marker expressions (and, or, not) — enabling fine-grained test selection for different CI stages: fast smoke tests on every commit, full regression nightly, offline tests when network is unavailable",
      "The 'not' operator in -m expressions deselects tests but still runs their fixtures",
      "Marker expressions are case-sensitive — 'Smoke' and 'smoke' are different markers"
    ],
    "answer": 1,
    "explanation": "Marker expressions are evaluated as Python boolean logic. Common CI pipeline patterns: on every push: pytest -m smoke (seconds), on PR merge: pytest -m 'smoke or regression' (minutes), nightly: pytest (all tests, minutes-hours). This is how you achieve 'shift-left' — fast feedback early, comprehensive validation later. Register all markers in pytest.ini to prevent typos."
  },
  {
    "id": "pyqa87",
    "category": "python-for-qa",
    "question": "What does this `pytest` `record_mode` parameter in `pytest-recording` (VCR) control?\n\n```python\n# pytest.ini\n[pytest]\nvcrrecord = none  # fail on missing cassettes (CI mode)\n# vcrrecord = new_episodes  # record new requests only\n# vcrrecord = all  # re-record everything\n```",
    "options": [
      "record_mode controls VCR tape quality — higher modes capture more HTTP headers",
      "record=none (used in CI) means tests fail if a cassette doesn't exist — preventing accidental real network calls; new_episodes records only uncasseted requests; all re-records everything to refresh stale cassettes with current real responses",
      "vcrrecord = none disables VCR entirely, allowing real network calls",
      "record_mode only affects the first recorded request; subsequent requests always use cassettes"
    ],
    "answer": 1,
    "explanation": "VCR record modes are a critical CI safety net. In CI: record=none ensures no accidental real API calls (which would require credentials, network access, and produce non-deterministic results). Locally: record=new_episodes adds cassettes for new tests without re-recording existing ones. record=all refreshes stale cassettes when the real API changes. Commit cassette files to version control."
  },
  {
    "id": "pyqa88",
    "category": "python-for-qa",
    "question": "What is the output of this code and why does it matter for test reliability?\n\n```python\nimport copy\n\nbase = {'config': {'timeout': 30, 'retries': 3}}\ntest1 = base  \ntest2 = copy.copy(base)   # shallow copy\ntest3 = copy.deepcopy(base)  # deep copy\n\ntest1['config']['timeout'] = 999\nprint(base['config']['timeout'])   # ?\nprint(test2['config']['timeout'])  # ?\nprint(test3['config']['timeout'])  # ?\n```",
    "options": [
      "999, 30, 30 — both test1 and test2 are independent copies",
      "999, 999, 30 — test1 is an alias (mutation visible in base), test2 is a shallow copy (the inner dict is still shared, so mutation propagates), test3 is a deep copy (fully independent)",
      "999, 999, 999 — Python always copies by reference for nested structures",
      "30, 30, 30 — dict assignment creates an implicit deep copy"
    ],
    "answer": 1,
    "explanation": "This is one of the most common sources of test pollution in Python. test1 = base is an alias — same object. copy.copy(base) copies the outer dict but not nested dicts — both test2 and base point to the same inner {'timeout': 30}. copy.deepcopy() creates a fully independent tree. In test helpers, always deepcopy shared fixture data before mutating it to prevent state leakage between tests."
  },
  {
    "id": "pyqa89",
    "category": "python-for-qa",
    "question": "What does `pytest-cov`'s `--cov-fail-under` option enforce in CI?\n\n```bash\npytest --cov=myapp --cov-fail-under=80\n```",
    "options": [
      "It runs tests until 80% of the test file is covered, then stops",
      "The pytest process exits with a non-zero code if overall coverage drops below 80% — failing the CI build automatically when coverage regresses, acting as a ratchet that prevents the team from merging code that reduces test coverage",
      "--cov-fail-under only counts line coverage; branch coverage is not included",
      "80% is the pytest default; custom thresholds require a coverage.ini file"
    ],
    "answer": 1,
    "explanation": "Coverage gates in CI prevent coverage regression. Once you establish a baseline (e.g., 80%), --cov-fail-under locks it in. Teams typically start low and gradually increase the threshold as they add tests. Put this in your CI config, not just pytest.ini, so developers can't accidentally bypass it. Combine with --cov-branch for more meaningful coverage numbers."
  },
  {
    "id": "pyqa90",
    "category": "python-for-qa",
    "question": "What is the difference between `unittest.TestCase.setUp` and a `pytest` function-scoped fixture?\n\n```python\n# unittest style\nclass TestAPI(unittest.TestCase):\n    def setUp(self):\n        self.client = create_test_client()\n\n# pytest style  \n@pytest.fixture\ndef client():\n    return create_test_client()\n\ndef test_get_users(client):\n    ...\n```",
    "options": [
      "They are completely equivalent — pytest fixtures are just syntactic sugar for setUp",
      "pytest fixtures are composable (fixtures can depend on other fixtures), have configurable scope (function/class/module/session), support parametrization, and can be shared across files via conftest.py; setUp runs only within its TestCase class and cannot be composed or scoped",
      "setUp runs before each test; pytest fixtures run once per file by default",
      "unittest.TestCase tests cannot use pytest fixtures without special configuration"
    ],
    "answer": 1,
    "explanation": "pytest fixtures are significantly more powerful: dependency injection via function parameters, composability (fixture A can use fixture B), scope control (expensive resources shared at session level), parametrization, and file-level sharing via conftest.py. unittest.TestCase.setUp is limited to the class. Note: pytest can run TestCase tests, and TestCase tests can use some pytest fixtures — the two systems are partially compatible."
  },
  {
    "id": "pyqa91",
    "category": "python-for-qa",
    "question": "What does this `pytest` plugin `pytest-rerunfailures` handle for flaky tests?\n\n```python\n@pytest.mark.flaky(reruns=3, reruns_delay=1)\ndef test_external_service_ping():\n    response = requests.get('http://external-svc/ping', timeout=5)\n    assert response.status_code == 200\n```",
    "options": [
      "flaky marks the test as permanently ignored in CI",
      "The test is retried up to 3 times with a 1-second delay between attempts; it passes if any retry succeeds — useful for genuinely flaky external integrations while the root cause is investigated, but overuse masks real reliability problems",
      "reruns=3 runs the test 3 additional times after it passes to verify stability",
      "reruns_delay is measured in milliseconds, not seconds"
    ],
    "answer": 1,
    "explanation": "Flaky test retries are a pragmatic short-term tool, not a long-term solution. Use @flaky sparingly and always pair it with a tracking ticket. Overuse creates false CI confidence — a test that 'passes on retry' is hiding a real intermittency issue. Better solutions: fix the underlying flakiness, use VCR cassettes, or quarantine truly-flaky tests to a separate suite that doesn't block merges."
  },
  {
    "id": "pyqa92",
    "category": "python-for-qa",
    "question": "What does the `__all__` variable in a test utilities module control?\n\n```python\n# tests/utils/__init__.py\n__all__ = ['create_user', 'create_order', 'api_client']\n\ndef create_user(role='viewer'): ...\ndef create_order(user, items): ...\ndef api_client(): ...\ndef _internal_helper(): ...\n```",
    "options": [
      "__all__ prevents the listed functions from being imported",
      "__all__ defines the public API of the module — from tests.utils import * only imports the listed names; _internal_helper is excluded; it documents intent (public vs private) and prevents accidental use of internal helpers across test files",
      "__all__ causes ImportError if unlisted functions are imported explicitly",
      "__all__ has no effect on from module import specific_name imports"
    ],
    "answer": 1,
    "explanation": "__all__ controls wildcard imports and signals intent. _internal_helper (underscore prefix) is already a convention for private, but __all__ makes it explicit for wildcard imports. In large test suites, well-structured test utility modules with clear public APIs reduce coupling. Explicit imports (from utils import create_user) are always preferred over wildcard imports in test code."
  },
  {
    "id": "pyqa93",
    "category": "python-for-qa",
    "question": "What does this `itertools.product` pattern generate for combinatorial testing?\n\n```python\nimport itertools\nimport pytest\n\nroles = ['admin', 'editor', 'viewer']\nresources = ['reports', 'users', 'settings']\n\n@pytest.mark.parametrize('role,resource', itertools.product(roles, resources))\ndef test_access_matrix(role, resource, auth_client):\n    resp = auth_client(role).get(f'/{resource}')\n    assert resp.status_code in (200, 403)\n```",
    "options": [
      "itertools.product generates all permutations with repetition — duplicates are expected",
      "itertools.product generates the Cartesian product: all 9 combinations of 3 roles × 3 resources — a complete access control matrix test in one parametrize without manually listing all combinations",
      "itertools.product requires both lists to be the same length",
      "The test will run 6 times (3 + 3) not 9 times (3 × 3)"
    ],
    "answer": 1,
    "explanation": "Cartesian product parametrization is the systematic way to test access control matrices, configuration combinations, or input space coverage. With 3 roles and 3 resources you get 9 tests. Adding a new role or resource automatically adds tests for all combinations. This approach ensures no combination is accidentally omitted. For large matrices, consider using hypothesis.strategies.sampled_from with given() instead."
  },
  {
    "id": "pyqa94",
    "category": "python-for-qa",
    "question": "What does the `--co` (collect-only) flag help diagnose?\n\n```bash\npytest --co -q\n```",
    "options": [
      "--co runs tests but skips assertion evaluation for speed",
      "--co (collect-only) shows all test node IDs that would be collected without running any tests — used to verify that marker expressions select the right tests, parametrize generates expected cases, and conftest.py fixtures are properly discovered",
      "--co outputs test coverage without running the tests",
      "--co requires the -q flag to function correctly"
    ],
    "answer": 1,
    "explanation": "pytest --co is your first debugging tool for collection problems: 'why is my test not being found?', 'how many tests does -m smoke select?', 'are my parametrize values being collected correctly?'. The output shows the full test hierarchy (file > class > function > parametrize ID). --co -q (quiet) shows just IDs; without -q shows the full tree. No test code is imported or executed."
  },
  {
    "id": "pyqa95",
    "category": "python-for-qa",
    "question": "What does this `contextlib.suppress` pattern do in test cleanup code?\n\n```python\nfrom contextlib import suppress\n\n@pytest.fixture\ndef temp_user(db):\n    user = db.create_user(email='tmp@test.com')\n    yield user\n    with suppress(UserNotFoundError):\n        db.delete_user(user.id)\n```",
    "options": [
      "suppress catches the exception and re-raises it as a warning",
      "suppress silently ignores UserNotFoundError during teardown — if the test itself deleted the user (as part of testing deletion), teardown won't fail trying to delete a non-existent user; the suppress context is narrowly scoped to expected cleanup-time exceptions only",
      "contextlib.suppress causes the fixture to skip teardown entirely on exception",
      "suppress is equivalent to a bare except: pass but raises a SyntaxWarning"
    ],
    "answer": 1,
    "explanation": "Teardown that raises exceptions can mask the original test failure — pytest shows the teardown error instead of the real failure. Use suppress() to handle expected cleanup-time errors (deleting something that was already deleted by the test). Never use suppress() broadly — only for the specific exception you expect. This prevents flaky teardown errors in deletion-focused tests."
  },
  {
    "id": "pyqa96",
    "category": "python-for-qa",
    "question": "What does `tabulate` or `rich` provide for QA reporting in Python scripts?\n\n```python\nfrom rich.table import Table\nfrom rich.console import Console\n\ndef print_test_summary(results):\n    console = Console()\n    table = Table(title='API Test Results')\n    table.add_column('Endpoint', style='cyan')\n    table.add_column('Status', style='green')\n    table.add_column('Latency ms', justify='right')\n    for r in results:\n        table.add_row(r['url'], str(r['status']), str(r['latency_ms']))\n    console.print(table)\n```",
    "options": [
      "rich.Table is only for terminal display — it cannot be exported to HTML or CSV",
      "rich provides terminal-formatted tables, progress bars, and syntax highlighting for QA scripts that generate human-readable test reports from raw result data — useful for smoke test scripts, health-check tools, and custom test runners",
      "Console.print() writes to a log file, not terminal stdout",
      "rich requires Python 3.10+ and cannot be used in older CI environments"
    ],
    "answer": 1,
    "explanation": "rich is the modern Python terminal formatting library. For QA scripts (health checks, API smoke tests, deployment verification), rich tables are far more readable than print() output in CI logs. Rich supports: tables with column styles, progress bars for long-running checks, color-coded status (PASS=green, FAIL=red), and can export to HTML with Console(record=True). tabulate is a lighter alternative."
  },
  {
    "id": "pyqa97",
    "category": "python-for-qa",
    "question": "What does this `abc.ABC` pattern enforce for test infrastructure interfaces?\n\n```python\nfrom abc import ABC, abstractmethod\n\nclass BaseTestEnvironment(ABC):\n    @abstractmethod\n    def setup(self) -> None: ...\n    \n    @abstractmethod\n    def teardown(self) -> None: ...\n    \n    @abstractmethod\n    def get_base_url(self) -> str: ...\n\nclass DockerEnvironment(BaseTestEnvironment):\n    def setup(self): self._container = start_docker()\n    def teardown(self): self._container.stop()\n    def get_base_url(self): return 'http://localhost:8080'\n```",
    "options": [
      "ABC prevents DockerEnvironment from being instantiated unless all abstract methods are implemented",
      "ABC enforces that any concrete TestEnvironment subclass implements setup, teardown, and get_base_url — attempting to instantiate a subclass missing any method raises TypeError; this makes the contract explicit and catches incomplete implementations at startup rather than mid-test",
      "@abstractmethod is only enforced at type-checking time (mypy), not at runtime",
      "ABC classes cannot be used as pytest fixtures"
    ],
    "answer": 1,
    "explanation": "ABC (Abstract Base Class) is Python's mechanism for defining mandatory interfaces. TypeError at instantiation time (not mid-test failure) is the key benefit. For test infrastructure (environment providers, data factories, test reporters), ABC-enforced interfaces ensure all implementations are complete. This is especially valuable when multiple team members implement different test environments (local Docker, staging, production-mirror)."
  },
  {
    "id": "pyqa98",
    "category": "python-for-qa",
    "question": "What does this `logging.handlers.MemoryHandler` technique accomplish?\n\n```python\nimport logging\n\ndef test_no_sensitive_data_logged():\n    handler = logging.handlers.MemoryHandler(capacity=1000, flushLevel=logging.CRITICAL)\n    logger = logging.getLogger('myapp')\n    logger.addHandler(handler)\n    \n    process_payment(card_number='4111111111111111')\n    \n    log_messages = [r.getMessage() for r in handler.buffer]\n    assert not any('4111' in msg for msg in log_messages)\n    assert not any('1111111111111111' in msg for msg in log_messages)\n```",
    "options": [
      "MemoryHandler buffers log records in memory; this test verifies that the payment processing code never logs the full or partial card number — testing PCI compliance behavior",
      "MemoryHandler raises a CapacityError if more than 1000 log records are produced",
      "This test can only detect logging to the 'myapp' logger, not root logger leakage",
      "flushLevel=CRITICAL means all records below CRITICAL are discarded"
    ],
    "answer": 0,
    "explanation": "Testing that sensitive data is NOT logged is a critical PCI-DSS/GDPR compliance test. MemoryHandler buffers records in-memory (handler.buffer) without writing to disk or a real log sink. The test asserts that no partial or full card number appears in any log message. This type of negative assertion is often overlooked — add it to your security test suite for any code handling PII, payment data, or credentials."
  },
  {
    "id": "pyqa99",
    "category": "python-for-qa",
    "question": "What does this `pytest` test ID customization technique help with in reports?\n\n```python\ndef pytest_make_parametrize_id(config, val, argname):\n    if isinstance(val, dict) and 'name' in val:\n        return val['name']\n    return None  # use default\n\n@pytest.mark.parametrize('user', [\n    {'name': 'admin_user', 'role': 'admin'},\n    {'name': 'viewer_user', 'role': 'viewer'},\n])\ndef test_dashboard_access(user):\n    ...\n```",
    "options": [
      "pytest_make_parametrize_id is called to generate test file names, not test IDs",
      "The hook customizes parametrize test IDs — instead of test_dashboard_access[user0], reports show test_dashboard_access[admin_user], making failures immediately meaningful without needing to decode numeric indices",
      "This hook only works when val is a primitive type (str, int); dicts require a different hook",
      "Returning None from the hook raises a ValueError; return the default ID string instead"
    ],
    "answer": 1,
    "explanation": "pytest_make_parametrize_id is a hook in conftest.py that customizes how parametrize IDs are generated. Without it, dicts get ugly IDs like user0, user1. Custom IDs make CI reports and failure messages immediately readable. Alternatively, use pytest.param(val, id='admin_user') directly in the parametrize list for per-case control. Both approaches transform opaque indices into meaningful test names."
  },
  {
    "id": "pyqa100",
    "category": "python-for-qa",
    "question": "What does this `@pytest.fixture` stacking pattern enable for test scenarios?\n\n```python\n@pytest.fixture\ndef authenticated_client(client, create_user):\n    user = create_user(role='admin')\n    client.login(user)\n    return client\n\n@pytest.fixture\ndef client_with_data(authenticated_client, seed_products):\n    seed_products(count=10)\n    return authenticated_client\n\ndef test_search_products(client_with_data):\n    resp = client_with_data.get('/search?q=test')\n    assert resp.status_code == 200\n    assert len(resp.json()['results']) > 0\n```",
    "options": [
      "Fixture stacking causes circular dependency errors when more than 2 fixtures are chained",
      "Fixtures compose like functions — client_with_data depends on authenticated_client which depends on client and create_user; pytest resolves the dependency graph automatically, building from leaf fixtures inward; this enables layered scenarios without code duplication",
      "Each fixture in the chain must use the same scope or pytest raises a ScopeError",
      "Fixtures can only be one level deep — client_with_data cannot use another fixture as a parameter"
    ],
    "answer": 1,
    "explanation": "pytest's fixture dependency injection builds a directed acyclic graph of fixtures. Each fixture can depend on others, and pytest resolves the order automatically. This composability is pytest's most powerful feature — you build complex scenarios from simple reusable pieces. Scope constraints exist (broader scope cannot depend on narrower scope) but within the same scope, arbitrary depth is supported."
  },
  {
    "id": "pyqa101",
    "category": "python-for-qa",
    "question": "What does `pytest-benchmark` measure and how should QA engineers use it?\n\n```python\ndef test_json_parser_performance(benchmark):\n    large_payload = generate_payload(size=10_000)\n    result = benchmark(parse_json_response, large_payload)\n    assert result is not None\n    # benchmark.stats shows: mean, stddev, min, max, rounds\n```",
    "options": [
      "benchmark() runs the function once and measures wall-clock time",
      "pytest-benchmark runs the function multiple times (configurable rounds/iterations), reports statistical metrics (mean, stddev, min, max, OPS/sec), and can compare against a saved baseline — alerting when a code change introduces performance regression",
      "benchmark fixtures require the tested function to return a numeric value",
      "Performance benchmarks in pytest run only on the CI server, not locally"
    ],
    "answer": 1,
    "explanation": "pytest-benchmark warms up the function, runs it N times, and provides statistical analysis. Use --benchmark-compare to compare against a saved baseline: benchmark saves results as JSON (--benchmark-save=baseline), and --benchmark-compare=baseline fails if any metric regresses beyond a threshold. Essential for testing serialization, algorithm performance, and critical path code in test infrastructure itself."
  },
  {
    "id": "pyqa102",
    "category": "python-for-qa",
    "question": "What is the 'test pyramid' principle and how should it shape Python test investment?\n\n```\n        /\\\n       /E2E\\       (few, slow, Playwright/Selenium)\n      /------\\\n     /Integr. \\    (some, medium speed, requests + real DB)\n    /----------\\\n   /  Unit      \\  (many, fast, pytest + mocks)\n  /______________\\\n```",
    "options": [
      "The pyramid suggests investing equally in all three layers",
      "The pyramid recommends most tests be fast unit tests (milliseconds, mocked dependencies), fewer integration tests (seconds, real DB/services), and fewest E2E tests (minutes, full stack) — inverting the pyramid (many E2E, few unit tests) creates a slow, brittle, expensive test suite",
      "Python unit tests should use Selenium to test individual functions",
      "Integration tests in the pyramid are defined as tests that use multiple Python modules"
    ],
    "answer": 1,
    "explanation": "The test pyramid (Mike Cohn) guides test investment. Unit tests: pytest with mocks, run in milliseconds, test one unit of logic. Integration tests: real DB/HTTP calls, test component interactions. E2E tests: Playwright/Selenium, full user journeys, run in minutes. An inverted pyramid (mostly E2E) is a common anti-pattern: slow CI, brittle tests that break on UI changes, poor failure attribution."
  },
  {
    "id": "pyqa103",
    "category": "python-for-qa",
    "question": "What does this `mock.patch.stopall()` pattern solve in test teardown?\n\n```python\nclass TestPaymentService(unittest.TestCase):\n    def setUp(self):\n        self.patcher1 = patch('myapp.payment.requests.post')\n        self.patcher2 = patch('myapp.payment.validate_card')\n        self.mock_post = self.patcher1.start()\n        self.mock_validate = self.patcher2.start()\n        self.addCleanup(mock.patch.stopall)\n```",
    "options": [
      "patch.stopall() removes all patches globally, including those in other test classes",
      "patch.stopall() stops all patches started with patcher.start() in the current test; addCleanup ensures it runs even if setUp itself fails partway through — preventing patches from leaking into subsequent tests when tearDown is not reached",
      "Each patcher.start() creates an independent patching context; stopall() is not needed",
      "addCleanup runs after tearDown, so stopall is called too late to prevent leakage"
    ],
    "answer": 1,
    "explanation": "Using patcher.start() without patcher.stop() in tearDown is a patch leak bug — real objects stay replaced across tests. patch.stopall() stops all active patches started via .start(). addCleanup() registers teardown that runs even if the test or tearDown raises, making it more reliable than explicit tearDown code. This is the canonical safe pattern for manually-started patches."
  },
  {
    "id": "pyqa104",
    "category": "python-for-qa",
    "question": "What does `pytest-html` generate and how is it useful in a QA workflow?\n\n```bash\npytest --html=report.html --self-contained-html\n```",
    "options": [
      "pytest-html generates a Python file that re-runs all failed tests",
      "--html generates a self-contained HTML test report with pass/fail/skip counts, test details, environment metadata, and captured output — shareable with stakeholders who don't have Python installed; --self-contained-html embeds CSS/JS so the file works without a web server",
      "--self-contained-html requires an internet connection to embed CDN resources",
      "pytest-html only works when tests use the unittest.TestCase style"
    ],
    "answer": 1,
    "explanation": "pytest-html is the standard pytest HTML reporter. Self-contained reports are a single file that can be emailed, stored as a CI artifact, or shared with non-technical stakeholders. The report includes: environment info (Python version, platform), test results with timing, captured stdout/stderr per test, and failure tracebacks. For richer reports with test history and trends, Allure is the more powerful alternative."
  },
  {
    "id": "pyqa105",
    "category": "python-for-qa",
    "question": "What does this `pytest` plugin hook `pytest_runtest_makereport` enable?\n\n```python\n# conftest.py\n@pytest.hookimpl(hookwrapper=True)\ndef pytest_runtest_makereport(item, call):\n    outcome = yield\n    report = outcome.get_result()\n    if report.when == 'call' and report.failed:\n        screenshot_path = take_screenshot(item)\n        allure.attach.file(screenshot_path, name='screenshot',\n                           attachment_type=allure.attachment_type.PNG)\n```",
    "options": [
      "This hook modifies test results — failed tests can be marked as passed here",
      "The hook intercepts test execution at the 'call' phase; on failure, it captures a screenshot and attaches it to the Allure report — providing visual evidence of what the browser showed when the test failed, without any changes to individual test functions",
      "hookwrapper=True causes the hook to run before all other hooks in the chain",
      "pytest_runtest_makereport only fires for tests in the same file as conftest.py"
    ],
    "answer": 1,
    "explanation": "pytest hooks let you inject behavior into the test lifecycle without modifying test code. pytest_runtest_makereport fires for setup, call, and teardown phases. This screenshot-on-failure pattern is the industry standard for Selenium/Playwright test suites — instead of adding screenshot logic to every test, one hook handles it globally. The screenshot is attached to the report automatically, visible next to the failure message."
  },
  {
    "id": "js1",
    "category": "javascript",
    "question": "What is the key behavioral difference between var, let, and const in JavaScript?",
    "options": [
      "var and let are identical; const prevents all mutations including object properties",
      "var is function-scoped and hoisted with undefined; let and const are block-scoped and stay in the Temporal Dead Zone until initialized; const cannot be reassigned",
      "let and const are only available in strict mode; var works everywhere regardless of mode",
      "var is faster at runtime; let and const add type-checking overhead in the JavaScript engine"
    ],
    "answer": 1,
    "explanation": "var leaks out of blocks (if/for) into the enclosing function scope and is hoisted as undefined. let and const are block-scoped and accessing them before declaration throws ReferenceError (TDZ). const prevents reassignment but does not freeze object contents — object properties can still be mutated."
  },
  {
    "id": "js2",
    "category": "javascript",
    "question": "What does JavaScript hoisting do, and what is the Temporal Dead Zone (TDZ)?",
    "options": [
      "Hoisting moves function calls to the top of the file; TDZ is the delay before async functions resolve",
      "Hoisting only applies to class declarations, not variables or functions",
      "Hoisting moves declarations to the top of their scope during compilation. var is initialized to undefined immediately; let and const are hoisted but remain in the TDZ — inaccessible and throwing ReferenceError — until the declaration line executes",
      "TDZ only applies to const declarations; let variables are accessible as undefined before initialization"
    ],
    "answer": 2,
    "explanation": "JavaScript engines parse declarations before executing code. var declarations are hoisted AND initialized to undefined, so reading var before declaration gives undefined (not an error). let/const are hoisted but not initialized — the TDZ window means accessing them before their line throws ReferenceError, preventing subtle bugs."
  },
  {
    "id": "js3",
    "category": "javascript",
    "question": "What is the difference between == (loose equality) and === (strict equality)?",
    "options": [
      "== compares memory addresses; === compares values — both for primitive types",
      "== and === are identical for primitive types but differ for object comparisons",
      "== performs type coercion before comparing (so 0 == false is true); === compares both value AND type without coercion (so 0 === false is false)",
      "=== is slower than == because it performs additional type checks at runtime"
    ],
    "answer": 2,
    "explanation": "Type coercion in == produces counterintuitive results: 0 == false → true, '' == false → true, null == undefined → true. Use === in all comparisons to avoid hidden bugs. Type coercion surprises are a common source of failures in test automation scripts that compare API response values."
  },
  {
    "id": "js4",
    "category": "javascript",
    "question": "Explain the JavaScript event loop and why setTimeout(() => {}, 0) fires after synchronous code.",
    "options": [
      "setTimeout with 0ms fires immediately — it is just a way to avoid the call stack limit",
      "The event loop processes the callback queue only when the call stack is empty. Synchronous code runs to completion first, then the event loop picks up setTimeout callbacks from the queue",
      "setTimeout is processed by a separate thread, so it runs in parallel with synchronous code",
      "The 0ms delay is rounded up to 4ms by the browser, which is why it appears to fire later"
    ],
    "answer": 1,
    "explanation": "JavaScript is single-threaded. Synchronous code fills the call stack and runs until empty. Async operations (setTimeout, fetch, etc.) are handed to Web APIs; their callbacks enter the callback queue. The event loop only pushes callbacks onto the stack when the stack is empty — so console.log('End') always runs before setTimeout(() => {}, 0)."
  },
  {
    "id": "js5",
    "category": "javascript",
    "question": "What is a closure, and what is a practical risk of closures in long-running automation scripts?",
    "options": [
      "A closure is a function that catches errors thrown inside it — a form of try/catch wrapping",
      "A closure is when two functions share the same variable scope, causing naming conflicts",
      "A closure is a function that retains access to variables from its outer scope after the outer function returns. The risk is unintended memory retention — closed-over references keep entire object graphs alive even after they are no longer needed",
      "Closures only exist in arrow functions; regular function declarations do not create closures"
    ],
    "answer": 2,
    "explanation": "Closures are fundamental to JavaScript (counters, callbacks, module patterns). The memory risk: if a closure captures a large object (DOM node, test fixture) the garbage collector cannot free it while any closure holding a reference is alive. In long-running Playwright or Node test suites this causes gradual memory growth."
  },
  {
    "id": "js6",
    "category": "javascript",
    "question": "What are the three states of a JavaScript Promise, and what is the key difference between async/await and .then() chaining?",
    "options": [
      "Promises have two states: resolved and rejected. async/await is faster because it bypasses the microtask queue",
      "Promises are pending, fulfilled, or rejected. async/await is syntactic sugar over Promises — it makes async code read like synchronous code, uses try/catch for errors, and is easier to debug with stack traces",
      "async/await converts asynchronous code to synchronous execution by blocking the thread",
      "Promises only work in Node.js; async/await is the browser-native async mechanism"
    ],
    "answer": 1,
    "explanation": "A Promise starts pending, then settles to fulfilled (resolve called) or rejected (reject called). async/await wraps .then()/.catch() chains in sequential-looking code, making control flow easier to follow. Both compile to the same microtask-based mechanism — the choice is purely syntactic. async/await produces cleaner stack traces for debugging."
  },
  {
    "id": "js7",
    "category": "javascript",
    "question": "What does Promise.all() do and what is the critical failure behavior to understand?",
    "options": [
      "Promise.all() runs promises sequentially and returns results in order of completion",
      "Promise.all() waits for the slowest promise to resolve and skips rejected ones automatically",
      "Promise.all() runs all promises in parallel and resolves when all succeed, returning an array of results. If any single promise rejects, the entire Promise.all() immediately rejects — even if other promises are still pending",
      "Promise.all() is identical to Promise.race() but returns all results instead of just the first"
    ],
    "answer": 2,
    "explanation": "Promise.all([api1(), api2(), api3()]) fires all three simultaneously and resolves with [result1, result2, result3] when all succeed. Critically, one failure fails all — use Promise.allSettled() if you need results from successful promises even when others fail. This matters in performance test scripts that parallelize setup API calls."
  },
  {
    "id": "js8",
    "category": "javascript",
    "question": "What is the difference between debouncing and throttling, and when should each be used?",
    "options": [
      "Debouncing delays execution indefinitely; throttling cancels subsequent calls entirely",
      "Debouncing delays execution until N milliseconds after the last trigger (fires once after user stops typing); throttling allows at most one execution per N milliseconds regardless of call frequency (fires at a fixed rate during scroll)",
      "Throttling is a server-side concept; debouncing only applies to client-side JavaScript",
      "Both debouncing and throttling are identical in behavior — they only differ in implementation complexity"
    ],
    "answer": 1,
    "explanation": "Debounce: search box — only fire the API call 300ms after the user stops typing, not on every keystroke. Throttle: scroll event — fire handler at most every 100ms during continuous scrolling. Performance test leads care because both patterns affect request frequency and therefore observed TPS and API error rates during load tests."
  },
  {
    "id": "js9",
    "category": "javascript",
    "question": "What is the difference between a shallow copy and a deep copy of an object?",
    "options": [
      "Shallow copy uses JSON.parse(JSON.stringify(obj)); deep copy uses the spread operator {...obj}",
      "Shallow copy and deep copy are identical for objects with only primitive values",
      "Shallow copy (spread or Object.assign) copies top-level properties — nested objects are still shared references, so mutating them affects the original. Deep copy creates fully independent clones of all nested structures",
      "Deep copy is only necessary for arrays; objects are always deeply cloned by the spread operator"
    ],
    "answer": 2,
    "explanation": "const shallow = {...obj} — if obj.nested is an object, shallow.nested and obj.nested point to the same reference. Changing shallow.nested.x also changes obj.nested.x. Deep copy strategies: JSON.parse(JSON.stringify(obj)) (loses functions/undefined), structuredClone() (modern standard), or lodash _.cloneDeep(). Critical in test automation when mutating fixture data between test cases."
  },
  {
    "id": "js10",
    "category": "javascript",
    "question": "What is the difference between map(), filter(), and reduce() array methods?",
    "options": [
      "map() sorts elements; filter() removes duplicates; reduce() flattens nested arrays",
      "All three iterate arrays — the only difference is whether they return a new array or a single value",
      "map() transforms each element and returns a new array of the same length; filter() returns a new array of elements passing a test (may be shorter); reduce() accumulates elements into a single value using a callback and initial accumulator",
      "map() and filter() are identical except map() is faster; reduce() is deprecated in modern JavaScript"
    ],
    "answer": 2,
    "explanation": "map: [1,2,3].map(x => x*2) → [2,4,6]. filter: [1,2,3].filter(x => x>1) → [2,3]. reduce: [1,2,3].reduce((sum,x) => sum+x, 0) → 6. These are fundamental for transforming API response data in test scripts — grouping results, extracting fields, computing aggregates from JTL data."
  },
  {
    "id": "js11",
    "category": "javascript",
    "question": "What does the 'this' keyword refer to in a regular function vs. an arrow function?",
    "options": [
      "this always refers to the global window object in both regular and arrow functions",
      "In regular functions, this is determined by how the function is called (dynamic binding). Arrow functions do not have their own this — they inherit it lexically from the enclosing scope at definition time",
      "Arrow functions bind this to the function itself; regular functions bind to the global object",
      "this only exists in class methods; standalone functions and arrow functions always have this === undefined"
    ],
    "answer": 1,
    "explanation": "Regular function: obj.method() → this is obj; but callback(() => fn()) loses context — this becomes undefined in strict mode. Arrow functions capture this from their lexical context at definition, making them reliable for callbacks, event handlers, and setTimeout inside class methods where you need to preserve the object's this."
  },
  {
    "id": "js12",
    "category": "javascript",
    "question": "What is the difference between call(), apply(), and bind()?",
    "options": [
      "call() is synchronous; apply() is asynchronous; bind() returns a Promise",
      "All three set the this context — call() and apply() invoke immediately (apply takes args as array); bind() returns a new function with this pre-bound, for later invocation",
      "bind() permanently changes the function's prototype; call() and apply() only temporarily change this",
      "call() works on regular functions; apply() works on arrow functions; bind() works on class methods only"
    ],
    "answer": 1,
    "explanation": "fn.call(context, arg1, arg2) — invokes immediately, args listed. fn.apply(context, [arg1, arg2]) — invokes immediately, args as array. fn.bind(context) — returns a new function with this locked; useful for creating callbacks that maintain correct context. All three are used in test frameworks for sharing utilities across test classes."
  },
  {
    "id": "js13",
    "category": "javascript",
    "question": "What are the most common sources of memory leaks in long-running JavaScript applications or test suites?",
    "options": [
      "Using const instead of let — const prevents garbage collection of the referenced value",
      "Calling async functions without await — promises that are not awaited stay in memory forever",
      "Unremoved event listeners retaining DOM node references, closures capturing large objects, global variables accumulating state, and setInterval timers that are never cleared",
      "Using forEach instead of for loops — forEach callbacks create closure chains that prevent GC"
    ],
    "answer": 2,
    "explanation": "Memory leaks in JS: (1) addEventListener without removeEventListener keeps DOM nodes alive; (2) closures referencing large test fixtures prevent GC; (3) global/module-level variables that accumulate data across tests; (4) setInterval without clearInterval runs forever. Long-running Playwright or Puppeteer test suites that open many pages without proper teardown are a classic pattern."
  },
  {
    "id": "js14",
    "category": "javascript",
    "question": "What is event bubbling and how does event delegation leverage it for performance?",
    "options": [
      "Event bubbling causes events to fire multiple times on the same element; delegation prevents this by using stopPropagation()",
      "Event bubbling propagates events from parent to child; delegation attaches handlers to the deepest child element",
      "Events bubble upward from the target element through its ancestors to the document root. Event delegation attaches one listener to a parent instead of many listeners to individual children — reducing listener count and handling dynamically added elements automatically",
      "Event bubbling only works for click events; delegation is required for keyboard and input events"
    ],
    "answer": 2,
    "explanation": "Click on a button → event bubbles up through div → section → body → document. Delegation: attach one listener to the parent list (#list), check e.target.tagName === 'LI' to handle clicks on any list item — including items added dynamically after the listener was attached. This pattern reduces memory from N listeners to 1 and is critical for performance in large UI frameworks."
  },
  {
    "id": "js15",
    "category": "javascript",
    "question": "What is the difference between localStorage and sessionStorage?",
    "options": [
      "localStorage stores objects; sessionStorage stores only strings",
      "localStorage is accessible across tabs and origins; sessionStorage is limited to 5KB per key",
      "localStorage persists until explicitly cleared (survives browser close and restart); sessionStorage is scoped to the browser tab session and cleared when the tab closes",
      "sessionStorage is synchronous; localStorage is asynchronous and requires callbacks"
    ],
    "answer": 2,
    "explanation": "Both APIs store key-value string pairs (use JSON.stringify/parse for objects), are synchronous, and share the same ~5MB limit per origin. The critical difference: sessionStorage is tab-scoped and ephemeral. Performance testers care because test data seeded in localStorage persists between test runs and can cause false passes or failures if not cleared in test teardown."
  },
  {
    "id": "js16",
    "category": "javascript",
    "question": "How does the try-catch-finally block behave with async/await, and what happens if you omit catch?",
    "options": [
      "try-catch does not work with async/await — you must use .catch() on the returned Promise",
      "finally only executes if an error is caught; it is skipped if try completes successfully",
      "Wrapping await in try-catch catches rejected promise errors like synchronous errors. finally always executes regardless of success or failure. Omitting catch with async/await causes an unhandled promise rejection warning and swallows the error silently in older Node versions",
      "catch in async functions only catches network errors — logic errors must be caught separately"
    ],
    "answer": 2,
    "explanation": "async function run() { try { const data = await fetchData(); } catch (err) { /* handles rejection */ } finally { /* always runs — cleanup, close connections */ } }. Omitting catch with top-level async/await produces UnhandledPromiseRejection warnings (fatal in Node 15+). In Playwright tests, unhandled rejections in page.evaluate() can cause confusing test failures."
  },
  {
    "id": "js17",
    "category": "javascript",
    "question": "What is NaN, how do you correctly check for it, and why does NaN === NaN return false?",
    "options": [
      "NaN is null with a numeric type — Number.isNaN(null) returns true",
      "NaN === NaN returns true; the trick is that NaN is not equal to itself only in older browsers",
      "NaN (Not-a-Number) is a numeric type for invalid arithmetic results. NaN === NaN is false by IEEE 754 specification — NaN is never equal to itself. Use Number.isNaN(value) (not the global isNaN()) to correctly detect NaN without type coercion",
      "isNaN() and Number.isNaN() are identical — the global isNaN() was added for backward compatibility only"
    ],
    "answer": 2,
    "explanation": "Number('abc') → NaN. NaN === NaN → false (IEEE 754). Global isNaN('') → true (coerces string to NaN first — wrong). Number.isNaN('') → false (correct — no coercion). NaN comparisons silently fail in assertion libraries when response values that should be numbers are actually strings — a common source of false-passing test scripts."
  },
  {
    "id": "js18",
    "category": "javascript",
    "question": "What is memoization and when is it relevant to automation and performance testing?",
    "options": [
      "Memoization is browser caching of static assets — equivalent to Cache-Control max-age headers",
      "Memoization means memorizing test steps so they can be replayed automatically",
      "Memoization caches the return value of a pure function keyed by its input arguments — subsequent calls with the same inputs return the cached result instantly instead of recomputing",
      "Memoization is only relevant for recursive algorithms; it has no practical use in test automation"
    ],
    "answer": 2,
    "explanation": "function memoize(fn) { const cache = {}; return (arg) => cache[arg] ?? (cache[arg] = fn(arg)); }. In test automation: memoize expensive fixture builders (e.g., JWT token generation, test data templates) to avoid redundant API calls across test cases. In performance analysis scripts: memoize percentile calculations when analyzing large .jtl files with Node.js."
  },
  {
    "id": "js19",
    "category": "javascript",
    "question": "How can JavaScript code quality directly impact the results of a performance test?",
    "options": [
      "JavaScript quality only affects front-end tests — JMeter and back-end load tests are immune to JavaScript issues",
      "JavaScript errors cause test failures but do not affect measured performance metrics",
      "Poor JavaScript (unoptimized render cycles, synchronous XHR, excessive DOM manipulation, memory leaks from event listeners) causes slow page rendering, UI thread blocking, and inflated client-side latency that can mask true server performance bottlenecks",
      "JavaScript only impacts performance if the application uses a front-end framework like React or Angular"
    ],
    "answer": 2,
    "explanation": "A performance test lead must distinguish client-side from server-side latency. If a page takes 3s to load, the server might respond in 200ms but JavaScript re-renders take 2.8s — the bottleneck is the browser, not the API. Tools: Chrome DevTools Performance tab, Lighthouse, WebPageTest. JMeter measures HTTP response time only — browser-side JS execution is not included without a browser-based driver."
  },
  {
    "id": "js20",
    "category": "javascript",
    "question": "How do you effectively debug a JavaScript API integration issue using browser DevTools?",
    "options": [
      "Add console.log statements throughout the code and read the browser console for errors",
      "Use the Network tab to inspect request payload, response body, headers, status code, and timing; use Sources tab with breakpoints to pause execution and inspect variable state; use the Application tab to inspect cookies, localStorage, and sessionStorage for stale auth tokens",
      "The best approach is to disable JavaScript and test with plain HTTP requests to isolate server behavior",
      "Use performance.now() timestamps around every function call to measure JavaScript execution time directly"
    ],
    "answer": 1,
    "explanation": "Network tab: check if the request payload matches expectations, status codes (401/429/500), response body for error messages, and timing waterfall for TTFB vs download time. Sources: set breakpoints before API calls to inspect variable state. Application: check if expired JWT tokens in localStorage cause 401s. These DevTools skills are essential for a performance test lead diagnosing front-end bottlenecks."
  },
  {
    "id": "js21",
    "category": "javascript",
    "question": "What values are falsy in JavaScript, and why does this matter in conditional logic?",
    "options": [
      "Only false and 0 are falsy; all other values including empty strings and null are truthy",
      "Falsy values are: false, 0, '' (empty string), null, undefined, NaN, and 0n (BigInt zero). All other values, including empty arrays and empty objects, are truthy",
      "null and undefined are falsy; 0 and '' are truthy because they have a defined type",
      "Falsy only applies to Boolean() conversion — if statements use a separate truthiness algorithm"
    ],
    "answer": 1,
    "explanation": "The complete falsy list: false, 0, -0, 0n, '' (empty string), null, undefined, NaN. Note: [] (empty array) and {} (empty object) are TRUTHY — a frequent bug. In test automation, checking if (response.data) fails when data is 0 or '' — use explicit checks (data !== null && data !== undefined) or nullish coalescing for precision."
  },
  {
    "id": "js22",
    "category": "javascript",
    "question": "What is the difference between null and undefined in JavaScript?",
    "options": [
      "null and undefined are completely interchangeable — they represent the same absence-of-value concept",
      "undefined means a variable was declared but never assigned a value; null is an explicit assignment indicating intentional absence of a value",
      "null is a primitive; undefined is an object type — that is why typeof null === 'object'",
      "undefined is only produced by the JavaScript engine; developers cannot assign undefined to a variable"
    ],
    "answer": 1,
    "explanation": "undefined: variable declared but uninitialized, missing function parameter, missing object property — produced automatically by the engine. null: deliberately set by a developer to signal 'no value here.' typeof null === 'object' is a historical JavaScript bug. Use null === undefined → false, but null == undefined → true (loose equality). In API response validation, distinguish between a missing field (undefined) and an explicitly nulled field (null)."
  },
  {
    "id": "js23",
    "category": "javascript",
    "question": "What is callback hell, and what modern JavaScript patterns eliminate it?",
    "options": [
      "Callback hell occurs when callbacks throw errors that propagate up multiple layers, causing crashes",
      "Callback hell is when too many event listeners are registered on the same DOM element",
      "Callback hell is deeply nested callback functions that become unreadable and hard to debug — often called the 'pyramid of doom'. It is eliminated by Promises (.then() chaining), async/await (flattens nesting completely), and named functions extracted from anonymous callbacks",
      "Callback hell is specific to Node.js — browser JavaScript handles callbacks differently and avoids nesting"
    ],
    "answer": 2,
    "explanation": "Callback hell: login(user, () => getProfile(id, () => getOrders(profileId, () => { /* deeply nested */ }))). Promise chain: login(user).then(getProfile).then(getOrders). async/await: const profile = await getProfile(await login(user)); const orders = await getOrders(profile.id). In automation frameworks, callback hell in test setup/teardown makes error tracing nearly impossible — async/await is the modern standard."
  },
  {
    "id": "js24",
    "category": "javascript",
    "question": "What is the fundamental difference between synchronous and asynchronous JavaScript execution?",
    "options": [
      "Synchronous code runs on the server; asynchronous code runs in the browser — they use different JavaScript engines",
      "Synchronous code executes line-by-line, blocking the thread until each operation completes. Asynchronous code initiates an operation (network call, timer, I/O) and registers a callback/Promise, allowing the thread to continue and process the result later when available",
      "Asynchronous code uses multiple threads — one per operation — while synchronous JavaScript is single-threaded",
      "The difference is only relevant for I/O operations; CPU-bound computations are always synchronous regardless of how they are written"
    ],
    "answer": 1,
    "explanation": "JS is single-threaded. Synchronous: const data = fs.readFileSync('file.txt') — blocks until done. Async: fs.readFile('file.txt', callback) — registers callback and moves on. In the browser, synchronous operations block the UI thread — a synchronous fetch would freeze the page. Performance test scripts that process large .jtl files should use async streaming rather than synchronous reads to avoid memory exhaustion."
  },
  {
    "id": "js25",
    "category": "javascript",
    "question": "What are the key differences between arrow functions and regular function declarations?",
    "options": [
      "Arrow functions are faster than regular functions because they skip prototype creation",
      "Arrow functions and regular functions are identical — the => syntax is just shorthand",
      "Arrow functions: no own this (lexical this from enclosing scope), no arguments object, cannot be used as constructors (no new), no prototype property. Regular functions: own this determined by call site, have arguments object, can be constructors",
      "Arrow functions cannot be assigned to variables; they can only be passed as arguments"
    ],
    "answer": 2,
    "explanation": "Arrow functions are not just shorthand — they have fundamental behavioral differences. No own this: ideal for callbacks inside class methods. No arguments: use rest parameters (...args) instead. Not a constructor: new (() => {}) throws TypeError. No prototype: arrow functions are lighter weight. In test automation, arrow functions in beforeEach/afterEach hooks reliably access the outer test context without .bind(this)."
  },
  {
    "id": "js26",
    "category": "javascript",
    "question": "What is lexical scope in JavaScript and how does it relate to closures?",
    "options": [
      "Lexical scope means variables are resolved at runtime based on the call stack at the time of invocation",
      "Lexical scope is only relevant in strict mode — sloppy mode uses dynamic scope instead",
      "Lexical scope means a function's variable lookup is determined by where the function is defined in the source code, not where it is called. Closures exist because inner functions capture their enclosing lexical scope — retaining access to outer variables even after the outer function returns",
      "Lexical scope applies only to let and const; var uses dynamic scope resolved at call time"
    ],
    "answer": 2,
    "explanation": "function outer() { const x = 10; function inner() { console.log(x); } return inner; } const fn = outer(); fn(); // logs 10 — inner retains lexical scope. This is why closures work: inner was defined inside outer's scope, so it captures x even after outer's call frame is gone. Every JavaScript function closes over its defining scope, making lexical scope the foundation of all closure-based patterns in automation helpers and module systems."
  },
  {
    "id": "js27",
    "category": "javascript",
    "question": "How does destructuring assignment work for both objects and arrays in JavaScript?",
    "options": [
      "Destructuring creates copies of values — mutations to destructured variables do not affect the original object",
      "Object destructuring requires all properties to be extracted; you cannot pick a subset",
      "Object destructuring extracts named properties by key: const { a, b } = obj. Array destructuring extracts by position: const [first, second] = arr. Both support default values, renaming (const { a: alias } = obj), and rest syntax (const { a, ...rest } = obj)",
      "Destructuring is only syntactic sugar for Object.assign and cannot be used with nested objects"
    ],
    "answer": 2,
    "explanation": "Object: const { status, data: { userId } } = apiResponse — nested destructuring extracts deeply. Array: const [, second, , fourth] = arr — skip positions with commas. Default: const { timeout = 5000 } = config. Renaming: const { response_time: responseTime } = metrics. In test automation, destructuring API responses makes assertions concise and readable: const { status, body } = await request.get('/api/health')."
  },
  {
    "id": "js28",
    "category": "javascript",
    "question": "What is the spread operator (...) and what are its key use cases in JavaScript?",
    "options": [
      "The spread operator only works with arrays — objects must use Object.assign() for spreading",
      "Spread creates a deep clone of the original structure, preventing all reference sharing",
      "The spread operator expands an iterable (array, object, string) into individual elements. Use cases: clone arrays/objects (shallow), merge multiple arrays/objects, pass array elements as function arguments, and combine configurations",
      "Spread and rest (...) are different operators — spread gathers values, rest expands them"
    ],
    "answer": 2,
    "explanation": "Array spread: [...arr1, ...arr2] merges arrays. Object spread: {...defaults, ...overrides} merges with override winning. Function args: Math.max(...numbers). Clone: const copy = {...original} (shallow). In test automation, spread is used to merge test configurations: const config = {...baseConfig, ...envConfig, timeout: 30000}. Note: spread = rest are the same syntax in different contexts — spread expands, rest collects."
  },
  {
    "id": "js29",
    "category": "javascript",
    "question": "What is the difference between optional chaining (?.) and how does it prevent runtime errors?",
    "options": [
      "Optional chaining (?.) is only available in TypeScript; standard JavaScript uses a separate guard syntax",
      "Optional chaining throws a TypeError if the property is undefined — it just provides cleaner syntax",
      "Optional chaining (?.) safely accesses nested properties — if any intermediate value is null or undefined, the expression short-circuits and returns undefined instead of throwing TypeError",
      "Optional chaining only works for method calls (?.()) and cannot be used for property access"
    ],
    "answer": 2,
    "explanation": "Without ?.: if (response && response.data && response.data.user && response.data.user.id). With ?.: response?.data?.user?.id — returns undefined if any step is null/undefined, never throws. Also works for method calls: arr?.find(x => x.id === id)?.name and bracket notation: obj?.['dynamic-key']. Critical in test scripts parsing API responses where optional fields may be absent in certain scenarios."
  },
  {
    "id": "js30",
    "category": "javascript",
    "question": "What is the nullish coalescing operator (??) and how does it differ from the OR operator (||)?",
    "options": [
      "?? and || are identical — they both return the right side when the left side is falsy",
      "?? returns the right side when the left is specifically null or undefined. || returns the right side for any falsy value (including 0, '', false) — making || wrong when 0 or empty string are valid values",
      "?? is the strict version of || — it additionally checks types before falling back",
      "?? only works with object properties; || must be used for variable assignments"
    ],
    "answer": 1,
    "explanation": "const port = config.port || 3000 — if config.port is 0 (valid port), this incorrectly falls back to 3000 because 0 is falsy. const port = config.port ?? 3000 — only falls back when config.port is null or undefined, so 0 is preserved correctly. In test automation: const timeout = options.timeout ?? 5000 preserves explicitly passed 0 (immediate timeout) rather than overriding it. Use ?? for defaults; use || for 'any falsy triggers fallback.'"
  },
  {
    "id": "js31",
    "category": "javascript",
    "question": "What is the difference between Array.slice() and Array.splice()?",
    "options": [
      "slice() modifies the original array and returns removed elements; splice() returns a new array without modifying the original",
      "slice() and splice() are identical — both return a new subarray without mutating the original",
      "slice(start, end) returns a shallow copy of array elements from start to end (non-inclusive) without mutating the original. splice(start, deleteCount, ...items) mutates the original array by removing and/or inserting elements in place, returning the removed elements",
      "slice() works on strings and arrays; splice() only works on arrays with numeric indices"
    ],
    "answer": 2,
    "explanation": "slice: const sub = arr.slice(1, 3) — arr unchanged, returns elements at index 1 and 2. splice: arr.splice(1, 2, 'new') — removes 2 elements at index 1, inserts 'new', mutates arr, returns removed elements. The mnemonic: splice = 'special' (mutates). In test automation, use slice to read subsets of test data without corrupting the fixture array; use splice only when intentional mutation is required."
  },
  {
    "id": "js32",
    "category": "javascript",
    "question": "How do JSON.stringify() and JSON.parse() work, and what data types do they lose?",
    "options": [
      "JSON.stringify() and JSON.parse() handle all JavaScript data types including functions, Date objects, and undefined values",
      "JSON.stringify() converts a JavaScript value to a JSON string; JSON.parse() converts a JSON string back to a JavaScript value. They lose: functions (omitted), undefined values (omitted), Date objects (converted to strings), Infinity/NaN (converted to null), and Symbol/BigInt (throws error)",
      "JSON.stringify() and JSON.parse() only work with primitive types — objects must be serialized manually",
      "JSON.parse() automatically converts date strings back to Date objects; no post-processing is needed"
    ],
    "answer": 1,
    "explanation": "JSON.stringify({fn: () => {}, date: new Date(), val: undefined}) → '{\"date\":\"2024-...\"}' — fn and val are silently dropped. JSON.parse(JSON.stringify(obj)) is a quick deep-clone technique but loses functions and undefined. In test automation: always JSON.stringify request bodies before logging, and use JSON.parse on response text when the HTTP client returns strings. Awareness of Date serialization is critical for API contract testing."
  },
  {
    "id": "js33",
    "category": "javascript",
    "question": "What is the hoisting difference between a function declaration and a function expression?",
    "options": [
      "Both function declarations and function expressions are fully hoisted and available before their line in the code",
      "Neither function declarations nor function expressions are hoisted — both must be defined before use",
      "Function declarations are fully hoisted — the entire function body is available anywhere in its scope before the declaration line. Function expressions (const fn = function() {}) follow variable hoisting rules — var version is hoisted as undefined (calling it throws TypeError); let/const version is in the TDZ (calling it throws ReferenceError)",
      "The hoisting difference only applies in strict mode; in sloppy mode both behave identically"
    ],
    "answer": 2,
    "explanation": "greet(); function greet() { return 'hello'; } // works — fully hoisted. greet2(); const greet2 = function() { return 'hi'; } // ReferenceError — TDZ. This is why some style guides require function declarations for utilities and const arrow functions for callbacks. In test files, calling a helper function defined later in the file is only safe if it is a function declaration."
  },
  {
    "id": "js34",
    "category": "javascript",
    "question": "What are higher-order functions and why are they central to JavaScript?",
    "options": [
      "Higher-order functions are async functions that return Promises — the 'higher order' refers to the microtask priority queue",
      "Higher-order functions are functions with more than three parameters — complex signatures for advanced APIs",
      "A higher-order function either takes one or more functions as arguments, returns a function, or both. They enable functional programming patterns: map, filter, reduce, and every callback-based API rely on this concept",
      "Higher-order functions only exist in ES6+ — older JavaScript had no concept of functions-as-arguments"
    ],
    "answer": 2,
    "explanation": "map(fn), filter(fn), reduce(fn) are higher-order functions. setTimeout(fn, ms) takes a function. Array.prototype.sort((a,b) => a-b) takes a comparator function. Returning a function: function multiplier(x) { return (y) => x * y; } const double = multiplier(2). In test automation, higher-order functions are used for retry wrappers (retryOnFailure(testFn)), fixture factories, and custom assertion builders."
  },
  {
    "id": "js35",
    "category": "javascript",
    "question": "What is currying in JavaScript and when is it practically useful?",
    "options": [
      "Currying is a technique that combines multiple functions into a single pipeline using the pipe operator (|>)",
      "Currying converts a function that takes multiple arguments into a sequence of functions each taking one argument. Instead of fn(a, b, c), curried form is fn(a)(b)(c)",
      "Currying is only a theoretical concept — JavaScript has no syntax to curry functions natively",
      "Currying is the same as partial application — both permanently fix all arguments at once"
    ],
    "answer": 1,
    "explanation": "const add = (a) => (b) => a + b; const add5 = add(5); add5(3) → 8. Practical uses: const log = (level) => (message) => console.log(`[${level}] ${message}`); const warn = log('WARN'); warn('Timeout exceeded'). In test automation: const assertStatus = (expected) => (response) => expect(response.status).toBe(expected); [200, 201].map(assertStatus) creates reusable status validators. Note: currying takes ONE argument at a time; partial application can fix multiple arguments at once."
  },
  {
    "id": "js36",
    "category": "javascript",
    "question": "What is the prototype chain in JavaScript and how does inheritance work through it?",
    "options": [
      "The prototype chain only applies to ES6 classes; object literals use a separate inheritance mechanism",
      "Every JavaScript object has an internal [[Prototype]] link to another object (or null). Property lookup walks this chain: if a property is not found on the object, JavaScript looks at its prototype, then the prototype's prototype, until null is reached — enabling inheritance without copying",
      "Prototypes are a performance optimization — they have no effect on property lookup or inheritance",
      "JavaScript uses classical inheritance like Java — classes copy their parent's properties to each instance at construction time"
    ],
    "answer": 1,
    "explanation": "const arr = []; arr.__proto__ === Array.prototype → true. Array.prototype.__proto__ === Object.prototype → true. Object.prototype.__proto__ === null. When you call arr.map(), JS checks arr (not found) → Array.prototype (found! Returns the method). ES6 classes are syntactic sugar over prototype-based inheritance. Understanding prototypes is essential for debugging 'is not a function' errors and understanding how Object.create(), hasOwnProperty(), and instanceof work."
  },
  {
    "id": "js37",
    "category": "javascript",
    "question": "What does 'use strict' do in JavaScript and why is it recommended?",
    "options": [
      "'use strict' enables TypeScript type checking in a regular JavaScript file",
      "'use strict' makes JavaScript run in a separate process to prevent memory sharing between scripts",
      "'use strict' enables a restricted mode that: throws errors for undeclared variable assignments, disallows duplicate parameter names, makes this undefined (instead of global) in standalone functions, disallows with statement, and prevents deleting variables — catching common bugs silently ignored in sloppy mode",
      "'use strict' is automatically applied by all modern browsers; adding it manually has no effect after ES6"
    ],
    "answer": 2,
    "explanation": "'use strict'; x = 5 → ReferenceError (without strict: creates global variable silently). Strict mode is enabled: file-level by placing 'use strict' at the top, function-level inside a function, or automatically in ES modules (import/export) and class bodies. In test automation, strict mode prevents global variable leakage between tests and catches this-binding bugs in helper functions."
  },
  {
    "id": "js38",
    "category": "javascript",
    "question": "What is the difference between forEach() and map() for iterating arrays?",
    "options": [
      "forEach() is faster than map() because it does not create a new array",
      "forEach() and map() are identical — both return a new array of the same length",
      "forEach() executes a callback for each element but always returns undefined — use it for side effects only. map() executes a callback and returns a new array of the transformed values — use it when you need the results",
      "map() modifies the original array; forEach() creates a copy before iterating"
    ],
    "answer": 2,
    "explanation": "forEach: results.forEach(r => console.log(r)) — side effect, return value of callback is discarded. map: const ids = responses.map(r => r.id) — collect transformed values. A common bug: const ids = results.forEach(r => r.id) → ids is always undefined. forEach cannot be chained; map returns a new array that can be immediately filtered or reduced. In test automation: map is used to extract assertion values from response arrays."
  },
  {
    "id": "js39",
    "category": "javascript",
    "question": "What are template literals and what advantages do they have over string concatenation?",
    "options": [
      "Template literals are a server-side feature for generating HTML templates — they are not part of the JavaScript language itself",
      "Template literals use backtick syntax (``) and support: multi-line strings without \\n, embedded expressions with ${}, and tagged templates for custom processing. They replace string concatenation with readable interpolation",
      "Template literals are identical to regular strings — the only difference is the backtick delimiter",
      "Template literals automatically escape HTML entities, making them safe for DOM injection"
    ],
    "answer": 1,
    "explanation": "const url = `${baseUrl}/api/v${version}/users/${userId}`; vs baseUrl + '/api/v' + version + '/users/' + userId. Multi-line: const query = `SELECT * FROM users WHERE id = ${id} AND active = true`. Tagged templates: html`<div>${userInput}</div>` — enables safe escaping libraries. In test automation: template literals make error messages, API URL construction, and SQL query building dramatically more readable and less error-prone."
  },
  {
    "id": "js40",
    "category": "javascript",
    "question": "How does destructuring work in function parameters and what problems does it solve?",
    "options": [
      "Destructuring in function parameters is only supported for array arguments, not object arguments",
      "Parameter destructuring requires all properties to be listed; you cannot use default values inside the pattern",
      "Function parameter destructuring extracts properties directly in the signature: function process({ id, status, data = [] }) {} — the caller passes an object, the function accesses named properties with optional defaults, avoiding positional argument ordering issues",
      "Destructuring in parameters creates copies of the values; mutations inside the function do not affect the caller's object"
    ],
    "answer": 2,
    "explanation": "Without destructuring: function render(config) { const { theme, timeout, retry } = config; } — two steps. With parameter destructuring: function render({ theme = 'dark', timeout = 5000, retry = 3 } = {}) — single step with defaults. The = {} default handles the case where no argument is passed. In test frameworks, this pattern is used extensively for options objects: test('name', { tag: '@smoke', timeout: 30000 }, async () => {})."
  },
  {
    "id": "js41",
    "category": "javascript",
    "question": "What is the difference between mutable and immutable data in JavaScript, and why does it matter for testing?",
    "options": [
      "All JavaScript primitive types are mutable; objects are immutable by default",
      "Immutability requires TypeScript — standard JavaScript has no way to enforce it",
      "Primitives (numbers, strings, booleans, null, undefined, Symbol, BigInt) are immutable — operations return new values. Objects and arrays are mutable — references are shared, so mutating them affects all holders of that reference. Object.freeze() enforces shallow immutability at runtime",
      "const makes data immutable — reassignment and property mutation are both prevented by const"
    ],
    "answer": 2,
    "explanation": "const str = 'hello'; str[0] = 'H' — string is unchanged, primitives are immutable. const obj = {x: 1}; obj.x = 2 — object IS mutated; const only prevents reassignment of the variable. In test automation: shared mutable test fixtures cause test pollution — test A mutates the fixture, test B fails unexpectedly. Solution: always create fresh copies of fixtures per test using structuredClone(), spread, or factory functions rather than sharing one mutable object."
  },
  {
    "id": "js42",
    "category": "javascript",
    "question": "How does Promise chaining (.then()) work and what is the correct pattern for error handling in a chain?",
    "options": [
      "Each .then() in a chain runs in parallel — the chain is just a list of operations executed simultaneously",
      "Errors in a Promise chain must be caught with individual .catch() after each .then()",
      "Each .then() receives the resolved value from the previous step and returns a new Promise. A single .catch() at the end handles rejections from any step in the chain. Returning a value from .then() wraps it in a resolved Promise; throwing or returning a rejected Promise passes to .catch()",
      ".then() chains are deprecated in favor of async/await and should not be used in new code"
    ],
    "answer": 2,
    "explanation": "fetch('/api/login').then(r => r.json()).then(data => getProfile(data.userId)).then(profile => renderDashboard(profile)).catch(err => handleError(err)). The .catch() handles any error from fetch, .json(), getProfile, or renderDashboard. Returning from .then() transforms the value; throwing passes to .catch(). Chains are still used for concise pipelines; async/await is preferred for complex branching. Both are valid; understanding both is required for reading legacy code."
  },
  {
    "id": "js43",
    "category": "javascript",
    "question": "What is the difference between setTimeout() and setInterval(), and how do you properly clean them up?",
    "options": [
      "setTimeout() repeats indefinitely; setInterval() fires exactly once after the delay",
      "Both setTimeout() and setInterval() run in a separate thread; they do not affect the main event loop",
      "setTimeout(fn, ms) fires fn once after at least ms milliseconds. setInterval(fn, ms) fires fn repeatedly every ms milliseconds. Both return a numeric ID; clearTimeout(id) and clearInterval(id) cancel them. Without cleanup, setInterval() runs forever and is a memory leak source",
      "setTimeout() with 0ms delay is synchronous; setInterval() always waits the full interval before the first fire"
    ],
    "answer": 2,
    "explanation": "Cleanup pattern: const id = setInterval(() => poll(), 1000); // later: clearInterval(id). Forgetting clearInterval in test teardown means the polling continues after the test ends, interfering with subsequent tests. setTimeout is used for delays and retries: await new Promise(resolve => setTimeout(resolve, 500)). setInterval is used for polling — prefer modern alternatives like AbortController + fetch or WebSockets when available."
  },
  {
    "id": "js44",
    "category": "javascript",
    "question": "What are async stack traces and why are they harder to debug than synchronous ones?",
    "options": [
      "Async stack traces are identical to synchronous ones — the JavaScript engine always preserves the full call chain",
      "Async stack traces are only visible in production environments with source maps enabled",
      "Async stack traces lose the calling context across await boundaries because the call stack is cleared when a Promise suspends and resumes. Debuggers show the stack at the resume point, not the original call site — making it appear as if async errors originate from unrelated code",
      "Async stack traces only affect code using callbacks; async/await always produces complete stack traces"
    ],
    "answer": 2,
    "explanation": "Synchronous: the full call stack A → B → C is visible in the error. Async: after await, only the continuation is on the stack — the caller that triggered the chain may not appear. V8 (Node.js/Chrome) supports 'async stack traces' that reconstruct the logical chain, enabled by default in DevTools and Node.js --async-stack-traces flag. In test automation, wrap await calls in try/catch with descriptive error messages to compensate for truncated async traces when diagnosing failures."
  },
  {
    "id": "js45",
    "category": "javascript",
    "question": "What is the difference between a synchronous exception and an unhandled async rejection?",
    "options": [
      "Both synchronous exceptions and async rejections crash the process immediately if not caught",
      "Synchronous exceptions can be caught with try/catch; async rejections cannot be caught and must use .catch()",
      "A synchronous exception (throw new Error()) propagates up the call stack immediately and can be caught with try/catch. An unhandled async rejection (a rejected Promise with no .catch() or try/catch around await) does not propagate synchronously — it triggers the unhandledRejection event, which is a warning in older Node and a fatal crash in Node 15+",
      "Async rejections are always silent — they never crash the process or produce console output"
    ],
    "answer": 2,
    "explanation": "process.on('unhandledRejection', (err) => { console.error(err); process.exit(1); }) — this global handler catches async rejections that were missed. In test automation, unhandled rejections in page.evaluate() or background API calls can cause tests to appear to pass while errors are silently swallowed. Always add unhandledRejection listeners in test setup and ensure all async operations in test code have proper await + try/catch."
  },
  {
    "id": "js46",
    "category": "javascript",
    "question": "How does 'use strict' specifically help when debugging JavaScript code?",
    "options": [
      "'use strict' adds verbose error messages to all built-in JavaScript errors",
      "'use strict' enables a step-debugger mode that pauses execution at every line",
      "Strict mode converts silent failures into thrown errors: undeclared variable access (ReferenceError instead of global creation), duplicate parameter names (SyntaxError), this === undefined in standalone functions (instead of window), and read-only property assignments (TypeError) — making bugs surface immediately rather than causing subtle downstream failures",
      "'use strict' is only useful in production; during debugging, sloppy mode is preferred for flexibility"
    ],
    "answer": 2,
    "explanation": "Without strict: typo like resutl = value silently creates a global variable resutl — the original result variable is never assigned, causing a mysterious undefined bug later. With strict: ReferenceError: resutl is not defined — immediately points to the line. In automation frameworks and test helpers, strict mode is effectively mandatory because silent failures in test setup produce false passes — exactly what QA is designed to prevent."
  },
  {
    "id": "js47",
    "category": "javascript",
    "question": "What is a JavaScript generator function and when would you use one in a test context?",
    "options": [
      "Generator functions are deprecated — they were replaced by async/await in ES2017",
      "A generator function (function*) returns an iterator that can pause and resume execution at yield points. It produces values on demand rather than computing all at once, enabling lazy evaluation of large sequences",
      "Generator functions are only useful for creating infinite loops — they have no practical application in testing",
      "Generators execute all their code synchronously when called — the function* syntax is just for creating array-like objects"
    ],
    "answer": 1,
    "explanation": "function* idGenerator() { let i = 1; while(true) { yield `test-user-${i++}`; } } const gen = idGenerator(); gen.next().value → 'test-user-1'. In test automation: generators produce unique test data IDs without pre-generating large arrays — useful for parameterized tests with large datasets. Also used in Redux Sagas (generator-based async middleware) and async iteration (for await...of). Key: yield pauses, .next() resumes."
  },
  {
    "id": "js48",
    "category": "javascript",
    "question": "What are WeakMap and WeakSet, and why are they important for memory management in long-running code?",
    "options": [
      "WeakMap and WeakSet are deprecated versions of Map and Set — they exist only for backward compatibility",
      "WeakMap keys and WeakSet values hold weak references — if the only remaining reference to a key object is the WeakMap entry, the object can be garbage collected. This prevents memory leaks when associating metadata with objects that may be discarded",
      "WeakMap and WeakSet automatically compress their data after every 1000 entries to save memory",
      "WeakMap and WeakSet are identical to Map and Set — the 'weak' prefix refers to weaker type checking"
    ],
    "answer": 1,
    "explanation": "const cache = new WeakMap(); cache.set(domNode, metadata) — if domNode is removed from the DOM and no other reference holds it, both the node AND its cache entry are garbage collected. With regular Map, the map entry keeps the node alive even after removal. In test automation: WeakMap is used to associate test state with page objects or browser contexts without preventing their cleanup, avoiding memory growth in long-running test suites."
  },
  {
    "id": "js49",
    "category": "javascript",
    "question": "What is Promise.allSettled() and when should it be used instead of Promise.all()?",
    "options": [
      "Promise.allSettled() is faster than Promise.all() because it does not wait for all promises to resolve",
      "Promise.allSettled() and Promise.all() are identical — the difference is only in the returned object format",
      "Promise.allSettled() waits for all promises to settle (either fulfill or reject) and returns an array of {status, value/reason} objects for each — it never rejects early. Use it when you need results from all operations regardless of individual failures",
      "Promise.allSettled() automatically retries rejected promises — making it ideal for flaky network calls"
    ],
    "answer": 2,
    "explanation": "Promise.all([a(), b(), c()]) — if b() rejects, the whole thing rejects immediately, losing results from a() and c(). Promise.allSettled([a(), b(), c()]) → [{status:'fulfilled', value:...}, {status:'rejected', reason:...}, {status:'fulfilled', value:...}]. In test automation: use allSettled when running parallel cleanup operations (delete test users, close sessions) where you want to attempt all cleanups even if some fail, then report all failures together."
  },
  {
    "id": "js50",
    "category": "javascript",
    "question": "As a Performance Test Lead, which JavaScript concepts are most critical to master and why?",
    "options": [
      "Only async/await and Promises matter — all other JavaScript concepts are irrelevant to performance testing",
      "JavaScript is a front-end technology — Performance Test Leads focused on back-end systems need no JavaScript knowledge",
      "Prototype chains and generator functions are the most critical concepts for performance test scripts",
      "Event loop and async model (to understand non-blocking behavior), Promises and async/await (for parallel load generation), closures and memory leaks (for stable long-running test scripts), debouncing/throttling (to understand client-side request patterns), DevTools profiling (to separate client vs server bottlenecks), and JSON serialization (for API request/response handling)"
    ],
    "answer": 3,
    "explanation": "A Performance Test Lead needs JavaScript on multiple fronts: (1) writing k6 or Playwright-based load test scripts — async/await and Promise.all() for parallel requests; (2) analyzing front-end performance — DevTools, event loop, synchronous vs async render blocking; (3) maintaining stable test harnesses — memory leak prevention with closures and WeakMap; (4) interpreting application behavior under load — debounce/throttle patterns affecting observed TPS. JavaScript fluency separates leads who can debug full-stack bottlenecks from those who can only read JMeter dashboards."
  },
  {
    "id": "pw1",
    "category": "playwright",
    "question": "What is TypeScript's primary benefit for a Playwright test suite?",
    "options": [
      "It makes tests run faster than JavaScript",
      "It catches errors at compile time before tests ever run",
      "It automatically generates test cases",
      "It eliminates the need for assertions"
    ],
    "answer": 1,
    "explanation": "TypeScript is a statically typed superset of JavaScript that catches errors at compile time. In a Playwright suite, this means typos in locator strings, missing await keywords, and incorrect fixture shapes are caught before the test runs."
  },
  {
    "id": "pw2",
    "category": "playwright",
    "question": "In TypeScript, when should you use 'interface' over 'type' in a Playwright test framework?",
    "options": [
      "When defining fixture compositions and utility shapes",
      "When you expect consumers to extend the shape via declaration merging",
      "When working with primitive types and unions",
      "When defining tuple types"
    ],
    "answer": 1,
    "explanation": "Use interface when you expect consumers to extend the shape (e.g., a BasePage contract) since interfaces support declaration merging. Use type for fixture composition, union shapes, and utility types."
  },
  {
    "id": "pw3",
    "category": "playwright",
    "question": "What happens if you forget 'await' before a Playwright assertion like expect(page).toHaveURL('/home')?",
    "options": [
      "The test throws an immediate synchronous error",
      "The assertion is queued but never awaited, so the test may pass by coincidence",
      "Playwright automatically adds the await at runtime",
      "The test hangs indefinitely waiting for resolution"
    ],
    "answer": 1,
    "explanation": "Every Playwright action returns a Promise. Without await, the assertion fires but the test continues immediately without waiting for it to resolve. The test may pass by coincidence. Enabling strict mode and the no-floating-promises ESLint rule catches this."
  },
  {
    "id": "pw4",
    "category": "playwright",
    "question": "What is a generic in TypeScript as used in Playwright's base.extend<T>()?",
    "options": [
      "A runtime type check that validates fixture properties",
      "A type variable that makes functions work over multiple types without losing type safety",
      "A special class that automatically generates test data",
      "A decorator that adds metadata to test functions"
    ],
    "answer": 1,
    "explanation": "A generic is a type variable that enables functions and classes to work with multiple types while maintaining type safety. In Playwright, base.extend<T>() uses generics so that fixture properties inside tests get proper autocomplete and type checking."
  },
  {
    "id": "pw5",
    "category": "playwright",
    "question": "Why does a Page Object class in Playwright use 'private readonly page: Page' in its constructor?",
    "options": [
      "To allow tests to directly access the page object for flexibility",
      "To prevent reassignment after construction and hide page from tests, enforcing the action layer",
      "To enable multiple page instances within a single test",
      "To automatically close the page when the test ends"
    ],
    "answer": 1,
    "explanation": "The private modifier prevents tests from bypassing the action layer to call page.click() directly. The readonly modifier prevents reassignment after construction. Together they enforce clean encapsulation where tests must use defined action methods."
  },
  {
    "id": "pw6",
    "category": "playwright",
    "question": "What does path aliasing (e.g., '@/*') in tsconfig.json accomplish in a Playwright project?",
    "options": [
      "It automatically resolves npm package names",
      "It replaces deep relative import paths with short, stable aliases",
      "It creates symbolic links in the file system",
      "It configures Playwright's test file discovery pattern"
    ],
    "answer": 1,
    "explanation": "Path aliases let you write clean imports like '@/actions/HomePageActions' instead of fragile relative paths like '../../../actions/HomePageActions'. Moving test files never breaks imports. Playwright handles the alias resolution via its built-in TypeScript transform."
  },
  {
    "id": "pw7",
    "category": "playwright",
    "question": "Which check is NOT enabled by 'strict: true' in tsconfig.json?",
    "options": [
      "strictNullChecks",
      "noImplicitAny",
      "strictPropertyInitialization",
      "noUnusedLocals"
    ],
    "answer": 3,
    "explanation": "strict: true enables strictNullChecks, noImplicitAny, strictFunctionTypes, strictPropertyInitialization, and strictBindCallApply. noUnusedLocals is a separate compiler option not included in the strict bundle."
  },
  {
    "id": "pw8",
    "category": "playwright",
    "question": "Why should you use 'for...of' instead of 'forEach' for async iterations in Playwright tests?",
    "options": [
      "forEach is deprecated in modern JavaScript",
      "for...of is faster for large arrays",
      "forEach does not await async callbacks, causing iterations to run in parallel",
      "for...of automatically retries failed iterations"
    ],
    "answer": 2,
    "explanation": "Array.forEach does not await async callbacks — they fire in parallel and errors can be swallowed. for...of respects await, ensuring sequential execution. This is critical in Playwright when each navigation must complete before testing the next element."
  },
  {
    "id": "pw9",
    "category": "playwright",
    "question": "When is using 'as any' acceptable in a Playwright test framework?",
    "options": [
      "In test assertions to bypass strict type checking",
      "In public action methods for convenience",
      "At integration boundaries with untyped Playwright internals, isolated in a private method",
      "Anywhere the developer finds type annotations inconvenient"
    ],
    "answer": 2,
    "explanation": "The 'as any' assertion should only be used at boundaries with untyped internals (like accessing Playwright's private _options), isolated in a single private method, with an immediate re-assertion to a real type and a fallback value."
  },
  {
    "id": "pw10",
    "category": "playwright",
    "question": "What is the correct hierarchy of Playwright's core objects?",
    "options": [
      "Page → BrowserContext → Browser",
      "Browser → BrowserContext → Page",
      "BrowserContext → Browser → Page",
      "Browser → Page → BrowserContext"
    ],
    "answer": 1,
    "explanation": "Browser is the top-level object (a single Chromium/Firefox/WebKit instance). BrowserContext is an isolated session within a browser (like an incognito window). Page is a single tab within a context. Each browser can have multiple contexts, each context can have multiple pages."
  },
  {
    "id": "pw11",
    "category": "playwright",
    "question": "How does a Playwright Locator differ from an ElementHandle?",
    "options": [
      "Locator is synchronous while ElementHandle is asynchronous",
      "Locator is a lazy query re-evaluated on each action; ElementHandle is a direct reference that can go stale",
      "ElementHandle supports auto-waiting but Locator does not",
      "There is no practical difference; they are interchangeable"
    ],
    "answer": 1,
    "explanation": "A Locator is a lazy representation of an element query — it re-runs the selector on every action, so it never goes stale. An ElementHandle is a direct reference to a DOM node that can become stale if the DOM changes. Playwright recommends Locators for all modern tests."
  },
  {
    "id": "pw12",
    "category": "playwright",
    "question": "What does Playwright's auto-waiting mechanism wait for before performing an action?",
    "options": [
      "A fixed 500ms delay after page load",
      "The element to be attached, visible, stable, enabled, and receiving events",
      "Only for the element to exist in the DOM",
      "The network to become completely idle"
    ],
    "answer": 1,
    "explanation": "Playwright's auto-waiting checks multiple conditions before acting: the element must be attached to the DOM, visible, stable (not animating), enabled, and able to receive events (not obscured). This eliminates the need for manual waits in most cases."
  },
  {
    "id": "pw13",
    "category": "playwright",
    "question": "What is the difference between expect(locator).toBeVisible() and locator.isVisible()?",
    "options": [
      "They are functionally identical",
      "toBeVisible() is an assertion that auto-retries and fails the test; isVisible() returns a boolean without failing",
      "isVisible() auto-retries while toBeVisible() checks once",
      "toBeVisible() checks CSS display property; isVisible() checks the viewport"
    ],
    "answer": 1,
    "explanation": "expect(locator).toBeVisible() is a web-first assertion that auto-retries until the condition is met or times out, failing the test on timeout. locator.isVisible() is an instant boolean check with no retries — use it for conditional logic, not assertions."
  },
  {
    "id": "pw14",
    "category": "playwright",
    "question": "What are Playwright 'projects' used for in playwright.config.ts?",
    "options": [
      "Organizing test files into separate Git repositories",
      "Running the same tests across different browsers, devices, or configuration variants",
      "Creating separate databases for each test run",
      "Generating project documentation from test files"
    ],
    "answer": 1,
    "explanation": "Projects let you run the same test suite across different configurations — different browsers (Chromium, Firefox, WebKit), device emulations (mobile, tablet), or custom settings. Each project can have its own viewport, user agent, and other options."
  },
  {
    "id": "pw15",
    "category": "playwright",
    "question": "How does toHaveScreenshot() work for visual regression testing in Playwright?",
    "options": [
      "It compares the current screenshot against a human-approved baseline image",
      "It uses AI to determine if the page looks correct",
      "It only checks that the page rendered without errors",
      "It compares the DOM structure against a saved snapshot"
    ],
    "answer": 0,
    "explanation": "toHaveScreenshot() captures a screenshot and compares it pixel-by-pixel against a stored baseline image. On first run, it creates the baseline. On subsequent runs, it highlights differences. Failed comparisons produce a diff image showing what changed."
  },
  {
    "id": "pw16",
    "category": "playwright",
    "question": "When should you use waitForLoadState('networkidle') vs 'domcontentloaded'?",
    "options": [
      "networkidle for static pages; domcontentloaded for dynamic SPAs",
      "domcontentloaded when you need the HTML parsed; networkidle when you need all async data loaded",
      "They are interchangeable in modern applications",
      "Always use networkidle for maximum reliability"
    ],
    "answer": 1,
    "explanation": "domcontentloaded fires when HTML is parsed but before images/subframes load — fast but may miss dynamic content. networkidle waits until no network requests for 500ms — slower but ensures async data is loaded. Use networkidle sparingly as it can cause flaky tests with long-polling."
  },
  {
    "id": "pw17",
    "category": "playwright",
    "question": "What does 'fullyParallel: true' do in playwright.config.ts?",
    "options": [
      "Runs all tests in a single worker for maximum speed",
      "Runs each test file in parallel but tests within a file are sequential",
      "Runs every individual test in parallel across workers, even tests within the same file",
      "Enables parallel execution only in CI environments"
    ],
    "answer": 2,
    "explanation": "fullyParallel: true runs every individual test in its own worker, even tests within the same describe block. Without it, tests within a file run sequentially in one worker. The trade-off is higher parallelism vs. inability to share state between tests in the same file."
  },
  {
    "id": "pw18",
    "category": "playwright",
    "question": "How does Playwright's retry mechanism work when a test fails?",
    "options": [
      "It re-runs the entire test suite",
      "It retries only the failed test in a fresh browser context",
      "It retries the specific failed assertion within the same test run",
      "It only retries on timeout errors, not assertion failures"
    ],
    "answer": 1,
    "explanation": "When a test fails, Playwright retries the entire test in a fresh browser context. The retry count is configurable separately for CI and local runs (e.g., retries: process.env.CI ? 2 : 0). Each retry is a completely fresh execution with new browser state."
  },
  {
    "id": "pw19",
    "category": "playwright",
    "question": "What does 'forbidOnly: !!process.env.CI' do in Playwright configuration?",
    "options": [
      "Prevents running tests marked with .only in CI, catching accidentally committed focus tags",
      "Disables all test filtering in CI environments",
      "Forces all tests to run in sequential order in CI",
      "Prevents test files from importing external modules in CI"
    ],
    "answer": 0,
    "explanation": "forbidOnly causes the test run to fail if any test is marked with .only when running in CI. This catches the common mistake of accidentally committing a focused test (test.only) that would skip all other tests in the pipeline."
  },
  {
    "id": "pw20",
    "category": "playwright",
    "question": "What is the difference between actionTimeout, navigationTimeout, and global timeout in Playwright?",
    "options": [
      "They are all the same timeout with different names",
      "actionTimeout limits individual actions like click/fill; navigationTimeout limits goto/reload; global timeout limits the entire test",
      "actionTimeout applies to assertions; navigationTimeout to page loads; global timeout to the test suite",
      "Only global timeout is configurable; the others are fixed"
    ],
    "answer": 1,
    "explanation": "actionTimeout sets the max time for individual actions (click, fill, etc.). navigationTimeout sets the max time for navigation actions (goto, reload). The global timeout sets the absolute max time for an entire test including retries. They can be configured independently."
  },
  {
    "id": "pw21",
    "category": "playwright",
    "question": "What is the Page Object Model (POM) 'Actions' variant used in some Playwright frameworks?",
    "options": [
      "A pattern that maps each page to a class exposing raw element locators",
      "A pattern that encapsulates locators as private and exposes only high-level user workflow methods",
      "A pattern that generates page objects from API schema definitions",
      "A pattern that requires inheritance from a single BasePage class"
    ],
    "answer": 1,
    "explanation": "The Actions variant encapsulates locators as private and exposes only high-level user-facing methods (e.g., login(), addToCart()). Unlike traditional POM which exposes locators publicly, this hides implementation details and makes tests read like user stories."
  },
  {
    "id": "pw22",
    "category": "playwright",
    "question": "How do Playwright fixtures differ from beforeEach/afterEach hooks?",
    "options": [
      "They are just a different syntax for the same lifecycle hooks",
      "Fixtures provide scoped, composable, on-demand setup/teardown that only runs when a test requests the fixture",
      "Fixtures run before the entire test suite; hooks run before each test",
      "Hooks support async operations but fixtures do not"
    ],
    "answer": 1,
    "explanation": "Playwright fixtures are lazy — they only set up when a test requests them via its parameter list. They compose naturally (fixtures can depend on other fixtures), and teardown happens automatically. Unlike hooks, fixtures provide type-safe dependency injection."
  },
  {
    "id": "pw23",
    "category": "playwright",
    "question": "What does { auto: true } do on a Playwright fixture?",
    "options": [
      "It makes the fixture available globally without importing",
      "It automatically runs the fixture for every test, even if the test doesn't request it",
      "It auto-generates test data for the fixture",
      "It enables automatic retry for fixture setup failures"
    ],
    "answer": 1,
    "explanation": "A fixture with { auto: true } runs automatically for every test without the test needing to list it as a parameter. Common uses include auto-screenshot on failure, global logging, or authentication state setup."
  },
  {
    "id": "pw24",
    "category": "playwright",
    "question": "What is fixture chaining in Playwright?",
    "options": [
      "Running fixtures in alphabetical order",
      "Extending a base test with layered fixtures where each layer adds new capabilities on top of the previous",
      "Linking fixture files via import statements without extension",
      "Running the same fixture across multiple test files simultaneously"
    ],
    "answer": 1,
    "explanation": "Fixture chaining means creating layers of test extensions. A base test might add authentication fixtures, then a homepage test extends that with page-specific action fixtures. Each layer can use fixtures from the previous layer, building up capabilities incrementally."
  },
  {
    "id": "pw25",
    "category": "playwright",
    "question": "How do test.describe and test.use interact in Playwright?",
    "options": [
      "test.describe groups tests logically; test.use overrides configuration for that describe scope",
      "test.describe runs tests in parallel; test.use runs them sequentially",
      "test.describe is for unit tests; test.use is for integration tests",
      "They cannot be used together"
    ],
    "answer": 0,
    "explanation": "test.describe groups related tests together. test.use overrides project-level configuration (viewport, locale, permissions, etc.) for all tests within that describe block. The settings from test.use apply only to the enclosing describe scope."
  },
  {
    "id": "pw26",
    "category": "playwright",
    "question": "Why should a Playwright project use environment variables for base URLs?",
    "options": [
      "Environment variables are faster to read than config files",
      "It allows the same tests to run against dev, staging, and production without code changes",
      "Hardcoded URLs cause TypeScript compilation errors",
      "Playwright only supports URLs from environment variables"
    ],
    "answer": 1,
    "explanation": "Using environment variables lets the same test suite target different environments by changing a single variable. This is essential for CI/CD pipelines that promote code through dev → staging → production without modifying test code."
  },
  {
    "id": "pw27",
    "category": "playwright",
    "question": "What is a data-driven test in Playwright?",
    "options": [
      "A test that only runs when the database is available",
      "A test that uses parameterized data to run the same logic with different inputs",
      "A test that validates database state after each action",
      "A test generated automatically from API schema definitions"
    ],
    "answer": 1,
    "explanation": "Data-driven testing uses parameterized data (arrays, CSV files, JSON) to run the same test logic with different inputs. In Playwright, you can use for...of loops or test.describe with arrays to create multiple test instances from a single test template."
  },
  {
    "id": "pw28",
    "category": "playwright",
    "question": "Why should you never call page.waitForTimeout() in Playwright tests?",
    "options": [
      "It was removed in Playwright v1.0",
      "It introduces arbitrary delays that slow tests and mask real timing issues",
      "It only works in headless mode",
      "It causes memory leaks in the browser context"
    ],
    "answer": 1,
    "explanation": "page.waitForTimeout() is a hard sleep that always waits the full duration even if the condition is met instantly, and may not wait long enough on slow systems. Use Playwright's built-in auto-waiting, web-first assertions, or explicit waitFor conditions instead."
  },
  {
    "id": "pw29",
    "category": "playwright",
    "question": "How can a single Playwright test handle mobile vs. desktop layout differences?",
    "options": [
      "Write separate test files for each device",
      "Use projects with different viewports and conditionally check layout elements based on viewport size",
      "Playwright automatically adapts tests to any viewport",
      "Use CSS media queries inside test assertions"
    ],
    "answer": 1,
    "explanation": "Configure different Playwright projects for mobile and desktop viewports. Within tests, you can conditionally check layout-specific elements (hamburger menu on mobile vs. full nav bar on desktop) using the test's viewport size or project name."
  },
  {
    "id": "pw30",
    "category": "playwright",
    "question": "What is the 'fallback click' pattern using dispatchEvent in Playwright?",
    "options": [
      "Clicking an element twice for reliability",
      "Using JavaScript dispatchEvent when a normal click is intercepted by an overlay or animation",
      "Clicking a parent element when the child is not found",
      "Automatically clicking the next similar element if the first fails"
    ],
    "answer": 1,
    "explanation": "Sometimes a regular Playwright click fails because an overlay, animation, or event handler intercepts it. The fallback click pattern uses page.evaluate to dispatch a click event directly via JavaScript, bypassing actionability checks as a last resort."
  },
  {
    "id": "pw31",
    "category": "playwright",
    "question": "How do you tag and filter tests in Playwright (e.g., smoke vs. regression)?",
    "options": [
      "Put smoke tests in a separate repository",
      "Use grep patterns in config or CLI (--grep @smoke) with tags in test titles",
      "Smoke tests must be in files named *.smoke.spec.ts",
      "There is no built-in way to tag tests in Playwright"
    ],
    "answer": 1,
    "explanation": "Use grep patterns in Playwright's config or CLI to filter tests by tag. Tags are typically added to test titles (e.g., test('@smoke: homepage loads')). Projects can also be configured to run specific tag sets for different pipeline stages."
  },
  {
    "id": "pw32",
    "category": "playwright",
    "question": "What is the best strategy for handling flaky tests in a Playwright CI pipeline?",
    "options": [
      "Delete flaky tests immediately",
      "Set retries to 10 so flaky tests eventually pass",
      "Enable 1-2 retries with trace-on-first-retry, then systematically fix root causes",
      "Run flaky tests in a separate non-blocking pipeline"
    ],
    "answer": 2,
    "explanation": "Enable a small number of retries (1-2) in CI to avoid blocking deployments. Use trace: 'on-first-retry' to capture detailed trace data when a test retries. Track flaky tests and fix root causes (timing issues, shared state) rather than ignoring them."
  },
  {
    "id": "pw33",
    "category": "playwright",
    "question": "Why is .env.example committed to version control but .env is not?",
    "options": [
      ".env.example is a backup of .env",
      ".env.example documents required variables without exposing real values; .env contains secrets and is gitignored",
      ".env is only used in production",
      "Playwright requires .env.example but ignores .env"
    ],
    "answer": 1,
    "explanation": ".env.example documents which environment variables the project expects, with placeholder values. The actual .env file contains real secrets (API keys, credentials) and must be in .gitignore to prevent exposing sensitive data in version control."
  },
  {
    "id": "pw34",
    "category": "playwright",
    "question": "How do you implement session reuse for authentication in Playwright?",
    "options": [
      "Log in on every test for complete isolation",
      "Use a global setup project that logs in once and saves storageState, then load it in all other projects",
      "Store credentials in playwright.config.ts",
      "Use Playwright's built-in OAuth provider"
    ],
    "answer": 1,
    "explanation": "Use a global setup project that runs first, logs in via UI or API, and saves the browser's storageState (cookies, localStorage) to a JSON file. Other projects load this storageState to start authenticated, avoiding repeated login overhead."
  },
  {
    "id": "pw35",
    "category": "playwright",
    "question": "What is Playwright's Trace Viewer?",
    "options": [
      "A network traffic logger that runs in real-time",
      "A GUI tool that replays test execution with screenshots, DOM snapshots, network logs, and console output",
      "A JavaScript execution profiler",
      "A code coverage report viewer"
    ],
    "answer": 1,
    "explanation": "The Trace Viewer records every test action with screenshots, DOM snapshots, network requests, and console logs. You can step through the trace to see exactly what happened at each point, making it invaluable for debugging CI failures."
  },
  {
    "id": "pw36",
    "category": "playwright",
    "question": "Which Playwright feature allows you to intercept and modify network requests during tests?",
    "options": [
      "page.on('request') listener",
      "page.route() for request interception and mocking",
      "page.setExtraHTTPHeaders() method",
      "page.waitForResponse() helper"
    ],
    "answer": 1,
    "explanation": "page.route() intercepts network requests matching a URL pattern and lets you fulfill, abort, or modify them. This is essential for mocking API responses, testing error scenarios, and isolating the frontend from backend dependencies."
  },
  {
    "id": "pw37",
    "category": "playwright",
    "question": "What is Playwright's codegen tool used for?",
    "options": [
      "Generating code coverage reports",
      "Recording browser interactions and generating test code automatically",
      "Generating documentation from test files",
      "Code review for Playwright tests"
    ],
    "answer": 1,
    "explanation": "Playwright codegen opens a browser and records interactions (clicks, fills, navigations), generating corresponding test code in real-time. It's useful for quickly creating test skeletons, though the generated code typically needs refactoring for production use."
  },
  {
    "id": "pw38",
    "category": "playwright",
    "question": "What is the default browser context isolation behavior in Playwright?",
    "options": [
      "All tests share a single browser context for speed",
      "Each test gets a fresh BrowserContext with clean cookies, localStorage, and sessions",
      "Contexts are shared within a describe block but isolated between blocks",
      "Isolation only applies when running in parallel mode"
    ],
    "answer": 1,
    "explanation": "By default, Playwright creates a fresh BrowserContext for each test. This ensures complete isolation — cookies, localStorage, sessionStorage, and cache are all clean, preventing test pollution where one test's state could affect another."
  },
  {
    "id": "pw39",
    "category": "playwright",
    "question": "What are the correct steps to onboard a new page into a Playwright Actions framework?",
    "options": [
      "Write tests first, then create page objects afterward",
      "Create Actions class → Create fixture → Extend base test → Write tests",
      "Copy an existing test file and change the URLs",
      "Generate page objects from API contracts"
    ],
    "answer": 1,
    "explanation": "The standard onboarding flow is: 1) Create an Actions class encapsulating the page's locators and interactions, 2) Create a fixture that instantiates it, 3) Extend your base test to include the new fixture, 4) Write tests that use the fixture."
  },
  {
    "id": "pw40",
    "category": "playwright",
    "question": "What are the key factors that make a Playwright test framework maintainable long-term?",
    "options": [
      "Maximum code coverage, detailed comments, and complex abstractions",
      "Encapsulated page actions, fixture composition, strict TypeScript, consistent naming, and test isolation",
      "Using the latest beta features with minimal test structure",
      "Keeping all tests in a single file for easy management"
    ],
    "answer": 1,
    "explanation": "Long-term maintainability requires: encapsulated action layers hiding locators, composable fixtures for DRY setup, strict TypeScript for compile-time safety, consistent naming conventions, and proper test isolation ensuring tests don't depend on each other."
  },
  {
    "id": "ac1",
    "category": "aws-cloud",
    "question": "What is the primary purpose of AWS Glue crawlers in the context of ETL testing?",
    "options": [
      "To execute unit tests on Lambda functions",
      "To automatically discover and catalog data schemas from source data stores",
      "To monitor CloudWatch metrics for data pipelines",
      "To deploy infrastructure using CloudFormation"
    ],
    "answer": 1,
    "explanation": "AWS Glue crawlers scan data stores (S3, JDBC sources, etc.) and automatically populate the Glue Data Catalog with table definitions and schema metadata. Testing crawlers involves verifying that discovered schemas match expected column names, types, and partition structures."
  },
  {
    "id": "ac2",
    "category": "aws-cloud",
    "question": "When testing an AWS Glue ETL job, which validation is MOST critical before promoting to production?",
    "options": [
      "Verifying the job's IAM role has admin access",
      "Confirming row counts, data types, and null handling match expected transformation rules",
      "Ensuring the Glue job uses the maximum number of DPUs",
      "Checking that the job name follows a naming convention"
    ],
    "answer": 1,
    "explanation": "ETL testing must validate that transformations produce correct output — row counts, data type conversions, null/default handling, and business rule application. Functional correctness of the data transformation is the highest-priority validation."
  },
  {
    "id": "ac3",
    "category": "aws-cloud",
    "question": "In Amazon Redshift, which SQL pattern is commonly used for data quality validation after an ETL load?",
    "options": [
      "VACUUM SORT ONLY on all tables",
      "SELECT COUNT(*) with GROUP BY and HAVING clauses to detect duplicates or anomalies",
      "ALTER TABLE to add new sort keys",
      "COPY command with MAXERROR set to zero"
    ],
    "answer": 1,
    "explanation": "Data quality checks in Redshift commonly use aggregate queries with GROUP BY and HAVING to detect duplicates, orphaned records, null violations, and value range anomalies. These SQL assertions form the backbone of post-load validation."
  },
  {
    "id": "ac4",
    "category": "aws-cloud",
    "question": "What is the recommended approach for testing AWS Lambda functions locally before deployment?",
    "options": [
      "Deploy directly to production and test with live traffic",
      "Use AWS SAM CLI (sam local invoke) to emulate the Lambda runtime locally",
      "Write tests that call the Lambda function through API Gateway only",
      "Use AWS CloudFormation drift detection"
    ],
    "answer": 1,
    "explanation": "AWS SAM CLI provides 'sam local invoke' and 'sam local start-api' commands that emulate the Lambda execution environment locally using Docker containers. This enables rapid iteration and testing without deploying to AWS."
  },
  {
    "id": "ac5",
    "category": "aws-cloud",
    "question": "When testing an AWS Step Functions workflow, what does the TestState API allow you to do?",
    "options": [
      "Run the entire state machine end-to-end in production",
      "Test a single state in isolation by providing input and inspecting output and error handling",
      "Automatically generate unit tests from the state machine definition",
      "Deploy the state machine to a staging account"
    ],
    "answer": 1,
    "explanation": "The Step Functions TestState API lets you test individual states without executing the entire workflow. You provide input to a specific state and verify its output, error handling, and result path transformations in isolation."
  },
  {
    "id": "ac6",
    "category": "aws-cloud",
    "question": "In Amazon SageMaker, what is the purpose of a model validation step in a ML pipeline?",
    "options": [
      "To retrain the model with new hyperparameters",
      "To evaluate model accuracy, precision, recall, and bias metrics against acceptance thresholds before deployment",
      "To convert the model artifact to a Docker image",
      "To create an endpoint configuration for A/B testing"
    ],
    "answer": 1,
    "explanation": "Model validation in SageMaker pipelines evaluates trained models against held-out test data, computing metrics like accuracy, F1 score, and fairness/bias indicators. Only models meeting predefined thresholds are approved for deployment."
  },
  {
    "id": "ac7",
    "category": "aws-cloud",
    "question": "What is the primary challenge when testing Amazon QuickSight dashboards?",
    "options": [
      "QuickSight cannot connect to any AWS data sources",
      "Visual rendering validation requires end-to-end testing since QuickSight lacks a comprehensive API for visual assertions",
      "QuickSight dashboards cannot be shared with other users",
      "QuickSight only supports CSV file uploads"
    ],
    "answer": 1,
    "explanation": "QuickSight dashboards involve visual elements (charts, filters, drill-downs) that are difficult to validate programmatically. Testing typically requires verifying underlying dataset queries, checking calculated field logic, and performing visual regression testing on rendered dashboards."
  },
  {
    "id": "ac8",
    "category": "aws-cloud",
    "question": "When testing Spark jobs on Amazon EMR, which practice helps ensure reproducible test results?",
    "options": [
      "Running all tests against the production EMR cluster",
      "Using fixed sample datasets and comparing output against known expected results (golden files)",
      "Skipping unit tests and relying solely on integration tests",
      "Using random data for every test run"
    ],
    "answer": 1,
    "explanation": "Reproducible Spark testing uses deterministic sample datasets with pre-computed expected outputs (golden files). This enables comparing actual job output against known-correct results, ensuring transformations work correctly regardless of cluster configuration."
  },
  {
    "id": "ac9",
    "category": "aws-cloud",
    "question": "Which AWS service evaluates resources against best-practice rules and compliance standards like CIS Benchmarks?",
    "options": [
      "AWS CloudTrail",
      "AWS Config Rules",
      "Amazon Inspector",
      "AWS Trusted Advisor"
    ],
    "answer": 1,
    "explanation": "AWS Config Rules continuously evaluate AWS resource configurations against desired settings and compliance standards such as CIS Benchmarks. Non-compliant resources are flagged, enabling automated remediation workflows."
  },
  {
    "id": "ac10",
    "category": "aws-cloud",
    "question": "What is the key difference between schema testing and data quality testing?",
    "options": [
      "Schema testing is only for relational databases; data quality testing is only for NoSQL",
      "Schema testing validates structure (column names, types, constraints) while data quality testing validates actual data values and business rules",
      "Schema testing is automated; data quality testing must always be manual",
      "There is no difference; the terms are interchangeable"
    ],
    "answer": 1,
    "explanation": "Schema testing checks structural correctness — column names, data types, nullability constraints, and foreign keys. Data quality testing validates the actual data content — completeness, accuracy, consistency, uniqueness, and adherence to business rules."
  },
  {
    "id": "ac11",
    "category": "aws-cloud",
    "question": "In a data pipeline flowing from S3 to Redshift, which E2E test checkpoint validates that data landed correctly in the warehouse?",
    "options": [
      "Checking that the S3 PUT event was logged in CloudTrail",
      "Running row count reconciliation and sample record comparison between the S3 source and the Redshift target table",
      "Verifying the VPC peering connection is active",
      "Confirming the Redshift cluster has auto-scaling enabled"
    ],
    "answer": 1,
    "explanation": "End-to-end pipeline testing compares source and target data to verify completeness and accuracy. Row count reconciliation ensures no data loss, while sample record comparisons verify that transformations were applied correctly during the S3-to-Redshift load."
  },
  {
    "id": "ac12",
    "category": "aws-cloud",
    "question": "What approach is recommended for generating test data for big data platforms?",
    "options": [
      "Always copy full production data to the test environment",
      "Use synthetic data generators that mimic production data distributions while avoiding real PII",
      "Use only empty datasets to test edge cases",
      "Manually create test records one at a time"
    ],
    "answer": 1,
    "explanation": "Synthetic data generators create realistic test datasets that match production data distributions, cardinalities, and edge cases without containing actual PII. Tools like Faker, Great Expectations, or custom generators produce scalable, safe test data."
  },
  {
    "id": "ac13",
    "category": "aws-cloud",
    "question": "What does Infrastructure as Code (IaC) enable for QE teams?",
    "options": [
      "Eliminates the need for any testing of infrastructure",
      "Allows test environments to be provisioned consistently and version-controlled alongside application code",
      "Replaces all application-level testing with infrastructure testing",
      "Requires manual approval for every resource change"
    ],
    "answer": 1,
    "explanation": "IaC lets QE teams define test environments as code (CloudFormation, Terraform, CDK), ensuring consistent, reproducible environments. Infrastructure definitions are version-controlled, peer-reviewed, and can be spun up/torn down on demand for testing."
  },
  {
    "id": "ac14",
    "category": "aws-cloud",
    "question": "In AWS CDK, what are 'assertions' used for in testing?",
    "options": [
      "To verify runtime application behavior",
      "To validate that synthesized CloudFormation templates contain expected resources, properties, and configurations",
      "To check that CDK code compiles without errors",
      "To monitor deployed stack health"
    ],
    "answer": 1,
    "explanation": "CDK assertions (from aws-cdk-lib/assertions) let you write unit tests against the synthesized CloudFormation template. You can verify specific resources exist, check property values, count resource types, and validate IAM policies without deploying."
  },
  {
    "id": "ac15",
    "category": "aws-cloud",
    "question": "Which CDK test type validates that a synthesized template matches a previously approved baseline?",
    "options": [
      "Integration test",
      "Snapshot test",
      "Load test",
      "Canary test"
    ],
    "answer": 1,
    "explanation": "Snapshot tests in CDK compare the current synthesized CloudFormation template against a stored baseline. If the template changes unexpectedly, the test fails, preventing unintended infrastructure drift from being deployed."
  },
  {
    "id": "ac16",
    "category": "aws-cloud",
    "question": "What is the role of Amazon EventBridge in event-driven architecture testing?",
    "options": [
      "It stores test artifacts in S3",
      "It routes events between AWS services based on rules, and its event patterns and routing logic must be tested to ensure correct event delivery",
      "It replaces the need for API Gateway",
      "It provides a SQL interface for querying events"
    ],
    "answer": 1,
    "explanation": "EventBridge routes events between producers and consumers based on pattern-matching rules. Testing must verify that event patterns match correctly, rules route to the right targets, input transformations work, and dead-letter queues capture failures."
  },
  {
    "id": "ac17",
    "category": "aws-cloud",
    "question": "When testing an SNS/SQS messaging integration, what is a critical test scenario?",
    "options": [
      "Verifying that SNS topics have public access",
      "Validating message delivery, ordering (for FIFO queues), retry behavior, and dead-letter queue routing on failure",
      "Testing that SQS queues have unlimited retention",
      "Checking that all messages are encrypted with customer-managed keys"
    ],
    "answer": 1,
    "explanation": "SNS/SQS testing must cover message delivery guarantees, FIFO ordering when applicable, consumer retry/backoff behavior, dead-letter queue (DLQ) routing for poison messages, and message attribute filtering. These ensure reliable event-driven communication."
  },
  {
    "id": "ac18",
    "category": "aws-cloud",
    "question": "What is the recommended strategy for testing DynamoDB tables in isolation?",
    "options": [
      "Always test against production DynamoDB tables",
      "Use DynamoDB Local or test containers to run a local DynamoDB instance for unit and integration tests",
      "Skip DynamoDB testing entirely since it is a managed service",
      "Use only Redshift to test DynamoDB data"
    ],
    "answer": 1,
    "explanation": "DynamoDB Local (or Docker-based alternatives like localstack) provides a local emulation of DynamoDB for testing. This enables fast, isolated unit and integration tests for CRUD operations, query patterns, and GSI behavior without incurring AWS costs."
  },
  {
    "id": "ac19",
    "category": "aws-cloud",
    "question": "How can CloudWatch Logs Insights be used for test diagnosis?",
    "options": [
      "It replaces the need for test assertions",
      "It allows querying structured log data across log groups to identify errors, latency patterns, and failure root causes in test runs",
      "It only works with EC2 instance logs",
      "It can only display logs from the last 5 minutes"
    ],
    "answer": 1,
    "explanation": "CloudWatch Logs Insights provides a SQL-like query language for searching and analyzing log data across multiple log groups. QE teams use it to correlate errors, measure latency distributions, and diagnose test failures by filtering on request IDs, error codes, or timestamps."
  },
  {
    "id": "ac20",
    "category": "aws-cloud",
    "question": "What does AWS X-Ray provide for distributed tracing in a QE context?",
    "options": [
      "X-Ray only monitors EC2 CPU utilization",
      "X-Ray traces requests across microservices, showing latency at each hop to help identify performance bottlenecks and failure points in distributed systems",
      "X-Ray is a code coverage tool for Lambda functions",
      "X-Ray replaces CloudWatch Alarms entirely"
    ],
    "answer": 1,
    "explanation": "AWS X-Ray collects trace data as requests flow through distributed services (API Gateway, Lambda, DynamoDB, etc.). QE teams use X-Ray to identify slow segments, visualize service dependencies, and pinpoint where failures occur in multi-service test scenarios."
  },
  {
    "id": "ac21",
    "category": "aws-cloud",
    "question": "When testing an API deployed through AWS API Gateway, which test type validates request/response transformations and error mapping?",
    "options": [
      "Unit testing the API Gateway console UI",
      "Contract testing that verifies request validation, response mapping templates, and error status codes match the API specification",
      "Load testing the underlying VPC network",
      "Testing only the DNS resolution of the custom domain"
    ],
    "answer": 1,
    "explanation": "API Gateway contract testing validates that request validators enforce expected schemas, mapping templates transform payloads correctly, and error responses return proper status codes and bodies. This ensures the API layer behaves according to its OpenAPI/Swagger specification."
  },
  {
    "id": "ac22",
    "category": "aws-cloud",
    "question": "How is the AWS SDK typically used in test automation frameworks?",
    "options": [
      "Only for deploying CloudFormation stacks",
      "To programmatically set up test fixtures, invoke AWS services, verify state changes, and tear down resources in test code",
      "To replace all HTTP-based API testing",
      "Only for reading CloudWatch metrics"
    ],
    "answer": 1,
    "explanation": "The AWS SDK (Boto3, JavaScript SDK, etc.) is used in test automation to create test prerequisites (seed DynamoDB tables, upload S3 objects), trigger actions (invoke Lambdas, publish to SNS), assert outcomes (query results, check states), and clean up resources after tests."
  },
  {
    "id": "ac23",
    "category": "aws-cloud",
    "question": "What is a key benefit of using AWS SAM for local serverless testing?",
    "options": [
      "SAM deploys directly to production without testing",
      "SAM emulates API Gateway, Lambda, and DynamoDB locally, enabling rapid iteration without deploying to AWS",
      "SAM only supports Python Lambda functions",
      "SAM eliminates the need for integration tests"
    ],
    "answer": 1,
    "explanation": "AWS SAM (Serverless Application Model) CLI emulates the serverless environment locally using Docker. It supports local invocation of Lambda functions, local API Gateway endpoints, and local DynamoDB, significantly reducing the feedback loop during development and testing."
  },
  {
    "id": "ac24",
    "category": "aws-cloud",
    "question": "How should test isolation be achieved in shared AWS accounts?",
    "options": [
      "All teams should share the same resources without any separation",
      "Use resource naming conventions, separate IAM roles, dedicated resource tags, and per-environment prefixes to isolate test resources from other workloads",
      "Disable all access controls so tests can access anything",
      "Use only the root account credentials for all tests"
    ],
    "answer": 1,
    "explanation": "Test isolation in shared accounts uses naming conventions (env-prefixed resource names), IAM permission boundaries, resource tags for cost allocation and filtering, and sometimes separate VPCs or accounts. This prevents test runs from interfering with other workloads."
  },
  {
    "id": "ac25",
    "category": "aws-cloud",
    "question": "What is the principle of 'least privilege' in IAM permissions testing?",
    "options": [
      "Granting all users full administrator access",
      "Ensuring each role or user has only the minimum permissions required to perform its intended function, and testing that excess permissions are denied",
      "Removing all IAM policies from test accounts",
      "Using only inline policies instead of managed policies"
    ],
    "answer": 1,
    "explanation": "Least privilege means each identity gets only the permissions it needs. Testing validates this by asserting that authorized actions succeed and unauthorized actions are explicitly denied, often using IAM policy simulator or actual API calls that should return AccessDenied."
  },
  {
    "id": "ac26",
    "category": "aws-cloud",
    "question": "When performance testing a cloud data pipeline, which metric is MOST relevant for validating SLA compliance?",
    "options": [
      "The color scheme of the CloudWatch dashboard",
      "End-to-end pipeline latency — the time from data arrival in the source to availability in the target system",
      "The number of IAM policies attached to the pipeline role",
      "The size of the CloudFormation template"
    ],
    "answer": 1,
    "explanation": "Pipeline SLAs are typically defined in terms of end-to-end latency (data freshness) and throughput. Performance testing measures the time from data landing in S3 to being queryable in Redshift/Athena, ensuring it meets defined freshness requirements."
  },
  {
    "id": "ac27",
    "category": "aws-cloud",
    "question": "What is SAST (Static Application Security Testing) in the context of cloud platform testing?",
    "options": [
      "Testing network firewall rules at runtime",
      "Analyzing source code, IaC templates, and configuration files for security vulnerabilities without executing the application",
      "Running penetration tests against live endpoints",
      "Monitoring CloudTrail logs for unauthorized access"
    ],
    "answer": 1,
    "explanation": "SAST scans source code and IaC templates (CloudFormation, Terraform, CDK) for security issues like hardcoded secrets, overly permissive IAM policies, unencrypted resources, and public S3 buckets — all without deploying or running the application."
  },
  {
    "id": "ac28",
    "category": "aws-cloud",
    "question": "How should PII (Personally Identifiable Information) be handled in test data for analytics pipelines?",
    "options": [
      "Copy production PII directly to test environments for realistic testing",
      "Use data masking, tokenization, or synthetic data generation to remove or replace real PII while preserving data distributions for testing",
      "Store all PII in plaintext S3 buckets for easy test access",
      "PII handling is not relevant to QE teams"
    ],
    "answer": 1,
    "explanation": "Test environments must not contain real PII. Data masking replaces sensitive fields with fake but realistic values, tokenization substitutes reversible tokens, and synthetic generators create data with similar statistical properties — all enabling realistic testing without privacy risk."
  },
  {
    "id": "ac29",
    "category": "aws-cloud",
    "question": "What is the purpose of AWS Secrets Manager in test automation?",
    "options": [
      "To store test case definitions",
      "To securely store and retrieve API keys, database credentials, and tokens used by test automation scripts without hardcoding them",
      "To encrypt all S3 objects",
      "To replace AWS IAM entirely"
    ],
    "answer": 1,
    "explanation": "AWS Secrets Manager stores credentials, API keys, and connection strings securely. Test automation scripts retrieve secrets at runtime via the SDK, avoiding hardcoded credentials in test code, supporting secret rotation, and maintaining audit trails."
  },
  {
    "id": "ac30",
    "category": "aws-cloud",
    "question": "What does AWS WAF (Web Application Firewall) testing involve?",
    "options": [
      "Testing only the WAF console UI",
      "Validating that WAF rules correctly block malicious requests (SQL injection, XSS) while allowing legitimate traffic through",
      "Testing DNS resolution speed",
      "Verifying that all Lambda functions have WAF attached"
    ],
    "answer": 1,
    "explanation": "WAF testing sends crafted requests containing known attack patterns (SQL injection, XSS, etc.) to verify they are blocked, while also confirming that legitimate requests pass through. This ensures security rules protect without causing false positives."
  },
  {
    "id": "ac31",
    "category": "aws-cloud",
    "question": "What is the function of AWS CloudWatch Synthetics?",
    "options": [
      "It synthesizes new CloudFormation templates",
      "It runs configurable canary scripts that continuously monitor endpoints and APIs, alerting when behavior deviates from expectations",
      "It generates synthetic data for testing",
      "It creates synthetic IAM users for testing"
    ],
    "answer": 1,
    "explanation": "CloudWatch Synthetics runs canary scripts (Node.js or Python) on a schedule to monitor API endpoints, URLs, and workflows. Canaries take screenshots, measure latency, and alert on failures — acting as continuous synthetic monitoring for production systems."
  },
  {
    "id": "ac32",
    "category": "aws-cloud",
    "question": "How does observability differ from traditional monitoring in automated testing?",
    "options": [
      "Observability only uses CloudWatch; monitoring uses third-party tools",
      "Observability combines logs, metrics, and traces to enable querying arbitrary questions about system behavior, while monitoring checks known thresholds",
      "There is no difference; they are the same concept",
      "Monitoring is proactive; observability is never used proactively"
    ],
    "answer": 1,
    "explanation": "Monitoring tracks known metrics against thresholds (CPU > 80%). Observability — built on logs, metrics, and distributed traces — lets you ask ad hoc questions about why a system behaved a certain way. For QE, observability enables diagnosing unforeseen test failures."
  },
  {
    "id": "ac33",
    "category": "aws-cloud",
    "question": "Which AWS service performs automated security assessment of EC2 instances for vulnerabilities and unintended network exposure?",
    "options": [
      "AWS Config",
      "AWS Security Hub",
      "Amazon Inspector",
      "AWS CloudTrail"
    ],
    "answer": 2,
    "explanation": "Amazon Inspector automatically assesses EC2 instances and container images for software vulnerabilities (CVEs) and unintended network exposure. It integrates with Security Hub for centralized findings management."
  },
  {
    "id": "ac34",
    "category": "aws-cloud",
    "question": "In AWS Security Hub, what is the purpose of the security score?",
    "options": [
      "It measures application performance",
      "It calculates the monthly AWS bill",
      "It represents the percentage of passed security checks against enabled compliance standards",
      "It ranks developers by code quality"
    ],
    "answer": 2,
    "explanation": "Security Hub's security score shows the percentage of controls that are passing across enabled standards (CIS, PCI DSS, AWS Foundational). QE teams use it to track compliance posture and prioritize remediation of failing checks."
  },
  {
    "id": "ac35",
    "category": "aws-cloud",
    "question": "What is the recommended approach for testing AWS Lambda function error handling?",
    "options": [
      "Only test the happy path since Lambda handles errors automatically",
      "Use mocks for downstream dependencies to simulate timeouts, throttling, and service errors, then verify retry logic and error responses",
      "Disable all Lambda error handling to simplify testing",
      "Test only by reading CloudWatch Logs after production failures"
    ],
    "answer": 1,
    "explanation": "Lambda error handling testing should cover timeout scenarios, downstream service failures, throttling, malformed input, and partial failures in batch processing. Mocking dependencies allows controlled simulation of these failure modes in unit tests."
  },
  {
    "id": "ac36",
    "category": "aws-cloud",
    "question": "What is the primary purpose of DAST (Dynamic Application Security Testing) for cloud applications?",
    "options": [
      "Scanning source code for syntax errors",
      "Testing running applications by sending crafted requests to detect runtime vulnerabilities like injection flaws and authentication bypasses",
      "Validating CloudFormation template syntax",
      "Monitoring CPU utilization of EC2 instances"
    ],
    "answer": 1,
    "explanation": "DAST tools test running applications from the outside by sending malicious or edge-case requests to discover runtime vulnerabilities — SQL injection, authentication flaws, SSRF, and insecure configurations that only manifest when the application is deployed and executing."
  },
  {
    "id": "ac37",
    "category": "aws-cloud",
    "question": "When testing a Step Functions workflow, why is it important to test the error-handling paths (Catch/Retry)?",
    "options": [
      "Error paths are never executed in production",
      "Because Catch and Retry blocks define how the workflow recovers from failures, and incorrect configuration can cause silent data loss or infinite retries",
      "Step Functions do not support error handling",
      "Error handling is automatically perfect and never needs testing"
    ],
    "answer": 1,
    "explanation": "Step Functions Catch and Retry blocks control failure recovery — wrong configurations can lead to infinite retry loops, unhandled error types, or silent failures. Testing these paths ensures the workflow degrades gracefully and alerts appropriately on real failures."
  },
  {
    "id": "ac38",
    "category": "aws-cloud",
    "question": "How can S3 event notifications be tested in an event-driven pipeline?",
    "options": [
      "S3 events cannot be tested; they must be verified in production only",
      "Upload test objects to the S3 bucket and verify that downstream consumers (Lambda, SQS, EventBridge) receive and correctly process the expected events",
      "Disable S3 versioning and check for event logs",
      "Use CloudFormation drift detection to verify events"
    ],
    "answer": 1,
    "explanation": "Testing S3 event notifications involves uploading known test objects and verifying end-to-end that the configured notification (Lambda trigger, SQS message, EventBridge event) fires and downstream processing produces the correct result."
  },
  {
    "id": "ac39",
    "category": "aws-cloud",
    "question": "What is the benefit of using Great Expectations or Deequ for data quality testing in AWS pipelines?",
    "options": [
      "They replace the need for any other testing framework",
      "They provide declarative data quality assertions (expectations) that can be integrated into ETL pipelines to automatically validate data against defined rules",
      "They only work with on-premises databases",
      "They are AWS-managed services included in every account"
    ],
    "answer": 1,
    "explanation": "Great Expectations and AWS Deequ allow QE teams to define declarative data quality expectations (not-null, unique, within range, referential integrity) that run automatically within ETL pipelines, catching data issues before they propagate downstream."
  },
  {
    "id": "ac40",
    "category": "aws-cloud",
    "question": "In the context of AWS CDK testing, what does a 'fine-grained assertion' verify?",
    "options": [
      "That the CDK app compiles without TypeScript errors",
      "That a specific resource in the synthesized template has exact property values (e.g., a Lambda function has a specific timeout and memory setting)",
      "That all CDK constructs use the latest version",
      "That the AWS account has sufficient service quotas"
    ],
    "answer": 1,
    "explanation": "Fine-grained CDK assertions use hasResourceProperties() to verify that specific resources in the synthesized CloudFormation template have exact property values — for example, confirming a Lambda function's timeout is 30 seconds and memory is 256 MB."
  },
  {
    "id": "ac41",
    "category": "aws-cloud",
    "question": "What is the purpose of testing DynamoDB Global Secondary Indexes (GSIs) in a test suite?",
    "options": [
      "GSIs are automatically correct and never need testing",
      "To verify that query patterns using GSIs return correct, complete results and that GSI projections include all required attributes",
      "GSIs can only be tested in production",
      "To check that GSIs consume zero read capacity units"
    ],
    "answer": 1,
    "explanation": "GSI testing verifies that access patterns return correct results, projected attributes include all fields needed by consumers, and eventual consistency behavior is acceptable. Missing projected attributes cause incomplete query results that are hard to diagnose in production."
  },
  {
    "id": "ac42",
    "category": "aws-cloud",
    "question": "How does the AWS IAM Policy Simulator help QE teams?",
    "options": [
      "It deploys IAM policies to production",
      "It allows testing whether specific API actions would be allowed or denied for a given IAM entity without actually making the API calls",
      "It automatically generates IAM policies from test logs",
      "It removes unused IAM roles"
    ],
    "answer": 1,
    "explanation": "The IAM Policy Simulator evaluates existing or candidate policies to determine if specific actions on specific resources would be allowed or denied. QE teams use it to validate least-privilege policies before deployment, ensuring no over-permissive or missing permissions."
  },
  {
    "id": "ac43",
    "category": "aws-cloud",
    "question": "What testing strategy validates that an Amazon Redshift query returns correct results after a schema migration?",
    "options": [
      "Drop and recreate the entire database",
      "Run the query against both the old and new schemas with known test data and compare the results for equivalence",
      "Only check that the migration script executes without errors",
      "Skip testing since Redshift is a managed service"
    ],
    "answer": 1,
    "explanation": "Schema migration testing uses parallel execution — running queries against both pre- and post-migration schemas with identical test data, then comparing results. This catches subtle issues like changed column types, dropped defaults, or altered join behavior."
  },
  {
    "id": "ac44",
    "category": "aws-cloud",
    "question": "What is the purpose of using AWS CloudWatch Alarms in a test automation context?",
    "options": [
      "To replace all test assertions with alarm checks",
      "To detect when test environments experience anomalies (high error rates, resource exhaustion) and automatically trigger notifications or remediation",
      "To schedule test runs at specific times",
      "To encrypt test data at rest"
    ],
    "answer": 1,
    "explanation": "CloudWatch Alarms in test environments monitor for infrastructure anomalies (memory/CPU exhaustion, elevated error rates, queue depth spikes) that could invalidate test results. Alarms can trigger SNS notifications to alert QE teams or invoke Lambda functions for auto-remediation."
  },
  {
    "id": "ac45",
    "category": "aws-cloud",
    "question": "Why is testing idempotency important for AWS Lambda functions triggered by SQS messages?",
    "options": [
      "SQS guarantees exactly-once delivery, so idempotency is irrelevant",
      "Because SQS standard queues deliver messages at-least-once, meaning a Lambda may process the same message multiple times, and non-idempotent handlers can cause duplicate side effects",
      "Idempotency only matters for synchronous API calls",
      "Lambda automatically ensures idempotency for all handlers"
    ],
    "answer": 1,
    "explanation": "SQS standard queues have at-least-once delivery semantics, meaning the same message can be delivered multiple times. Lambda handlers must be idempotent — processing the same message twice should not create duplicate records, double-charge accounts, or cause other unintended side effects."
  },
  {
    "id": "bg1",
    "category": "bdd-gherkin",
    "question": "What is the primary difference between BDD and TDD?",
    "options": [
      "BDD focuses on behavior described in business language, while TDD focuses on unit-level code correctness",
      "TDD uses Gherkin syntax while BDD uses plain code assertions",
      "BDD can only be used for UI testing, while TDD is for API testing",
      "TDD requires stakeholder collaboration, while BDD is developer-only"
    ],
    "answer": 0,
    "explanation": "BDD extends TDD by shifting the focus from testing implementation details to describing expected behavior in a language that business stakeholders can understand. TDD centers on writing unit tests first to drive code design, while BDD uses natural-language scenarios to drive development from the outside in."
  },
  {
    "id": "bg2",
    "category": "bdd-gherkin",
    "question": "What is the purpose of a 'Three Amigos' session in BDD?",
    "options": [
      "A code review meeting between three senior developers",
      "A collaborative discussion between a developer, tester, and business analyst to define acceptance criteria",
      "A sprint retrospective format with exactly three participants",
      "A meeting to assign three test scenarios to each user story"
    ],
    "answer": 1,
    "explanation": "The Three Amigos session brings together at least three perspectives — typically a developer, a tester, and a business analyst (or product owner) — to collaboratively discuss and refine acceptance criteria before development begins. This ensures shared understanding and uncovers edge cases early."
  },
  {
    "id": "bg3",
    "category": "bdd-gherkin",
    "question": "Which Gherkin keyword is used to define a precondition or initial context for a scenario?",
    "options": [
      "When",
      "Then",
      "Given",
      "And"
    ],
    "answer": 2,
    "explanation": "The 'Given' keyword sets up the initial state or precondition of the system before the action under test takes place. It describes what is already true before the behavior being tested occurs."
  },
  {
    "id": "bg4",
    "category": "bdd-gherkin",
    "question": "What is 'Living Documentation' in the context of BDD?",
    "options": [
      "A wiki page that developers manually update after each sprint",
      "Executable specifications (Gherkin scenarios) that serve as always-up-to-date documentation because they are validated by automated tests",
      "Auto-generated Javadoc from step definition classes",
      "A shared Google Doc where the QA team logs test results"
    ],
    "answer": 1,
    "explanation": "Living Documentation refers to Gherkin feature files that double as both automated test specifications and readable documentation. Because they are executed as tests, they stay in sync with the actual system behavior, unlike traditional docs that become stale."
  },
  {
    "id": "bg5",
    "category": "bdd-gherkin",
    "question": "Which of the following is a common BDD anti-pattern?",
    "options": [
      "Writing scenarios in business-readable language",
      "Using the Three Amigos process to refine scenarios",
      "Writing scenarios that are tightly coupled to UI implementation details",
      "Keeping scenarios focused on a single behavior"
    ],
    "answer": 2,
    "explanation": "Coupling scenarios to UI implementation details (e.g., 'click button with id=submit') is a well-known BDD anti-pattern. Scenarios should describe business behavior at a higher level of abstraction, making them resilient to UI changes and readable by non-technical stakeholders."
  },
  {
    "id": "bg6",
    "category": "bdd-gherkin",
    "question": "How is shared state typically managed between Cucumber step definitions in Java?",
    "options": [
      "By using static global variables in a utility class",
      "By passing data through the system clipboard",
      "By using dependency injection (e.g., PicoContainer or Spring) to share a context/world object across step classes",
      "By writing state to a temporary database between steps"
    ],
    "answer": 2,
    "explanation": "Cucumber supports dependency injection frameworks like PicoContainer, Spring, and Guice to share state between step definition classes. A shared context or 'world' object is injected into each step definition class, allowing them to exchange data cleanly without static variables."
  },
  {
    "id": "bg7",
    "category": "bdd-gherkin",
    "question": "What is the recommended folder structure for a Cucumber Java project?",
    "options": [
      "All feature files and step definitions in the same flat directory",
      "Feature files under src/test/resources organized by feature area, step definitions under src/test/java in matching packages",
      "Feature files in src/main/java and step definitions in src/main/resources",
      "One single feature file containing all scenarios and one step definition class"
    ],
    "answer": 1,
    "explanation": "The convention is to place Gherkin feature files under src/test/resources (often mirroring the package structure) and Java step definitions under src/test/java in corresponding packages. This keeps features discoverable and step definitions organized by domain area."
  },
  {
    "id": "bg8",
    "category": "bdd-gherkin",
    "question": "Which Cucumber hook annotation runs once before each scenario and is commonly used for test data setup?",
    "options": [
      "@BeforeStep",
      "@After",
      "@Before",
      "@BeforeAll"
    ],
    "answer": 2,
    "explanation": "The @Before hook runs before each scenario and is the standard place to set up test data, initialize browser sessions, or prepare the system under test. @BeforeAll runs once before the entire suite, while @BeforeStep runs before every individual step."
  },
  {
    "id": "bg9",
    "category": "bdd-gherkin",
    "question": "How can you integrate Cucumber tests into a Jenkins CI/CD pipeline?",
    "options": [
      "Cucumber cannot be run in CI/CD; it requires manual execution",
      "By running Cucumber via Maven/Gradle as part of the build lifecycle and publishing JSON/HTML reports using Jenkins plugins",
      "By copying feature files to the Jenkins server and opening them in a browser",
      "By using Jenkins to send feature files via email to manual testers"
    ],
    "answer": 1,
    "explanation": "Cucumber tests integrate into Jenkins by executing them through Maven (mvn test) or Gradle as a standard build step. The Cucumber JSON report plugin for Jenkins can then parse the output to display rich, interactive test results within the Jenkins dashboard."
  },
  {
    "id": "bg10",
    "category": "bdd-gherkin",
    "question": "What is the purpose of tags in Cucumber (e.g., @smoke, @regression)?",
    "options": [
      "To add CSS styling to the Cucumber HTML report",
      "To categorize and selectively run subsets of scenarios based on criteria like test type, priority, or feature area",
      "To mark scenarios as deprecated so they are permanently skipped",
      "To assign scenarios to specific developers for code review"
    ],
    "answer": 1,
    "explanation": "Tags in Cucumber allow you to annotate scenarios and features for selective execution. For example, you can run only @smoke-tagged scenarios in a quick CI check, or exclude @wip scenarios from the regression suite, using tag expressions in the runner configuration."
  },
  {
    "id": "bg11",
    "category": "bdd-gherkin",
    "question": "Which approach best addresses flaky BDD scenarios?",
    "options": [
      "Delete flaky scenarios from the suite entirely",
      "Add long Thread.sleep() calls before every assertion",
      "Investigate root causes (timing issues, test data dependencies, environment instability) and fix with explicit waits, isolated data, and stable environments",
      "Run the entire suite multiple times and only report the best result"
    ],
    "answer": 2,
    "explanation": "Flaky tests should be investigated to find their root cause — common culprits include race conditions, shared mutable test data, and environment instability. Proper fixes include using explicit waits instead of Thread.sleep(), isolating test data per scenario, and ensuring environment reliability."
  },
  {
    "id": "bg12",
    "category": "bdd-gherkin",
    "question": "What is Serenity BDD primarily used for?",
    "options": [
      "A JavaScript-only BDD framework for Node.js applications",
      "A reporting and test automation framework that integrates with Cucumber to produce rich, narrative living documentation reports",
      "A load testing tool for measuring API performance under BDD scenarios",
      "A database migration tool that uses Gherkin syntax"
    ],
    "answer": 1,
    "explanation": "Serenity BDD is a Java-based framework that layers on top of Cucumber (or JBehave) to provide detailed, narrative-style test reports with screenshots, REST API logs, and step-by-step breakdowns. It encourages the Screenplay pattern and generates comprehensive living documentation."
  },
  {
    "id": "bg13",
    "category": "bdd-gherkin",
    "question": "Which types of testing are best suited for BDD with Gherkin scenarios?",
    "options": [
      "Unit testing of individual methods and functions",
      "Acceptance testing and key business workflow validation",
      "Low-level performance benchmarking and memory profiling",
      "Static code analysis and linting"
    ],
    "answer": 1,
    "explanation": "BDD is best suited for acceptance-level testing that validates business rules and user-facing workflows. Unit tests and low-level performance tests are better handled by dedicated frameworks (JUnit, JMeter), while BDD shines at verifying that the system behaves as stakeholders expect."
  },
  {
    "id": "bg14",
    "category": "bdd-gherkin",
    "question": "What is a recommended first step when introducing BDD to a team that has never used it?",
    "options": [
      "Immediately rewrite all existing tests in Gherkin",
      "Start with a small pilot: pick one feature, run a Three Amigos session, write a few scenarios, automate them, and demonstrate value before scaling",
      "Purchase an enterprise BDD platform license before writing any scenarios",
      "Have only the QA team write all Gherkin scenarios without involving developers or business analysts"
    ],
    "answer": 1,
    "explanation": "The best approach is to start small with a pilot project, demonstrate concrete value (better collaboration, living documentation, clearer requirements), and then gradually expand adoption. Trying to convert everything at once or excluding key roles undermines BDD's collaborative nature."
  },
  {
    "id": "bg15",
    "category": "bdd-gherkin",
    "question": "Which of the following is valid Gherkin syntax for a feature file?",
    "options": [
      "Feature: Login\n  Test Case: Valid login\n    Step 1: Enter username\n    Step 2: Enter password",
      "Feature: Login\n  Scenario: Valid login\n    Given the user is on the login page\n    When the user enters valid credentials\n    Then the user should see the dashboard",
      "Describe: Login\n  It: should allow valid login\n    Arrange: user on login page\n    Act: enter credentials\n    Assert: dashboard visible",
      "TestSuite: Login\n  TestCase: Valid login\n    Setup: navigate to login\n    Execute: submit form\n    Verify: redirect to dashboard"
    ],
    "answer": 1,
    "explanation": "Gherkin uses specific keywords: Feature, Scenario (or Scenario Outline), Given, When, Then, And, and But. The correct syntax structures scenarios under a Feature with Given-When-Then steps that describe preconditions, actions, and expected outcomes."
  },
  {
    "id": "bg16",
    "category": "bdd-gherkin",
    "question": "In a Cucumber Java step definition, which annotation maps a step to the Gherkin line 'When the user clicks the submit button'?",
    "options": [
      "@Then(\"the user clicks the submit button\")",
      "@Given(\"the user clicks the submit button\")",
      "@When(\"the user clicks the submit button\")",
      "@Step(\"the user clicks the submit button\")"
    ],
    "answer": 2,
    "explanation": "The @When annotation in Cucumber Java maps to 'When' steps in the Gherkin feature file. The annotation string must match the step text (with optional parameter placeholders). Each Gherkin keyword (Given, When, Then) has its own corresponding Java annotation."
  },
  {
    "id": "bg17",
    "category": "bdd-gherkin",
    "question": "When should you use a Scenario Outline instead of separate individual scenarios?",
    "options": [
      "When the scenario has no parameters at all",
      "When you want to run the same scenario structure with multiple sets of input data, using an Examples table",
      "When you need to run scenarios in a specific sequential order",
      "When the scenario should only be executed once during the entire test suite"
    ],
    "answer": 1,
    "explanation": "Scenario Outline (with an Examples table) is used when the same behavior needs to be tested with different data combinations. It avoids duplicating scenario text and makes it easy to add new test data rows without writing new scenarios."
  },
  {
    "id": "bg18",
    "category": "bdd-gherkin",
    "question": "How can Gherkin scenarios handle asynchronous workflows, such as waiting for an email notification?",
    "options": [
      "Gherkin cannot express asynchronous workflows at all",
      "By adding 'Async' keyword before the step",
      "By writing steps that describe polling or waiting behavior in the step definition (e.g., 'Then the user should receive a confirmation email within 30 seconds') while implementing retry/polling logic in the automation code",
      "By running each step in a separate thread automatically"
    ],
    "answer": 2,
    "explanation": "Gherkin scenarios express the expected behavior declaratively (e.g., 'the email arrives within 30 seconds'), while the step definition implements the polling or waiting mechanism. This keeps the feature file readable while the automation layer handles the asynchronous complexity."
  },
  {
    "id": "bg19",
    "category": "bdd-gherkin",
    "question": "What is the purpose of a Data Table in a Gherkin step?",
    "options": [
      "To define database schema migrations",
      "To pass structured tabular data to a single step, such as a list of items or a set of field-value pairs",
      "To create a visual chart in the test report",
      "To define the execution order of scenarios"
    ],
    "answer": 1,
    "explanation": "Data Tables in Gherkin allow you to pass structured, tabular data directly to a step. For example, you can pass a table of form fields and values, or a list of expected items. The step definition receives this as a DataTable object that can be converted to lists or maps."
  },
  {
    "id": "bg20",
    "category": "bdd-gherkin",
    "question": "Which Maven dependency is required to use Cucumber with JUnit 5 (Jupiter) in a Java project?",
    "options": [
      "cucumber-spring",
      "cucumber-picocontainer",
      "cucumber-junit-platform-engine",
      "cucumber-testng"
    ],
    "answer": 2,
    "explanation": "The cucumber-junit-platform-engine dependency integrates Cucumber with JUnit 5's platform engine, allowing Cucumber scenarios to run as JUnit Platform tests. This is the modern approach, replacing the older cucumber-junit dependency used with JUnit 4."
  },
  {
    "id": "bg21",
    "category": "bdd-gherkin",
    "question": "How can Cucumber scenarios be executed in parallel?",
    "options": [
      "Cucumber does not support any form of parallel execution",
      "By configuring the cucumber.execution.parallel.enabled property and ensuring scenarios are independent with no shared mutable state",
      "By duplicating the feature file into multiple copies with different names",
      "By running each scenario on a different physical machine only"
    ],
    "answer": 1,
    "explanation": "Cucumber supports parallel execution at the scenario or feature level through configuration properties (e.g., cucumber.execution.parallel.enabled=true with JUnit Platform). Scenarios must be independent and avoid shared mutable state to run safely in parallel."
  },
  {
    "id": "bg22",
    "category": "bdd-gherkin",
    "question": "What is the purpose of the @BeforeStep hook in Cucumber?",
    "options": [
      "It runs once at the very beginning of the test suite before any feature file is loaded",
      "It runs before each individual step within a scenario, useful for logging or implicit waits",
      "It runs before each feature file is parsed",
      "It runs before the Cucumber runner class is initialized"
    ],
    "answer": 1,
    "explanation": "The @BeforeStep hook executes before every individual step in a scenario. It is commonly used for cross-cutting concerns like logging the current step, taking screenshots before each action, or applying implicit wait configurations."
  },
  {
    "id": "bg23",
    "category": "bdd-gherkin",
    "question": "What does the 'Background' keyword do in a Gherkin feature file?",
    "options": [
      "It runs steps in the background thread while other scenarios execute",
      "It defines steps that are executed before each scenario in the feature file, reducing duplication of common preconditions",
      "It hides certain scenarios from the test report",
      "It marks a scenario as a background job that runs asynchronously"
    ],
    "answer": 1,
    "explanation": "The Background section defines Given steps that are common to all scenarios in a feature file. These steps run before each scenario, eliminating the need to repeat shared setup steps. It should be kept short and only contain universally needed preconditions."
  },
  {
    "id": "bg24",
    "category": "bdd-gherkin",
    "question": "What is the role of the Cucumber Runner class in a JUnit 4-based project?",
    "options": [
      "It compiles the Gherkin feature files into Java bytecode",
      "It is annotated with @RunWith(Cucumber.class) and @CucumberOptions to configure feature paths, glue code, plugins, and tags for execution",
      "It generates Gherkin feature files from Java code",
      "It serves as the main application entry point for production code"
    ],
    "answer": 1,
    "explanation": "The Runner class uses @RunWith(Cucumber.class) to tell JUnit to use the Cucumber runner, and @CucumberOptions to specify the location of feature files, glue (step definitions), report plugins, and tag filters. It acts as the entry point for executing the Cucumber test suite."
  },
  {
    "id": "bg25",
    "category": "bdd-gherkin",
    "question": "How does the Page Object Model (POM) complement BDD step definitions?",
    "options": [
      "POM replaces Gherkin entirely with XML-based test configuration",
      "POM encapsulates page-specific locators and interactions in separate classes, keeping step definitions focused on behavior rather than UI mechanics",
      "POM is only used for performance testing and cannot be combined with BDD",
      "POM requires each page to have its own feature file"
    ],
    "answer": 1,
    "explanation": "The Page Object Model separates UI interaction details (locators, clicks, waits) into dedicated page classes. Step definitions then call page object methods, staying clean and behavior-focused. This makes tests more maintainable because UI changes only require updating the page object, not the step definitions."
  },
  {
    "id": "bg26",
    "category": "bdd-gherkin",
    "question": "What is the key advantage of Cucumber Expressions over Regular Expressions for step matching?",
    "options": [
      "Cucumber Expressions execute faster at runtime than Regular Expressions",
      "Cucumber Expressions are more readable and provide built-in parameter types like {int}, {string}, and {float} without regex syntax",
      "Cucumber Expressions support Unicode while Regular Expressions do not",
      "Cucumber Expressions can match binary data in step definitions"
    ],
    "answer": 1,
    "explanation": "Cucumber Expressions use a simpler, more readable syntax with built-in parameter types ({int}, {string}, {float}, {word}) instead of regex patterns like (\\d+) or \"([^\"]*)\". They are easier for non-technical team members to understand and maintain."
  },
  {
    "id": "bg27",
    "category": "bdd-gherkin",
    "question": "Which Cucumber plugin configuration generates both HTML and JSON reports?",
    "options": [
      "plugin = {\"pretty\"}",
      "plugin = {\"html:target/cucumber-reports.html\", \"json:target/cucumber.json\"}",
      "plugin = {\"console\", \"xml:report.xml\"}",
      "plugin = {\"csv:target/results.csv\"}"
    ],
    "answer": 1,
    "explanation": "The plugin option in @CucumberOptions accepts an array of formatter strings. 'html:path' generates an HTML report and 'json:path' generates a JSON report. The JSON report is especially useful for CI/CD integration and tools like the Cucumber Jenkins plugin."
  },
  {
    "id": "bg28",
    "category": "bdd-gherkin",
    "question": "How do you define a custom parameter type in Cucumber to match domain-specific values like 'active' or 'inactive' status?",
    "options": [
      "By creating a new Gherkin keyword using a plugin",
      "By using the @ParameterType annotation on a method that returns the parsed type, with a regex defining the allowed values",
      "By editing the Cucumber source code to add new built-in types",
      "Custom parameter types are not supported in Cucumber"
    ],
    "answer": 1,
    "explanation": "The @ParameterType annotation defines a custom parameter type by specifying a regex pattern and a transformer method. For example, @ParameterType(\"active|inactive\") on a method returning a Status enum allows you to use {status} in step definitions for type-safe matching."
  },
  {
    "id": "bg29",
    "category": "bdd-gherkin",
    "question": "How can Cucumber be used with RestAssured for REST API testing?",
    "options": [
      "Cucumber cannot be used for API testing, only for UI testing",
      "By writing Gherkin scenarios that describe API behavior (e.g., 'When I send a GET request to /users') and implementing step definitions that use RestAssured to make HTTP calls and validate responses",
      "By replacing Gherkin with RestAssured's own DSL in feature files",
      "By installing a special Cucumber-REST plugin that auto-generates API tests"
    ],
    "answer": 1,
    "explanation": "Cucumber and RestAssured integrate naturally: Gherkin scenarios describe the API behavior in business terms, while step definitions use RestAssured's fluent API to send HTTP requests and validate status codes, headers, and response bodies. This brings BDD benefits to API-level testing."
  },
  {
    "id": "bg30",
    "category": "bdd-gherkin",
    "question": "What is a best practice for managing test data in BDD scenarios?",
    "options": [
      "Always use production data directly for testing",
      "Hardcode all test data in the step definition Java files",
      "Each scenario should create its own test data in the Given steps and clean up in @After hooks to ensure isolation and repeatability",
      "Share a single set of test data across all scenarios and never reset it"
    ],
    "answer": 2,
    "explanation": "Each scenario should be self-contained by setting up the required test data in Given steps and tearing it down in @After hooks. This ensures scenarios are independent, repeatable, and can run in any order or in parallel without interfering with each other."
  },
  {
    "id": "bg31",
    "category": "bdd-gherkin",
    "question": "What does the 'Then' keyword represent in the Given-When-Then structure?",
    "options": [
      "The precondition or initial context",
      "The action or event that triggers the behavior",
      "The expected outcome or observable result that should be verified",
      "A cleanup step that runs after the scenario"
    ],
    "answer": 2,
    "explanation": "'Then' defines the expected outcome or assertion in a BDD scenario. It describes what should be observable after the action (When) is performed in the given context (Given). Then steps should verify outcomes, not perform additional actions."
  },
  {
    "id": "bg32",
    "category": "bdd-gherkin",
    "question": "What is the difference between acceptance criteria and Gherkin scenarios?",
    "options": [
      "They are exactly the same thing with different names",
      "Acceptance criteria are high-level business conditions for story completion, while Gherkin scenarios are concrete, executable examples that illustrate those criteria",
      "Gherkin scenarios are written first and acceptance criteria are derived from them",
      "Acceptance criteria are only for manual testing while Gherkin is only for automation"
    ],
    "answer": 1,
    "explanation": "Acceptance criteria define the high-level conditions that must be met for a user story to be considered complete (e.g., 'Users can log in with valid credentials'). Gherkin scenarios are specific, executable examples that illustrate and verify those criteria with concrete data and steps."
  },
  {
    "id": "bg33",
    "category": "bdd-gherkin",
    "question": "In a GitHub Actions workflow, how do you typically run Cucumber tests and publish results?",
    "options": [
      "GitHub Actions cannot run Cucumber tests",
      "By adding a workflow step that runs 'mvn test' (or equivalent) and then using an action to upload the Cucumber JSON/HTML report as a build artifact",
      "By manually uploading feature files to the GitHub Actions UI",
      "By converting all Gherkin scenarios to GitHub Issues before each run"
    ],
    "answer": 1,
    "explanation": "In GitHub Actions, Cucumber tests run as part of the standard Maven or Gradle build step. The generated reports (JSON, HTML) can be uploaded as artifacts using actions/upload-artifact, or processed by third-party actions to post results as PR comments or check annotations."
  },
  {
    "id": "bg34",
    "category": "bdd-gherkin",
    "question": "Which BDD anti-pattern involves writing Gherkin scenarios only after the code is complete?",
    "options": [
      "Test-first development",
      "Automation-first BDD, where scenarios are written retroactively as test scripts rather than as a collaborative specification tool before development",
      "Continuous integration",
      "Shift-left testing"
    ],
    "answer": 1,
    "explanation": "Writing Gherkin scenarios after the code is complete turns BDD into just another test automation framework, losing the collaborative specification benefit. True BDD means writing scenarios before development, using them to drive shared understanding and guide implementation."
  },
  {
    "id": "bg35",
    "category": "bdd-gherkin",
    "question": "Which Cucumber hook is best suited for capturing a screenshot on scenario failure for debugging?",
    "options": [
      "@Before with a conditional check for previous failure",
      "@BeforeStep to screenshot before every step",
      "@After with a check on the Scenario status (scenario.isFailed()) to capture a screenshot only when the scenario fails",
      "@AfterStep but only on the last step"
    ],
    "answer": 2,
    "explanation": "The @After hook runs after each scenario and receives a Scenario object. By checking scenario.isFailed(), you can conditionally capture a screenshot and attach it to the report using scenario.attach(). This provides visual evidence for debugging failures without cluttering passing tests."
  },
  {
    "id": "at1",
    "category": "api-testing",
    "question": "What is the difference between REST and GraphQL APIs from a testing perspective?",
    "options": [
      "REST returns XML while GraphQL returns JSON",
      "REST has fixed endpoints per resource; GraphQL has a single endpoint where the client specifies the exact data shape needed",
      "GraphQL is faster than REST in all scenarios",
      "REST supports subscriptions while GraphQL does not"
    ],
    "answer": 1,
    "explanation": "REST uses multiple fixed endpoints (e.g., /users, /orders) returning predefined data shapes. GraphQL uses a single endpoint where clients query exactly the fields they need. Testing GraphQL requires validating query depth limits, schema validation, and N+1 query prevention."
  },
  {
    "id": "at2",
    "category": "api-testing",
    "question": "What is contract testing and when should you use it over integration testing?",
    "options": [
      "Contract testing verifies legal agreements between services",
      "Contract testing validates that a service adheres to a shared API schema agreement between consumer and provider, without requiring both services to be running",
      "Contract testing is only used for third-party APIs",
      "Contract testing replaces all other forms of API testing"
    ],
    "answer": 1,
    "explanation": "Contract testing (using tools like Pact) verifies that a service producer's API matches what consumers expect, without needing both services running simultaneously. It's ideal for microservices where integration testing is expensive and slow."
  },
  {
    "id": "at3",
    "category": "api-testing",
    "question": "What HTTP status code range indicates a client error?",
    "options": [
      "1xx",
      "2xx",
      "3xx",
      "4xx"
    ],
    "answer": 3,
    "explanation": "4xx codes indicate client errors: 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden), 404 (Not Found), 409 (Conflict), 422 (Unprocessable Entity), 429 (Too Many Requests). Testing should verify the correct error code for each invalid request scenario."
  },
  {
    "id": "at4",
    "category": "api-testing",
    "question": "What is the purpose of an API schema validation tool like JSON Schema?",
    "options": [
      "To format JSON responses for human readability",
      "To validate that API responses conform to a defined structure — correct data types, required fields, and value constraints",
      "To compress JSON payloads for faster transmission",
      "To convert XML responses to JSON format"
    ],
    "answer": 1,
    "explanation": "JSON Schema validation ensures API responses have the correct structure, data types, required fields, and value constraints. This catches breaking changes early — a field changing from string to number, a required field becoming null, etc."
  },
  {
    "id": "at5",
    "category": "api-testing",
    "question": "What is the difference between authentication and authorization in API testing?",
    "options": [
      "They are the same concept with different names",
      "Authentication verifies identity (who you are); authorization determines access level (what you can do)",
      "Authentication is for APIs; authorization is for web pages",
      "Authorization happens before authentication"
    ],
    "answer": 1,
    "explanation": "Authentication verifies identity (e.g., via API key, JWT, OAuth token). Authorization determines what the authenticated user can access. Testing must verify both: invalid credentials get 401, valid credentials with insufficient permissions get 403."
  },
  {
    "id": "at6",
    "category": "api-testing",
    "question": "What is OAuth 2.0 and which flow is most common for API-to-API communication?",
    "options": [
      "Authorization Code flow — involves user browser redirects",
      "Client Credentials flow — server-to-server without user involvement",
      "Implicit flow — returns token directly in URL",
      "Device Code flow — for devices without browsers"
    ],
    "answer": 1,
    "explanation": "The Client Credentials flow is used for machine-to-machine API communication where no user interaction is needed. The client exchanges its ID and secret for an access token. Testing should cover token expiration, refresh, scope validation, and invalid credential handling."
  },
  {
    "id": "at7",
    "category": "api-testing",
    "question": "What is API rate limiting and how should you test it?",
    "options": [
      "Rate limiting controls API response size; test with large payloads",
      "Rate limiting restricts the number of requests per time window; test by sending requests at and above the limit to verify correct 429 responses and header information",
      "Rate limiting is only relevant for public APIs",
      "Rate limiting cannot be tested in lower environments"
    ],
    "answer": 1,
    "explanation": "Rate limiting protects APIs from abuse by restricting request frequency. Test by: verifying requests within the limit succeed, requests exceeding the limit get 429 status, rate limit headers (X-RateLimit-Remaining) are correct, and limits reset after the window."
  },
  {
    "id": "at8",
    "category": "api-testing",
    "question": "What is idempotency in APIs and which HTTP methods should be idempotent?",
    "options": [
      "Idempotency means APIs return the same response format; all methods should be idempotent",
      "Idempotency means multiple identical requests produce the same result as a single request; GET, PUT, and DELETE should be idempotent",
      "Idempotency means APIs never fail; only GET is idempotent",
      "Idempotency means APIs process requests in order; POST and PATCH are idempotent"
    ],
    "answer": 1,
    "explanation": "An idempotent operation produces the same result whether executed once or multiple times. GET, PUT, and DELETE should be idempotent by design. POST is typically not. Testing should verify that repeating PUT/DELETE calls doesn't cause unintended side effects."
  },
  {
    "id": "at9",
    "category": "api-testing",
    "question": "What is Pact and how does it implement consumer-driven contract testing?",
    "options": [
      "Pact is an API documentation tool that generates Swagger specs",
      "Pact lets consumers define expected interactions (pacts), which are then verified against the actual provider, ensuring compatibility without running both services together",
      "Pact is a load testing tool for APIs",
      "Pact generates mock servers from OpenAPI specifications"
    ],
    "answer": 1,
    "explanation": "In Pact, the consumer defines expected request/response pairs (a pact file). The provider then verifies it can satisfy those expectations. This ensures API compatibility in microservices without expensive integration environments."
  },
  {
    "id": "at10",
    "category": "api-testing",
    "question": "What is the purpose of API pagination and how do you test it?",
    "options": [
      "Pagination splits large datasets into pages; test only the first page",
      "Pagination splits large result sets into manageable chunks; test boundary conditions, last page, empty results, invalid page numbers, and total count accuracy",
      "Pagination is only for database queries, not APIs",
      "Pagination always uses offset-based navigation"
    ],
    "answer": 1,
    "explanation": "API pagination prevents returning massive datasets in a single response. Test: first/last/middle pages return correct data, page size limits work, out-of-range pages return empty or 404, cursor-based vs offset-based navigation, and total count headers are accurate."
  },
  {
    "id": "at11",
    "category": "api-testing",
    "question": "What is ReadyAPI and how does it complement Postman for enterprise API testing?",
    "options": [
      "ReadyAPI and Postman are identical tools",
      "ReadyAPI provides advanced features like SOAP testing, data-driven testing, security scanning, and load testing in addition to REST testing",
      "ReadyAPI is only for SOAP APIs while Postman is only for REST",
      "ReadyAPI replaced Postman in all enterprise environments"
    ],
    "answer": 1,
    "explanation": "ReadyAPI (from SmartBear) adds enterprise features beyond basic API testing: SOAP/WSDL support, advanced data-driven testing with database connections, built-in security scanning (OWASP), and integrated load testing — making it a more complete API testing platform."
  },
  {
    "id": "at12",
    "category": "api-testing",
    "question": "What is API versioning and what strategies exist for it?",
    "options": [
      "API versioning is only needed for internal APIs",
      "API versioning manages backward compatibility through URI path (/v1/users), query parameters (?version=1), or header-based (Accept: application/vnd.api+json;version=1) strategies",
      "APIs should never be versioned — always maintain backward compatibility",
      "API versioning is handled automatically by API gateways"
    ],
    "answer": 1,
    "explanation": "API versioning allows breaking changes without disrupting existing consumers. Common strategies: URI path versioning (/v1/, /v2/), query parameter versioning, and header versioning. Testing must verify that old versions still work and new versions don't break existing clients."
  },
  {
    "id": "at13",
    "category": "api-testing",
    "question": "What is an API gateway and what should you test about it?",
    "options": [
      "An API gateway is just a load balancer for APIs",
      "An API gateway is a single entry point that handles routing, authentication, rate limiting, and transformation; test routing rules, auth enforcement, rate limits, and failover behavior",
      "API gateways only apply to GraphQL APIs",
      "API gateways cannot be tested independently"
    ],
    "answer": 1,
    "explanation": "An API gateway (e.g., Kong, AWS API Gateway) sits in front of microservices handling cross-cutting concerns. Test: request routing to correct services, authentication/authorization enforcement, rate limiting, request/response transformation, and behavior during backend failures."
  },
  {
    "id": "at14",
    "category": "api-testing",
    "question": "What is the difference between SOAP and REST APIs?",
    "options": [
      "SOAP is newer than REST",
      "SOAP is a protocol with strict XML messaging and WSDL contracts; REST is an architectural style using HTTP methods with flexible formats (JSON/XML)",
      "REST requires XML while SOAP supports JSON",
      "There is no practical difference; they are interchangeable"
    ],
    "answer": 1,
    "explanation": "SOAP is a protocol with rigid rules: XML-only, WSDL contracts, and built-in error handling. REST is an architectural style using HTTP verbs (GET, POST, PUT, DELETE) with flexible formats. SOAP is common in enterprise/financial systems; REST dominates modern web APIs."
  },
  {
    "id": "at15",
    "category": "api-testing",
    "question": "How do you test API error handling and what edge cases should you cover?",
    "options": [
      "Only test the documented error codes",
      "Test missing required fields, invalid data types, boundary values, malformed JSON, oversized payloads, concurrent conflicting requests, and unexpected null values",
      "Error handling is the developer's responsibility, not QA's",
      "Only test 500 errors since those are the most critical"
    ],
    "answer": 1,
    "explanation": "Comprehensive error testing covers: missing/null required fields, wrong data types, boundary values (min/max), malformed request bodies, oversized payloads, SQL injection attempts, XSS payloads, concurrent modifications (409 Conflict), and verifying error response bodies contain helpful messages."
  },
  {
    "id": "at16",
    "category": "api-testing",
    "question": "What is OpenAPI (Swagger) specification and how does it support testing?",
    "options": [
      "OpenAPI is a testing framework for REST APIs",
      "OpenAPI is a standard format for describing API endpoints, parameters, and responses — enabling auto-generation of tests, mocks, and documentation",
      "OpenAPI only works with Java APIs",
      "OpenAPI replaces the need for manual API testing"
    ],
    "answer": 1,
    "explanation": "OpenAPI (formerly Swagger) is a machine-readable API description format. It enables auto-generating test stubs, request validation, mock servers, client SDKs, and interactive documentation. Testing tools can validate responses against the spec automatically."
  },
  {
    "id": "at17",
    "category": "api-testing",
    "question": "What is JWT (JSON Web Token) and what should you test about it?",
    "options": [
      "JWT is a database format for storing user data",
      "JWT is a compact token format containing encoded claims; test token expiration, signature validation, role-based claims, tamper detection, and refresh flow",
      "JWT tokens never expire",
      "JWT is only used for password storage"
    ],
    "answer": 1,
    "explanation": "JWT consists of header, payload (claims), and signature. Test: expired tokens are rejected (401), tampered tokens fail signature validation, role-based claims enforce correct access levels, refresh tokens work correctly, and tokens from wrong issuers are rejected."
  },
  {
    "id": "at18",
    "category": "api-testing",
    "question": "What is API mocking and when should you use it?",
    "options": [
      "API mocking replaces all testing — you never need real APIs",
      "API mocking simulates API responses for testing when the real service is unavailable, unstable, or expensive to call",
      "API mocking is only for frontend development",
      "Mocked APIs always return static responses"
    ],
    "answer": 1,
    "explanation": "API mocking creates simulated endpoints that return predefined responses. Use when: dependent services aren't built yet, third-party APIs have rate limits or costs, you need deterministic test data, or you're testing failure scenarios that are hard to reproduce with real services."
  },
  {
    "id": "at19",
    "category": "api-testing",
    "question": "What is HATEOAS and why is it relevant to API testing?",
    "options": [
      "HATEOAS is a security protocol for APIs",
      "HATEOAS (Hypermedia as the Engine of Application State) means API responses include links to related actions, enabling client navigation without hardcoded URLs",
      "HATEOAS is an alternative to REST",
      "HATEOAS is only used in SOAP services"
    ],
    "answer": 1,
    "explanation": "HATEOAS enriches API responses with hypermedia links showing available actions. Testing must verify: links are present and correct, link relations follow the spec, linked resources are accessible, and clients can navigate the API using only the provided links."
  },
  {
    "id": "at20",
    "category": "api-testing",
    "question": "How do you approach security testing for APIs?",
    "options": [
      "Security testing is only needed for public-facing APIs",
      "Test for OWASP API Top 10 vulnerabilities: broken authentication, excessive data exposure, injection attacks, rate limiting bypass, and mass assignment",
      "Running a single vulnerability scanner is sufficient",
      "Security testing should only be done by dedicated security teams"
    ],
    "answer": 1,
    "explanation": "API security testing covers the OWASP API Security Top 10: broken object-level authorization, broken authentication, excessive data exposure, lack of rate limiting, broken function-level authorization, mass assignment, security misconfiguration, injection, improper asset management, and insufficient logging."
  },
  {
    "id": "at21",
    "category": "api-testing",
    "question": "What is the difference between SAST and DAST in API security testing?",
    "options": [
      "SAST tests the API at runtime; DAST tests the source code",
      "SAST analyzes source code without running it (white-box); DAST tests the running API from the outside (black-box)",
      "SAST is for frontend; DAST is for backend",
      "There is no practical difference between SAST and DAST"
    ],
    "answer": 1,
    "explanation": "SAST (Static Application Security Testing) analyzes source code for vulnerabilities without execution — catching SQL injection patterns, hardcoded secrets, etc. DAST (Dynamic Application Security Testing) tests the running application by sending malicious requests — finding runtime vulnerabilities."
  },
  {
    "id": "at22",
    "category": "api-testing",
    "question": "What is API test automation best practice for CI/CD integration?",
    "options": [
      "Run all API tests manually before each release",
      "Organize tests into smoke (fast, every build), regression (nightly), and performance (weekly) tiers that run at appropriate pipeline stages",
      "Run every API test on every commit regardless of duration",
      "Only test APIs that changed in the current commit"
    ],
    "answer": 1,
    "explanation": "Tiered API testing in CI/CD: smoke tests (critical paths, < 5 min) run on every commit, regression tests (comprehensive) run nightly, and performance tests run weekly or pre-release. This balances fast feedback with thorough coverage without slowing the pipeline."
  },
  {
    "id": "at23",
    "category": "api-testing",
    "question": "How do you test API backward compatibility when releasing a new version?",
    "options": [
      "Backward compatibility testing is unnecessary if you version your API",
      "Run existing consumer test suites against the new version to verify no breaking changes in response structure, status codes, or behavior",
      "Only check that the new endpoints work correctly",
      "Ask consumers to update their code to match the new version"
    ],
    "answer": 1,
    "explanation": "Backward compatibility testing runs existing consumer tests (or contract tests) against the new API version. Verify: existing fields aren't removed or renamed, response status codes haven't changed, default behaviors are preserved, and new required parameters aren't added to existing endpoints."
  },
  {
    "id": "at24",
    "category": "api-testing",
    "question": "What is chaos engineering and how does it apply to API testing?",
    "options": [
      "Chaos engineering means randomly deleting test data",
      "Chaos engineering deliberately introduces failures (network latency, service outages, resource exhaustion) to verify APIs handle degraded conditions gracefully",
      "Chaos engineering is only for production systems",
      "Chaos engineering replaces traditional testing"
    ],
    "answer": 1,
    "explanation": "Chaos engineering tests API resilience by introducing controlled failures: injecting network latency, killing service instances, exhausting connections, corrupting responses from dependencies. It verifies circuit breakers, timeouts, retries, and fallback behaviors work correctly."
  },
  {
    "id": "at25",
    "category": "api-testing",
    "question": "What is GraphQL query depth limiting and why should you test it?",
    "options": [
      "Query depth limiting restricts how many fields a query can request",
      "Query depth limiting prevents deeply nested queries that could cause exponential database joins and server resource exhaustion",
      "Query depth limiting only applies to mutations",
      "GraphQL automatically prevents deep queries without configuration"
    ],
    "answer": 1,
    "explanation": "Deeply nested GraphQL queries can cause exponential database joins (N+1 problem) and server exhaustion. Depth limiting restricts query nesting. Test that queries exceeding the limit are rejected with clear errors, and queries within the limit execute correctly."
  },
  {
    "id": "at26",
    "category": "api-testing",
    "question": "In a microservices architecture with 15+ services, who should own which layer of API testing?",
    "options": [
      "A centralized QA team should own all API tests to ensure consistency",
      "Each service team owns unit and component tests in their repo; QA Architect owns E2E and contract testing standards; Pact Broker centralizes contracts",
      "Developers own all tests including E2E since they understand the code best",
      "Only the integration team should test API interactions between services"
    ],
    "answer": 1,
    "explanation": "In microservices, testing ownership should be distributed: service teams own unit and component tests within their repos, a Pact Broker centralizes contract management, and the QA team owns cross-service E2E tests for critical user journeys."
  },
  {
    "id": "at27",
    "category": "api-testing",
    "question": "What is the critical security test often missed in GraphQL APIs that would be caught in REST APIs?",
    "options": [
      "SQL injection testing, which only affects REST endpoints",
      "Rate limiting, which GraphQL does not support",
      "Field-level authorization, since GraphQL allows clients to request any field including sensitive ones like SSN if not explicitly restricted",
      "Input validation, which GraphQL schemas handle automatically"
    ],
    "answer": 2,
    "explanation": "GraphQL allows clients to specify exactly which fields they want. Without field-level authorization, a regular user could query sensitive fields (e.g., SSN) that REST endpoint-level security would have blocked. Test by querying restricted fields with different role tokens."
  },
  {
    "id": "at28",
    "category": "api-testing",
    "question": "What is the recommended approach for testing consumer idempotency in event-driven architectures using message queues?",
    "options": [
      "Test that messages are delivered in order since ordering guarantees idempotency",
      "Only test the producer side since consumers should handle duplicates by default",
      "Publish the same event twice and verify the consumer processes it only once, preventing duplicate side effects like double-charging",
      "Test idempotency only in production since test environments do not replicate message queue behavior"
    ],
    "answer": 2,
    "explanation": "Consumer idempotency means processing the same event multiple times produces the same result as processing it once. Test by publishing duplicate events and asserting no double side effects (e.g., double stock decrement). This often reveals missing deduplication stores."
  },
  {
    "id": "at29",
    "category": "api-testing",
    "question": "When testing API versioning with URI paths (/v1/, /v2/), what must be tested on the version sunset date?",
    "options": [
      "That the old version redirects to the new version automatically",
      "That the old version returns HTTP 410 Gone instead of a successful response, confirming the deprecation is enforced",
      "That error messages in the old version are updated to reference the new version",
      "Nothing special; versions should simply stop working on the sunset date"
    ],
    "answer": 1,
    "explanation": "On the API sunset date, tests should assert that deprecated endpoints return HTTP 410 Gone (not 200 or 404), indicating the resource existed but has been intentionally retired. This prevents surprise breakage for consumers who missed the deprecation notice."
  },
  {
    "id": "at30",
    "category": "api-testing",
    "question": "What is the Awaitility library pattern used for in event-driven architecture testing?",
    "options": [
      "It provides a way to add explicit sleeps between test steps for async operations",
      "It generates synthetic events for load testing message queues",
      "It provides polling-based assertions that wait until an async condition is met within a timeout, replacing arbitrary sleep calls",
      "It monitors Kafka topic lag to determine when consumers have caught up"
    ],
    "answer": 2,
    "explanation": "Awaitility provides a fluent API for polling async conditions: 'await().atMost(5, SECONDS).until(() -> inventoryCount == expected)'. This replaces unreliable sleep() calls with deterministic assertions that complete as soon as the condition is met."
  },
  {
    "id": "at31",
    "category": "api-testing",
    "question": "What is the most thorough approach for testing API authentication and authorization across a multi-tenant SaaS platform?",
    "options": [
      "Test login with valid credentials and verify a 200 response for each role",
      "Build an authorization matrix of roles x endpoints x HTTP methods and systematically assert expected HTTP status codes for every combination",
      "Only test admin endpoints since regular user endpoints are public by design",
      "Use a single test account and verify that authentication headers are required"
    ],
    "answer": 1,
    "explanation": "An authorization matrix systematically tests every combination of roles, endpoints, and HTTP methods. For example, 5 roles x 20 endpoints x 3 methods = 300 combinations. Data-driven tests assert each combination returns the correct status (200, 403, or 404)."
  },
  {
    "id": "at32",
    "category": "api-testing",
    "question": "What should a dead-letter queue (DLQ) test verify in an event-driven architecture?",
    "options": [
      "That all messages eventually reach the DLQ for archival purposes",
      "That the DLQ is empty at all times in a healthy system",
      "That malformed or poison messages are routed to the DLQ with metadata for investigation, rather than silently dropped or blocking the main queue",
      "That the DLQ automatically retries failed messages indefinitely"
    ],
    "answer": 2,
    "explanation": "DLQ tests should verify that poison messages (malformed schema, processing errors) are routed to the dead-letter queue with enough metadata for investigation, that the main queue is not blocked, and that alerting triggers when DLQ messages exceed a threshold."
  },
  {
    "id": "at33",
    "category": "api-testing",
    "question": "In consumer-driven contract testing with Pact, what is the role of the Pact Broker?",
    "options": [
      "It runs the actual API tests between consumers and providers in a shared environment",
      "It acts as a centralized repository for storing, versioning, and sharing contract (pact) files, enabling verification across CI pipelines",
      "It generates mock servers automatically from OpenAPI specifications",
      "It replaces the need for any other form of API testing"
    ],
    "answer": 1,
    "explanation": "The Pact Broker is essential at scale for managing consumer-driven contracts. It stores versioned pact files from consumers, enables providers to fetch and verify them in their own CI pipelines, and tracks verification status across all consumer-provider pairs."
  },
  {
    "id": "at34",
    "category": "api-testing",
    "question": "What is API integration in enterprise platforms, and what is the primary QA concern?",
    "options": [
      "A method for styling web applications using external CSS frameworks",
      "The ability for systems to exchange data automatically through defined interfaces, requiring contract and payload validation",
      "A database migration technique for transferring data between environments",
      "A front-end rendering approach that loads data from multiple sources simultaneously"
    ],
    "answer": 1,
    "explanation": "API integration allows different systems to exchange data automatically through defined interfaces. QA must validate request/response contracts, data transformation accuracy, error handling, authentication, rate limiting, and backward compatibility across API versions."
  },
  {
    "id": "at35",
    "category": "api-testing",
    "question": "When testing straight-through processing (STP) via APIs, what is the most critical validation?",
    "options": [
      "Verifying that all transactions are processed in under one second regardless of complexity",
      "Ensuring the rules engine correctly routes low-risk items for automatic processing and flags high-risk items for manual review",
      "Confirming that the API returns HTTP 200 for all successful transactions",
      "Validating that the database schema matches the API response format"
    ],
    "answer": 1,
    "explanation": "STP routes low-risk transactions for automatic processing. The critical QA validation is ensuring the rules engine correctly classifies transactions: low-risk items proceed automatically while high-risk or ambiguous items are routed to manual review queues with proper audit trails."
  },
  {
    "id": "at36",
    "category": "api-testing",
    "question": "What is the most effective approach to testing data validation rules in an API that accepts complex business documents?",
    "options": [
      "Test only with valid payloads and verify successful responses",
      "Test boundary conditions, required field combinations, cross-field dependencies, and verify that error messages are actionable for each invalid scenario",
      "Rely on the front-end validation to catch all invalid data before it reaches the API",
      "Use only automated schema validation tools without manual test case design"
    ],
    "answer": 1,
    "explanation": "Comprehensive API data validation testing must cover boundary conditions, required vs. optional field combinations, cross-field dependency rules, format validation, and ensure error responses are specific and actionable. Front-end validation alone is insufficient since APIs can be called directly."
  },
  {
    "id": "at37",
    "category": "api-testing",
    "question": "What should QA validate when testing API-driven workflow orchestration across multiple services?",
    "options": [
      "Only the final output of the workflow, ignoring intermediate states",
      "State transitions at each step, error handling and rollback at every failure point, timeout behavior, and audit trail completeness",
      "That each API call completes in under 100 milliseconds",
      "Only the happy path scenario from start to finish"
    ],
    "answer": 1,
    "explanation": "API-driven workflow orchestration involves multiple services executing in sequence or parallel. QA must validate state transitions, error handling and compensation/rollback logic at each step, timeout behavior, retry policies, idempotency, and that the audit trail captures every action."
  },
  {
    "id": "at38",
    "category": "api-testing",
    "question": "When testing an API that integrates with an external e-signature service, which test scenario is most commonly overlooked?",
    "options": [
      "Testing that signatures are applied to the correct document",
      "Testing the callback/webhook handling when the external service completes, times out, or returns an error asynchronously",
      "Testing that the API requires authentication",
      "Testing that the signed document can be downloaded"
    ],
    "answer": 1,
    "explanation": "External service integrations often rely on asynchronous callbacks or webhooks. QA must test how the system handles delayed callbacks, out-of-order notifications, duplicate webhooks, timeout scenarios, and error responses from the external service, not just the happy path of successful signing."
  },
  {
    "id": "at39",
    "category": "api-testing",
    "question": "How should QA test a rules engine API that automatically applies configurable business logic and approval criteria?",
    "options": [
      "Test only the default rule configuration since custom rules are the client's responsibility",
      "Test individual rules, rule interactions and priority conflicts, boundary conditions at threshold values, and the impact of rule changes on existing in-flight transactions",
      "Run a single end-to-end test that covers the most common workflow",
      "Validate only that the rules engine API returns HTTP 200 for valid rule configurations"
    ],
    "answer": 1,
    "explanation": "Rules engine APIs require combinatorial testing: individual rule correctness, rule interaction when multiple rules apply simultaneously, priority conflict resolution, boundary conditions at rule thresholds, and backward compatibility when rules are updated while transactions are in progress."
  },
  {
    "id": "mb1",
    "category": "mabl",
    "question": "How does mabl describe its core platform philosophy with the term 'Active Coverage'?",
    "options": [
      "A metric tracking the percentage of code lines executed during test runs",
      "Coverage that builds itself, runs itself, and fixes itself across the full testing lifecycle",
      "A manual review process where QA actively monitors test coverage dashboards",
      "A CI/CD gate that blocks deployments until a minimum coverage threshold is met"
    ],
    "answer": 1,
    "explanation": "mabl's 'Active Coverage' means the platform handles the entire testing lifecycle autonomously — creating tests, executing them on continuous schedules, performing failure analysis, maintaining them as applications change, and reporting results — all without constant human intervention."
  },
  {
    "id": "mb2",
    "category": "mabl",
    "question": "What is 'Deep Quality Context' in mabl's agentic testing platform?",
    "options": [
      "A detailed code coverage report generated after each test run",
      "The platform carrying application behavior, user workflows, failure history, and team-defined quality standards across testing steps",
      "A configuration file that stores quality thresholds for each test category",
      "A dashboard that shows quality trends over the last 90 days"
    ],
    "answer": 1,
    "explanation": "Deep Quality Context means mabl retains knowledge of the application across testing steps — including behavior patterns, historical failures, user workflows, and team-defined standards — enabling more intelligent and complete quality management than stateless test runners."
  },
  {
    "id": "mb3",
    "category": "mabl",
    "question": "How does mabl's 'Adaptive Auto-Healing' differ from Playwright's self-healing approach?",
    "options": [
      "mabl's auto-healing uses machine learning; Playwright uses rule-based fixes — but both require human review",
      "mabl uses element history and prior run data to preserve test intent and continue runs; Playwright's healer still requires human review of every repair",
      "mabl heals only CSS selector changes; Playwright heals any DOM change",
      "There is no difference — both platforms auto-heal without human involvement"
    ],
    "answer": 1,
    "explanation": "mabl uses application history, prior runs, and understanding of test intent to adapt to UI changes automatically, continuing the run without stopping. Playwright's self-healing tooling still surfaces every repair for manual human review, making mabl's approach more autonomous for outer-loop testing."
  },
  {
    "id": "mb4",
    "category": "mabl",
    "question": "What is the mabl MCP server and which AI coding agents is it compatible with?",
    "options": [
      "A message-passing bridge for communicating between mabl test workers; compatible only with Jenkins agents",
      "An implementation of the Model Context Protocol that lets AI coding agents call mabl tools directly; compatible with Claude Code, Cursor, and VS Code with Copilot",
      "A microservices configuration protocol for deploying mabl in Kubernetes; compatible with any container orchestrator",
      "A model checkpointing protocol for saving AI model state; compatible only with Anthropic models"
    ],
    "answer": 1,
    "explanation": "The mabl MCP server implements the open Model Context Protocol standard, giving AI coding agents direct access to your mabl test workspace. It is compatible with Claude Code, Cursor, VS Code with Copilot, and any other MCP-compatible AI coding assistant."
  },
  {
    "id": "mb5",
    "category": "mabl",
    "question": "What are the four MCP server tools that mabl exposes to AI coding agents?",
    "options": [
      "create_test, run_test, delete_test, report_results",
      "get_recent_deployments, get_mabl_deployment, analyze_failure, get_test_run_artifact",
      "start_session, stop_session, get_logs, export_results",
      "login, authenticate, fetch_coverage, push_results"
    ],
    "answer": 1,
    "explanation": "mabl's MCP server exposes: get_recent_deployments (list recent deploys), get_mabl_deployment (natural language deploy lookup), analyze_failure (structured root cause + next steps), and get_test_run_artifact (retrieve screenshots, HAR files, and DOM snapshots from agent sessions)."
  },
  {
    "id": "mb6",
    "category": "mabl",
    "question": "How does mabl position itself relative to Playwright and Claude Code in the testing workflow?",
    "options": [
      "mabl replaces both Playwright and Claude Code — it handles the entire testing workflow end to end",
      "mabl provides outer-loop independent verification; Playwright handles inner-loop developer browser automation; Claude Code handles inner-loop AI code generation",
      "mabl is a reporting layer on top of Playwright tests generated by Claude Code",
      "mabl is only for mobile testing; Playwright is for web; Claude Code is for API testing"
    ],
    "answer": 1,
    "explanation": "mabl occupies the outer loop — system-level, cross-team, release-workflow verification with independent quality context. Playwright stays in the inner loop as developer-owned, code-proximate browser automation. Claude Code handles inner-loop AI coding assistance. All three are complementary."
  },
  {
    "id": "mb7",
    "category": "mabl",
    "question": "What does mabl mean by 'the author cannot be the verifier'?",
    "options": [
      "QA engineers cannot write tests for code they helped design",
      "When the same AI coding agent that writes feature code also generates and runs tests, independent verification is needed to avoid blind spots",
      "Test automation scripts should not be authored by the developers who write the application",
      "AI models cannot verify their own outputs without human oversight"
    ],
    "answer": 1,
    "explanation": "When AI coding agents like Claude Code generate both application code and test code, there is a risk of shared blind spots. mabl provides independent outer-loop verification that evaluates behavior outside the coding workflow that produced the change, ensuring genuine independent validation."
  },
  {
    "id": "mb8",
    "category": "mabl",
    "question": "What three layers does mabl use to manage test flakiness?",
    "options": [
      "Retry, skip, and ignore — three escalating responses to unreliable tests",
      "In-flight healing (heal mid-run for small UI drift), plan-level auto-retry (retry if first attempt fails), and quarantine plans (persistent failures run but don't block builds)",
      "Unit-level, integration-level, and system-level flake detection with separate escalation paths",
      "Red, amber, and green flakiness classifications that trigger different Slack notification levels"
    ],
    "answer": 1,
    "explanation": "mabl's three flake-management layers escalate progressively: (1) in-flight healing handles small UI drift mid-run, (2) plan-level auto-retry retries the plan if the first attempt fails, (3) quarantine plans let persistent failures continue running for visibility without blocking the build."
  },
  {
    "id": "mb9",
    "category": "mabl",
    "question": "What types of testing does mabl support within a single unified platform?",
    "options": [
      "Only web UI and REST API testing",
      "Web, mobile (iOS & Android), API, AI application testing, email testing, PDF validation, MFA workflows, and database queries",
      "Web, unit, and integration testing with optional mobile add-on",
      "Only cloud-hosted web applications — not mobile or API"
    ],
    "answer": 1,
    "explanation": "mabl unifies testing across web (browser), mobile (iOS and Android), APIs, AI applications, email workflows, PDF validation, MFA flows, and database queries — all within one platform, eliminating the tool sprawl that comes from using separate tools for each testing type."
  },
  {
    "id": "mb10",
    "category": "mabl",
    "question": "What is 'Natural Language Deployment Lookup' in mabl's MCP server?",
    "options": [
      "A feature that generates test names from natural language descriptions of requirements",
      "The ability for AI agents to query deployment status using conversational language like 'Check the deployment I just pushed to prod' instead of requiring commit hashes",
      "A natural language interface for writing mabl test assertions",
      "An NLP model that reads deployment logs and summarizes them in plain English"
    ],
    "answer": 1,
    "explanation": "Natural Language Deployment Lookup lets AI coding agents query mabl deployment status using conversational requests rather than requiring exact commit hashes or deployment IDs. An agent can ask 'Check the deployment I just pushed to prod' and mabl resolves the correct deployment automatically."
  },
  {
    "id": "mb11",
    "category": "mabl",
    "question": "What are 'Adaptive Assertions' in mabl?",
    "options": [
      "Assertions that automatically increase their timeout on slow networks",
      "Assertions that adjust based on application changes, preserving test intent rather than failing on minor UI modifications",
      "Statistical assertions that pass if the result is within a configurable tolerance range",
      "AI-generated assertions added to existing tests during nightly runs"
    ],
    "answer": 1,
    "explanation": "Adaptive Assertions in mabl adjust to application changes automatically, preserving what the test was meant to verify rather than failing on minor UI modifications. Combined with element history and run data, this reduces the maintenance burden caused by routine application updates."
  },
  {
    "id": "mb12",
    "category": "mabl",
    "question": "How does mabl's 'Progressive Disclosure' feature work in failure analysis?",
    "options": [
      "Test results are gradually revealed to stakeholders in order of severity",
      "AI agents surface only the information needed at each step — distinguishing flaky tests from genuine regressions and providing recovery paths — without overwhelming users with raw data",
      "The UI hides test failures until the user explicitly requests to see them",
      "Test reports are progressively generated over time as more data becomes available"
    ],
    "answer": 1,
    "explanation": "Progressive disclosure means the mabl AI agent surfaces needed information contextually: it first distinguishes flaky tests from real regressions, then identifies whether a fix requires updating a test assertion (UI refactor) or escalating to developers (actual code regression), avoiding information overload."
  },
  {
    "id": "mb13",
    "category": "mabl",
    "question": "What test artifacts can be retrieved via mabl's get_test_run_artifact MCP tool?",
    "options": [
      "Only text-based log files and JSON reports",
      "DOM snapshots, HAR files (network traffic captures), and screenshots from agent sessions, returned as base64",
      "Video recordings of test runs and performance flame graphs",
      "Source code diffs and deployment manifests associated with a test run"
    ],
    "answer": 1,
    "explanation": "The get_test_run_artifact MCP tool retrieves DOM snapshots (page structure at point of failure), HAR files (complete network traffic capture), and screenshots — all as base64-encoded data that AI coding agents can analyze directly for root cause investigation."
  },
  {
    "id": "mb14",
    "category": "mabl",
    "question": "What does 'Real-Time Polling' mean in the context of the mabl MCP server?",
    "options": [
      "mabl polls the database every second to check for new test results",
      "AI agents monitor active deployments during execution and receive live status updates automatically without needing repeated prompts",
      "The mabl server polls external CI systems for new build artifacts",
      "Test runs poll for UI changes every 100ms to detect element readiness"
    ],
    "answer": 1,
    "explanation": "Real-Time Polling means AI coding agents connected via the mabl MCP server can monitor active deployments during execution and receive live status updates automatically. This eliminates the need for the developer to repeatedly ask 'is it done yet?' — the agent reports back when the deployment completes or fails."
  },
  {
    "id": "mb15",
    "category": "mabl",
    "question": "What is mabl's 'outer-loop' vs 'inner-loop' testing philosophy?",
    "options": [
      "Outer-loop tests run nightly; inner-loop tests run on every commit",
      "Outer-loop is system-level cross-team verification at release boundaries; inner-loop is developer-owned, code-proximate unit and integration testing",
      "Outer-loop refers to browser testing; inner-loop refers to API testing",
      "Outer-loop is QA-owned; inner-loop is developer-owned, but both use the same tools"
    ],
    "answer": 1,
    "explanation": "Inner-loop testing is developer-owned, happens close to the code (unit tests, Playwright tests), and runs on every commit. Outer-loop testing — where mabl excels — is system-level verification at release boundaries, owned by QA and broader team, covering end-to-end journeys across multiple systems."
  },
  {
    "id": "mb16",
    "category": "mabl",
    "question": "What is mabl's approach to enabling non-technical team members to contribute to testing?",
    "options": [
      "Non-technical users can only view test reports, not create tests",
      "Low-code point-and-click workflows let QA, business users, and designers create and maintain tests without writing code",
      "mabl requires Python scripting for all test creation regardless of user role",
      "Non-technical users contribute via Gherkin feature files that mabl auto-executes"
    ],
    "answer": 1,
    "explanation": "mabl's low-code authoring enables QA engineers, product managers, designers, and business users to create and maintain tests through point-and-click workflows — no code required. Developers can still extend tests with code when needed. This makes testing a team sport, not just a QA responsibility."
  },
  {
    "id": "mb17",
    "category": "mabl",
    "question": "In mabl's internal testing setup, what naming convention do monitoring plans use to encode operational intent?",
    "options": [
      "Plans are named with ISO timestamps and severity levels (P0, P1, P2)",
      "Plan suffixes encode cadence and paging: e.g., (P4H+D) = every 4 hours plus deployment trigger; 📟 24/7 = on-call paging; (P15M) = every 15 minutes",
      "Plans use UUID-based names assigned automatically by the platform",
      "Plan names follow the format TEAM-SURFACE-FREQUENCY with no special characters"
    ],
    "answer": 1,
    "explanation": "mabl's internal plans encode operational meaning in their names: (P4H+D) means runs every four hours plus on deployment trigger; (P15M) means every 15 minutes; 📟 24/7 means it pages on-call engineers around the clock; 📟 wrk hrs means business-hours paging only."
  },
  {
    "id": "mb18",
    "category": "mabl",
    "question": "What is 'Coverage Mapping' in mabl?",
    "options": [
      "A visual heat map showing which lines of code are executed during test runs",
      "Linking team-defined quality goals and user journeys to specific tests, enabling governance and release risk visibility",
      "A report that maps failed tests to the developers who authored the related code",
      "A configuration that maps test files to CI/CD pipeline stages"
    ],
    "answer": 1,
    "explanation": "Coverage Mapping in mabl connects quality goals and business user journeys to specific tests, providing traceability from business requirements to test coverage. This enables governance, audit trails, and release risk assessment — showing stakeholders exactly which journeys are tested and which are gaps."
  },
  {
    "id": "mb19",
    "category": "mabl",
    "question": "What does the mabl get_test_recovery_session MCP tool provide?",
    "options": [
      "A session token for re-authenticating to the mabl platform after a timeout",
      "mabl's auto-heal decisions for a specific test — showing what the platform changed and why, for transparency and audit",
      "A replay of the failed test session in a sandboxed browser environment",
      "Recovery instructions exported as a Jira ticket for the development team"
    ],
    "answer": 1,
    "explanation": "get_test_recovery_session exposes mabl's auto-heal decisions for a specific test run — what the platform changed, what element it found instead, and why. This transparency is critical for auditing automated maintenance decisions and building team confidence in autonomous healing."
  },
  {
    "id": "mb20",
    "category": "mabl",
    "question": "What is mabl's 'Reusable Flows' feature and why is it important for test maintenance?",
    "options": [
      "Flows that automatically re-run failed tests until they pass",
      "Named, reusable test building blocks (e.g., login, navigation) defined once and inherited across all tests that need them, so changes propagate automatically",
      "HTTP request templates shared across API test suites",
      "CI/CD workflow templates that can be copied to new projects"
    ],
    "answer": 1,
    "explanation": "Reusable Flows let teams define common interactions once (e.g., 'App - Login Flow') and reference them across many tests. When the login UI changes, updating the flow propagates the fix everywhere it's used — dramatically reducing maintenance compared to duplicating steps in every test script."
  },
  {
    "id": "mb21",
    "category": "mabl",
    "question": "How does mabl describe the problem AI-generated code creates for QA teams?",
    "options": [
      "AI-generated code contains too many edge cases for existing test frameworks to handle",
      "AI coding agents produce code faster than traditional verification can validate it — the verification layer must scale at the same rate or the org doesn't get faster delivery",
      "AI-generated code is less reliable than human-written code and requires more test cases per feature",
      "AI coding agents bypass code reviews, leaving QA as the only safety net"
    ],
    "answer": 1,
    "explanation": "mabl's core argument: 'If the verification layer doesn't scale at the same rate as the generator, the org doesn't get faster delivery.' As AI coding agents dramatically increase code throughput, agentic testing platforms like mabl provide the autonomous verification capacity to match that pace."
  },
  {
    "id": "mb22",
    "category": "mabl",
    "question": "What typed label categories does mabl use internally to organize test plans?",
    "options": [
      "smoke, regression, sanity, exploratory",
      "cicd-* (CI triggers), feature-* (product surface), team-* (failure routing), monitoring, ops-alerts-paging",
      "p0, p1, p2, p3 (priority levels)",
      "unit, integration, e2e, performance"
    ],
    "answer": 1,
    "explanation": "mabl uses typed labels by purpose: cicd-* labels trigger specific CI pipeline stages, feature-* labels group tests by product surface, team-* labels route failures to the correct team's Slack channel, and monitoring/ops-alerts-paging labels distinguish synthetic monitoring from alert-paging tiers."
  },
  {
    "id": "mb23",
    "category": "mabl",
    "question": "What governance capabilities does mabl provide that code-based frameworks like Playwright lack?",
    "options": [
      "mabl generates compliance audit reports automatically from test results",
      "Unified system of record with role-based access, traceability, audit controls, unified reporting, and coverage dashboards shared across QA and engineering teams",
      "mabl integrates with SOC 2 audit tools to automatically generate security evidence",
      "mabl enforces coding standards via built-in static analysis of test scripts"
    ],
    "answer": 1,
    "explanation": "Unlike Playwright tests scattered across repositories, mabl provides a unified system of record: role-based access control, change traceability, audit controls, shared coverage dashboards, and CI/CD integrations visible to both QA and engineering teams — critical for regulated industries and enterprise governance."
  },
  {
    "id": "mb24",
    "category": "mabl",
    "question": "What is the division-of-labor principle mabl uses internally for test ownership?",
    "options": [
      "QA engineers own all tests; developers are not responsible for any testing",
      "'Builders own tests; QE does suite engineering' — software engineers, PMs, and designers maintain their own mabl tests while QE handles suite strategy, coverage analysis, and new testing approaches",
      "Developers own unit tests; QA owns everything else",
      "All tests are owned by a dedicated automation team separate from product teams"
    ],
    "answer": 1,
    "explanation": "mabl's internal model is 'Builders own tests; QE does suite engineering.' Software engineers, PMs, and designers directly maintain the mabl tests for their own features. The QE team focuses on higher-level concerns: suite optimization, coverage analysis, and developing strategies for emerging challenges like agentic and non-deterministic systems."
  },
  {
    "id": "mb25",
    "category": "mabl",
    "question": "How does the mabl agentic failure analysis distinguish between a flaky test and a genuine regression?",
    "options": [
      "By running the same test 10 times and checking the pass rate",
      "By cross-referencing live failures against historical test suite data, identifying whether the failure pattern indicates intermittent flakiness or a consistent new regression introduced by recent code",
      "By asking the developer whether they changed the relevant feature",
      "By comparing the test's pass rate over the last 7 days to a threshold"
    ],
    "answer": 1,
    "explanation": "mabl's agentic failure analysis runs a multi-step workflow (not a single LLM call) that cross-references current failures against historical test suite data. This reveals whether the failure is an intermittent flake, a test that needs updating due to a UI refactor, or a genuine code regression requiring escalation to developers."
  },
  {
    "id": "ot1",
    "category": "others",
    "question": "What is an Order Management System (OMS) and what are its core functions?",
    "options": [
      "A system for managing employee schedules and payroll",
      "A system that handles the full lifecycle of financial orders — creation, routing, execution, allocation, and settlement",
      "A database for storing historical stock prices",
      "A reporting tool for regulatory compliance filings"
    ],
    "answer": 1,
    "explanation": "An OMS manages the complete lifecycle of financial trade orders from creation through settlement. Core functions include order entry, validation, routing to execution venues, position management, allocation across accounts, and settlement tracking."
  },
  {
    "id": "ot2",
    "category": "others",
    "question": "What is the complete lifecycle of a financial trade order?",
    "options": [
      "Submit → Confirm → Archive",
      "Create → Validate → Route → Execute → Allocate → Clear → Settle",
      "Place → Fill → Report",
      "Request → Approve → Process → Complete"
    ],
    "answer": 1,
    "explanation": "A trade order goes through: creation (trader intent), pre-trade validation (risk/compliance checks), routing to exchange/venue, execution (fill), allocation across accounts, clearing through a clearinghouse, and finally settlement (T+1 or T+2)."
  },
  {
    "id": "ot3",
    "category": "others",
    "question": "What is the FIX protocol and why is it important for OMS testing?",
    "options": [
      "A bug tracking system for financial software",
      "A standardized electronic messaging protocol for real-time exchange of securities transactions between trading parties",
      "A method for repairing corrupted database records",
      "A framework for writing automated tests in the financial domain"
    ],
    "answer": 1,
    "explanation": "FIX (Financial Information eXchange) is the industry-standard protocol for electronic trading. Testing FIX messages involves validating message types (NewOrderSingle, ExecutionReport), field formats, sequence numbers, and heartbeat handling."
  },
  {
    "id": "ot4",
    "category": "others",
    "question": "What are pre-trade risk checks in a trading system?",
    "options": [
      "Checks that run after a trade settles to verify accuracy",
      "Automated validations before order submission — position limits, credit checks, restricted lists, and regulatory compliance",
      "Manual reviews by compliance officers before market open",
      "Database integrity checks on the order table"
    ],
    "answer": 1,
    "explanation": "Pre-trade checks are automated validations that run before an order is submitted to the market. They include position limit checks, credit/buying power validation, restricted security lists, and regulatory compliance rules. They have high testing complexity due to edge cases."
  },
  {
    "id": "ot5",
    "category": "others",
    "question": "What is the difference between an OMS, EMS, and PMS in trading technology?",
    "options": [
      "They are different names for the same system",
      "OMS manages order lifecycle, EMS handles execution/routing to venues, PMS manages portfolios and positions",
      "OMS is for stocks, EMS is for bonds, PMS is for derivatives",
      "OMS is front-office, EMS is middle-office, PMS is back-office"
    ],
    "answer": 1,
    "explanation": "OMS (Order Management System) handles order lifecycle from creation to settlement. EMS (Execution Management System) focuses on smart order routing and execution algorithms. PMS (Portfolio Management System) tracks positions, P&L, and portfolio analytics. QE scope varies significantly across each."
  },
  {
    "id": "ot6",
    "category": "others",
    "question": "What is 'paper trading' (sandbox environment) in the context of QE?",
    "options": [
      "Using physical paper forms to track test results",
      "A simulated trading environment that mimics production market conditions without real money, used for testing",
      "A regulatory requirement for documenting test plans",
      "A method for manual testing where testers follow printed scripts"
    ],
    "answer": 1,
    "explanation": "Paper trading environments simulate real market conditions without executing actual trades or moving real money. QE teams use them for integration testing, UAT, and performance testing against realistic market data and order flows."
  },
  {
    "id": "ot7",
    "category": "others",
    "question": "How do you test order cancellation and amendment edge cases in an OMS?",
    "options": [
      "Only test successful cancellations; failures are handled by operations",
      "Test cancel/amend at every order state — pending, partially filled, in-market — including race conditions and out-of-sequence messages",
      "Test only after market hours when there is no risk",
      "Cancellation testing is not needed if pre-trade checks work correctly"
    ],
    "answer": 1,
    "explanation": "Order cancellation/amendment must be tested at every state: pending (easy), partially filled (partial cancel), and in-market (cancel-replace). Edge cases include race conditions where execution arrives during cancel, out-of-sequence FIX messages, and timeout handling."
  },
  {
    "id": "ot8",
    "category": "others",
    "question": "What are QA KPIs (Key Performance Indicators) used to measure?",
    "options": [
      "Individual developer productivity",
      "The effectiveness, efficiency, and coverage of the quality assurance process",
      "Project budget adherence",
      "Customer satisfaction with the final product"
    ],
    "answer": 1,
    "explanation": "QA KPIs measure the health of the testing process — defect detection rate, test coverage, automation ratio, defect escape rate, mean time to detect/resolve, test execution velocity, and requirements coverage. They help teams identify improvement areas."
  },
  {
    "id": "ot9",
    "category": "others",
    "question": "What is the defect escape rate and why is it a critical QA metric?",
    "options": [
      "The percentage of testers who leave the team each quarter",
      "The percentage of defects found in production that were missed during testing phases",
      "The speed at which defects are fixed after discovery",
      "The number of test cases that fail during regression testing"
    ],
    "answer": 1,
    "explanation": "Defect escape rate measures how many bugs slip through testing into production. A high escape rate indicates gaps in test coverage, missing test scenarios, or insufficient testing depth. It's a direct measure of testing effectiveness."
  },
  {
    "id": "ot10",
    "category": "others",
    "question": "What is an automation roadmap and what does it typically include?",
    "options": [
      "A list of all manual tests to be automated",
      "A phased plan covering tool selection, framework design, test prioritization, team training, CI/CD integration, and success metrics",
      "A timeline for hiring automation engineers",
      "A vendor comparison document for test automation tools"
    ],
    "answer": 1,
    "explanation": "An automation roadmap is a strategic plan that covers: current state assessment, tool/framework selection, priority areas for automation (smoke, regression, API), team skill development, CI/CD pipeline integration, and metrics to track ROI and progress."
  },
  {
    "id": "ot11",
    "category": "others",
    "question": "What is a surety bond, and why should QA professionals in regulated industries understand it?",
    "options": [
      "A type of software license that guarantees vendor support for a specified period",
      "A financial guarantee that a company or individual will complete obligations, follow laws, or pay debts — relevant to QA in regulated industries that test financial guarantee workflows",
      "An insurance policy that covers software defects found in production",
      "A contract between a QA team and their client guaranteeing zero defects"
    ],
    "answer": 1,
    "explanation": "A surety bond is a financial guarantee involving three parties. QA professionals in regulated industries such as insurance, construction, and finance must understand these domain concepts to effectively design test scenarios for bond issuance, claims, and compliance workflows."
  },
  {
    "id": "ot12",
    "category": "others",
    "question": "Who are the three parties in a financial guarantee bond, and why does this matter for QA test design?",
    "options": [
      "Buyer, seller, and auditor — QA tests the transaction between buyer and seller",
      "Principal (obligated party), obligee (protected party), and surety (guarantor) — QA must test workflows and permissions for all three distinct user roles",
      "Applicant, reviewer, and approver — QA tests the linear approval workflow",
      "Client, broker, and underwriter — QA tests the communication channel between parties"
    ],
    "answer": 1,
    "explanation": "The three-party structure means QA must design test scenarios for each role's distinct permissions, views, and workflows. The principal applies, the obligee is protected, and the surety guarantees performance. Multi-role testing ensures no party can access or modify data outside their authority."
  },
  {
    "id": "ot13",
    "category": "others",
    "question": "How does underwriting differ from traditional insurance risk assessment, and what does this mean for QA validation?",
    "options": [
      "Underwriting only applies to health insurance; other insurance types use actuarial tables exclusively",
      "Traditional insurance expects losses and spreads risk across a pool; underwriting for financial guarantees expects zero loss and evaluates the applicant's financial strength — QA must validate different risk models",
      "Underwriting is fully automated while traditional insurance requires manual review",
      "There is no meaningful difference; both use the same risk assessment algorithms"
    ],
    "answer": 1,
    "explanation": "In financial guarantee underwriting, the expectation is zero loss, so the evaluation focuses on the applicant's financial strength, capacity, and track record. QA must validate that risk scoring models, financial analysis rules, and approval thresholds correctly reflect this zero-loss expectation."
  },
  {
    "id": "ot14",
    "category": "others",
    "question": "What is a performance bond, and what lifecycle events must QA test?",
    "options": [
      "A bond that guarantees software will meet performance benchmarks — QA tests load and stress scenarios",
      "A financial guarantee that a contractor will complete a project according to contract terms — QA must test issuance, monitoring, claims, and release workflows",
      "A type of employee performance incentive tracked in HR systems",
      "A certificate issued after passing performance testing in a CI/CD pipeline"
    ],
    "answer": 1,
    "explanation": "A performance bond guarantees project completion according to contract terms. QA must test the full lifecycle: application submission, underwriting evaluation, bond issuance, project monitoring, claims filing if the contractor defaults, and bond release upon successful project completion."
  },
  {
    "id": "ot15",
    "category": "others",
    "question": "What is a payment bond, and how does it differ from a performance bond in terms of test scenarios?",
    "options": [
      "A payment bond guarantees online payment processing; a performance bond guarantees server uptime",
      "A payment bond guarantees subcontractors and suppliers will be paid; a performance bond guarantees project completion — different claimant types require different test workflows",
      "They are interchangeable terms for the same type of financial guarantee",
      "A payment bond covers only material costs; a performance bond covers only labor costs"
    ],
    "answer": 1,
    "explanation": "Payment bonds and performance bonds protect different parties. Payment bonds ensure subcontractors, laborers, and suppliers get paid, while performance bonds guarantee project completion. QA must test distinct claims workflows since the claimant types, validation rules, and resolution paths differ."
  },
  {
    "id": "ot16",
    "category": "others",
    "question": "What is the underwriting process, and what are the key QA validation points?",
    "options": [
      "A post-production review of software quality metrics — QA validates reporting accuracy",
      "The process of evaluating risk before issuing a financial guarantee — QA must validate data intake, risk scoring algorithms, approval thresholds, and decision audit trails",
      "A method for prioritizing test cases based on code coverage — QA validates test selection logic",
      "An automated deployment process that underwrites each release candidate — QA validates the pipeline"
    ],
    "answer": 1,
    "explanation": "Underwriting evaluates risk before issuing a bond or policy. QA must validate that applications capture all required data, risk scoring algorithms produce correct results, approval authority thresholds are enforced, and every decision is logged with an audit trail for regulatory compliance."
  },
  {
    "id": "ot17",
    "category": "others",
    "question": "Why are financial statements important in risk evaluation systems, and what should QA validate?",
    "options": [
      "They are only needed for tax reporting — QA validates the tax calculation logic",
      "They help evaluate whether an entity has sufficient assets, cash flow, and profitability — QA must validate that the system correctly parses, calculates ratios, and flags anomalies",
      "They are optional supporting documents — QA only validates that upload functionality works",
      "They are used exclusively by external auditors — QA has no testing responsibility"
    ],
    "answer": 1,
    "explanation": "Financial statements reveal an entity's financial health. QA must test that systems correctly parse financial data from various formats, calculate key ratios like working capital and debt-to-equity, flag anomalies or inconsistencies, and trigger appropriate workflow actions based on financial thresholds."
  },
  {
    "id": "ot18",
    "category": "others",
    "question": "What is working capital, and why is it a critical data validation point in financial systems?",
    "options": [
      "Total revenue minus total expenses for the current fiscal year",
      "Current assets minus current liabilities — it indicates short-term financial health and must be accurately calculated by the system",
      "The total amount of capital invested in IT infrastructure",
      "The budget allocated for the current development sprint"
    ],
    "answer": 1,
    "explanation": "Working capital (current assets minus current liabilities) is a key indicator of short-term financial health. QA must validate that financial systems correctly calculate this metric from input data, as errors in working capital computation can lead to incorrect risk assessments and approval decisions."
  },
  {
    "id": "ot19",
    "category": "others",
    "question": "What is a claims investigation workflow, and what are the primary QA test scenarios?",
    "options": [
      "A process for investigating failed test cases in a CI/CD pipeline — QA tests the retry logic",
      "A structured process for reviewing contracts, project status, financials, and legal responsibilities after a claim is filed — QA tests status tracking, document management, and resolution paths",
      "A method for triaging production incidents by severity — QA tests the escalation rules",
      "A workflow for processing customer support tickets — QA tests the routing and SLA compliance"
    ],
    "answer": 1,
    "explanation": "Claims investigation involves reviewing contracts, project status, financials, and legal responsibilities to determine the validity and resolution of a claim. QA must test the complete workflow: intake, document collection, status transitions, assignment rules, communication logs, and resolution outcomes."
  },
  {
    "id": "ot20",
    "category": "others",
    "question": "What is subrogation, and what QA testing considerations does it introduce?",
    "options": [
      "A method for substituting one test environment for another during QA — test environment switching logic",
      "The right to recover money from responsible parties after paying a claim — QA must test recovery tracking, party identification, and financial reconciliation workflows",
      "A process for delegating test execution to a subordinate team — QA tests delegation rules",
      "A regulatory requirement for submitting test reports to external auditors"
    ],
    "answer": 1,
    "explanation": "Subrogation allows the guarantor to recover funds from the responsible party after paying a claim. QA must test the recovery initiation workflow, responsible party identification, payment tracking, partial recovery scenarios, and financial reconciliation between the original claim and recovered amounts."
  },
  {
    "id": "ot21",
    "category": "others",
    "question": "What is enterprise risk management (ERM), and how does it relate to QA strategy?",
    "options": [
      "A tool for managing test execution risks like flaky tests and environment instability",
      "A structured approach to identifying and controlling risk across the entire organization — QA applies similar principles to identify, assess, and mitigate quality risks across products",
      "A compliance framework specific to the European Union's data protection regulations",
      "An insurance product that covers enterprises against software failure losses"
    ],
    "answer": 1,
    "explanation": "Enterprise risk management is a structured, organization-wide approach to identifying and controlling risk. QA leaders apply similar risk management principles when designing quality strategies: identifying risk areas, assessing likelihood and impact, implementing controls, and monitoring residual risk."
  },
  {
    "id": "ot22",
    "category": "others",
    "question": "What is work-in-progress (WIP) reporting, and why is it important for QA in project-based industries?",
    "options": [
      "A Kanban board metric that limits concurrent tasks — QA uses it to prevent testing bottlenecks",
      "A report that tracks project profitability and completion status — QA validates calculation accuracy and percentage-of-completion logic",
      "A daily standup format for reporting testing progress to stakeholders",
      "A Git metric that shows how many branches have uncommitted changes"
    ],
    "answer": 1,
    "explanation": "Work-in-progress reporting tracks project profitability and completion status, commonly using percentage-of-completion methods. QA must validate that systems correctly calculate earned revenue, cost-to-complete estimates, and over/under billing, as errors can misrepresent financial position."
  },
  {
    "id": "ot23",
    "category": "others",
    "question": "What is loss ratio, and how is this concept applied as a QA metric?",
    "options": [
      "The ratio of failed tests to total tests executed — used to measure test suite reliability",
      "The ratio of claims paid to premiums earned — in QA terms, the cost of escaped defects compared to the investment in quality engineering",
      "The percentage of data lost during system migration testing",
      "The ratio of open bugs to closed bugs at the end of a release cycle"
    ],
    "answer": 1,
    "explanation": "Loss ratio compares claims paid to premiums earned. QA leaders can apply this concept by comparing the cost of production defects (escaped bugs, incidents, customer impact) to quality engineering investment, creating a compelling business metric for demonstrating QA value."
  },
  {
    "id": "ot24",
    "category": "others",
    "question": "What is concentration risk, and how does it apply to QA resource planning?",
    "options": [
      "The risk of too many defects concentrated in one module — addressed by increasing test coverage",
      "The risk of too much exposure in one customer, region, or capability area — in QA, over-reliance on one tool, one team member, or one test type creates similar vulnerability",
      "The risk of running too many tests simultaneously, causing resource contention",
      "The risk of test data being concentrated in a single database, causing performance issues"
    ],
    "answer": 1,
    "explanation": "Concentration risk occurs when too much exposure is concentrated in one area. QA teams face similar risks: over-reliance on a single automation framework, one subject matter expert, or only one type of testing. Diversifying QA investments across tools, skills, and test types reduces this vulnerability."
  },
  {
    "id": "ot25",
    "category": "others",
    "question": "What are leading indicators of project or organizational distress that QA teams should monitor?",
    "options": [
      "Increasing code coverage percentages and faster build times",
      "Declining quality margins, delayed deliverables, increasing technical debt, and rapid uncontrolled growth without process scaling",
      "Higher test automation ratios and more frequent deployments",
      "Stable defect counts and consistent sprint velocities"
    ],
    "answer": 1,
    "explanation": "Leading indicators of distress include declining quality margins (more escaped defects), delayed payments or deliverables, increasing technical debt, and rapid growth without proportional process scaling. QA teams that monitor these signals can raise quality risks before they become critical failures."
  },
  {
    "id": "ot26",
    "category": "others",
    "question": "How do you approach test data management for testing at scale across multiple environments?",
    "options": [
      "Copy production data into all test environments and use it directly",
      "Use a combination of synthetic data generation, masked production data, and on-demand provisioning to provide realistic, compliant test data that can be refreshed independently per environment",
      "Manually create test data spreadsheets and import them before each test run",
      "Share a single static test data set across all environments and test types"
    ],
    "answer": 1,
    "explanation": "Scalable test data management combines synthetic generation for volume, masked production data for realism, and on-demand provisioning for independence. Each environment should be able to refresh its data without affecting others, and PII must never appear in non-production environments."
  },
  {
    "id": "ot27",
    "category": "others",
    "question": "What does 'design for testability' mean, and what signals indicate a system was not designed with testability in mind?",
    "options": [
      "Adding a 'test mode' flag that bypasses all validation — indicated by the need for many workarounds in test scripts",
      "Architecting systems with clear interfaces, dependency injection, observable state, and configurable behaviors so they can be tested at every level — signaled by the absence of hard-coded dependencies and the presence of health check endpoints",
      "Writing the test suite before writing any application code — signaled by test-first commit history",
      "Designing a dedicated test environment that mirrors production exactly — signaled by infrastructure parity"
    ],
    "answer": 1,
    "explanation": "Testable systems have clear API boundaries, injectable dependencies, observable internal state, and configurable behaviors. Red flags include hard-coded URLs, tightly coupled services, no health check endpoints, and the inability to test a component without starting the entire system."
  },
  {
    "id": "ot28",
    "category": "others",
    "question": "How do you ensure your QA work is maintainable after you leave a project or engagement?",
    "options": [
      "Write comprehensive documentation at the end of the engagement summarizing everything",
      "Build maintainability into every artifact from day one: clear naming conventions, self-documenting tests, a runbook for common tasks, and knowledge transfer sessions with the team throughout the engagement",
      "Record video walkthroughs of the entire test suite before departure",
      "Train one team member as a backup and rely on them to maintain everything"
    ],
    "answer": 1,
    "explanation": "Sustainable QA work is built from day one, not documented at the end. Self-documenting test names, consistent framework patterns, a runbook for common operations, and ongoing knowledge transfer ensure the team can maintain and extend the work independently after the engagement ends."
  },
  {
    "id": "ot29",
    "category": "others",
    "question": "What is TDD (Test-Driven Development) and BDD (Behavior-Driven Development), and how do they differ?",
    "options": [
      "TDD and BDD are the same methodology with different names used by different teams",
      "TDD writes unit tests before code to drive implementation; BDD extends TDD by writing tests in business-readable language (Given/When/Then) to align technical and business stakeholders on expected behavior",
      "TDD is for developers only; BDD is for QA only — they never overlap",
      "TDD focuses on UI testing; BDD focuses on API testing"
    ],
    "answer": 1,
    "explanation": "TDD drives implementation through the red-green-refactor cycle at the unit level. BDD extends this by expressing behavior in Given/When/Then format that both technical and business stakeholders can understand, bridging the communication gap and ensuring tests reflect business intent."
  },
  {
    "id": "ot30",
    "category": "others",
    "question": "How do you prevent an automation test suite from becoming a bottleneck that slows releases?",
    "options": [
      "Run the full test suite only before major releases and skip it for minor changes",
      "Implement tiered execution (fast smoke tests on every PR, full regression nightly), parallelize test execution, maintain test independence, and ruthlessly remove or fix flaky tests",
      "Increase the CI/CD server hardware to make tests run faster",
      "Allow developers to skip the test suite when they are confident in their changes"
    ],
    "answer": 1,
    "explanation": "Tiered execution ensures fast feedback (smoke tests in minutes on every PR) without blocking releases. Parallelization reduces wall-clock time, test independence prevents cascading failures, and active flaky test management ensures the suite remains a trusted quality signal rather than noise."
  },
  {
    "id": "ot31",
    "category": "others",
    "question": "What is the difference between load testing, stress testing, spike testing, soak testing, and endurance testing?",
    "options": [
      "They are all synonyms for performance testing with no meaningful distinction",
      "Load tests validate expected traffic; stress tests push beyond capacity to find breaking points; spike tests simulate sudden bursts; soak tests run sustained load for hours to find memory leaks; endurance tests verify long-term stability",
      "Load and stress testing are automated; spike, soak, and endurance testing are manual",
      "Each type uses a different tool: JMeter for load, k6 for stress, Gatling for spike, Locust for soak"
    ],
    "answer": 1,
    "explanation": "Each type targets a different risk: load testing validates normal capacity, stress testing finds breaking points, spike testing validates handling of sudden traffic surges, soak testing reveals memory leaks and connection pool exhaustion over time, and endurance testing confirms sustained stability."
  },
  {
    "id": "ot32",
    "category": "others",
    "question": "What is AppDynamics and how is it used in a QE context?",
    "options": [
      "A test automation framework for generating mobile application tests",
      "An Application Performance Monitoring (APM) tool that provides real-time visibility into application behavior, used by QE to correlate test execution with application performance metrics and trace transactions across services",
      "A CI/CD pipeline orchestration tool that manages deployment workflows",
      "A static code analysis tool that identifies potential bugs before runtime"
    ],
    "answer": 1,
    "explanation": "AppDynamics is an APM tool that monitors application performance in real time. QE teams use it to correlate test failures with performance degradation, trace transactions across microservices, identify slow database queries, and establish performance baselines for regression detection."
  },
  {
    "id": "ot33",
    "category": "others",
    "question": "What is the key distinction between a QA Architect and a QA Engineer?",
    "options": [
      "A QA Architect writes more test cases than a QA Engineer",
      "A QA Architect operates at the systems-design level, defining quality strategy, tooling ecosystems, standards, and governance, while a QA Engineer executes within that framework",
      "A QA Architect only reviews code and never writes tests",
      "A QA Architect manages people while a QA Engineer manages tools"
    ],
    "answer": 1,
    "explanation": "A QA Architect defines the blueprint that answers what to test, how, when, with which tools, in which environments, and who owns each layer. A QA Engineer executes testing within that architecture. Without the architect's blueprint, teams often duplicate effort and create inefficient test suites."
  },
  {
    "id": "ot34",
    "category": "others",
    "question": "What is the first step when building a QA strategy from scratch for a new product?",
    "options": [
      "Select and purchase automation tools based on industry recommendations",
      "Start with risk analysis: understand the business domain, criticality, user base, and failure cost, then define test levels and quality gates accordingly",
      "Write a comprehensive test plan document covering all possible test scenarios",
      "Hire a full QA team before defining any strategy"
    ],
    "answer": 1,
    "explanation": "Building a QA strategy starts with risk analysis and stakeholder interviews, not tool selection. Understanding business domain, failure cost, and regulatory constraints drives decisions about test levels, coverage targets, and where to invest automation effort."
  },
  {
    "id": "ot35",
    "category": "others",
    "question": "What does shift-left testing mean architecturally, and what is a concrete enforcement mechanism?",
    "options": [
      "Moving all testing to the left side of the Kanban board so it happens during planning sprints",
      "Moving testing activities earlier in the SDLC by enforcing unit test coverage thresholds as PR gates, running contract tests at API design time, and including QA in requirement refinement",
      "Having QA engineers sit physically closer to developers in the office",
      "Running load tests earlier in the sprint instead of at the end"
    ],
    "answer": 1,
    "explanation": "Shift-left embeds testing in design and development rather than treating it as a post-development phase. Concrete mechanisms include unit test coverage as PR gates, contract tests during API design, static analysis in IDEs, and QA participation in 3-amigos sessions."
  },
  {
    "id": "ot36",
    "category": "others",
    "question": "How does the test pyramid adapt to a microservices architecture?",
    "options": [
      "The pyramid stays exactly the same regardless of architecture",
      "The pyramid is inverted with more E2E tests since microservices have more integration points",
      "Each service has its own pyramid with unit tests at the base, and contract tests replace many E2E tests for service-to-service integration",
      "The pyramid is replaced entirely by a flat model where all test types have equal importance"
    ],
    "answer": 2,
    "explanation": "In microservices, each service maintains its own test pyramid. Contract tests (using tools like Pact) verify service-to-service compatibility cheaply and fast, replacing the many E2E tests that would otherwise be needed to verify integration. E2E tests are reserved for critical user journeys."
  },
  {
    "id": "ot37",
    "category": "others",
    "question": "What is the testing trophy model, and when would you choose it over the traditional test pyramid?",
    "options": [
      "The testing trophy is a trophy given to teams with the highest test coverage",
      "The testing trophy emphasizes integration tests as the largest layer, with static analysis at the base; choose it for frontend-heavy applications where units are highly interdependent",
      "The testing trophy eliminates unit tests entirely in favor of E2E tests",
      "The testing trophy is only applicable to mobile applications"
    ],
    "answer": 1,
    "explanation": "The testing trophy (Kent C. Dodds) has static analysis at the base, some unit tests, many integration tests, and fewer E2E tests. It works well for frontend-heavy apps (React/Vue) where integration tests provide better confidence-to-cost ratio than isolated unit tests."
  },
  {
    "id": "ot38",
    "category": "others",
    "question": "What is exploratory testing, and what structure prevents it from being ad hoc random clicking?",
    "options": [
      "Exploratory testing is unstructured free-form testing that does not require documentation",
      "Session-based test management (SBTM) with time-boxed sessions, defined charters, debriefing notes, and heuristics like HICCUPPS",
      "Exploratory testing uses recorded scripts played back at variable speeds",
      "Exploratory testing is only performed by senior QA engineers during production incidents"
    ],
    "answer": 1,
    "explanation": "Exploratory testing is simultaneous learning, test design, and execution. SBTM (session-based test management) provides structure through time-boxed sessions with specific charters, debriefing, and coverage tracked via heuristics (HICCUPPS: History, Image, Claims, Comparable Products, User expectations, Product, Purpose, Standards)."
  },
  {
    "id": "ot39",
    "category": "others",
    "question": "What is shadow testing, and when is it used during a monolith-to-microservices migration?",
    "options": [
      "Testing the new system in a dark room to eliminate screen glare distractions",
      "Routing real traffic to both the old monolith and new microservice simultaneously, comparing responses to catch behavioral differences before cutover",
      "Testing the monolith with reduced functionality to simulate the microservice version",
      "Running tests only during off-peak hours when the system is in a shadow state"
    ],
    "answer": 1,
    "explanation": "Shadow testing routes real production requests to both the old and new systems, comparing responses without surfacing the new system's results to users. This reveals calculation differences and behavioral mismatches before the actual cutover, reducing migration risk."
  },
  {
    "id": "ot40",
    "category": "others",
    "question": "What is the primary risk of AI-assisted testing that QA Architects must guard against?",
    "options": [
      "AI-generated tests run too slowly for CI pipelines",
      "AI-generated tests may have low assertion quality, executing code without asserting meaningful business logic, creating false confidence from high test counts",
      "AI tools are too expensive for most organizations to adopt",
      "AI cannot generate tests for modern frontend frameworks"
    ],
    "answer": 1,
    "explanation": "AI can generate thousands of tests that look comprehensive but only assert on status codes, not business logic values. A critical calculation bug may go undetected because AI tests execute the right endpoints without verifying the correctness of returned values."
  },
  {
    "id": "ot41",
    "category": "others",
    "question": "What are the key testing dimensions for machine learning models that differ from traditional software testing?",
    "options": [
      "ML models only need unit tests on the API layer since the model itself cannot be tested",
      "Data quality, model performance metrics (accuracy, precision, recall, F1), behavioral edge cases, bias/fairness testing, and monitoring for model drift in production",
      "ML models require the same test types as any other software component",
      "Only A/B testing in production is needed since ML model behavior cannot be predicted in test environments"
    ],
    "answer": 1,
    "explanation": "ML testing uniquely includes data quality validation, model performance thresholds on held-out test sets, metamorphic testing for behavioral consistency, fairness testing across demographic groups, and production monitoring for model drift as data patterns evolve."
  },
  {
    "id": "ot42",
    "category": "others",
    "question": "What is visual regression testing, and when is it essential to include in the test strategy?",
    "options": [
      "Visual regression testing checks that images load correctly on the page",
      "Visual regression testing compares UI screenshots between builds to catch unintended visual changes; it is essential when functional tests pass but CSS changes break rendering across pages",
      "Visual regression testing is only needed for mobile applications",
      "Visual regression testing replaces all functional UI tests"
    ],
    "answer": 1,
    "explanation": "Visual regression tools (Percy, Applitools, Chromatic) compare screenshots between builds. They catch rendering issues that functional tests miss, such as CSS changes that subtly break layout. Essential for design systems, marketing sites, and dashboards."
  },
  {
    "id": "ot43",
    "category": "others",
    "question": "What is observability-driven testing, and how does it extend traditional QA?",
    "options": [
      "Monitoring test execution in real time to catch flaky tests faster",
      "Using production telemetry (logs, metrics, traces) to inform test case design, validate deployments via canary analysis, and detect regressions that test environments cannot replicate",
      "Adding more logging statements to test code for better debugging",
      "Observing users during usability testing sessions to identify UX issues"
    ],
    "answer": 1,
    "explanation": "Observability-driven testing uses production signals to enhance QA: analyzing traces reveals untested edge cases, canary analysis validates deployments automatically, and anomaly detection catches regressions that fixed-threshold monitoring would miss."
  },
  {
    "id": "ot44",
    "category": "others",
    "question": "What is the common anti-pattern when organizations adopt BDD (Behavior-Driven Development), and how should it be corrected?",
    "options": [
      "BDD tests run too slowly; correct by reducing the number of scenarios",
      "QA writing Gherkin scenarios without product team collaboration, turning BDD into a test automation format rather than a collaboration tool; correct by limiting BDD to critical user journeys co-authored with product",
      "Developers refuse to use Given/When/Then syntax; correct by mandating it through code reviews",
      "BDD cannot be integrated with CI/CD; correct by using a different testing framework"
    ],
    "answer": 1,
    "explanation": "The BDD anti-pattern occurs when QA writes Gherkin without genuine product collaboration, producing thousands of scenarios that only QA maintains. The fix is limiting BDD to 20-30 critical user journeys co-written with product, making them living documentation rather than a test automation burden."
  },
  {
    "id": "ot45",
    "category": "others",
    "question": "How would you test a premium rating engine in an insurance system?",
    "options": [
      "Run a single sample quote and verify the total premium",
      "Use boundary value analysis on rating factors, decision tables mapped to underwriting rules, and golden-master comparison against actuarially-approved manual calculations across hundreds of scenarios",
      "Test only the happy path since actuaries already validate the rates",
      "Run the rating engine only after all policy data is complete"
    ],
    "answer": 1,
    "explanation": "Rating engines use complex rule combinations (territory, age, coverage, discounts). Testing requires boundary values on each rating factor, decision tables for rule interactions, negative testing for invalid inputs, and golden-master regression comparing output against actuarially-approved calculations."
  },
  {
    "id": "ot46",
    "category": "others",
    "question": "What is the difference between testing a COTS (Commercial Off-the-Shelf) platform vs. custom-built software?",
    "options": [
      "COTS platforms require more testing than custom software",
      "COTS testing focuses on configuration, integrations, and customizations — not core vendor functionality — since the vendor is responsible for base product quality",
      "COTS platforms cannot be automated",
      "There is no meaningful difference in testing approach"
    ],
    "answer": 1,
    "explanation": "With COTS platforms (e.g., Guidewire, Salesforce), the vendor owns core quality. QA focuses on: configuration correctness, third-party integrations, customizations/extensions, data migration, and upgrade regression. Risk-based testing concentrates on points of configuration, not the platform itself."
  },
  {
    "id": "ot47",
    "category": "others",
    "question": "How do you test batch processes like nightly billing runs or renewal processing?",
    "options": [
      "Batch processes cannot be automated; they require manual verification",
      "Run the batch with representative data, validate completeness (all records processed), correctness (amounts match expected), error handling (bad records logged), and performance (completes within the batch window)",
      "Only verify the final count of records processed",
      "Test batch processes the same way as real-time transactional systems"
    ],
    "answer": 1,
    "explanation": "Batch testing validates: completeness (all eligible records processed), correctness (calculations match expected), error handling (invalid records rejected/flagged without stopping the batch), idempotency (re-runs don't duplicate), and performance (batch completes within the nightly window)."
  },
  {
    "id": "ot48",
    "category": "others",
    "question": "What is a policy endorsement and what testing risks does it introduce?",
    "options": [
      "An endorsement is a vendor approval for QA tools; minimal testing risk",
      "An endorsement is a mid-term policy change that triggers premium recalculation, document regeneration, and downstream notification — creating cascading update risks",
      "An endorsement is only relevant at policy renewal",
      "Endorsements only affect the billing system, not other policy components"
    ],
    "answer": 1,
    "explanation": "A policy endorsement (mid-term change) triggers: pro-rated premium recalculation, policy document regeneration, billing system update, agent/customer notification, and reinsurance recalculation. Testing must validate the entire cascade, including edge cases like endorsements near the renewal date."
  },
  {
    "id": "ot49",
    "category": "others",
    "question": "How would you approach QA for a waterfall program with a fixed regulatory deadline?",
    "options": [
      "Reduce test coverage to fit the available time",
      "Front-load risk-based testing: identify highest-risk regulatory requirements early, automate regression, use parallel testing tracks, and establish clear entry/exit criteria for each test phase",
      "Skip non-functional testing to save time",
      "Wait for full functional completion before testing"
    ],
    "answer": 1,
    "explanation": "With fixed regulatory deadlines: perform risk-based analysis to identify regulatory-critical paths, start test planning during requirements, automate regression early, use parallel test execution across work streams, and define non-negotiable entry/exit criteria per phase to avoid compressing the test window."
  },
  {
    "id": "ot50",
    "category": "others",
    "question": "What is 'shift-right' testing and how does it differ from 'shift-left'?",
    "options": [
      "Shift-right means testing in production; shift-left means testing before production",
      "Shift-left moves testing earlier in development (unit tests, reviews, pre-merge); shift-right adds testing in or near production using canary releases, feature flags, chaos engineering, and synthetic monitoring",
      "Shift-right and shift-left are different names for the same practice",
      "Shift-left is for developers; shift-right is for QA teams"
    ],
    "answer": 1,
    "explanation": "Shift-left catches defects early (cheap). Shift-right (testing in production) catches issues that only appear at production scale, with real data and real user behavior. Both are needed: shift-left reduces defects, shift-right provides confidence through canary analysis, A/B testing, and synthetic monitoring."
  },
  {
    "id": "ot51",
    "category": "others",
    "question": "How do you decide what NOT to test (risk-based test scoping)?",
    "options": [
      "Skip anything that has not changed recently",
      "Use risk = probability × impact to prioritize; exclude low-risk, rarely-used, low-business-value areas with documented justification",
      "Test everything equally regardless of risk",
      "Let developers decide what to skip since they know the code best"
    ],
    "answer": 1,
    "explanation": "Risk-based scoping uses probability of failure × business impact to prioritize coverage. Use change analysis, production defect history, and usage analytics to identify low-risk areas. Always document what was excluded and why — excluded areas become the documented risk accepted by stakeholders."
  }
];
