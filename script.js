// const url = "https://github.com/shiloh-byte/Portfolios/blob/main/info.json"
fetch('./static/info.json')
        .then(function (response) {
        return response.json();    
        })
        .then(function(data){
            console.log(data);

            const output1 = document.querySelector('#sidebarLeft');
            
            output1.innerHTML = '<h2>' + data.fangGang[0].profile1[0].basics['name'] + " | " + 
            data.fangGang[0].profile1[0].basics['title'] + '</h2>';

            const myH1 = document.createElement('h5');
            myH1.innerHTML = data.fangGang[0].profile1[0].basics.social1[0].network + " : " + '<a href>' + 
            data.fangGang[0].profile1[0].basics.social1[0].url + '</a>' + " | " + data.fangGang[0].profile1[0].basics.social2[0].
            network + " : " + '<a href>' + data.fangGang[0].profile1[0].basics.social2[0].url + '</a>';

            sidebarLeft.appendChild(myH1);

            const myH2 = document.createElement('p');
            myH2.innerHTML = data.fangGang[0].profile1[0].basics['summary'];
            sidebarLeft.appendChild(myH2);
  
      
            const output2 = document.querySelector('#sidebarRight');

            const myDiv1 = document.createElement('div');
            const myDiv2 = document.createElement('div');

            const myH3 = document.createElement('h4');
            myH3.innerHTML = data.fangGang[0].profile1[0].projects1[0].name + '<br />' + '<h6>' + 
            data.fangGang[0].profile1[0].projects1[0].roles + '<br /> ' + '<a href>' + data.fangGang[0].profile1[0].projects1[0].url 
            + '</a>' + '</h6>';
  
            myDiv1.appendChild(myH3);


            sidebarRight.appendChild(myDiv1);

            const myH4 = document.createElement('h4');
            myH4.innerHTML = data.fangGang[0].profile1[0].projects2[0].name + '<br />' + '<h6>' + data.fangGang[0].
            profile1[0].projects2[0].roles + '<br /> ' + '<a href>' + data.fangGang[0].profile1[0].projects2[0].url + '</a>' + '</h6>'; 
            myDiv2.appendChild(myH4);


            sidebarRight.appendChild(myDiv2);

        }) 
