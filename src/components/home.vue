
<template>
    <div class="head d-flex container m-5">
        <div>
            <div class="container">
                <div class="row"><div class="col-md-6 col-12 "> 
                    <div class="d-flex justify-content-center text-center">
                        <div  style="font-weight:bolder; font-family:Verdana; font-size: larger;"><h1>CORONA</h1></div>
                        <div>
                            <div class="text-center font-family:Verdana;" style="color:red; font-weight:bolder;"><h3>VIRUS</h3></div>
                            <div class="text-center font-family:Verdana;" style="color:red; font-weight:bolder;"><h3>COVID-19</h3></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="row">  <div class="col-md-6 col-12 ">
                    <p class="py-3  edit">The corona virus covid 19 was first reported in wuhan, hubi,
                       china in December 2019, the outbreak was early recognized
                       as a panademic by the world health Organization (WHO) on
                       1 March 2020.
                  </p></div>
                  </div>
                <div class="row">
                    <div class="d-flex justify-content-between py-5 my-5">
                        <div>
                            <RouterLink class=" btn bg-primary text-white " to="/prevention">How to Protect</RouterLink>
                        </div>
                        <div class="px-3">
                            <RouterLink class="tolink" to="/About">About-Covid19 -></RouterLink>
                        </div>
                    </div>
                </div>
                <div class="row"> <div class="col-md-4 col-4">
                    <h6 class="edit">world wide cases</h6>
                    <h3>8,949,671</h3>
                   </div>
                   <div class="col-md-4 col-4">
                    <h6 class="edit">Details</h6>
                    <h3>467,432</h3>
                   </div>
                   <div class="col-md-4 col-4">
                    <h6 class="edit">Recoverd</h6>
                    <h3>4,556,091</h3>
                   </div></div>
                <div class="row">
                    <div class="col">
                        <p class="edit1">Last Updated Jan 21 2020, 09:24 AM America Chicago</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="imagee"> 
            <img  style="width:600px ; height:500px" src="../assets/imgs/header-a.png"  />
        </div>
    </div>
</template>

<style>

@media only screen and (max-width: 975px) {
  .imagee{
    display: none;
  }
}

</style>