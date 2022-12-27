<template>
  <div class="head">
    <div>
   

      <nav class="navbar d-flex flex-row m-auto nv justify-content-between">
        <div class="logo">
          <h3 class="">
            C<img style="width: 30px; height: 30px" src="../assets/imgs/titleicon.png"/>VID19
                </h3>
        </div>
        <div class="links align-items-center ">
          <ul class="navbar-nav d-flex flex-row px-5 mx-1">
            <li class="nav-item d-none d-lg-flex">
              <router-link class="nav-link px-3 mx-1" aria-current="page" to="/">Home</router-link >
            </li>
            <li class="nav-item d-none d-lg-flex">
              <routerLink class="nav-link px-3 mx-1" to="/about">about Corona</routerLink>
            </li>
            <li class="nav-item d-none d-lg-flex">
              <routerLink class="nav-link px-3 mx-1" to="/symptoms">Symptoms</routerLink>
            </li>
            <li class="nav-item d-none d-lg-flex">
              <routerLink class="nav-link px-3 mx-1" to="/prevention">Prevention</routerLink>
            </li>
            <li class="nav-item d-none d-lg-flex">
              <routerLink class="nav-link px-3 mx-1" to="/treatment">Treatment</routerLink>
            </li>
            <li class="nav-item d-none d-lg-flex">
              <routerLink class="nav-link px-3 mx-1" to="/faq">FAQ</routerLink>
            </li>
            <li class="nav-item d-none d-lg-flex">
              <routerLink class="nav-link px-3 mx-1" to="/news">News</routerLink>
            </li>
            <li class="nav-item d-none d-lg-flex">
              <routerLink class="buttn btn-primary p-2 mx-3" to="/do">Do & Don't</routerLink>
            </li>
            <span class="d-flex d-lg-none" style="font-size:30px;cursor:pointer" @click="openNav()">&#9776; </span>
          </ul>
          <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
            <router-link class="nav-link px-3 mx-1" aria-current="page" to="/"  @click="closeNav()">Home</router-link >

              <routerLink class="nav-link px-3 mx-1" to="/about"  @click="closeNav()">about Corona</routerLink>

              <routerLink class="nav-link px-3 mx-1" to="/symptoms" @click="closeNav()">Symptoms</routerLink>

              <routerLink class="nav-link px-3 mx-1" to="/prevention"  @click="closeNav()">Prevention</routerLink>

              <routerLink class="nav-link px-3 mx-1" to="/treatment" @click="closeNav()">Treatment</routerLink>

              <routerLink class="nav-link px-3 mx-1" to="/faq"  @click="closeNav()">FAQ</routerLink>

              <routerLink class="nav-link px-3 mx-1" to="/news"  @click="closeNav()">News</routerLink>

              <routerLink class="buttn btn-primary p-2 mx-3" to="/do"  @click="closeNav()">Do & Don't</routerLink>

          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
methods: {

  openNav() {
        document.getElementById("mySidenav").style.width = "250px";
       
      },
      
  closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
}

}
 </script>
