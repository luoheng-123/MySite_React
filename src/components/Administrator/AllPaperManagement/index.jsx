
import { Space, Card, message, Table, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import './allPaperManagement.css'
import { getArticles, removeFile, delUserArticle } from '../../../api';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { formatTime } from '../../../utills/toolUtil';


const token = localStorage.getItem('token')
function PaperManagement(params) {

    const headers = {
        'Authorization': token
    }
    const nav = useNavigate()
    const dispatch = useDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [record, setRecord] = useState(false);
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [articlesNum, setArticlesNum] = useState(1)
    const { userInfo } = useSelector((state) => (
        { userInfo: state.userReducer }
    ))

    const handlerAllUsersArticle = async (page) => {
        // console.log(page);

        if (!userInfo.role_id) {
            nav('/home')
        }
        const data = {
            // role_id: userInfo.role_id,
            pageNum: page || 1,
            pageSize: 20,
        }

        const res = await getArticles(data);
        // console.log(res);
        if (res.status === 0) {
            message.success('数据获取成功')
            console.log(res);
            dispatch({ type: 'setUserArticle', val: { data: res.data, articleTotal: res.articleTotal } })
            const results = res.data.map((item) => {
                const time = formatTime(item.create_time)
                return {
                    key: item.article_id,
                    // article_id: item.article_id,
                    username: item.username,
                    article_title: item.article_title,
                    article_category: item.article_category,
                    article_content: item.article_content,
                    article_category: item.article_category,
                    create_time: time,
                }
            })
            setData(results)
            setArticlesNum(res.articleTotal)
        } else {
            message.error(res.message)
        }
    }

    useEffect(() => {
        // 发送请求获取数据
        handlerAllUsersArticle(page)
        // 存入redux中
    }, [])

    const columns = [
        {
            title: '用户名',
            dataIndex: 'username',
            key: 'username',
            render: (text) => {
                return <a>{text}</a>
            },
            sorter: (a, b) => a.username.length - b.username.length,
        },
        {
            title: '文章标题',
            dataIndex: 'article_title',
            key: 'article_title',
        },
        {
            title: '文章分类',
            dataIndex: 'article_category',
            key: 'article_category',
        },
        {
            title: '文章内容',
            dataIndex: 'article_content',
            key: 'article_content',
            ellipsis: true
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
        {
            title: '操作',
            key: 'action',
            render: (e, item) => {
                console.log(item);
                return (
                    <Space size="middle">
                        {/* <a onClick={(e) => handlerEider(e,record)}>修改 {record.name}</a> */}
                        <a onClick={(e) => handlerDelet(e, item)}>删除</a>
                    </Space>)
            },
        },
    ];
    const handlerDelet = (e, item) => {
        e.stopPropagation()
        // 发送网络请求del文章
        // 提示信息
        // 更新页面
        console.log(item);
        setRecord(item)
        showModal()
    }
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = async () => {
        setIsModalOpen(false);
        // 先删除文章
        const res = await delUserArticle(headers, { article_id: record.article_id })
        // 再删除文章中所有的图片，给的对象应该是一个数组
        const delRes = await removeFile({ location: record.avatar_img, video_id: '' })
        console.log(delRes);
        if (res.status === 0) {
            message.success(res.message)
            // userArticles(page)
        } else {
            message.error(res.message)
        }
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handlerArticleClick = (event, record) => {
        console.log(record);
        // 拿要相应的文章信息
        nav(`/article/${record.key}`)
        // 跳转到文章页面
      }
    return (
        <>
            <Card>
                <Table columns={columns} dataSource={data} pagination={{
                    onChange: (page) => {
                        setPage(page)
                        // console.log(page);
                        handlerAllUsersArticle(page)
                    },
                    pageSize: 6,
                    total: articlesNum,
                }}
                    onRow={(record) => {
                        return {
                            onClick: (event) => handlerArticleClick(event, record), // 点击行
                        };
                    }}
                />
            </Card>
            <Modal title="删除用户！" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>删除该用户后将不可恢复，确定删除？</p>
            </Modal>
        </>
    )
}
export default PaperManagement