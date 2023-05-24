import ajax from "./ajax";
//登录
export const reqLogin = (username,password) => ajax('/api/login',{},{username,password},'POST')
//获取验证码
export const getCaptcha = ()=> ajax('/api/captcha',{},{},'GET')
//注册用户
export const regUser = (data)=>ajax('/api/reguser',{},data,'POST')
//获取用户信息
export const getUserInfo = (headers)=> ajax('/info/user',headers,{},'GET')
//更新用户
export const updateUser = (headers,data)=>ajax('/info/updateuser',headers,data,'POST')


//文章类
// 添加文章
export const addAticle = (headers,data)=>ajax('/article/addArticle',headers,data,'POST')
//上传图片
export const uploadImg = (headers,file)=>ajax('/api/uploadImg',headers,file,'POST')