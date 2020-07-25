<template>
  <div>

    <div class="card mb-3" style="width: 23rem;">
      <img class="card-img-top" height="300px" :src="zone.Picture1" :alt="zone.Picdescribe1">
      <div class="card-img-overlay">
        <h3 class="card-title">{{zone.Name}}</h3>
      </div>
      <ul class="list-group list-group-flush">
        <li v-if="zone.Opentime.length > 20" class="list-group-item" :class="{'not-active': isActiveA}">{{zone.Opentime | textFilter}}<a href="#" @click.prevent="moreInfoA"><small>查看更多</small></a></li>
        <li v-else class="list-group-item">{{zone.Opentime}}</li>
        <li v-if="isActiveA" class="list-group-item">{{zone.Opentime}}</li>

        <li v-if="zone.Add.length > 20" class="list-group-item" :class="{'not-active': isActiveB}">{{zone.Add | textFilter}}<a href="#" @click.prevent="moreInfoB"><small>查看更多</small></a></li>
        <li v-else class="list-group-item">{{zone.Add}}</li>
        <li v-if="isActiveB" class="list-group-item">{{zone.Add}}</li>
        
        <li v-if="zone.Tel.length > 20" class="list-group-item" :class="{'not-active': isActiveC}">{{zone.Tel | textFilter}}<a href="#" @click.prevent="moreInfoC"><small>查看更多</small></a></li>
        <li v-else class="list-group-item">{{zone.Tel}}</li>
        <li v-if="isActiveC" class="list-group-item">{{zone.Tel}}</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
    data(){
        return{
          isActiveA:false,
          isActiveB:false,
          isActiveC:false,
        }
    },
    props:{
        zone:{
            type:Object,
            required:true
        }
    },
    methods:{
      moreInfoA(){
        this.isActiveA = !this.isActiveA;
      },
      moreInfoB(){
        this.isActiveB = !this.isActiveB;
      },
      moreInfoC(){
        this.isActiveC = !this.isActiveC;
      }
    }
}
</script>

<style lang="scss" scoped>
.card{
  text-align:left;
}
.card-img-overlay{
    margin-top:230px;
    color: white;
}
.not-active {
  pointer-events: none;
  cursor: default;
  text-decoration: none;
  color: gray;
  display:none;
}

</style>