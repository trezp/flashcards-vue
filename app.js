
// Question: Did you intend for this be formatted as JSON?
// Suggestion: You first example's data was so fun,
// maybe you could come up with some fun trivia questions
// for your sample data?
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
];

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
      // Question: Do you need to check the 'length' property here?
      // Does this work just as well?
      // if(!this.newFront || !this.newBack){
      if(!this.newFront.length || !this.newBack.length){
        this.error = true;
      } else {
        // Suggestion: If you didn't intend to format your data
        // as JSON, you could remove the single quotes around
        // your property names here.
        this.cards.push({
          'front': this.newFront,
          'back': this.newBack,
          'flipped': false
        });
        this.newFront = '';
        this.newBack = '';
        this.error = false;
      }
    }
  }
});