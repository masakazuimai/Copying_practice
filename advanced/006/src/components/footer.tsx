export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xl font-bold">
            CTA<span className="text-cta">Pro</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              会社概要
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              利用規約
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              プライバシーポリシー
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              お問い合わせ
            </a>
          </nav>

          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CodeQuest.work. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
