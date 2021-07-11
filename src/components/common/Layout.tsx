import {
  Col,
  Divider,
  Layout,
  Menu,
  Row,
  Typography,
  Input,
  Dropdown,
} from "antd";
import {
  AiOutlineRight,
  IoLocationOutline,
  BiShoppingBag,
} from "react-icons/all";
import { DownOutlined } from "@ant-design/icons";
import { FC } from "react";
import AirliftLogo from "../../assets/airlift-logo.svg";
import { withRouter } from "react-router-dom";

const AppLayout: FC = ({ children, history }: any) => {
  const { Header, Content, Sider } = Layout;
  const { Title } = Typography;
  const { Search } = Input;

  const deliverAtMenu = (
    <Menu>
      <Menu.Item>Selecting Address Functionality Goes Here</Menu.Item>
    </Menu>
  );

  const loginSignUpMenu = (
    <Menu>
      <Menu.Item>Login / Sign-up Functionality Goes Here</Menu.Item>
    </Menu>
  );

  const myCartMenu = (
    <Menu>
      <Menu.Item>Cart Functionality Goes Here</Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header className="header">
        <Row justify="center">
          <Col className="header-element" span={2}>
            <a href="/category/beverages" className="logo">
              <img src={AirliftLogo} alt="airliftLogo" />
            </a>
          </Col>
          <Divider className="divider" type="vertical" />
          <Col className=" header-element dropdown-element" span={3}>
            <Dropdown
              className="dropdown"
              overlay={deliverAtMenu}
              trigger={["click"]}
            >
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
                href="#location"
              >
                <IoLocationOutline className="logo" size={30} color="black" />
                <div className="dropdown-text">Deliver At</div>
                <div className="logo">
                  <DownOutlined />
                </div>
              </a>
            </Dropdown>
          </Col>
          <Divider className="divider" type="vertical" />

          <Col className="header-element" span={12}>
            <Search className="search-bar" placeholder="Search" />
          </Col>
          <Divider className="divider" type="vertical" />

          <Col className="header-element dropdown-element" span={4}>
            <Dropdown
              className="dropdown"
              overlay={loginSignUpMenu}
              trigger={["click"]}
            >
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
                href="#location"
              >
                <div className="dropdown-text">My Account - Login / Signup</div>
                <div className="logo">
                  <DownOutlined />
                </div>
              </a>
            </Dropdown>
          </Col>
          <Divider className="divider" type="vertical" />

          <Col className="header-element dropdown-element" span={2}>
            <Dropdown
              className="dropdown"
              overlay={myCartMenu}
              trigger={["click"]}
            >
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
                href="#location"
              >
                <BiShoppingBag className="logo cart" size={30} />
                <div className="dropdown-text cart">My Cart</div>
              </a>
            </Dropdown>
          </Col>
        </Row>
      </Header>
      <Layout className="app-body">
        <Sider width={200} className="site-layout-background sider">
          <Row justify="start">
            <Col>
              <Title className="title" level={3}>
                Categories
              </Title>
            </Col>
          </Row>
          <Menu className="sider-menu">
            <Menu.Item
              className="sider-menu-item"
              onClick={() => {
                localStorage.setItem("activeCat", "beverage");
                history.push("/category/beverages");
              }}
            >
              <div className="element-left">Beverages</div>
              <div className="element-right">
                <AiOutlineRight />
              </div>
            </Menu.Item>
            <Menu.Item
              className="sider-menu-item"
              onClick={() => {
                localStorage.setItem("activeCat", "frozen-meat");
                history.push("/category/meat-frozen");
              }}
            >
              <div className="element-left">Frozen</div>
              <div className="element-right">
                <AiOutlineRight />
              </div>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px 10px" }}>
          <Content>
            <div className="site-layout-background" style={{ padding: 24 }}>
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default withRouter(AppLayout);
