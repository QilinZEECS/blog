import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { type Post, type PostMeta } from "@/types";

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title ?? "Untitled",
    date: data.date ?? new Date().toISOString(),
    description: data.description,
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  const slugs = getPostSlugs();

  const posts: PostMeta[] = [];

  for (const slug of slugs) {
    const post = getPostBySlug(slug);
    if (post) {
      posts.push({
        slug: post.slug,
        title: post.title,
        date: post.date,
        description: post.description,
      });
    }
  }

  return posts.sort((a, b) =>
    new Date(a.date) > new Date(b.date) ? -1 : 1
  );
}
