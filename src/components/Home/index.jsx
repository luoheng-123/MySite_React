import { useNavigate } from 'react-router-dom'
import { FundProjectionScreenOutlined, IdcardTwoTone, MessageTwoTone, CrownTwoTone, TrophyTwoTone, HomeTwoTone, ToolTwoTone, HeartTwoTone } from '@ant-design/icons'
import { Carousel, List, Avatar, Row, Col, message } from 'antd'
import PubSub from 'pubsub-js'
import { getOnePageArticles, getVideo } from '../../api'
import { useDispatch, useSelector } from 'react-redux'
import { formatTime } from '../../utills/toolUtil'

import img2023_1 from './asserts/2023_1.jpg'
import img2023_2 from './asserts/2023_2.jpg'
import img2023_3 from './asserts/2023_3.jpg'
import img1 from './asserts/10.jpg'
import img2 from './asserts/11.jpg'
import img3 from './asserts/24.jpg'
import img4 from './asserts/25.jpg'
import img5 from './asserts/26.jpg'
import img6 from './asserts/30.jpg'
import img7 from './asserts/32.jpg'
import img8 from './asserts/37.jpg'
import img9 from './asserts/38.jpg'
import img10 from './asserts/39.jpg'
import img11 from './asserts/41.jpg'
import './home.css'
import { useState } from 'react'
import { useEffect } from 'react'


function Home() {
    const nav = useNavigate()
    // const [articleData, setAritcleData] = useState()
    // const [videoData, setVideoData] = useState()
    /**
 * 获取第一页的6的条文章数据
 * 存入可以不用存入store中
 * 当用户点击相应的文章时，跳转，显示文章的详细内容，
 * 点击更多时跳转到讨论社区，在社区里面按页获取文章
 * @param {pageSize} 6 
 */
    const dispatch = useDispatch()
    const handlerOnePageArticles = async (pageSize) => {
        const res = await getOnePageArticles(pageSize);
        console.log(res);
        if (res.status === 0) {
            // message.success('数据获取成功')
            // console.log(res);
            dispatch({ type: 'setOnePageUserArticles', val: { data: res.data, articleTotal: res.articleTotal } })
        } else {
            message.error(res.message)
        }
    }
    const handlerGetVideo = async (pageNum, pageSize) => {
        const info = {
            pageNum,
            pageSize,
        }
        const res = await getVideo(info);
        console.log(res);
        if (res.status === 0) {
            message.success('数据获取成功')
            console.log(res);
            dispatch({ type: 'setVideoData', val: { data: res.data, videoTotal: res.videoTotal } })
        } else {
            message.error(res.message)
        }
        // console.log(res);
    }
    // 每次进入该页面获取第一次的数据
    useEffect(() => {
        handlerOnePageArticles({ pageSize: 4 })
        handlerGetVideo(1, 8)
        // console.log(videoData);
        // console.log(articleData);
    }, [])

    const { data, articleTotal } = useSelector((state) => {
        console.log(state.userArticleReducer);
        const data = state.userArticleReducer.data.map((item) => {
            const article_content = item.article_content.replace(/<[^>]+>/g, '');
            return { ...item, article_content, key: item.article_id }
        })
        return { data, articleTotal: state.userArticleReducer.articleTotal }
    })
    const { videoData, videoTotal } = useSelector((state) => {
        console.log(state.videoReducer);
        const videoData = state.videoReducer.data.map((item) => {
            const formattedTime = formatTime(item.create_time)
            return { ...item, key: item.video_id, create_time: formattedTime }
        })
        return { videoData, videoTotal: state.videoReducer.videoTotal }
    })
    const toCommunity = () => {
        nav('/community')
    }
    const toArticle = (item) => {
        console.log(item);
        nav(`/article/${item.article_id}`)
    }
    const handlerLinkLeftClick = (e) => {
        console.log(e);
        const id = e.target.id
        switch (id) {
            case 'achievement': nav('/achievement'); break;
            case 'about': nav('/about'); break;
            case 'community': nav('/community'); break;
            case 'course': nav('/course'); break;
        }
    }
    const handlerLinkRightClick = (e) => {
        console.log(e);
        const id = e.target.id
        switch (id) {
            case 'office': nav('/tool'); break;
            case 'tool': nav('/tool'); break;
            case 'personal': nav('/personal'); break;
            case 'commercial': nav('/commercial'); break;
        }
    }
    console.log(videoData);
    return (
        <div>
            <div className="home-content-top">
                <Carousel dotPosition='bottom' autoplay className='home-content-top-carousel'>
                    <div>
                        <img src={img2023_1} alt="" />
                        <h3 >活动/教学图片</h3>
                    </div>
                    <div>
                        <img src={img2023_2} alt="" />
                        <h3 >活动/教学图片</h3>
                    </div>
                    <div>
                        <img src={img2023_3} alt="" />
                        <h3 >活动/教学图片</h3>
                    </div>
                    <div>
                        <img src={img1} alt="" />
                        <h3 >活动/教学图片</h3>
                    </div>
                    <div>
                        <img src={img2} alt="" />
                        <h3 >活动/教学图片</h3>
                    </div>
                    <div>
                        <img src={img3} alt="" />
                        <h3 >活动/教学图片</h3>
                    </div>
                    <div>
                        <img src={img4} alt="" />
                        <h3 >活动/教学图片</h3>
                    </div>
                    <div>
                        <img src={img5} alt="" />
                        <h3 >活动/教学图片</h3>
                    </div>
                    <div>
                        <img src={img6} alt="" />
                        <h3 >活动/教学图片</h3>
                    </div>
                    <div>
                        <img src={img7} alt="" />
                        <h3 >活动/教学图片</h3>
                    </div>
                    <div>
                        <img src={img8} alt="" />
                        <h3 >活动/教学图片</h3>
                    </div>
                    <div>
                        <img src={img9} alt="" />
                        <h3 >活动/教学图片</h3>
                    </div>
                    <div>
                        <img src={img10} alt="" />
                        <h3 >活动/教学图片</h3>
                    </div>
                    <div>
                        <img src={img11} alt="" />
                        <h3 >活动/教学图片</h3>
                    </div>
                </Carousel>
            </div>
            <div className='home-content-articles'>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    header={<div>文章列表：共{articleTotal}条</div>}

                    renderItem={(item, index) => {
                        
                        const create_time = formatTime(item.create_time)
                        return (
                        <List.Item onClick={() => toArticle(item)}>
                            <List.Item.Meta
                                avatar={<a>{item.username}</a>}
                                title={<a >{item.article_title}</a>}
                                description={item.article_content}
                            />
                            <div style={{ color: '#ccc' }}>[{create_time}]</div>
                        </List.Item>
                    )}}
                />
                <a onClick={toCommunity} className='article-more'>更多&gt;&gt;&gt;&gt;</a>
            </div>
            <div className='link'>
                <div className='link-left'>
                    <ul onClick={(e) => handlerLinkLeftClick(e)}>
                        <li id='achievement'>
                            <Avatar style={{ color: 'rgb(24, 144, 255)', backgroundColor: '#e6f7ff' }} size={64} icon={<FundProjectionScreenOutlined />} />
                            <p> 主要成绩</p>
                        </li>
                        <li id='about'>
                            <Avatar style={{ color: '#f56a00', backgroundColor: '#e6f7ff' }} size={64} icon={<IdcardTwoTone />} />
                            <p> 个人简介</p></li>
                        <li id='community'>
                            <Avatar style={{ color: '#f56a00', backgroundColor: '#e6f7ff' }} size={64} icon={<MessageTwoTone />} />
                            <p> 交流社区</p></li>
                        <li id='course'>
                            <Avatar style={{ color: '#f56a00', backgroundColor: '#e6f7ff' }} size={64} icon={<CrownTwoTone />} />
                            <p>课程特色</p></li>
                    </ul>
                </div>
                <div className='link-right'>
                    <ul onClick={(e) => handlerLinkRightClick(e)}>
                        <li id='office'>
                            <Avatar style={{ color: 'rgb(24, 144, 255)', backgroundColor: '#e6f7ff' }}
                                size={64} icon={<ToolTwoTone />} />
                            <p>办公助手</p>
                        </li>
                        <li id='tool'>
                            <Avatar style={{ color: 'rgb(24, 144, 255)', backgroundColor: '#e6f7ff' }}
                                size={64} icon={<HeartTwoTone />} />
                            <p>休闲娱乐</p></li>
                        <li id='personal'>
                            <Avatar style={{ color: 'rgb(24, 144, 255)', backgroundColor: '#e6f7ff' }}
                                size={64} icon={<HomeTwoTone />} />
                            <p>个人中心</p></li>
                        <li id='commercial'>
                            <Avatar style={{ color: 'rgb(24, 144, 255)', backgroundColor: '#e6f7ff' }}
                                size={64} icon={<TrophyTwoTone />} />
                            <p>商务合作</p></li>
                    </ul>
                </div>
            </div>
            <div className='home-content-video'>
                <p className='home-video-title'>课堂学员视频分享：共{videoTotal}个</p>
                <hr />
                <div>
                    <Row
                        style={{ margin: '20px 0' }}
                    >
                        {videoData.length===0 ?
                            <p className='home-video-alert'>目前还未上传任何视频！</p> : videoData.map((item) => {
                                const formattedTime = formatTime(item.create_time)
                                console.log(item);
                                console.log(item.video_url);
                                return (
                                    <Col className="gutter-row" xs={12} md={6}>
                                        <video src={item.video_url} controls></video>
                                        <p>{item.video_describe}</p>
                                        <p className='video-time'>{formattedTime}</p>
                                    </Col>)
                            })
                        }
                    </Row>
                    <a onClick={toCommunity} className='article-more'>更多&gt;&gt;&gt;&nbsp;&nbsp;&nbsp;</a>
                </div>
            </div>
            <div className='policy'>
                <p>政策文件</p>

            </div>
        </div>
    )
}
export default Home