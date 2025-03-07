import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

import Homepage from './Routes/Homepage.jsx';
import SinglePostPage from './Routes/SinglePostPage.jsx';
import Write from './Routes/Write.jsx';
import PostListPage from './Routes/PostListPage.jsx';
import RegisterPage from './Routes/RegisterPage.jsx';
import LoginPage from './Routes/LoginPage.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import { ClerkProvider } from "@clerk/clerk-react";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}



let router = createBrowserRouter([
 {
  element:<MainLayout />,
  children:[
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/posts",
      element: <PostListPage />,
  
    },
    {
      path: "/:slug",
      element: <SinglePostPage />,
  
    },
    {
      path: "/write",
      element: <Write />,
  
    },
    {
      path: "/login",
      element: <LoginPage />,
  
    },
    {
      path: "/register",
      element: <RegisterPage />,
  
    },
  ]
 }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
       <RouterProvider router={router} />
    </ClerkProvider>
    
  </StrictMode>
);
