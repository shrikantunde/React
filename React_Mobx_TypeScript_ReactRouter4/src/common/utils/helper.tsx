import * as moment from 'moment';

export let helper = {
   calculateAge(dateTime) {
        let now = moment(new Date());
        let date = moment(dateTime);
        var years = now.diff(date, 'year');
        date.add(years, 'years');
        var months = now.diff(date, 'months');
        let yr = years + 'y' +' '+ months + 'm';
        return {year: yr}
   }

}
