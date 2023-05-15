import ajax from "./ajax";
export const reqLogin = (username,password) => ajax('/api/login',{},{username,password},'POST')
export const getUserInfo = (headers)=> ajax('/info/user',headers,{},'GET')