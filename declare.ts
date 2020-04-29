interface Question {
    type: number; // 题目类型
    title: string; // 题目说明
    options: string[]; // 选项列表
}

interface Paper {
    paper_id: number; // 问卷唯一标示
    title: string; // 标题
    description: string; // 说明
    status: boolean; // 状态：0 失效，1 有效
    start_time: Date;
    end_time: Date;
}

interface UserInfo {
    id: number;
    name: number;
}

interface UserParam {
    name: string;
    password: string;
}