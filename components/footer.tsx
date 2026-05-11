export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-2xl px-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Qilin
      </div>
    </footer>
  );
}
