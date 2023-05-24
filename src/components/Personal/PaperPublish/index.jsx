

import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Form, Input, Button, Select, message } from 'antd'


import 'react-quill/dist/quill.snow.css';


import './paperPublish.css'
import { useSelector } from 'react-redux';
import { addAticle, uploadImg } from '../../../api';
import { useNavigate } from 'react-router-dom';


//图片上传
const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('只能上传 JPG/PNG 格式文件!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('图片必须小于 2MB!');
    }
    return isJpgOrPng && isLt2M;
};
const { Option } = Select;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,

        },
        sm: {
            span: 3,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 12,
        },
    },
};
const tailFormItemLayout = {
    labelCol: {
        xs: {
            span: 24,

        },
        sm: {
            span: 6,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 6,
        },
    },
};
function PaperPublish() {
    const nav = useNavigate(null)
    const { userInfo } = useSelector((state) => ({
        userInfo: state.userReducer
    }))
    const token = localStorage.getItem('token')

    //富文本框编辑器
    const [editorContent, setEditorContent] = useState(false)
    const handleEditorChange = (content, editor) => {
        // console.log('Content was updated:', content);
        setEditorContent(content)
    };

    const handleImageUpload = async (blobInfo, success, failure) => {
        console.log(blobInfo, success);
        const formData = new FormData();
        formData.append('img', blobInfo.blob(), blobInfo.filename());
        const headers = {
            'Content-Type': 'multipart/form-data',
        }
        // 在index.html文件中引入tinymce.min.js（一定要引入否则图片上传成功，调用success方法会报错）
        // 发送图片上传请求到服务器
        // 在成功回调中，调用success方法并传入图片URL
        // 在失败回调中，调用failure方法
        // 请根据您的项目和后端实现来处理图片上传
        const res = await uploadImg(headers, formData)
        console.log(res.location);
        if (res.status === 0) {
            success(res.location)
        } else {
            failure(res.message)
        }
    };

    const onFinish = async (values) => {
        // console.log('Received values of form: ', values);
        const headers = {
            'Authorization': token,
        }

        // console.log(editorContent);
        const data = {
            role_id: userInfo.role_id,
            username: userInfo.username,
            article_title: values.title,
            article_category: values.category,
            article_content: editorContent
        }
        const res = await addAticle(headers, data);
        console.log(res);
        if(res.status===0){
            // 发表成功，跳转
            message.success('发表成功！！！')
            setTimeout(() => {
                nav('/personal/papermanagement')
            }, 800);
        }else{
            // 发表失败，保持不变
            message.error(res.message)
        }
    }
    const [form] = Form.useForm();

    return (
        <>
            {/* 我是paperPublish */}
            <div className='paperPublish-content'>

                <Form
                    {...formItemLayout}
                    form={form}
                    name="paper-publish"
                    onFinish={onFinish}
                    style={{
                        width: '100%',
                        margin: '40px auto',
                        textAlign: 'center',
                    }}
                    scrollToFirstError
                >
                    <Form.Item
                        name="category"
                        label="类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别"
                        rules={[
                            {
                                required: true,
                                message: '请选择所属类别！！',
                            },
                        ]}
                        initialValue='diary'
                    >
                        <Select placeholder="请选择所属类别" >
                            <Option value="diary">学习日记</Option>
                            <Option value="trade">商品交易</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="title"
                        label="文章标题："
                        rules={[
                            {
                                required: true,
                                message: '请输入文章标题！',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Editor
                        style={{ marginLeft: '30px' }}
                        apiKey="iy9ay7mlubq80bcyld0oh0q4qvmt34ebio5tw94y57798dvh"
                        init={{
                            selector: '#tinydemo',
                            language: 'zh_CN',
                            convert_urls: false,
                            height: 500,
                            width: '90%',
                            plugins: 'image',
                            toolbar: 'image',
                            images_upload_handler: handleImageUpload,
                            // 其他配置项
                        }}
                        onEditorChange={handleEditorChange}
                    />

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" className='paperPublish-formBtn'>
                            发表
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}
export default PaperPublish