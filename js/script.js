const doc = document;
const blockList = doc.querySelectorAll('.block');
const titleList = doc.querySelectorAll('.title');
const detailsList = doc.querySelectorAll('details');

detailsList.forEach(function(item){
  item.onclick = function(){
    let index = this.dataset.number;
    
    detailsList.forEach(function(items){
      if(Number(items.dataset.number) != index){
        items.removeAttribute('open');
      }
    });
  };
});

