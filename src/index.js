import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
// import Counter from './store/countStatus/count'
import './index.css'
import Loading from "./components/Loading"

const App = React.lazy(() => import("./pages/app"))
const Login = React.lazy(() => import("./pages/login"))
const Register = React.lazy(() => import('./pages/Register'))
const Article = React.lazy(() => import('./pages/article'))

const Achievement = React.lazy(() => import("./components/Achievement"))
const Home = React.lazy(() => import('./components/Home'))
const Tool = React.lazy(() => import('./components/Tool'))
const Course = React.lazy(() => import('./components/Course'))
const About = React.lazy(() => import("./components/About"))
const Personal = React.lazy(() => import('./components/Personal'))
const Community = React.lazy(() => import('./components/Community'))
const UserInfo = React.lazy(() => import('./components/Personal/UserInfo'))
const Commercial = React.lazy(() => import('./components/Commercial'))
const Administrator = React.lazy(() => import('./components/Administrator'))

   
   
const AllPaperManagement = React.lazy(() => import('./components/Administrator/AllPaperManagement'))
const UserManagement = React.lazy(() => import('./components/Administrator/UserManagement'))
const VideoManagement = React.lazy(() => import('./components/Administrator/VideoManagement'))
const PaperManagement = React.lazy(() => import('./components/Personal/PaperManagement'))
const PaperPublish = React.lazy(() => import('./components/Personal/PaperPublish'))
const UpdatePaper = React.lazy(() => import('./components/Personal/UpdatePaper'))
const UpdateUser = React.lazy(() => import('./components/Personal/UpdateUser'))



const token = localStorage.getItem('token');

const router = createHashRouter([
  {
    path: "/",
    element: <React.Suspense fallback={<Loading />}  >
      <App token={token} />
    </React.Suspense>,

    children: [
      {
        path: "home",
        element: <React.Suspense fallback={<Loading />}  >
          <Home />
        </React.Suspense>

      },
      {
        path: "achievement",
        element: <React.Suspense fallback={<Loading />}  >
          <Achievement />
        </React.Suspense>
      },
      {
        path: "about",
        element: <React.Suspense fallback={<Loading />}  >
          <About />
        </React.Suspense>
      },
      {
        path: "community",
        element: <React.Suspense fallback={<Loading />}  >
          <Community />
        </React.Suspense>
      },
      {
        path: "course",
        element: <React.Suspense fallback={<Loading />}  >
          <Course />
        </React.Suspense>
      },
      {
        path: "tool",
        element: <React.Suspense fallback={<Loading />}  >
          <Tool />
        </React.Suspense>
      },
      {
        path: "personal",
        element: <React.Suspense fallback={<Loading />}  >
          <Personal />
        </React.Suspense>,
        children: [
          {
            path: 'userinfo',
            element: <React.Suspense fallback={<Loading />}  >
              <UserInfo />
            </React.Suspense>,
          },
          {
            path: 'papermanagement',
            element: <React.Suspense fallback={<Loading />}  >
              <PaperManagement />
            </React.Suspense>,
          },
          {
            path: 'paperpublish/',
            element: <React.Suspense fallback={<Loading />}  >
              <PaperPublish />
            </React.Suspense>,
          },
          {
            path: 'updatePaper/:article_id',
            element: <React.Suspense fallback={<Loading />}  >
              <UpdatePaper />
            </React.Suspense>,
          },
          {
            path: 'updateuser',
            element: <React.Suspense fallback={<Loading />}  >
              <UpdateUser />
            </React.Suspense>,
          },
        ]
      },
      {
        path: "commercial",
        element: <React.Suspense fallback={<Loading />}  >
          <Commercial />
        </React.Suspense>
      },
      {
        path: "administrator",
        element: <React.Suspense fallback={<Loading />}  >
          <Administrator />
        </React.Suspense>,
        children:[
          {
            path: "videomanagement",
            element: <React.Suspense fallback={<Loading />}  >
              <VideoManagement />
            </React.Suspense>
          },
          {
            path: "usermanagement",
            element: <React.Suspense fallback={<Loading />}  >
              <UserManagement />
            </React.Suspense>
          },
          {
            path: "allpapermanagement",
            element: <React.Suspense fallback={<Loading />}  >
              <AllPaperManagement />
            </React.Suspense>
          },
        ]
      },
    ],
  },
  {
    path: "login",
    element: <React.Suspense fallback={<Loading />}  >
      <Login />
    </React.Suspense>
  },
  {
    path: "register",
    element: <React.Suspense fallback={<Loading />}  >
      <Register />
    </React.Suspense>
  },
  {
    path: "article/:article_id",
    element: <React.Suspense fallback={<Loading />}  >
      <Article />
    </React.Suspense>
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <Counter/> */}
    <RouterProvider router={router} />
  </Provider>

);
