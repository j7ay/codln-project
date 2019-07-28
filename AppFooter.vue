<template>
    <div>
        <b-footer class="page-footer pt-4">
            <div class="container">
                <div class="text-left">
                    <p :class="$mq">tutoBoss</p>
                </div>
                <div class="text-center">
                    <p :class="$mq">&copy;2019: Joy Dzakpasu</p>
                </div>
                <div class="text-right">
                    <p :class="$mq">Policy and Cookie Policy</p>
                </div>
            </div>
        </b-footer>
    </div>
</template>

<script>
export default {
    name:'AppFooter'
}
</script>

<style lang="css">
.page-footer{
    background-color:#19211b;
    width: 100%;
    height: auto;

}
.phone{
          font-weight: normal;
    }
.tablet{
     font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: 150px;
}
.desktop{
     font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    font-weight: 150px;
}
</style>
