<template lang="pug">
    .p-lp.p-lp--home.columns
        aside.column.is-3.section(sticky-container)
            div.sticky-side-nav(v-sticky sticky-offset="{top: 10, bottom: 30}" sticky-z-index="10000")
                ul.menu-list(v-scroll-spy-active, v-scroll-spy-link)
                        li.menu-item(v-for='(item, key) of items', :key='key')
                            // <nuxt-link v-scroll-to="item.to" to ><b-icon :icon="item.icon" /> {{ item.title }}</nuxt-link>
                            a()
                                b-icon(:icon='item.icon')
                                |{{ item.title }}
        .container.column.is-9
            .c-container.op-short
                .w-heaher
                    .b-header
                        .w-logo
                            h1.logo
                                img(src='/assets/images/common/logo.svg',alt='週1でブログを書く会')
                        .w-read
                            p.text ブログを持っていますか？<br>そのブログはちゃんと更新されてますか？
                            p.text この「週1でブログを書く会」はブログを書く習慣を身につけるためのグループです。
                hr.c-line-content
            .c-container.op-short(v-scroll-spy="{allowNoActive: false}")
                section.b-section#pager_first
                    .w-section-title
                        h2.c-section-title はじめに
                    .w-head-body
                        .w-description
                            p.description-text この「週1でブログを書く会」のメンバーは最初はみんな、ブログをたまにしか書けない人達でした。
                            p.description-text でもグループで集まって、みんなが日々ちゃんとブログを更新できてる姿を見ると、自然と書けるようになりました。
                            p.description-text たまに書けない時期が出てくると、誰かが「ブログ書けてないけど大丈夫？」と声をかけてくれます。
                            p.description-text 一人じゃ辛い時に同じ目標をもった人がいる事、それが刺激になって今のメンバーはちゃんと週一でブログを書けるようになっています。
                            p.description-text もし、あなたがみんなのようにブログをちゃんと更新できるようになりたいと思っているのであれば、一緒にこのグループに参加しませんか？
                        .w-bottom-button
                            .bottom-button
                                a(href='#contact').c-button グループに参加する（無料です）
                .w-main-content
                    section.b-section#pager_me
                        .w-section-title
                            h2.c-section-title 私達がしている事
                        .w-secsion-text.c-container.op-short
                            p.text グループといっても堅苦しいルールがあるわけではありません。<br>私達のルールはただひとつ。
                            p.text 必ず「週に一回はブログを更新する」という事です。
                            p.text 上下関係もありません。<br>クオリティの審査や評価もありません、ただただ更新し続けるだけです。
                            p.text 更新については、自動で記事を書いていない期間がみんながわかるようにリスト化されています。<br>その仕組があるからこそ、続けてる人、サボっている人がすぐにわかるようになっています。
                        .w-secsion-image.c-container.op-short
                            img(src='/assets/images/item/screen-schot.png',alt='実際の更新管理シートのキャプチャ')
                            .c-box-notes
                                span.c-text-attention ※7日以上更新しないとシートに色が付いて目立つようにしています。
                    //私達がしている事

                section.b-section#pager_reason
                    .w-section-title
                        h2.c-section-title ブログを書き続ける理由
                    .w-secsion-text.c-container.op-short
                        p.text どうしてあなたはブログを書く習慣を身につけたいのですか？<br>私達も「文章を構成する練習をしたい」「ブランディング」「SEO試す」「人のブログにお世話になりっぱなしなので、自分も人の役に立ちたい」など人それぞれの目的があります。
                        p.text 目的はそれぞれ違いますが、私達はみんな「ブログをやっていてよかった」といます。
                        p.text 継続が目的ですが得るものがとても多くあります。<br>何を得られるかはあなた自信でやってみて実感してみてください。
                        p.text ひとつだけお伝えしますと、ブログを更新し続けると「信頼」を得ます。<br>それはこのグループの人だけではありません、あなたの周りの人、あなたのブログを読んでいる人様々です。
                        p.text 私達はブログを週一で続けてるからこそ、今の自分があると断言しています。<br>自分の意思で続けたブログは裏切りません。<br>多くのメリットがあります。
                        p.text あなたも一緒に私達と同じ経験をしませんか？
                    .w-section-bottom-button.c-container.op-short
                        .section-bottom-button
                            a(href='#contact').c-button グループに参加する（無料です）
                //ブログを書き続ける理由

                section.b-section#pager_member
                    .w-section-title
                        h2.c-section-title 参加メンバー
                    .w-secsion-text.c-container.op-short
                        p.text このグループは2014年にとある勉強会でブログを継続して書けない人達が「週一でブログを書く」と決意したメンバー8人で発足しました。
                        p.text 途中で一人、二人と脱落するメンバーがいました。<br>今残ってる初期メンバーは、3人です。
                        p.text しかし私達の心意気に共感・刺激を受けて仲間たちがどんどん増えています。
                        p.text 今は20人ほどのメンバーがいます。
                        p.text メンバーを一部の紹介します。


                    .w-secsion-member.c-container.op-short
                        .w-list-member-loop
                            mixin list-member(iconSrc,blogUrl,tag,title,name,twUrl)
                                .b-list-member
                                    .l-flex
                                        .l-flex-block1
                                            .w-member-image
                                                img(src=iconSrc,alt=name)
                                        .l-flex-block2
                                            .w-member-title
                                                .title #{title}
                                            .w-member-name
                                                .name #{name}
                                                .w-sns
                                                    .tw
                                                        a(href=twUrl,target='_blank')
                                                            img(src='/assets/images/icons/sns-user-tw.svg',alt=name)
                                            .w-member-tag
                                                .b-tag-list
                                                    .tag-icon
                                                        img(src='/assets/images/icons/tag.svg',alt='タグ')
                                                    ul.c-tag-list
                                                        for item, index in tag
                                                            li.list
                                                                span #{item}

                                        .l-flex-block3
                                            .w-member-button
                                                a(href=blogUrl,target='_blank').b-button.op-small
                                                    .l-flex
                                                        .w-icon
                                                            img(src='/assets/images/icons/blog-home.svg',alt='ブログ').icon
                                                        .w-text
                                                            .text ブログを見る

                            //コンチ
                            - var iconSrc = '/assets/images/user/conti.png';
                            - var blogUrl = 'https://blog.cntlog.net/';
                            - var tag = ['Webデザイン'];
                            - var title = 'グループ１の応援上手';
                            - var name = 'コンチ';
                            - var twUrl = 'https://twitter.com/maki_saki';
                            +list-member(iconSrc,blogUrl,tag,title,name,twUrl)

                            //よしパン
                            - var iconSrc = '/assets/images/user/yoshipan.png';
                            - var blogUrl = 'https://yoshipan.com/';
                            - var tag = ['育児','Web'];
                            - var title = '育児系ブロガー';
                            - var name = 'よしパン';
                            - var twUrl = 'https://twitter.com/yoshipan';
                            +list-member(iconSrc,blogUrl,tag,title,name,twUrl)

                            //▲
                            - var iconSrc = '/assets/images/user/msms.png';
                            - var blogUrl = 'https://blog.mismithportfolio.com/';
                            - var tag = ['カメラ','プログラミング'];
                            - var title = 'ブログ会の風雲児';
                            - var name = '▲';
                            - var twUrl = 'https://twitter.com/misumi_takuma';
                            +list-member(iconSrc,blogUrl,tag,title,name,twUrl)

                .c-container
                    section.b-section#pager_flow
                        .w-section-title
                            h2.c-section-title 参加の流れ

                        .w-section-content-block.c-container.op-short
                            .b-list-flow
                                mixin list-flow(num,text)
                                    li.list
                                        .w-flow-step
                                            span.flow-step #{num}
                                        .w-flow-text
                                            p.text #{text}
                                +list-flow(1,'フォームから応募ください。')
                                +list-flow(2,'グループのメンバーからfacebookのグループへ招待があります。')
                                +list-flow(3,'グループに参加後、軽く自己紹介の投稿と記事更新管理シートに記入いただきます。')
                                +list-flow(4,'週一でブログ書き続けます。')
                //参加の流れ

                section.b-section#pager_contact
                    .w-section-title
                        h2.c-section-title 応募
                    //.w-secsion-text
                        p.text 何か文言を思いついたら追加

                    .w-section-form.c-container.op-short
                        form.w-form-item-block(name="contact" method="POST" data-netlify="true")
                            b-field(horizontal label='名前', message='あなたの名前を入力してください')
                                b-input(type='text', value='',name="name")
                            b-field(horizontal label='メールアドレス', message='メールアドレスを入力してください')
                                b-input(type='email', value='',name="mail")
                            b-field(horizontal label='facebookID', message='facebookのアカウントのURLを入れてください')
                                b-input(type='url', value='',name="facebook" ,placeholder="https://www.facebook.com/アカウント名")
                            b-field(horizontal label='ブログURL', message='ブログのURLを入れてください')
                                b-input(type='url', value='',name="blog",placeholder="https://blog.com/")
                            b-field(horizontal label='質問', message='このサイトをどこで知りましたか')
                                b-input(type='text', value='',name="qs")
                            b-field(horizontal label='その他連絡事項', message='ご質問や特記事項があれば教えてください')
                                b-input(type='textarea', value='',name="info")

                            .w-section-bottom-button
                                .section-bottom-button
                                    input(type="submit").c-button 送信する
            //応募
            .b-lp-footer
                .w-message
                    .message \ よかったら、シェアしてください /
                .w-share
                    ul.c-list-share
                        li
                            a(href= 'http://twitter.com/share?url=https://shu-1blog.com/&hashtags=週1ブログ会')
                                img(src='/assets/images/icons/share-icon-tw.svg',alt='twitterでシェア')
                        li
                            a(href= 'https://www.facebook.com/sharer/sharer.php?u=https://shu-1blog.com/')
                                img(src='/assets/images/icons/share-icon-fb.svg',alt='facebookでシェア')

</template>

<script>
//import Sticky from 'vue-sticky-directive'

export default {
  name: 'HomePage',
    data() {
        return {
            items: [
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
    },
    components: {
    },

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
    .sticky-side-nav{
        top:30px !important;
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
            text-align: right;
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
            /*position: fixed;*/
            /*top:auto;*/
            /*left:auto;*/
        }
        .menu-item{
            &.active{
                background-color: whitesmoke;
                color: #363636;
            }
        }
    }



</style>
