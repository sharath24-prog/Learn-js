// switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }



let day ;

let date = new Date("2005-12-24").getDay();

switch(date){
    case 0 :
        day = "sunday";
        break;

        case 1 :
            day ="Monday";
            break;

            case 2 :
                day = "Tuesday";
                break;

                case 3 :
                    day="wednesday";
                    break;

                    case 4 :
                    day = "Thurusday";
                    break;

                    case 5 :
                        day = "Friday";
                        break;

                        case 6 :
                            day = "saturday";
                            break;
                            default:
                                console.log("not move on");
}

console.log(day);