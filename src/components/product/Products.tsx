import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import {
  Breadcrumb,
  Col,
  message,
  PageHeader,
  Pagination,
  Row,
  Typography,
} from "antd";
import ProductCard from "./ProductCard";
import TagsCarousel from "../carousel/TagsCarousel";
import { Link } from "react-router-dom";

export interface ProductsPageProps {
  categorySlug: string;
  productsPerPage: number;
  pageTitle: string;
  breadCrumbs: string[];
  tags: string[];
}

const Products = ({
  categorySlug,
  productsPerPage,
  pageTitle,
  breadCrumbs,
  tags,
}: ProductsPageProps) => {
  const [fetched, setFetched] = useState(false);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { Title } = Typography;
  message.config({
    top: 100,
    duration: 2,
    maxCount: 3,
  });

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_AIRLIFT_API_ADDR + "v2/products", {
        params: {
          categorySlug: categorySlug,
          per_page: productsPerPage,
          page: currentPage,
        },
        headers: {
          "access-key": "f0f0682a-20db-4c63-aa12-d9214a0c5203",
        },
      })
      .then((res: any) => {
        console.log(res);
        setFetched(true);
        setData(res.data.length > 0 ? res.data : []);
        if (res.data.length === 0) {
          message.info("No Frozen Meat Products Found");
        }
      })
      .catch((err) => message.error("Sorry, Could not fetch data products"));
  }, [categorySlug, productsPerPage, currentPage]);

  return (
    <Row>
      <Col span={24} className="products">
        <PageHeader
          className="site-page-header"
          title={pageTitle}
          breadcrumb={
            <Breadcrumb className="crumb" separator=">">
              {breadCrumbs?.map((crumb: string) => (
                <Breadcrumb.Item>{crumb}</Breadcrumb.Item>
              ))}
            </Breadcrumb>
          }
        />
        <TagsCarousel tags={tags} />
        {data.length === 0 ? (
          <Row justify="center">
            <Col>
              <Title level={3} className="loading-title">
                {fetched ? "No Products Found" : "Fetching Products"}
              </Title>
            </Col>
          </Row>
        ) : (
          <Fragment>
            <Row gutter={[16, 16]}>
              {data?.map((bev: any, indx: number) => (
                <Col span={6} key={indx}>
                  <Link to={`/product-detail/${bev.slug}?selected=${bev.id}`}>
                    <ProductCard
                      image={bev.default.image?.src}
                      price={bev.default.price}
                      rewardPoints={bev.default.rewards_point}
                      name={bev.name}
                      variation={bev.default.variation}
                    />
                  </Link>
                </Col>
              ))}
            </Row>
            <Row className="pagination" justify="end">
              <Pagination
                defaultCurrent={currentPage}
                total={50}
                showLessItems
                pageSizeOptions={["25"]}
                onChange={(page) => setCurrentPage(page)}
              />
            </Row>
          </Fragment>
        )}
      </Col>
    </Row>
  );
};

export default Products;
