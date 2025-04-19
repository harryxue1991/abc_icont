<template>
  <div class="common-layout">
    <el-container>
      <el-header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon><location /></el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-sub-menu index="1-4">
                <template #title>item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
            <el-menu-item index="2">
              <el-icon><icon-menu /></el-icon>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <el-icon><document /></el-icon>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <el-icon><setting /></el-icon>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <el-date-picker
            v-model="value2"
            type="date"
            placeholder="Pick a day"
            :disabled-date="disabledDate"
            :shortcuts="shortcuts"
          />
          <el-button type="primary" @click="toggleDark()">hello</el-button>
          <el-color-picker v-model="layoutThemeColor" @change="activeChange	" />
          <div>color: {{ color1 }}</div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { useDark, useToggle, useStorage } from '@vueuse/core'
import { ref } from 'vue'
import { useElementPlusTheme } from 'use-element-plus-theme'
import themeButton from '~/components/theme-button.vue'

const layoutThemeColor = useStorage('layout-theme-color', 'pink')
const { changeTheme } = useElementPlusTheme(layoutThemeColor.value)
const activeChange = (color) => {
  changeTheme(color)
}

const isDark = useDark()
const toggleDark = useToggle(isDark)
const color1 = ref('')

const value2 = ref('')
const shortcuts = [
  {
    text: 'Today',
    value: new Date(),
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: 'A week ago',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]
const disabledDate = (time) => {
  return time.getTime() > Date.now()
}

</script>

<style scoped lang="scss">

</style>