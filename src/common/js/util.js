var SIGN_REGEXP = /([yMdhsm])(\1*)/g;
var DEFAULT_PATTERN = 'yyyy-MM-dd';
function padding(s, len) {
    var len = len - (s + '').length;
    for (var i = 0; i < len; i++) { s = '0' + s; }
    return s;
};

export default {
    getQueryStringByName: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        var context = "";
        if (r != null)
            context = r[2];
        reg = null;
        r = null;
        return context == null || context == "" || context == "undefined" ? "" : context;
    },
    formatDate: {
        format: function (date, pattern) {
            pattern = pattern || DEFAULT_PATTERN;
            return pattern.replace(SIGN_REGEXP, function ($0) {
                switch ($0.charAt(0)) {
                    case 'y': return padding(date.getFullYear(), $0.length);
                    case 'M': return padding(date.getMonth() + 1, $0.length);
                    case 'd': return padding(date.getDate(), $0.length);
                    case 'w': return date.getDay() + 1;
                    case 'h': return padding(date.getHours(), $0.length);
                    case 'm': return padding(date.getMinutes(), $0.length);
                    case 's': return padding(date.getSeconds(), $0.length);
                }
            });
        },
        parse: function (dateString, pattern) {
            var matchs1 = pattern.match(SIGN_REGEXP);
            var matchs2 = dateString.match(/(\d)+/g);
            if (matchs1.length == matchs2.length) {
                var _date = new Date(1970, 0, 1);
                for (var i = 0; i < matchs1.length; i++) {
                    var _int = parseInt(matchs2[i]);
                    var sign = matchs1[i];
                    switch (sign.charAt(0)) {
                        case 'y': _date.setFullYear(_int); break;
                        case 'M': _date.setMonth(_int - 1); break;
                        case 'd': _date.setDate(_int); break;
                        case 'h': _date.setHours(_int); break;
                        case 'm': _date.setMinutes(_int); break;
                        case 's': _date.setSeconds(_int); break;
                    }
                }
                return _date;
            }
            return null;
        },
        //获取当前日期yy-mm-dd
        //date 为时间对象
        getDateStr: function(date) {
            var year = "";
            var month = "";
            var day = "";
            var now = date;
            year = ""+now.getFullYear();
            if((now.getMonth()+1)<10){
                month = "0"+(now.getMonth()+1);
            }else{
                month = ""+(now.getMonth()+1);
            }
            if((now.getDate())<10){
                day = "0"+(now.getDate());
            }else{
                day = ""+(now.getDate());
            }
            return year+"-"+month+"-"+day;
        },
        //转换毫秒数到时间字符串(yyyy-mm-dd hh:mm:ss)
        getDateTimeStrFromNum: function(num) {
            var d = new Date();
            d.setTime(num);
            return this.format(d,'yyyy-MM-dd hh:mm:ss');
        },

        /**  
        * 获得相对当前周AddWeekCount个周的起止日期  
        * AddWeekCount为0代表当前周   为-1代表上一个周   为1代表下一个周以此类推
        * **/  
        getWeekStartAndEnd: function(AddWeekCount) {  
            let that_ = this;
            //起止日期数组    
            var startStop = new Array();  
            //一天的毫秒数    
            var millisecond = 1000 * 60 * 60 * 24;
            //获取当前时间    
            var currentDate = new Date();
            //相对于当前日期AddWeekCount个周的日期
            currentDate = new Date(currentDate.getTime() + (millisecond * 7*AddWeekCount));
            //返回date是一周中的某一天
            var week = currentDate.getDay();
            //返回date是一个月中的某一天    
            var month = currentDate.getDate();
            //减去的天数    
            var minusDay = week != 0 ? week - 1 : 6;
            //获得当前周的第一天    
            var currentWeekFirstDay = new Date(currentDate.getTime() - (millisecond * minusDay));
            //获得当前周的最后一天
            var currentWeekLastDay = new Date(currentWeekFirstDay.getTime() + (millisecond * 6));
            //添加至数组    
            startStop.push(that_.getDateStr(currentWeekFirstDay));
            startStop.push(that_.getDateStr(currentWeekLastDay));
        
            return startStop;
        },
        /**  
        * 获得相对当前周AddWeekCount个周的起止日期  
        * AddWeekCount为0代表当前周   为-1代表上一个周   为1代表下一个周以此类推
        * **/  
        getWeekStartAndEndDateTime: function(AddWeekCount) {  
            let that_ = this;
            //起止日期数组    
            var startStop = new Array();  
            //一天的毫秒数    
            var millisecond = 1000 * 60 * 60 * 24;
            //获取当前时间    
            var currentDate = new Date();
            //相对于当前日期AddWeekCount个周的日期
            currentDate = new Date(currentDate.getTime() + (millisecond * 7*AddWeekCount));
            //返回date是一周中的某一天
            var week = currentDate.getDay();
            //返回date是一个月中的某一天    
            var month = currentDate.getDate();
            //减去的天数    
            var minusDay = week != 0 ? week - 1 : 6;
            //获得当前周的第一天    
            var currentWeekFirstDay = new Date(currentDate.getTime() - (millisecond * minusDay));
            //获得当前周的最后一天
            var currentWeekLastDay = new Date(currentWeekFirstDay.getTime() + (millisecond * 6));
            //添加至数组    
            startStop.push(currentWeekFirstDay);
            startStop.push(currentWeekLastDay);
        
            return startStop;
        },

        /**  
        * 获得相对当月AddMonthCount个月的起止日期
        * AddMonthCount为0 代表当月 为-1代表上一个月  为1代表下一个月 以此类推
        * ***/
        getMonthStartAndEnd: function(AddMonthCount) {
            let that_ = this;
            //起止日期数组
            var startStop = new Array();  
            //获取当前时间
            var currentDate = new Date(); 
            var month=currentDate.getMonth()+AddMonthCount;
            if(month<0){
                var n = parseInt((-month)/12); 
                month += n*12;
                currentDate.setFullYear(currentDate.getFullYear()-n);
            }
            currentDate = new Date(currentDate.setMonth(month));
            //获得当前月份0-11    
            var currentMonth = currentDate.getMonth();
            //获得当前年份4位年    
            var currentYear = currentDate.getFullYear();
            //获得上一个月的第一天    
            var currentMonthFirstDay = new Date(currentYear, currentMonth,1);
            //获得上一月的最后一天    
            var currentMonthLastDay = new Date(currentYear, currentMonth+1, 0);
            //添加至数组    
            startStop.push(that_.getDateStr(currentMonthFirstDay));
            startStop.push(that_.getDateStr(currentMonthLastDay));
            //返回    
            return startStop;
        },
        /**  
        * 获得相对当月AddMonthCount个月的起止日期
        * AddMonthCount为0 代表当月 为-1代表上一个月  为1代表下一个月 以此类推
        * ***/
        getMonthStartAndEndDateTime: function(AddMonthCount) {
            let that_ = this;
            //起止日期数组
            var startStop = new Array();  
            //获取当前时间
            var currentDate = new Date(); 
            var month=currentDate.getMonth()+AddMonthCount;
            if(month<0){
                var n = parseInt((-month)/12); 
                month += n*12;
                currentDate.setFullYear(currentDate.getFullYear()-n);
            }
            currentDate = new Date(currentDate.setMonth(month));
            //获得当前月份0-11    
            var currentMonth = currentDate.getMonth();
            //获得当前年份4位年    
            var currentYear = currentDate.getFullYear();
            //获得上一个月的第一天    
            var currentMonthFirstDay = new Date(currentYear, currentMonth,1);
            //获得上一月的最后一天    
            var currentMonthLastDay = new Date(currentYear, currentMonth+1, 0);
            //添加至数组    
            startStop.push(currentMonthFirstDay);
            startStop.push(currentMonthLastDay);
            //返回    
            return startStop;
        },
        //获取最近几天日期
        getLastDate: function(num){
            let that_ = this;
            let days = [];
            for(var i=num-1;i>=0;i--){
                let tempDate = new Date();
                tempDate.setDate(tempDate.getDate() - i);
                days.push(that_.getDateStr(tempDate));
            }
            return days;
        },
        //获取最近几周描述
        getLastWeek: function(num){
            let that_ = this;
            let weeks = [];
            for(var i=num;i>=0;i--){
                if(i == 0){
                    weeks.push('本周');
                }else{
                    weeks.push('前'+i+'周');
                }
            }
            return weeks;
        },
        //获取最近几月月份
        getLastMonth: function(num){
            let that_ = this;
            let months = [];
            for(let i= 6;i >= 0;i--){
                let currentDate = new Date();
                let month=currentDate.getMonth()-i;
                if(month<0){
                    let n = parseInt((-month)/12); 
                    month += n*12;
                    currentDate.setFullYear(currentDate.getFullYear()-n);
                }
                currentDate = new Date(currentDate.setMonth(month));
                months.push(that_.format(currentDate,'yyyy-MM'));
            }
            return months;
        }
    },
    //产生不带“-”号的UUID
    uuid: function () {
    	function S4() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+S4()+S4()+S4()+S4()+S4()+S4());
    },
    //小数点截取两位
    changeTwoDecimal: function (floatvar)
    {
        if (isNaN(parseFloat(floatvar)))
        {
            console.log('function:changeTwoDecimal->parameter error');
            return false;
        }
        let f_x = Math.round(floatvar*100)/100;
        return f_x;
    }
};
