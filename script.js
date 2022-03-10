
const url = 'info.json'
fetch(url)
        .then(function (response) {
        return response.json();    
        })
        .then(function(data){
            console.log(data);
        
//             Profile 1
        
            const output1 = document.querySelector('#portfolioContainer');
            const profile1 = document.createElement('section');
            profile1.classList.add('portfolio__container--tattoscape');

            const myDiv1 = document.createElement('div');

            myDiv1.innerHTML = '<h1>' + data.fangGang[0].profile1[0].basics['name'] + " | " + 
            data.fangGang[0].profile1[0].basics['title'] + '</h2>' + data.fangGang[0].profile1[0].basics.social1[0].network + " : " + '<a href="https://github.com/shiloh-byte">' + 
            data.fangGang[0].profile1[0].basics.social1[0].url + '</a>' + " | " + data.fangGang[0].profile1[0].basics.social2[0].
            network + " : " + '<a href="https://linkedin.com">' + data.fangGang[0].profile1[0].basics.social2[0].url + '</a>';
            
            profile1.appendChild(myDiv1);
            output1.appendChild(profile1);

            const myDiv2 = document.createElement('p');
            myDiv2.innerHTML = data.fangGang[0].profile1[0].basics['summary'];

            profile1.appendChild(myDiv2);

            const myDiv3 = document.createElement('div');
            myDiv3.innerHTML = data.fangGang[0].profile1[0].projects1[0].name + '<br />' + '<h6>' + 
            data.fangGang[0].profile1[0].projects1[0].roles + '<br /> ' + '<a href="https://github.com/shiloh-byte/Broken-Calculator">' 
            + data.fangGang[0].profile1[0].projects1[0].url + '</a>' + '</h6>';

            profile1.appendChild(myDiv3);
        
        
        
//         Profile 2
        
           const output2 = document.querySelector('#portfolioContainer');

            const profile2 = document.createElement('section');
            profile2.classList.add('portfolio__container--davidalex17');

            const myDiv4 = document.createElement('div');

            myDiv4.innerHTML = '<h2>' + data.fangGang[1].profile2[0].basics['name'] + " | " + 
            data.fangGang[1].profile2[0].basics['title'] + '</h2>' + data.fangGang[1].profile2[0].basics.social1[0].network + " : " + '<a href="https://github.com/DavidAlex17">' + 
            data.fangGang[1].profile2[0].basics.social1[0].url + '</a>' + " | " + data.fangGang[1].profile2[0].basics.social2[0].
            network + " : " + '<a href="https://linkedin.com">' + data.fangGang[1].profile2[0].basics.social2[0].url + '</a>';
            
            profile2.appendChild(myDiv4);

            const myDiv5 = document.createElement('p');
            myDiv5.innerHTML = data.fangGang[1].profile2[0].basics['summary'];

            profile2.appendChild(myDiv5);

            const myDiv6 = document.createElement('div');
            myDiv6.innerHTML = data.fangGang[1].profile2[0].projects1[0].name + '<br />' + '<h6>' + 
            data.fangGang[1].profile2[0].projects1[0].roles + '<br /> ' + '<a href="https://github.com/DavidAlex17/Broken-Calculator">' 
            + data.fangGang[1].profile2[0].projects1[0].url + '</a>' + '</h6>';

            profile2.appendChild(myDiv6);
            output2.appendChild(profile2); 
        
        
        
//         Profile 3
        
           const output3 = document.querySelector('#portfolioContainer');

            const profile3 = document.createElement('section');
            profile3.classList.add('portfolio__container--tbone');

            const myDiv7 = document.createElement('div');

            myDiv7.innerHTML = '<h2>' + data.fangGang[2].profile3[0].basics['name'] + " | " + 
            data.fangGang[2].profile3[0].basics['title'] + '</h2>' + data.fangGang[2].profile3[0].basics.social1[0].network + " : " + '<a href="https://github.com/tjschwartz7">' + 
            data.fangGang[2].profile3[0].basics.social1[0].url + '</a>' + " | " + data.fangGang[2].profile3[0].basics.social2[0].
            network + " : " + '<a href="https://linkedin.com">' + data.fangGang[2].profile3[0].basics.social2[0].url + '</a>';
            
            profile3.appendChild(myDiv7);

            const myDiv8 = document.createElement('p');
            myDiv8.innerHTML = data.fangGang[2].profile3[0].basics['summary'];

            profile3.appendChild(myDiv8);

            const myDiv9 = document.createElement('div');
            myDiv9.innerHTML = data.fangGang[2].profile3[0].projects1[0].name + '<br />' + '<h6>' + 
            data.fangGang[2].profile3[0].projects1[0].roles + '<br /> ' + '<a href="https://github.com/tjschwartz7/Broken-Calculator">' 
            + data.fangGang[2].profile3[0].projects1[0].url + '</a>' + '</h6>';

            profile3.appendChild(myDiv9);
            output3.appendChild(profile3); 

        }) 
