export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 mt-auto py-6 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-neutral-500 text-sm">
          <p>© 2026 SpawnUtil — not affiliated with Valve or CS2.</p>
        </div>
        <a
          href="https://github.com/SulamiWizard/instadb"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-500 hover:text-white text-sm transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
