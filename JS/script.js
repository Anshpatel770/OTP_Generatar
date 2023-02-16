function generateOTP(){
     var digits = '0123456789';
     let OTP = '';
    
     for (let i = 0; i < 6; i++) {
           OTP += digits[Math.floor(Math.random()*10)];

          
     }
     document.getElementById("OTP-Code").innerHTML = OTP;
     navigator.clipboard.writeText(OTP)
     return OTP;
     
    
}

     
     document.getElementById("btn").addEventListener("click" , generateOTP);

generateOTP()