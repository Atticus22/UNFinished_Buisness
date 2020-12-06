//JavaScript for validating User Inputs

function testLength(value, length) {
    if (value.length==length) {
        return true;
    }
    return false;
}

function emptyCheck(value, name) {
    if (value.value != ""  && value.value.length > 0) {
        return true;
    }
    alert(`Please enter "${name}"`);
    return false;
}

function testNumber(value) {
    if (typeof value !== "string" && typeof value !== "number") {
        return false;
    }
    if (typeof value === "string") {
        return /^(\d+|\d+\.\d+)$/.test(value);
    }
    return !Number.isNaN(value);
}

function validateControl(control, name, length) {
    if (!testLength(control.value, length, true)) {
        alert(`Invalid length for "${name}"`);
        return false;
    }
    else if (!testNumber(control.value)) {
        alert(`"${control.value}" is not a number`);
        return false;
    }
    return true;
}


function validateEmail(value) {
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) {
        alert(`The email is invalid`);
        return false;
    }
    return true;
}

function validateState(state) {	
	if (state.value	=== "") {
        alert(`Select any state`);
        return false;
    }
    return true;
}

function validateEighteen(value) {
	//var eighteen = document.getElementById('eighteen');
	
	if (value === "") {
        alert(`You should be at least 18 years old`);
        return false;
    }
	return true;
}

function validateWorktype(value) {
	//var worktype = document.getElementById('worktype');
	
	if (value === "") {
        alert(`Select the work type`);
        return false;
    }
	return true;
}

function validateNights(value) {
	//var nights = document.getElementById('nights');
	
	if (value === "") {
        alert(`Tell us if you can work at night`);
        return false;
    }
	return true;
}

function validateDrive(value) {
	//var drive = document.getElementById('drive');
	
	if (value === "") {
        alert(`Tell us if you have a valid driving license`);
        return false;
    }
	return true;
}

function validateDw(value) {
	//var drivework = document.getElementById('drivework');
	
	if (value === "") {
        alert(`Select if you want to work on your Vehicle`);
        return false;
    }
	return true;
}

function validateInfractions(value) {
	//var infractions = document.getElementById('infractions');
	
	if (value === "") {
        alert(`Select if you have any traffic accidents in the last 3 years?`);
        return false;
    }
	return true;
}

function validateDui(value) {
	//var dui = document.getElementById('dui');
	
	if (value === "") {
        alert(`Select if you have you ever been stopped for drinking`);
        return false;
    }
	return true;
}

function validateDistract(value) {
	//var distract = document.getElementById('distract');
	
	if (value === "") {
        alert(`Select if you have you ever been stopped for distracted driving`);
        return false;
    }
	return true;
}

function validateOwnership(value) {
	//var ownership = document.getElementById('ownership');
	
	if (value === "") {
        alert(`Select if you currently own your vehicle`);
        return false;
    }
	return true;
}

function validateMilitary(value) {
	//var military = document.getElementById('military');
	
	if (value === "") {
        alert(`Select if you ever served in the military`);
        return false;
    }
	return true;
}


function validateCheckboxes(){

    var inputs = document.getElementsByTagName('input');
	
    var notchecked = false;

    for(var i = 0; i < inputs.length; i++) {
        if(inputs[i].checked) {
            notchecked = true;
			return true;
        }
    }

    if(!notchecked){
        alert("At least one checkbox must be checked");
        return false;
    }
}


function validateCheckboxesWork(){

    var inputs = document.getElementsByClassName("checkboxAtLeastOne")
	
    var notchecked = false;

    for(var i = 0; i < inputs.length; i++) {
        if(inputs[i].checked) {
            notchecked = true;
			return true;
        }
    }

    if(!notchecked){
        alert("At least one checkbox must be checked in work days");
        return false;
    }
}


function validateForm() {
	if (emptyCheck(document.getElementById("fname1"), "First Name") &&
        emptyCheck(document.getElementById("lname1"), "Last Name") &&
        emptyCheck(document.getElementById("address1"), "Address") &&
        emptyCheck(document.getElementById("city1"), "City") &&
        validateState(document.getElementById('state1')) &&
        validateControl(document.getElementById("zip1"), "Zip", 5) &&
        emptyCheck(document.getElementById("adtime"), "Date") &&
        validateEmail(document.getElementById("email").value) &&
        validateControl(document.getElementById("mobile"), "mobile", 10) &&
		validateControl(document.getElementById("home"), "home", 10) &&
        validateEighteen(document.getElementById("eighteen").value) &&
        emptyCheck(document.getElementById("position"), "Position") &&
        
        emptyCheck(document.getElementById("fname2"), "First Name") &&
        emptyCheck(document.getElementById("lname2"), "Last Name") &&
        emptyCheck(document.getElementById("address2"), "Address") &&
        emptyCheck(document.getElementById("city2"), "City") &&
        validateState(document.getElementById('state2')) &&
        validateControl(document.getElementById("zip2"), "Zip", 5) &&
		validateControl(document.getElementById("mobile"), "mobile", 10) &&
        emptyCheck(document.getElementById("Relationship"), "Relationship") &&
        
        validateCheckboxesWork() &&
		validateWorktype(document.getElementById("worktype").value) &&
		validateNights(document.getElementById("nights").value) && 
		validateDrive(document.getElementById("drive").value) &&
		validateDw(document.getElementById("drivework").value) &&
		validateInfractions(document.getElementById("infractions").value) &&
		validateDui(document.getElementById("dui").value)&&
		validateDistract(document.getElementById("distract").value) &&
		validateOwnership(document.getElementById("ownership").value) &&
		validateMilitary(document.getElementById("military").value) &&
        validateCheckboxes() &&
        emptyCheck(document.getElementById("school"), "School") &&
        emptyCheck(document.getElementById("degrees"), "Degrees/Certificates") &&
        emptyCheck(document.getElementById("date"), "Date") &&
        emptyCheck(document.getElementById("sign"), "Signature") 
		) 
	{
		alert('Your application was successfully submitted');
		document.querySelector('form').reset();
		return true; // used to be true;
	} else {
		alert('error detected');
		//return false;
	}
	return false;
}