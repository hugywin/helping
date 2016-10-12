<template>
  <div class="add-wrap">
    <x-header :left-options="{showBack: true, backText: '加入计划'}">
      <a>添加被保障人</a>
    </x-header>
    <div class="list-block list_block_common">
      <ul>
        <li class="item-content">
          <div class="item-inner">
            <div>
              <div class="item-title" style="font-size:.8rem;"><b>填写被保障人信息</b></div>
              <div class="item-subtitle" style="font-size: 0.6rem;color:#9b9b9b;margin-top:.4rem;"><span style="color:red">*</span> 请放心！我们会严格遵守法律法规，保护你的个人信息和隐私</div>
            </div>

        </div></li>
        <li>
          <div class="item-content">
            <div class="item-inner">
              <div class="item-title label">真实姓名</div>
              <div class="item-input">
                <input type="text" placeholder="被保障人姓名" value="">
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content">
            <div class="item-inner">
            <div class="item-title label">身份证号</div>
              <div class="item-input">
                <input type="text" placeholder="仅用于申请保障，严格保密" value="">
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="item-content">
        <div class="item-inner">
          <div class="item-input">
            <input type="email" placeholder="选填: 输入您的Email接收保障消息" value="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XHeader, XButton} from 'vux/src/components'
export default {
  components: {
    XHeader,
    XButton
  }
}
</script>

<style lang="less">

</style>
