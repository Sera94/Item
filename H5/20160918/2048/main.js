var game = {
    data: null,//��ά���飬�洢ÿ�����ӵ�����  GB2313
    //4��4��
    RN: 4,
    CN: 4,
    state: 0,
    RUNNNING: 1,
    GAMEOVER: 0,
    score: 0,
//	��ʼ��
    start: function () {
        //��ά����
        this.data = [];
        this.state = this.RUNNNING;//������Ϸ״̬
        // forѭ������˼���Ǹ��и���ȫ����Ϊ0  �൱��
        /*this.data[
         [0,0,0,0],
         [0,0,0,0],
         [0,0,0,0],
         [0,0,0,0]
         ]*/
        for (var row = 0; row < this.CN; row++) {
            this.data[row] = [];
            for (var col = 0; col < this.RN; col++) {
                this.data[row][col] = 0;
            }
        }
        this.score = 0;
        //�������������
        this.randamNum();
        this.randamNum();
        //ˢ��ҳ��
        this.updataView();
    },

    //���������
    randamNum: function () {
        if (!this.isFull()) {
            while (true) {
                //����[0,1]֮��������*����==>����[0,4]֮����������Ȼ��ȡ��
                var r = parseInt(Math.random() * this.RN);
                var c = parseInt(Math.random() * this.CN);
                if (this.data[r][c] == 0) {
                    this.data[r][c] = Math.random() < 0.6 ? 2 : 4;
                    break;
                }
            }
        }
    },

    //������
    isFull: function () {
        for (var row = 0; row < this.RN; row++) {
            for (var col = 0; col < this.CN; col++) {
                if (this.data[row][col] == 0) {
                    return false;
                }
            }
        }
        return true;
    },

    //ˢ��ҳ��
    updataView: function () {
        for (var row = 0; row < this.RN; row++) {
            for (var col = 0; col < this.CN; col++) {
                //"c"+row+col���õ��ľ��Ǹ��и���
                var num = document.getElementById("c" + row + col);
                if (this.data[row][col] != 0) {
                    num.innerHTML = this.data[row][col];
                    //cell n�������ʽ
                    num.className = "cell n" + this.data[row][col];
                } else {
                    num.className = "cell";
                    num.innerHTML = "";
                }
            }
        }

    },

    //���ҡ����¶�����ȣ���Ϸ����
    isGAMEOVER: function () {
        if (this.isFull()) {
            for (row = 0; row < this.RN; row++) {
                for (col = 0; col < this.CN; col++) {
                    if (this.data[row][col] == this.data[row][col + 1]) {
                        return false;
                    } else if (this.data[row][col] == this.data[row + 1][col]) {
                        return false;
                    }
                }
            }
            this.state = this.GAMEOVER;
            return true;
        } else {
            return false;
        }
    },

    //row col����
    moveLeft: function () {
        var beforString = this.data.toString();
        for (row = 0; row < this.RN; row++) {
            for (col = 0; col < this.CN; col++) {
                this.nextRightNum(row, col);
            }
        }
        var afterString = this.data.toString();
        if (beforString != afterString) {
            this.randamNum();
            this.isGAMEOVER();
            this.updataView();
        }
    },

    //������   00,01��01��=0 ==>a.00=01,�ϲ�  00*=2  01=0
    //                     ==>b.00==0,01������ 00=01,01=0
    //����ͬ��
    nextRightNum: function (r, c) {
        for (next = c + 1; next < this.RN; next++) {
            if (this.data[r][next] != 0) {
                if (this.data[r][c] == this.data[r][next]) {
                    this.data[r][c] *= 2;
                    this.data[r][next] = 0;
                    this.score += this.data[r][c];
                } else if (this.data[r][c] == 0) {
                    this.data[r][c] = this.data[r][next];
                    this.data[r][next] = 0;
                } else {
                    break;
                }
            }
        }
    },
    //***������ �������ұ���
    moveRight: function () {
        var beforString = this.data.toString();
        for (row = 0; row < this.RN; row++) {
            for (col = 3; col >= 0; col--) {
                this.nextLeftNum(row, col);
            }
        }
        var afterString = this.data.toString();
        if (beforString != afterString) {
            this.randamNum();
            this.isGAMEOVER();
            this.updataView();
        }
    },
    nextLeftNum: function (r, c) {
        for (next = c - 1; next >= 0; next--) {
            if (this.data[r][next] != 0) {
                if (this.data[r][c] == this.data[r][next]) {
                    this.data[r][c] *= 2;
                    this.data[r][next] = 0;
                    this.score += this.data[r][c];
                } else if (this.data[r][c] == 0) {
                    this.data[r][c] = this.data[r][next];
                    this.data[r][next] = 0;
                } else {
                    break;
                }
            }
        }
    },

    moveUp: function () {
        var beforString = this.data.toString();
        for (row = 0; row < this.RN; row++) {
            for (col = 0; col < this.CN; col++) {
                this.nextDownNum(row, col);
            }
        }
        var afterString = this.data.toString();
        if (beforString != afterString) {
            this.randamNum();
            this.isGAMEOVER();
            this.updataView();
        }
    },
    nextDownNum: function (r, c) {
        for (next = r + 1; next < this.RN; next++) {
            if (this.data[next][c] != 0) {
                if (this.data[r][c] == this.data[next][c]) {
                    this.data[r][c] *= 2;
                    this.data[next][c] = 0;
                    this.score += this.data[r][c];
                } else if (this.data[r][c] == 0) {
                    this.data[r][c] = this.data[next][c];
                    this.data[next][c] = 0;
                } else {
                    break;
                }
            }
        }
    },

    //*****������ͬ��   �������ϱ���
    moveDown: function () {
        var beforString = this.data.toString();
        for (row = 3; row >= 0; row--) {
            for (col = 0; col < this.CN; col++) {
                this.nextUpNum(row, col);
            }
        }
        var afterString = this.data.toString();
        if (beforString != afterString) {
            this.randamNum();
            this.isGAMEOVER();
            this.updataView();
        }
    },
    nextUpNum: function (r, c) {
        for (next = r - 1; next >= 0; next--) {
            if (this.data[next][c] != 0) {
                if (this.data[r][c] == this.data[next][c]) {
                    this.data[r][c] *= 2;
                    this.data[next][c] = 0;
                    this.score += this.data[r][c];
                } else if (this.data[r][c] == 0) {
                    this.data[r][c] = this.data[next][c];
                    this.data[next][c] = 0;
                } else {
                    break;
                }
            }
        }
    }
}
window.onload = function () {
    game.start();
    document.onkeydown = function (e) {
        var evt = event || e;
        if (evt.keyCode == 37) {
            game.moveLeft();
        } else if (evt.keyCode == 39) {
            game.moveRight();
        } else if (evt.keyCode == 38) {
            game.moveUp();
        } else if (e.keyCode == 40) {
            game.moveDown();
        }
    }
}

//var a = 100;
//function f(){
//    var a = 200;
//    function g(){
//        return a;
//    }
//    return g;
//}
//console.log(f()());//==>200;
