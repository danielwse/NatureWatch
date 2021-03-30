<template>
    <div>
        <PlayHeader></PlayHeader>
        <span class="bigWhite">Welcome to </span>
        <span class="lightGreen">Play to Plant!</span><br>
        <span class="green">for every 5 questions that you answer correctly NatureWatch donates the costs<br>
            required to plant a tree in the Amazon Rainforest!</span><br><br>
        <span class="green">In collaboration with</span> nbsp
        <img src="../assets/oneTreePlanted_logo.png" alt="Not found" style="width:168px"><br>
        <span class="smallWhite">Click me to start planting trees!</span> nbsp
        <img src="../assets/plant.svg" style="width:400px" v-on:click="showModal">
        <Modal v-show="isModalVisible" v-on:close="closeModal"/>


    </div>
</template>

<script>
import Modal from './Modal.vue';
import PlayHeader from './Headers/Play.vue';
import firebase from "firebase";

export default {
    name: 'QuizCover',
    components: {
        Modal,
        PlayHeader
    },
    data() {
        return {
            isModalVisible: false,
        }
    },
    methods:{
        showModal:function() {
            console.log(firebase.auth().currentUser);
            if (firebase.auth().currentUser!=null) this.$router.push('/Questions');
            else this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        }
    },
    created:function() {
        document.body.style.backgroundColor = "#343434"
    }
}
</script>

<style scoped>
    * {
        font-family: "Mohave"
    }
    .bigWhite {
        color:#FFFFFF;
        font-size: 64px;
    }
    .smallWhite {
        color:#FFFFFF;
        font-size:24px;
        vertical-align: bottom;
        line-height:400px;
    }
    .lightGreen{
        color: #4FE11C;
        font-size: 64px;
    }
    .green{
        color: #A2EA89;
        font-size:24px;
    }
</style>