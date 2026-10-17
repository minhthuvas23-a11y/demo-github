const userForm = document.getElementById("userForm");
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const displayInfo = document.getElementById("displayInfo");

        // Hiển thị thông tin đã lưu
        function showInfo() {
            const savedData = localStorage.getItem("userInfo");

            if (savedData) {
                const user = JSON.parse(savedData);

                displayInfo.replaceChildren();

                const nameParagraph = document.createElement("p");
                nameParagraph.textContent = "Name: " + user.name;

                const emailParagraph = document.createElement("p");
                emailParagraph.textContent = "Email: " + user.email;

                displayInfo.append(
                    nameParagraph,
                    emailParagraph
                );
            }
        }

        // Xử lý sự kiện gửi form
        userForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const user = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim()
            };

            // Lưu dữ liệu vào localStorage
            localStorage.setItem("userInfo", JSON.stringify(user));

            // Hiển thị dữ liệu vừa lưu
            showInfo();

            // Xóa nội dung trong form
            userForm.reset();

            alert("Lưu thông tin thành công!");
        });

        // Hiển thị dữ liệu khi mở lại trang
        showInfo();