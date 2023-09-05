let form=document.querySelector(".forms")
// //  console.log(form)
let useremail=form.gmail
// console.log(useremail)
let userpass=form.pass
// console.log(userpass)
let h2=document.getElementById("ten")
// console.log(h2)
let h3=document.getElementById("matkhau")
// console.log(h3)
form.addEventListener("submit",function(event){
    event.preventDefault()
    // gan ham vao day
    let nhap=thongtin()
    if(nhap){
        alert("thanh cong")
}
})
function thongtin(){
    let valuegmail=useremail.value
    let valuepass=userpass.value
    let check=true//ky thuat cam co
    if(valuegmail==""){
        check=false
        h2.innerHTML="chua nhap email"
        // alert("chua nhap ten")
    }
    else{
        if(!isemail(valuegmail)){
            check=false//ky thuat cam co
            h2.innerHTML="email k hop le"
        }
        else{
            h2.innerHTML="hop le"
        }
    }
    if(valuepass==""){
        check=false
        h3.innerHTML="chua nhap mat khau"
        // alert("chua nhap email")
    }
    else{
        if(!ispass(valuepass)){
            check=false
            h3.innerHTML="mat khau yeu"

        }
        else{
            h3.innerHTML="mat khau manh"
        }
    }
    
    return check
}
// kiem tra bieu thuc chinh quy
function isemail(email){
    let pass2=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    return pass2.test(email)//DUNG ROI NHA
}
function ispass(pass){
    let matkhau= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;
    return matkhau.test(pass)//an thang nay dung roi
}
// bieu thuc chinh quy
// chuc nag tat 2 chu mau do
// giai thich phan chuc nang
// ok roi do