changeBorder();
changeNorm();
changeNum();
let box = $('.detailGoodsImg')[0]

//改变选中图片
function changeBorder() {
    $('.detailGoodsImgs li img').click(function () {
        $('.detailGoodsImgs li').css({
            'border': ' 2px solid #dfdfdf'
        })
        $(this).parent().css({
            'border': ' 2px solid #ff4965'
        })
        // 1.拿到大图
        let str = this.src
        $(`.detailGoodsImg`).eq(0).css({
            'background': `url("${str}") no-repeat`,
            'background-size': '100%'
        })
    })
}
//改变选中参数
function changeNorm() {
    //获取所有的规格
    $('.detailOptionsSpan').click(function () {
        $('.detailOptionsSpan').css({
            'border': 'none'
        })
        $(this).css({
            'border': '2px solid #ff0000'
        })
    })
}

//改变选中数量
function changeNum() {
    // 1.增加数量
    $('.detailAdd').click(function () {
        // 1.拿到文本框的值
        let num = parseInt($('.detailNum').eq(0).html());
        num++;
        $('.detailNum').eq(0).html(num);

    })
    // 2.减少数量
    $('.detailSub').click(function () {
        let num = parseInt($('.detailNum').eq(0).html());
        num--;
        // 1. 边界判断
        if (num <= 1) {
            num = 1;
        }
        $('.detailNum').eq(0).html(num)
    })
}
class Magnifier {
    constructor(box) {
        this.box = box;
        this.divDom = {};
        this.divDoms = {};
        this.render()
        this.move();
    }
    render() {
        this.box.style.position = 'relative';
        //新建一个放大镜盒子；
        let divDom = document.createElement('div')
        this.divDom = divDom;
        divDom.style.cssText = `
        width:${parseInt(this.box.offsetWidth)*0.5}px;
        height:${parseInt(this.box.offsetHeight) * 0.5}px;
        background-size:${parseInt(this.box.offsetWidth)*2}px ${parseInt(this.box.offsetHeight)*2}px;
        position:absolute;
        background-repeat:no-repeat;
        background-position:0px 0px;
        left:${parseInt(this.box.offsetWidth) + 10}px;
        top:0px;
        display:none;
        `
        this.box.appendChild(divDom);
        //创建镜子
        let divDoms = document.createElement('div');
        this.divDoms = divDoms;
        divDoms.style.cssText = `
        width:100px;
        height:100px;
        background:black;
        opacity:0.5;
        position:absolute;
        left:0px;
        top:0px;
        display:none;
        `
        this.box.appendChild(divDoms);
    }
    move() {
        $(this.box).mousemove((e) => {
            this.divDom.style.display = 'block';
            this.divDoms.style.display = 'block'
            let bg = $(this.box).css('backgroundImage');
            $(this.divDom).css('backgroundImage', bg);
            //计算left

            let left1 = e.pageX - $(this.box).offset().left - 50;
            let top1 = e.pageY - $(this.box).offset().top - 50;
            if (left1 < 0) {
                left1 = 0
            }
            if (top1 < 0) {
                top1 = 0
            }
            if (left1 > (this.box.offsetWidth - 100)) {
                left1 = this.box.offsetWidth - 100
            }
            if (top1 > (this.box.offsetHeight - 100)) {
                top1 = this.box.offsetHeight - 100
            }
            //计算背景图的位置
            $(this.divDom).css({
                backgroundPosition: `${(-1*left1)*2}px  ${(-1*top1)*2}px`
            })
            $(this.divDoms).css({
                left: left1 + "px",
                top: top1 + "px"
            })
        });
        $(this.box).mouseleave(() => {
            this.divDom.style.display = 'none';
            this.divDoms.style.display = 'none'
        });
    }
}
new Magnifier(box)