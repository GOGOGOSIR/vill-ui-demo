<template>
  <page title="date-picker" @handleNavLeftClick="back">
    <template #content>
      <div class="items">
        <p class="item_title">日期</p>
        <vill-button title="日期" @click="dateVisibles=true"></vill-button>
      </div>
      <div class="items">
        <p class="item_title">时间</p>
        <vill-button title="时间" @click="timeVisibles=true"></vill-button>
      </div>
      <div class="items">
        <p class="item_title">限制时间范围</p>
        <vill-button title="限制时间范围" @click="timeVisibles2=true"></vill-button>
      </div>
      <vill-date-picker
        v-model="dateVisibles"
        type="date"
        :formatter="datePickerFormatter"
        :minDate="new Date(2008,7,12)"
        :value="new Date(2007, 2, 23)"
        :maxDate="new Date(2021,4,23)"
        @select="handleDatePicker"
      />
      <vill-date-picker
        v-model="timeVisibles"
        type="hour-minute"
        :formatter="datePickerFormatter"
        @select="handleDatePicker"
      />
      <vill-date-picker
        v-model="timeVisibles2"
        type="time"
        :minDate="[12, 12, 12]"
        :maxDate="[22, 22, 22]"
        :value="[19, 19, 19]"
        :formatter="datePickerFormatter"
        @select="handleDatePicker"
      />
    </template>
  </page>
</template>
<script>
import PageMixin from '@/utils/mixins/page.js'
export default {
  mixins: [PageMixin],
  data () {
    return {
      dateVisibles: false,
      timeVisibles: false,
      timeVisibles2: false
    }
  },
  methods: {
    handleDatePicker(pickerSelectedValue, pickerSelectedIndex, pickerSelectedLabel) {
      console.log(pickerSelectedValue, pickerSelectedIndex, pickerSelectedLabel)
    },

    datePickerFormatter(type, value) {
      let text = ''
      switch (type) {
        case 'year':
          text = '年'
          break
        case 'month':
          text = '月'
          break
        case 'date':
          text = '日'
          break
        case 'hour':
          text = '时'
          break
        case 'minute':
          text = '分'
          break
        case 'second':
          text = '秒'
          break
      }
      return value + text
    }
  }
}
</script>
