<template>
  <page title="checkbox" @handleNavLeftClick="back">
    <template #main>
      <div class="items">
        <p class="item_title">单组checkbox</p>
        <vill-checkbox v-model="value_1">单组checkbox</vill-checkbox>
        <p class="item_change">{{value_1}}</p>
      </div>
      <div class="items">
        <p class="item_title">单组checkbox-禁用</p>
        <vill-checkbox v-model="value_2" :disabled="true">单组checkbox</vill-checkbox>
        <p class="item_change">{{value_2}}</p>
      </div>
      <div class="items">
        <p class="item_title">单组checkbox-使用option</p>
        <vill-checkbox
          v-model="value_3"
          labelPosition="left"
          :option="option"
        />
        <p class="item_change">{{value_3}}</p>
      </div>
      <div class="items">
        <p class="item_title">checkbox组</p>
        <vill-checkbox-group
          v-model="value_4"
          optionValueKey="val"
          optionLabelKey="text"
          :options="options1"
        />
        <p class="item_change">已选择：{{value_4}}</p>
      </div>
      <div class="items">
        <p class="item_title">checkbox组-横向排列</p>
        <vill-checkbox-group
          v-model="value_5"
          :options="options2"
          :horizontal="true"
          :column="2"
        />
        <p class="item_change">已选择：{{value_5}}</p>
      </div>
      <div class="items">
        <p class="item_title">checkbox组-最多选3项，最少一项</p>
        <vill-checkbox-group
          v-model="value_6"
          :options="options3"
          labelPosition="left"
          :min='1'
          :max='3'
        />
        <p class="item_change">已选择：{{value_6}}</p>
      </div>
      <div class="items">
        <p class="item_title">checkbox组-slot</p>
        <vill-checkbox-group v-model="value_7">
          <vill-checkbox
            labelPosition="left"
            option="1"
          />
          <vill-checkbox
            option="2"
          />
          <vill-checkbox
            :option="{value: 3, label: 3}"
          />
        </vill-checkbox-group>
        <p class="item_change">已选择：{{value_7}}</p>
      </div>
    </template>
  </page>
</template>
<script>
import PageMixin from '@/utils/mixins/page.js'
export default {
  mixins: [PageMixin],
  data() {
    return {
      value_1: false,
      value_2: true,
      value_3: false,
      option: {
        value: 1,
        label: '单组checkbox-使用option'
      },
      value_4: [],
      options1: [
        {
          val: 1,
          text: '苹果'
        },{
          val: 2,
          text: '橘子'
        },{
          val: 3,
          text: '桃子'
        }
      ],
      value_5: [2, 3],
      options2: [
        {
          value: 1,
          label: '苹果1'
        },{
          value: 2,
          label: '橘子1'
        },{
          value: 3,
          label: '桃子1'
        },
        {
          value: 4,
          label: '桃子11',
          disabled: true
        }
      ],
      value_6: [1],
      options3: [
        {
          value: 1,
          label: '苹果1'
        },{
          value: 2,
          label: '橘子1'
        },{
          value: 3,
          label: '桃子1'
        },
        {
          value: 4,
          label: '桃子11'
        }
      ],
      value_7: ['1']
    }
  }
}
</script>
