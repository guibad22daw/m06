window.onload = function(){
    document.getElementById('mostraTaula').onclick = function() {
        let files = parseInt(document.getElementById('files').value);
        if(files < 1 || files > 10){
            document.getElementById('taula').innerHTML=""
            document.getElementById('num_erroni').innerHTML=`<b>Introdueix un número entre 1 i 10.</b>`;
        }else{
            document.getElementById('num_erroni').innerHTML="";
            let ciutats = ['Paris','Londres','Roma','Berlin','Copenhaguen','Viena','Lisboa','Washington DC','Otawa','LHavana','Santiago','Lima',
            'Montevideo','Canberra','Wellington','Monròvia','Abuja','Dakar','Tunis','Tokyo','Seül','Beijing','Taipei'];
            let paisos = ['França','UK','Itàlia','Alemanya','Dinamarca','Àustria','Portugal','USA','Canada','Cuba','Xile','Perú','Uruguay','Austràlia',
            'Nova Zelanda','Libèria','Nigèria','Senegal','Tunísia','Japó','Corea del Sud','Xina','Taiwan'];
            let continents = ['Europa','Europa','Europa','Europa','Europa','Europa','Europa','Amèrica','Amèrica','Amèrica','Amèrica','Amèrica','Amèrica',
            'Oceania','Oceania','Àfrica','Àfrica','Àfrica','Àfrica','Àsia','Àsia','Àsia','Àsia'];  
            
            document.getElementById('taula').innerHTML=`<th>Ciutat</th><th>País</th><th>Continent</th>`
            
            for(let i=0;i<=files-1;i++){
                let num_aleat = Math.floor(Math.random() * ciutats.length);
                document.getElementById('taula').innerHTML+=
                `<tr><td>${ciutats[num_aleat]}</td><td>${paisos[num_aleat]}</td><td>${continents[num_aleat]}</td></tr>`;
            }
        }
    }
}
