export const categories = [
    { "id": "dev-main", "title": "الذكاء الاصطناعي الأساسي والتطوير", "type": "header" },
    { "id": "dev-ai-models", "title": "نماذج الذكاء الاصطناعي" },
    { "id": "dev-ai-infra", "title": "البنية التحتية للذكاء الاصطناعي" },
    { "id": "dev-code-assistants", "title": "مساعدات البرمجة والتطوير" },
    { "id": "dev-app-builders", "title": "بناء التطبيقات والمواقع" },
    { "id": "dev-testing-review", "title": "اختبار ومراجعة الكود" },
    { "id": "dev-data-science", "title": "علم البيانات والتعلم الآلي" },
    { "id": "dev-web-automation", "title": "أتمتة وكشط الويب" },

    { "id": "content-main", "title": "إنشاء المحتوى والوسائط", "type": "header" },
    { "id": "content-writing", "title": "الكتابة والتحرير" },
    { "id": "content-images-art", "title": "الصور والفن الرقمي" },
    { "id": "content-video-animation", "title": "الفيديو والرسوم المتحركة" },
    { "id": "content-audio-music", "title": "الصوت والموسيقى" },

    { "id": "business-main", "title": "الأعمال والإنتاجية", "type": "header" },
    { "id": "business-productivity-office", "title": "الإنتاجية والمكتب" },
    { "id": "business-marketing-sales", "title": "التسويق والمبيعات" },
    { "id": "business-operations", "title": "عمليات الأعمال" },

    { "id": "lifestyle-main", "title": "الحياة الشخصية والتعليم", "type": "header" },
    { "id": "lifestyle-education-research", "title": "التعليم والبحث" },
    { "id": "lifestyle-health-wellness", "title": "الصحة والعافية" },
    { "id": "lifestyle-daily-entertainment", "title": "الحياة اليومية والترفيه" },

    { "id": "industry-main", "title": "صناعات متخصصة", "type": "header" },
    { "id": "industry-design-engineering", "title": "التصميم والهندسة" },
    { "id": "industry-science-medicine", "title": "العلوم والطب" },
    { "id": "industry-finance-real-estate", "title": "المال والعقارات" },
    { "id": "industry-web3-blockchain", "title": "الويب 3 والبلوكتشين" }
];

export const tools = [
  {
    "name": "AI Language Translator",
    "description": "يترجم النصوص والمحادثات بلغات متعددة بدقة عالية.",
    "url": "https://www.deepl.com",
    "category": "dev-ai-models"
  },
  {
    "name": "Codeium",
    "description": "مساعد برمجة مجاني وسريع يدعم مجموعة واسعة من اللغات والإطارات البرمجية مع تكامل قوي مع بيئات التطوير.",
    "url": "https://codeium.com",
    "category": "dev-code-assistants",
    "tags": ["code-assistant", "free", "autocomplete", "developer-tools"]
  },
  {
    "name": "Amazon CodeWhisperer",
    "description": "رفيق الترميز من أمازون، يقدم اقتراحات للكود في الوقت الفعلي مع ميزات أمان متقدمة وتحليل الثغرات.",
    "url": "https://aws.amazon.com/codewhisperer/",
    "category": "dev-code-assistants",
    "tags": ["code-assistant", "aws", "security", "developer-tools"]
  },
  {
    "name": "Replit Ghostwriter",
    "description": "مساعد برمجي متكامل داخل بيئة تطوير Replit للمساعدة في كتابة وتصحيح الكود وشرحه.",
    "url": "https://replit.com/site/ghostwriter",
    "category": "dev-code-assistants",
    "tags": ["code-assistant", "replit", "debugging", "code-completion"]
  },
  {
    "name": "Cody",
    "description": "مساعد ترميز بالذكاء الاصطناعي من Sourcegraph يفهم قاعدة التعليمات البرمجية الكاملة الخاصة بك ويساعد في كتابتها وشرحها.",
    "url": "https://sourcegraph.com/cody",
    "category": "dev-code-assistants",
    "tags": ["code-assistant", "code-search", "repository-analysis", "sourcegraph"]
  },
  {
    "name": "MutableAI",
    "description": "منصة سحابية لمساعدات البرمجة تقدم اقتراحات ترميز ومساعدة في تصحيح الأخطاء وتحسين الأداء.",
    "url": "https://mutable.ai",
    "category": "dev-code-assistants",
    "tags": ["code-assistant", "cloud-based", "debugging", "optimization"]
  },
  {
    "name": "Character.AI",
    "description": "منصة لإنشاء ومحادثة شخصيات افتراضية (Chatbots) مدعومة بالذكاء الاصطناعي.",
    "url": "https://character.ai",
    "category": "dev-ai-models"
  },
  {
    "name": "ChatGPT",
    "description": "مساعد محادثة متقدم من OpenAI قادر على الإجابة على الأسئلة، كتابة النصوص، والبرمجة.",
    "url": "https://chat.openai.com/",
    "category": "dev-ai-models"
  },
  {
    "name": "Claude",
    "description": "نموذج لغوي من Anthropic يركز على الأمان والمحادثات المفيدة والطويلة.",
    "url": "https://claude.ai/",
    "category": "dev-ai-models"
  },
  {
    "name": "Google Gemini",
    "description": "نموذج الذكاء الاصطناعي متعدد الوسائط (Multimodal) من جوجل، قادر على فهم النصوص والصور والصوت.",
    "url": "https://gemini.google.com/",
    "category": "dev-ai-models"
  },
  {
    "name": "Hugging Face",
    "description": "منصة ومجتمع لمشاركة واستخدام وتدريب نماذج الذكاء الاصطناعي مفتوحة المصدر.",
    "url": "https://huggingface.co",
    "category": "dev-ai-models"
  },
  {
    "name": "Poe",
    "description": "منصة من Quora تتيح للمستخدمين التحدث مع مختلف نماذج الذكاء الاصطناعي في مكان واحد.",
    "url": "https://poe.com",
    "category": "dev-ai-models"
  },
  {
    "name": "Qwen (Ali-Baba)",
    "description": "نموذج لغوي كبير مفتوح المصدر من Alibaba Cloud يدعم اللغات المتعددة.",
    "url": "https://qwen.aliyun.com/",
    "category": "dev-ai-models"
  },
  {
    "name": "Replika",
    "description": "رفيق دردشة مصمم للمحادثات العاطفية وتقديم الدعم النفسي وبناء علاقة شخصية.",
    "url": "https://replika.ai",
    "category": "dev-ai-models"
  },
  {
    "name": "YouChat",
    "description": "مساعد محادثة مدمج في محرك البحث You.com، يقدم إجابات مع ذكر المصادر.",
    "url": "https://you.com/chat",
    "category": "dev-ai-models"
  },
  {
    "name": "AI Edge Computing Platform",
    "description": "يعالج البيانات محليًا على الأجهزة لتحسين الأداء والخصوصية.",
    "url": "https://www.nvidia.com/en-us/edge-computing/",
    "category": "dev-ai-infra"
  },
  {
    "name": "AI Explainability 360",
    "description": "مجموعة أدوات مفتوحة المصدر لمساعدتك على فهم كيفية توقع نماذج تعلم الآلة للتسميات.",
    "url": "https://ai-explainability-360.org/",
    "category": "dev-ai-infra"
  },
  {
    "name": "AI Fairness 360",
    "description": "مجموعة أدوات مفتوحة المصدر لكشف وتخفيف التحيز في نماذج تعلم الآلة.",
    "url": "https://aif360.mybluemix.net/",
    "category": "dev-ai-infra"
  },
  {
    "name": "AI Model Deployment Platform",
    "description": "يسهل نشر وتشغيل نماذج الذكاء الاصطناعي في الإنتاج.",
    "url": "https://www.seldon.io",
    "category": "dev-ai-infra"
  },
  {
    "name": "Anyscale",
    "description": "منصة لتوسيع نطاق تطبيقات الذكاء الاصطناعي و Python بسهولة، مبنية على إطار العمل Ray.",
    "url": "https://www.anyscale.com",
    "category": "dev-ai-infra"
  },
  {
    "name": "Arize AI",
    "description": "منصة لمراقبة نماذج التعلم الآلي (ML Observability) في مرحلة الإنتاج وتحديد المشكلات وإصلاحها.",
    "url": "https://arize.com",
    "category": "dev-ai-infra"
  },
  {
    "name": "BentoML",
    "description": "إطار عمل موحد لتبسيط عملية بناء وشحن ونشر خدمات الذكاء الاصطناعي.",
    "url": "https://www.bentoml.com",
    "category": "dev-ai-infra"
  },
  {
    "name": "Comet",
    "description": "منصة لتتبع ومقارنة وتصوير وإدارة دورة حياة تجارب التعلم الآلي.",
    "url": "https://www.comet.com",
    "category": "dev-ai-infra"
  },
  {
    "name": "Domino Data Lab",
    "description": "منصة لإدارة وتوسيع نطاق علم البيانات في المؤسسات الكبيرة مع التركيز على التعاون والحوكمة.",
    "url": "https://www.dominodatalab.com",
    "category": "dev-ai-infra"
  },
  {
    "name": "Labelbox",
    "description": "منصة لإنشاء وإدارة بيانات التدريب (الصور، الفيديو، النصوص) لنماذج التعلم الآلي.",
    "url": "https://labelbox.com",
    "category": "dev-ai-infra"
  },
  {
    "name": "Scale AI",
    "description": "منصة لتوفير البيانات عالية الجودة اللازمة لتدريب نماذج الذكاء الاصطناعي، خاصة في مجال الرؤية الحاسوبية.",
    "url": "https://scale.com",
    "category": "dev-ai-infra"
  },
  {
    "name": "Snorkel AI",
    "description": "منصة لإنشاء بيانات التدريب وتصنيفها برمجيًا (Programmatic Data Labeling) بسرعة.",
    "url": "https://www.snorkel.ai",
    "category": "dev-ai-infra"
  },
  {
    "name": "Tecton",
    "description": "منصة لإدارة الميزات (Feature Store) لنماذج التعلم الآلي في الوقت الفعلي وعلى نطاق واسع.",
    "url": "https://www.tecton.ai",
    "category": "dev-ai-infra"
  },
  {
    "name": "OpenAI Codex",
    "description": "النموذج الذي يشغل GitHub Copilot، قادر على فهم وإنشاء الأكواد البرمجية.",
    "url": "https://openai.com/blog/openai-codex",
    "category": "dev-code-assistants"
  },
  {
    "name": "3scale",
    "description": "منصة لإدارة واجهات برمجة التطبيقات (APIs) مقدمة من Red Hat.",
    "url": "https://www.3scale.net/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Amazon CodeWhisperer",
    "description": "رفيق ترميز من أمازون، يقدم اقتراحات للكود وهو مجاني للاستخدام الفردي.",
    "url": "https://aws.amazon.com/codewhisperer/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Ambassador Edge Stack",
    "description": "بوابة واجهات برمجة التطبيقات (API Gateway) مصممة خصيصًا لبيئة Kubernetes.",
    "url": "https://www.getambassador.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Ansible",
    "description": "منصة لأتمتة تكنولوجيا المعلومات (IT Automation) مقدمة من Red Hat.",
    "url": "https://www.ansible.com/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Apiary",
    "description": "منصة تعاونية لتصميم واجهات برمجة التطبيقات (APIs) مقدمة من Oracle.",
    "url": "https://apiary.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Apidog",
    "description": "منصة متكاملة لتطوير واختبار وتوثيق واجهات برمجة التطبيقات (APIs).",
    "url": "https://apidog.com",
    "category": "dev-code-assistants"
  },
  {
    "name": "Apigee",
    "description": "منصة لإدارة واجهات برمجة التطبيقات (APIs) مقدمة من Google Cloud.",
    "url": "https://cloud.google.com/apigee",
    "category": "dev-code-assistants"
  },
  {
    "name": "Arquillian",
    "description": "منصة اختبار تكامل (Integration Testing) للبرامج الوسيطة المبنية على Java.",
    "url": "https://arquillian.org/",
    "category": "dev-code-assistants"
  },
  {
    "name": "AskCodi",
    "description": "مجموعة أدوات للمطورين تشمل إنشاء الأكواد، التوثيق، والاختبار.",
    "url": "https://askcodi.com",
    "category": "dev-code-assistants"
  },
  {
    "name": "AWS CodeCommit",
    "description": "خدمة مدارة بالكامل للتحكم في المصدر (Source Control) مقدمة من AWS.",
    "url": "https://aws.amazon.com/codecommit/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Azure DevOps",
    "description": "منصة تعاون للمطورين من Microsoft تشمل التخطيط، الاختبار، والنشر.",
    "url": "https://azure.microsoft.com/en-us/services/devops/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Bazaar",
    "description": "نظام تحكم في الإصدارات الموزعة (DVCS) سهل الاستخدام.",
    "url": "https://bazaar.canonical.com/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Behat",
    "description": "إطار عمل للتطوير الموجه بالسلوك (BDD) للغة PHP.",
    "url": "https://behat.org/",
    "category": "dev-code-assistants"
  },
  {
    "name": "behave",
    "description": "إطار عمل للتطوير الموجه بالسلوك (BDD) للغة Python.",
    "url": "https://behave.readthedocs.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Bitbucket",
    "description": "أداة لاستضافة الكود و CI/CD مبنية على Git مقدمة من Atlassian.",
    "url": "https://bitbucket.org/",
    "category": "dev-code-assistants"
  },
  {
    "name": "BlackBox AI",
    "description": "أداة لتحليل وتصحيح الأكواد البرمجية وإيجاد الأخطاء في لغات برمجة متعددة.",
    "url": "https://www.useblackbox.io",
    "category": "dev-code-assistants"
  },
  {
    "name": "Chai",
    "description": "مكتبة تأكيد (Assertion Library) لـ Node.js تستخدم في اختبارات BDD/TDD.",
    "url": "https://www.chaijs.com/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Chef",
    "description": "منصة لإدارة التكوين (Configuration Management) وأتمتة البنية التحتية.",
    "url": "https://www.chef.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "CodeceptJS",
    "description": "إطار عمل حديث لاختبار القبول (Acceptance Testing) لـ Node.js.",
    "url": "https://codecept.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "CodePen",
    "description": "بيئة تطوير ومشاركة للأكواد الأمامية (Front-end) مع مجتمع نشط.",
    "url": "https://codepen.io",
    "category": "dev-code-assistants"
  },
  {
    "name": "CodeSandbox",
    "description": "منصة للتطوير والتعاون على الأكواد مباشرة في المتصفح، تدعم مختلف أطر العمل.",
    "url": "https://codesandbox.io",
    "category": "dev-code-assistants"
  },
  {
    "name": "CodeT5",
    "description": "نموذج ذكاء اصطناعي مفتوح المصدر من Salesforce لمهام البرمجة المتنوعة.",
    "url": "https://github.com/salesforce/CodeT5",
    "category": "dev-code-assistants"
  },
  {
    "name": "Codiga",
    "description": "أداة لتحليل الأكواد في الوقت الفعلي (Static Analysis) واكتشاف الأخطاء مباشرة في المحرر.",
    "url": "https://www.codiga.io",
    "category": "dev-code-assistants"
  },
  {
    "name": "Cody",
    "description": "مساعد ترميز بالذكاء الاصطناعي من Sourcegraph يفهم قاعدة التعليمات البرمجية الكاملة الخاصة بك.",
    "url": "https://sourcegraph.com/cody",
    "category": "dev-code-assistants"
  },
  {
    "name": "Consul",
    "description": "منصة لربط الخدمات (Service Networking) مقدمة من HashiCorp.",
    "url": "https://www.consul.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Cucumber",
    "description": "إطار عمل لاختبار التطوير الموجه بالسلوك (BDD).",
    "url": "https://cucumber.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "curl",
    "description": "أداة سطر أوامر لنقل البيانات باستخدام عناوين URL.",
    "url": "https://curl.se/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Cursor",
    "description": "محرر أكواد مدمج مع الذكاء الاصطناعي (AI-first) لتسهيل عملية البرمجة والتعاون.",
    "url": "https://cursor.sh",
    "category": "dev-code-assistants"
  },
  {
    "name": "Cypress",
    "description": "إطار عمل لاختبار تطبيقات الويب من طرف إلى طرف (End-to-End).",
    "url": "https://www.cypress.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "DbUnit",
    "description": "امتداد لـ JUnit مخصص لاختبار المشاريع التي تعتمد على قواعد البيانات.",
    "url": "https://dbunit.sourceforge.net/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Docker",
    "description": "منصة لإنشاء ونشر وتشغيل التطبيقات باستخدام الحاويات (Containers).",
    "url": "https://www.docker.com/",
    "category": "dev-code-assistants"
  },
  {
    "name": "EasyMock",
    "description": "مكتبة لإنشاء كائنات وهمية (Mock Objects) لواجهات وفئات Java.",
    "url": "https://easymock.org/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Envoy",
    "description": "بروكسي خدمة وحافة (Edge and Service Proxy) عالي الأداء ومصمم للبيئات السحابية.",
    "url": "https://www.envoyproxy.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Fossil",
    "description": "نظام تحكم في الإصدارات الموزعة مع ويكي ومتتبع أخطاء مدمجين.",
    "url": "https://www.fossil-scm.org/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Git",
    "description": "نظام تحكم في الإصدارات الموزعة (DVCS) هو الأكثر شيوعًا في العالم.",
    "url": "https://git-scm.com/",
    "category": "dev-code-assistants"
  },
  {
    "name": "GitHub",
    "description": "منصة لاستضافة الأكواد البرمجية للتحكم في الإصدارات والتعاون.",
    "url": "https://github.com/",
    "category": "dev-code-assistants"
  },
  {
    "name": "GitHub Copilot",
    "description": "مساعد برمجي لإكمال الأكواد مباشرة في المحرر، مدعوم بنماذج OpenAI.",
    "url": "https://github.com/features/copilot",
    "category": "dev-code-assistants"
  },
  {
    "name": "GitLab",
    "description": "أداة متكاملة لدورة حياة DevOps، من التخطيط إلى النشر.",
    "url": "https://about.gitlab.com/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Glitch",
    "description": "منصة لبناء ونشر تطبيقات ويب بطريقة تعاونية وسريعة مباشرة من المتصفح.",
    "url": "https://glitch.com",
    "category": "dev-code-assistants"
  },
  {
    "name": "Google Cloud Source Repositories",
    "description": "مستودعات Git خاصة مقدمة من Google Cloud.",
    "url": "https://cloud.google.com/source-repositories",
    "category": "dev-code-assistants"
  },
  {
    "name": "Gravitee.io",
    "description": "منصة مفتوحة المصدر لإدارة واجهات برمجة التطبيقات (APIs).",
    "url": "https://gravitee.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "HTTPie",
    "description": "عميل HTTP لسطر الأوامر سهل الاستخدام ومصمم للمطورين.",
    "url": "https://httpie.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Insomnia",
    "description": "عميل REST API لتصميم واختبار واجهات برمجة التطبيقات.",
    "url": "https://insomnia.rest/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Istio",
    "description": "شبكة خدمة (Service Mesh) مفتوحة المصدر لإدارة حركة المرور بين الخدمات المصغرة.",
    "url": "https://istio.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Jasmine",
    "description": "إطار عمل للتطوير الموجه بالسلوك (BDD) لاختبار كود JavaScript.",
    "url": "https://jasmine.github.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Jest",
    "description": "إطار عمل لاختبار JavaScript يركز على البساطة والسرعة.",
    "url": "https://jestjs.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "JUnit",
    "description": "إطار عمل لاختبار الوحدات (Unit Testing) للغة Java.",
    "url": "https://junit.org/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Karma",
    "description": "مشغل اختبارات (Test Runner) لكود JavaScript.",
    "url": "https://karma-runner.github.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Kong",
    "description": "بوابة ومنصة لإدارة واجهات برمجة التطبيقات (APIs).",
    "url": "https://konghq.com/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Krakend",
    "description": "بوابة واجهات برمجة تطبيقات (API Gateway) خفيفة الوزن وعالية الأداء.",
    "url": "https://www.krakend.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Kubernetes",
    "description": "نظام مفتوح المصدر لتنسيق الحاويات (Container Orchestration).",
    "url": "https://kubernetes.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Linkerd",
    "description": "شبكة خدمة (Service Mesh) خفيفة الوزن للغاية لـ Kubernetes.",
    "url": "https://linkerd.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Mercurial",
    "description": "نظام تحكم في الإصدارات الموزعة (DVCS) يركز على الأداء وقابلية التوسع.",
    "url": "https://www.mercurial-scm.org/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Mocha",
    "description": "إطار عمل لاختبار JavaScript غني بالميزات يعمل على Node.js والمتصفح.",
    "url": "https://mochajs.org/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Mockito",
    "description": "إطار عمل لإنشاء كائنات وهمية (Mocking) لاختبارات الوحدات في Java.",
    "url": "https://site.mockito.org/",
    "category": "dev-code-assistants"
  },
  {
    "name": "MuleSoft Anypoint Platform",
    "description": "منصة لإدارة وتكامل واجهات برمجة التطبيقات (APIs) مقدمة من Salesforce.",
    "url": "https://www.mulesoft.com/platform/enterprise-integration",
    "category": "dev-code-assistants"
  },
  {
    "name": "Nightwatch.js",
    "description": "إطار عمل لاختبار الآلي مدعوم بـ Node.js.",
    "url": "https://nightwatchjs.org/",
    "category": "dev-code-assistants"
  },
  {
    "name": "nose",
    "description": "إطار عمل لاختبار Python يعتمد على الاكتشاف التلقائي للاختبارات.",
    "url": "https://nose.readthedocs.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "OpenShift",
    "description": "منصة Kubernetes للمؤسسات مقدمة من Red Hat.",
    "url": "https://www.openshift.com/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Paw",
    "description": "أداة متقدمة لواجهات برمجة التطبيقات (APIs) لنظام macOS.",
    "url": "https://paw.cloud/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Perforce Helix Core",
    "description": "منصة للتحكم في الإصدارات مصممة للفرق الكبيرة والمشاريع المعقدة.",
    "url": "https://www.perforce.com/products/helix-core",
    "category": "dev-code-assistants"
  },
  {
    "name": "Plastic SCM",
    "description": "نظام تحكم في الإصدارات مصمم للمطورين الذين يتبعون منهجية Agile.",
    "url": "https://www.plasticscm.com/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Playwright",
    "description": "إطار عمل لاختبار المتصفحات المختلفة مقدم من Microsoft.",
    "url": "https://playwright.dev/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Portainer",
    "description": "منصة لإدارة الحاويات (Containers) بواجهة مستخدم رسومية.",
    "url": "https://www.portainer.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Postman",
    "description": "منصة لبناء واستخدام واجهات برمجة التطبيقات (APIs).",
    "url": "https://www.postman.com/",
    "category": "dev-code-assistants"
  },
  {
    "name": "PowerMock",
    "description": "إطار عمل يوسع قدرات أطر العمل الوهمية (Mocking Frameworks) مثل Mockito.",
    "url": "https://github.com/powermock/powermock",
    "category": "dev-code-assistants"
  },
  {
    "name": "Protractor",
    "description": "إطار عمل لاختبار تطبيقات Angular من طرف إلى طرف (End-to-End).",
    "url": "https://www.protractortest.org/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Puppet",
    "description": "منصة لإدارة التكوين (Configuration Management) وأتمتة البنية التحتية.",
    "url": "https://puppet.com/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Puppeteer",
    "description": "مكتبة Node.js للتحكم في متصفح Chrome/Chromium.",
    "url": "https://pptr.dev/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Pytest",
    "description": "إطار عمل لاختبار Python يركز على البساطة وقابلية التوسع.",
    "url": "https://pytest.org/",
    "category": "dev-code-assistants"
  },
  {
    "name": "pytest-bdd",
    "description": "إطار عمل لاختبار BDD للغة Python.",
    "url": "https://github.com/pytest-dev/pytest-bdd",
    "category": "dev-code-assistants"
  },
  {
    "name": "QUnit",
    "description": "إطار عمل قوي وسهل الاستخدام لاختبار الوحدات (Unit Testing) في JavaScript.",
    "url": "https://qunitjs.com/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Rancher",
    "description": "منصة كاملة لإدارة الحاويات (Containers) في بيئات متعددة.",
    "url": "https://rancher.com/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Replit",
    "description": "بيئة تطوير عبر الإنترنت تدعم أكثر من 50 لغة برمجة مع ميزات للتعاون والنشر.",
    "url": "https://replit.com",
    "category": "dev-code-assistants"
  },
  {
    "name": "Replit Ghostwriter",
    "description": "مساعد برمجي متكامل داخل بيئة تطوير Replit للمساعدة في كتابة وتصحيح الكود.",
    "url": "https://replit.com/site/ghostwriter",
    "category": "dev-code-assistants"
  },
  {
    "name": "Robot Framework",
    "description": "إطار عمل مفتوح المصدر للأتمتة العامة واختبار القبول.",
    "url": "https://robotframework.org/",
    "category": "dev-code-assistants"
  },
  {
    "name": "SaltStack",
    "description": "منصة أتمتة ذكية تعتمد على الأحداث (Event-driven).",
    "url": "https://saltproject.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Selenium",
    "description": "أداة مفتوحة المصدر لأتمتة متصفحات الويب.",
    "url": "https://www.selenium.dev/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Sourcegraph Cody",
    "description": "مساعد برمجة يساعد في فهم الأكواد الكبيرة والمعقدة والبحث فيها.",
    "url": "https://about.sourcegraph.com/cody",
    "category": "dev-code-assistants"
  },
  {
    "name": "SpecFlow",
    "description": "تطبيق Cucumber لبيئة .NET.",
    "url": "https://specflow.org/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Spock",
    "description": "إطار عمل للاختبار والمواصفات لتطبيقات Java و Groovy.",
    "url": "https://spockframework.org/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Spring Test",
    "description": "دعم الاختبار في إطار عمل Spring.",
    "url": "https://spring.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "StackBlitz",
    "description": "بيئة تطوير سحابية فورية لتطبيقات الويب، تعمل مباشرة في المتصفح.",
    "url": "https://stackblitz.com",
    "category": "dev-code-assistants"
  },
  {
    "name": "Stoplight",
    "description": "منصة لتصميم وتوثيق واجهات برمجة التطبيقات (APIs).",
    "url": "https://stoplight.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "SVN",
    "description": "نظام تحكم في الإصدارات مركزي (Centralized Version Control System).",
    "url": "https://subversion.apache.org/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Swagger",
    "description": "إطار عمل لتصميم وبناء وتوثيق واجهات برمجة التطبيقات (APIs).",
    "url": "https://swagger.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Tabnine",
    "description": "مساعد ذكاء اصطناعي يسرع كتابة الكود ويتعلم من أسلوبك لتقديم اقتراحات مخصصة.",
    "url": "https://www.tabnine.com/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Terraform",
    "description": "أداة لإنشاء وإدارة البنية التحتية ككود (Infrastructure as Code) مقدمة من HashiCorp.",
    "url": "https://www.terraform.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "TestCafe",
    "description": "أداة اختبار آلية لتطبيقات الويب.",
    "url": "https://testcafe.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "TestNG",
    "description": "إطار عمل لاختبار Java مستوحى من JUnit و NUnit.",
    "url": "https://testng.org/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Traefik",
    "description": "بروكسي تطبيقات سحابي (Cloud-Native Application Proxy) حديث.",
    "url": "https://traefik.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Tyk",
    "description": "بوابة ومنصة مفتوحة المصدر لإدارة واجهات برمجة التطبيقات (APIs).",
    "url": "https://tyk.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "unittest",
    "description": "إطار عمل لاختبار الوحدات (Unit Testing) مدمج في مكتبة Python القياسية.",
    "url": "https://docs.python.org/3/library/unittest.html",
    "category": "dev-code-assistants"
  },
  {
    "name": "Vagrant",
    "description": "أداة لإدارة بيئات التطوير مقدمة من HashiCorp.",
    "url": "https://www.vagrantup.com/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Vault",
    "description": "أداة لإدارة الأسرار (Secrets Management) وحماية البيانات مقدمة من HashiCorp.",
    "url": "https://www.vaultproject.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "WebdriverIO",
    "description": "إطار عمل لاختبار وأتمتة المتصفحات والأجهزة المحمولة من الجيل التالي.",
    "url": "https://webdriver.io/",
    "category": "dev-code-assistants"
  },
  {
    "name": "WSO2 API Manager",
    "description": "منصة مفتوحة المصدر لإدارة واجهات برمجة التطبيقات (APIs).",
    "url": "https://wso2.com/api-management/",
    "category": "dev-code-assistants"
  },
  {
    "name": "Adobe Analytics",
    "description": "منصة تحليلات رقمية متقدمة من Adobe لفهم سلوك العملاء.",
    "url": "https://www.adobe.com/analytics/adobe-analytics.html",
    "category": "dev-data-science"
  },
  {
    "name": "Alteryx",
    "description": "منصة لأتمتة التحليلات ودمج علوم البيانات وتعلم الآلة.",
    "url": "https://www.alteryx.com/",
    "category": "dev-data-science"
  },
  {
    "name": "Amazon SageMaker",
    "description": "خدمة مُدارة بالكامل من AWS لبناء وتدريب ونشر نماذج تعلم الآلة على نطاق واسع.",
    "url": "https://aws.amazon.com/sagemaker/",
    "category": "dev-data-science"
  },
  {
    "name": "Amplitude",
    "description": "منصة لتحليلات المنتجات والذكاء السلوكي لفهم كيفية استخدام المنتجات الرقمية.",
    "url": "https://amplitude.com/",
    "category": "dev-data-science"
  },
  {
    "name": "Anaplan",
    "description": "منصة للتخطيط المتصل (Connected Planning) للشركات لاتخاذ قرارات أفضل.",
    "url": "https://www.anaplan.com/",
    "category": "dev-data-science"
  },
  {
    "name": "Apache Hadoop",
    "description": "إطار عمل مفتوح المصدر لتخزين ومعالجة البيانات الضخمة (Big Data) بشكل موزع.",
    "url": "https://hadoop.apache.org/",
    "category": "dev-data-science"
  },
  {
    "name": "Apache Spark",
    "description": "محرك تحليلات موحد لمعالجة البيانات الضخمة وتعلم الآلة.",
    "url": "https://spark.apache.org/",
    "category": "dev-data-science"
  },
  {
    "name": "Aporia",
    "description": "منصة لمراقبة نماذج تعلم الآلة (ML Observability) في بيئة الإنتاج.",
    "url": "https://www.aporia.com/",
    "category": "dev-data-science"
  },
  {
    "name": "Aptabase",
    "description": "أداة تحليلات بسيطة ومفتوحة المصدر تركز على الخصوصية لتطبيقات الموبايل والويب.",
    "url": "https://aptabase.com/",
    "category": "dev-data-science"
  },
  {
    "name": "Arthur",
    "description": "منصة لمراقبة أداء نماذج تعلم الآلة واكتشاف التحيز (Bias).",
    "url": "https://www.arthur.ai/",
    "category": "dev-data-science"
  },
  {
    "name": "Auto-sklearn",
    "description": "مجموعة أدوات لتعلم الآلة الآلي (Automated Machine Learning) مبنية على scikit-learn.",
    "url": "https://automl.github.io/auto-sklearn/",
    "category": "dev-data-science"
  },
  {
    "name": "AutoGluon",
    "description": "مجموعة أدوات للتعلم الآلي الآلي (AutoML) من Amazon لإنشاء نماذج عالية الدقة.",
    "url": "https://auto.gluon.ai/",
    "category": "dev-data-science"
  },
  {
    "name": "AutoKeras",
    "description": "نظام تعلم آلي آلي (AutoML) مفتوح المصدر يعتمد على Keras.",
    "url": "https://autokeras.com/",
    "category": "dev-data-science"
  },
  {
    "name": "Azure Databricks",
    "description": "منصة موحدة للبيانات والذكاء الاصطناعي مبنية على Apache Spark، لتسريع تحليلات البيانات وتعلم الآلة على Azure.",
    "url": "https://azure.microsoft.com/en-us/services/databricks/",
    "category": "dev-data-science"
  },
  {
    "name": "BigQuery",
    "description": "مستودع بيانات (Data Warehouse) بدون خوادم من Google Cloud.",
    "url": "https://cloud.google.com/bigquery",
    "category": "dev-data-science"
  },
  {
    "name": "Board",
    "description": "منصة ذكاء أعمال (Business Intelligence) وإدارة أداء الشركات.",
    "url": "https://www.board.com/",
    "category": "dev-data-science"
  },
  {
    "name": "CatBoost",
    "description": "مكتبة لتعزيز التدرج (Gradient Boosting) عالية الأداء من Yandex.",
    "url": "https://catboost.ai/",
    "category": "dev-data-science"
  },
  {
    "name": "Chartio",
    "description": "منصة تحليلات بيانات ذاتية الخدمة (الآن جزء من Atlassian Analytics).",
    "url": "https://chartio.com/",
    "category": "dev-data-science"
  },
  {
    "name": "Clicky",
    "description": "أداة لتحليلات الويب في الوقت الفعلي مع خرائط حرارية (Heatmaps).",
    "url": "https://clicky.com/",
    "category": "dev-data-science"
  },
  {
    "name": "Comet.ml",
    "description": "منصة لتتبع تجارب تعلم الآلة وإدارة النماذج.",
    "url": "https://www.comet.ml/",
    "category": "dev-data-science"
  },
  {
    "name": "Databricks",
    "description": "منصة تحليلات موحدة لعلوم البيانات وتعلم الآلة مبنية على Apache Spark.",
    "url": "https://databricks.com/",
    "category": "dev-data-science"
  },
  {
    "name": "Dataiku",
    "description": "منصة لعلوم البيانات وتعلم الآلة للمؤسسات، من البيانات الأولية إلى الإنتاج.",
    "url": "https://www.dataiku.com/",
    "category": "dev-data-science"
  },
  {
    "name": "DataRobot",
    "description": "منصة تعلم آلي آلي (Automated Machine Learning) للمؤسسات.",
    "url": "https://www.datarobot.com/",
    "category": "dev-data-science"
  },
  {
    "name": "Domo",
    "description": "منصة سحابية للأعمال (Business Cloud) لتحليلات البيانات وذكاء الأعمال.",
    "url": "https://www.domo.com/",
    "category": "dev-data-science"
  },
  {
    "name": "DVC",
    "description": "نظام للتحكم في إصدارات البيانات (Data Version Control) لمشاريع تعلم الآلة.",
    "url": "https://dvc.org/",
    "category": "dev-data-science"
  },
  {
    "name": "Evidently AI",
    "description": "مجموعة أدوات مفتوحة المصدر لمراقبة نماذج تعلم الآلة واكتشاف انحراف البيانات (Data Drift).",
    "url": "https://evidentlyai.com/",
    "category": "dev-data-science"
  },
  {
    "name": "Exasol",
    "description": "قاعدة بيانات تحليلية عالية الأداء.",
    "url": "https://www.exasol.com/",
    "category": "dev-data-science"
  },
  {
    "name": "Fathom",
    "description": "أداة تحليلات ويب بسيطة تركز على الخصوصية.",
    "url": "https://usefathom.com/",
    "category": "dev-data-science"
  },
  {
    "name": "Featuretools",
    "description": "مجموعة أدوات مفتوحة المصدر لهندسة الميزات الآلية (Automated Feature Engineering).",
    "url": "https://www.featuretools.com/",
    "category": "dev-data-science"
  },
  {
    "name": "Fiddler",
    "description": "منصة لإدارة أداء نماذج تعلم الآلة (ML Model Performance Management).",
    "url": "https://www.fiddler.ai/",
    "category": "dev-data-science"
  },
  {
    "name": "GoatCounter",
    "description": "أداة تحليلات ويب بسيطة ومفتوحة المصدر تركز على الخصوصية.",
    "url": "https://www.goatcounter.com/",
    "category": "dev-data-science"
  },
  {
    "name": "GoodData",
    "description": "منصة للتحليلات المدمجة (Embedded Analytics).",
    "url": "https://www.gooddata.com/",
    "category": "dev-data-science"
  },
  {
    "name": "Google Cloud Vertex AI",
    "description": "منصة تعلم آلة موحدة من Google Cloud لبناء وتدريب ونشر نماذج الذكاء الاصطناعي التوليدي والتنبؤي.",
    "url": "https://cloud.google.com/vertex-ai",
    "category": "dev-data-science"
  },
  {
    "name": "Great Expectations",
    "description": "أداة للتحقق من صحة البيانات وتوثيقها وإنشاء ملفات تعريفية لها.",
    "url": "https://greatexpectations.io/",
    "category": "dev-data-science"
  },
  {
    "name": "H2O Driverless AI",
    "description": "منصة تعلم آلي آلي (Automated Machine Learning) من H2O.ai.",
    "url": "https://www.h2o.ai/products/h2o-driverless-ai/",
    "category": "dev-data-science"
  },
  {
    "name": "H2O.ai",
    "description": "منصة تعلم آلة مفتوحة المصدر للمؤسسات.",
    "url": "https://www.h2o.ai/",
    "category": "dev-data-science"
  },
  {
    "name": "Heap",
    "description": "منصة تحليلات تلقائية تلتقط جميع تفاعلات المستخدمين.",
    "url": "https://heap.io/",
    "category": "dev-data-science"
  },
  {
    "name": "IBM Cognos Analytics",
    "description": "منصة ذكاء أعمال وتحليلات من IBM.",
    "url": "https://www.ibm.com/analytics/cognos-analytics",
    "category": "dev-data-science"
  },
  {
    "name": "IBM Watson Studio",
    "description": "منصة لعلوم البيانات وتعلم الآلة من IBM لبناء وتشغيل وإدارة نماذج الذكاء الاصطناعي.",
    "url": "https://www.ibm.com/cloud/watson-studio",
    "category": "dev-data-science"
  },
  {
    "name": "June.so",
    "description": "لوحة تحكم تحليلية لشركات SaaS مبنية على Segment.",
    "url": "https://june.so/",
    "category": "dev-data-science"
  },
  {
    "name": "Keras",
    "description": "واجهة برمجة تطبيقات (API) للتعلم العميق (Deep Learning) للغة Python.",
    "url": "https://keras.io/",
    "category": "dev-data-science"
  },
  {
    "name": "KNIME",
    "description": "منصة مفتوحة المصدر لتحليلات البيانات وعلوم البيانات.",
    "url": "https://www.knime.com/",
    "category": "dev-data-science"
  },
  {
    "name": "LightGBM",
    "description": "إطار عمل لتعزيز التدرج (Gradient Boosting) من Microsoft.",
    "url": "https://lightgbm.readthedocs.io/",
    "category": "dev-data-science"
  },
  {
    "name": "Looker",
    "description": "منصة تحليلات بيانات وذكاء أعمال من Google Cloud.",
    "url": "https://looker.com/",
    "category": "dev-data-science"
  },
  {
    "name": "Ludwig",
    "description": "إطار عمل تعلم آلة منخفض الكود (Low-code) من Uber.",
    "url": "https://ludwig.ai/",
    "category": "dev-data-science"
  },
  {
    "name": "Matomo",
    "description": "منصة تحليلات ويب مفتوحة المصدر تركز على الخصوصية.",
    "url": "https://matomo.org/",
    "category": "dev-data-science"
  },
  {
    "name": "MicroStrategy",
    "description": "منصة ذكاء أعمال وتحليلات للمؤسسات.",
    "url": "https://www.microstrategy.com/",
    "category": "dev-data-science"
  },
  {
    "name": "Mixpanel",
    "description": "منصة لتحليلات المنتجات لفهم سلوك المستخدمين وزيادة التفاعل.",
    "url": "https://mixpanel.com/",
    "category": "dev-data-science"
  },
  {
    "name": "MLflow",
    "description": "منصة مفتوحة المصدر لإدارة دورة حياة تعلم الآلة (ML Lifecycle).",
    "url": "https://mlflow.org/",
    "category": "dev-data-science"
  },
  {
    "name": "Mode Analytics",
    "description": "منصة لعلوم البيانات والتحليلات التعاونية.",
    "url": "https://mode.com/",
    "category": "dev-data-science"
  },
  {
    "name": "Oracle Analytics Cloud",
    "description": "منصة ذكاء أعمال وتحليلات سحابية من Oracle.",
    "url": "https://www.oracle.com/business-analytics/analytics-cloud.html",
    "category": "dev-data-science"
  },
  {
    "name": "Orange",
    "description": "أداة مفتوحة المصدر لتصوير البيانات وتحليلها بشكل مرئي.",
    "url": "https://orangedatamining.com/",
    "category": "dev-data-science"
  },
  {
    "name": "Plausible",
    "description": "أداة تحليلات ويب بسيطة ومفتوحة المصدر تركز على الخصوصية.",
    "url": "https://plausible.io/",
    "category": "dev-data-science"
  },
  {
    "name": "PostHog",
    "description": "منصة مفتوحة المصدر لتحليلات المنتجات مع مجموعة أدوات متكاملة.",
    "url": "https://posthog.com/",
    "category": "dev-data-science"
  },
  {
    "name": "Power BI",
    "description": "أداة لتحليلات الأعمال وتصوير البيانات من Microsoft.",
    "url": "https://powerbi.microsoft.com/",
    "category": "dev-data-science"
  },
  {
    "name": "Prophet",
    "description": "أداة للتنبؤ بالسلاسل الزمنية (Forecasting) من Facebook.",
    "url": "https://facebook.github.io/prophet/",
    "category": "dev-data-science"
  },
  {
    "name": "PyTorch",
    "description": "مكتبة تعلم آلة مفتوحة المصدر تعتمد على Torch.",
    "url": "https://pytorch.org/",
    "category": "dev-data-science"
  },
  {
    "name": "Qlik Sense",
    "description": "منصة لتحليلات البيانات وتصويرها مع محرك ترابطي فريد.",
    "url": "https://www.qlik.com/us/products/qlik-sense",
    "category": "dev-data-science"
  },
  {
    "name": "RapidMiner",
    "description": "منصة لعلوم البيانات مع أدوات مرئية وغير مرئية.",
    "url": "https://rapidminer.com/",
    "category": "dev-data-science"
  },
  {
    "name": "Redshift",
    "description": "خدمة مستودع بيانات (Data Warehouse) من Amazon Web Services.",
    "url": "https://aws.amazon.com/redshift/",
    "category": "dev-data-science"
  },
  {
    "name": "Robust Intelligence",
    "description": "منصة لموثوقية نماذج تعلم الآلة (ML Reliability).",
    "url": "https://www.robustintelligence.com/",
    "category": "dev-data-science"
  },
  {
    "name": "SAP Analytics Cloud",
    "description": "منصة ذكاء أعمال وتحليلات سحابية من SAP.",
    "url": "https://www.sap.com/products/technology-platform/sap-analytics-cloud.html",
    "category": "dev-data-science"
  },
  {
    "name": "SAS Visual Analytics",
    "description": "منصة ذكاء أعمال وتحليلات مرئية من SAS.",
    "url": "https://www.sas.com/en_us/software/visual-analytics.html",
    "category": "dev-data-science"
  },
  {
    "name": "scikit-learn",
    "description": "مكتبة تعلم آلة بسيطة وفعالة للغة Python.",
    "url": "https://scikit-learn.org/",
    "category": "dev-data-science"
  },
  {
    "name": "Simple Analytics",
    "description": "أداة تحليلات ويب بسيطة ونظيفة تركز على الخصوصية.",
    "url": "https://simpleanalytics.com/",
    "category": "dev-data-science"
  },
  {
    "name": "Sisense",
    "description": "منصة ذكاء أعمال وتحليلات للمؤسسات.",
    "url": "https://www.sisense.com/",
    "category": "dev-data-science"
  },
  {
    "name": "Snowflake",
    "description": "منصة بيانات سحابية (Cloud Data Platform) توفر مستودع بيانات مرن.",
    "url": "https://www.snowflake.com/",
    "category": "dev-data-science"
  },
  {
    "name": "Synapse",
    "description": "خدمة تحليلات من Microsoft Azure تجمع بين مستودعات البيانات والبيانات الضخمة.",
    "url": "https://azure.microsoft.com/en-us/services/synapse-analytics/",
    "category": "dev-data-science"
  },
  {
    "name": "Tableau",
    "description": "منصة لتصوير البيانات وذكاء الأعمال التفاعلي.",
    "url": "https://www.tableau.com/",
    "category": "dev-data-science"
  },
  {
    "name": "TensorFlow",
    "description": "إطار عمل مفتوح المصدر لتعلم الآلة من Google.",
    "url": "https://www.tensorflow.org/",
    "category": "dev-data-science"
  },
  {
    "name": "ThoughtSpot",
    "description": "منصة تحليلات تعتمد على البحث والذكاء الاصطناعي.",
    "url": "https://www.thoughtspot.com/",
    "category": "dev-data-science"
  },
  {
    "name": "TIBCO Spotfire",
    "description": "منصة تحليلات لتصوير البيانات واكتشافها.",
    "url": "https://www.tibco.com/products/spotfire",
    "category": "dev-data-science"
  },
  {
    "name": "TPOT",
    "description": "أداة تعلم آلي آلي (Automated Machine Learning) للغة Python.",
    "url": "https://epistasislab.github.io/tpot/",
    "category": "dev-data-science"
  },
  {
    "name": "Weights & Biases",
    "description": "منصة لتتبع التجارب وتحسين النماذج في تعلم الآلة.",
    "url": "https://wandb.ai/",
    "category": "dev-data-science"
  },
  {
    "name": "Weka",
    "description": "مجموعة من برامج تعلم الآلة لمهام التنقيب في البيانات (Data Mining).",
    "url": "https://www.cs.waikato.ac.nz/ml/weka/",
    "category": "dev-data-science"
  },
  {
    "name": "WhyLabs",
    "description": "منصة لمراقبة البيانات ونماذج تعلم الآلة (ML Observability).",
    "url": "https://whylabs.ai/",
    "category": "dev-data-science"
  },
  {
    "name": "XGBoost",
    "description": "مكتبة لتعزيز التدرج (Gradient Boosting) الموزعة والمحسنة.",
    "url": "https://xgboost.ai/",
    "category": "dev-data-science"
  },
  {
    "name": "Yellowfin",
    "description": "منصة ذكاء أعمال وتحليلات مع ميزات أتمتة.",
    "url": "https://yellowfin.bi/",
    "category": "dev-data-science"
  },
  {
    "name": "Zoho Analytics",
    "description": "منصة ذكاء أعمال وتحليلات من Zoho.",
    "url": "https://www.zoho.com/analytics/",
    "category": "dev-data-science"
  },
  {
    "name": "Automate.io (now Notion Automations)",
    "description": "منصة لإنشاء أتمتة بين تطبيقات الويب والمهام المتكررة (الآن مدمجة في Notion).",
    "url": "https://www.notion.so/product/automations",
    "category": "dev-web-automation"
  },
  {
    "name": "Axiom",
    "description": "أداة لبناء روبوتات لأتمتة أي إجراء على متصفح الويب بدون برمجة، لجمع البيانات وأتمتة الواجهة الرسومية.",
    "url": "https://axiom.ai",
    "category": "dev-web-automation"
  },
  {
    "name": "Bardeen",
    "description": "أداة لإنشاء أتمتة فورية للمهام المتكررة على الويب وربط التطبيقات ببعضها البعض.",
    "url": "https://www.bardeen.ai",
    "category": "dev-web-automation"
  },
  {
    "name": "Brain.fm",
    "description": "موسيقى وظيفية مصممة علميًا للمساعدة على التركيز والاسترخاء والنوم، مدعومة بالذكاء الاصطناعي.",
    "url": "https://www.brain.fm",
    "category": "dev-web-automation"
  },
  {
    "name": "Coda",
    "description": "مستند متطور يجمع بين النصوص والجداول والبيانات والتطبيقات في مكان واحد قابل للتخصيص.",
    "url": "https://coda.io",
    "category": "dev-web-automation"
  },
  {
    "name": "Dewey",
    "description": "أداة لتنظيم وحفظ وتصنيف الإشارات المرجعية (Bookmarks) الخاصة بك باستخدام الذكاء الاصطناعي.",
    "url": "https://getdewey.co",
    "category": "dev-web-automation"
  },
  {
    "name": "IFTTT (If This Then That)",
    "description": "منصة لربط تطبيقاتك وأجهزتك وخدماتك المختلفة معًا لإنشاء أتمتة بسيطة (Applets).",
    "url": "https://ifttt.com",
    "category": "dev-web-automation"
  },
  {
    "name": "Make (formerly Integromat)",
    "description": "منصة مرئية قوية لربط التطبيقات والخدمات وإنشاء أتمتة معقدة وسير عمل متقدم.",
    "url": "https://www.make.com",
    "category": "dev-web-automation"
  },
  {
    "name": "Microsoft Power Automate",
    "description": "خدمة من Microsoft لأتمتة المهام المتكررة وسير العمل عبر تطبيقات وخدمات مختلفة.",
    "url": "https://powerautomate.microsoft.com/",
    "category": "dev-web-automation"
  },
  {
    "name": "Mymind",
    "description": "امتداد لحفظ وتنظيم كل ما تجده على الإنترنت (صور، نصوص، روابط) كذاكرة بصرية خاصة قابلة للبحث.",
    "url": "https://mymind.com",
    "category": "dev-web-automation"
  },
  {
    "name": "Readwise",
    "description": "أداة تجمع كل ملاحظاتك وأبرز النصوص من الكتب والمقالات وتساعدك على مراجعتها وتذكرها.",
    "url": "https://readwise.io",
    "category": "dev-web-automation"
  },
  {
    "name": "Rewind",
    "description": "تطبيق يسجل كل ما تراه وتسمعه على جهازك، مما يجعله قابلاً للبحث للعودة إلى أي لحظة.",
    "url": "https://www.rewind.ai",
    "category": "dev-web-automation"
  },
  {
    "name": "TripIt",
    "description": "يخطط لك برحلة مخصصة وينظم جميع حجوزاتك في مكان واحد تلقائيًا من رسائل البريد الإلكتروني.",
    "url": "https://www.tripit.com/web",
    "category": "dev-web-automation"
  },
  {
    "name": "INK",
    "description": "مساعد كتابة وتسويق متكامل لتحسين المحتوى والتواصل.",
    "url": "https://inkforall.com/",
    "category": "content-writing"
  },
  {
    "name": "Sudowrite",
    "description": "أداة كتابة إبداعية تساعد الروائيين وكتاب القصص على توليد الأفكار وتوسيعها.",
    "url": "https://www.sudowrite.com/",
    "category": "content-writing"
  },
  {
    "name": "Adobe Firefly",
    "description": "مجموعة من نماذج الذكاء الاصطناعي التوليدية من Adobe، مدمجة في تطبيقاتها.",
    "url": "https://www.adobe.com/sensei/generative-ai/firefly.html",
    "category": "content-images-art"
  },
  {
    "name": "Figma AI",
    "description": "أدوات ذكاء اصطناعي مدمجة في Figma للمساعدة في تصميم واجهات المستخدم وإنشاء النماذج الأولية بسرعة.",
    "url": "https://www.figma.com/ai/",
    "category": "industry-design-engineering",
    "tags": ["design", "ui-ux", "prototyping", "figma"]
  },
  {
    "name": "Microsoft Designer",
    "description": "أداة تصميم جرافيك مدعومة بالذكاء الاصطناعي من مايكروسوفت لإنشاء تصاميم بسرعة باستخدام الأوامر النصية.",
    "url": "https://designer.microsoft.com",
    "category": "industry-design-engineering",
    "tags": ["graphic-design", "microsoft", "ai-design", "templates"]
  },
  {
    "name": "Animoto",
    "description": "منصة لإنشاء فيديوهات احترافية من الصور والفيديو والنصوص.",
    "url": "https://animoto.com",
    "category": "content-images-art"
  },
  {
    "name": "Artbreeder",
    "description": "أداة لإنشاء صور فريدة من خلال 'تهجين' وخلط الصور معًا.",
    "url": "https://www.artbreeder.com",
    "category": "content-images-art"
  },
  {
    "name": "Bing Image Creator",
    "description": "أداة توليد الصور من Microsoft مدعومة بنموذج DALL-E 3.",
    "url": "https://www.bing.com/images/create",
    "category": "content-images-art"
  },
  {
    "name": "BlackInk",
    "description": "أداة لإنشاء وشوم فنية فريدة باستخدام الذكاء الاصطناعي.",
    "url": "https://blackink.ai",
    "category": "content-images-art"
  },
  {
    "name": "BlueWillow",
    "description": "نموذج توليد الصور المجاني القائم على ديسكورد.",
    "url": "https://www.bluewillow.ai",
    "category": "content-images-art"
  },
  {
    "name": "Canva AI",
    "description": "يدمج الذكاء الاصطناعي في منصة Canva لتسهيل إنشاء التصاميم والصور.",
    "url": "https://www.canva.com/ai-image-generator/",
    "category": "content-images-art"
  },
  {
    "name": "Civitai",
    "description": "مكتبة ضخمة لنماذج الذكاء الاصطناعي مفتوحة المصدر لتوليد الصور.",
    "url": "https://civitai.com",
    "category": "content-images-art"
  },
  {
    "name": "Clipchamp",
    "description": "محرر فيديو من مايكروسوفت يتضمن ميزات ذكاء اصطناعي لإنشاء مقاطع فيديو قصيرة.",
    "url": "https://clipchamp.com",
    "category": "content-images-art"
  },
  {
    "name": "Craiyon",
    "description": "نموذج توليد الصور المجاني (المعروف سابقًا بـ DALL-E Mini).",
    "url": "https://www.craiyon.com",
    "category": "content-images-art"
  },
  {
    "name": "D-ID",
    "description": "منصة لتحويل الصور الثابتة إلى فيديوهات ناطقة.",
    "url": "https://www.d-id.com",
    "category": "content-images-art"
  },
  {
    "name": "DALL-E 3",
    "description": "نموذج توليد الصور من OpenAI مدمج في ChatGPT Plus.",
    "url": "https://openai.com/dall-e-3",
    "category": "content-images-art"
  },
  {
    "name": "Leonardo AI",
    "description": "منصة توليد الصور والفنون باستخدام نماذج متقدمة مع إمكانية تدريب نماذج مخصصة وخلق أصول للألعاب.",
    "url": "https://leonardo.ai",
    "category": "content-images-art",
    "tags": ["image-generation", "art", "custom-models", "gaming-assets"]
  },
  {
    "name": "Stable Diffusion 3",
    "description": "أحدث إصدار من نموذج Stable Diffusion مفتوح المصدر لتوليد الصور عالية الجودة بدقة محسنة.",
    "url": "https://stability.ai",
    "category": "content-images-art",
    "tags": ["image-generation", "open-source", "high-quality", "text-to-image"]
  },
  {
    "name": "Deep Dream Generator",
    "description": "أداة لإنشاء صور فنية بأسلوب حالم ومميز.",
    "url": "https://deepdreamgenerator.com/",
    "category": "content-images-art"
  },
  {
    "name": "DeepAI",
    "description": "مجموعة من واجهات برمجة التطبيقات (APIs) لتوليد الصور وتحليل النصوص.",
    "url": "https://deepai.org/",
    "category": "content-images-art"
  },
  {
    "name": "DeepArt",
    "description": "أداة لتحويل الصور إلى لوحات فنية بأسلوب الفنانين المشهورين.",
    "url": "https://deepart.io/",
    "category": "content-images-art"
  },
  {
    "name": "Descript",
    "description": "أداة لتحرير الفيديو والصوت بسهولة كما لو كنت تحرر مستندًا نصيًا.",
    "url": "https://www.descript.com",
    "category": "content-images-art"
  },
  {
    "name": "DreamStudio",
    "description": "الواجهة الرسمية لاستخدام نموذج Stable Diffusion لإنشاء الصور.",
    "url": "https://beta.dreamstudio.ai",
    "category": "content-images-art"
  },
  {
    "name": "Elai.io",
    "description": "منصة لإنشاء فيديوهات باستخدام شخصيات افتراضية (Avatars) دون الحاجة إلى كاميرا.",
    "url": "https://elai.io",
    "category": "content-images-art"
  },
  {
    "name": "Evoto AI",
    "description": "محرر صور مدعوم بالذكاء الاصطناعي مصمم للمصورين المحترفين لتسريع عملية التحرير.",
    "url": "https://www.evoto.ai",
    "category": "content-images-art"
  },
  {
    "name": "FlexClip",
    "description": "محرر فيديو عبر الإنترنت لصنع فيديوهات تسويقية واجتماعية بسهولة.",
    "url": "https://www.flexclip.com",
    "category": "content-images-art"
  },
  {
    "name": "Fliki",
    "description": "أداة لتحويل النصوص والمقالات إلى فيديوهات مع تعليقات صوتية واقعية.",
    "url": "https://fliki.ai",
    "category": "content-images-art"
  },
  {
    "name": "Freepik AI Generator",
    "description": "أداة لتوليد الصور من النصوص تابعة لمكتبة الموارد الرسومية Freepik.",
    "url": "https://www.freepik.com/ai/image-generator",
    "category": "content-images-art"
  },
  {
    "name": "HeyGen",
    "description": "منصة لإنشاء فيديوهات تسويقية وتوضيحية باستخدام شخصيات افتراضية (Avatars) واقعية.",
    "url": "https://www.heygen.com/",
    "category": "content-images-art"
  },
  {
    "name": "Ideogram",
    "description": "أداة قوية في توليد الصور التي تحتوي على نصوص بشكل متناسق وواضح.",
    "url": "https://ideogram.ai/",
    "category": "content-images-art"
  },
  {
    "name": "InVideo",
    "description": "منصة لإنشاء مقاطع فيديو احترافية بسرعة مع مكتبة ضخمة من القوالب الجاهزة.",
    "url": "https://invideo.io",
    "category": "content-images-art"
  },
  {
    "name": "InVideo AI",
    "description": "أداة لإنشاء مقاطع فيديو تسويقية وتوضيحية من خلال الأوامر النصية البسيطة.",
    "url": "https://invideo.io/ai",
    "category": "content-images-art"
  },
  {
    "name": "Kapwing",
    "description": "محرر فيديو وصور وميمز عبر الإنترنت سهل الاستخدام مع أدوات ذكية.",
    "url": "https://www.kapwing.com",
    "category": "content-images-art"
  },
  {
    "name": "Krea AI",
    "description": "منصة لإنشاء صور ورسوم متحركة تفاعلية في الوقت الفعلي.",
    "url": "https://www.krea.ai",
    "category": "content-images-art"
  },
  {
    "name": "Lensa AI",
    "description": "تطبيق لتحرير الصور وإنشاء صور شخصية (Portraits) فنية باستخدام الذكاء الاصطناعي.",
    "url": "https://prisma-ai.com/lensa",
    "category": "content-images-art"
  },
  {
    "name": "Leonardo.Ai",
    "description": "منصة متكاملة لإنشاء أصول الألعاب والفنون باستخدام نماذج مدربة مسبقًا.",
    "url": "https://leonardo.ai/",
    "category": "content-images-art"
  },
  {
    "name": "Let's Enhance",
    "description": "أداة لتحسين جودة الصور ورفع دقتها (Upscaling) باستخدام الذكاء الاصطناعي.",
    "url": "https://letsenhance.io/",
    "category": "content-images-art"
  },
  {
    "name": "Lexica",
    "description": "محرك بحث للصور المولدة بالذكاء الاصطناعي ومحرر لإنشاء صور جديدة.",
    "url": "https://lexica.art",
    "category": "content-images-art"
  },
  {
    "name": "Lumen5",
    "description": "منصة لإنشاء مقاطع فيديو من المحتوى النصي مثل المقالات والمدونات.",
    "url": "https://www.lumen5.com/",
    "category": "content-images-art"
  },
  {
    "name": "Mage.space",
    "description": "منصة بسيطة ومجانية لتوليد الصور باستخدام نماذج متعددة مفتوحة المصدر.",
    "url": "https://www.mage.space",
    "category": "content-images-art"
  },
  {
    "name": "Midjourney",
    "description": "نموذج توليد صور فنية عالية الجودة عبر منصة ديسكورد.",
    "url": "https://www.midjourney.com/",
    "category": "content-images-art"
  },
  {
    "name": "Movavi",
    "description": "برنامج تحرير فيديو لسطح المكتب يقدم أدوات مدعومة بالذكاء الاصطناعي لتبسيط المهام.",
    "url": "https://www.movavi.com",
    "category": "content-images-art"
  },
  {
    "name": "Neural.love",
    "description": "مجموعة أدوات لتحسين جودة الفيديو والصور وتوليد الفن.",
    "url": "https://neural.love",
    "category": "content-images-art"
  },
  {
    "name": "NightCafe",
    "description": "مولد فنون بالذكاء الاصطناعي مع خيارات متعددة للأساليب الفنية.",
    "url": "https://nightcafe.studio/",
    "category": "content-images-art"
  },
  {
    "name": "NVIDIA Canvas",
    "description": "تطبيق يحول الرسومات التخطيطية البسيطة إلى لوحات طبيعية واقعية.",
    "url": "https://www.nvidia.com/en-us/studio/canvas/",
    "category": "content-images-art"
  },
  {
    "name": "Peech",
    "description": "أداة لتحويل المحتوى الصوتي والمرئي إلى فيديوهات ذات علامة تجارية.",
    "url": "https://www.peech.com",
    "category": "content-images-art"
  },
  {
    "name": "Photoroom",
    "description": "أداة لإزالة الخلفية وتحرير صور المنتجات بسهولة.",
    "url": "https://www.photoroom.com/",
    "category": "content-images-art"
  },
  {
    "name": "Pictory",
    "description": "أداة لتحويل النصوص الطويلة مثل المقالات والمدونات إلى فيديوهات قصيرة وجذابة.",
    "url": "https://pictory.ai",
    "category": "content-images-art"
  },
  {
    "name": "Pika",
    "description": "منصة لتحويل الأفكار والصور إلى فيديوهات عالية الجودة بسهولة.",
    "url": "https://pika.art/",
    "category": "content-images-art"
  },
  {
    "name": "Playground AI",
    "description": "محرر صور قوي يجمع بين توليد الصور والتحرير الاحترافي.",
    "url": "https://playgroundai.com",
    "category": "content-images-art"
  },
  {
    "name": "Prisma",
    "description": "تطبيق لتحرير الصور باستخدام فلاتر فنية مستوحاة من لوحات عالمية.",
    "url": "https://prisma-ai.com/",
    "category": "content-images-art"
  },
  {
    "name": "RawShorts",
    "description": "منصة لإنشاء فيديوهات توضيحية ورسوم متحركة تلقائية من النصوص.",
    "url": "https://www.rawshorts.com",
    "category": "content-images-art"
  },
  {
    "name": "Real-ESRGAN",
    "description": "نموذج مفتوح المصدر لتحسين جودة الصور ورفع دقتها (Upscaling).",
    "url": "https://github.com/xinntao/Real-ESRGAN",
    "category": "content-images-art"
  },
  {
    "name": "Remove.bg",
    "description": "أداة لإزالة خلفية الصور بنقرة واحدة وبدقة عالية.",
    "url": "https://www.remove.bg/",
    "category": "content-images-art"
  },
  {
    "name": "RunwayML",
    "description": "مجموعة أدوات متكاملة لتحرير الفيديو وتوليده من نص أو صورة.",
    "url": "https://runwayml.com/",
    "category": "content-images-art"
  },
  {
    "name": "Stable Diffusion",
    "description": "نموذج مفتوح المصدر لتوليد الصور بمرونة عالية وقابلية للتخصيص.",
    "url": "https://stablediffusionweb.com/",
    "category": "content-images-art"
  },
  {
    "name": "Steve AI",
    "description": "أداة لإنشاء فيديوهات احترافية من النصوص والصور والمقاطع المصورة.",
    "url": "https://www.steve.ai",
    "category": "content-images-art"
  },
  {
    "name": "Stylar",
    "description": "محرر صور احترافي يمنحك تحكمًا دقيقًا في أسلوب الصور المولدة.",
    "url": "https://www.stylar.ai",
    "category": "content-images-art"
  },
  {
    "name": "Synthesia",
    "description": "منصة لإنشاء فيديوهات تدريبية احترافية باستخدام شخصيات افتراضية (Avatars).",
    "url": "https://www.synthesia.io/",
    "category": "content-images-art"
  },
  {
    "name": "This Person Does Not Exist",
    "description": "أداة تولد وجوهًا بشرية غير حقيقية باستخدام نماذج GAN.",
    "url": "https://thispersondoesnotexist.com/",
    "category": "content-images-art"
  },
  {
    "name": "Unscreen",
    "description": "أداة لإزالة خلفية مقاطع الفيديو تلقائيًا.",
    "url": "https://www.unscreen.com/",
    "category": "content-images-art"
  },
  {
    "name": "Vidnoz AI",
    "description": "منصة لإنشاء فيديوهات مجانية باستخدام أفاتارات وأصوات واقعية.",
    "url": "https://www.vidnoz.com",
    "category": "content-images-art"
  },
  {
    "name": "Wave.video",
    "description": "منصة لتحرير الفيديو وإنشاء البث المباشر ونشره على مختلف المنصات.",
    "url": "https://wave.video",
    "category": "content-images-art"
  },
  {
    "name": "Wondershare Filmora",
    "description": "محرر فيديو لسطح المكتب يدمج ميزات الذكاء الاصطناعي لتحسين عملية التحرير.",
    "url": "https://filmora.wondershare.net",
    "category": "content-images-art"
  },
  {
    "name": "Yeschat",
    "description": "أداة لتحريك الصور الثابتة وتحويلها إلى فيديوهات متحركة.",
    "url": "https://yeschat.ai/animate-image",
    "category": "content-images-art"
  },
  {
    "name": "AI Music Composer",
    "description": "يؤلف موسيقى فريدة بناءً على وصفك أو مزاجك.",
    "url": "https://www.aiva.ai",
    "category": "content-audio-music"
  },
  {
    "name": "AI Music Recommender",
    "description": "يوصي بموسيقى تناسب ذوقك ومزاجك.",
    "url": "https://www.spotify.com",
    "category": "content-audio-music"
  },
  {
    "name": "AI Sound Effect Generator",
    "description": "يولد تأثيرات صوتية فريدة بناءً على الوصف.",
    "url": "https://www.soundly.com",
    "category": "content-audio-music"
  },
  {
    "name": "AI Voice Cloning",
    "description": "يخلق نسخة صوتية من صوتك أو أي صوت آخر.",
    "url": "https://www.descript.com/overdub",
    "category": "content-audio-music"
  },
  {
    "name": "AIVA",
    "description": "ملحن موسيقي بالذكاء الاصطناعي لإنشاء موسيقى تصويرية ومقطوعات للألعاب والمبدعين.",
    "url": "https://www.aiva.ai/",
    "category": "content-audio-music"
  },
  {
    "name": "Amazon Polly",
    "description": "خدمة من أمازون (AWS) لتحويل النص إلى كلام واقعي باستخدام أصوات طبيعية.",
    "url": "https://aws.amazon.com/polly/",
    "category": "content-audio-music"
  },
  {
    "name": "AssemblyAI",
    "description": "واجهة برمجية (API) لتحويل الكلام إلى نص (Speech-to-Text) وتحليل المحتوى الصوتي.",
    "url": "https://www.assemblyai.com",
    "category": "content-audio-music"
  },
  {
    "name": "Auphonic",
    "description": "خدمة مؤتمتة لمعالجة الصوت، تقوم بتحسين جودة التسجيلات الصوتية للبودكاست والفيديو وموازنة مستويات الصوت.",
    "url": "https://www.auphonic.com",
    "category": "content-audio-music"
  },
  {
    "name": "Boomy",
    "description": "أداة لإنشاء مقطوعات موسيقية أصلية ومشاركتها على منصات البث باستخدام الذكاء الاصطناعي.",
    "url": "https://boomy.com",
    "category": "content-audio-music"
  },
  {
    "name": "ElevenLabs",
    "description": "أداة لتوليد أصوات واقعية واستنساخ الصوت (Voice Cloning) بجودة عالية لمختلف التطبيقات.",
    "url": "https://elevenlabs.io/",
    "category": "content-audio-music"
  },
  {
    "name": "Google Cloud Text-to-Speech",
    "description": "خدمة من Google Cloud لإنشاء صوت طبيعي من النصوص بدعم لمجموعة واسعة من اللغات والأصوات.",
    "url": "https://cloud.google.com/text-to-speech",
    "category": "content-audio-music"
  },
  {
    "name": "iSpeech",
    "description": "أداة مجانية عبر الإنترنت لتحويل النص إلى كلام (TTS) وصوت إلى نصوص (STT).",
    "url": "https://www.ispeech.org",
    "category": "content-audio-music"
  },
  {
    "name": "Lovo.ai",
    "description": "منصة لتوليد أصوات واقعية وإنشاء تعليقات صوتية (Voiceovers) بجودة استوديو.",
    "url": "https://lovo.ai",
    "category": "content-audio-music"
  },
  {
    "name": "Murf.ai",
    "description": "أداة لإنشاء تعليقات صوتية عالية الجودة لمقاطع الفيديو والعروض التقديمية والمحتوى التعليمي.",
    "url": "https://murf.ai",
    "category": "content-audio-music"
  },
  {
    "name": "Natural Reader",
    "description": "محول نص إلى كلام (TTS) مع مجموعة متنوعة من الأصوات الطبيعية ودعم للأجهزة المختلفة.",
    "url": "https://www.naturalreaders.com",
    "category": "content-audio-music"
  },
  {
    "name": "Play.ht",
    "description": "منصة لتحويل النص إلى كلام بأصوات طبيعية متعددة اللغات واللهجات.",
    "url": "https://play.ht",
    "category": "content-audio-music"
  },
  {
    "name": "Respeecher",
    "description": "تقنية لاستنساخ الصوت وتعديله (Voice Cloning) للاستخدام في الأفلام والألعاب والمحتوى الإبداعي.",
    "url": "https://www.respeecher.com",
    "category": "content-audio-music"
  },
  {
    "name": "Soundraw",
    "description": "مولد موسيقى يقدم مقطوعات فريدة وقابلة للتخصيص للمبدعين وصناع المحتوى.",
    "url": "https://soundraw.io",
    "category": "content-audio-music"
  },
  {
    "name": "Suno AI",
    "description": "أداة لإنشاء أغاني كاملة (كلمات، موسيقى، وغناء) من خلال وصف نصي بسيط.",
    "url": "https://www.suno.ai/",
    "category": "content-audio-music"
  },
  {
    "name": "Udio",
    "description": "نموذج جديد وقوي لتوليد مقاطع موسيقية مذهلة بجودة عالية عبر أوامر نصية.",
    "url": "https://www.udio.com/",
    "category": "content-audio-music"
  },
  {
    "name": "Veed.io",
    "description": "محرر فيديو عبر الإنترنت يضيف ترجمات تلقائية لمقاطع الفيديو بلغات متعددة بسهولة.",
    "url": "https://www.veed.io",
    "category": "content-audio-music"
  },
  {
    "name": "Voicemod",
    "description": "مُعدِّل صوت في الوقت الفعلي يستخدم الذكاء الاصطناعي لتغيير صوتك في الألعاب والمحادثات عبر الإنترنت.",
    "url": "https://www.voicemod.net",
    "category": "content-audio-music"
  },
  {
    "name": "WellSaid Labs",
    "description": "منصة لإنشاء تعليقات صوتية واقعية للغاية للشركات والعلامات التجارية من خلال تحويل النص إلى كلام.",
    "url": "https://www.wellsaidlabs.com",
    "category": "content-audio-music"
  },
  {
    "name": "ActivTrak",
    "description": "برنامج لمراقبة الموظفين وتحليل الإنتاجية للمساعدة في تحسين كفاءة الفرق.",
    "url": "https://www.activtrak.com/",
    "category": "business-productivity-office"
  },
  {
    "name": "Airtable",
    "description": "منصة تجمع بين قوة جداول البيانات وقواعد البيانات لإدارة المشاريع والبيانات.",
    "url": "https://airtable.com/",
    "category": "business-productivity-office"
  },
  {
    "name": "Andi",
    "description": "مساعد بحث يفهم لغتك الطبيعية ويعطي إجابات مباشرة وذكية بدلاً من مجرد روابط.",
    "url": "https://andisearch.com",
    "category": "business-productivity-office"
  },
  {
    "name": "Any.do",
    "description": "تطبيق لإدارة المهام والتقويم والملاحظات لمساعدتك على تنظيم حياتك.",
    "url": "https://www.any.do/",
    "category": "business-productivity-office"
  },
  {
    "name": "Asana",
    "description": "أداة لإدارة المشاريع والمهام تدمج الذكاء الاصطناعي لتنظيم العمل وتحسين الإنتاجية.",
    "url": "https://asana.com",
    "category": "business-productivity-office"
  },
  {
    "name": "Basecamp",
    "description": "أداة لإدارة المشاريع والتواصل بين الفرق، تجمع كل شيء في مكان واحد.",
    "url": "https://basecamp.com/",
    "category": "business-productivity-office"
  },
  {
    "name": "Beautiful.ai",
    "description": "أداة لإنشاء عروض تقديمية احترافية وجذابة باستخدام الذكاء الاصطناعي لتنسيق الشرائح.",
    "url": "https://www.beautiful.ai",
    "category": "business-productivity-office"
  },
  {
    "name": "Calendly",
    "description": "أداة لجدولة الاجتماعات ومشاركة الأوقات المتاحة بسهولة دون تبادل رسائل البريد الإلكتروني.",
    "url": "https://calendly.com",
    "category": "business-productivity-office"
  },
  {
    "name": "ClickUp",
    "description": "منصة شاملة لإدارة المشاريع والمهام والمستندات مع مساعد ذكاء اصطناعي مدمج.",
    "url": "https://clickup.com",
    "category": "business-productivity-office"
  },
  {
    "name": "Clockify",
    "description": "أداة مجانية لتتبع الوقت وتسجيل ساعات العمل للمشاريع والمهام.",
    "url": "https://clockify.me",
    "category": "business-productivity-office"
  },
  {
    "name": "Exa (formerly Metaphor)",
    "description": "محرك بحث مصمم للبحث عن المعلومات باستخدام نماذج اللغة الكبيرة، مما يتيح استعلامات أكثر تعقيدًا.",
    "url": "https://exa.ai",
    "category": "business-productivity-office"
  },
  {
    "name": "Fireflies.ai",
    "description": "مساعد اجتماعات يقوم بتسجيل وتلخيص وتحليل المحادثات الصوتية تلقائيًا.",
    "url": "https://fireflies.ai",
    "category": "business-productivity-office"
  },
  {
    "name": "Forest",
    "description": "تطبيق لتحسين التركيز ومنع التشتت أثناء العمل أو الدراسة عن طريق زراعة أشجار افتراضية.",
    "url": "https://www.forestapp.cc",
    "category": "business-productivity-office"
  },
  {
    "name": "Freedom",
    "description": "أداة لحظر المواقع والتطبيقات المشتتة عبر جميع أجهزتك لتحسين التركيز.",
    "url": "https://freedom.to/",
    "category": "business-productivity-office"
  },
  {
    "name": "Gamma",
    "description": "تطبيق لإنشاء العروض التقديمية والمستندات وصفحات الويب من خلال النصوص والأوامر البسيطة.",
    "url": "https://gamma.app",
    "category": "business-productivity-office"
  },
  {
    "name": "Glean",
    "description": "محرك بحث ذكي لمكان العمل، يساعدك في العثور على أي شيء عبر جميع تطبيقات شركتك.",
    "url": "https://www.glean.com",
    "category": "business-productivity-office"
  },
  {
    "name": "Guru",
    "description": "منصة لإدارة المعرفة تستخدم الذكاء الاصطناعي لتوفير المعلومات التي يحتاجها فريقك في الوقت المناسب.",
    "url": "https://www.getguru.com",
    "category": "business-productivity-office"
  },
  {
    "name": "Harvest",
    "description": "برنامج لتتبع الوقت وإعداد الفواتير وتحليل بيانات المشاريع.",
    "url": "https://www.getharvest.com/",
    "category": "business-productivity-office"
  },
  {
    "name": "Hubstaff",
    "description": "برنامج لتتبع الوقت ومراقبة إنتاجية الفرق العاملة عن بعد.",
    "url": "https://hubstaff.com/",
    "category": "business-productivity-office"
  },
  {
    "name": "Komo",
    "description": "محرك بحث سريع وخاص يركز على تجربة المستخدم، مع ميزات الدردشة والاستكشاف.",
    "url": "https://komo.ai/",
    "category": "business-productivity-office"
  },
  {
    "name": "Microsoft Teams",
    "description": "منصة من Microsoft للتعاون والاجتماعات والدردشة الجماعية ومشاركة الملفات.",
    "url": "https://teams.microsoft.com",
    "category": "business-productivity-office"
  },
  {
    "name": "Microsoft To Do",
    "description": "تطبيق لإدارة المهام اليومية من Microsoft مع ميزات ذكية لتخطيط يومك.",
    "url": "https://to-do.microsoft.com/",
    "category": "business-productivity-office"
  },
  {
    "name": "Notion AI",
    "description": "مساعد ذكاء اصطناعي مدمج في مساحة عمل Notion لإنشاء المحتوى وتلخيصه وتنظيمه وتحسين الإنتاجية.",
    "url": "https://www.notion.so/product/ai",
    "category": "business-productivity-office",
    "tags": ["productivity", "note-taking", "ai-assistant", "workspace"]
  },
  {
    "name": "Microsoft 365 Copilot",
    "description": "مساعد ذكاء اصطناعي متكامل في تطبيقات Microsoft 365 (Word, Excel, PowerPoint) لتحسين الإنتاجية وتحليل البيانات.",
    "url": "https://www.microsoft.com/microsoft-365/microsoft-365-copilot",
    "category": "business-productivity-office",
    "tags": ["productivity", "microsoft", "office-suite", "ai-assistant"]
  },
  {
    "name": "Slack AI",
    "description": "مساعد ذكاء اصطناعي مدمج في Slack لتقديم ملخصات تلقائية للقنوات والمحادثات وتحسين التواصل بين الفرق.",
    "url": "https://slack.com/features/ai",
    "category": "business-productivity-office",
    "tags": ["communication", "team-collaboration", "summarization", "slack"]
  },
  {
    "name": "MindMeister",
    "description": "أداة لإنشاء الخرائط الذهنية عبر الإنترنت تساعد في تحديد الأهداف وتخطيط المشاريع.",
    "url": "https://www.mindmeister.com/",
    "category": "business-productivity-office"
  },
  {
    "name": "Monday.com",
    "description": "منصة عمل مرنة لإدارة المشاريع والمهام وسير العمل بواجهة مرئية جذابة.",
    "url": "https://monday.com",
    "category": "business-productivity-office"
  },
  {
    "name": "Motion",
    "description": "تطبيق لإدارة الوقت والمهام يستخدم الذكاء الاصطناعي لجدولة يومك بذكاء وتحسين إنتاجيتك.",
    "url": "https://www.usemotion.com",
    "category": "business-productivity-office"
  },
  {
    "name": "Notion AI",
    "description": "مساعد ذكاء اصطناعي مدمج في مساحة عمل Notion لإنشاء المحتوى وتلخيصه وتنظيمه.",
    "url": "https://www.notion.so/product/ai",
    "category": "business-productivity-office"
  },
  {
    "name": "Notta",
    "description": "يكتب الملاحظات لك تلقائيًا عن طريق تحويل الاجتماعات والمحاضرات الصوتية إلى نصوص.",
    "url": "https://www.notta.ai",
    "category": "business-productivity-office"
  },
  {
    "name": "Otter.ai",
    "description": "يقوم بتحويل الاجتماعات والمحادثات الصوتية إلى نصوص مكتوبة مع ملخصات تلقائية وتحديد المتحدثين.",
    "url": "https://otter.ai",
    "category": "business-productivity-office"
  },
  {
    "name": "Perplexity AI",
    "description": "محرك بحث ومحادثة يعتمد على الذكاء الاصطناعي لتقديم إجابات دقيقة مع ذكر المصادر.",
    "url": "https://www.perplexity.ai/",
    "category": "business-productivity-office"
  },
  {
    "name": "Phind",
    "description": "محرك بحث للمطورين يقدم إجابات مباشرة مع أمثلة برمجية وحلول للمشكلات التقنية.",
    "url": "https://phind.com/",
    "category": "business-productivity-office"
  },
  {
    "name": "Plus AI",
    "description": "أداة لإنشاء وتعديل العروض التقديمية داخل Google Slides و PowerPoint باستخدام الذكاء الاصطناعي.",
    "url": "https://www.plusdocs.com/",
    "category": "business-productivity-office"
  },
  {
    "name": "RescueTime",
    "description": "أداة لتتبع الوقت تلقائيًا وفهم كيفية قضائه لتحسين التركيز والإنتاجية.",
    "url": "https://www.rescuetime.com",
    "category": "business-productivity-office"
  },
  {
    "name": "Resume Worded",
    "description": "منصة تساعد في تحسين السيرة الذاتية وملف LinkedIn باستخدام الذكاء الاصطناعي.",
    "url": "https://www.resumeworded.com",
    "category": "business-productivity-office"
  },
  {
    "name": "SaneBox",
    "description": "أداة لتنظيم البريد الوارد بذكاء وتصفية الرسائل غير الهامة تلقائيًا.",
    "url": "https://www.sanebox.com",
    "category": "business-productivity-office"
  },
  {
    "name": "Slack",
    "description": "منصة تواصل وتعاون للفرق مع قنوات مخصصة وتكامل مع مئات الأدوات الأخرى.",
    "url": "https://slack.com",
    "category": "business-productivity-office"
  },
  {
    "name": "Smartsheet",
    "description": "منصة لإدارة العمل التعاوني وأتمتة العمليات.",
    "url": "https://www.smartsheet.com/",
    "category": "business-productivity-office"
  },
  {
    "name": "Streaks",
    "description": "تطبيق يساعدك على بناء وتتبع العادات الإيجابية اليومية.",
    "url": "https://streaksapp.com",
    "category": "business-productivity-office"
  },
  {
    "name": "Teamwork",
    "description": "منصة لإدارة المشاريع والتعاون بين الفرق مع ميزات لتتبع الوقت وإعداد الفواتير.",
    "url": "https://www.teamwork.com/",
    "category": "business-productivity-office"
  },
  {
    "name": "TickTick",
    "description": "تطبيق لإدارة المهام وقوائم المراجعة مع تقويم مدمج وميزات لتتبع العادات.",
    "url": "https://ticktick.com/",
    "category": "business-productivity-office"
  },
  {
    "name": "Time Doctor",
    "description": "برنامج لتتبع الوقت وتحليل إنتاجية الموظفين مع لقطات شاشة اختيارية.",
    "url": "https://www.timedoctor.com/",
    "category": "business-productivity-office"
  },
  {
    "name": "Todoist",
    "description": "مدير مهام يستخدم معالجة اللغة الطبيعية لتسهيل إضافة المهام وتصنيفها وتنظيمها.",
    "url": "https://todoist.com",
    "category": "business-productivity-office"
  },
  {
    "name": "Toggl Track",
    "description": "أداة بسيطة لتتبع الوقت للموظفين والمستقلين لتحسين الإنتاجية.",
    "url": "https://toggl.com/track/",
    "category": "business-productivity-office"
  },
  {
    "name": "Trello",
    "description": "أداة إدارة مشاريع بسيطة ومرئية باستخدام نظام اللوحات والبطاقات (Kanban).",
    "url": "https://trello.com",
    "category": "business-productivity-office"
  },
  {
    "name": "Wrike",
    "description": "منصة لإدارة المشاريع والعمل التعاوني للمؤسسات والفرق الكبيرة.",
    "url": "https://www.wrike.com/",
    "category": "business-productivity-office"
  },
  {
    "name": "You.com",
    "description": "محرك بحث قابل للتخصيص يدمج التطبيقات ونتائج البحث في واجهة واحدة.",
    "url": "https://you.com/",
    "category": "business-productivity-office"
  },
  {
    "name": "Zapier",
    "description": "أداة رائدة لأتمتة المهام وسير العمل بين آلاف تطبيقات الويب المختلفة بدون برمجة.",
    "url": "https://zapier.com",
    "category": "business-productivity-office"
  },
  {
    "name": "Zoho Projects",
    "description": "أداة لإدارة المشاريع من Zoho مع ميزات للتخطيط والتتبع والتعاون.",
    "url": "https://www.zoho.com/projects/",
    "category": "business-productivity-office"
  },
  {
    "name": "Zoom",
    "description": "منصة لعقد اجتماعات الفيديو والندوات عبر الإنترنت عالية الجودة مع ميزات تعاون متقدمة.",
    "url": "https://zoom.us",
    "category": "business-productivity-office"
  },
  {
    "name": "10Web",
    "description": "منصة ووردبريس مدعومة بالذكاء الاصطناعي لإنشاء واستضافة وإدارة المواقع بشكل آلي.",
    "url": "https://10web.io",
    "category": "business-marketing-sales"
  },
  {
    "name": "17hats",
    "description": "منصة لإدارة الأعمال وإدارة علاقات العملاء (CRM) مصممة خصيصًا للمستقلين والشركات الصغيرة.",
    "url": "https://www.17hats.com/",
    "category": "business-marketing-sales"
  },
  {
    "name": "ActiveCampaign",
    "description": "منصة لأتمتة التسويق وتجربة العملاء مع أدوات CRM مدمجة للمبيعات.",
    "url": "https://www.activecampaign.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "AdCreative.ai",
    "description": "يصمم إعلانات مرئية ومخصصة لحملاتك التسويقية على مختلف المنصات باستخدام الذكاء الاصطناعي.",
    "url": "https://www.adcreative.ai",
    "category": "business-marketing-sales"
  },
  {
    "name": "Ahrefs",
    "description": "أداة قوية لتحليل الروابط الخلفية، والبحث عن الكلمات المفتاحية، وتحليل المنافسين.",
    "url": "https://ahrefs.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "AI E-commerce Chatbot",
    "description": "يرد على استفسارات العملاء في المتاجر الإلكترونية ويزيد من المبيعات.",
    "url": "https://www.tidio.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "AI Website Builder",
    "description": "يبني مواقع ويب احترافية ومتاجر إلكترونية دون الحاجة إلى برمجة.",
    "url": "https://www.wix.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Aspire",
    "description": "منصة لإدارة حملات التسويق عبر المؤثرين والمحتوى الذي ينشئه المستخدمون (UGC).",
    "url": "https://www.aspire.io/",
    "category": "business-marketing-sales"
  },
  {
    "name": "AWeber",
    "description": "أداة للتسويق عبر البريد الإلكتروني مصممة للشركات الصغيرة والمبدعين.",
    "url": "https://www.aweber.com/",
    "category": "business-marketing-sales"
  },
  {
    "name": "BigCommerce",
    "description": "منصة تجارة إلكترونية سحابية قابلة للتطوير مع ميزات مدمجة متقدمة.",
    "url": "https://www.bigcommerce.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Brevo (formerly Sendinblue)",
    "description": "منصة تسويق شاملة تتضمن البريد الإلكتروني، والرسائل القصيرة، والدردشة، وإدارة علاقات العملاء.",
    "url": "https://www.brevo.com/",
    "category": "business-marketing-sales"
  },
  {
    "name": "Buffer",
    "description": "أداة بسيطة وفعالة لجدولة المنشورات وتحليل أدائها على وسائل التواصل الاجتماعي.",
    "url": "https://www.buffer.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "BuzzSumo",
    "description": "منصة لاكتشاف المحتوى الرائج والأكثر مشاركة عبر الويب وتحديد المؤثرين.",
    "url": "https://buzzsumo.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Campaign Monitor",
    "description": "منصة للتسويق عبر البريد الإلكتروني مع قوالب جذابة وأدوات تخصيص.",
    "url": "https://www.campaignmonitor.com/",
    "category": "business-marketing-sales"
  },
  {
    "name": "Chatfuel",
    "description": "منصة لإنشاء روبوتات محادثة (Chatbots) على فيسبوك ماسنجر وإنستغرام بدون برمجة.",
    "url": "https://chatfuel.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Chorus by ZoomInfo",
    "description": "منصة لتحليل محادثات المبيعات (Conversation Intelligence) وتقديم رؤى حول ما يؤدي إلى إغلاق الصفقات.",
    "url": "https://www.zoominfo.com/products/chorus",
    "category": "business-marketing-sales"
  },
  {
    "name": "Clari",
    "description": "منصة لتوقع المبيعات (Sales Forecasting) وإدارة الإيرادات.",
    "url": "https://www.clari.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Clay",
    "description": "أداة لأتمتة مهام البحث والتنقيب عن العملاء المحتملين من مصادر متعددة.",
    "url": "https://www.clay.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Clearscope",
    "description": "أداة لتحسين المحتوى بناءً على الكلمات المفتاحية التي يستخدمها المنافسون في أعلى النتائج.",
    "url": "https://www.clearscope.io",
    "category": "business-marketing-sales"
  },
  {
    "name": "Constant Contact",
    "description": "خدمة لإنشاء وإرسال حملات البريد الإلكتروني التسويقية وإدارة قوائم جهات الاتصال.",
    "url": "https://www.constantcontact.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Copper",
    "description": "نظام إدارة علاقات العملاء (CRM) مدمج بعمق مع Google Workspace (Gmail, Calendar).",
    "url": "https://www.copper.com/",
    "category": "business-marketing-sales"
  },
  {
    "name": "Copy.ai",
    "description": "أداة لتوليد النصوص الإعلانية، ومحتوى الشبكات الاجتماعية، ورسائل البريد الإلكتروني.",
    "url": "https://www.copy.ai",
    "category": "business-marketing-sales"
  },
  {
    "name": "CrankWheel",
    "description": "أداة لعقد اجتماعات عرض مباشرة ومشاركة الشاشة مع العملاء المحتملين بسهولة.",
    "url": "https://crankwheel.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Crazy Egg",
    "description": "أداة لتحليل سلوك المستخدم عبر خرائط الحرارة (Heatmaps) وتتبع النقرات وتسجيلات الجلسات.",
    "url": "https://www.crazyegg.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Cresta",
    "description": "تقدم إرشادات في الوقت الفعلي لموظفي خدمة العملاء والمبيعات أثناء المحادثات لتحسين أدائهم.",
    "url": "https://www.cresta.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Crunchbase",
    "description": "منصة للعثور على معلومات وبيانات حول الشركات الناشئة والتمويل والاستثمارات.",
    "url": "https://www.crunchbase.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Crystal",
    "description": "منصة تحلل شخصية أي شخص بناءً على ملفاته العامة لمساعدتك على التواصل بفعالية.",
    "url": "https://www.crystalknows.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Drip",
    "description": "منصة تسويق عبر البريد الإلكتروني والرسائل القصيرة مصممة خصيصًا للتجارة الإلكترونية.",
    "url": "https://www.drip.com/",
    "category": "business-marketing-sales"
  },
  {
    "name": "Firedrop",
    "description": "مساعد تصميم ذكي (Sacha) يساعد في بناء صفحات الويب من خلال المحادثة.",
    "url": "https://firedrop.ai",
    "category": "business-marketing-sales"
  },
  {
    "name": "Forethought",
    "description": "منصة أتمتة لخدمة العملاء (SupportGPT) تساعد في حل الاستفسارات الشائعة تلقائيًا عبر قنوات متعددة.",
    "url": "https://forethought.ai",
    "category": "business-marketing-sales"
  },
  {
    "name": "Frase.io",
    "description": "أداة تساعد في البحث وإنشاء وتحسين محتوى متوافق مع معايير محركات البحث.",
    "url": "https://www.frase.io",
    "category": "business-marketing-sales"
  },
  {
    "name": "Freshsales",
    "description": "نظام إدارة علاقات العملاء (CRM) للمبيعات من Freshworks مع أدوات مدمجة.",
    "url": "https://www.freshworks.com/crm",
    "category": "business-marketing-sales"
  },
  {
    "name": "GetResponse",
    "description": "منصة تسويق شاملة تتضمن البريد الإلكتروني، وصفحات الهبوط، والندوات عبر الإنترنت.",
    "url": "https://www.getresponse.com/",
    "category": "business-marketing-sales"
  },
  {
    "name": "Google Analytics",
    "description": "أداة مجانية من Google لتحليل حركة المرور وسلوك الزوار على المواقع والتطبيقات.",
    "url": "https://analytics.google.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Jasper",
    "description": "أداة متقدمة لإنشاء المحتوى التسويقي والمدونات والبريد الإلكتروني باستخدام الذكاء الاصطناعي مع قوالب مخصصة لكل منصة.",
    "url": "https://jasper.ai",
    "category": "content-writing",
    "tags": ["content-generation", "marketing", "copywriting", "blog-writing"]
  },
  {
    "name": "Rytr",
    "description": "منصة متكاملة لإنشاء المحتوى باللغة العربية والإنجليزية مع دعم لأكثر من 40 حالة استخدام مختلفة.",
    "url": "https://rytr.me",
    "category": "content-writing",
    "tags": ["content-generation", "multilingual", "writing-assistant", "arabic-ai"]
  },
  {
    "name": "Heepsy",
    "description": "منصة للبحث عن المؤثرين (Influencers) وتحليلهم بناءً على معايير دقيقة.",
    "url": "https://www.heepsy.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Hootsuite",
    "description": "منصة لإدارة وجدولة المحتوى على مختلف وسائل التواصل الاجتماعي من مكان واحد.",
    "url": "https://www.hootsuite.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Hotjar",
    "description": "أداة لفهم سلوك الزوار على موقعك من خلال خرائط الحرارة وتسجيلات الجلسات والاستطلاعات.",
    "url": "https://www.hotjar.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "HubSpot CRM",
    "description": "منصة إدارة علاقات العملاء (CRM) القوية من HubSpot مع مجموعة أدوات مجانية.",
    "url": "https://www.hubspot.com/products/crm",
    "category": "business-marketing-sales"
  },
  {
    "name": "HubSpot Marketing Hub",
    "description": "أدوات لتجزئة العملاء (Segmentation) وإدارة الحملات التسويقية.",
    "url": "https://www.hubspot.com/products/marketing",
    "category": "business-marketing-sales"
  },
  {
    "name": "Insightly",
    "description": "نظام إدارة علاقات العملاء (CRM) مع أدوات مدمجة لإدارة المشاريع.",
    "url": "https://www.insightly.com/",
    "category": "business-marketing-sales"
  },
  {
    "name": "Intercom",
    "description": "منصة محادثات العملاء مع روبوتات دعم ذكية (Chatbots) للإجابة على استفسارات العملاء.",
    "url": "https://www.intercom.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Kaizan",
    "description": "مساعد ذكي لمديري الحسابات (Account Managers) يساعدهم في إدارة علاقات العملاء وتنميتها بفعالية.",
    "url": "https://www.kaizan.ai",
    "category": "business-marketing-sales"
  },
  {
    "name": "Keap (formerly Infusionsoft)",
    "description": "نظام إدارة علاقات العملاء (CRM) وأتمتة المبيعات والتسويق للشركات الصغيرة.",
    "url": "https://keap.com/",
    "category": "business-marketing-sales"
  },
  {
    "name": "Klaviyo",
    "description": "منصة تسويق عبر البريد الإلكتروني والرسائل القصيرة مخصصة للتجارة الإلكترونية.",
    "url": "https://www.klaviyo.com/",
    "category": "business-marketing-sales"
  },
  {
    "name": "Lavender",
    "description": "مساعد بريد إلكتروني للمبيعات يساعد على كتابة رسائل أفضل وأكثر تخصيصًا لزيادة معدلات الرد.",
    "url": "https://www.lavender.ai",
    "category": "business-marketing-sales"
  },
  {
    "name": "Level AI",
    "description": "أداة لتحليل محادثات خدمة العملاء وضمان الجودة (QA) تلقائيًا في مراكز الاتصال.",
    "url": "https://thelevel.ai",
    "category": "business-marketing-sales"
  },
  {
    "name": "MadKudu",
    "description": "منصة لتسجيل نقاط العملاء المحتملين (Lead Scoring) باستخدام الذكاء الاصطناعي لتحديد أفضل الفرص.",
    "url": "https://www.madkudu.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Mailchimp",
    "description": "منصة لإدارة الحملات البريدية وأتمتة التسويق عبر البريد الإلكتروني.",
    "url": "https://www.mailchimp.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "MailerLite",
    "description": "أداة للتسويق عبر البريد الإلكتروني مع منشئ صفحات هبوط وميزات أتمتة.",
    "url": "https://www.mailerlite.com/",
    "category": "business-marketing-sales"
  },
  {
    "name": "Mailshake",
    "description": "أداة للمبيعات تساعد في إرسال رسائل بريد إلكتروني باردة ومتابعات مؤتمتة.",
    "url": "https://www.mailshake.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Mailtrack",
    "description": "امتداد لـ Gmail لتتبع فتح رسائل البريد الإلكتروني والنقرات عليها.",
    "url": "https://mailtrack.io",
    "category": "business-marketing-sales"
  },
  {
    "name": "Majestic",
    "description": "أداة متخصصة في تحليل الروابط الخلفية (Backlinks) وفحص قوة المواقع.",
    "url": "https://www.majestic.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "ManyChat",
    "description": "أداة لإنشاء روبوتات محادثة لأتمتة المبيعات والتسويق وخدمة العملاء عبر منصات متعددة.",
    "url": "https://manychat.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "MarketMuse",
    "description": "منصة لتحسين جودة المحتوى وتخطيطه باستخدام الذكاء الاصطناعي لزيادة ترتيبه في نتائج البحث.",
    "url": "https://www.marketmuse.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Marketo Engage",
    "description": "منصة أتمتة التسويق للمؤسسات من Adobe.",
    "url": "https://business.adobe.com/products/marketo/adobe-marketo.html",
    "category": "business-marketing-sales"
  },
  {
    "name": "Medallia",
    "description": "منصة لتحليل آراء العملاء وملاحظاتهم عبر قنوات متعددة لاستخلاص الرؤى.",
    "url": "https://www.medallia.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Mixmax",
    "description": "منصة لتفاعل المبيعات تعمل داخل Gmail لتتبع رسائل البريد الإلكتروني وأتمتة المهام.",
    "url": "https://mixmax.com/",
    "category": "business-marketing-sales"
  },
  {
    "name": "NeuronWriter",
    "description": "أداة لتحسين المحتوى بناءً على تحليل SERP والبرمجة اللغوية العصبية (NLP).",
    "url": "https://www.neuronwriter.com/",
    "category": "business-marketing-sales"
  },
  {
    "name": "Nosto",
    "description": "منصة لتخصيص تجربة التسوق عبر الإنترنت لكل زائر باستخدام توصيات المنتجات الذكية.",
    "url": "https://www.nosto.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Omnisend",
    "description": "منصة تسويق عبر البريد الإلكتروني والرسائل القصيرة مصممة للتجارة الإلكترونية.",
    "url": "https://www.omnisend.com/",
    "category": "business-marketing-sales"
  },
  {
    "name": "Optimizely",
    "description": "منصة لاختبار A/B والتخصيص لتحسين أداء المواقع والتطبيقات.",
    "url": "https://www.optimizely.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Pardot",
    "description": "منصة أتمتة التسويق B2B من Salesforce.",
    "url": "https://www.salesforce.com/products/marketing-cloud/account-engagement/",
    "category": "business-marketing-sales"
  },
  {
    "name": "People.ai",
    "description": "منصة تلتقط جميع بيانات نشاط المبيعات وتوفر رؤى لتحسين الأداء وزيادة الإيرادات.",
    "url": "https://people.ai",
    "category": "business-marketing-sales"
  },
  {
    "name": "Persado",
    "description": "منصة تستخدم الذكاء الاصطناعي لإنشاء رسائل تسويقية مؤثرة ومخصصة عبر مختلف القنوات.",
    "url": "https://persado.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Pineapple Builder",
    "description": "منشئ مواقع بسيط وسريع مدعوم بالذكاء الاصطناعي لإنشاء صفحات ويب جميلة.",
    "url": "https://pineapplebuilder.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Pipedrive",
    "description": "أداة إدارة مبيعات بسيطة ومرئية تركز على دورة البيع (Sales Pipeline).",
    "url": "https://www.pipedrive.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Postal.io",
    "description": "منصة لأتمتة إرسال الهدايا والبريد المباشر للعملاء المحتملين والحاليين لزيادة التفاعل.",
    "url": "https://postal.io",
    "category": "business-marketing-sales"
  },
  {
    "name": "Quattr",
    "description": "منصة SEO للمؤسسات تستخدم الذكاء الاصطناعي لتحديد فرص النمو وتحقيقها.",
    "url": "https://quattr.com/",
    "category": "business-marketing-sales"
  },
  {
    "name": "Replo",
    "description": "أداة لبناء وتخصيص صفحات هبوط احترافية لمنصات التجارة الإلكترونية مثل Shopify.",
    "url": "https://www.replo.pro",
    "category": "business-marketing-sales"
  },
  {
    "name": "Salesforce Sales Cloud",
    "description": "منصة إدارة علاقات العملاء (CRM) الرائدة عالميًا للمبيعات.",
    "url": "https://www.salesforce.com/products/sales-cloud/overview/",
    "category": "business-marketing-sales"
  },
  {
    "name": "SalesHandy",
    "description": "منصة لتفاعل المبيعات تتضمن تتبع البريد الإلكتروني، وجدولة الرسائل، والمتابعات الآلية.",
    "url": "https://www.saleshandy.com/",
    "category": "business-marketing-sales"
  },
  {
    "name": "Scalenut",
    "description": "منصة متكاملة لتحسين محركات البحث (SEO) وإنشاء المحتوى باستخدام الذكاء الاصطناعي.",
    "url": "https://www.scalenut.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Semrush",
    "description": "مجموعة أدوات متكاملة للتسويق الرقمي تشمل SEO، والإعلانات، والتسويق بالمحتوى.",
    "url": "https://www.semrush.com/",
    "category": "business-marketing-sales"
  },
  {
    "name": "Shopify",
    "description": "منصة شاملة ورائدة لإنشاء متاجر التجارة الإلكترونية وإدارتها وتنميتها.",
    "url": "https://www.shopify.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Similarweb",
    "description": "يوفر تحليلات شاملة لحركة المرور ومصادرها للمواقع والتطبيقات المنافسة.",
    "url": "https://www.similarweb.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Smartly.io",
    "description": "منصة لأتمتة وتحسين الحملات الإعلانية على وسائل التواصل الاجتماعي.",
    "url": "https://www.smartly.io",
    "category": "business-marketing-sales"
  },
  {
    "name": "Sprout Social",
    "description": "أداة لإدارة وجدولة المحتوى على وسائل التواصل الاجتماعي مع تحليلات متقدمة.",
    "url": "https://sproutsocial.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Squarespace",
    "description": "منصة لبناء مواقع ويب ومتاجر إلكترونية بتصاميم جاهزة أنيقة وقوالب احترافية.",
    "url": "https://www.squarespace.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Surfer SEO",
    "description": "أداة لتحليل صفحات المنافسين وتحسين المحتوى ليتصدر نتائج البحث.",
    "url": "https://surferseo.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Syte",
    "description": "أداة للبحث البصري في مواقع التجارة الإلكترونية، مما يتيح للمستخدمين البحث باستخدام الصور.",
    "url": "https://www.syte.ai",
    "category": "business-marketing-sales"
  },
  {
    "name": "TeleportHQ",
    "description": "منصة تعاونية لإنشاء واجهات المستخدم وتصديرها إلى كود برمجي نظيف.",
    "url": "https://teleporthq.io",
    "category": "business-marketing-sales"
  },
  {
    "name": "Typeform",
    "description": "أداة لإنشاء استطلاعات ونماذج محادثة تفاعلية وذكية لجمع البيانات.",
    "url": "https://www.typeform.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Ultimate",
    "description": "منصة لأتمتة الدردشة ورسائل البريد الإلكتروني لدعم العملاء، مع تكامل مع أنظمة CRM.",
    "url": "https://www.ultimate.ai",
    "category": "business-marketing-sales"
  },
  {
    "name": "Userpilot",
    "description": "أداة لمساعدة الشركات على تحسين تجربة المستخدم وتوجيه العملاء الجدد داخل التطبيق (Onboarding).",
    "url": "https://userpilot.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "UserTesting",
    "description": "منصة للحصول على تقييمات وآراء حقيقية من المستخدمين لتطبيقاتك ومواقعك لتحسين تجربة المستخدم.",
    "url": "https://www.usertesting.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "VidIQ",
    "description": "أداة لتحليل وتحسين قنوات يوتيوب لزيادة المشاهدات والمشتركين.",
    "url": "https://vidiq.com/",
    "category": "business-marketing-sales"
  },
  {
    "name": "VWO",
    "description": "منصة لاختبار A/B وتحسين معدلات التحويل (CRO) للمواقع والتطبيقات.",
    "url": "https://vwo.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Warmly",
    "description": "أداة تعرض معلومات عن الأشخاص الذين تجتمع معهم مباشرة في نافذة Zoom أو Google Meet لبناء علاقات أفضل.",
    "url": "https://warmly.ai",
    "category": "business-marketing-sales"
  },
  {
    "name": "Webflow",
    "description": "منصة تصميم مواقع بصرية وتفاعلية بدون كتابة كود، مع نظام إدارة محتوى قوي.",
    "url": "https://webflow.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Wix ADI (Artificial Design Intelligence)",
    "description": "أداة من Wix تقوم بتصميم موقع ويب لك تلقائيًا بناءً على إجاباتك على بعض الأسئلة.",
    "url": "https://www.wix.com/adi",
    "category": "business-marketing-sales"
  },
  {
    "name": "WooCommerce",
    "description": "إضافة مجانية ومفتوحة المصدر لإنشاء متاجر إلكترونية على مواقع ووردبريس.",
    "url": "https://woocommerce.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "WordLift",
    "description": "إضافة ووردبريس تستخدم الذكاء الاصطناعي لتحويل المحتوى إلى بيانات منظمة (Structured Data) لتحسين السيو.",
    "url": "https://wordlift.io/",
    "category": "business-marketing-sales"
  },
  {
    "name": "WriterZen",
    "description": "مجموعة أدوات لإنشاء المحتوى وتحسينه للـ SEO، من البحث عن الكلمات المفتاحية إلى الكتابة.",
    "url": "https://writerzen.net/",
    "category": "business-marketing-sales"
  },
  {
    "name": "Yesware",
    "description": "مجموعة أدوات للمبيعات تعمل داخل Gmail و Outlook لتتبع البريد الإلكتروني وجدولة الاجتماعات.",
    "url": "https://www.yesware.com/",
    "category": "business-marketing-sales"
  },
  {
    "name": "Yotpo",
    "description": "منصة تسويق للتجارة الإلكترونية تستخدم الذكاء الاصطناعي لجمع وإدارة تقييمات العملاء.",
    "url": "https://www.yotpo.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Zendesk Sell",
    "description": "نظام إدارة علاقات العملاء (CRM) للمبيعات من Zendesk لتحسين إنتاجية فريق المبيعات.",
    "url": "https://www.zendesk.com/sell/",
    "category": "business-marketing-sales"
  },
  {
    "name": "Zoho CRM",
    "description": "نظام إدارة علاقات العملاء (CRM) من Zoho مع ميزات مدعومة بالذكاء الاصطناعي.",
    "url": "https://www.zoho.com/crm/",
    "category": "business-marketing-sales"
  },
  {
    "name": "Zuora",
    "description": "منصة لإدارة الاشتراكات والفواتير، تساعد في توقع ومنع ت churn العملاء.",
    "url": "https://www.zuora.com",
    "category": "business-marketing-sales"
  },
  {
    "name": "Casetext",
    "description": "أداة بحث قانوني مدعومة بالذكاء الاصطناعي تساعد المحامين في العثور على السوابق القضائية ذات الصلة بسرعة.",
    "url": "https://casetext.com",
    "category": "business-operations"
  },
  {
    "name": "DoNotPay",
    "description": "يُعرف بأنه 'أول محامٍ آلي في العالم'، يساعد في حل المشكلات القانونية البسيطة والنزاعات مع الشركات.",
    "url": "https://donotpay.com",
    "category": "business-operations"
  },
  {
    "name": "Effy.ai",
    "description": "منصة لإدارة أداء الموظفين وجمع التقييمات (360-degree feedback) باستخدام الذكاء الاصطناعي.",
    "url": "https://effy.ai",
    "category": "business-operations"
  },
  {
    "name": "Eightfold.ai",
    "description": "منصة لإدارة وتطوير المواهب (Talent Intelligence) تساعد في التوظيف والتطوير الوظيفي.",
    "url": "https://eightfold.ai",
    "category": "business-operations"
  },
  {
    "name": "Everlaw",
    "description": "منصة للاستكشاف الإلكتروني (eDiscovery) تستخدم في التحقيقات والقضايا القانونية الكبرى لمراجعة المستندات.",
    "url": "https://www.everlaw.com",
    "category": "business-operations"
  },
  {
    "name": "Fetcher",
    "description": "أداة لأتمتة عملية البحث عن المرشحين والتواصل معهم عبر قنوات متعددة.",
    "url": "https://fetcher.ai",
    "category": "business-operations"
  },
  {
    "name": "Greenhouse",
    "description": "نظام تتبع المتقدمين (ATS) يساعد في بناء وتحسين عمليات التوظيف من البداية إلى النهاية.",
    "url": "https://www.greenhouse.io",
    "category": "business-operations"
  },
  {
    "name": "Harvey AI",
    "description": "منصة ذكاء اصطناعي مصممة خصيصًا للمهام القانونية المعقدة مثل تحليل العقود والبحث القانوني.",
    "url": "https://www.harvey.ai",
    "category": "business-operations"
  },
  {
    "name": "Hiretual (now hireEZ)",
    "description": "منصة للعثور على المرشحين (Sourcing) والتواصل معهم باستخدام الذكاء الاصطناعي.",
    "url": "https://hireez.com/",
    "category": "business-operations"
  },
  {
    "name": "HireVue",
    "description": "منصة تستخدم الذكاء الاصطناعي لتحليل مقابلات الفيديو والتقييمات لتقييم المرشحين.",
    "url": "https://www.hirevue.com",
    "category": "business-operations"
  },
  {
    "name": "Ideal",
    "description": "برنامج لفحص المرشحين واختيار القائمة المختصرة منهم بشكل آلي (الآن جزء من Ceridian).",
    "url": "https://www.ceridian.com/products/dayforce-talent-management",
    "category": "business-operations"
  },
  {
    "name": "Ironclad",
    "description": "منصة لإدارة دورة حياة العقود (CLM) باستخدام الذكاء الاصطناعي لأتمتة العمليات.",
    "url": "https://ironcladapp.com",
    "category": "business-operations"
  },
  {
    "name": "Kira Systems",
    "description": "منصة لاستخراج وتحليل البيانات من العقود والمستندات القانونية الأخرى باستخدام الذكاء الاصطناعي.",
    "url": "https://kirasystems.com",
    "category": "business-operations"
  },
  {
    "name": "LawGeex",
    "description": "منصة لمراجعة العقود تلقائيًا باستخدام الذكاء الاصطناعي لتحديد المخاطر والبنود غير القياسية.",
    "url": "https://www.lawgeex.com",
    "category": "business-operations"
  },
  {
    "name": "LegalZoom",
    "description": "منصة عبر الإنترنت للمساعدة في إعداد الوثائق القانونية وتقديم الخدمات القانونية للأفراد والشركات الصغيرة.",
    "url": "https://www.legalzoom.com",
    "category": "business-operations"
  },
  {
    "name": "Lever",
    "description": "منصة لإدارة علاقات المواهب (Talent Relationship Management) تركز على التعاون في التوظيف.",
    "url": "https://www.lever.co",
    "category": "business-operations"
  },
  {
    "name": "Lex Machina",
    "description": "منصة لتحليل بيانات القضايا القانونية (Legal Analytics) وتقديم رؤى استراتيجية للمحامين.",
    "url": "https://lexmachina.com",
    "category": "business-operations"
  },
  {
    "name": "Manatal",
    "description": "نظام تتبع المتقدمين (ATS) مع توصيات مدعومة بالذكاء الاصطناعي وأتمتة عمليات التوظيف.",
    "url": "https://www.manatal.com",
    "category": "business-operations"
  },
  {
    "name": "MyInterview",
    "description": "منصة لإجراء مقابلات الفيديو بشكل غير متزامن، مما يسهل على الشركات تقييم المرشحين.",
    "url": "https://www.myinterview.com",
    "category": "business-operations"
  },
  {
    "name": "PandaDoc",
    "description": "منصة لإنشاء وإدارة وتوقيع العقود والمستندات التجارية إلكترونيًا.",
    "url": "https://www.pandadoc.com",
    "category": "business-operations"
  },
  {
    "name": "Paradox (Olivia)",
    "description": "مساعد توظيف ذكي (Olivia) يقوم بأتمتة مهام مثل الجدولة والإجابة على استفسارات المرشحين.",
    "url": "https://www.paradox.ai",
    "category": "business-operations"
  },
  {
    "name": "PatentPal",
    "description": "أداة تستخدم الذكاء الاصطناعي للمساعدة في كتابة طلبات براءات الاختراع والبحث في قواعد البيانات.",
    "url": "https://patentpal.com/",
    "category": "business-operations"
  },
  {
    "name": "Phenom",
    "description": "منصة تجربة المواهب الشاملة (Talent Experience Management) لجذب وتوظيف وتطوير المواهب.",
    "url": "https://www.phenom.com",
    "category": "business-operations"
  },
  {
    "name": "Pymetrics",
    "description": "منصة تستخدم ألعابًا عصبية لتقييم المهارات الشخصية للمرشحين بموضوعية (الآن جزء من Harver).",
    "url": "https://harver.com/",
    "category": "business-operations"
  },
  {
    "name": "SeekOut",
    "description": "منصة للعثور على المواهب تستخدم الذكاء الاصطناعي للبحث عن مرشحين من مصادر متنوعة.",
    "url": "https://www.seekout.com",
    "category": "business-operations"
  },
  {
    "name": "Skillate",
    "description": "أداة ذكية لتحليل السير الذاتية ومطابقة المرشحين مع الوصف الوظيفي (الآن جزء من iMocha).",
    "url": "https://www.imocha.io/",
    "category": "business-operations"
  },
  {
    "name": "Spellbook",
    "description": "مساعد ذكاء اصطناعي مدمج في Microsoft Word لمساعدة المحامين في صياغة ومراجعة العقود.",
    "url": "https://www.spellbook.legal",
    "category": "business-operations"
  },
  {
    "name": "Termly",
    "description": "أداة لإنشاء سياسات الخصوصية وشروط الخدمة وإشعارات ملفات تعريف الارتباط للمواقع الإلكترونية.",
    "url": "https://termly.io",
    "category": "business-operations"
  },
  {
    "name": "Textio",
    "description": "أداة لكتابة إعلانات وظائف وتقييمات أداء شاملة وغير متحيزة باستخدام الذكاء الاصطناعي.",
    "url": "https://textio.com/",
    "category": "business-operations"
  },
  {
    "name": "AI Language Tutor",
    "description": "مدرب لغوي ذكي يساعدك على تعلم لغات جديدة عبر محادثات تفاعلية.",
    "url": "https://www.busuu.com",
    "category": "lifestyle-education-research"
  },
  {
    "name": "AI Math Tutor",
    "description": "يشرح لك مسائل الرياضيات خطوة بخطوة عبر تصويرها بالكاميرا.",
    "url": "https://www.photomath.com",
    "category": "lifestyle-education-research"
  },
  {
    "name": "AI Research Assistant",
    "description": "يساعدك في البحث الأكاديمي وإيجاد المصادر والأوراق العلمية ذات الصلة.",
    "url": "https://www.consensus.app",
    "category": "lifestyle-education-research"
  },
  {
    "name": "AI Science Tutor",
    "description": "مساعد دراسي ذكي في المواد العلمية يقدم شروحات وحلول للمسائل.",
    "url": "https://www.socratic.org",
    "category": "lifestyle-education-research"
  },
  {
    "name": "AI Thesis Writer",
    "description": "يساعدك في تحسين جودة كتابة الأطروحات والأوراق البحثية وتصحيح الأخطاء.",
    "url": "https://www.grammarly.com",
    "category": "lifestyle-education-research"
  },
  {
    "name": "Babbel",
    "description": "تطبيق لتعلم اللغات يركز على المحادثات الواقعية والدروس القصيرة.",
    "url": "https://www.babbel.com/",
    "category": "lifestyle-education-research"
  },
  {
    "name": "Busuu",
    "description": "منصة لتعلم اللغات مع مجتمع من الناطقين الأصليين للتمرين.",
    "url": "https://www.busuu.com/",
    "category": "lifestyle-education-research"
  },
  {
    "name": "Codecademy",
    "description": "منصة تفاعلية لتعلم البرمجة عبر الإنترنت في مجالات متعددة.",
    "url": "https://www.codecademy.com/",
    "category": "lifestyle-education-research"
  },
  {
    "name": "Connected Papers",
    "description": "أداة لتصور وتحليل الشبكات البحثية والعثور على الأوراق ذات الصلة بطريقة مرئية.",
    "url": "https://www.connectedpapers.com",
    "category": "lifestyle-education-research"
  },
  {
    "name": "Consensus",
    "description": "محرك بحث يستخدم الذكاء الاصطناعي لاستخلاص النتائج والإجابات من الأبحاث العلمية.",
    "url": "https://consensus.app",
    "category": "lifestyle-education-research"
  },
  {
    "name": "Coursera",
    "description": "منصة توفر دورات وشهادات وبرامج دراسية من جامعات ومؤسسات عالمية.",
    "url": "https://www.coursera.org",
    "category": "lifestyle-education-research"
  },
  {
    "name": "Duolingo",
    "description": "تطبيق شهير ومجاني لتعلم اللغات بطريقة ممتعة تشبه الألعاب.",
    "url": "https://www.duolingo.com",
    "category": "lifestyle-education-research"
  },
  {
    "name": "Education Copilot",
    "description": "أداة لمساعدة المعلمين في إنشاء خطط الدروس والمواد التعليمية باستخدام الذكاء الاصطناعي.",
    "url": "https://educationcopilot.com",
    "category": "lifestyle-education-research"
  },
  {
    "name": "edX",
    "description": "منصة تعلم عبر الإنترنت تقدم دورات على مستوى جامعي من جامعات مرموقة.",
    "url": "https://www.edx.org",
    "category": "lifestyle-education-research"
  },
  {
    "name": "Elicit",
    "description": "مساعد بحثي يستخدم نماذج اللغة لأتمتة مهام البحث مثل تلخيص الأوراق واستخراج البيانات.",
    "url": "https://elicit.org",
    "category": "lifestyle-education-research"
  },
  {
    "name": "Google Scholar",
    "description": "محرك بحث أكاديمي شامل للبحث في الأوراق والأدبيات العلمية والرسائل الجامعية.",
    "url": "https://scholar.google.com",
    "category": "lifestyle-education-research"
  },
  {
    "name": "Gradescope",
    "description": "أداة تساعد المعلمين في تصحيح وتقييم الواجبات والاختبارات بسرعة وكفاءة.",
    "url": "https://www.gradescope.com",
    "category": "lifestyle-education-research"
  },
  {
    "name": "Iris.ai",
    "description": "مجموعة أدوات للباحثين تقوم بتلخيص الأوراق العلمية واستخراج البيانات وتصنيفها.",
    "url": "https://iris.ai",
    "category": "lifestyle-education-research"
  },
  {
    "name": "Khan Academy",
    "description": "منظمة غير ربحية تقدم تعليمًا مجانيًا وعالي الجودة عبر الإنترنت في مختلف المواد.",
    "url": "https://www.khanacademy.org",
    "category": "lifestyle-education-research"
  },
  {
    "name": "Khanmigo",
    "description": "مساعد تعليمي مدعوم بالذكاء الاصطناعي من أكاديمية خان للطلاب والمعلمين.",
    "url": "https://www.khanacademy.org/khan-labs",
    "category": "lifestyle-education-research"
  },
  {
    "name": "MasterClass",
    "description": "منصة توفر دروسًا وفصولاً عبر الإنترنت من خبراء ومشاهير في مختلف المجالات.",
    "url": "https://www.masterclass.com",
    "category": "lifestyle-education-research"
  },
  {
    "name": "Mendeley",
    "description": "منصة لإدارة المراجع والأوراق البحثية، وقراءتها، والتعاون في الأبحاث.",
    "url": "https://www.mendeley.com",
    "category": "lifestyle-education-research"
  },
  {
    "name": "Quizlet",
    "description": "منصة تعليمية تستخدم الذكاء الاصطناعي لإنشاء بطاقات تعليمية واختبارات تفاعلية للمذاكرة.",
    "url": "https://quizlet.com",
    "category": "lifestyle-education-research"
  },
  {
    "name": "ResearchRabbit",
    "description": "أداة لاستكشاف الأوراق البحثية والمؤلفين وربطهم بطريقة مرئية وتفاعلية.",
    "url": "https://www.researchrabbit.ai",
    "category": "lifestyle-education-research"
  },
  {
    "name": "Sana",
    "description": "منصة تعلم وتطوير مدعومة بالذكاء الاصطناعي مصممة للشركات لزيادة معرفة وأداء الموظفين.",
    "url": "https://www.sanalabs.com/",
    "category": "lifestyle-education-research"
  },
  {
    "name": "Scite",
    "description": "أداة تساعد الباحثين على اكتشاف وتقييم المقالات العلمية من خلال تتبع الاستشهادات.",
    "url": "https://scite.ai",
    "category": "lifestyle-education-research"
  },
  {
    "name": "Socratic by Google",
    "description": "تطبيق يساعد الطلاب على فهم المواد الدراسية من خلال شرح المفاهيم وحل المسائل.",
    "url": "https://socratic.org",
    "category": "lifestyle-education-research"
  },
  {
    "name": "Udacity",
    "description": "منصة تعليمية عبر الإنترنت تركز على المهارات التقنية المطلوبة في سوق العمل.",
    "url": "https://www.udacity.com/",
    "category": "lifestyle-education-research"
  },
  {
    "name": "Udemy",
    "description": "سوق تعليمي عبر الإنترنت يضم آلاف الدورات في مجالات متنوعة.",
    "url": "https://www.udemy.com/",
    "category": "lifestyle-education-research"
  },
  {
    "name": "Zotero",
    "description": "أداة مجانية ومفتوحة المصدر لإدارة المراجع والأدلة البحثية وتنظيمها.",
    "url": "https://www.zotero.org",
    "category": "lifestyle-education-research"
  },
  {
    "name": "Gamma",
    "description": "منصة لإنشاء العروض التقديمية والمستندات وصفحات الويب من خلال النصوص والأوامر البسيطة مع دعم الذكاء الاصطناعي.",
    "url": "https://gamma.app",
    "category": "business-productivity-office",
    "tags": ["presentations", "documents", "ai-generation", "productivity"]
  },
  {
    "name": "Humata",
    "description": "مساعد بحثي ذكي يساعدك في فهم وتحليل ملفات PDF الكبيرة والمستندات البحثية بسرعة.",
    "url": "https://www.humata.ai",
    "category": "lifestyle-education-research",
    "tags": ["research-assistant", "pdf-analysis", "document-understanding", "academic"]
  },
  {
    "name": "Ada",
    "description": "تطبيق لفحص الأعراض الصحية وتقديم معلومات أولية وتوجيهات بناءً على الذكاء الاصطناعي.",
    "url": "https://ada.com",
    "category": "lifestyle-health-wellness"
  },
  {
    "name": "Adidas Training (Runtastic)",
    "description": "تطبيق يخطط لبرامج تمارين رياضية مخصصة بناءً على أهدافك ومستواك البدني.",
    "url": "https://www.adidas-training.com",
    "category": "lifestyle-health-wellness"
  },
  {
    "name": "BioBase",
    "description": "منصة لتحليل بياناتك الصحية من مصادر مختلفة وتقديم توصيات مخصصة لأسلوب الحياة.",
    "url": "https://biobase.ai",
    "category": "lifestyle-health-wellness"
  },
  {
    "name": "Butterfly iQ",
    "description": "جهاز تصوير طبي محمول (موجات فوق صوتية) يوفر صورًا طبية فورية بجودة عالية على الهاتف.",
    "url": "https://www.butterflynetwork.com",
    "category": "lifestyle-health-wellness"
  },
  {
    "name": "Calm",
    "description": "تطبيق للتأمل والنوم والاسترخاء، مع محتوى هادئ ومهدئ لتحسين الصحة النفسية.",
    "url": "https://www.calm.com",
    "category": "lifestyle-health-wellness"
  },
  {
    "name": "Cogito",
    "description": "يحلل النبرة والمشاعر في المحادثات الهاتفية لتقديم إرشادات لموظفي خدمة العملاء في الوقت الفعلي.",
    "url": "https://www.cogito.com",
    "category": "lifestyle-health-wellness"
  },
  {
    "name": "Fitbod",
    "description": "تطبيق لإنشاء خطط تمارين رياضية مخصصة تتكيف مع أدائك وقدراتك.",
    "url": "https://www.fitbod.me",
    "category": "lifestyle-health-wellness"
  },
  {
    "name": "Headspace",
    "description": "تطبيق للتأمل والنوم يساعد على تحسين الصحة النفسية والتركيز من خلال جلسات موجهة.",
    "url": "https://www.headspace.com",
    "category": "lifestyle-health-wellness"
  },
  {
    "name": "Mindstrong",
    "description": "تطبيق لمراقبة الصحة العقلية من خلال تحليل تفاعلك مع لوحة مفاتيح الهاتف (تم إيقافه).",
    "url": "https://mindstrong.com",
    "category": "lifestyle-health-wellness"
  },
  {
    "name": "MyFitnessPal",
    "description": "تطبيق لتتبع السعرات الحرارية والتمارين والنشاط البدني لتحقيق أهداف اللياقة البدنية.",
    "url": "https://www.myfitnesspal.com",
    "category": "lifestyle-health-wellness"
  },
  {
    "name": "Nutritionix",
    "description": "أكبر قاعدة بيانات معتمدة للمعلومات الغذائية في العالم، مع واجهة برمجة تطبيقات قوية.",
    "url": "https://www.nutritionix.com/",
    "category": "lifestyle-health-wellness"
  },
  {
    "name": "Oura Ring",
    "description": "خاتم ذكي لتتبع النوم والنشاط ومؤشرات الصحة العامة بدقة عالية.",
    "url": "https://ouraring.com",
    "category": "lifestyle-health-wellness"
  },
  {
    "name": "Petcube",
    "description": "كاميرات ذكية للحيوانات الأليفة تتيح لك مراقبتهم والتفاعل معهم عن بعد.",
    "url": "https://www.petcube.com",
    "category": "lifestyle-health-wellness"
  },
  {
    "name": "Plantix",
    "description": "يساعد المزارعين في تشخيص أمراض النباتات ونقص المغذيات، ويقدم نصائح للعلاج.",
    "url": "https://www.plantix.net",
    "category": "lifestyle-health-wellness"
  },
  {
    "name": "Sleep Cycle",
    "description": "متتبع نوم ذكي يحلل أنماط نومك ويوقظك في أخف مرحلة نوم لتحسين جودة الاستيقاظ.",
    "url": "https://www.sleepcycle.com",
    "category": "lifestyle-health-wellness"
  },
  {
    "name": "SuperCook",
    "description": "يولد وصفات طبخ بناءً على المكونات المتوفرة لديك في المنزل لتقليل هدر الطعام.",
    "url": "https://www.supercook.com",
    "category": "lifestyle-health-wellness"
  },
  {
    "name": "Tempdrop",
    "description": "جهاز استشعار قابل للارتداء لتتبع الخصوبة ودورة الطمث بدقة باستخدام الذكاء الاصطناعي.",
    "url": "https://tempdrop.com",
    "category": "lifestyle-health-wellness"
  },
  {
    "name": "Ultrahuman",
    "description": "منصة لتتبع وتحليل البيانات الحيوية مثل مستوى الجلوكوز والنوم لتحسين الأيض.",
    "url": "https://www.ultrahuman.com",
    "category": "lifestyle-health-wellness"
  },
  {
    "name": "Whoop",
    "description": "سوار وجهاز تتبع يقدم تحليلات معمقة حول النوم، والإجهاد، والتعافي لمساعدة الرياضيين.",
    "url": "https://www.whoop.com",
    "category": "lifestyle-health-wellness"
  },
  {
    "name": "Woebot Health",
    "description": "روبوت محادثة مصمم لتقديم الدعم في مجال الصحة العقلية باستخدام مبادئ العلاج السلوكي المعرفي.",
    "url": "https://www.woebothealth.com",
    "category": "lifestyle-health-wellness"
  },
  {
    "name": "Adobe Express",
    "description": "مجموعة أدوات تصميم سريعة وسهلة من Adobe لإنشاء المحتوى للشبكات الاجتماعية والمزيد.",
    "url": "https://express.adobe.com",
    "category": "industry-design-engineering"
  },
  {
    "name": "AI 3D Model Generator",
    "description": "يخلق نماذج ثلاثية الأبعاد من النصوص أو الصور.",
    "url": "https://www.kaedim3d.com",
    "category": "industry-design-engineering"
  },
  {
    "name": "AI Animation Creator",
    "description": "يخلق رسومًا متحركة تلقائيًا من النصوص أو الصور.",
    "url": "https://www.runwayml.com",
    "category": "industry-design-engineering"
  },
  {
    "name": "AI Architect",
    "description": "يصمم مخططات ونماذج معمارية ثلاثية الأبعاد (الآن جزء من Autodesk Forma).",
    "url": "https://www.autodesk.com/products/forma/overview",
    "category": "industry-design-engineering"
  },
  {
    "name": "AI Color Palette Generator",
    "description": "يخلق مجموعات ألوان متناسقة وجميلة لتصميمك بنقرة واحدة.",
    "url": "https://www.coolors.co",
    "category": "industry-design-engineering"
  },
  {
    "name": "AI Font Matcher",
    "description": "أداة للتعرف على الخطوط في الصور واقتراح خطوط مماثلة.",
    "url": "https://www.fontsquirrel.com/matcherator",
    "category": "industry-design-engineering"
  },
  {
    "name": "AI Game Character Designer",
    "description": "يصمم شخصيات ألعاب فريدة وقابلة للتخصيص.",
    "url": "https://www.character.ai",
    "category": "industry-design-engineering"
  },
  {
    "name": "AI Game Developer",
    "description": "يساعد في تطوير الألعاب بإنشاء العناصر والمستويات.",
    "url": "https://www.inworld.ai",
    "category": "industry-design-engineering"
  },
  {
    "name": "AI Interior Designer",
    "description": "يساعد في تصميم وتخطيط الديكورات الداخلية للمنازل والمكاتب.",
    "url": "https://www.planner5d.com",
    "category": "industry-design-engineering"
  },
  {
    "name": "AI Logo Generator",
    "description": "يولد شعارات فريدة واحترافية وهوية بصرية كاملة لعلامتك التجارية.",
    "url": "https://www.looka.com",
    "category": "industry-design-engineering"
  },
  {
    "name": "AI UX/UI Designer",
    "description": "أدوات ذكاء اصطناعي مدمجة في Figma للمساعدة في تصميم واجهات المستخدم.",
    "url": "https://www.figma.com/ai/",
    "category": "industry-design-engineering"
  },
  {
    "name": "AutoDraw",
    "description": "أداة رسم من جوجل تحول رسوماتك البسيطة إلى أيقونات ورسومات احترافية.",
    "url": "https://autodraw.com",
    "category": "industry-design-engineering"
  },
  {
    "name": "Brandmark",
    "description": "أداة لتصميم الشعارات الاحترافية وتصميمات الهوية البصرية.",
    "url": "https://brandmark.io/",
    "category": "industry-design-engineering"
  },
  {
    "name": "Canva",
    "description": "منصة تصميم بسيطة وسهلة الاستخدام لجميع أنواع التصاميم المرئية.",
    "url": "https://www.canva.com",
    "category": "industry-design-engineering"
  },
  {
    "name": "DeepMotion",
    "description": "منصة لتحويل مقاطع الفيديو إلى رسوم متحركة ثلاثية الأبعاد باستخدام تقنية التقاط الحركة.",
    "url": "https://www.deepmotion.com",
    "category": "industry-design-engineering"
  },
  {
    "name": "Designs.ai",
    "description": "مجموعة أدوات تصميم متكاملة لإنشاء الشعارات، الفيديوهات، والنماذج بالأوامر النصية.",
    "url": "https://designs.ai",
    "category": "industry-design-engineering"
  },
  {
    "name": "Durable",
    "description": "منشئ مواقع ويب ينشئ موقعًا كاملاً مع الصور والنصوص في 30 ثانية.",
    "url": "https://durable.co/",
    "category": "industry-design-engineering"
  },
  {
    "name": "Framer AI",
    "description": "أداة لبناء ونشر مواقع ويب احترافية وتفاعلية باستخدام الذكاء الاصطناعي.",
    "url": "https://www.framer.com/ai",
    "category": "industry-design-engineering"
  },
  {
    "name": "Get3D by NVIDIA",
    "description": "نموذج من NVIDIA لتوليد شخصيات وكائنات ثلاثية الأبعاد عالية الجودة.",
    "url": "https://nv-tlabs.github.io/get3d/",
    "category": "industry-design-engineering"
  },
  {
    "name": "Inworld AI",
    "description": "منصة لإنشاء شخصيات غير قابلة للعب (NPCs) ذكية وواقعية للألعاب والتجارب التفاعلية.",
    "url": "https://inworld.ai",
    "category": "industry-design-engineering"
  },
  {
    "name": "Khroma",
    "description": "أداة تساعد المصممين على اكتشاف وتوليد مجموعات ألوان فريدة بناءً على تفضيلاتهم.",
    "url": "https://www.khroma.co",
    "category": "industry-design-engineering"
  },
  {
    "name": "Kinetix",
    "description": "منصة لإنشاء رسوم متحركة للشخصيات ثلاثية الأبعاد بسهولة من خلال الفيديو أو النص.",
    "url": "https://www.kinetix.tech",
    "category": "industry-design-engineering"
  },
  {
    "name": "Looka",
    "description": "أداة لإنشاء الشعارات وتصميم هوية العلامة التجارية الكاملة.",
    "url": "https://looka.com",
    "category": "industry-design-engineering"
  },
  {
    "name": "Luma AI",
    "description": "أداة لإنشاء نماذج ومشاهد ثلاثية الأبعاد واقعية (NeRFs) من خلال تصوير الفيديو بالهاتف.",
    "url": "https://lumalabs.ai",
    "category": "industry-design-engineering"
  },
  {
    "name": "MakeReal",
    "description": "أداة لتحويل الرسومات على السبورة البيضاء إلى كود برمجي أو تصميم واجهة مستخدم عاملة.",
    "url": "https://makereal.tldraw.com",
    "category": "industry-design-engineering"
  },
  {
    "name": "Masterpiece Studio",
    "description": "مجموعة أدوات متكاملة لإنشاء وتحرير نماذج ثلاثية الأبعاد باستخدام الذكاء الاصطناعي والواقع الافتراضي (VR).",
    "url": "https://masterpiecestudio.com",
    "category": "industry-design-engineering"
  },
  {
    "name": "Meshy",
    "description": "منصة لتحويل النصوص والصور ثنائية الأبعاد إلى نماذج وخامات (textures) ثلاثية الأبعاد.",
    "url": "https://www.meshy.ai",
    "category": "industry-design-engineering"
  },
  {
    "name": "Microsoft Designer",
    "description": "أداة تصميم جرافيك مدعومة بالذكاء الاصطناعي من مايكروسوفت لإنشاء تصاميم بسرعة.",
    "url": "https://designer.microsoft.com",
    "category": "industry-design-engineering"
  },
  {
    "name": "Move.ai",
    "description": "تقنية لالتقاط الحركة باستخدام كاميرات متعددة (multi-cam) لتحويل الحركات الواقعية إلى رسوم متحركة.",
    "url": "https://www.move.ai",
    "category": "industry-design-engineering"
  },
  {
    "name": "Piktochart",
    "description": "أداة لإنشاء الرسوم البيانية (الإنفوجرافيك) والتقارير والعروض التقديمية.",
    "url": "https://piktochart.com",
    "category": "industry-design-engineering"
  },
  {
    "name": "Plask",
    "description": "أداة تحريك (animation) مدعومة بالذكاء الاصطناعي لتحويل مقاطع الفيديو إلى رسوم متحركة ثلاثية الأبعاد.",
    "url": "https://plask.ai",
    "category": "industry-design-engineering"
  },
  {
    "name": "Ponzu",
    "description": "أداة لإنشاء خامات (Textures) ثلاثية الأبعاد فريدة ومتسقة من خلال الأوصاف النصية.",
    "url": "https://www.ponzu.gg",
    "category": "industry-design-engineering"
  },
  {
    "name": "Promethean AI",
    "description": "مساعد ذكاء اصطناعي للمطورين والفنانين يساعد في بناء وتصميم عوالم افتراضية.",
    "url": "https://www.prometheanai.com",
    "category": "industry-design-engineering"
  },
  {
    "name": "Rokoko",
    "description": "حلول متقدمة لالتقاط الحركة (بدلات وحساسات) وإنشاء رسوم متحركة احترافية للشخصيات.",
    "url": "https://www.rokoko.com",
    "category": "industry-design-engineering"
  },
  {
    "name": "Scenario",
    "description": "أداة لإنشاء أصول فنية (Assets) متسقة للألعاب باستخدام الذكاء الاصطناعي.",
    "url": "https://www.scenario.com",
    "category": "industry-design-engineering"
  },
  {
    "name": "Sloyd",
    "description": "منصة لتوليد نماذج ثلاثية الأبعاد قابلة للتخصيص بسرعة للمطورين والمصممين.",
    "url": "https://sloyd.ai",
    "category": "industry-design-engineering"
  },
  {
    "name": "Spline",
    "description": "أداة تصميم ثلاثية الأبعاد تفاعلية وتعاونية تعمل مباشرة في المتصفح.",
    "url": "https://spline.design/",
    "category": "industry-design-engineering"
  },
  {
    "name": "Uizard",
    "description": "أداة لتصميم واجهات المستخدم والنماذج الأولية بسهولة من خلال الأوصاف النصية أو الرسومات.",
    "url": "https://uizard.io",
    "category": "industry-design-engineering"
  },
  {
    "name": "Vizcom",
    "description": "أداة تحول رسوماتك الأولية (Sketches) إلى تصاميم ورسومات مذهلة بسرعة.",
    "url": "https://www.vizcom.ai/",
    "category": "industry-design-engineering"
  },
  {
    "name": "Wix ADI",
    "description": "أداة من Wix تقوم بتصميم موقع ويب لك تلقائيًا بناءً على إجاباتك على بعض الأسئلة.",
    "url": "https://www.wix.com/adi",
    "category": "industry-design-engineering"
  },
  {
    "name": "Zeplin",
    "description": "أداة لتسهيل التعاون بين المصممين والمطورين وتسليم التصاميم والمواصفات.",
    "url": "https://zeplin.io",
    "category": "industry-design-engineering"
  },
  {
    "name": "Atomwise",
    "description": "تستخدم الشبكات العصبية العميقة لتحليل الجزيئات وتوقع فعاليتها كأدوية محتملة.",
    "url": "https://www.atomwise.com",
    "category": "industry-science-medicine"
  },
  {
    "name": "Babylon Health",
    "description": "مساعد طبي رقمي يساعد في فحص الأعراض وتقديم استشارات طبية عن بعد.",
    "url": "https://www.babylonhealth.com",
    "category": "industry-science-medicine"
  },
  {
    "name": "ClimateAI",
    "description": "منصة توفر تحليلات ونماذج حول تغير المناخ وتأثيراته على الأعمال، خاصة في قطاع الزراعة.",
    "url": "https://climate.ai",
    "category": "industry-science-medicine"
  },
  {
    "name": "Illumina",
    "description": "شركة رائدة في تطوير وتصنيع أنظمة تحليل البيانات الجينومية وتسلسل الحمض النووي.",
    "url": "https://www.illumina.com",
    "category": "industry-science-medicine"
  },
  {
    "name": "Insilico Medicine",
    "description": "منصة تستخدم الذكاء الاصطناعي لتسريع عملية اكتشاف وتطوير الأدوية الجديدة.",
    "url": "https://insilico.com/",
    "category": "industry-science-medicine"
  },
  {
    "name": "Sphera",
    "description": "برامج لإدارة الأداء والاستدامة البيئية وتقييم المخاطر للمؤسسات الصناعية.",
    "url": "https://sphera.com/",
    "category": "industry-science-medicine"
  },
  {
    "name": "Viz.ai",
    "description": "منصة تستخدم الذكاء الاصطناعي لتحليل الصور الطبية وتنسيق الرعاية في الحالات الحرجة مثل السكتات الدماغية.",
    "url": "https://www.viz.ai",
    "category": "industry-science-medicine"
  },
  {
    "name": "WILDLABS",
    "description": "مجتمع عالمي يجمع بين خبراء الحفاظ على البيئة والتكنولوجيا لتطوير حلول لحماية الحياة البرية.",
    "url": "https://www.wildlabs.net",
    "category": "industry-science-medicine"
  },
  {
    "name": "3Commas",
    "description": "منصة لإدارة التداولات الآلية في العملات المشفرة مع أدوات تحليلية وروبوتات تداول.",
    "url": "https://3commas.io",
    "category": "industry-finance-real-estate"
  },
  {
    "name": "Alpaca",
    "description": "منصة تداول تتيح للمطورين بناء واختبار ونشر خوارزميات تداول آلية عبر واجهة برمجية (API).",
    "url": "https://alpaca.markets",
    "category": "industry-finance-real-estate"
  },
  {
    "name": "Bloomberg Terminal",
    "description": "منصة مالية شاملة لتحليل البيانات والأخبار والتداول في الأسواق العالمية، يستخدمها المحترفون.",
    "url": "https://www.bloomberg.com/professional/solution/bloomberg-terminal/",
    "category": "industry-finance-real-estate"
  },
  {
    "name": "Cindicator",
    "description": "منصة تجمع بين الذكاء البشري والاصطناعي لإنشاء مؤشرات وتوقعات للأسواق المالية والعملات المشفرة.",
    "url": "https://cindicator.com",
    "category": "industry-finance-real-estate"
  },
  {
    "name": "Coinrule",
    "description": "منصة لبناء روبوتات تداول للعملات المشفرة بدون الحاجة لبرمجة، تدعم العديد من البورصات.",
    "url": "https://coinrule.com",
    "category": "industry-finance-real-estate"
  },
  {
    "name": "eToro",
    "description": "منصة تداول اجتماعي تتيح لك متابعة ونسخ تداولات المستثمرين الخبراء تلقائيًا.",
    "url": "https://www.etoro.com",
    "category": "industry-finance-real-estate"
  },
  {
    "name": "Finary",
    "description": "أداة لتتبع جميع أصولك الاستثمارية (أسهم، عملات مشفرة، عقارات) في لوحة تحكم واحدة.",
    "url": "https://finary.com",
    "category": "industry-finance-real-estate"
  },
  {
    "name": "Kavout",
    "description": "منصة تستخدم الذكاء الاصطناعي لتحليل الأسهم وتقديم توصيات استثمارية بناءً على أنماط البيانات.",
    "url": "https://www.kavout.com",
    "category": "industry-finance-real-estate"
  },
  {
    "name": "Magnifi",
    "description": "مساعد استثماري ذكي يساعدك في العثور على فرص استثمارية وإدارة محفظتك عبر محادثة نصية.",
    "url": "https://magnifi.com",
    "category": "industry-finance-real-estate"
  },
  {
    "name": "Morningstar",
    "description": "شركة رائدة في تقديم أبحاث وتحليلات استثمارية مستقلة للأسهم والصناديق.",
    "url": "https://www.morningstar.com",
    "category": "industry-finance-real-estate"
  },
  {
    "name": "Robinhood",
    "description": "تطبيق للاستثمار في الأسهم والخيارات والعملات المشفرة بدون عمولات تداول.",
    "url": "https://robinhood.com",
    "category": "industry-finance-real-estate"
  },
  {
    "name": "Tickeron",
    "description": "مجموعة أدوات تحليل مالي وروبوتات ذكاء اصطناعي لتقديم توصيات تداول للأسهم والعملات.",
    "url": "https://tickeron.com",
    "category": "industry-finance-real-estate"
  },
  {
    "name": "Toggle.ai",
    "description": "مساعد ذكي للمستثمرين يقدم رؤى وتحليلات للبيانات المالية والأخبار لتوجيه قرارات الاستثمار.",
    "url": "https://toggle.ai",
    "category": "industry-finance-real-estate"
  },
  {
    "name": "Trade Ideas",
    "description": "ماسح أسهم يستخدم الذكاء الاصطناعي (Holly AI) لتحديد فرص التداول في الوقت الفعلي.",
    "url": "https://www.trade-ideas.com",
    "category": "industry-finance-real-estate"
  },
  {
    "name": "Wealthfront",
    "description": "مستشار استثماري آلي (Robo-advisor) يوفر خدمات التخطيط المالي والاستثمار المؤتمت.",
    "url": "https://www.wealthfront.com",
    "category": "industry-finance-real-estate"
  },
  {
    "name": "Zoya",
    "description": "أداة تساعد المستثمرين المسلمين على التأكد من توافق الأسهم مع الشريعة الإسلامية (حلال).",
    "url": "https://zoya.finance",
    "category": "industry-finance-real-estate"
  }
];
