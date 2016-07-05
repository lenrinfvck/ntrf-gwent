<script>
    import card from './card.vue';
    import Card from '../script/Card.js';
    import config_cards from '../resource/config/cards.js';

    let cards = config_cards.map(function(item) {
        item.url = '/resource/cards/default/' + item.url;
        return new Card(item);
    });

    export default {
        el: '#app',
        data () {
            return {
                cards: cards
            };
        },
        components: {
            card: card
        }
    }
</script>
<template>
    <div>hello vue</div>
    <a href="#!/page">page→</a>
    <ul>
        <card v-for="card in cards" :card-prop="card"></card>
    </ul>
</template>