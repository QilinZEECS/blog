import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-2xl items-baseline justify-between px-6 py-6">
        <Link
          href="/"
          className="text-xl font-semibold text-foreground no-underline hover:no-underline"
        >
          Qilin&apos;s Blog
        </Link>
        <nav className="text-sm">
          <Link
            href="/"
            className="text-muted-foreground no-underline hover:text-foreground hover:no-underline"
          >
            首页
          </Link>
        </nav>
      </div>
    </header>
  );
}
