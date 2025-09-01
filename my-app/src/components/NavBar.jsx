const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 md:p-9 p-3 flex items-center justify-between w-full">
      <img src="/images/nav-logo.svg" alt="nav-logo" className="md:w-24 w-20" />
      {/* Menu Icon */}
      <button className="right-20 top-0md:hidden block p-2" aria-label="Open menu">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="5" width="24" height="2" rx="1" fill="currentColor" />
          <rect y="11" width="24" height="2" rx="1" fill="currentColor" />
          <rect y="17" width="24" height="2" rx="1" fill="currentColor" />
        </svg>
      </button>
    </nav>
  );
};

export default NavBar;
