window.document.addEventListener('DOMContentLoaded', function() {
    let vacBtn = document.querySelector('.desc .wrapper .btn');
    let mainWindow = document.querySelector('main'); 
    let vacWindow = document.querySelector('.vacancies'); 
    let nav = document.querySelector('nav'); 
    let closeBtn = document.querySelector('.close-btn'); 
    let decsVac = document.querySelector('.win-nav'); 
    let nameType = document.getElementById('name'); 
    let snameType = document.getElementById('sName'); 
    let bDate = document.getElementById('bornDate');
    let mail = document.getElementById('mail');
    let aboutMe = document.getElementById('aboutMe');
    let send = document.getElementById('send');

    vacBtn.addEventListener('click', function() {   
        mainWindow.classList.remove('show'); 
        mainWindow.classList.add('hide');

        nav.classList.remove('show');
        nav.classList.add('hide');

        vacWindow.classList.remove('hide');
        vacWindow.classList.add('show');

        decsVac.classList.remove('hide');
        decsVac.classList.add('show');
    });

    closeBtn.addEventListener('click', function() {  
        vacWindow.classList.remove('show');
        vacWindow.classList.add('hide');

        decsVac.classList.remove('show');
        decsVac.classList.add('hide');

        mainWindow.classList.remove('hide'); 
        mainWindow.classList.add('show');

        nav.classList.remove('hide');
        nav.classList.add('show');
    });

    function createID() { 
        const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
        let id = ''; 
        for(let i = 0; i < 5; i++) { 
            id += char.charAt(Math.floor(Math.random() * char.length));
        }
        return id;
    }

    send.addEventListener('click', function() { 
        const nameValue = nameType.value; 
        const snameValue = snameType.value; 
        const dateValue = bDate.value; 
        const mailValue = mail.value; 
        const aboutValue = aboutMe.value; 
        
        if (!nameValue || !snameValue || !dateValue || !mailValue || !aboutValue) {
            alert('Пожалуйста, заполните все поля!');
            return;
        }

        const data = {
            name: nameValue,
            sname: snameValue,
            bornDate: dateValue,
            mail: mailValue,
            aboutMe: aboutValue
        };

        postData('send_mail.php', data)
            .then(response => {
                if (response.status === 'success') {
                    alert(response.message);
                } else {
                    alert(response.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });

    const postData = async (url = '', data = {}) => { 
        const response = await fetch(url, { 
            method: 'POST',
            headers: { 
                "Content-Type": "application/json" 
            }, 
            body: JSON.stringify(data)
        });
        return response.json(); 
    };
});
