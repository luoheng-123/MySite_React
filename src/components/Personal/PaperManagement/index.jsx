
import { Space, Button, Card, message, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import './paperManagement.css'
import { useDispatch, useSelector } from 'react-redux';
import { getUserArticle,delUserArticle } from '../../../api';
import { useNavigate } from 'react-router-dom';

// 先获取当前页的所有数据，存入状态中
// 进行展示即可
/**
const data = Array.from({
  length: 23,
}).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i}`,
  avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));
 */




const token = localStorage.getItem('token')

// const parser = new DOMParser();
const PaperManagement = () => {
  const headers = {
    'Authorization': token
  }
  const handlerEider = (e,record) => {
    // nav('/personal/paperpublish')
    // console.log(e);
    e.stopPropagation()//阻止事件冒泡
    // e.proventDefault()//阻止默认事件
    // console.log(record);
    nav(`/personal/updatePaper/${record.article_id}`)
  }
  const handlerDelet = async(e,record) => {
    e.stopPropagation()
    // 发送网络请求del文章
    // 提示信息
    // 更新页面
    const res = await delUserArticle(headers,{article_id:record.article_id})
    if(res.status === 0){
      message.success(res.message)
      userArticles(page)
    }else{
      message.error(res.message)
    }
  }
  const columns = [
    {
      title: '文章标题',
      dataIndex: 'article_title',
      key: 'article_title',
      render: (text) => {
        return <a>{text}</a>
      },
    },
    {
      title: '内容简介',
      dataIndex: 'article_content',
      key: 'article_content',
    },
    {
      title: '文章分类',
      dataIndex: 'article_category',
      key: 'article_category',
    },
    {
      title: '操作',
      key: 'action',
      render: (e, record) => {
        console.log(record);
        return (
          <Space size="middle">
            <a onClick={(e) => handlerEider(e,record)}>修改 {record.name}</a>
            <a onClick={(e) => handlerDelet(e,record)}>删除</a>
          </Space>)
      },
    },
  ];

  const { userInfo } = useSelector((state) => (
    { userInfo: state.userReducer }
  ))
  const { data, articleTotal } = useSelector((state) => {
    console.log(state.userArticleReducer);
    const data = state.userArticleReducer.data.map((item) => {
      const article_content = item.article_content.replace(/<[^>]+>/g, '');


      return { ...item, article_content, key: item.article_id }
    })
    return { data, articleTotal: state.userArticleReducer.articleTotal }
  })



  const [page, setPage] = useState()
  const dispatch = useDispatch();
  const userArticles = async (page) => {
    // console.log(page);

    if (!userInfo.role_id) {
      nav('/home')
    }
    const data = {
      role_id: userInfo.role_id,
      pageNum: page || 1,
      pageSize: 6,
    }
    
    const res = await getUserArticle(headers, data);
    console.log(res);
    if (res.status === 0) {
      message.success('数据获取成功')
      console.log(res);
      dispatch({ type: 'setUserArticle', val: { data: res.data, articleTotal: res.articleTotal } })
    } else {
      message.error(res.message)
    }
  }


  useEffect(() => {
    // 发送请求获取数据
    userArticles(page)
    // 存入redux中
  }, [])
  const nav = useNavigate()
  console.log(data);
  const handlerArticleClick = (event, record) => {
    console.log(record);
    // 拿要相应的文章信息
    nav(`/article/${record.article_id}`)
    // 跳转到文章页面
  }



  return (
    <Card>
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
  )


};
export default PaperManagement;