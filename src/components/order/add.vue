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
              <div class="item-title" style="font-size:1.5rem;"><b>填写被保障人信息</b></div>
              <div class="item-subtitle" style="font-size: 0.6rem;color:#9b9b9b;margin-top:.4rem;"><span style="color:red">*</span> 请放心！我们会严格遵守法律法规，保护你的个人信息和隐私</div>
            </div>

        </div></li>
        <li>
          <div class="item-content" style="min-height: 3rem; font-size: 1.4rem;">
            <div class="item-inner" style="border-bottom:1px solid #eee;">
              <div class="item-title label" style="width:30%;">真实姓名</div>
              <div class="item-input" style="width:70%;">
                <input type="text" placeholder="被保障人姓名" style="width:100%; height:2.2rem; line-height:2.2rem;" value="">
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="item-content" style="min-height: 3rem; font-size: 1.4rem;">
            <div class="item-inner" style="border-bottom:1px solid #eee;">
            <div class="item-title label" style="width:30%;">身份证号</div>
              <div class="item-input" style="width:70%;">
                <input type="text" placeholder="仅用于申请保障，严格保密" style="width:100%; height:2.2rem; line-height:2.2rem;" value="">
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="item-content" style="margin:15px 0;">
        <div class="item-inner" style="height:3rem; border-bottom:1px solid #eee;">
          <div class="item-input" style="width:100%;">
            <input type="email" placeholder="选填: 输入您的Email接收保障消息" value="" style="width:100%; height2.2rem; line-height:2.2rem;">
          </div>
        </div>
      </div>
    </div>
    <div class="btn-sub">
      <x-button type="primary" v-link="{path: ''}">下一步</x-button>
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
.add-wrap{
  .list_block_common{
    margin-top: 1rem;
    margin-bottom: 0rem;
    color: #333;
    font-size: .8rem;
    background: #fff;
    .item-content{
      box-sizing: border-box;
      padding-left: .75rem;
      min-height: 2.2rem;
      display: flex;
    }
    .item-inner{
      padding-right: .75rem;
      position: relative;
      width: 100%;
      padding-top: .4rem;
      padding-bottom: .35rem;
      min-height: 2.2rem;
      overflow: hidden;
      box-sizing: border-box;
      display: flex;
    }
  }
  .btn-sub{
    position: fixed;
    bottom: 0;
    line-height: 30px;
    width: 100%;
  }
}
</style>
