<template>
    <div class="container bg-light">
        <div class="row">
            <div class="col-12 col-md-12 text-center py-5 ">
               <h5 class="text">Recent From BLOG</h5>
               <h1 class="text2">LATEST UPDATE</h1>
           </div>
        </div>
        <div class="row mobile-view">
        <div class="col card " style="width: 18rem;">
            <img src="../assets/imgs/blog-a.jpg" class="card-img-top-3" alt="...">
            <div class="card-body">
              <h6 class="text-center" style="font-weight: bold;">Caring for Someone at home</h6>
              <p class="card-text text-center">Most people who get sick with covid-19 will have
                only mild illness and should recover at home. Care at home can help stop the spread
            of COVID-19</p>
            </div>
        </div>
        <div class="col card " style="width: 18rem;">
            <img src="../assets/imgs/blog-b.jpg" class="card-img-top-3" alt="...">
            <div class="card-body">
              <h6 class="text-center" style="font-weight: bold;">15 ways to keep safe and healthy</h6>
              <p class="card-text text-center">Most people who get sick with covid-19 will have
                only mild illness and should recover at home. Care at home can help stop the spread
            of COVID-19</p>
            </div>
        </div>
        <div class="col  card " style="width: 18rem;">
            <img src="../assets/imgs/blog-c.jpg" class="card-img-top-3" alt="...">
            <div class="card-body">
              <h6 class="text-center" style="font-weight: bold;">If you think you are sick</h6>
              <p class="card-text text-center">if you are thick with covid-19 or you think you Might have it
                follow the steps bellow to help protect other people in your home and community.
              </p>
            </div>
        </div>
    </div>
    </div>
</template>

<style>
@media screen and (max-width: 992px) {
   .mobile-view{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
   }
}
</style>