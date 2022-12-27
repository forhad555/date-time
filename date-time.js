// Today date and time 
// Sunday start with 0 and saturday end with 6 
// Sunday 0
// Monday 1
// Tuesday 2
// Wednesday 3
// Thursday 4
// Friday 5
// Saturday 6



// Get the day
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}


// Get the running month

// In JavaScript month start with 0 and end with 11. For exampule, January 1 and December 11; Similarly Hours, Minites, seconds. 

let month;
switch (new Date().getMonth()+1){
    case 1: 
     month = "January";
     break;

        case 2:
            month = "February";
            break;
        
                 case 3: 
                    month = "March";
                    break;

                    case 4:
                        month = "April";
                        break;

                        case 5:
                            month = "May";
                            break;

                            case 6:
                                month = "June";
                                break;

                            case 7:
                                month = "July";
                                break;

                            case 8:
                                month = "August";
                                break;

                            case 9:
                                month = "September";
                                break;

                            case 10:
                                month = "October";
                                break;

                            case 11:
                                month = "November";
                                break;

                            case 12:
                                month = "December";
                                break;
                            }


    
// For DOM =======
// function formatAMPM(date) {
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var ampm = hours >= 12 ? 'pm' : 'am';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     minutes = minutes < 10 ? '0'+minutes : minutes;
//     var strTime = hours + ':' + minutes + ' ' + ampm;
//     return strTime;
//   }
  
//   console.log(formatAMPM(new Date));




// Today Date with condition
var todayDate = new Date().getDate();

if ((todayDate == 21 || todayDate == 31) || (todayDate == 1)){
    todayDate += 'st';
    
}
else if((todayDate == 23) || (todayDate == 3))
{
    todayDate += 'rd';
}
else{
    todayDate += 'th';
}

 // Get Current Time
 var hours = new Date().getHours();
 var minutes = new Date().getMinutes();
 var ampm = hours >= 12 ? 'pm' : 'am';
 hours = hours % 12;
 hours = hours ? hours : 12; // the hour '0' should be '12'
 minutes = minutes < 10 ? '0'+minutes : minutes;
 var strTime = hours + ':' + minutes + ' ' + ampm;




console.log('Date: ' + day +  ' ' + todayDate + ' ' + month +", "+ "Time:" + ' ' + hours + ":" + minutes + ampm + " Now");