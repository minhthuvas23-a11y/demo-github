
const STORAGE_KEY = "personalProfile";

const form = document.getElementById("profileForm");

const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const addressInput = document.getElementById("address");
const avatarUrlInput = document.getElementById("avatarUrl");

const namePreview = document.getElementById("namePreview");
const emailPreview = document.getElementById("emailPreview");
const phonePreview = document.getElementById("phonePreview");
const addressPreview = document.getElementById("addressPreview");
const avatarPreview = document.getElementById("avatarPreview");

const statusMessage = document.getElementById("statusMessage");
const savedIndicator = document.getElementById("savedIndicator");
const formTitle = document.getElementById("formTitle");
const saveButton = document.getElementById("saveButton");

const DEFAULT_AVATAR =
    "https://i.pravatar.cc/240?img=12";


// 1. Lấy dữ liệu từ form
function getFormData() {
    return {
        fullName: fullNameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        address: addressInput.value.trim(),
        avatarUrl: avatarUrlInput.value.trim()
    };
}


// 2. Hiển thị hồ sơ lên giao diện
function showProfile(profile) {
    namePreview.textContent =
        profile.fullName || "Tên của bạn";

    emailPreview.textContent =
        profile.email || "Chưa cập nhật";

    phonePreview.textContent =
        profile.phone || "Chưa cập nhật";

    addressPreview.textContent =
        profile.address || "Chưa cập nhật";

    avatarPreview.src =
        profile.avatarUrl || DEFAULT_AVATAR;

    savedIndicator.textContent = "Đã lưu";
}


// 3. Đưa dữ liệu đã lưu trở lại form
function fillForm(profile) {
    fullNameInput.value = profile.fullName || "";
    emailInput.value = profile.email || "";
    phoneInput.value = profile.phone || "";
    addressInput.value = profile.address || "";
    avatarUrlInput.value = profile.avatarUrl || "";
}


// 4. Đọc dữ liệu từ localStorage khi mở website
function loadProfile() {
    try {
        const savedProfile =
            localStorage.getItem(STORAGE_KEY);

        // Nếu chưa có hồ sơ thì kết thúc
        if (!savedProfile) {
            return;
        }

        const profile = JSON.parse(savedProfile);

        fillForm(profile);
        showProfile(profile);

        formTitle.textContent =
            "Cập nhật hồ sơ cá nhân";

        saveButton.textContent =
            "Cập nhật hồ sơ";

        statusMessage.textContent =
            "Đã tải hồ sơ đã lưu từ trình duyệt.";

    } catch (error) {
        statusMessage.textContent =
            "Không thể đọc dữ liệu đã lưu.";
    }
}


// 5. Xử lý khi người dùng gửi form
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const profile = getFormData();

    // Kiểm tra thông tin bắt buộc
    if (
        !profile.fullName ||
        !profile.email ||
        !profile.phone ||
        !profile.address
    ) {
        statusMessage.textContent =
            "Vui lòng điền đầy đủ thông tin.";
        return;
    }

    try {
        // Lưu dữ liệu dưới dạng JSON
        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(profile)
        );

        // Hiển thị hồ sơ vừa lưu
        showProfile(profile);

        formTitle.textContent =
            "Cập nhật hồ sơ cá nhân";

        saveButton.textContent =
            "Cập nhật hồ sơ";

        statusMessage.textContent =
            "Lưu hồ sơ thành công!";

    } catch (error) {
        statusMessage.textContent =
            "Không thể lưu dữ liệu trong trình duyệt.";
    }
});


// 6. Nút xóa nội dung form
document
    .getElementById("clearButton")
    .addEventListener("click", function() {

        form.reset();

        namePreview.textContent = "Tên của bạn";
        emailPreview.textContent = "Chưa cập nhật";
        phonePreview.textContent = "Chưa cập nhật";
        addressPreview.textContent = "Chưa cập nhật";

        avatarPreview.src = DEFAULT_AVATAR;

        savedIndicator.textContent = "Chưa lưu";

        statusMessage.textContent =
            "Các ô đã được làm trống. Hồ sơ đã lưu vẫn còn.";
    });


// 7. Hiển thị ảnh mặc định nếu URL ảnh bị lỗi
avatarPreview.addEventListener("error", function() {
    avatarPreview.src = DEFAULT_AVATAR;
});


// 8. Xem trước ảnh khi nhập URL
avatarUrlInput.addEventListener("input", function() {
    const url = avatarUrlInput.value.trim();

    if (url) {
        avatarPreview.src = url;
    }
});


// 9. Tự động tải hồ sơ khi mở trang
loadProfile();
