
function reverse(str){
    if (str.length<=1)return str
    return reverse(str.slice(1))+str[0]
}q  65mmm 
console.log(reverse("hello welcome to javascript"))