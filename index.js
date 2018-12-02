renderList = new Vue({
    el: '#renderList',
    data: {
        testID: 2,
        tmpArray:[],
        groceryList: [
            { id: 0, text: 'nesto'  },
            { id: 1, text: 'sesto' },
            { id: 2, text: 'resto' }
        ]

    },
    methods: {
        created: function(){

        },
        add_new_item: function () {

                this.testID = this.testID + 1;
                this.groceryList.push({id: this.testID, text: this.gen_item_name()});
        },
        remove_last_item: function () {
            this.groceryList.pop();

        },
        remove_this_item: function (x) {

            this.groceryList.splice(this.findindex(x), 1);

        },
        remove_first_item: function (item_id) {
            this.groceryList.shift(this.groceryList.indexOf(item_id),1);

        },
        add_front_item: function (){

                this.testID = this.testID + 1;
                this.groceryList = [{id: this.testID, text: this.gen_item_name()}, ...this.groceryList]

        },
        edit_this_item: function (id) {

            var i = this.findindex(id);

            var txt_item = prompt(id, this.groceryList[i].text);
                if (txt_item == null || txt_item == "") {
                    txt_item = "Cancel";
                } else {
                    this.groceryList.splice(i, 1, {id: id, text: txt_item});
                }

        },
        shuffle_all_items: function (){
                this.tmpArray = this.$data.groceryList;
                this.groceryList = [];

                var currentIndex = this.tmpArray.length, temporaryValue, randomIndex;


                while (0 !== currentIndex) {

                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    temporaryValue = this.tmpArray[currentIndex];
                    this.tmpArray[currentIndex] = this.tmpArray[randomIndex];
                    this.tmpArray[randomIndex] = temporaryValue;
                }
                this.groceryList = this.$data.tmpArray;
                this.tmpArray = [];

        },
        gen_item_name: function (){
            var text = "";
            var possible = "abcdefghijklmnopqrstuvwxyz";

            for (var i = 0; i < 5; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text
        },
        findindex: function (id) {
            const result = this.groceryList.find(fruit => fruit.id === id);
            return this.groceryList.indexOf(result);
        },


    }
})


