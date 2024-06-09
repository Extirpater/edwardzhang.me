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
import Controls from './components/controls';

function Root() {
  // 2️⃣ `BrowserRouter` component removed, but the <Routes>/<Route>
  // component below are unchanged
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/test/:id" element={<Test />} />
        <Route path="*" element={<FallBack />} />
      </Routes>
      <Controls />
    </div>
  );
}
const router = createBrowserRouter([
  { path: '*', Component: Root },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
function About() {
  return <div> All there is to know about me </div>;
}
function Welcome() {
  return <div>Welcome</div>;
}
function Nav() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
      </ul>
    </nav>
  );
}
function Test() {
  const { id } = useParams();
  return <div> ID: {id} </div>;
}
const FallBack = () => {
  return <div>URL Not Found</div>;
};
/*
export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/test/:id" element={<Test />} />
          <Route path="*" element={<FallBack />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
*/

const root = createRoot(document.getElementById('main'));
root.render(<App />);
