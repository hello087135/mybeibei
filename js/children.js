window.onload = function () {
    $.get(`children.php`, {}, appendData, 'text')
}

function appendData(data) {
    data = JSON.parse(data)
    console.log(data)
    for (let i = 0; i < 4; i++) {
        $str = ` <div class="cell cells"><img src = "${data[i].img}" class = "goods" index="${data[i].id}">
            <p> </p> <h4 class = "price"> <b> <span class = "yuan"> ￥${parseInt(parseInt(data[i].price)*(data[i].discont/10))} </span>.90</b><del> ￥${data[i].price} </del><span
    class = "discount"> ${data[i].discont} 折 </span> </h4></div>  `
        $('.childrenGoodsList1').eq(0).append($str)
        $('.childrenGoodsList1').eq(0).css('display', 'flex')
    }
    let pageNum = Math.ceil(data.length / 4)
    let box = document.getElementsByClassName('childrenPage')[0];
    let box1 = document.getElementsByClassName('childrenGoodsListBox')[0];
    let page = new Page(pageNum, box, box1)
    bindPage(page.divDoms, page.pageDoms, data)
    //点击商品跳转到详情页面
    $('body').on('click', '.goods', function (event) {
        location.href = `goodsDetail.html?id=${$(event.target).attr('index')}`
    })

}
class Page {
    constructor(number, box, box1) {
        this.number = number;
        this.box = box;
        this.box1 = box1;
        this.divDoms = []
        this.pageDoms = []
        this.render()
    }
    render() {
        for (let i = 0; i < this.number; i++) {
            let divDom = document.createElement('div')
            this.divDoms.push(divDom)
            divDom.className = 'pages';
            divDom.innerHTML = i + 1;
            this.box.appendChild(divDom);
            if (i >= 1) {
                let pageDom = document.createElement('div');
                this.pageDoms.push(pageDom);
                pageDom.className = 'childrenGoodsList1';
                this.box1.appendChild(pageDom)
            }
        }
        let divDom1 = document.createElement('div')
        divDom1.className = 'nextPage';
        divDom1.innerHTML = '下一页&gt';
        this.box.appendChild(divDom1)
    }

}
//为每个圈圈绑定事件
function bindPage(doms, pages, data) {
    // let has = true;
    let has = []
    for (let i = 0; i < doms.length; i++) {
        has[i] = true;
    }
    $(doms).click(function () {
        let index = parseInt($(this).html()) - 1;
        if (has[index]) {
            for (let i = index * 4; i < index * 4 + 4; i++) {
                if (!data[i]) {
                    break;
                }
                $str = ` <div class="cell cells"><img src = "${data[i].img}" class = "goods" index="${data[i].id}">
                <p> </p> <h4 class = "price"> <b> <span class = "yuan"> ￥${parseInt(parseInt(data[i].price)*(data[i].discont/10))} </span>.90</b><del> ￥${data[i].price} </del><span
        class = "discount"> ${data[i].discont} 折 </span> </h4></div>  `
                if (index >= 1) {
                    $(pages[index - 1]).append($str)
                }
            }
            $('.pages').css({
                'color': '#77778c',
                'background': 'white'
            })
            $('.pages').eq(index).css({
                'color': 'white',
                'background': '#ff4965'
            })
            $('.childrenGoodsList1').css('display', 'none');
            $('.childrenGoodsList1')[index].style.display = 'flex';
            has[index] = false;
        } else {
            $('.pages').css({
                'color': '#77778c',
                'background': 'white'
            })
            $('.pages').eq(index).css({
                'color': 'white',
                'background': '#ff4965'
            })
            $('.childrenGoodsList1').css('display', 'none');
            $('.childrenGoodsList1')[index].style.display = 'flex';
        }


    })

}