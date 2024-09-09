
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!#$%&'*+\-/=?^_`{|}~])(?!.*\.\.)(?!^\..)(?!.*\.$)[A-Za-z\d!#$%&'*+\-/=?^_`{|}~.]{8,}$/ ;
const emailSingleRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}(?:\.[a-zA-Z]{2,})?$/ ;
const cardRegex = /^(?:\d{4}[-\s]?){3}\d{4}$/ ;


function extractEmailsAndPhones(para) {
    const emailRegex = /\b[a-zA-Z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}(?:\.[a-zA-Z]{2,})?\b/g;
    const phoneRegex = /(\+?\d{1,4}[-.\s]?)?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g;
  
    return {
      emails: para.match(emailRegex) ,
      phones: para.match(phoneRegex)
    };
  }
  
  const para = "Lorem ipsum dolor 9221122108 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat. Nunc aliquet bibendum enim facilisis gravida. mytraining@deqode.com Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Amet luctus venenatis lectus magna fringilla. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. +91-20200-21210 Sagittis orci a scelerisque purus semper eget duis. Nulla pharetra diam sit amet nisl suscipit. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Fusce (+91)-20200-21210 ut placerat mt@test.inc orci nulla. Pharetra vel turpis nunc eget lorem dolor. Tristique senectus et netus et malesuada.";
  console.log(extractEmailsAndPhones(para));