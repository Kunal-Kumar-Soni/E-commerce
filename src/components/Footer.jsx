import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const links = [
    { name: "Smartphones", categoryName: "smartphones" },
    { name: "Fragrances", categoryName: "fragrances" },
    { name: "Grocery", categoryName: "groceries" },
    { name: "Furniture", categoryName: "furniture" },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 mt-10 px-4 pt-12 text-gray-700 dark:text-gray-300">
      <div className="flex md:flex-row flex-col justify-between gap-8 mx-auto pb-8 border-gray-300 dark:border-gray-700 border-b max-w-screen-2xl">
        {/* Logo & Tagline */}
        <div>
          <h2 className="mb-3 font-bold text-sky-500 text-2xl">ShopKaro</h2>
          <p className="text-sm leading-relaxed">
            Discover your everyday needs with ShopKaro. <br /> Trusted by
            thousands across India.
          </p>
        </div>

        {/* Top Categories */}
        <div>
          <h3 className="mb-4 font-semibold text-lg">Top Categories</h3>
          <ul className="flex flex-col space-y-2 text-sm">
            {links.map((link, index) => (
              <Link
                key={index}
                to={`/products/category/${link.categoryName}`}
                className="hover:text-sky-500 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div className="sm:col-span-2 md:col-span-1">
          <h3 className="mb-4 font-semibold text-lg">Follow Us</h3>
          <p className="mb-3 text-sm">
            Stay connected with us on social media:
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/Kunal-Kumar-Soni"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 shadow-md p-2 rounded-full hover:text-sky-500"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/kunal-kumar-soni"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 shadow-md p-2 rounded-full hover:text-sky-500"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://x.com/KunalKumar_Soni"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 shadow-md p-2 rounded-full hover:text-sky-500"
            >
              <FaTwitter size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="mt-6 py-4 border-gray-200 dark:border-gray-800 border-t text-gray-500 dark:text-gray-400 text-sm text-center">
        © {new Date().getFullYear()} ShopKaro. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
