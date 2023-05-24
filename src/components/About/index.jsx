import { Row, Col, Image } from "antd";
import aboutImage1 from './image/1.jpg'
import aboutImage2 from './image/5.jpg'
import aboutImage4 from './image/14.jpg'
import aboutImage5 from './image/22.jpg'
import aboutImage7 from './image/44.jpg'
import aboutImage8 from './image/53.jpg'
import ImageAbout1 from "./image/me.jpg";



import './about.css'

const style = {
    // background: '#fff',
    padding: '8px 0',
};
function About() {
    return (
        <>
            <Row>

                <Col className="gutter-row" xs={24} md={24}>
                    <div className='about_me'>关于我</div>
                    <div className='about_content'>在参加湖南省科技协会举办的青少年编程竞赛中，我带领学生取得了省一等奖一名，省二、三等奖若干的优异成绩。此后，我又连续两年带领新田的学生参加电教馆举办的中小学信息素养大赛，成功获得了国家级奖项。
                    </div>
                    <div className='about_content'>
                        在这些比赛中，我们遇到了各种各样的困难和挑战，例如物资缺乏和设备落后等问题。然而，我们始终保持着坚定的信念和努力的态度，克服了困难，突破了障碍，最终为新田赢得了荣誉，并为孩子们的成长和发展创造了新的平台。
                    </div>
                </Col>
            </Row>
            <Row
                style={{ 
                    margin: '20px 0' ,
                    textAlign:'center'
                }}
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
            >
                <Col className="gutter-row" xs={24} md={24}>
                    <div style={style}>
                        <Image src={ImageAbout1} ></Image>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={6}>
                    <div style={style}>
                        <Image src={aboutImage2} ></Image>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={6}>
                    <div style={style}>
                        <Image src={aboutImage1} ></Image>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={6}>
                    <div style={style}>
                        <Image src={aboutImage5} ></Image>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={6}>
                    <div style={style}>
                        <Image src={aboutImage4} ></Image>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={6}>
                    <div style={style}>
                        <Image src={aboutImage7} ></Image>
                    </div>
                </Col>
                <Col className="gutter-row" xs={24} md={6}>
                    <div style={style}>
                        <Image src={aboutImage8} ></Image>
                    </div>
                </Col>

            </Row>
        </>

    );
}

export default About;