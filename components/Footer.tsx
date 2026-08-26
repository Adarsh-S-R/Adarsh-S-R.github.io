export function Footer() {
  return (
    <footer className="w-full border-t border-border py-8">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-6 text-[13px] text-foreground-muted sm:px-8">
        <p>&copy; {new Date().getFullYear()} Adarsh SR &middot; adarsh.triada.in</p>
      </div>
    </footer>
  );
}
