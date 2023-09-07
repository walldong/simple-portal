import { React, Component } from "react";
import { Carousel, Card, Col, Row, Typography } from "antd";
const { Paragraph } = Typography;
const contentStyle = {
    height: '240px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const homeBoxStyle = {
    height: '800px',
    marginTop: "24px"
}
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    render() {
        return <div>
            <Carousel autoplay effect="fade">
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
            <div style={homeBoxStyle}>
                <Row gutter={24} justify="space-evenly">
                    <Col span={4}>
                        <Card title="Card title" bordered={false} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            Card content
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card title="Card title" bordered={false} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            Card content
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card title="Card title" bordered={false} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            Card content
                        </Card>
                    </Col>
                    <Col span={4}>
                        <Card title="Card title" bordered={false} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                            Card content
                        </Card>
                    </Col>
                </Row>
                <Paragraph ellipsis={false} marginXS={24}>
                    Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team.
                </Paragraph>
            </div>
        </div>
    }
}