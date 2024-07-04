const inputplan = document.querySelector(".inputplan");
const buttonadd = document.querySelector(".buttonadd");
const todolist = document.querySelector(".todolist");

// khi bấm lưu ->lưu lại giá trị ở ô input vào localstorage
buttonadd.addEventListener("click", (a,) => {
    a.preventDefault(); // Ngăn tải load lại trang
    let userdata = inputplan.value.trim(); //tạo biến let tại vì chỉ muốn khai báo trong sự kiên click
    if (userdata) {return;}
    let getlocalstorage = localStorage.getItem("todo");
    let listArray = getlocalstorage ? JSON.parse(getlocalstorage) : [];
    listArray.push(userdata);
    localStorage.setItem("todo", JSON.stringify(listArray));
    updateTodoList();
    inputplan.value = "";
})

function updateTodoList() {
    let getlocalstorage = localStorage.getItem("todo");
    let listArray = getlocalstorage ? JSON.parse(getlocalstorage) : [];

    todolist.innerHTML = "";
    listArray.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
                <div class="task-name">${task}</div>
                <a href="#" class="edit" data-index="${index}">Sửa</a>
                <a href="#" class="delete" data-index="${index}">Xóa</a>
            `;
        todolist.appendChild(li);
    });
}

