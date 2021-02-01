var Links = {
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }

    $('a').css('color',color)  //$('a') -> 이 코드의 a태그를 모두 선택한다. 그 후 css함를 사용.
  }

}

var Body = {
  setColor: function (color){
    //document.querySelector('body').style.color = color;
    $('body').css('color',color)
  },
  setBackColor: function(color) {
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color)
  }
}


function mode(self){
  if(self.value === 'Night Mode'){
    Body.setBackColor('black');
    Body.setColor('white');
    Links.setColor('powderblue');
    self.value = 'Day Mode';
  }

  else{
    Body.setBackColor('white');
    Body.setColor('black');
    Links.setColor('black');
    self.value = 'Night Mode'
  }
}
