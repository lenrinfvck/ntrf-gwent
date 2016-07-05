<script>
    import Card from '../script/Card.js';
    import config_cards from '../resource/config/cards.js';

    export default {
        props: ['cardProp']
    };
</script>

<template>
    <div class="card-con">
        <div>
            <img class="card-img" :src="cardProp.url" :alt="cardProp.name" :tilte="cardProp.name" />
            <div class="card-text-con">
                <h4>{{cardProp.name}}</h4>
                <p>{{cardProp.text}}</p>
            </div>
        </div>
    </div>
</template>

<style lang="less">
    .card-con {
        width: 200px;
        height: 400px;
        display: inline-block;
        position: relative;
    }
    .card-img {
        width: 100%;
    }
    .card-text-con {
        width: 100%;
        background: #fff;
        height: 28%;
        position: absolute;
        bottom: 0;
        h4, p {
            text-align: center;
            font-size: 14px;
        }
        p {
            font-size: 12px;
        }
    }
</style>