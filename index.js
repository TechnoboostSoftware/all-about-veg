function providerSend() {
    var ownerName = document.getElementById("ownerName")
    var providerName = document.getElementById("providerName")
    var description = document.getElementById("description")
    var providerAddress = document.getElementById("providerAddress")
    var emailAddress = document.getElementById("emailAddress")
    var phoneNumber = document.getElementById("phoneNumber")
    var providerInfo = [ownerName, providerName, description, providerAddress, emailAddress, phoneNumber];
    var providerInputObject = {
        'ownerName': ownerName.value,
        'providerName': providerName.value,
        'description': description.value,
        'providerAddress': providerAddress.value,
        'emailAddress': emailAddress.value,
        'phoneNumber': phoneNumber.value
    }
    for (let i = 0; i < providerInfo.length; i++) {
        if (providerInfo[i].value == "") {
            providerInfo[i].style.border = "1px solid red"
        }
    }
}
function customerSend() {
    var providerName2 = document.getElementById("providerName2")
    var description2 = document.getElementById("description2")
    var emailAddress2 = document.getElementById("emailAddress2")
    var customerInfo = [providerName2, description2, emailAddress2];
    var customerInputObject = {
        'providerName2': providerName2.value,
        'description2': description2.value,
        'emailAddress2': emailAddress2.value,
    }
    for (let i = 0; i < customerInfo.length; i++) {
        if (customerInfo[i].value == ""){
            customerInfo[i].style.border = "1px solid red"
        }
    }
}
function removeErrorBorder(id) {
    document.getElementById(id).style.border = 'none'
    // if (id.value == ""){
    //     document.getElementById(id).style.border = "1px solid red"
    // }
}

































