<template>
    <div class="container bg-light">
        <div class="row">
            <div class="col-12 col-md-12 text-center py-5 ">
               <h5 class="text">WHAT ARE THE SYMPTOMS OF COVID-19?</h5>
               <h1 class="text2">SYMPTOMS OF CORONAVIRUS</h1>
               <p>The most common symptoms of covid-19 are fever, tiredness,runny nose and dry cough<br>
                some patients may have ashies and pains, runny nose , sore throat or diarrhea<br>
                these symptoms are usually mild and begin gradually, also the symptoms <br>
                May appear 2-14 days after exposure. </p>
           </div>
        </div>
           <div class="row mobile-view">
            <div class="col-12 col-lg-4 card " style="width: 18rem;">
                <img src="../assets/imgs/symptom-a.png" class="card-img-top-1" alt="...">
                <div class="card-body ">
                  <h5 class="card-title">Fever </h5>
                  <p class="card-text " ><span style="font-weight:bold;">High Fever</span>-This means you feel hot to touch on your chest or back
                (you don't need to measure your tempreture) it's also a common sign and also may apear from 2-12 days.</p>
                </div>
              </div>
              <div class="col-12 col-lg-4 card " style="width: 18rem;">
                <img src="../assets/imgs/symptom-b.png" class="card-img-top-1" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Cough</h5>
                  <p class="card-text "><span style="font-weight:bold;">Continous Cough</span>-This means coughing alot for more than hour,
                or 3 or more coughing episodes in 24hours (if you Usually Have A cough, it may be worse than usual) </p>
                </div>
              </div>
              <div class="col-12 col-lg-4 card " style="width: 18rem;">
                <img src="../assets/imgs/symptom-c.png" class="card-img-top-1" alt="...">
                <div class="card-body">
                  <h5 class="card-title">shortness or Breath </h5>
                  <p class="card-text"><span style="font-weight:bold;">Difficulty-Breath</span>-Around 1 out of every 5 peaople who gets covid-19
                become seriously ill and develops difficulty breathing or shortness or breath.</p>
                </div>
              </div>
        </div>
       
        <div class="row">
            <div class="col-12 col-lg-6 contentt">
                <p><span style="color:dodgerblue ; font-weight: bold; text-align: justify;"> <i class="fa-light fa-shield-exclamation"></i>Stay at Home And Call Your Doctor:</span> 
                if you think you have been exposed to COVID-19 and develop a fever and any symptoms , souch as cough or difficulty breathing call your
            health care provider as soon as possible for medical advice. </p>
            </div>
            <div class="col-12 col-lg-6">
            <RouterLink class="btn bg-primary my-5 py-3 text-white" to="/faq">Have Question? Find Answer</RouterLink>
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