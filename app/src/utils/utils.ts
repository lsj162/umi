export default {
  IsPC() {
    // 默认确认是PC
    let flag = true;
    const userAgentInfo = navigator.userAgent;
    const Agents = [
      'Android',
      'iPhone',
      'SymbianOS',
      'Windows Phone',
      'iPad',
      'iPod',
      'NokiaN9',
    ];

    for (let v = 0; v < Agents.length; v += 1) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  },

  // 判断微信，切不是微信电脑版本
  is_weixin() {
    const ua = navigator.userAgent.toLowerCase();

    const bool =
      ua.match(/MicroMessenger/i) === 'micromessenger' &&
      ua.match(/mobile/i) === 'mobile';

    return bool;
  },
};
