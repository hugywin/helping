/**
* 过滤
**/
import Vue from "vue"

/**
 * 日期格式化过滤
 * @example ｜format(1450228380801, 'yyyy-MM-dd hh:mm:ss')
 * @param  {[type]} value [日期对象]
 * @param  {[type]} fmt  [格式]
 * @return {[type]}      [日期字符串]
 */
Vue.filter('format', (value, fmt) => {
  return _format(value, fmt)
})

function _format(value, fmt) {
  if (value == '' || value == null) return '--';
  let date = new Date(value);
  var o = {
      "M+": date.getMonth() + 1, // 月份
      "d+": date.getDate(), // 日
      "h+": date.getHours(), // 小时
      "m+": date.getMinutes(), // 分
      "s+": date.getSeconds(), // 秒
      "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
      "S": date.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (
      date.getFullYear() +
      "").substr(4 - RegExp.$1.length));
  for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt =
          fmt.replace(
              RegExp.$1, (RegExp.$1.length == 1) ? (o[
                  k]) : ((
                  "00" + o[k]).substr(("" + o[k])
                  .length)));
  return fmt;
}


/**
 * 距离date日期的day的日期
 * 返回日期对象 默认返回 2015-01-01 hh:mm:ss
 * @return {[type]} [日期对象]
 */
 Vue.filter('getDisAllDate', (value, day, fmt) => {
   return _getDisAllDate(value, day, fmt)
 })

function _getDisAllDate(date, day, fmt) {
    var current = new Date(date);
    var disDate = current.getTime() + day * 24 * 60 *
        60 * 1000;
    var resultDate = fmt ? _format(new Date(disDate),
        fmt) : _format(new Date(disDate),
        "yyyy-MM-dd hh:mm:ss");
    return resultDate;
}


/**
 * 计算日期差
 * @param  {[type]} checkInDate  [开始日期]
 * @param  {[type]} checkOutDate [结束日期]
 * @return {[type]}              [相差天数]
 */
 Vue.filter('daysDiff', (startDate, endDate) => {
    var aDate, oDate1, oDate2, iDays;
    aDate = startDate.split(' ')[0].split("-");
    oDate1 = new Date(aDate[0], aDate[1] - 1, aDate[2]);
    aDate = endDate.split(' ')[0].split("-");
    oDate2 = new Date(aDate[0], aDate[1] - 1, aDate[2]);
    iDays = parseInt(Math.abs(oDate2 - oDate1) / 1000 /
        60 / 60 / 24);

    return iDays;
})
