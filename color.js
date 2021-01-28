var Links = {
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length){
      alist[i].style.color = color;
      i = i + 1;
    }
  }

}

var Body = {
  setColor: function (color){
    document.querySelector('body').style.color = color;
  },
  setBackColor: function(color) {
    document.querySelector('body').style.backgroundColor = color;
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
    Links.setColor('blue');
    self.value = 'Night Mode'
  }
}
