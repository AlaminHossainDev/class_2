let userName = prompt('Please Enter Your Name:')
let userAge = prompt('Please Enter Your Age:');
if(userAge < 20){
    console.log(`Hello ${userName}, akhono ey jaiga asar Boyos hoi ni apnar, Please ${20-userAge} bosor pora asben.`) 
}
else if(userAge >= 20 && userAge <= 35 ){
    console.log(`Hello ${userName}, apnar jonno tooh ajka sokol party r ayojon kora hoyasa`)
}
else{
    console.log(`Hello ${userName}, apnaka tooh invite kora hoi ni apni kano ascen? eey party apnar jonno na `)
}