var Links = {
  SetColor:function(color){//function SetColor(color)로 하면 안되더라..
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i=i+1;
    // }
    //지금부터 jQuery를 사용할 건데, 반복문이 필요없다! 자동으로 반복처리 가능!
    $('a').css('color', color);
    //모든 'a'테그를 선택 / 만들어진 css함수 사용하면 위의 작업을 해준다!
  }
}

var Body = { // 객체지향으로 쪼개기
  SetColor:function (color){
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  SetBackgroundColor:function (color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}

function nightDayHandler(self){
  if (self.value === 'night'){
    Body.SetColor('white');
    Body.SetBackgroundColor('#1B1A19');
    Links.SetColor('powderblue');
    self.value = 'day';
  }
  else{
    Body.SetColor('black');
    Body.SetBackgroundColor('white');
    Links.SetColor('black');
    self.value = 'night';
  }
}
