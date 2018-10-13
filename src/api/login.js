import Axios from '@/util/request'
// 获取验证码
const baseUrl = 'http://dkcs.zhongic.com'
export const getCode = data => Axios({
  url: baseUrl+'/tuserLoginInfo/sendSms',
  method: 'post',
  data
})