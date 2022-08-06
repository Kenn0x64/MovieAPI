// //For Refreshing the Page After 2min
// setTimeout(function () {
// window.location.reload();
// }, 2000);

//Selecting some Tags from the html
let form=document.querySelector('#myform')
let searchWord=document.querySelector('#searchWord')

//Method For fetching the data
async function Myfetch(link){
      let xw=await fetch(link)
      return xw.json()
    }


// A Funtion For looping The thought feched movies
// And adding every Every Movie to the document
function GetMovies (FetchedMovies)
{
  for (var Movie of FetchedMovies)
  {
    if (Movie.show.image)
     {
       const  image= document.createElement('IMG')
       image.src=Movie.show.image.medium;
       document.body.append(image);
      }
    }
  }

//Adding a EventListener For the form
form.addEventListener('submit', async (e)=>{
        e.preventDefault();
        let FetchedMovies= await Myfetch(`https://api.tvmaze.com/search/shows?q=${searchWord.value}`)
          console.log(FetchedMovies);
        GetMovies(FetchedMovies);
})
