// import { createBrowserRouter } from "react-router-dom";

// import Layout from "../layouts/layout";
// import Home from "../Pages/Home";

// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         {
//           index: true,
//           element: <Home />,
//         },
//       ],
//     },
//   ],
//   {
//     basename: "/Portfolio_Vikas-v1", // 👈 Add this
//   }
// );

// export default router;



// import { createBrowserRouter } from "react-router-dom";

// import Layout from "../layouts/layout";
// import Home from "../Pages/Home";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         index: true,
//         element: <Home />
//       },
//     ],
//   },
// ]);

// export default router;



// import { createBrowserRouter } from "react-router-dom";

// import Layout from "../layouts/layout";
// import Home from "../Pages/Home";

// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         {
//           index: true,
//           element: <Home />,
//         },
//       ],
//     },
//   ],
//   {
//     basename: "/VikasGupta_Portfolio/",
//   }
// );

// export default router;


// import { createBrowserRouter } from "react-router-dom";

// import Layout from "../layouts/layout";
// import Home from "../Pages/Home";

// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         {
//           index: true,
//           element: <Home />,
//         },
//       ],
//     },
//   ],
//   {
//     basename: "/VikasGupta_Portfolio",
//   }
// );

// export default router;




import { createBrowserRouter } from "react-router-dom";

import Layout from "../layouts/layout";
import Home from "../Pages/Home";

const router = createBrowserRouter(
  [
    {
      path: "/vikas_gupta-portfolio",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ],
  {
    basename: "/",
  }
);

export default router;