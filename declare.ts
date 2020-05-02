interface Option {
    id: number; // 选项id
    questionId: number; // 所属问题 id
    content: string; // 选项内容
}

interface Question {
    id: number; // 题目 id
    type: number; // 题目类型：1 单选、2 多选、3 简答
    title: string; // 题目说明
    options: Option[]; // 选项列表
}

interface Paper {
    id: number; // 问卷唯一标示
    userId: number; // 所属用户
    title: string; // 标题
    description: string; // 说明
    start_time: Date; // 开始发放时间
    end_time: Date; // 
    status: boolean; // 状态：1 编辑中、2 已发放、3 停止回收
    written: number; // 填写量
    visited: number; // 访问量
}

interface UserInfo {
    id: number;
    name: number;
    password: string;
}

interface UserParam {
    name: string;
    password: string;
}