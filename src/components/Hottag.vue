<template>
  <div>
      <button class="btn btn-md" v-for="(item,index) in rankIndex" :key="index" :class="TagColor(index)" @click="TagSearch(item)">{{item}}</button>
  </div>
</template>>

<script>
export default {
    data(){
        return{
            TagCounter:[],
            AllTagRank:[],
        }
    },
    props:{
        zoneIndex:{
          type:Array,
          required:true
        },
        filter:{
          type:String,
          required:true
        }
    },
    watch:{
      filter: function(val){
        this.counterHandler(val)
        this.rankHandler();
      },
      zoneIndex:function(val){

        this.storgeInsert();

        let temp = this.TagCounter.map(function(item){
        return item.name;
        })

        val.forEach(item =>{
          if(temp.indexOf(item) === -1){
            this.TagCounter.push({
              name:item,
              counter:0
            })
          }
        })

        this.saveStorge(this.TagCounter);
        this.rankHandler();
      }
    },
    methods:{
      storgeInsert(){
        let temp;
        temp = JSON.stringify(this.$store.getters['counterIndex']);
        this.TagCounter = JSON.parse(temp)
      },
      saveStorge(val){
        let temp;
        temp = JSON.stringify(val)
        this.$store.commit('save_index',temp)
      },
      counterHandler(val){
        let Result

        this.TagCounter.forEach(item => {
          if(item.name === val){
            item.counter++
          }
        })

        Result = this.TagCounter.map(function(item){
          return item.name
        }).indexOf(val)

        this.$store.commit('counter_index',Result)
      },
      rankHandler(){
        this.AllTagRank = [];
        this.TagCounter.forEach(item=>{
          this.AllTagRank.push(item)
        })
        this.AllTagRank.sort(function(a,b){
            return a.counter < b.counter ? 1 : -1;
        })
      },
      TagSearch(val){
        this.$emit('selTag',val)
      },
      TagColor(val){
        switch (val){
          case 0:
            return 'btn-danger'
          case 1:
            return 'btn-orange'
          case 2:
            return 'btn-warning'
        }
      },

    },
    computed:{
      rankIndex(){
        let Result = [];
        if(this.AllTagRank.length > 0){
          for(let i=0;i<3;i++){
            Result[i] = this.AllTagRank[i].name
          }
        }
        return Result
      }
    },
    mounted(){
    }
}
</script>

<style lang="scss" scoped>
button{
  margin: 10px;
  padding: 10px 30px;
}

.btn-orange {
  background-color:orange;
  color: black;
}
</style>