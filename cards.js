$(document).ready(function(){

    let html = `
    <div class="container">
        <div class="row">`;

    dishes.forEach((dish, i) => {
      html+=`
        <div class="col-sm-3 mt-2 ">
            <div class="card dish-card" style="width: 18rem;">
                <img class="card-img-top" style="height: 12rem; object-fit: cover;" src="${dish.img}" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${dish.name}  <span class="badge ${dish.type=="Veg"?"badge-success":"badge-danger"}">${dish.type}</span></h5>
                  <p class="card-text">${dish.description}<br><h3>&#8377; ${dish.price} ${dish.bestSeller? "Best Seller":""}</h3></p>
                  <button class="btn btn-large primary m-3 mt-10 swiggy">Swiggy</button>
                  <button class="btn btn-large primary m-3 mt-10 zomato">Zomato</button>
                </div>
              </div>
        </div>`;

        if((i+1)%4==0)
          html+=`
            </div>
        </div>
        <div class="container">
            <div class="row">`;
      });

    html+=`
      </div>
  </div>`;

  $("body").append(html);

  $(".swiggy").click(()=>{
      window.location.replace("https://www.swiggy.com/restaurants/charles-chicken-bank-colony-iyer-bungalow-madurai-82937");
  });

  });