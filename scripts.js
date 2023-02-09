
const validate = () => {
    const form = document.getElementById("form");
    const mail = document.querySelector(".email");

    const rgx =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    form.addEventListener("submit",(e) => {
        e.preventDefault();

        if(mail.value.length === 0 || !mail.value.match(rgx) ){
            document.getElementById("emailError").style.display = 'block';
            document.getElementById("icon").style.display = 'block';
            mail.style.border = "3px solid red";
            
            
        } else {
            document.getElementById("emailError").style.display = 'none';
            document.getElementById("icon").style.display = 'none';
            mail.style.border = "";
            
        }

        
        
        
    });
    
    
}


