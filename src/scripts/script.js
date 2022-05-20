let register = [];

function addarray() {
    let name = document.getElementById('name').value;
    let lastname1 = document.getElementById('lastname1').value;
    let lastname2 = document.getElementById('lastname2').value;
    let namecoomplete = name + lastname1 + lastname2;
    let RFC =lastname1.substring(0,2) + lastname2.substring(0,1) + name.substring(0,1)
    register.push(namecoomplete,RFC)
    console.log(register)
}