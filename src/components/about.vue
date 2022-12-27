<template>
    <div class="container  bg-light">
     <div class=" row first-row">
        <div class="col-md-6 col-12">
            <h5 class=" text-primary ">About the Desease</h5>
            <h1 class="corona_text">CORONAVIRUS (COVID_19)</h1>
            <p style="text-align: justify;"> <span class="para">Covid19 is a new illness that can affect your lungs and the airways.</span>
                 its caused by a virus called coronavirus
                it was Dicovered in December 2019 in wuhan, Hubi China
            </p>
            <p style="text-align: justify;">The best way to prevent and slow down transmission is to be well informed about the disease and how the virus spreads.
                 Protect yourself and others from infection by staying at least 1 metre apart from others, wearing a properly fitted mask,
                  and washing your hands or using an alcohol-based rub frequently. 
                  Get vaccinated when it's your turn and follow local guidance.
            </p>
            <p style="text-align: justify;">
                The virus can spread from an infected person's mouth or nose in small liquid particles when they cough,
                 sneeze, speak, sing or breathe. These particles range from larger respiratory droplets to smaller aerosols.
                  It is important to practice respiratory etiquette, 
                  for example by coughing into a flexed elbow, and to stay home and self-isolate until you recover if you feel unwell.
            </p>
            
        </div>
        <div class="col-md-6 col-12 d-flex justify-content-end div2">
            <table class="text-center py-5 my-5 px-5 mx-5">
                <tr><td class="first_table_row">What your Need To Know? </td></tr>
                <tr><td class="big_table"><routerLink class="nav-link " to="/spread">How Coronavirus IS Spread -></routerLink></td></tr>
                <tr><td class="big_table"><routerLink class="nav-link " to="/symptoms">Symptoms of corona virus -></routerLink></td></tr>
                <tr><td class="big_table"><routerLink class="nav-link " to="/protect">How to Protect Yourself-></routerLink></td></tr>
                <tr><td class="big_table"><routerLink class="nav-link " to="/treatment">Treatment For Corona Virus -></routerLink></td></tr>
                <tr><td class="big_table"><routerLink class="nav-link " to="">Myth-Busters For CoronaVirus -></routerLink></td></tr>
                <tr><td class="big_table"><routerLink class="nav-link " to="/faq">Questions & Answers -></routerLink> </td></tr>
            </table>
        </div>
     </div>
    </div>

</template>
<style>

 @media screen and (max-width: 767px) {
   
    
    table{
        width:100%;
    }
}
</style>