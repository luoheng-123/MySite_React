import { useSelector } from "react-redux"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { Button ,Popover} from 'antd'
import { RollbackOutlined } from '@ant-design/icons'
import './article.css'

const content = (
    <div>
        <p>点击跳转到文章管理页</p>
    </div>
);
function Article(params) {
    const location = useLocation()
    const nav = useNavigate()
    const { article_id } = useParams()
    console.log(article_id);
    const article = useSelector((state) => {
        console.log(state.userArticleReducer);
        const data = state.userArticleReducer.data
        const result = data.find((item) => {
            return item.article_id === parseInt(article_id)
        })
        console.log(result);
        return result
    }
    )
    console.log(article);
    // 将图片字符串解析成html
    // const img = item.article_content.match(/<img\b[^>]*>/g) || ['<span>无图片</span>'];
    // const content = parser.parseFromString(article.article_content, 'text/html').body.firstChild
    // console.log(content);
    const createContent = () => {
        return { __html: article.article_content }
    }
    const createTitle = () => {
        return { __html: article.article_title }
    }
    const onClick = () => {
        // 拿到之前的路径的，往会跳即可
        console.log(location);
        nav(-1)
        // nav('/personal/papermanagement')

    }
    const handleShare = async () => {
        try {
          await navigator.share({
            title: '分享标题',
            text: '分享文本',
            url: '分享链接'
          });
          console.log('分享成功');
        } catch (error) {
          console.error('分享失败', error);
        }
      };
    return (
        <>
            <Popover  title="点击跳转到文章管理页">
                <div className="floating-button" onClick={onClick}>
                    <Button type="primary" shape="circle" icon={<RollbackOutlined />} />

                </div>
            </Popover>
            <div className="article-title" dangerouslySetInnerHTML={createTitle()}></div>
            {/* <button onClick={handleShare}>点击分享</button> */}
            <div className="article-content">

                <div dangerouslySetInnerHTML={createContent()}></div>
            </div>
        </>
    )

}

export default Article