import logo from "../assets/logo.svg";

export default function NavBar() {
  return (
    <nav className="flex items-center mx-8 mt-4">
      <img className="mr-auto" width={60} src={logo} alt="Liyab Logo" />
      <div className="mr-auto text-4xl ">
        <h1 className="text-liyab-hot-red">Liyab</h1>
      </div>
    </nav>
  );
}
