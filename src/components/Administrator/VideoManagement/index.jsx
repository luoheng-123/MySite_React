import { message, Form, Input, Button, Upload, Card, Row, Col, Pagination } from "antd"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons';
import { addVideo, removeFile, getVideo } from "../../../api";
import { formatTime } from '../../../utills/toolUtil'
import './videomanagement.css'
function Administrator(params) {
    const [fileList, setFileList] = useState([]);
    const [fileUrl, setFileUrl] = useState('')
    const [loading, setLoading] = useState(false);
    // const [videoPage, setVideoPage] = useState()
    // const dispatch = useDispatch();
    const handleChange = (info) => {
        // console.log(info);
        if (info.file.status === 'uploading') {
            setLoading(true);
        }

        if (info.file.status === 'done') {
            setLoading(false);
            console.log(info.file);
            let newFileList = [...info.fileList];
            newFileList = newFileList.map((file) => {
                if (file.response) {
                    // Component will show file.url as link
                    setFileUrl(file.response.location);
                }
                return file;
            });

        }
        setFileList(info.fileList);
    };
    console.log(fileList);
    const { videoData, videoTotal } = useSelector((state) => {
        console.log(state.videoReducer);
        const videoData = state.videoReducer.data.map((item) => {
            const formattedTime = formatTime(item.create_time)
            return { ...item, key: item.video_id, create_time: formattedTime }
        })
        return { videoData, videoTotal: state.videoReducer.videoTotal }
    })
    const handleRemove = async (info) => {
        console.log(info);
        // 发送请求删除对应路径的文件
        if (info.response.status === 0) {
            console.log(info.response.location);
            const res = await removeFile({ video_id: info.uid, location: info.url })
            if (res.status === 0) {
                message.success(res.message)
                const newFileList = fileList.filter((item) => item.uid !== res.video_id)
                setFileList(newFileList)
            } else {
                message.error(res.message)
            }
        }
    }
    const handlerGetVideo = async (pageNum = 1, pageSize = 8) => {
        const info = {
            pageNum,
            pageSize,
        }
        const res = await getVideo(info);
        console.log(res);
        if (res.status === 0) {
            message.success('数据获取成功')
            console.log(res);
            // 拿到数据后对数据进行转换，然后存入fileList中
            const { data } = res
            const videoData = data.map((item, index) => {
                return {
                    uid: item.video_id,
                    name: item.video_describe,
                    status: 'done',
                    url: item.video_url,
                    thumbUrl: item.video_url,
                    response: {
                        status: 0,
                        location: item.video_url,
                    },
                    create_time:item.create_time
                }
            })
            setFileList(videoData)
            // dispatch({ type: 'setVideoData', val: { data: res.data, videoTotal: res.videoTotal } })
        } else {
            message.error(res.message)
        }
        // console.log(res);
    }
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                Upload
            </div>
        </div>
    );
    const nav = useNavigate()
    const userInfo = useSelector((state) => {
        return state.userReducer
    })

    const [form] = Form.useForm();

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        console.log(fileUrl);
        const data = {
            role_id: userInfo.role_id,
            video_url: fileUrl,
            video_describe: values.describe
        }
        const val = await addVideo(data)
        console.log(val);
        if (val.statu === 0) message.success(val.message)
        handlerGetVideo()
    };
    useEffect(() => {
        // 如果是超级用户则进入，否则跳转到首页
        console.log(userInfo);
        if (!(userInfo.username === 'luoheng') || !(userInfo.role_id === 1)) {
            message.error('无权限访问！！')
            nav('/home')
        }
        // userArticles()
        handlerGetVideo()
    }, [])

    return (
        <div className="video-content">
            <Card >
                <div className='community-content-video'>
                    <p className='home-video-title'>课堂学员视频分享：共{videoTotal}个</p>
                    <hr />
                    <div>
                        <Row
                            style={{ margin: '20px 0' }}
                        >
                            {fileList.map((item) => {
                                const formattedTime = formatTime(item.create_time)
                                // console.log(item);
                                return (
                                    <Col className="gutter-row" xs={12} md={6}>
                                        <video src={item.url} controls></video>
                                        <p>{item.name}</p>
                                        <p className='video-time'>{formattedTime}</p>
                                    </Col>)
                            })}
                        </Row>
                        <Pagination defaultCurrent={1} total={videoTotal} pageSize={8} onChange={(pageNum) => {
                            // setVideoPage(pageNum)
                            // console.log(page);
                            handlerGetVideo(pageNum)
                        }} />
                    </div>
                </div>
            </Card>
            <Upload
                name="video"
                action="https://luoedu.club/api/uploadVideo"
                // action="/api/uploadVideo"
                listType="picture-card"
                fileList={fileList}
                onChange={handleChange}
                onRemove={handleRemove}
            >
                {fileList.length >= 20 ? null : uploadButton}
            </Upload>
            <Form
                form={form}
                name="uploadVideo"
                onFinish={onFinish}
                style={{
                    maxWidth: 600,
                    margin: '40px auto',
                    textAlign: 'center'

                }}
                scrollToFirstError
            >
                <Form.Item
                    name="describe"
                    label="视频描述"
                    rules={[
                        {
                            required: true,
                            message: '请输入视频描述!',
                            whitespace: true,
                            min: 4
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: "100% ", height: '40px' }}>
                        注册
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default Administrator