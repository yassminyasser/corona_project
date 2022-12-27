<template>
    <div class="footer p-5">
    <div class="container m-5 ">
        <div class="row">
            <div class="col">
                <div class="logo2">
                    <h3>
                      C<i class="fa-solid fa-virus" style="color:red"></i>VID19
                    </h3>
                    <p>
                        this website is for health information and advice about coronavirus (covid-19).
                        how toprevent and protect yourself from Disease.
                    </p>
                    <p>Learn about the government response on GOV.UK </p>
                  </div>

            </div>
        </div>
        <!-- <div class="row"> -->
        <div class="d-flex justify-content-start mobile-view">
            <div class=" py-3 my-3">
                 <RouterLink class="social-links" to="">Find Us On Facebook</RouterLink>
            </div>
            <div class="py-3 my-3">
                <RouterLink class="social-links-1" to="">Find Us On Twitter</RouterLink>
            </div>
            <div class="py-3 my-3">
                <RouterLink class="social-links-2" to="">Find Us On Instagram</RouterLink>
            </div>
        </div>
        <!-- </div> -->
        <div class="row my-5 py-5 mobile-view align-items-center">
            <div class="col">
                <h4>QUICK LINK</h4>
                <RouterLink class="" style="color:white; text-decoration: none;" to="/about">About Corona</RouterLink><br>
                <RouterLink class="" style="color:white; text-decoration: none;" to="/symptoms">Symptoms</RouterLink><br>
                <RouterLink class="" style="color:white; text-decoration: none;" to="/prevention">Prevention</RouterLink><br>
                <RouterLink class="" style="color:white; text-decoration: none;" to="/protect">protect Yourself</RouterLink><br>
                <RouterLink class="" style="color:white; text-decoration: none;" to="/faq">FAQs</RouterLink>
            </div>
            <div class="col">
                <h4>HELPFULL LINK</h4>
                <RouterLink class="" style="color:white; text-decoration: none;" to="/">Healthcare Profisionals</RouterLink><br>
                <RouterLink class="" style="color:white; text-decoration: none;" to="/">Healthcare facilities</RouterLink><br>
                <RouterLink class="" style="color:white; text-decoration: none;" to="/">Older Adults & medical condition</RouterLink><br>
                <RouterLink class="" style="color:white; text-decoration: none;" to="/">Repare your Family</RouterLink><br>
                
            </div>
           
            <div class="col">
                <h4>IMPORTANT Link</h4>
                <RouterLink class="" style="color:white; text-decoration: none;" to="/">WHO website</RouterLink><br>
                <RouterLink class="" style="color:white; text-decoration: none;" to="/">CDC Website</RouterLink><br>
                <RouterLink class="" style="color:white; text-decoration: none;" to="/">NHS Website</RouterLink><br>
                <RouterLink class="" style="color:white; text-decoration: none;" to="/">Harvard Health</RouterLink><br>
                
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col"><p>2021 covid-19 Template Made by AmanyAbdelfatah thanks to -Mina karam Ghoprial- </p></div>
            <div class="col"><p>privacy policy</p></div>
        </div>
        <div class="row">
            <div class="col"><p>
                we hope find this informations on website is very useful to you. this website is for general information and 
                raise awareness of 2019-covid only. all the information is based on CDC, WHO, NHS Website. information on our website is meant for awareness.
            </p></div>
        </div>
    </div>
</div>
</template>
<style>
@media screen and (max-width: 600px) {
  .mobile-view{
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
  }
}
</style>