"use client";

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote";

interface MDXContentProps {
  source: MDXRemoteSerializeResult;
}

const components = {
  // Custom components can be added here
  // Example: CustomImage, CodeBlock, etc.
};

export function MDXContent({ source }: MDXContentProps) {
  return <MDXRemote {...source} components={components} />;
}
