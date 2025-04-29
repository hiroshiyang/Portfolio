
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid grid-cols-3 min-h-screen bg-white text-gray-800 px-4">
      {/* 左侧文字 */}
      <div className="flex items-center justify-end pr-6">
        <p className="text-sm md:text-base font-light leading-snug text-right">
          Thank you for<br />stumbling upon my world.
        </p>
      </div>

      {/* 中间图像 */}
      <div className="flex items-center justify-center">
        <img
          src="/Group1.jpg"
          alt="Artwork"
          className="max-h-[80vh] object-contain"
        />
      </div>

      {/* 右侧链接 */}
      <div className="flex items-end justify-start pl-6 pb-16">
        <Link
          href="/art"
          className="text-blue-600 text-sm underline hover:text-blue-400 flex items-center gap-1"
        >
          Enter <span className="text-xl">➛</span>
        </Link>
      </div>
    </main>
  );
}
