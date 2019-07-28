<template>
    <div class="feature-wrapper pt-5 pb-5 mt-5 mt-lg-0" id="grid">
        <b-container class="container ">
            <b-row class="grid-row">
                <b-col class="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
                    <b-i class="icons glyphicon glyphicon-list-alt"></b-i>
                </b-col>
                <b-col class="col-sm-12 col-md-3 text-center text-md-left mb-3 mb-md-0">
                    <p>100,000 online courses</p>
                    <p>Explore a variety of categories</p>
                </b-col>
                <b-col class="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
                    <b-i class="icons fa fa-user-o" aria-hidden="true"></b-i>
                </b-col>
                <b-col class="col-sm-12 col-md-3 text-center text-md-left mb-3 mb-md-0">
                    <p>Best Fellow</p>
                    <p>Available anytime</p>
                </b-col>
                <b-col class="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
                    <i class="icons fa fa-download" aria-hidden="true"></i>
                </b-col>
                <b-col class="col-sm-12 col-md-3 text-center text-md-left mb-3 mb-md-0">
                    <p>Free For Ever</p>
                    <p>Offline Downloads</p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'AppGrid'
}
</script>

<style lang='css'>
.feature-wrapper{
        background-color:#6008a8 !important;       
}
.icons{
            font-size: 25px;
            outline: black;
}
p{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 10px;
    font-weight: normal;
    letter-spacing: 1.2px;
}
</style>
