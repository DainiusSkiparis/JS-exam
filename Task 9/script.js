/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    wasExpensive() {
        if (this.budget > 100000000) {
            return true
        }
        return false
    }
}
let t = prompt("Enter movie title:")
while (!t) {
    t = prompt("Enter movie title:")
}
let d = prompt("Enter movie director:")
while (!d || d === null) {
    sdf
    d = prompt("Enter movie director:")
}
let b = prompt("Enter movie budget:")
while (!b || isNaN(Number(b))) {
    b = prompt("Movie budget sum is:")
}
b = Number(b);
const movie = new Movie(t, d, b)

console.log("Movie title is: " + movie.title)
console.log("Movie director is: " + movie.director)
console.log("This movie is expensive:")
console.log(movie.wasExpensive())