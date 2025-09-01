// withSuspense.jsx
import React, { Suspense } from "react";
import DummyCard from "../components/DummyCard.jsx";
const withSuspenseWrapper = (Component) => {
  return function SuspendedComponent(props) {
    return (
      <Suspense fallback={ <DummyCard/> }>
        <Component {...props} />
      </Suspense>
    );
  };
};

export default withSuspenseWrapper;