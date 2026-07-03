const correctOTP  = "123456";

document.getElementById('verifyBtn')
.addEventListener( 'click' , function() 
{
    const userOTP = document.getElementById("otp").value;
    const message = document.getElementById('message');

    if (userOTP.length !== 6 ) {
        message.style.color = 'orange';
        message.textContent = 'Please enter 6-digit OTP';
        return;
    }

    if (userOTP == correctOTP ) {
        message.style.color = 'green';
        message.textContent = "OTP Verified Successfully";
    } else{
          message.style.color = 'red';
        message.textContent = 'Invalid OTP, Try Again!';
    }
});
