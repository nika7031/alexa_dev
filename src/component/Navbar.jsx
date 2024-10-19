const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-8 bg-transparent">
      <div className="text-white text-2xl font-bold">Alexa Developers SRM</div>
      <ul className="flex space-x-8 text-white">
        {["Home", "Events", "Our Team", "Blogs"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase().replace(" ", "")}`} 
              className="hover:text-green-400 transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#apply"
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 shadow-md hover:shadow-lg"
      >
        Apply Now
      </a>
    </nav>
  );
};

export default Navbar;
