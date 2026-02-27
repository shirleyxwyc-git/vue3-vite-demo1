<script setup>
import { reactive } from 'vue'
import { ref } from 'vue'
import { computed } from 'vue'

//reactive({})
const state = reactive({
  count: 0,
})

const addCount = () => {
  state.count++
}

//ref() or ref({})
const number = ref(100)

const addNumber = () => {
  // script区域修改ref产生的响应式对象数据 必须通过.value属性
  number.value++
}

// computed()
const list = ref([1, 2, 3, 4, 5, 6])

const computedNewList = computed(() => {
  return list.value.filter((number) => number > 2)
})

// watch(（）=>{}): 監聽單個數據源
import { watch } from 'vue'
const data = ref(999)
const setData = () => {
  data.value++
}

watch(data, (newValue, oldValue) => {
  console.log('data變化了, 新值： ', newValue, '舊值： ', oldValue)
})

// watch(（）=>{}): 監聽多個數據源
const digit = ref(80)
const name = ref('Peter')

const changeDigit = () => {
  digit.value = digit.value * 2
}

const changeName = () => {
  name.value = 'Andy'
}

watch([digit, name], ([newDigit, newName], [oldDigit, oldName]) => {
  console.log('digit or name 變化了, 新值： ', newDigit, newName, '舊值： ', oldDigit, oldName)
})

// immediate ：watch () 的额外参数 ,需要以對象參數傳入{immediate:true}
const num = ref(100_000)

const addNum = () => {
  // script区域修改ref产生的响应式对象数据 必须通过.value属性
  num.value++
}

watch(
  num,
  (newNum, oldNum) => {
    console.log('num變化了, 新值： ', newNum, '舊值： ', oldNum)
  },
  {
    immediate: true,
  },
)

// deep ：watch () 的额外参数 ,需要以對象參數傳入{deep:true}
const val = ref({
  number: 0,
})

const addVal = () => {
  // script区域修改ref产生的响应式对象数据 必须通过.value属性 .number
  val.value.number++
}

watch(
  val,
  () => {
    console.log('val變化了')
  },
  {
    deep: true,
  },
)

// 方法一：watch 具體屬性
watch(
  () => val.value.number,
  (newVal, oldVal) => {
    console.log('val.number變化了, 新值：', newVal, '舊值：', oldVal)
  },
)

//
const person = ref({
  name: 'Jenny',
  age: 20,
})

const changeAge = () => {
  person.value.age = person.value.age + 2
}

watch(
  () => person.value.age,
  () => {
    console.log('age變化了')
  },
  {
    deep: true,
  },
)
</script>

<template>
  <!-- Vue 3 允許同時有 <header> 和 <main> 兩個頂級元素，無需包裹 
  Vue 2 要求【唯一根元素】 -->
  <header></header>
  <main>
    <button @click="addCount">{{ state.count }}</button> <br />

    <!-- template中不需要.value属性 -->
    <button @click="addNumber">{{ number }}</button> <br />

    <div>Original List : {{ list }}</div>
    <div>New List : {{ computedNewList }}</div>
    <br />

    <div>
      <button @click="setData">+ {{ data }}</button>
    </div>

    <div>
      <button @click="changeDigit">修改digit ： {{ digit }}</button>
      <button @click="changeName">改name ：{{ name }}</button>
    </div>

    <div>
      <button @click="addNum">num : {{ num }}</button> <br />
    </div>

    <div>
      {{ val.number }}
      <button @click="addVal">通過addVal修改及deep深度監聽</button> <br />
    </div>

    <div>
      age : {{ person.age }} <button @click="changeAge">通過changeAge修改及deep深度監聽</button>
      <br />
    </div>
  </main>
</template>

<style scoped></style>
