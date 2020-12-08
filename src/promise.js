const one = () =>{
    return "I am one";
}
const two = () => {
    setTimeout(() => {
        return "I am two"
    },1000)
}
const three = () =>{
    return "I am three"
}
one();
two();
three();