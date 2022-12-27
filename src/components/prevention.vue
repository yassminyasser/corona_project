<template>
<div class="container bg-light text-center">
    <div class="row">
        <div class="col-12 col-md-12 text-center py-5 ">
            <h5 class="text">HOW TO PROTECT YOURSELF?</h5>
            <h1 class="text2">PREVENTIONS & ADVICE</h1>
            <p>there is currently no vaccine to prevent from coronavirus desease (COVID-19) <span style="font-weight:bold;">the best way <br> 
            to prevent illness is avoid to being expose to this virus</span> stay aware of the latest information <br> 
             on the covid-19 outbreak, available on the WHO website and through your national and local <br>
             public health authority. <br>
             </p>
        </div>
    </div>
    <div class="row m-5 mobile-view ">
            <div class="col-12 col-md-3 col-lg-3" style="width: 18rem;">
                <img src="../assets/imgs/advice-a.png" class="card-img-top-2" alt="...">
                <div class="card-body ">
                  <p class="card-title-1">Watch Your Hands Frequently </p>
                  <p class="card-text text-center"> regularly and thoroughly clean your hands with an alchohol based hand 
                    rup or wash them with soup and water for at least 20 second.
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-3 col-lg-3" style="width: 18rem;">
                <img src="../assets/imgs/advice-b.png" class="card-img-top-2" alt="...">
                <div class="card-body">
                  <p class="card-title-1">Maintain Social Distaning</p>
                  <p class="card-text text-center">Maintain at least 1Meter (3 feet) distance between yourself 
                    or any one who is coughing or sneezing, if you are too close get chance to be infected</p>
                </div>
              </div>
              <div class="col-12 col-md-3 col-lg-3" style="width: 18rem;">
                <img src="../assets/imgs/advice-c.png" class="card-img-top-2" alt="...">
                <div class="card-body">
                  <p class="card-title-1">Avoid Touching Face</p>
                  <p class="card-text text-center">Hands touch many surfaces and can pick up viruses so hands 
                    can transfer virus through your eyes, nose or mouth and can make you sick.</p>
                </div>
              </div>
              <div class="col-12 col-md-3 col-lg-3" style="width: 18rem;">
                <img src="../assets/imgs/advice-d.png" class="card-img-top-2" alt="...">
                <div class="card-body">
                  <p class="card-title-1">Practice Repository Higene </p>
                  <p class="card-text text-center">Maintain good respiratory higiene as covering your mouth and your nose with your bent 
                    elbow or tissue when cough or sneeze.</p>
                </div>
              
        </div>
    </div>
    <div class="row m-5 p-5 mobile-view">
      <table>
        <tr class="">
          <td><RouterLink class=" btn2 tolink p-3 m-3" to="/hands">How You Wash Your Hands -></RouterLink></td>
        </tr>
        <tr class="p-3 m-3"><td class="p-3 m-3"><RouterLink class="tolink" to="/faq">Q&A on Coronavirus -></RouterLink></td></tr>
      </table>
    </div>
</div>
</template>
<style>
@media screen and (max-width: 1200px) {
  .mobile-view{
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
  }
}
</style>