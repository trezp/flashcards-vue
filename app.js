const cards = [
  {
    'front': 'Front of card 1',
    'back': 'Back of card 1',
    'flipped': false,
  },
  {
    'front': 'Front of card 2',
    'back': 'Back of card 2',
    'flipped': false,

  },
  {
    'front': 'Front of card 3',
    'back': 'Back of card 3',
    'flipped': false,
  },
] 

new Vue({
  el: '#flashcard-app',
  data: {
    cards: cards,
    newFront: '',
    newBack: '',
    error: false
  },
  methods: {
    toggleCard: function(card){
      card.flipped = !card.flipped;
    },
    addNew: function(){
      if(this.newFront.length && this.newBack.length){
        this.cards.push({
          'front': this.newFront,
          'back': this.newBack,
          'flipped': false,
          'memorized': false
        });
        this.newFront = '';
        this.newBack = '';
        this.error = false;
      } else {
        this.error = true;
      }
    }
  }
});