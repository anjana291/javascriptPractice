function greet(name,callback) {
        console.log(`Hi ${name}`);
        callback()
}

function child() {
    console.log('Inside Child function');
}

greet('Anjana',child)

console.log('-----------OR---------');
function parent(name) {
    console.log(`Hi ${name}. You are inside parent class`);
    child()
}

parent('Naseema')