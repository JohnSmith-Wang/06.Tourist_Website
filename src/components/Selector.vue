<template>
 <div class="container">



      <div class="row justify-content-center">
        <div class="col-md-8">
          <h1>高雄旅遊資訊</h1>
          <div class="mb-4">
            <div class="input-group">
              <select class="form-control form-control-md" v-model="Target" @change="TargetHandler">
                <option value="">--- 請選擇城市 ---</option>
                <option :value="item" v-for="(item,index) in zone" :key="index">{{item}}</option>
              </select>
            </div>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      Target:'',
    }
  },
  props:{
    zone:{
      type:Array,
      required:true
    },
    tagTarget:{
      type:String
    }
  },
  methods:{
    TargetHandler(e){
      let val = e.target.value
      this.$emit('selTarget',val)
    }
  },
  watch:{
    tagTarget:function(val){
      this.Target = val
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: white;
  text-align: center;
  margin-bottom: 50px;
}

select {
  background: rgba(255,255,255,0.70);
}
</style>