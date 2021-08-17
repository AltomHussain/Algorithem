//reverse string using reverse method
const reveseStrOne = (string) => {
    return string.split("").reverse().join("");
}
//console.log(reveseStrOne("broken"));

//reversie string in recursive way
const reveseStrTwo = (string) => {
    if (string === "") {
        return string;
    }
    
    return reveseStrTwo(string.substring(1)) + string.charAt(0);
}
console.log(reveseStrTwo("eating fish"));
