import axios from 'axios'
//自定义一个axios实例，可以和原生的axios一起使用
const instance = axios.create({
    //该axios用来获取用户的token
    baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/'
});

// Alter defaults after instance has been created
//instance.defaults.headers.common['something'] = "hello";
export default instance;