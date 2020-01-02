const TIME_DESC = {
    getSecond: function(time) {
        const tmpl = sec => (`${sec}秒前`);
        const boundary = [0, 59];
        const secTime = Math.floor(time/1000);
        if(secTime >= boundary[0] && secTime <= boundary[1]){
            return tmpl(secTime);
        }
        return -1;
    },
    getMinutes: function(time) {
        const tmpl = min => (`${min}分钟前`);
        const boundary = [0, 59];
        const minTime = Math.floor(time/60*1000);
        if(minTime >= boundary[0] && minTime <= boundary[1]){
            return tmpl(minTime);
        }
        return -1;
    },
    getHours: function(time) {
        const tmpl = hour => (`${hour}小时前`);
        const boundary = [0, 59];
        const hourTime = Math.floor(time/60*60*1000);
        if(hourTime >= boundary[0] && hourTime <= boundary[1]){
            return tmpl(hourTime);
        }
        return -1;
    },
    getDays: function(time) {
        const tmpl = day => (`${day}天前`);
        const boundary = [1, 23];
        const dayTime = Math.floor(time/24*60*60*1000);
        if(dayTime >= boundary[0] && dayTime <= boundary[1]){
            return tmpl(dayTime);
        }
        return -1;
    },
    getMonths: function(time) {
        const tmpl = month => (`${month}月前`);
        const boundary = [1, 11];
        //the check of month need to be enhanced
        const monthTime = Math.floor(time/31*24*60*60*1000);
        if(monthTime >= boundary[0] && monthTime <= boundary[1]){
            return tmpl(monthTime);
        }
        return -1;
    },
    getYears: function(time) {
        const tmpl = year => (`${year}年前`);
        //the check of year need to be enhanced
        const yearTime = Math.floor(time/365*31*24*60*60*1000);
        return tmpl(yearTime);
    }
}

const formatCustomTime = function(timeStr) {
    try{
        const currTimestamp = new Date().getTime(), publishTimestamp = new Date(timeStr).getTime(), time = Math.floor(currTimestamp-publishTimestamp);
        let sec = -1, min = -1, hour = -1, day = -1, month = -1, year = -1; 
        if((sec = TIME_DESC.getSecond(time)) !== -1){
            return sec;
        }else if((min = TIME_DESC.getMinutes(time)) !== -1){
            return min;
        }else if((hour = TIME_DESC.getHours(time)) !== -1){
            return hour;
        }else if((day = TIME_DESC.getDays(time)) !== -1){
            return day;
        }else if((month = TIME_DESC.getMonths(time)) !== -1){
            return month;
        }else{
            return TIME_DESC.getYears();
        }
    }catch(e){
        return "Invalid Time"
    }
}

export default {
    formatCustomTime
}