import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Routes,
  Route,
  NavLink,
  Link,
  useParams,
} from 'react-router-dom';
import Home from './components/home';
import Nav from './components/nav';

function Root() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Nav />
      <div className="max-w-4xl w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test/:id" element={<Test />} />
          <Route path="*" element={<FallBack />} />
        </Routes>
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  { path: '*', Component: Root },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

function Test() {
  const { id } = useParams();
  return <div>ID: {id}</div>;
}

const FallBack = () => {
  return <div>URL Not Found</div>;
};

const root = createRoot(document.getElementById('main'));
root.render(<App />);
