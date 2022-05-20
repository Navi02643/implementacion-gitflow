let register = [];

function addarray() {
    let name = document.getElementById('name').value;
    let lastname1 = document.getElementById('lastname1').value;
    let lastname2 = document.getElementById('lastname2').value;
    let namecoomplete = name + " " + lastname1 + " " + lastname2;
    register.push(namecoomplete)
    console.log(register)
}