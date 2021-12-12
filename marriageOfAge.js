//Female Age Calculation of marriage........
let name = prompt("দয়া করে মেয়ের নাম বলুনঃ")
let patriAge = prompt("দয়া করে মেয়ের বয়স বলুনঃ");
if(patriAge >= 18){
    console.log(`${name} তুমার বিয়ের বয়স হয়েছে।
এখনই তোমার বিয়ের উপযুক্ত সময়।
কাজি ডাকেন, আর মিস্টি আনেন।`)
}
else{
    console.log(`${name} এখনও তোমার বিয়ে করার বয়স হয় নি।
তুমি এখনও অনেক ছোট।
তোমাকে আরো ${18-patriAge} বছর অপেক্ষা করতে হবে।`)
};


//Male age calculation of marriage

// let patroAge = prompt('দয়া করে আপনার ছেলের বয়স বলুনঃ');
// if(patroAge >= 21){
//     console.log(`আপনার ছেলের বিয়ের বয়স হয়ে গেছে আপনার ছেলের জন্য মেয়ে দেখেন।`)
// }
// else{
//     console.log(`এখনো আপনার ছেলের বিয়ের বয়স হয় নি।
//     দয়া করে আরো ${21-patroAge} বছর পরে আপনার ছেলেকে দিবেন।`)
// };

