
import { Descriptions,Image } from 'antd';
import wx from './assert/wx.jpg'
function Commercial(params) {
    return (
        <Descriptions title="简 介：">
            <Descriptions.Item label="工作室">胡子工作室</Descriptions.Item>
            <Descriptions.Item label="联系电话">17607495289</Descriptions.Item>
            <Descriptions.Item label="地 址">飞马路一巷17号</Descriptions.Item>
            <Descriptions.Item label="擅长后台领域">JAVA，Spring，nodejs，express</Descriptions.Item>
            <Descriptions.Item label="擅长前端领域">React，Vue，微信小程序，IOS，AndroidAPP，Uniapp</Descriptions.Item>
            <Descriptions.Item label="业务范围">承接网页制作、网站设计、后台管理系统、服务器开发、大中小型企业级项目</Descriptions.Item>
            <Descriptions.Item label="微信号"><Image style={{width:'200px'}} src={wx}></Image></Descriptions.Item>
        </Descriptions>
    )
}
export default Commercial