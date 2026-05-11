import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      {posts.length === 0 ? (
        <p className="text-muted-foreground">暂无文章。</p>
      ) : (
        <ul className="space-y-12">
          {posts.map((post) => (
            <li key={post.slug}>
              <article>
                <h2 className="mb-2 text-2xl font-semibold leading-snug">
                  <Link
                    href={`/posts/${post.slug}`}
                    className="text-foreground no-underline hover:underline"
                  >
                    {post.title}
                  </Link>
                </h2>
                <time className="block text-sm text-muted-foreground">
                  {new Date(post.date).toLocaleDateString("zh-CN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                {post.description && (
                  <p className="mt-3 text-foreground/85">{post.description}</p>
                )}
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
