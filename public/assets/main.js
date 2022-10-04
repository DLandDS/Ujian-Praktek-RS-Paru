//get create-form from document

reloadTable();

const form = document.getElementById('create-form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        let dateString = form.tanggal_lahir.value;
        let date = new Date(dateString).toJSON();
        let data = {
            nama: form.nama.value,
            jenis_kelamin: form.jenis_kelamin.value,
            tanggal_lahir: date,
            alamat: form.alamat.value,
            no_telp: form.no_telp.value,
            deskripsi: form.deskripsi.value,
        }
        let response = await makeRequest('POST', '/api/v1/create', data);
        alert(response.message);
    } catch (error) {
        alert("Data yang anda masukkan tidak benar");
    }
});

//reload table
async function reloadTable() {
    let response = await makeRequest('GET', '/api/v1/pasien');
    let data = response.data;
    console.log(data);
    let table = document.getElementById('table');
    
}

//create request
function makeRequest(method, url, data) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => resolve(JSON.parse(xhr.responseText));
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send(JSON.stringify(data));
    });
}