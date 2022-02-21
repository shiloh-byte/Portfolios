
const url = 'info.json'
fetch(url)
        .then(function (response) {
        return response.json();    
        })
        .then(function(data){
            console.log(data);
        
//             Profile 1
        
            document.querySelector('#portfolioContainer');
            
            portfolioContainer.innerHTML = '<h2>' + data.fangGang[0].profile1[0].basics['name'] + " | " + 
            data.fangGang[0].profile1[0].basics['title'] + '</h2>';
        

            const myH1 = document.createElement('h5');
            myH1.innerHTML = data.fangGang[0].profile1[0].basics.social1[0].network + " : " + '<a href="https://github.com/shiloh-byte">' + 
            data.fangGang[0].profile1[0].basics.social1[0].url + '</a>' + " | " + data.fangGang[0].profile1[0].basics.social2[0].
            network + " : " + '<a href="https://linkedin.com">' + data.fangGang[0].profile1[0].basics.social2[0].url + '</a>';

            portfolioContainer.appendChild(myH1);
        

            const myH2 = document.createElement('p');
            myH2.innerHTML = data.fangGang[0].profile1[0].basics['summary'];
        
            portfolioContainer.appendChild(myH2);
  
      
            document.querySelector('#portfolioContainer');

            const myDiv1 = document.createElement('div');
            const myDiv2 = document.createElement('div');

            const myH3 = document.createElement('h4');
            myH3.innerHTML = data.fangGang[0].profile1[0].projects1[0].name + '<br />' + '<h6>' + 
            data.fangGang[0].profile1[0].projects1[0].roles + '<br /> ' + '<a href="https://github.com/shiloh-byte/Broken-Calculator">' 
            + data.fangGang[0].profile1[0].projects1[0].url + '</a>' + '</h6>';
  
            myDiv1.appendChild(myH3);

            portfolioContainer.appendChild(myDiv1);

        
            const myH4 = document.createElement('h4');
            myH4.innerHTML = data.fangGang[0].profile1[0].projects2[0].name + '<br />' + '<h6>' + data.fangGang[0].
            profile1[0].projects2[0].roles + '<br /> ' + '<a href="https://github.com/shiloh-byte/deck-of-cards">' 
            + data.fangGang[0].profile1[0].projects2[0].url + '</a>' + '</h6>'; 
        
            myDiv2.appendChild(myH4);

            portfolioContainer.appendChild(myDiv2);
        
        
        
//         Profile 2
        
            document.querySelector('#portfolioContainer');
            
            portfolioContainer.innerHTML = '<h2>' + data.fangGang[1].profile2[0].basics['name'] + " | " + 
            data.fangGang[1].profile2[0].basics['title'] + '</h2>';
        

            const myH5 = document.createElement('h5');
            myH5.innerHTML = data.fangGang[1].profile2[0].basics.social1[0].network + " : " + '<a href="https://github.com/DavidAlex17">' + 
            data.fangGang[1].profile2[0].basics.social1[0].url + '</a>' + " | " + data.fangGang[1].profile2[0].basics.social2[0].
            network + " : " + '<a href="https://linkedin.com">' + data.fangGang[1].profile2[0].basics.social2[0].url + '</a>';

            portfolioContainer.appendChild(myH5);
        

            const myH6 = document.createElement('p');
            myH6.innerHTML = data.fangGang[1].profile2[0].basics['summary'];
        
            portfolioContainer.appendChild(myH6);
  
      
            document.querySelector('#portfolioContainer');

            const myDiv3 = document.createElement('div');
            const myDiv4 = document.createElement('div');

            const myH7 = document.createElement('h4');
            myH7.innerHTML = data.fangGang[1].profile2[0].projects1[0].name + '<br />' + '<h6>' + 
            data.fangGang[1].profile2[0].projects1[0].roles + '<br /> ' + '<a href="https://github.com/DavidAlex17/Broken-Calculator">' 
            + data.fangGang[1].profile2[0].projects1[0].url + '</a>' + '</h6>';
  
            myDiv3.appendChild(myH7);

            portfolioContainer.appendChild(myDiv3);

        
            const myH8 = document.createElement('h4');
            myH8.innerHTML = data.fangGang[1].profile2[0].projects2[0].name + '<br />' + '<h6>' + data.fangGang[1].
            profile2[0].projects2[0].roles + '<br /> ' + '<a href="https://github.com/DavidAlex17/deck-of-cards">' 
            + data.fangGang[1].profile2[0].projects2[0].url + '</a>' + '</h6>'; 
        
            myDiv4.appendChild(myH8);

            portfolioContainer.appendChild(myDiv4);
        
        
        
//         Profile 3
        
            document.querySelector('#portfolioContainer');
            
            portfolioContainer.innerHTML = '<h2>' + data.fangGang[2].profile3[0].basics['name'] + " | " + 
            data.fangGang[2].profile3[0].basics['title'] + '</h2>';
        

            const myH9 = document.createElement('h5');
            myH9.innerHTML = data.fangGang[2].profile3[0].basics.social1[0].network + " : " + '<a href="https://github.com/tjschwartz7">' + 
            data.fangGang[2].profile3[0].basics.social1[0].url + '</a>' + " | " + data.fangGang[2].profile3[0].basics.social2[0].
            network + " : " + '<a href="https://linkedin.com">' + data.fangGang[2].profile3[0].basics.social2[0].url + '</a>';

            portfolioContainer.appendChild(myH9);
        

            const myH10 = document.createElement('p');
            myH10.innerHTML = data.fangGang[2].profile3[0].basics['summary'];
        
            portfolioContainer.appendChild(myH10);
  
      
            document.querySelector('#portfolioContainer');

            const myDiv5 = document.createElement('div');
            const myDiv6 = document.createElement('div');

            const myH11 = document.createElement('h4');
            myH11.innerHTML = data.fangGang[2].profile3[0].projects1[0].name + '<br />' + '<h6>' + 
            data.fangGang[2].profile3[0].projects1[0].roles + '<br /> ' + '<a href="https://github.com/tjschwartz7/Broken-Calculator">' 
            + data.fangGang[2].profile3[0].projects1[0].url + '</a>' + '</h6>';
  
            myDiv5.appendChild(myH11);

            portfolioContainer.appendChild(myDiv5);

        
            const myH12 = document.createElement('h4');
            myH12.innerHTML = data.fangGang[2].profile3[0].projects2[0].name + '<br />' + '<h6>' + data.fangGang[2].
            profile3[0].projects2[0].roles + '<br /> ' + '<a href="https://github.com/tjschwartz7/deck-of-cards">' 
            + data.fangGang[2].profile3[0].projects2[0].url + '</a>' + '</h6>'; 
        
            myDiv6.appendChild(myH12);

            portfolioContainer.appendChild(myDiv6);

        }) 
