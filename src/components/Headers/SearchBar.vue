<template>
     <div class="searcher">
 <sui-dropdown
    :options="animals"
    placeholder= "Search Animal..."
    search
    selection
    v-model.lazy="current"
  /> 
    </div>
</template>

<script>
import database from '../../firebase.js';
export default {
  data() {
    return {
     animals: [

     ],
      current: null,
    };
  },
  methods: {
             fetchItems:function() {
        database.collection('Animals').get().then(snapshot => {
            snapshot.docs.forEach(doc => {
              var name = doc.data().genericName;
              var status = doc.data().status;
              this.animals.push({value:name, text:name, status: status});
    })
})
         },
         findStatus:function(name) {
           var filtered = this.animals.filter(element => element.text == name);
           return filtered[0].status;
         }

  },
  watch: {
    current:function(val) {
      var status = this.findStatus(val);
      this.$router.push({ name: 'indivAnimal', params: { name: val, status: status }});
    }
  },
  created:function() {
    this.fetchItems();
  }
};
</script>

<style scoped>
.searcher {
  position: absolute;
  left: 80%;
  top: 130px;
  z-index: 4;
  border: 1px solid white;
}
</style>