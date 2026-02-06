// src/app/blog/page.tsx
import { posts } from "@/data/posts"; // 导入刚才的数据

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4">生活 & 随笔</h1>
        <p className="text-gray-600">这里没有硬核的 Paper，只有碎碎念和生活的切片。</p>
      </div>

      {/* 列表区域 */}
      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.id} className="p-6 border border-gray-100 rounded-xl hover:shadow-md transition bg-white">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
              <span>{post.date}</span>
              <span className="px-2 py-0.5 bg-gray-100 rounded-full text-xs text-gray-700">
                {post.category}
              </span>
            </div>
            <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 cursor-pointer">
              {post.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {post.summary}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}