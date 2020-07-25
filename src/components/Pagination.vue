<template>
  <div>

<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item" :class="{'not-active': nowPage === 1}" @click.prevent="pageChangeEmit(nowPage-1)">
      <a class="page-link" aria-label="Previous"  >
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>

    <li class="page-item" v-for="index in totalPage" :key="index" :class="{'active': nowPage === index}">
      <a class="page-link" @click.prevent="pageChangeEmit(index)">{{index}}</a>
    </li>

    <li class="page-item" :class="{'not-active': nowPage === totalPage}" @click.prevent="pageChangeEmit(nowPage+1)">
      <a class="page-link" aria-label="Next" >
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>

  </div>
</template>

<script>
export default {
  data(){
    return{
        
    }
  },
  props:{
    dataLength:{
      type:Number,
      required:true  
    },
    nowPage:{
      type:Number,
      required:true
    }
  },
  methods:{
    pageChangeEmit(val){
      this.$emit('pageChange',val)
    }
  },
  computed:{
    totalPage(){
      return Math.ceil(this.dataLength/9)
    },
  }
}
</script>

<style lang="scss" scoped>
.not-active {
  pointer-events: none;
  cursor: default;
  text-decoration: none;
  color: gray;
}

.page-item{
  cursor: pointer;
}

</style>