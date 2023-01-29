/**
 * 
 * @param {Date} date 
 * @returns the YYYY/MM/dd only
 */
export default function dateFormater(date){
    const newDate = date.split('/');
    return newDate[2]+'/'+newDate[0]+'/'+newDate[1];
}