(function( $ ) {
    var methods = {
        wow : function () {
            $(this).onmousemove = function (e) {
                var x = e.pageX - e.target.offsetLeft;
                var y = e.pageY - e.target.offsetTop;
                e.target.style.setProperty('--x', x + 'px');
                e.target.style.setProperty('--y', y + 'px');
                };
                $(this).click(function(){
                    var znach = document.getElementById("dlina");
                    var kolv = znach.value;
                    var max = 100, min=-100;
                    let arr = [];
                    var picHolder = document.getElementById("mass");
                    for (let i = 0; i < kolv; i++) {
	                    arr[i] = Math.floor(Math.random( ) * (max - min + 1)) + min;
                        var span = document.createElement("span");
                        span.className = "mass-el";
                        span.innerHTML = arr[i];
                        picHolder.appendChild(span);
                    }
                    min = arr[0];
                    max = min;
                    for (i = 0; i <arr.length; ++i) {
                    if (arr[i] > max) max = arr[i];
                    if (arr[i] < min) min = arr[i];
                    }
                    var qwa = qwa || document.getElementById("qwa")
                    let addToQwa = (text='<span class="tik">Какой же элемент в массиве является максимальным?</span>') => qwa.insertAdjacentHTML('beforeend', `<span id="animspan">${text}</span>`)
                    setTimeout(() => {
                    addToQwa()
                    setTimeout(() => {
                      addToQwa('<br><span class="tik">А минимальным?</span>')
                      setTimeout(() => {
                        addToQwa('<br> <br><span class="tik">Тыкай на Массивыча и узнаешь!</span><br><p id="ubr"><img src="https://media.giphy.com/media/fvSnAaFUjIqh6XXIFp/giphy.gif" style="width: 200px; " id="massivich"></p>'
                        )},3000);
                        let k=0;
                        $("#qwa").click(function(){
                          //var wi = $("#massivich").width();
                          k+=1;
                          if (k<10){
                            $( "#massivich" ).animate({
                              width: "+=40px",
                              marginTop : "-=40px"
                            });
                          }
                          
                          //var wi = $("#massivich").width();
                          if(k==10){
                            $("#qwa").disabled = true; 
                            $( "#massivich" ).animate({
                              width: "0px",
                              margin: "0px"
                            });
                            $( ".tik" ).animate({
                              fontSize: "0px",
                              margin: "0px"
                            });
                            $( "#go" ).animate({
                              fontSize: "0px",
                              width: "0px",
                              margin: "0px"
                            });
                            $( "#dlina" ).animate({
                              fontSize: "0px",
                              width: "0px",
                              placeholder: '',
                              padding: "0px",
                              borderWidth: "0px",
                              margin: "0px"
                            });
                            $( "h2" ).animate({
                              margin: "0px"
                            });

		                        //$( "#massivich" ).css('display', 'none');
                            setTimeout(() => {
                              addToQwa('<img src="https://media.giphy.com/media/3ohhwjCvlkO6qGX6Ra/giphy.gif" style="width: 500px; margin-top: -250px" id="massivich2"><br><img src="https://media.giphy.com/media/Mzbp0hFR7aHKZ0tTXb/giphy.gif" style="width: 300px; margin-top: -100px" id="massivich2">'
                              )
                              document.body.style.backgroundColor = "black";
                              addToQwa(`<span class="text-mass">я   стал   инопланетянином   нового   уровня!<br>За   вознаграждение   сообщаю   значения:<br>min  <span class="text-mass-m">${min}</span> и max  <span class="text-mass-m">${max}</span> </span>`
                              )},1560);
                          }
                          if(k>10){};
                        }); 
                     }, 1e3);
                    }, 1e3);
                });
    },
    okno : function () {
      $(this).dialog({width: 650, buttons:{
        "Погнали!": function(){ $(this).dialog('close'); }}});
    }
}
     $.fn.myPlugin = function(method) { 
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
          } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
          } else {
            $.error( 'Метод с именем ' +  method + ' не существует для jQuery.tooltip' );
          } 
          return this.each(methods[okno]);
          return this.each(methods[wow]);
        };
      })( jQuery );