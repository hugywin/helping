
export default {
  /**
   * 把日期字符串转成日期对象
   * @example dateUtil.getDate('2011-09-09 12:12:12')
   * @param {String} dateStr 时期字符串，只支持国内日期格式
   * @example 如2011-6-12 12:15:20【必选】
   * @return {Date} 转化后时间对象
   */
  getDate: function(input) {
      var str,
          date,
          time;
      str = input;
      date = str[0].split(/[\-\/]/);
      time = str[1] ? str[1].split(':') : [0, 0, 0];
      return new Date(date[0], date[1] - 1, date[2], time[
          0], time[1], time[2] ? time[2] : 0);
  },

  /**
   * 日期格式化
   * @example dateUtil.format(new Date(), 'yyyy-MM-dd hh:mm')
   * @param  {[type]} date [日期对象]
   * @param  {[type]} fmt  [格式]
   * @return {[type]}      [日期字符串]
   */
  format: function(date, fmt) {
      date = this._getDate(date);
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
  },

  /**
   * 合并日期时间
   * @param  {[type]} date [日期]
   * @param  {[type]} time [时间]
   * @return {[type]}      [日期时间]
   */
  mergeDateTime: function(date, time) {
      return date + ' ' + time;
  },

  /**
   * 判断是否为当天
   * @param  {[type]} date       [日期]
   * @param  {[type]} serverDate [服务器日期]
   * @return {[type]}            [布尔值]
   */
  isToday: function(date, todayDate) {
      return this.compare(date, todayDate) == '0' ? true :
          false;
  },

  /**
   * 判断是否为昨天
   * @param  {[type]} date       [日期]
   * @param  {[type]} serverDate [服务器日期]
   * @return {[type]}            [布尔值]
   */
  isFriday: function(date) {
      var week = this.getDate(date).getDay();
      if (week == 5) {
          return true;
      }
      return false;
  },

  /**
   * 判断是否为周末
   * @param  {[type]} date [日期]
   * @return {[type]}      [布尔值]
   */
  isWeekend: function(date) {
      var week = this.getDate(date).getDay();
      if (week == 0 || week == 6) {
          return true;
      }
      return false;
  },

  /**
   * 一周第一天
   */
  getWeekFirstDay: function(date) {
      var week = this.getDate(date).getDay(),
          res = '';
      if (week == 1 || week == 2 || week == 3 || week == 4 || week == 5 || week == 6) {
          res = dateUtil.getDisDate(date, -(week - 1));
      } else if (week == 0) {
          res = dateUtil.getDisDate(date, -6);
      }

      return res;
  },

  /**
   * 一周最后一天
   */
  getWeekLastDay: function(date) {
      var week = this.getDate(date).getDay(),
          res = '';

      return dateUtil.getDisDate(date, (7 - week) % 7);
  },

  /**
   * 日期比较
   * @param  {[type]} date1 [日期1]
   * @param  {[type]} date2 [日期2]
   * @return {[type]}       [string]
   */
  compare: function(date1, date2) {
      date1 = this._getDate(date1);
      date2 = this._getDate(date2);
      var time1 = date1.getTime(),
          time2 = date2.getTime();
      if (time1 > time2) {
          return '1';
      } else if (time1 < time2) {
          return '-1';
      } else {
          return '0';
      }
  },

  /**
   * 转换成双数
   */
  toTwoNumber: function(num) {
      num = parseInt(num, 10);
      if (num < 10) {
          return '0' + num;
      } else {
          return num;
      }
  },

  /**
   * 获取当前pc时间
   * @param  {[type]} fmt  [格式]
   */
  newDate: function(fmt) {
      var date = new Date();
      return this.format(date, fmt);
  },

  /**
   * 距离date日期的day的日期
   * 返回日期对象 默认返回 2015-01-01
   * @return {[type]} [日期对象]
   */
  getDisDate: function(date, day, fmt) {
      var current = this._getDate(date);
      var disDate = current.getTime() + day * 24 * 60 *
          60 * 1000;
      var resultDate = fmt ? this.format(new Date(disDate),
          fmt) : this.format(new Date(disDate),
          "yyyy-MM-dd");
      return resultDate;
  },

  /**
   * 距离date日期的day的日期
   * 返回日期对象 默认返回 2015-01-01 hh:mm:ss
   * @return {[type]} [日期对象]
   */
  getDisAllDate: function(date, day, fmt) {
      var current = this._getDate(date);
      var disDate = current.getTime() + day * 24 * 60 *
          60 * 1000;
      var resultDate = fmt ? this.format(new Date(disDate),
          fmt) : this.format(new Date(disDate),
          "yyyy-MM-dd hh:mm:ss");
      return resultDate;
  },

  /**
   * [内部方法] 返回日期对象
   * @return {[type]} [日期对象]
   */
  _getDate: function(date) {
      // if ($.type(date) == 'string') {
      //     return dateUtil.getDate(date);
      // }
      return date;
  },

  /**
   * 计算日期差
   * @param  {[type]} checkInDate  [开始日期]
   * @param  {[type]} checkOutDate [结束日期]
   * @return {[type]}              [相差天数]
   */
  daysDiff: function(startDate, endDate) {
      var aDate, oDate1, oDate2, iDays;
      aDate = startDate.split(' ')[0].split("-");
      oDate1 = new Date(aDate[0], aDate[1] - 1, aDate[2]);
      aDate = endDate.split(' ')[0].split("-");
      oDate2 = new Date(aDate[0], aDate[1] - 1, aDate[2]);
      iDays = parseInt(Math.abs(oDate2 - oDate1) / 1000 /
          60 / 60 / 24);

      return iDays;
  },

  /**
   * 计算日期差
   * @param  {[type]} checkInDate  [开始日期]
   * @param  {[type]} checkOutDate [结束日期]
   * @return {[type]}              [相差时分]
   */
  hoursDiff: function(startDate, endDate) {
      var sDate, eDate, oDate1, oDate2, hour;
      sDate = dateUtil._getDate(startDate);
      eDate = dateUtil._getDate(endDate);
      hour = parseFloat(Math.abs(sDate - eDate) / 1000 /
          60 / 60);
      return hour;
  },

  /**
   * 计算日期差(用于天数计算)
   * @param  {[type]} checkInDate  [开始日期]
   * @param  {[type]} checkOutDate [结束日期]
   * @return {[type]}              [相差晚数]
   */
  nightsDiff: function(startDate, endDate) {
      var aDate, oDate1, oDate2, iDays;
      aDate = startDate.split(' ')[0].split("-");
      oDate1 = new Date(aDate[0], aDate[1] - 1, aDate[2]);
      aDate = endDate.split(' ')[0].split("-");
      oDate2 = new Date(aDate[0], aDate[1] - 1, aDate[2]);
      iDays = parseInt(Math.abs(oDate2 - oDate1) / 1000 /
          60 / 60 / 24);

      if (iDays === 0) {
          iDays = 1;
      }

      return iDays;
  },

  /**
   * @function 星期几的返回
   * @params date：date日期对象
   * @return {[str]} [星期一]
   */
  getWeek: function(date) {
      var date = this._getDate(date);
      var week = ['星期日', '星期一', '星期二', '星期三', '星期四',
          '星期五', '星期六'
      ];
      var day = date.getDay();
      return week[day];
  },

  /**
   * [获取当前月份的第一天]
   */
  getMonthFirstDay: function(date) {
      var curYear = date.split('-')[0];
      var curMonth = date.split('-')[1];
      return dateUtil.format(new Date(curYear, curMonth - 1, 1), 'yyyy-MM-dd'); // 获取当前月的第一天
  },

  /**
   * [获取当前月份的最后一天]
   * @return {[type]} [description]
   */
  getMonthLastDay: function(date) {
      var curYear = date.split('-')[0];
      var curMonth = date.split('-')[1];
      var new_year = curYear; // 取当前年份
      var new_month = curMonth++; // 取下个月的第一天
      if (curMonth > 12) {
          new_month -= 12;
          new_year++;
      };
      var firstDate = new Date(new_year, new_month, 1);
      return dateUtil.format((new Date(firstDate.getTime() - 1000 * 60 * 60 * 24)), 'yyyy-MM-dd'); //获取当月最后一天日期
  },


  /**
   * @function 星期几的返回
   * @params date：date日期对象
   * @return {[str]} [星期一]
   */
  getWeeks: function(date) {
      var date = this._getDate(date);
      var week = ['日', '一', '二', '三', '四',
          '五', '六'
      ];
      var day = date.getDay();
      return week[day];
  },

  toTwoNumber: function(num) {
      num = parseInt(num, 10);
      if (num < 10) {
          return '0' + num;
      } else {
          return num;
      }
  },


  /**
   * 判断连续日期,并且ci是今天（用于房态单元格选中是否同一stay）
   * dateList: [yyyy-MM-dd]
   * return: 是否是连续日期
   **/
  isCheckInToday: function(dateList) {
      var lastDate = '',
          len = dateList.length,
          dates = dateList.sort();
      if (len == 0) return true;
      if (len == 1) {
          var isToday = this.isToday(dates[0], this.newDate('yyyy-MM-dd'));
          return isToday;
      }

      // 最小日期
      lastDate = dates[0];
      var isToday = this.isToday(lastDate, this.newDate('yyyy-MM-dd'));
      if (!isToday) {
          return false;
      }

      // 遍历日期，是否连续
      for (var i = 1; i < len; i++) {
          if (this.daysDiff(lastDate, dates[i]) != 1) {
              return false;
          }
          lastDate = dates[i];
      }
      return true;
  },

  /**
   * 加0
   */
  addZero: function(n) {
      return n < 10 ? '0' + n : n;
  },

  /**
   * 传入日期时间格式, 获得毫秒数
   * yy-mm-dd必传, HH:ii:ss可选
   */
  getMilliseconds: function(t) {
      var dArr = t.split(' '),
          dateArr = dArr[0].split('-'),
          timeArr = [];

      if (dArr.length === 1) {
          return new Date(dateArr[0], dateArr[1] - 1, dateArr[2]).getTime();
      } else if (dArr.length === 2) {
          timeArr = dArr[1].split(':');

          switch(timeArr.length) {
              case 1:
                  return new Date(dateArr[0], dateArr[1] - 1, dateArr[2], timeArr[0]).getTime();
                  break;
              case 2:
                  return new Date(dateArr[0], dateArr[1] - 1, dateArr[2], timeArr[0], timeArr[1]).getTime();
                  break;
              case 3:
                  return new Date(dateArr[0], dateArr[1] - 1, dateArr[2], timeArr[0], timeArr[1], timeArr[2]).getTime();
                  break;
          }

      }
  },

  /**
   * 传入毫秒数
   * hasTime为true得到yy-mm-dd HH:ii
   * hasTime为false得到yy-mm-dd
   * 不传默认为true
   */
  getTimeString: function(t, hasTime) {
      var d = new Date(t),
          dateArr = [],
          timeArr = [];

      dateArr[0] = d.getFullYear();
      dateArr[1] = this.addZero(d.getMonth() + 1);
      dateArr[2] = this.addZero(d.getDate());
      timeArr[0] = this.addZero(d.getHours());
      timeArr[1] = this.addZero(d.getMinutes());

      if (arguments.length < 2 || hasTime) {
          return dateArr.join('-') + ' ' + timeArr.join(':');
      } else {
          return dateArr.join('-')
      }
  },

  /**
   * 获取日期时间格式信息
   * 参数格式yy-mm-dd HH:ii:ss
   * yy-mm-dd必传, HH:ii:ss可选
   */
  date: function(t) {
      var dArr = t.split(' '),
          dateArr = dArr[0].split('-'),
          timeArr = dArr[1] ? dArr[1].split(':') : [],
          self = this;

      return {

          //获取年 yy
          getYear: function() {
              return dateArr[0];
          },

          //获取月 mm
          getMonth: function() {
              return dateArr[1];
          },

          //获取天 dd
          getDate: function() {
              return dateArr[2];
          },

          //获取小时 HH
          getHour: function() {
              return timeArr.length > 0 ? timeArr[0] : '';
          },

          //获取分钟 ii
          getMinute: function() {
              return timeArr.length > 1 ? timeArr[1] : '';
          },

          //获取当天为星期几
          getDay: function() {
              var milliseconds = self.getMilliseconds(t);

              return new Date(milliseconds).getDay();
          },

          //获取yyyy-MM-dd
          getFormatDate: function() {
              return dArr[0];
          }
      }
  },

  /**
   * 或者中文星期
   * isFullWeek 是否是星期全名 比如周六 全名星期六, 简名六
   */
  getCNWeek: function (n, isFullWeek) {
      var weekObj = {
          '0': '星期日',
          '1': '星期一',
          '2': '星期二',
          '3': '星期三',
          '4': '星期四',
          '5': '星期五',
          '6': '星期六'
      }

      return isFullWeek ? weekObj[n] : weekObj[n].slice(2);
  },

  /**
   * 跳跃天数
   * 传入yy-mm-dd HH:ii或者yy-mm-dd，和天数
   * 默认跳跃一天
   */
  jumpDate: function(t, days) {
      var ms = this.getMilliseconds(t),
          days = arguments.length === 1 ? 1 : days,
          hasTime = t.indexOf(':') !== -1;

      return this.getTimeString(ms + 3600*24*1000*days, hasTime);
  },

  /**
   * 跳跃小时数
   * 默认跳跃一小时
   */
  jumpHour: function(t, hours) {
      var ms = this.getMilliseconds(t),
          hours = arguments.length === 1 ? 1 : hours;

      return this.getTimeString(ms + 3600*1000*hours);
  },

  /**
   *  跳跃月数, 默认跳跃一个月
   */
  jumpMonth: function(t, month, hasTime) {
      var d = new Date(t),
          month = arguments.length === 1 ? 1 : month,
          newD = this.getTimeString(d.setMonth(d.getMonth() + month));

      if (hasTime) {
          return newD;
      } else {
          return newD.slice(0, 10);
      }
  },

  // 获取cookie
  getCookie: function (name) {
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)) {
      return unescape(arr[2]);
    } else {
      return null;
    }
  },

  // 设置cookie
  setCookie: function(name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
  }

}
