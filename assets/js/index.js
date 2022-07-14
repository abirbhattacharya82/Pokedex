function search()
{
    var poke=document.getElementById("x").value.toLowerCase();
    var url='https://pokeapi.co/api/v2/pokemon/'+poke;
    console.log(url);
    fetch(url).then(
        (first)=>{
            first.json().then(
                (res)=>{
                    console.log(res);
                    var ability = res['abilities'][0]['ability']['name'];
                    var height = res['height'];
                    var weight = res['weight'];
                    var type = res['types'][0]['type']['name'];
                    var img = res['sprites']['front_default'];
                    var zz=document.getElementById("sprite");
                    zz.setAttribute("src",img);

                    document.getElementById('type').innerHTML=type;
                    document.getElementById('height').innerHTML="Height: "+height;
                    document.getElementById('weight').innerHTML="Weight: "+weight;
                    document.getElementById('ability').innerHTML=ability;
                }
            )
        }
    )    
}