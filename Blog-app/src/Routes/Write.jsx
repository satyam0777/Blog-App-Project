/*
import Select from 'react-select';

import{ useUser} from "@clerk/clerk-react";

import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";
const Write = () => {

  const {isloaded ,isSignedIn } =useUser();

  if(isloaded){
    return <div className="">
      Loading...
    </div>
  }

  if(isloaded && !isSignedIn){
    return <div className="">
      You Should login!
    </div>
  }
  return (
    <div className=''>
      <h1>Create a New Post</h1>
      <form action="">
        <button>Add a Cover image</button>
        <input type="text" placeholder="My topic"/>
        <div className="">
          <label htmlFor="">Choose a category:</label>
          <Select 
           name="category"
           id=""
           className="p-2 rounded-xl bg-white shadow-md"
           >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="database">Database</option>
            <option value="datastructure">Data Structure</option>
            <option value="seo">Search Engine</option>
          </Select>
        </div>
        <textarea name="desc" placeholder="A Short Description">
          <ReactQuill theme="snow"/>
        </textarea>
      </form>
    </div>
  )
}

export default Write
*/
/*
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import Select from 'react-select';

const Write = () => {
  const categoryOptions = [
    { value: 'general', label: 'General' },
    { value: 'web-design', label: 'Web Design' },
    { value: 'development', label: 'Development' },
    { value: 'database', label: 'Database' },
    { value: 'datastructure', label: 'Data Structure' },
    { value: 'seo', label: 'Search Engine' }
  ];
// p-4 max-w-2xl mx-auto
  return (
    <div className="p-4 max-w-2xl mx-auto flex flex-col gap-6">
      <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>
      <form>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md">
          Add a Cover Image
        </button>
        <input
          type="text"
          placeholder="My topic"
          className="block w-full mt-2 p-2  rounded-md shadow-md bg-white text-4xl font-semibold"
        />
        <div className="mt-4">
          <label className="block font-semibold mb-1">Choose a category:</label>
          <Select options={categoryOptions} className="w-full bg-blue-50" />
        </div>
        <div className="mt-4">
          <label className="block font-semibold mb-1 rounded-2xl">Short Description:</label>
          <ReactQuill theme="snow" className="bg-white rounded-md shadow-md" />
        </div>
      </form>
    </div>
  );
};

export default Write;
*/

import { useState } from "react";
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import Select from 'react-select';

const Write = () => {
  const [description, setDescription] = useState("");
  const [fullStory, setFullStory] = useState("");

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Create a New Post
      </h1>
      <form className="bg-white shadow-md rounded-lg p-4 sm:p-6">
        
        {/* Cover Image Button */}
        <button className="mb-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md w-full sm:w-auto">
          Add a Cover Image
        </button>

        {/* Topic Input */}
        <input
          type="text"
          placeholder="Enter your topic..."
          className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Category Selection */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Choose a category:</label>
          <Select
            name="category"
            className="rounded-md shadow-md"
            options={[
              { value: "general", label: "General" },
              { value: "web-design", label: "Web Design" },
              { value: "development", label: "Development" },
              { value: "database", label: "Database" },
              { value: "datastructure", label: "Data Structure" },
              { value: "seo", label: "Search Engine Optimization" },
            ]}
          />
        </div>

        {/* Short Description */}
        <label className="block font-semibold mb-2">Short Description:</label>
        <ReactQuill
          theme="snow"
          value={description}
          onChange={setDescription}
          className="mb-4 bg-white"
        />

        {/* Full Story */}
        <label className="block font-semibold mb-2">Full Story:</label>
        <ReactQuill
          theme="snow"
          value={fullStory}
          onChange={setFullStory}
          className="mb-4 bg-white"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition-all"
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
