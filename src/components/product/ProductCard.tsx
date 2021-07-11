import { Button, Card, Col, Row, Tag, Typography } from "antd";
import React from "react";
import { RiCopperCoinLine } from "react-icons/all";

export interface ProductCardProps {
  image: string;
  price: string;
  rewardPoints: string;
  name: string;
  variation: string;
}

const ProductCard = ({
  image,
  price,
  rewardPoints,
  name,
  variation,
}: ProductCardProps) => {
  const { Title, Paragraph } = Typography;

  return (
    <Card
      className="product-card"
      hoverable
      style={{ height: "450px" }}
      cover={
        <img
          alt="product-img"
          src={image ? image : "https://dummyimage.com/640x640"}
        />
      }
    >
      <Card.Meta
        title={
          <Title className="price-tag" level={4}>
            {"Rs. " + price}
          </Title>
        }
        description={
          <Row>
            <Col span={24}>
              <Tag className="reward-tag" color="orange">
                <RiCopperCoinLine className="icon" size={20} />
                {rewardPoints + " Reward Points"}
              </Tag>
              <Paragraph className="name" ellipsis={{ rows: 2 }}>
                {name}
              </Paragraph>
              <Paragraph className="variation">{variation}</Paragraph>
              <Button className="add-card-btn" danger>
                Add to Cart
              </Button>
            </Col>
          </Row>
        }
      />
    </Card>
  );
};

export default ProductCard;
