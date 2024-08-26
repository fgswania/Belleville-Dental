function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function more() {
    var cont = document.getElementById("dot");
    var conText = document.getElementById("content");
    var btn = document.getElementById("Btn");
  
    if (cont.style.display === "none") {
      cont.style.display = "inline";
      btn.innerHTML = "Read more";
      conText.style.display = "none";
    } else {
        cont.style.display = "none";
        btn.innerHTML = "Read less";
        conText.style.display = "inline";
      }
  }

  function moreFunc() {
    var text = document.getElementById("dotsss");
    var content = document.getElementById("add");
    var mybtn = document.getElementById("mybtn");
  
    if (text.style.display === "none") {
      text.style.display = "inline";
      mybtn.innerHTML = "Read more";
      content.style.display = "none";
    } else {
        text.style.display = "none";
        mybtn.innerHTML = "Read less";
        content.style.display = "inline";
      }
  }
  
  function fun() {
    var txt = document.getElementById("move");
    var ct = document.getElementById("addto");
    var mybtnn = document.getElementById("mybtnn");
  
    if (txt.style.display === "none") {
      txt.style.display = "inline";
      mybtnn.innerHTML = "Read more";
      ct.style.display = "none";
    } else {
        txt.style.display = "none";
        mybtnn.innerHTML = "Read less";
        ct.style.display = "inline";
      }
  }


  const imgs=document.querySelectorAll('.img a');
  let imgId=1;
  
  const imgDiv=document.querySelectorAll('.img');
  
  imgs.forEach((img)=>{
    img.addEventListener('click',(e)=>{
      e.preventDefault();
      imgId=img.dataset.id;
  
      imgDiv.forEach((img)=>{
        img.classList.remove('active');
      });
  
      img.parentElement.classList.add('active');
  
      moveImage();
    });
  });
  
  
  
  
  function moveImage()
  {
    const imgWidth=document.querySelector('.main-image img:first-child').clientWidth;
    let width=(imgId-1)*imgWidth;
  document.querySelector('.main-image').style.transform=`translateX(${-width}px)`;
  
  }
  
  const minusBtn=document.querySelector('.minus');
  const plusBtn=document.querySelector('.plus');
  const qtyTxt=document.querySelector('#qty');
  
  minusBtn.addEventListener('click',()=>{
      let qty= parseInt(qtyTxt.value);
      if(qty>0){
        qty--;
        qtyTxt.value=qty;
      }
  });
  
  plusBtn.addEventListener('click',()=>{
    let qty= parseInt(qtyTxt.value);
    if(qty>=0 && qty<5){
      qty++;
      qtyTxt.value=qty;
    }
  });