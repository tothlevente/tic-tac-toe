import Logo from "./Logo";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Logo />
        <h1>Tic-tac-toe</h1>
      </div>
    </header>
  );
}
