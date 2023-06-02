import { Card, message, Table, Row, Col, Pagination } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles,getVideo } from '../../api';
import { useNavigate } from 'react-router-dom';
import { formatTime } from '../../utills/toolUtil'
import './community.css'

const columns = [
    {
        title: '文章标题',
        dataIndex: 'article_title',
        key: 'article_title',
        render: (text) => {
            // console.log(text);
            return <a>{text}</a>
        },
        sorter: (a, b) =>a.article_title.localeCompare(b.article_title) 
    },
    {
        title: '作者',
        dataIndex: 'username',
        key: 'username',
        sorter: (a, b) => a.username.localeCompare(b.username)
    },
    {
        title: '内容简介',
        dataIndex: 'article_content',
        key: 'article_content',
        ellipsis: true
    },
    {
        title: '文章分类',
        dataIndex: 'article_category',
        key: 'article_category',
    },
    {
        title: '创建时间',
        dataIndex: 'create_time',
        key: 'create_time',
        sorter: (a, b) => {
            console.log(a);
            const date1 = new Date(a.create_time);
            const date2 = new Date(b.create_time);
            return date1 - date2
        },
    },
];
function Community() {
    const nav = useNavigate()
    const { data, articleTotal } = useSelector((state) => {
        console.log(state.userArticleReducer);
        const data = state.userArticleReducer.data.map((item) => {
            const article_content = item.article_content.replace(/<[^>]+>/g, '');
            const create_time = formatTime(item.create_time)
            return { ...item,create_time, article_content, key: item.article_id }
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
    const [page, setPage] = useState(1)
    const [videoPage, setVideoPage] = useState()
    const dispatch = useDispatch();

    const userArticles = async (page) => {
        // console.log(page);
        const data = {
            pageNum: page || 1,
            pageSize: 6,
        }
        const res = await getArticles(data);
        console.log(res);
        if (res.status === 0) {
            message.success('数据获取成功')
            console.log(res);
            dispatch({ type: 'setUserArticle', val: { data: res.data, articleTotal: res.articleTotal } })
        } else {
            message.error(res.message)
        }
    }
    const handlerArticleClick = (event, record) => {
        console.log(event, record);
        // 拿要相应的文章信息
        nav(`/article/${record.article_id}`)
        // 跳转到文章页面

    }
    const handlerGetVideo = async (pageNum, pageSize=8) => {
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
    useEffect(() => {
        // 发送请求获取数据
        userArticles()
        // 存入redux中
    }, [])
    return (
        <>
            <Card className='content'>
                <Table columns={columns} dataSource={data} pagination={{
                    onChange: (page) => {
                        setPage(page)
                        // console.log(page);
                        userArticles(page)
                    },
                    pageSize: 6,
                    total: articleTotal,
                }}
                    onRow={(record) => {
                        return {
                            onClick: (event) => handlerArticleClick(event, record), // 点击行
                        };
                    }}
                />
            </Card>
            <Card className='content'>
                <div className='community-content-video'>
                    <p className='home-video-title'>课堂学员视频分享：共{videoTotal}个</p>
                    <hr />
                    <div>
                        <Row
                            style={{ margin: '20px 0' }}
                        >
                            {videoData.map((item) => {
                                const formattedTime = formatTime(item.create_time)
                                // console.log(item);
                                return (
                                    <Col className="gutter-row" xs={12} md={6}>
                                        <video key={item.key} src={item.video_url} controls></video>
                                        <p>{item.video_describe}</p>
                                        <p className='video-time'>{formattedTime}</p>
                                    </Col>)
                            })}
                        </Row>
                        <Pagination defaultCurrent={1} total={videoTotal} pageSize={8} onChange={(pageNum) => {
                            setVideoPage(pageNum)
                            // console.log(page);
                            handlerGetVideo(pageNum)
                        }} />
                    </div>
                </div>
            </Card>
        </>
    )
}
export default Community