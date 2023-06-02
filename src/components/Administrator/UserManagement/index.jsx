
import { Space, Card, message, Table, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import './userManagement.css'
import { getAllUsers, delUser,removeFile } from '../../../api';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { formatTime } from '../../../utills/toolUtil';



const token = localStorage.getItem('token')
function UserManagement(params) {
    const headers = {
        'Authorization': token
    }
    const nav = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [record, setRecord] = useState(false);
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [usersNum, setUsersNum] = useState(1)
    const { userInfo } = useSelector((state) => (
        { userInfo: state.userReducer }
    ))
    const handlerDelet = (e, item) => {
        e.stopPropagation()
        // 发送网络请求del文章
        // 提示信息
        // 更新页面
        console.log(item);
        setRecord(item)
        showModal()
    }
    const handlerAllUsers = async (page) => {
        // console.log(page);

        if (!userInfo.role_id) {
            nav('/home')
        }
        const data = {
            // role_id: userInfo.role_id,
            pageNum: page || 1,
            pageSize: 6,
        }

        const res = await getAllUsers(headers, data);
        console.log(res);
        if (res.status === 0) {
            message.success('数据获取成功')
            console.log(res);
            const results = res.data.map((item) => {
                const time = formatTime(item.create_time)
                return {
                    username: item.username,
                    role_id: item.role_id,
                    avatar_img: item.avatar_img,
                    create_time: time,
                }
            })
            setData(results)
            setUsersNum(res.total[0].total)
        } else {
            message.error(res.message)
        }
    }
    useEffect(() => {
        // 发送请求获取数据
        handlerAllUsers(page)
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
        },
        {
            title: '用户Id',
            dataIndex: 'role_id',
            key: 'role_id',
        },
        {
            title: '用户头像',
            dataIndex: 'avatar_img',
            key: 'avatar_img',
        },
        {
            title: '创建时间',
            dataIndex: 'create_time',
            key: 'create_time',
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

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = async() => {
        setIsModalOpen(false);
        const res = await delUser(headers, { role_id: record.role_id })
        const delRes = await removeFile({ location: record.avatar_img,video_id:'' })
        console.log(delRes);
        if (res.status === 0) {
            message.success(res.message)
            const resData  = data.filter((item)=>item.role_id!==res.role_id)
            setData(resData)
            // userArticles(page)
        } else {
            message.error(res.message)
        }
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Card>
                <Table columns={columns} dataSource={data} pagination={{
                    onChange: (page) => {
                        setPage(page)
                        // console.log(page);
                        handlerAllUsers(page)
                    },
                    pageSize: 6,
                    total: usersNum,
                }}
                />
            </Card>
            <Modal title="删除用户！" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>删除该用户后将不可恢复，确定删除？</p>
            </Modal>
        </>
    )
}
export default UserManagement