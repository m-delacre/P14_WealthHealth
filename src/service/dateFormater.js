export default function dateFormater(date){
    const newDate = date.split('/');
    console.log(newDate[1]+'/'+newDate[0]+'/'+newDate[2]);
    return newDate[1]+'/'+newDate[0]+'/'+newDate[2];
}