<template>
    <div id="hero">
        <div class="container">
            <div class="row">
                <b-navbar toggleable="lg" type="dark" variant="" class="navbar" :class="$mq">
                   <b-navbar-brand href="#" id="bar_brand">tutoBOSS</b-navbar-brand>
                   <b-span class="glyphicon glyphicon-th"></b-span>
                   <b-navbar-toggle target = "nav-collapse" class="navbar-toggler"></b-navbar-toggle>
                   <b-collaps>
                       <b-navbar-nav class="business">
                           <b-nav-item href="#" class="items" :class="$mq">tutoBOSS for business</b-nav-item>
                           <b-nav-item href="#" class="items" :class="$mq">become an instructor</b-nav-item>  
                       </b-navbar-nav>
                       <b-navbar-nav>
                           <b-nav-item-dropdown text="Categories" class="categories">
                               <b-dropdown-item href="#" class="items" :class="$mq">Coding</b-dropdown-item>
                               <b-dropdown-item href="#" class="items" :class="$mq">Gaming</b-dropdown-item>
                               <b-dropdown-item href="#" class="items" :class="$mq">3D</b-dropdown-item>
                           </b-nav-item-dropdown>
                       </b-navbar-nav>
                       <b-navbar-nav right class="signUp">
                           <b-button type="button" class="my-2 my-sm-0" id="up" >Sign Up</b-button>
                           <b-button type="button" class="my-2 my-sm-0" id="in">Login</b-button>
                       </b-navbar-nav>
                       <b-navbar-nav class="search">
                           <b-nav-form>
                               <b-form-input size="sm" class = "mr-sm-2" placeholder="Search for tutorials"></b-form-input>
                               <b-button size="sm" class="my-2 my-sm-0" type="submit">@</b-button>
                           </b-nav-form>
                       </b-navbar-nav>
                   </b-collaps>
                </b-navbar>
            </div>
            <div class="row pt-lg-6 pb-lg-6 pt-5"><!--add the pt-lg-6 to custom.scss -->
                 <b-jambotron header="Learn everything" leader="Study what you want, explore for free" id="jambo" class="col-md-6 col-sm-12">
                     
                 </b-jambotron>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppNav'
}
</script>

<style lang="css">
.navbar{
    background-color: #141715;
    width: 100%;
    background: none !important;
    }
 .phone{
        -webkit-text-fill-color: antiquewhite;
        background-color: #141715 !important;
 }
.navbar-toggler{
        cursor: pointer;
        outline: 0;
 }
.items{
        font-weight: bold;
        outline: 0;
        padding: 5px;
}
.phone{
             font-weight: normal;
            padding: 0px;
}

     

#bar_brand::first-letter{
    color: red;
}
#bar_brand{
    align-self: left;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;
    font-size-adjust: 12px;
}
.glyphicon-th{
    color:red;
    font-size: 15px;
    -webkit-text-fill-color: red;
}
.business{
    float: right;
    -moz-float-edge: rigth;
    align-self: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;
    color: aliceblue;
}
.categories{
    font-family: Arial, Helvetica, sans-serif;
    float: left;
    align-self:right;
}
.signUp{
    float: left;
    align-self: left;
    font-family: Arial, Helvetica, sans-serif;
}
#up{
    background-color: #0a66cf;
}
#in{
    background-color: antiquewhite;
    outline-color: #6008a8;
}
.search{
    align-self: center;
    float: center;
}
#hero{
    background-image: url('https://www.cbtnuggets.com/blog/wp-content/uploads/2018/09/180917b.png') no-repeat;
    background-size: cover;
    background-position: 0 60%;
    width: 100%;
}
#jambo{
    font-family: Arial, Helvetica, sans-serif;
}

</style>
