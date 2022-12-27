<template>
    <div class="container bg-light">
        <div class="row">
            <div class="col-12 col-md-12 text-center py-5 ">
               <h5 class="text">Do's & Don't</h5>
               <h1 class="text2">PROTECT YOURSELF</h1>
               <p>the best thing you can do now is plan for how you can adapt your daily routine.take
                few steps to protect yourself as clean your hans often,<br> Avoid close contacts, cover cough 
                and sneezes, clean daily used surfaces etc. the best way to prevent illness is avoid being expose to this virus.
               </p>
           </div>
        </div>
        <div class="row d-flex flex-col justify-content-center mobile-view">
          <div class="col">
            <div>
                <div class="d-flex justify-content-center">
                    <p style="color:dodgerblue">Avoid close contact</p>
                    <img src="../assets/imgs/donts-a.png" style="width:7rem" >

                </div>
                <div class="d-flex justify-content-center">  
                    <p style="color:dodgerblue">Don't touch face</p>
                    <img src="../assets/imgs/donts-b.png" style="width:7rem">
                </div>
                <div class="d-flex justify-content-center">
                    <p style="color:dodgerblue">Avoid Distancing</p>
                    <img src="../assets/imgs/donts-c.png"  style="width:7rem">
                </div>
            </div>
          </div>
          <div class="col mobile-view">
            <img src="../assets/imgs/protect.png" style="width:25rem; height:50vh; align-items: center;">
          </div>
          <div class="col">
            <div class="">
                <div class="d-flex justify-content-center">
                    <img src="../assets/imgs/dos-a.png" style="width:7rem">
                    <p style="color:dodgerblue">Wash your hands.</p>
                    
                </div>
                <div class="d-flex justify-content-center">  
                    <img src="../assets/imgs/dos-b.png" style="width:7rem">
                    <p style="color:dodgerblue">Drink Much Water</p>
                    
                </div>
                <div class="d-flex justify-content-center">
                    <img src="../assets/imgs/dos-c.png"  style="width:7rem">
                    <p style="color:dodgerblue">Use Face Mask</p>
                    
                </div>
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