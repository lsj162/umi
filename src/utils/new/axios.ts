// import { message } from 'antd';
import axios from 'axios';
import Cookies from 'js-cookie';
// import { stringify } from 'querystring';

export const post = (url: any, data: any, config?: any) => {
  const accountToken = localStorage.getItem('accountToken');
  // const queryString = stringify({
  //   redirect: window.location.href,
  // });

  return axios
    .post(
      url,
      {
        ...data,
      },
      {
        headers: {
          token: `${accountToken}`,
        },
        ...config,
      },
    )
    .catch(function (error) {
      if (error.response.status === 401) {
        // 跳转登陆
        // window.location.href = `/user/login?${queryString}`;
      } else {
        // message.error(error.response?.data?.msg);
      }
    });
};

export const get = (url: any, config?: any) => {
  // const accountToken = localStorage.getItem('accountToken');
  const accountToken = Cookies.get('yc-account-token');
  // const accountId = Cookies.get('yc-account-id');
  // const queryString = stringify({
  //   redirect: window.location.href,
  // });

  return axios
    .get(url, {
      headers: {
        token: `${accountToken}`,
      },
      ...config,
    })
    .catch(function (error) {
      if (error.response.status === 401) {
        // 跳转登陆
        // window.location.href = `/user/login?${queryString}`;
      } else {
        // message.error(error.response?.data?.msg);
      }
    });
};
