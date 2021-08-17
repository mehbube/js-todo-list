let add = document.getElementById("add");
let tbody = document.querySelector("tbody")
let sira = true;
add.addEventListener("click", function () {
    if(sira){
        tbody.innerHTML += `
        <tr>
            <td></td>
            <td><input type="text" id="name" class="form-control" placeholder="Name"></td>
            <td><input type="text" id="surname" class="form-control" placeholder="Surname"></td>
            <td><input type="text" id="phone" class="form-control" placeholder="Phone"></td>
            <td>
                <button class="btn btn-success" onclick="saveRow(this)">Save</button>
                <button class="btn btn-danger" onclick="cancelRow(this)">Cancel</button>
            </td>
        </tr>
    `   
    sira = false;
    }else{
        alert("evvelkini doldur")
    }
    numbered()

})

function numbered() {
    let num = 1;
    let tr = document.querySelectorAll("tbody tr");
    tr.forEach(e => {
        e.querySelector("td").innerText = num;
        num++
    })
}


function cancelRow(e) {
    // console.log(e.previousElementSibling);
    // console.log(e.nextElementSibling);
    // console.log(e.parentElement.children);
    e.closest("tr").remove()
    sira = true;
    numbered()
}
function saveRow(e) {


    if(checkInputs().length == 0){
        let td = e.closest("tr").querySelectorAll("td:not(:first-child, :last-child)")
        td.forEach(element => {
            element.innerHTML = element.querySelector("input").value
        });
        e.nextElementSibling.innerText = "Delete";
        e.setAttribute("onclick", "editRow(this)");
        e.innerText = "Edit"

        sira = true;
    }else{
        checkInputs().forEach(el => {
            el.classList.add("bg-danger")
        })
    }


}
function editRow(e) {
    let td = e.closest("tr").querySelectorAll("td:not(:first-child, :last-child)")
    td.forEach(element => {
        element.innerHTML = `<input type="text" value="${element.innerText}" class="form-control"/>`
    });
    e.setAttribute("onclick", "saveRow(this)");
    e.innerText = "Save"
}


function checkInputs() {
    let error = []
    let inputs = document.querySelectorAll("input")

    inputs.forEach(el => {
        el.classList.remove("bg-danger")
        if(el.value < 1 ){
            error.push(el)
        }
    })

    return error
}
