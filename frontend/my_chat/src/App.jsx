import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes/route";
import AuthMiddleware from "./middleware/AuthMiddleware";
import NotFound from "./views/pages/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Preloader from "./views/pages/Preloader";
import { useLoadingState } from "./features/hooks/useLoading";

function App() {
  const { isRequestLoading } = useLoadingState();

  return (
    <>
      {isRequestLoading && <Preloader />}
      <Router>
        <Routes>
          {routes.map((routes, index) => (
            <Route
              key={index}
              path={routes.path}
              element={
                <AuthMiddleware
                  isPrivate={routes.isPrivate}
                  element={<routes.component />}
                />
              }
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
