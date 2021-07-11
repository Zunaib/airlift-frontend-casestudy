import { Col, Row, Spin } from "antd";
import { FC, lazy, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AppLayout from "./components/common/Layout";

//Components
const Beverages = lazy(() => import("./screens/Beverages"));
const Frozen = lazy(() => import("./screens/Frozen"));
const ProductDetail = lazy(() => import("./screens/Product/ProductDetail"));

const Common: FC = () => {
  return (
    <Suspense
      fallback={
        <Row justify="center" className="centered">
          <Col>
            <Spin size="large" />
          </Col>
        </Row>
      }
    >
      <Switch>
        <Route exact path="/category/beverages">
          <AppLayout>
            <Beverages />
          </AppLayout>
        </Route>
        <Route exact path="/category/meat-frozen">
          <AppLayout>
            <Frozen />
          </AppLayout>
        </Route>
        <Route exact path="/product-detail/:slug">
          <AppLayout>
            <ProductDetail />
          </AppLayout>
        </Route>
        <Redirect to="/category/beverages" />
      </Switch>
    </Suspense>
  );
};

export default Common;
