<template>
    <div >
        <b-nav class="nav-items" :class="$mq">
           <b-nav-item class="nav-links active">Coding</b-nav-item>
           <b-nav-item class="nav-link">Coding</b-nav-item>
           <b-nav-item class="nav-link">Coding</b-nav-item>
        </b-nav>
        <b-container class="container">
            <b-row>
                <b-col class="col-sm-12 col-md-3 text-left" id="text_row">
                    <p>The most popular selection of courses</p>
                    <p>Choose everything is free</p>
                </b-col>
               <div class="col-sm-12 col-md-6 text-center" id="thumbnails" >
                    <b-col >
                         <b-img thumbnail="" fluid="" class="img-thumbnail img-fluid" src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi7utrevtXjAhVqD2MBHeCEAeoQjRx6BAgBEAQ&url=https%3A%2F%2Ffreebiesupply.com%2Flogos%2Freact-logo-2%2F&psig=AOvVaw2O6mB-_-zrOecFBOQj5Bp5&ust=1564330320261882"></b-img>
                         <div class="caption">
                             <p>The complete React course</p>
                             <h1>John Doe</h1>
                         </div>
                         <div class="star-rating">
                            <b-span class="fa fa-star checked"></b-span>
                            <b-span class="fa fa-star checked"></b-span>
                            <b-span class="fa fa-star checked"></b-span>
                            <b-span class="fa fa-star checked"></b-span>
                            <b-span class="fa fa-star "></b-span>
                         </div>
                    </b-col>    
                   <b-col>
                       <b-img thumbnail="" fluid="" class="img-thumbnail img-fluid" src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwijl--hvtXjAhXN8uAKHeZmAhoQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.brandeps.com%2Flogo%2FV%2FVue-JS-01&psig=AOvVaw2sE1stamKKjxaw-FfxpUka&ust=1564330191747241"></b-img>
                       <div class="caption">
                             <p>The complete Vue.js course</p>
                             <h1>John Doe</h1>
                         </div>
                         <div>
                            <b-span class="fa fa-star checked"></b-span>
                            <b-span class="fa fa-star checked"></b-span>
                            <b-span class="fa fa-star checked"></b-span>
                            <b-span class="fa fa-star half-checked"></b-span>
                            <b-span class="fa fa-star "></b-span>
                            <p>4.8(20,234)</p>
                            <p>&dollar;25</p>
                         </div>
                   </b-col>
                   <b-col>
                       <b-img thumbnail="" fluid="" class="img-thumbnail img-fluid" src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiB9ZGMv9XjAhUy8-AKHaQsBtEQjRx6BAgBEAQ&url=https%3A%2F%2Fworldvectorlogo.com%2Flogo%2Fangular-icon&psig=AOvVaw2EXpdouxvSq8JPVN3wWYOY&ust=1564330417262602"></b-img>
                       <div class="caption">
                             <p>The complete Angular course</p>
                             <h1>John Doe</h1>
                         </div>
                         <div class="star-rating">
                            <b-span class="fa fa-star checked"></b-span>
                            <b-span class="fa fa-star checked"></b-span>
                            <b-span class="fa fa-star checked"></b-span>
                            <b-span class="fa fa-star"></b-span>
                            <b-span class="fa fa-star "></b-span>
                            <p>4.0(12,203)</p>
                            <p>&dollar;9</p>
                         </div>
                   </b-col>
               </div>
            </b-row>
        </b-container>
        <b-container class="coding-class container">
            <b-row>
                <b-label class="text-left" for="coding_list">Coding</b-label>
                <div class="col-sm-4 col-md-12">
                     <b-col>
                         <b-img thumbnail="" fluid="" class="img-thumbnail img-fluid" src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi7utrevtXjAhVqD2MBHeCEAeoQjRx6BAgBEAQ&url=https%3A%2F%2Ffreebiesupply.com%2Flogos%2Freact-logo-2%2F&psig=AOvVaw2O6mB-_-zrOecFBOQj5Bp5&ust=1564330320261882"></b-img>
                         <div class="caption">
                             <p>The complete React course</p>
                             <h1>John Doe</h1>
                         </div>
                         <div class="star-rating">
                            <b-span class="fa fa-star checked"></b-span>
                            <b-span class="fa fa-star checked"></b-span>
                            <b-span class="fa fa-star checked"></b-span>
                            <b-span class="fa fa-star checked"></b-span>
                            <b-span class="fa fa-star "></b-span>
                            <p>4.1(13,000)</p>
                            <p>&dollar;10</p>
                         </div>
                     </b-col>
                     <b-col>
                         <b-img class="img-thumbnail img-fluid" thumbnail fluid src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-256%2Fpython-14-569257.png&imgrefurl=https%3A%2F%2Ficonscout.com%2Ficon%2Fpython-14&docid=geSQexwUXvtScM&tbnid=g4Bd3gEn6Fc2LM%3A&vet=10ahUKEwj8hcuRxtXjAhWBsXEKHTXxDBcQMwhTKAEwAQ..i&w=256&h=256&bih=695&biw=1280&q=python%20logo%20png&ved=0ahUKEwj8hcuRxtXjAhWBsXEKHTXxDBcQMwhTKAEwAQ&iact=mrc&uact=8"></b-img>
                         <div class="caption">
                             <p>The complete Python course</p>
                             <h1>John Doe</h1>
                         </div>
                         <div class="star-rating">
                             <b-span class="fa fa-star checked"></b-span>
                            <b-span class="fa fa-star checked"></b-span>
                            <b-span class="fa fa-star checked"></b-span>
                            <b-span class="fa fa-star checked"></b-span>
                            <b-span class="fa fa-star "></b-span>
                            <p>4.1(13,000)</p>
                            <p>&dollar;10</p>
                         </div>
                     </b-col>
                     <b-col>
                       <b-img thumbnail="" fluid="" class="img-thumbnail img-fluid" src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwijl--hvtXjAhXN8uAKHeZmAhoQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.brandeps.com%2Flogo%2FV%2FVue-JS-01&psig=AOvVaw2sE1stamKKjxaw-FfxpUka&ust=1564330191747241"></b-img>
                       <div class="caption">
                             <p>The complete Vue.js course</p>
                             <h1>John Doe</h1>
                         </div>
                         <div class="star-rating">
                            <b-span class="fa fa-star checked"></b-span>
                            <b-span class="fa fa-star checked"></b-span>
                            <b-span class="fa fa-star checked"></b-span>
                            <b-span class="fa fa-star half-checked"></b-span>
                            <b-span class="fa fa-star "></b-span>
                            <p>4.8(20,234)</p>
                            <p>&dollar;25</p>
                         </div>
                   </b-col>
                   <b-col>
                       <b-img class="img-thumbnail img-fluid" thumbnail fluid src="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiD69uzx9XjAhUJAGMBHXcMDHkQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.brandeps.com%2Flogo%2FF%2FFlask-01&psig=AOvVaw3Wjady1sFDdAJUF2IDTO8O&ust=1564332640386542"></b-img>
                       <div class="caption">
                             <p>The complete Flask course</p>
                             <h1>John Doe</h1>
                        </div>
                        <div class="star-rating">
                            <b-span class="fa fa-star checked"></b-span>
                            <b-span class="fa fa-star checked"></b-span>
                            <b-span class="fa fa-star checked"></b-span>
                            <b-span class="fa fa-star half-checked"></b-span>
                            <b-span class="fa fa-star "></b-span>
                            <p>4.8(20,234)</p>
                            <p>&dollar;25</p>
                        </div>
                   </b-col>
                    <b-col>
                       <b-img thumbnail="" fluid="" class="img-thumbnail img-fluid" src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiB9ZGMv9XjAhUy8-AKHaQsBtEQjRx6BAgBEAQ&url=https%3A%2F%2Fworldvectorlogo.com%2Flogo%2Fangular-icon&psig=AOvVaw2EXpdouxvSq8JPVN3wWYOY&ust=1564330417262602"></b-img>
                       <div class="caption">
                             <p>The complete Angular course</p>
                             <h1>John Doe</h1>
                         </div>
                         <div class="star-rating">
                            <b-span class="fa fa-star checked"></b-span>
                            <b-span class="fa fa-star checked"></b-span>
                            <b-span class="fa fa-star checked"></b-span>
                            <b-span class="fa fa-star"></b-span>
                            <b-span class="fa fa-star "></b-span>
                            <p>4.0(12,203)</p>
                            <p>&dollar;9</p>
                         </div>
                   </b-col>
                </div>
            </b-row>
        </b-container>
        <b-container class="container">
        <b-row>
            <b-label for="gaming_list" class="label text-left"></b-label>
            <div class="col-sm-4 col-md-12" id="gaming_list">
                <b-col>
                    <b-img class="img-thumbnail img-fluid" thumbnail fluid src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwj-tNzKydXjAhWv34UKHbSsAJ8QjRx6BAgBEAQ&url=https%3A%2F%2Fplaysoftgames.com%2Funity-3d-developer%2F&psig=AOvVaw1eK9-oFL9Mch1jeTl7XXTR&ust=1564333230350669"></b-img>
                    <div class="caption">
                        <p>The complete Unity games course</p>
                        <h1>John Doe</h1>
                    </div>
                    <div class="star-rating">
                        <b-span class="fa fa-star checked"></b-span>
                        <b-span class="fa fa-star checked"></b-span>
                        <b-span class="fa fa-star checked"></b-span>
                        <b-span class="fa fa-star"></b-span>
                        <b-span class="fa fa-star "></b-span>
                        <p>4.0(12,203)</p>
                        <p>&dollar;9</p>
                    </div>
                </b-col>
                <b-col>
                    <b-img class="img-thumbnail img-fluid" thumbnail fluid alt="EA sports" src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjjjK_BytXjAhUFy4UKHRZbDO0QjRx6BAgBEAQ&url=https%3A%2F%2Fseeklogo.com%2Fvector-logo%2F44965%2Fea-sports&psig=AOvVaw0B1XlfMi0qMSfMCIOF5vpS&ust=1564333479715162"></b-img>
                    <div class="caption">
                        <p>The complete EA sports course</p>
                        <h1>John Doe</h1>
                    </div>
                    <div class="star-rating">
                        <b-span class="fa fa-star checked"></b-span>
                        <b-span class="fa fa-star checked"></b-span>
                        <b-span class="fa fa-star checked"></b-span>
                        <b-span class="fa fa-star"></b-span>
                        <b-span class="fa fa-star "></b-span>
                        <p>4.0(12,203)</p>
                        <p>&dollar;9</p>
                    </div>
                </b-col>
                <b-col>
                    <b-img class="img-thumbnial img-fluid" thumbnail fluid alt="Unreal Engines" src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwipuu-2ytXjAhVLqxoKHYF5CF0QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.jmcacademy.edu.au%2Fnews%2Funreal-engine-advice-from-a-professional&psig=AOvVaw3MpPIsSqd6NjTHHywdtMtO&ust=1564333420404101"></b-img>
                    <div class="caption">
                        <p>The complete Unreal Engine games course </p>
                        <h1>John Doe</h1>
                    </div>
                    <div class="star-rating">
                        <b-span class="fa fa-star checked"></b-span>
                        <b-span class="fa fa-star checked"></b-span>
                        <b-span class="fa fa-star checked"></b-span>
                        <b-span class="fa fa-star"></b-span>
                        <b-span class="fa fa-star "></b-span>
                        <p>4.0(12,203)</p>
                        <p>&dollar;9</p>
                    </div>
                </b-col>
                <b-col>
                    <b-img class="img-thumbnail img-fluid" thumbnail fluid alt="dribble games" src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjFs7uazNXjAhUrzoUKHeS-C58QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fdribbble-logo_49655&psig=AOvVaw2fF9qHefiiTrOs7OLi7uxb&ust=1564333935823990"></b-img>
                    <div class="caption">
                        <p>The complete Dribble games course</p>
                        <h1>John Doe</h1>
                    </div>
                    <div class="star-rating">
                        <b-span class="fa fa-star checked"></b-span>
                        <b-span class="fa fa-star checked"></b-span>
                        <b-span class="fa fa-star checked"></b-span>
                        <b-span class="fa fa-star"></b-span>
                        <b-span class="fa fa-star "></b-span>
                        <p>4.0(12,203)</p>
                        <p>&dollar;9</p>
                    </div>
                </b-col>
                 <b-col>
                     <b-img class="img-thumbnail img-fluid" thumbnail fluid alt="Mortal Kombat" src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiB1OOvzdXjAhUR1BoKHT4hA34QjRx6BAgBEAQ&url=https%3A%2F%2Fsco.wikipedia.org%2Fwiki%2FFile%3AMortal_Kombat_Logo.svg&psig=AOvVaw3Z3FgItaG9tLjmmXAqQMkz&ust=1564334250330225"></b-img>
                     <div class="caption">
                         <p>The complete Mortal Kombat course</p>
                         <h1>John Doe</h1>
                     </div>
                     <div class="star-rating">
                        <b-span class="fa fa-star checked"></b-span>
                        <b-span class="fa fa-star checked"></b-span>
                        <b-span class="fa fa-star checked"></b-span>
                        <b-span class="fa fa-star checked"></b-span>
                        <b-span class="fa fa-star half-checked"></b-span>
                        <p>4.9(12,203)</p>
                        <p>&dollar;9</p>
                    </div>
                 </b-col>
            </div>
        </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'AppThumbnail',
    data:{ }

}
</script>

<style lang="css">
.nav-items{
    text-align: center;
    letter-spacing: 2px;
    font-family:Arial, Helvetica, sans-serif;
    columns: black;
    font-size: 20px;
    -webkit-text-fill-color: black;
    padding-top: 15px;
    font-weight:bold;
}
.phone{
        padding: 0px;
        background-color:#ffffff;
        font-weight:normal;
}
.nav-link:hover{
    background-color:#6008a8;
}
#text_row{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    color:black;
}
#thumbnails{
    font-family: Arial, Helvetica, sans-serif;
}
h1{
    font-weight: bold;
    font-size: 13px;
}
p{
    font-weight: normal;
}
img{
   widows: 50px;
   width: 50px;
   height: 75px;
}
.star-rating{
    color: yellow;
}
.container{
    padding-top:10px;
    padding-left: 5px;
    padding-right:5px;
}
</style>


