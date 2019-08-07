let inf = "";

function func1() {
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
            inf = $(this).parent().text()
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
        width:${parseInt(this.box.offsetWidth)*0.8}px;
        height:${parseInt(this.box.offsetHeight) * 0.8}px;
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
        width:${parseInt(this.box.offsetWidth)*0.4}px;
        height:${parseInt(this.box.offsetWidth)*0.4}px;
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
                if (left1 > (this.box.offsetWidth - parseInt(this.box.offsetWidth) * 0.4)) {
                    left1 = this.box.offsetWidth - parseInt(this.box.offsetWidth) * 0.4
                }
                if (top1 > (this.box.offsetHeight - parseInt(this.box.offsetWidth) * 0.4)) {
                    top1 = this.box.offsetHeight - parseInt(this.box.offsetWidth) * 0.4
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

}

//动态创建数据；

if (location.href.includes('id')) {
    let id = getId(location.href)
    $.get('goodsDetail.php', {
        "id": id
    }, appendData, 'text')
}
//获取id
function getId(str) {
    let arr = str.split("=");
    return arr[1];
}

function appendData(data) {
    data = JSON.parse(data)
    let str = ` <div class="detailsLeft">
<div class="detailGoodsImg"></div>
<ul class="detailGoodsImgs">
    <li><img src="${data[0].img}"
            alt=""></li>
    <li>
        <img src="http://b1.hucdn.com/upload/item/1907/21/93358923440000_800x800.jpg!250x250.jpg"
            alt="">
    </li>
    <li>
        <img src="http://b1.hucdn.com/upload/item/1907/21/93358923440000_800x800.jpg!250x250.jpg"
            alt="">
    </li>
    <li>
        <img src="http://b1.hucdn.com/upload/item/1907/21/93358923440000_800x800.jpg!250x250.jpg"
            alt="">
    </li>
</ul>
<p>收藏商品</p>
</div>
<div class="detailsRight">
<div class="detailTitle">
    <div class="detailTitleLeft">
        <img src="http://b0.hucdn.com/img/contry/ct_19.png" alt="">
        <div>
            <h4>New Zealand</h4>
            <p>新西兰直采</p>
        </div>
    </div>
    <span class="detailTitleRight">2天内从杭州保税区发货，支付后预计2-5天到达</span>
</div>
<div class="imgDecoration">
    <div class="imgDecorationLeft">
        <img src="http://b1.hucdn.com/upload/brand/1501/12/30212159306302_200x100.jpg" alt="">
    </div>
    <div class="imgDecorationRight">
        <h2>${data[0].imgd}</h2>
        <p>百年历史传承，荷兰黄金奶源地的馈赠，热销全球30多个地区，万千妈妈青睐。FOS/GOS益生元维持肠道健康；DHA/AA帮助宝宝智力视力发育更出色；多种天然抗氧化成分和核苷的添加有助宝宝健康发展。
        </p>
    </div>
    <p class="imgDecorationFooter">
        特卖价 &nbsp;&nbsp;&nbsp;&nbsp;<span class="detailPrice">￥${data[0].price} </span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span>包邮</span>
        <span>${data[0].discont}</span>
        <span>自营</span>
        参考价: ¥${data[0].price} 省 ¥21
    </p>
</div>
<!-- 购买细则 -->
<div class="otherDetail">
    <table cellspacing="30">
        <tr>
            <td>税费</td>
            <td>￥11.09 税费收取规则</td>
        </tr>
        <tr>
            <td>优惠</td>
            <td><span>返</span>&nbsp;&nbsp;购买后约返10个贝壳 </td>
        </tr>
        <tr>
            <td>适用阶段</td>
            <td class="detailOptions">
                <span>一阶段 <a class="detailOptionsSpan"></a></span>
                <span>二阶段 <a class=" detailOptionsSpan"></a></span>
            </td>
        </tr>
        <tr>
            <td>数量</td>
            <td>
                <button class="detailSub">-</button>
                <span class="detailNum">1</span>
                <button class="detailAdd">+</button>
            </td>
        </tr>
        <!-- 购买方式 -->
        <tr>
            <td rowspan="2"></td>
            <td rowspan="2">
                <div class="shoppingMethod">
                    <div class="alongShopping">
                        <h3>
                            ￥${data[0].price}
                        </h3>
                        <p id='addShoppingCar'>
                            单独购买
                        </p>
                    </div>
                    <div class="phoneShopping">
                        手机购买
                        <div class="phoneShoppingCode"></div>
                    </div>
                </div>
            </td>
        </tr>
    </table>

</div>
<!-- 底部 -->
<div class="detailsRightFooter">
</div>
</div>`;
    $('.details').append(str)
    func1();
    addCar(data)
    $('.detailGoodsImgs li img').eq(0).trigger("click");
    $('.detailOptionsSpan').eq(0).trigger("click");
}

//添加购物车
function addCar(data) {
    $('#addShoppingCar').click()
    $('body').on('click', '#addShoppingCar', function () {
        // 1. 根据需要拿到所有的数据
        let username = getUserName();
        let img = data[0].img;
        let imgd = data[0].imgd;
        let information = inf;
        let price = data[0].price;
        let count = $('.detailNum').html();
        $.get('addCar.php', {
            'username': username,
            'img': img,
            'imgd': imgd,
            'information': information,
            'price': price,
            'count': count
        }, callbackAddCar, 'text')
    })
}

function getUserName() {
    var lastName = sessionStorage.getItem("username");
    if (lastName) {
        return lastName;
    } else if (document.cookie.includes('username')) {
        let username = document.cookie.slice(9);
        return username;
    } else {
        alert('请先登录，在重新操作')
    }
}

function callbackAddCar(data) {
    if (data >= 1) {
        alert('添加成功')
    } else {
        alert('添加失败')
    }

}