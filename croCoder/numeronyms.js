/**
 * Numeronyms
 *  Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. 
 *  You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. 
 * Words that have less than 4 letters aren't abbreviated, because that would just be odd. 
 * The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. 
 * There won't be any punctuation in the sentence. g2d l2k e6e
 * 
 * 
 * input:
 * const input = "Every developer likes to mix kubernetes and javascript";
 * 
 * result:
 * "E3y d7r l3s to mix k8s and j8t";
 * 
 *  hint:
 * 
    Array.prototype.map()
    String.prototype.split()
    String.prototype.join()

*/

const input = "Every developer likes to mix kubernetes and javascript";

const numeronyms = input.split(" ").map(word => {

    if(word.length <= 4) {
        return word;
    }
    const lastWord = word.length -1;
    const numberWords = word.length - 2;
    return `${word[0]}${numberWords}${word[lastWord]}`;
}).join(" ");

console.log(numeronyms);

console.log(numeronyms === "E3y d7r l3s to mix k8s and j8t" ? "ok, great, the result is correct" : "There was an error");