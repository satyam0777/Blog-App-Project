
import { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const categories = ["General", "Web Design", "Development", "Database", "Data Structure", "Search Engine"];
const recentPosts = ["Building a MERN Stack App", "UI/UX Trends 2025", "SEO Best Practices"];
const popularTags = ["React", "JavaScript", "MongoDB", "Node.js", "CSS"];

const SideMenu = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedCategory = params.get("category");

  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <aside className="bg-white shadow-md rounded-xl p-4 md:w-5/6">
      
      {/* Search Box */}
      <div className="mb-6 relative">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 pl-10 border rounded-md"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      {/* Mobile Filter Toggle */}
      <button
        className="md:hidden flex items-center gap-2 w-full p-2 bg-gray-100 rounded-md mb-4"
        onClick={() => setShowFilters(!showFilters)}
      >
        <FaFilter /> Filter Options
      </button>

      {/*Categories (Link-Based Filters) */}
      <div className={`${showFilters ? "block" : "hidden"} md:block`}>
        <h3 className="font-semibold mb-2">Filter by Category</h3>
        <div className="space-y-2 text-gray-700">
          {categories.map((category) => {
            const isActive = selectedCategory === category.toLowerCase();
            return (
              <Link
                key={category}
                to={`/?category=${category.toLowerCase()}`}
                className={`block px-3 py-1 rounded-md ${
                  isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200"
                }`}
              >
                {category}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Recent Posts</h3>
        <ul className="space-y-2 text-gray-700">
          {recentPosts.map((post, index) => (
            <li key={index} className="cursor-pointer hover:text-blue-500">
              {post}
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Tags */}
      <div className="mt-6">
        <h3 className="font-semibold mb-2">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <Link
              key={tag}
              to={`/?tag=${tag.toLowerCase()}`}
              className="text-xs bg-gray-200 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-300"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>

    </aside>
  );
};

export default SideMenu;
