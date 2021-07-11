import { Button, Col, message, Row, Tag, Typography } from "antd";
import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { RiCopperCoinLine } from "react-icons/all";
import { useParams } from "react-router-dom";

export interface paramsSlug {
  slug: string;
}

const ProductDetail = (props: any) => {
  const { slug } = useParams<paramsSlug>();
  const [fetched, setFetched] = useState(false);
  const [product, setProduct] = useState([]);
  const { Title, Paragraph } = Typography;
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_AIRLIFT_API_ADDR + "v2/products", {
        params: {
          "includeGroupSlugs[]": slug,
        },
        headers: {
          "access-key": "f0f0682a-20db-4c63-aa12-d9214a0c5203",
        },
      })
      .then((res: any) => {
        setFetched(true);
        setProduct(res.data.length > 0 ? res.data : []);
        if (res.data.length === 0) {
          message.info("No Frozen Meat Products Found");
        }
      })
      .catch((err) => message.error("Sorry, Could not fetch product"));
  }, [slug]);

  return (
    <Row>
      <Col span={24} className="product-detail">
        {product.length === 0 ? (
          <Row justify="center">
            <Col>
              <Title level={3} className="loading-title">
                {fetched ? "No Product" : "Fetching Product"}
              </Title>
            </Col>
          </Row>
        ) : (
          product.map((prd: any, idx: number) => (
            <Fragment key={idx}>
              <Row className="prod-row" justify="start" gutter={[16, 16]}>
                <Col span={10}>
                  <img
                    style={{
                      objectFit: "contain",
                      width: "350px",
                      border: "1px solid #f0f0f0",
                    }}
                    src={
                      prd.default.image
                        ? prd.default.image.src
                        : "https://dummyimage.com/640x640"
                    }
                    alt="prd"
                  />
                </Col>
                <Col span={14}>
                  <Title
                    className="prd-name"
                    level={2}
                    style={{ fontWeight: "bold" }}
                  >
                    {prd.name}
                  </Title>
                  <Title
                    className="prd-price"
                    level={3}
                    style={{ color: "#d6273d" }}
                  >
                    {"Rs. " + prd.default.price}
                  </Title>
                  <Tag className="reward-tag" color="orange">
                    <RiCopperCoinLine className="icon" size={20} />
                    {prd.default.rewards_point + " Reward Points"}
                  </Tag>
                  <Paragraph className="avl">Available In</Paragraph>
                  <Button size="large" className="variant-btn">
                    {prd.default.variation}
                  </Button>
                  <Row>
                    <Button size="large" className="cart-btn">
                      Add to Cart
                    </Button>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Title level={3}>Description</Title>
                  <Paragraph>
                    {prd.default.description.trim() > 0
                      ? prd.default.description
                      : "No Description Available"}
                  </Paragraph>
                </Col>
              </Row>
            </Fragment>
          ))
        )}
      </Col>
    </Row>
  );
};

export default ProductDetail;
