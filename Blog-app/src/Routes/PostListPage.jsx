/*
import PostList from "../components/PostList"
import SideMenu from "../components/SideMenu"
const PostListPage = () => {
  return (
    <div className=''>
      <h1 className="mb-8 text-2xl">Development Blog</h1>
      <div className="flex -gap-8">
       <div className="">
       <PostList/>
       </div>
    
      <div className="">
        <SideMenu/>
      </div>
    </div>
    </div>
  )
}

export default PostListPage

*/
import { useState } from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";

const PostListPage = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="p-4 sm:p-6 max-w-6xl mx-auto">
      <h1 className="mb-6 text-2xl font-bold">Development Blog</h1>

      {/* Mobile Filter Button */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md"
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>

        {/* Mobile Filter Dropdown */}
        {showFilters && (
          <div className="mt-2 bg-white shadow-lg rounded-md p-4">
            <SideMenu />
          </div>
        )}
      </div>

      {/* Layout for Medium & Large Screens */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Post List - Always Visible */}
        <div className="flex-1">
          <PostList />
        </div>

        {/* Sidebar - Hidden on Mobile, Shown on MD+ */}
        <div className="hidden md:block w-72">
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default PostListPage;
