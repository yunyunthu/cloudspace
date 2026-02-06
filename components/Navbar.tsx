import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-8 flex justify-between items-center bg-white border-b border-gray-100 sticky top-0 backdrop-blur-sm z-50">
      {/* 左侧：Logo 或 名字 */}
      <div className="text-xl font-bold tracking-tighter">
        <Link href="/">CloudSpace</Link>
      </div>

      {/* 右侧：链接 */}
      <div className="flex gap-6 text-sm font-medium text-gray-600">
        <Link href="/" className="hover:text-black transition">Home</Link>
        <Link href="/blog" className="hover:text-black transition">Life & Blog</Link> {/* 新增这行 */}
        <Link href="/projects" className="hover:text-black transition">Projects</Link>
        <Link href="/about" className="hover:text-black transition">About</Link>
        <a 
          href="https://github.com/yunyunthu" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}