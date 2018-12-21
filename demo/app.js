new Vue({
    el:"#app",
    data:{
        playerhealter:100,
        monsterhealter:100,
        gameIsRuning:false,
        turns:[]
    },
    methods:{
        startGame:function(){
            this.gameIsRuning=true,
            this.playerhealter=100,
            this.monsterhealter=100;
            this.turns=[];
        },
        attack:function () {
            let max = 10;
            let min = 3;
            let damage=this.damage(max, min);
            this.monsterhealter -=damage
            this.turns.unshift({
                isPlayer:true,
                text:`player hit monster for ${damage}`
            })
            if (this.checkWin())
                return;
            this.monsterDamage()
        },
        specialAttack:function () {
            let max = 20;
            let min = 10;
            let damage=this.damage(max, min);
            this.monsterhealter -= damage
            this.turns.unshift({
                isPlayer:true,
                text:`player hit monster hard for ${damage}`
            })
            if (this.checkWin())
                return;
            this.monsterDamage()

        },
        heal:function(){
            if(this.playerhealter<=90)
            {
                this.playerhealter+=10;
                this.turns.unshift({
                    isPlayer:true,
                    text:`player heal for ten`
                })
            }
            else
                this.playerhealter==100;
            this.monsterDamage()
        },
        giveUp:function () {
            this.gameIsRuning=false;
        },
        monsterDamage:function(){
            let damage=this.damage(15,5);
            this.playerhealter-=damage;
            this.turns.unshift({
                isPlayer:false,
                text:`monster hit player for ${damage}`
            })
            this.checkWin();
        },
        damage:function (max,min) {
            return Math.max(Math.floor(Math.random()*max)+1,min)
        },
        checkWin:function () {
            if(this.monsterhealter<=0)
            {
                if(confirm("You won!,Are you agin?"))
                    this.startGame()
                else
                     this.gameIsRuning=false;
                return true;
            }else if(this.playerhealter<=0){
                if(confirm("You lost!,Are you agin?"))
                    this.startGame()
                else
                    this.gameIsRuning=false;
                return true;
            }else
                return false;
        }
    }
})