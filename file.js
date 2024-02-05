


        

const fromApi = (search)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(getData => dataFunc(getData.meals))
}

const dataFunc = (dataMeal) =>{
    // console.log(dataMeal)

    const foodView = document.querySelector(".foodView")
    foodView.innerHTML = ``;
    // console.log(foodView)
        for(const data of dataMeal){            
            const newDiv = document.createElement('div')
            newDiv.innerHTML = `
            <div class="col">
                    <div class="card">
                    <img src="${data.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class=""> Name :  <span class="card-title fw-normal fs-5">${data.strMeal}</span> </h5>
                    <h5 class="">Category :  <span class="card-title fw-normal fs-5">${data.strCategory}</span> </h5>
                    <h5 class="">Area :  <span class="card-title fw-normal fs-5">${data.strArea}</span> </h5>

                    <a href="${data.strYoutube}" class="px-3 py-2  text-center rounded-3 fs-5 fw-normal border border-danger text-decoration-none">
                                                          Recipe
                         <i class="fa-regular fa-circle-play mx-2" style="color: #f51414;"></i>
                     </a>
                    
                    </div>
                    </div>
                    </div>
                    `
                    foodView.appendChild(newDiv)    
                    
                    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++   
        }

}

const searchFood = () => {
    const searchField = document.getElementById("searchField")
    const searchValue =  searchField.value;
    fromApi(searchValue)
    searchField.value = '';
    console.log(searchValue)
}

fromApi()














