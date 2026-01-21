import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold">My Tech Blog</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Welcome to my personal tech blog.
      </p>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Recent Posts</h2>
        <div className="mt-6 space-y-8">
          {posts.length === 0 ? (
            <p className="text-muted-foreground">No posts yet.</p>
          ) : (
            posts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/posts/${post.slug}`}>
                  <h3 className="text-xl font-medium group-hover:underline">
                    {post.title}
                  </h3>
                  <time className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  {post.description && (
                    <p className="mt-2 text-muted-foreground">
                      {post.description}
                    </p>
                  )}
                </Link>
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
