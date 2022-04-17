<script setup lang="ts">
import { ElInputNumber, ElButton } from 'element-plus/dist/index.full.js';
import { useCounterStore } from '~/store/counter';

const counterStore = useCounterStore();
</script>

<template>
  <div class="container mx-auto p-10">
    <h2 class="text-3xl text-center pb-5">Nuxt 3 Simple Boilerplate</h2>

    <section class="text-center">
      <div class="pb-3">
        <el-input-number v-model="counterStore.counter" :min="0" :max="25" />
      </div>

      <el-button type="primary" @click="counterStore.increment"
        >Increment</el-button
      >
      <el-button type="success" @click="counterStore.increment"
        >Increment</el-button
      >
      <el-button type="warning" @click="counterStore.increment"
        >Increment</el-button
      >
      <el-button type="danger" @click="counterStore.increment"
        >Increment</el-button
      >
      <el-button type="info" @click="counterStore.increment"
        >Increment</el-button
      >
    </section>
  </div>
</template>
