
import type { QuizQuestion, Result } from './types';

export const QUESTIONS: QuizQuestion[] = [
    {
        id: 1,
        question: "早上通勤時，你最希望用什麼聲音陪你開始一天？",
        options: [
            { text: "有人慢慢說著故事", type: "A" },
            { text: "清楚、有內容的知識講解", type: "B" },
            { text: "輕鬆聊天、像同事閒聊", type: "C" },
            { text: "給自己一點鼓勵與打氣", type: "D" }
        ]
    },
    {
        id: 2,
        question: "下班後想放鬆，你最常選什麼方式？",
        options: [
            { text: "聽些能把心帶走的故事內容", type: "A" },
            { text: "補充新知、更新頭腦", type: "B" },
            { text: "聽別人分享生活經驗", type: "C" },
            { text: "找些溫柔的療癒語音陪你", type: "D" }
        ]
    },
    {
        id: 3,
        question: "如果今天壓力比較大，你會想聽：",
        options: [
            { text: "沉浸故事敘事讓情緒冷靜", type: "A" },
            { text: "有系統、有觀點的知識內容", type: "B" },
            { text: "有人跟你分享生活心情", type: "C" },
            { text: "能安撫心情的溫柔嗓音", type: "D" }
        ]
    },
    {
        id: 4,
        question: "旅行途中，你最想搭配什麼樣的 Podcast？",
        options: [
            { text: "有趣的故事陪你上路", type: "A" },
            { text: "長知識的內容，邊走邊學", type: "B" },
            { text: "像旅伴聊天般的聲音", type: "C" },
            { text: "溫暖、平靜的陪伴", type: "D" }
        ]
    },
    {
        id: 5,
        question: "你覺得 Podcast 最重要的魅力是什麼？",
        options: [
            { text: "精彩的敘事與節奏", type: "A" },
            { text: "學到新觀念與知識", type: "B" },
            { text: "有人陪你度過瑣碎時光", type: "C" },
            { text: "給心靈一點力量與安定", type: "D" }
        ]
    },
    {
        id: 6,
        question: "遇到生活困惑時，你會希望有人：",
        options: [
            { text: "用故事給你靈感", type: "A" },
            { text: "用資訊與觀點分享解方", type: "B" },
            { text: "像朋友般跟你閒聊", type: "C" },
            { text: "給你安慰與鼓勵", type: "D" }
        ]
    },
    {
        id: 7,
        question: "假日休息時，你最想聽：",
        options: [
            { text: "慢慢講述的生活故事", type: "A" },
            { text: "知識含量高但輕鬆吸收的內容", type: "B" },
            { text: "接地氣的日常分享", type: "C" },
            { text: "舒壓、療癒型內容", type: "D" }
        ]
    },
    {
        id: 8,
        question: "你最喜歡哪種節目主持風格？",
        options: [
            { text: "敘事強、有畫面感的", type: "A" },
            { text: "條理分明、有觀點的", type: "B" },
            { text: "自然、像聊天的", type: "C" },
            { text: "溫柔沉穩、給人力量的", type: "D" }
        ]
    },
    {
        id: 9,
        question: "如果要你推薦 Podcast 給朋友，你會選：",
        options: [
            { text: "有故事、聽了會回味的", type: "A" },
            { text: "專業又能學習的", type: "B" },
            { text: "輕鬆又貼近生活的", type: "C" },
            { text: "能讓人心情變好的", type: "D" }
        ]
    },
    {
        id: 10,
        question: "一天結束時，你最希望被什麼聲音收尾？",
        options: [
            { text: "陪你慢慢講述一段故事", type: "A" },
            { text: "聽點知識讓今天更完整", type: "B" },
            { text: "像家人般的日常陪伴", type: "C" },
            { text: "柔和、能讓心靜下來的聲音", type: "D" }
        ]
    }
];

export const RESULTS: Record<'A' | 'B' | 'C' | 'D', Result> = {
    A: {
        title: "故事陪伴系",
        podcasts: [
            { name: "閱讀推手", link: "https://podcasts.apple.com/tw/podcast/%E9%96%B1%E8%AE%80%E6%8E%A8%E6%89%8B/id1525854237" },
            { name: "那些老外教我的事", link: "https://open.firstory.me/user/lessonsfromlaowai/platforms" },
            { name: "影響力時間 HerStory", link: "https://open.firstory.me/user/977herstory/platforms" },
            { name: "教育不一樣", link: "https://open.firstory.me/user/fm977edu/platforms" }
        ]
    },
    B: {
        title: "知識成長系",
        podcasts: [
            { name: "呼吸狂想實驗室", link: "https://open.firstory.me/user/cmgolq7q2008701w85amo5gfr/platforms" },
            { name: "建築新樂園", link: "https://podcasts.apple.com/tw/podcast/%E5%BB%BA%E7%AF%89%E6%96%B0%E6%A8%82%E5%9C%92/id1549878612" },
            { name: "我的綠色方程式", link: "https://open.firstory.me/user/green-equation/platforms" }
        ]
    },
    C: {
        title: "生活感性系",
        podcasts: [
            { name: "台灣幸福進行曲", link: "https://open.firstory.me/user/ckdzbn30ja5870880tixg6ezx/platforms" },
            { name: "餐桌上的哲學家", link: "https://open.firstory.me/user/cm32e7le402xq01vc3rtidr6f/platforms" }
        ]
    },
    D: {
        title: "療癒勵志系",
        podcasts: [
            { name: "映心學堂", link: "https://open.firstory.me/user/cl1wuz8n9097v01w8c7p2hpfg/platforms" }
        ]
    }
};
