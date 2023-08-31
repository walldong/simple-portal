import { React, Component } from "react";
import { Carousel } from "antd";

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
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
            Home
        </div>
    }
}