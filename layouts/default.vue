<template>
  <div>
    <nav class="navbar header has-shadow is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="/assets/images/common/logo.svg" alt="週1でブログ更新する会" height="28">
        </a>
        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>

    <section class="main-content columns">

      <aside class="column is-3 section">
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link v-scroll-to="item.to" to><b-icon :icon="item.icon" /> {{ item.title }}</nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-9">
        <nuxt />
      </div>

    </section>
  </div>

</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'TOP',
          icon: 'home',
          to: '/'
        },
        {
          title: 'はじめに',
          icon:'chevron-right',
          to: '#pager_first'
        },
        {
          title: '私達がしている事',
          icon:'chevron-right',
          to: '#pager_me'
        },
        {
          title: 'ブログを書き続ける理由',
          icon:'chevron-right',
          to:'#pager_reason'
        },
        {
          title: '参加メンバー',
          icon:'chevron-right',
          to: '#pager_member'
        },
        {
          title: '参加の流れ',
          icon:'chevron-right',
          to:'#pager_flow'
        },
        {
          title: '応募',
          icon:'chevron-right',
          to:'#pager_contact'
        },

      ]
    }
  }
}
</script>




<style lang="scss">
  @import "~assets/scss/config/config";
  @import "~assets/scss/buefy";
  body{
    p{
      margin-bottom: 1rem;
    }
    img{
      vertical-align: top;
    }
  }
  .p-lp--home {
    padding-right: 8*4px;
    .w-heaher {
      margin-top: 8*4px;
    }
    .w-head-body {
      text-align: left;
      &.op-text-center{
        text-align: center;
      }
      > .w-description {
      }
      > .w-bottom-button {
        text-align: center;
      }
    }
    .b-lp-footer {
      margin-top: 8*10px;
    }
  }

  .b-lp-footer {
    .w-message {
      text-align: center;
      .message {
        font-size: 1.2rem;
        background: none;
      }
    }
    .w-share {
      margin-top: 8*5px;
    }
  }


  .b-header {
    .w-logo {
      margin-bottom: 8*4px;
      .logo {
        text-align: center;
      }
    }
    .w-read {
      text-align: center;
    }
  }

  .c-line{
    margin-top: 60px;
    margin-bottom: 60px;
  }

  .c-line-content{
    margin-top: 8*4px;
    margin-bottom: 8*4px;
    border: 0;
    background: $color-main;
    height:10px;
    width:80px;
    margin-left: auto;
    margin-right: auto;
  }


  .c-section-title {
    @include cnt-font-size(30);
    display: inline-block;
    padding-left: 8px;
    padding-right: 8px;
    background: linear-gradient(transparent 80%, $color-main 80%);
  }

  .b-section {
    &:before{
      content: '';
      height:2px;
      background:  $color-text;
      margin-top: 8*4px;
      margin-bottom:8*4px;
      display: block;
      margin-right: auto;
      margin-left: auto;
      max-width: 980px;
      @include mq(pc){
        margin-top: 8*8px;
        margin-bottom: 8*8px;
      }
    }

    .w-section-title {
      text-align: left;
      margin-bottom: 8*3px;
      @include mq(pc){
        margin-bottom: 8*6px;
      }
      .c-section-title {

      }
    }
    .w-secsion-text, .w-secsion-image {
      text-align: left;
      margin-bottom: 8*3px;
      p {
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .w-secsion-image{
      img{
        width:100%;
      }
    }
    .w-secsion-text {
      padding-left: 8px;
      padding-right: 8px;
    }
    .w-section-child {
      .w-section-title-child {
        text-align: center;
        margin-bottom: 8*3px;
      }
    }
    .w-section-bottom-button{
      text-align: left;
    }
  }



  ul.b-list-sns {
    margin-bottom: 0;
    li.list-sns {
      @include flx-row;
      @include flx-middle;
      margin-bottom: 15px;
      .c-button {
        line-height: 1;
        width: 100%;
        color: #FFF;
        min-height: 47px;
        text-decoration: none;
        @include flx-row;
        @include flx-middle;
        i {
          position: relative;
          left: -10px;
          margin-bottom: 0;
          padding-bottom: 0;
          line-height: 1;
          margin-right: 5px;
        }
        span.button-text {
          position: relative;
          //    top:3px;
        }
      }
    }
  }

  .b-list-member {
    padding: 8px;
    border-bottom:1px solid $color-border;
    > .l-flex {
      @include flx-row;
      flex-wrap: nowrap;
      .l-flex-block1 {
      }
      .l-flex-block2{
        margin-right: auto;
      }
      .l-flex-block3{
        align-self: flex-end;
      }
    }
    .w-member-image {
      margin-right: 8*2px;
      max-width:60px;
    }
    .w-member-title {
      .title{
        @include cnt-font-size($font-sml);
        color: $color-text-light;
      }
    }
    .w-member-name {
      @include cnt-font-size(16);
      @include flx-row;
      @include flx-middle;
      margin-bottom: 4px;
      .name{
        margin-right: 8px;
      }
      .w-sns{
        a{
          margin-right: 8px;
          &:last-child{
            margin-right: 0;
          }
        }
      }
    }
    .w-member-tag {
      @include cnt-font-size($font-sml);
    }
    .w-member-button{

    }
  }
  .c-list-share{
    @include flx-row;
    @include flx-center;
    @include flx-middle;
    > li{
      margin-right: 8*2px;
      &:last-child{
        margin-right: 0;
      }
    }
  }

  %ex-button-hover {
    @include cnt-hover;
  }

  %ex-button {
    @extend %ex-button-hover;
    @include cnt-link($color-text);
    @include cnt-radius(0);
    text-align: center;
    background: $color-link;
    border: 1px solid $color-link;
    padding: .6em 1.5em;
    display: inline-block;
    border: none;
    font-weight: bold;
    cursor: pointer;
    &:hover, &:active, &:focus {
      text-decoration: none;
    }
    &.op-long {
      width: 100%;
      @include mq(pc) {
        max-width: 500px;
      }
    }
    &.op-block {
      display: block;
    }
    &.op-mini {
      @include cnt-font-size(14);
      padding: .6em 1em;
    }
    &.op-large {
      padding: 1em 2em;
      @include cnt-radius(.3em);
    }
    &.op-small {
      padding: .5em 1em;
      @include cnt-radius(.3em);
    }
    &.op-submit {
      width: 100%;
      padding: 1em 2em;
      @include mq(pc) {
        min-width: 500px;
      }
    }
    &.op-main {
      background: $color-main;
    }
    &.op-alert {
      background: $color-alert;
    }
    &.op-lock {
      background: $color-text;
    }
    &.op-fb {
      background: $brand-facebook;
    }
    &.op-tw {
      background: $brand-twitter;
    }
    &.op-gp {
      background: $brand-google-plus;
    }
  }

  .b-button-block {
    &.op-center {
      text-align: center;
    }
    .note {
      @include cnt-font-size(14);
      margin-top: .5em;
    }
  }

  .c-button {
    @extend %ex-button;
  }

  .b-button {
    @extend %ex-button;
    .l-flex {
      @include flx-row;
      @include flx-middle;
    }
    .w-icon {
      margin-right: 8px;
    }
    .w-text {

    }
  }

  input[type=submit], input[type=reset], input[type=button] {
    &.c-button {
      @extend %ex-button;
      @include cnt-font-size(16);
    }
  }


  .b-tag-loop {
    @include flx-row;
    margin-bottom:-15px;
    .list {
      margin-bottom: 15px;
      margin-right: 10px;
    }
  }

  .c-tag-list{
    @include flx-row;
    @include flx-middle;
    margin-bottom: -8px;
    li.list{
      margin-bottom:8px;
      &:after{
        content: ',';
        display: inline-block;
        margin-right: 2px;
        margin-left: 2px;
      }
      &:last-child{
        margin-right: 0;
        &:after{
          content: '';
          display: inline-block;
          margin-right: 0px;
          margin-left: 0px;
        }
      }
    }
  }
  .b-tag-list{
    @include flx-row;
    @include flx-middle;
    flex-wrap: nowrap;
    .tag-icon{
      margin-right:8px;
    }
  }

  .b-list-flow{
    .list{
      @include flx-row;
      flex-wrap: nowrap;
      margin-bottom: 8*4px;
      border: 0;
      background: none;
      box-shadow: none;
      .w-flow-step{
        margin-right: 8*2px;
        .flow-step{
          @include flx-row;
          @include flx-middle;
          @include flx-center;
          min-width: 25px;
          min-height:25px;
          border: 2px solid $color-text;
        }
      }
      .w-flow-text{
        p{
          &:last-child{
            margin-bottom: 0;
          }
        }
      }

    }
  }
  .menu-list{
    @include mq(pc){
      position: fixed;
      top:auto;
      left:auto;
    }
  }
</style>