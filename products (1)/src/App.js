import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import IPhone14ProSpaceBlackMock1 from "./pages/IPhone14ProSpaceBlackMock1";
import IPhone14ProSpaceBlackMock2 from "./pages/IPhone14ProSpaceBlackMock2";
import IPhone14ProSpaceBlackMock from "./pages/IPhone14ProSpaceBlackMock";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-14-pro-space-black-mockup1":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
<div className="full">
<IPhone14ProSpaceBlackMock></IPhone14ProSpaceBlackMock>

<IPhone14ProSpaceBlackMock1></IPhone14ProSpaceBlackMock1>
<IPhone14ProSpaceBlackMock2></IPhone14ProSpaceBlackMock2>

</div>
  );
}
export default App;
