// src/data/posts.ts
export interface Post {
    id: string;
    title: string;
    date: string;
    category: "Life" | "Tech" | "Thought"; // 分类
    summary: string;
  }
  
  export const posts: Post[] = [
    {
      id: "1",
      title: "我的清华大二生活初体验",
      date: "2026-02-06",
      category: "Life",
      summary: "在这个寒冷的冬天，开始搭建我的个人主页，顺便记录一下最近的课程压力...",
    },
    {
      id: "2",
      title: "React 的设计哲学思考",
      date: "2026-02-05",
      category: "Tech",
      summary: "组件化不仅仅是 UI 的复用，更是一种关注点分离的工程思想。",
    },
    // 以后你想写新日记，就在这里加一个对象，网页会自动更新！
  ];