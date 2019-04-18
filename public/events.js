const main = document.getElementById("my_app")
main.addEventListener('click', item => {
    if (item.target.getAttribute('id') == 'create-user') {
        let form = document.getElementById('user-register');
        let formData = new FormData(form);
        post('/created', formData)
        .then((data)=> alert(data))
        .catch((err)=> alert(err));
    }
    if (item.target.getAttribute('id') == 'login') {
        let form = document.getElementById('user-login');
        let formData = new FormData(form);
        post('/auth', formData)
        .then((data)=> window.location.href =(data))
        .catch((err)=> window.location.href =(err));
    }
})






/**
 * method post
 */

const post = (url, data) => {
    /**
     * URL como /recurso/accion
     * data debe ser un objeto FormData
     */
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open('POST', url, true);
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                //let datos = JSON.parse(this.responseText);
                resolve(this.responseText);
            }
        }
        request.onerror = function () {
            reject(Error("Network Error"));
        };
        request.send(data);
    })
}