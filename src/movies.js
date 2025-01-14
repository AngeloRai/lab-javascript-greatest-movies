

// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(listMovies){
    return  listMovies.map(x => (x.director));
    
}

let allDirectors = getAllDirectors(movies);


// _Bonus_: It seems some of the directors had directed multiple movies so they will 
// pop up multiple times in the array of directors. How could you "clean" a bit this array 
// and make it unified (without duplicates)?


function filteredDirectors(filteredDir){
    return filteredDir.filter((value, index)=> filteredDir.indexOf(value) === index);
     // let filteredDir = new Set(listOfDirectors);
  }
  
  

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(listMovies){
    let stevenDrama = listMovies.filter(function (currentElement) {
      return currentElement.director ===  "Steven Spielberg" && currentElement.genre.includes("Drama");
    });
    return stevenDrama.length
  }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals



function ratesAverage(movieList){
    if (movieList.length === 0) {
        return 0;
      }
      let rates = movieList.map(x => (x.rate));
      let rateSum = rates.reduce(function(acc, value) {
        return acc + value
      }, 0);
      return parseFloat((rateSum / movieList.length).toFixed(2)) 
    } 
// Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(listMovies){
    
    let dramaMovies = listMovies.filter(function (currentElement) {
      return currentElement.genre.includes("Drama");
    });
    if (dramaMovies.length == 0){
        return 0
    }
    let draRates = dramaMovies.map(x => (x.rate));
           
      return (draRates.reduce(function(acc, value) {
        return acc + value
      }, 0) / draRates.length)
   }

    
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
   

function orderByYear(moviesList){
                
    return  moviesList.sort(function (a, b){
      return a.year - b.year
    }); 
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesList){
    let firstMovies = movies.slice(0,20)
    
    return firstMovies.sort(function(a,b) {
      return a.title - b.title;
    });
     
  }  
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
