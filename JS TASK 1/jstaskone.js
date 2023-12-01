function inp() {
    var ip1 = document.getElementById("txt").value
    if (ip1.length >= 5) {
        var spn1 = document.getElementById("sp1")
        spn1.innerHTML = "Matched"

    }
    else {

        var spn1 = document.getElementById("sp1")
        spn1.innerHTML = " Not Matched"
    }
}
function email() {
    var em = document.getElementById("eml").value
    var ptn = new RegExp(/^[A-Za-z0-9]{1,15}[@#$%*]{1,3}\@[a-z]{1,5}\.[a-z]{1,3}$/)
    if (em.match(ptn)) {
        var spn2 = document.getElementById("sp2")
        spn2.innerHTML = "Email  Matched"
    }
    else {
        var spn2 = document.getElementById("sp2")
        spn2.innerHTML = "Email not Matched(hint(Ram#@gmail.com)"
    }
    console.log(em)
}

function pass() {
    var ps = document.getElementById("pws").value
    var ptn1 = new RegExp(/^[A-Za-z0-9]{1,13}[\@#$%*&]{1,3}[0-9]{1,9}$/)
    if (ps.match(ptn1)) {
        var spn3 = document.getElementById("sp3")
        spn3.innerHTML = "Strong"
    }
    else {
        var spn3 = document.getElementById("sp3")
        spn3.innerHTML = "Weak (hint(Ram65$345))"
    }
    console.log(ps)
}
function mobile() {
    var mb = document.getElementById("mbl").value
    var ptn2 = new RegExp(/^[6-9]{1}[0-9]{10}$/)
   
    if (mb.match(ptn2)) {
        var spn4 = document.getElementById("sp4")
        spn4.innerHTML = "Matched"
    }
    else {
        var spn4 = document.getElementById("sp4")
        spn4.innerHTML = "not matched"
    }
    console.log(mb)
}

function sub(){
   

    var fname = document.getElementById("txt").value
    var lname = document.getElementById("txt1").value
    var age = document.getElementById("age").value
    var dob = document.getElementById("dob").value
    var gender = document.getElementById("gen").value
    var email = document.getElementById("eml").value
    var password = document.getElementById("pws").value
    var mbl = document.getElementById("mbl").value
    var city = document.getElementById("city").value
    var state = document.getElementById("state").value
    var link = document.getElementById("link").value
    document.getElementById("tbl").innerHTML+="<tr><td>"+fname+"</td><td>"+lname
    +"</td><td>"+age+"</td><td>"+dob+"</td><td>"+gender+"</td><td>"+email+"</td><td>"+password+"</td><td>"+mbl+"</td><td>"+city+"</td><td>"+state+"</td><td>"+link+"</td></tr></table>"
    



}