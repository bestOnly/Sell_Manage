<template>
  <ul class="data-box">
    <li v-for="item in CardList" :key="item.id">
      <i :class="'iconfont '+item.icon+' '+item.cls" ></i>
      <div class="detail">
        <span>{{ item.uname }}</span>
        <p>{{ item.num }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    CardList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.data-box {
  display: flex;
  justify-content: space-around;
  li {
    width: 300px;
    height: 100px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 30px;
    box-sizing: border-box;
    border-radius: 5px;
    i {
      font-size: 70px;
    }
    .one {
      color: rgb(58, 199, 255);
    }
    .two {
      color: hotpink;
    }
    .three {
      color: rgb(62, 162, 255);
    }
    .four {
      color: rgb(96, 255, 104);
    }
    .detail {
      text-align: center;
      span {
        color: #ccc;
      }
      p {
        font-weight: 700;
        margin-top: 10px;
      }
    }
  }
}
</style>
