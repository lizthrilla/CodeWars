// Description:

// Every day we can send from the server a certain limit of e-mails.
//
// Task:
//
// Write a function that will return the integer number of e-mails sent in the percentage of the limit.
// Example:
//
// limit       - 1000;
// emails sent - 101;
// return      - 10%; // becouse integer from 10,1 = 10
// Arguments:
//
// Integer, limit;
// Integer, number of e-mails sent today;
// When:
//
// the argument $sent = 0, then return the message: "No e-mails sent";
// the argument $sent = or > $limit, then return the message: "Daily limit is reached";
// the argument $limit is empty, then default $limit = 1000 emails;
// https://www.codewars.com/kata/58a369fa5b3daf464200006c/solutions/javascript


const getPercentage = (sent, limit) => {
  limit = limit || 1000
  let percent = Math.floor((sent / limit) * 100)
  if (sent === 0) {
    return 'No e-mails sent'
  } else if (sent >= limit) {
    return 'Daily limit is reached'
  } else {
    return percent + '%'
  }
}
