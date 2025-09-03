import devAiModelsTools from './tools/dev-ai-models.js';
import devAiInfraTools from './tools/dev-ai-infra.js';
import devCodeAssistantsTools from './tools/dev-code-assistants.js';
import devAppBuildersTools from './tools/dev-app-builders.js';
import devTestingReviewTools from './tools/dev-testing-review.js';
import devDataScienceTools from './tools/dev-data-science.js';
import devWebAutomationTools from './tools/dev-web-automation.js';
import contentWritingTools from './tools/content-writing.js';
import contentImagesArtTools from './tools/content-images-art.js';
import contentVideoAnimationTools from './tools/content-video-animation.js';
import contentAudioMusicTools from './tools/content-audio-music.js';
import businessProductivityOfficeTools from './tools/business-productivity-office.js';
import businessMarketingSalesTools from './tools/business-marketing-sales.js';
import businessOperationsTools from './tools/business-operations.js';
import lifestyleEducationResearchTools from './tools/lifestyle-education-research.js';
import lifestyleHealthWellnessTools from './tools/lifestyle-health-wellness.js';
import lifestyleDailyEntertainmentTools from './tools/lifestyle-daily-entertainment.js';
import industryDesignEngineeringTools from './tools/industry-design-engineering.js';
import industryScienceMedicineTools from './tools/industry-science-medicine.js';
import industryFinanceRealEstateTools from './tools/industry-finance-real-estate.js';
import industryWeb3BlockchainTools from './tools/industry-web3-blockchain.js';

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
    ...devAiModelsTools,
    ...devAiInfraTools,
    ...devCodeAssistantsTools,
    ...devAppBuildersTools,
    ...devTestingReviewTools,
    ...devDataScienceTools,
    ...devWebAutomationTools,
    ...contentWritingTools,
    ...contentImagesArtTools,
    ...contentVideoAnimationTools,
    ...contentAudioMusicTools,
    ...businessProductivityOfficeTools,
    ...businessMarketingSalesTools,
    ...businessOperationsTools,
    ...lifestyleEducationResearchTools,
    ...lifestyleHealthWellnessTools,
    ...lifestyleDailyEntertainmentTools,
    ...industryDesignEngineeringTools,
    ...industryScienceMedicineTools,
    ...industryFinanceRealEstateTools,
    ...industryWeb3BlockchainTools
];