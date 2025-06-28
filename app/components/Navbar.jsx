const Navbar = () => {
  return (
    <header className="bg-black text-white py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4">
        <img src="/lucrum.png" alt="Lucrum Launch Logo" className="w-32" />
        <p className="text-xl sm:text-2xl font-bold tracking-wide">
          Lucrum Launch
        </p>
      </div>
    </header>
  );
};

export default Navbar;
