
// =================================================
//  কিভাবে Array এর মধ্যে একটি Letter এর Position 
//  নির্ণয় করা যায় ।।
// =================================================

function Alphabet( arry , value ){
    let length = arry.length;
    for(let i = 0 ; i < length ; i++) {
        if( arry[i] === value ){
            return i = i + 1;
        }
    }
    return "NOT FOUND!";
};

console.log(Alphabet(["g","b","c","a","o","x","w"],"c"));


