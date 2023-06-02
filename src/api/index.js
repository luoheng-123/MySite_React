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
//获取所有用户信息
export const getAllUsers = (headers,data)=>ajax('/info/getAllUsers',headers,data,'POST')
//删除用户
export const delUser = (headers,data)=>ajax('/info/delUser',headers,data,'POST')


//文章类
// 添加文章
export const addAticle = (headers,data)=>ajax('/article/addArticle',headers,data,'POST')
// 更新文章
export const updateAticle = (headers,data)=>ajax('/article/updateAticle',headers,data,'POST')
// 更新文章
export const delUserArticle = (headers,data)=>ajax('/article/delUserAticle',headers,data,'POST')
//获取用户指定页文章
export const getUserArticle = (headers,data)=> ajax('/article/getUserArticle',headers,data,'GET')
//上传图片
export const uploadImg = (headers,file)=>ajax('/api/uploadImg',headers,file,'POST')
//添加视频记录
export const addVideo = (file)=>ajax('/api/addVideo',{},file,'POST')
//删除文件
export const removeFile = (file)=>ajax('/api/removeFile',{},file,'GET')


//获取用户指定页文章
export const getOnePageArticles = (data)=> ajax('/home/article/getOnePageArticles',{},data,'GET')
//获取指定页文章
export const getArticles = (data)=> ajax('/home/article/getArticles',{},data,'GET')
//获取视频记录
export const getVideo = (info)=>ajax('/home/getVideo',{},info,'GET')