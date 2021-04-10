<template>
    <div class = "card country-list" style = "width:18rem">
        <ul class='list-group list-group-flush'>
            <li id='list'
                @mouseover="mouseOver(index)"
                @mouseleave="mouseLeft(index)"
                @mousedown="mouseClick(index)"
                v-for="(country,index) in countries" 
                :key="index" 
                class = "list-group-item">
                {{country.name}}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props:{
            countries:Array
        },
        methods:{
            mouseOver:function(index){
                this.$emit('mouse-over-country', index)
            },
            mouseLeft:function(index){
                this.$emit('mouse-left-country', index)
            },
            mouseClick:function(index){
                this.$emit('mouse-click-country',index)
            }
        }
    }
</script>
<style scoped>
list:hover{
    background-color: darkgrey;
}
.country-list{
    overflow-y:scroll;
    height:95vh;
    text-align: center;
}
</style>


