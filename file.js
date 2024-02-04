

const fromApi = (search)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(getData => dataFunc(getData.meals))
}

const dataFunc = (dataMeal) =>{
    console.log(dataMeal)

    const foodView = document.querySelector(".foodView")
    console.log(foodView)
        for(const data of dataMeal){
            const newDiv = document.createElement('div')
                newDiv.innerHTML = `
                <div class="col">
                    <div class="card">
                        <img src="${data.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${data.strMeal}</h5>
                            <p class="card-text">${data.strInstructions.slice(0,200)}</p>
                        </div>
                    </div>
                </div>
                `
            foodView.appendChild(newDiv)
                    
        }
}

fromApi('chicken')