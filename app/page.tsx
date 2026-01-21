import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <section>
        <h1 className="text-4xl font-bold tracking-tight">My Tech Blog</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Welcome to my personal tech blog where I share my thoughts on
          software development, technology, and more.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold tracking-tight">Recent Posts</h2>
        <div className="mt-8 space-y-10">
          {posts.length === 0 ? (
            <p className="text-muted-foreground">No posts yet.</p>
          ) : (
            posts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/posts/${post.slug}`} className="block">
                  <h3 className="text-xl font-medium group-hover:underline">
                    {post.title}
                  </h3>
                  <time className="mt-1 block text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  {post.description && (
                    <p className="mt-2 text-muted-foreground line-clamp-2">
                      {post.description}
                    </p>
                  )}
                </Link>
              </article>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
