import { Button, Divider, Card } from 'antd';
import { RightSquareOutlined } from '@ant-design/icons';
import './tool.css'


function Tool() {

    return (
        <div>
            <p style={{fontSize:'30px',fontWeight:'bolder',marginTop:'10px'}}>好TOOL为您提供优质的生活和办公服务</p>
            <Divider>影视视频</Divider>
            <Card
                bordered={false}
                style={{
                    width: '100%',
                }}
            >
                <a href="https://gaze.run/" target='_blank' className='item'>

                    <Button type="primary" icon={<RightSquareOutlined />} size='large'>
                        免费电影
                    </Button>
                </a>
                {/* <a href="https://cokemv.me/" target='_blank' className='item'>

                    <Button type="primary" icon={<RightSquareOutlined />} size='large'>
                        COKEMV影视
                    </Button>
                </a> */}
                <a href="https://www.dadagui.me/" target='_blank' className='item'>

                    <Button type="primary" icon={<RightSquareOutlined />} size='large'>
                        达达龟
                    </Button>
                </a>
                <a href="https://www.bilibili.com/" target='_blank' className='item'>

                    <Button type="primary" icon={<RightSquareOutlined />} size='large'>
                    哔哩哔哩
                    </Button>
                </a>
                <a href="https://www.moefun.net/" target='_blank' className='item'>

                    <Button type="primary" icon={<RightSquareOutlined />} size='large'>
                    萌番/追番
                    </Button>
                </a>

            </Card>
            <Divider>图书音乐</Divider>
            <Card
                bordered={false}
                style={{
                    width: '100%',
                }}
            >
                <a href="https://new.shuge.org/" target='_blank' className='item'>

                    <Button type="primary" icon={<RightSquareOutlined />} size='large'>
                        书格
                    </Button>
                </a>
                <a href="https://music.y444.cn/" target='_blank' className='item'>

                    <Button type="primary" icon={<RightSquareOutlined />} size='large'>
                        下歌吧
                    </Button>
                </a>
                <a href="https://tool.liumingye.cn/music/" target='_blank' className='item'>

                    <Button type="primary" icon={<RightSquareOutlined />} size='large'>
                        MyFreeMP3
                    </Button>
                </a>
                <a href="https://sao.fm/" target='_blank' className='item'>

                    <Button type="primary" icon={<RightSquareOutlined />} size='large'>
                        Sao.Fm
                    </Button>
                </a>
            </Card>
            <Divider>工具类，帮你解决各种格式转换问题、文档处理和办公辅助</Divider>
            <Card
                bordered={false}
                style={{
                    width: '100%',
                }}
            >
                <a href="https://www.67tool.com/" target='_blank' className='item'>
                    <Button type="primary" icon={<RightSquareOutlined />} size='large'>
                        即时工具
                    </Button>
                </a>
                <a href="https://tool.browser.qq.com/" target='_blank' className='item'>
                    <Button type="primary" icon={<RightSquareOutlined />} size='large'>
                    帮小忙
                    </Button>
                </a>
                <a href="http://www.pdfdo.com/pdf-merge.aspx" target='_blank' className='item'>
                    <Button type="primary" icon={<RightSquareOutlined />} size='large'>
                    PDF合并
                    </Button>
                </a>
                <a href="https://jpgrm.com/" target='_blank' className='item'>
                    <Button type="primary" icon={<RightSquareOutlined />} size='large'>
                    一键抠图
                    </Button>
                </a>

            </Card>
            <Divider>教育教学资源</Divider>
            <Card
                bordered={false}
                style={{
                    width: '100%',
                }}
            >
                <a href="https://1s1k.eduyun.cn/portal/html/1s1k/course/1.html" target='_blank' className='item'>
                    <Button type="primary" icon={<RightSquareOutlined />} size='large'>
                        国家教育资源公共服务平台
                    </Button>
                </a>
                <a href="https://book.sciencereading.cn/shop/main/Login/shopFrame.do" target='_blank' className='item'>
                    <Button type="primary" icon={<RightSquareOutlined />} size='large'>
                    科学文库
                    </Button>
                </a>
                <a href="https://le.ouchn.cn/home" target='_blank' className='item'>
                    <Button type="primary" icon={<RightSquareOutlined />} size='large'>
                    终身教育平台
                    </Button>
                </a>
                <a href="https://www.runoob.com/" target='_blank'>
                    <Button type="primary" icon={<RightSquareOutlined />} size='large' className='item'>
                        菜鸟教程
                    </Button>
                </a>
                <a href="https://www.w3school.com.cn/index.html" target='_blank' className='item'>
                    <Button type="primary" icon={<RightSquareOutlined />} size='large'>
                        W3school
                    </Button>
                </a>

            </Card>
            <Divider>设计素材</Divider>
            <Card
                bordered={false}
                style={{
                    width: '100%',
                }}
            >
                <a href="https://www.maka.im/muban" target='_blank' className='item'>
                    <Button type="primary" icon={<RightSquareOutlined />} size='large'>
                    码卡MAKA
                    </Button>
                </a>
                <a href="https://pika.style/" target='_blank' className='item'>
                    <Button type="primary" icon={<RightSquareOutlined />} size='large'>
                    在线截图美化工具
                    </Button>
                </a>
                <a href="https://www.chuangkit.com/" target='_blank' className='item'>
                    <Button type="primary" icon={<RightSquareOutlined />} size='large'>
                    创客贴(平面设计作图神器)
                    </Button>
                </a>
                <a href="https://www.gaoding.com/" target='_blank'>
                    <Button type="primary" icon={<RightSquareOutlined />} size='large' className='item'>
                    稿定设计
                    </Button>
                </a>
            </Card>

        </div>
    )
}
export default Tool