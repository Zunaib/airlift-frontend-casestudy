import { Col, Row, Tag } from "antd";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/all";

export interface TagsCarouselProps {
  tags: string[];
}

const TagsCarousel = ({ tags }: TagsCarouselProps) => {
  return (
    <Row className="quick-tags">
      <Col span={24}>
        <AiOutlineLeft className="icon" size={30} />
        {tags.map((tag: string, idx: number) => (
          <Tag className="quick-tag" key={idx}>
            {tag}
          </Tag>
        ))}
        <AiOutlineRight className="icon" size={30} />
      </Col>
    </Row>
  );
};

export default TagsCarousel;
