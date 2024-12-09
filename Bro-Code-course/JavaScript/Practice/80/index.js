// Lấy các phần tử từ DOM dựa trên lớp CSS
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

// API key để sử dụng dịch vụ OpenWeatherMap
const apiKey = "f369ed873e7b809821e934fa0cd96f56";

// Thêm sự kiện 'submit' vào biểu mẫu thời tiết
weatherForm.addEventListener("submit", async event => {
  // Ngăn chặn hành vi mặc định của form (refresh trang)
  event.preventDefault();

  // Lấy giá trị từ input (thành phố người dùng nhập)
  const city = cityInput.value;

  // Kiểm tra nếu người dùng đã nhập tên thành phố
  if (city) {
    try {
      // Gọi hàm để lấy dữ liệu thời tiết và hiển thị thông tin
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
    } catch (error) {
      // Hiển thị lỗi nếu có vấn đề khi lấy dữ liệu
      console.error(error);
      displayError(error);
    }
  } else {
    // Hiển thị lỗi nếu người dùng không nhập thành phố
    displayError("Please enter a city");
  }
});

// Hàm lấy dữ liệu thời tiết từ API OpenWeatherMap
async function getWeatherData(city) {
  // Tạo URL để gọi API với thành phố và API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  // Gọi API bằng fetch và chờ kết quả trả về
  const response = await fetch(apiUrl);

  // Kiểm tra nếu không có phản hồi thành công
  if (!response.ok) {
    throw new Error("Could not fetch weather data");
  } else {
    // Trả về dữ liệu JSON từ phản hồi
    return await response.json();
  }
}

// Hàm hiển thị thông tin thời tiết lên giao diện người dùng
function displayWeatherInfo(data) {
  // Lấy thông tin cần thiết từ đối tượng dữ liệu thời tiết
  const { name: city, main: { temp, humidity }, weather: [{ description, id }] } = data;

  // Xóa nội dung cũ của thẻ card và thiết lập kiểu hiển thị
  card.textContent = "";
  card.style.display = "flex";

  // Tạo các phần tử HTML để hiển thị thông tin thời tiết
  const cityDisplay = document.createElement("h1");
  const tempDisplay = document.createElement("p");
  const humidityDisplay = document.createElement("p");
  const descDisplay = document.createElement("p");
  const weatherEmoji = document.createElement("p");

  // Hiển thị tên thành phố
  cityDisplay.textContent = city;
  // Chuyển đổi nhiệt độ từ Kelvin sang Fahrenheit và hiển thị
  tempDisplay.textContent = `${((temp - 273.15) * (9/5) + 32).toFixed(2)}°K`;
  // Hiển thị độ ẩm
  humidityDisplay.textContent = `Humidity: ${humidity}%`;
  // Hiển thị mô tả thời tiết
  descDisplay.textContent = description;
  // Hiển thị biểu tượng thời tiết phù hợp
  weatherEmoji.textContent = getWeatherEmoji(id);

  // Thêm các lớp CSS cho các phần tử
  cityDisplay.classList.add("cityDisplay");
  tempDisplay.classList.add("tempDisplay");
  humidityDisplay.classList.add("humidityDisplay");
  descDisplay.classList.add("descDisplay");
  weatherEmoji.classList.add("weatherEmoji");

  // Thêm các phần tử vào thẻ card
  card.appendChild(cityDisplay);
  card.appendChild(tempDisplay);
  card.appendChild(humidityDisplay);
  card.appendChild(descDisplay);
  card.appendChild(weatherEmoji);
}

// Hàm lấy biểu tượng thời tiết dựa trên ID thời tiết từ API
function getWeatherEmoji(weatherId) {
  // Sử dụng switch để kiểm tra khoảng giá trị của weatherId và trả về biểu tượng tương ứng
  switch(true) {
    case (weatherId >= 200 && weatherId < 300):
      return "⛈"; // Giông bão
    case (weatherId >= 300 && weatherId < 400):
      return "🌧"; // Mưa phùn
    case (weatherId >= 500 && weatherId < 600):
      return "🌨"; // Mưa
    case (weatherId >= 600 && weatherId < 700):
      return "❄"; // Tuyết
    case (weatherId >= 700 && weatherId < 800):
      return "🌫"; // Sương mù
    case (weatherId === 800):
      return "☀"; // Trời trong
    case (weatherId >= 801 && weatherId < 810):
      return "☁"; // Có mây
    default:
      return "❓"; // Không xác định
  }
}

// Hàm hiển thị thông báo lỗi lên giao diện
function displayError(message) {
  // Tạo phần tử HTML để hiển thị lỗi
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  // Xóa nội dung cũ của thẻ card và hiển thị thông báo lỗi
  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
