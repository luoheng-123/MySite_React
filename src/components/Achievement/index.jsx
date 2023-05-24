import { Col, Divider, Row,Image } from 'antd';

import ssImageSrc1 from './assert/ssImage/g.jpg'
import ssImageSrc2 from './assert/ssImage/g1.png'
import ssImageSrc3 from './assert/ssImage/s1.jpg'
import ssImageSrc4 from './assert/ssImage/s1.1.jpg'
import ssImageSrc5 from './assert/ssImage/s1.2.jpg'
import ssImageSrc6 from './assert/ssImage/s2.jpg'
import ssImageSrc7 from './assert/ssImage/s2.1.jpg'
import ssImageSrc8 from './assert/ssImage/s3.jpg'
import ssImageSrc9 from './assert/ssImage/y1.jpg'
import ssImageSrc10 from './assert/ssImage/y1.1.jpg'
import ssImageSrc11 from './assert/ssImage/y2.jpg'
import ssImageSrc12 from './assert/ssImage/y2.2.jpg'
import ssImageSrc13 from './assert/ssImage/y3.jpg'
import ssImageSrc14 from './assert/ssImage/y3.1.jpg'

import xjImageSrc1 from './assert/xjImage/43.jpg'
import xjImageSrc2 from './assert/xjImage/46.jpg'
import xjImageSrc3 from './assert/xjImage/47.jpg'
import xjImageSrc4 from './assert/xjImage/48.jpg'
import xjImageSrc5 from './assert/xjImage/49.jpg'
import xjImageSrc6 from './assert/xjImage/50.jpg'

import video1 from './assert/video/1.mp4'
import video2 from './assert/video/2.mp4'
import video3 from './assert/video/3.mp4'
import video4 from './assert/video/4.mp4'
import './achievement.less'
const style = {
    // background: '#fff',
    padding: '8px 0',
    
};
const dividerStyle={
    fontSize:'30px',
fontWeight:'bolder'
}
function Achievement() {

    return (
        <>
            <Divider orientation="left" style={dividerStyle}>市级以上竞赛成果</Divider>
            <Row
                style={{ margin: '20px 0' }}
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
            >
                <Col className="gutter-row" xs={24} md={6}>
                    <div style={style}>
                        <Image src={ssImageSrc1} ></Image>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={6}>
                    <div style={style}>
                        <Image src={ssImageSrc2} ></Image>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={6}>
                    <div style={style}>
                        <Image src={ssImageSrc3} ></Image>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={6}>
                    <div style={style}>
                        <Image src={ssImageSrc6} ></Image>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={6}>
                    <div style={style}>
                        <Image src={ssImageSrc5} ></Image>
                    </div>
                </Col>
                {/* 市赛证书 */}
                <Col className="gutter-row" xs={24} md={6}>
                    <div style={style}>
                        <Image src={ssImageSrc9} ></Image>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={6}>
                    <div style={style}>
                        <Image src={ssImageSrc10} ></Image>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={6}>
                    <div style={style}>
                        <Image src={ssImageSrc11} ></Image>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={6}>
                    <div style={style}>
                        <Image src={ssImageSrc12} ></Image>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={6}>
                    <div style={style}>
                        <Image src={ssImageSrc13} ></Image>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={6}>
                    <div style={style}>
                        <Image src={ssImageSrc14} ></Image>
                    </div>
                </Col>

                {/* 科协的证书 */}
                <Col className="gutter-row" xs={24} md={8}>
                    <div style={style}>
                        <Image src={ssImageSrc4} ></Image>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={8}>
                    <div style={style}>
                        <Image src={ssImageSrc7} ></Image>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={8}>
                    <div style={style}>
                        <Image src={ssImageSrc8} ></Image>
                    </div>
                </Col>
            </Row>

            <Divider orientation="left" style={dividerStyle}>县级竞赛成果</Divider>
            <Row
                style={{ margin: '20px 0' }}
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
            >
                <Col className="gutter-row" xs={24} md={6}>
                    <div style={style}>
                        <Image src={xjImageSrc1} ></Image>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={6}>
                    <div style={style}>
                        <Image src={xjImageSrc2} ></Image>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={6}>
                    <div style={style}>
                        <Image src={xjImageSrc3} ></Image>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={6}>
                    <div style={style}>
                        <Image src={xjImageSrc4} ></Image>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={6}>
                    <div style={style}>
                        <Image src={xjImageSrc5} ></Image>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={6}>
                    <div style={style}>
                        <Image src={xjImageSrc6} ></Image>
                    </div>
                </Col>
            </Row>
            <Divider orientation="left" style={dividerStyle}>相关视频</Divider>
            <Row
                style={{ margin: '20px 0' }}
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
            >
                <Col className="gutter-row" xs={24} md={12}>
                    <div style={style}>
                        <video src={video1} controls></video>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={12}>
                    <div style={style}>
                        <video src={video2} controls></video>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={12}>
                    <div style={style}>
                        <video src={video3} controls></video>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={12}>
                    <div style={style}>
                        <video src={video4} controls></video>
                    </div>
                </Col>

            </Row>
        </>
    )
}
export default Achievement