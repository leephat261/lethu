# Crisp Cute birthday card — current version

Crisp Cute Free Sampler (Strawberry Milk) has been applied to this original project. Personal greetings and all six original photos are retained.

- Development preview: `npm run dev -- --host 127.0.0.1 --port 5174`
- Build: `npm run build`; checks: `npm run lint`
- Design and validation notes: [REDESIGN_NOTES.md](REDESIGN_NOTES.md)
- Asset sources and licences: [ASSET_CREDITS.md](ASSET_CREDITS.md)
- Open `girlproject-crisp.code-workspace` in VS Code.

The previous documentation below is retained for reference. Pixel-art descriptions and old size/load claims below predate this redesign.

---

# 🌻 Happy Birthday Website — 2D Pixel Art Nature Edition 🎮☁️

> Website chúc mừng sinh nhật tương tác cao cấp phong cách **2D Pixel Art, thiên nhiên mùa hè retro & pastel đa sắc**, lấy cảm hứng từ trang web [forourgirl.vercel.app](https://forourgirl.vercel.app/) nhưng được nâng cấp toàn diện về mặt thẩm mỹ, chiều sâu thị giác và trải nghiệm cảm xúc.
>
> Dự án được tối ưu hóa đặc biệt cho thiết bị di động (**Mobile-First**) và sẵn sàng tích hợp với thẻ **NFC** để làm quà tặng sinh nhật bất ngờ dành riêng cho bạn thân (**Ma feng — Nguyễn Lê Anh Thư**, sinh ngày 21 tháng 10).

---

## 📑 MỤC LỤC
1. [Giới Thiệu Dự Án](#-giới-thiệu-dự-án)
2. [Điểm Nổi Bật Về Thiết Kế & Trải Nghiệm](#-điểm-nổi-bật-về-thiết-kế--trải-nghiệm)
3. [Công Nghệ Sử Dụng (Tech Stack)](#-công-nghệ-sử-dụng-tech-stack)
4. [Cấu Trúc Thư Mục Dự Án](#-cấu-trúc-thư-mục-dự-án)
5. [Hướng Dẫn Tùy Biến Dữ Liệu Cá Nhân Hóa](#-hướng-dẫn-tùy-biến-dữ-liệu-cá-nhân-hóa)
6. [Hướng Dẫn Chạy Môi Trường Cục Bộ (Local)](#-hướng-dẫn-chạy-môi-trường-cục-bộ-local)
7. [Hướng Dẫn Lưu Trữ Mã Nguồn Lên GitHub](#-hướng-dẫn-lưu-trữ-mã-nguồn-lên-github)
8. [Hướng Dẫn Deploy Lên Vercel (Miễn Phí & Tự Động)](#-hướng-dẫn-deploy-lên-vercel-miễn-phí--tự-động)
9. [Hướng Dẫn Ghi Link Vào Thẻ NFC Làm Quà Tặng](#-hướng-dẫn-ghi-link-vào-thẻ-nfc-làm-quà-tặng)
10. [Khắc Phục Sự Cố Thường Gặp (FAQ)](#-khắc-phục-sự-cố-thường-gặp-faq)

---

## 🌟 GIỚI THIỆU DỰ ÁN

Website là một hành trình mở quà sinh nhật gồm 6 giai đoạn tương tác liền mạch:
1. **Màn hình Lời mời**: Hộp quà gỗ mộc nhún nhảy theo nhịp, khung đối thoại RPG retro và nút mở quà nổi bật.
2. **Khoảnh khắc Mở quà**: Rương quà bung nắp kèm pháo hoa giấy Confetti pastel đa sắc và giai điệu âm nhạc cất lên.
3. **Thiệp chúc mừng RPG**: Khung thiệp mộc mạc với con tem bưu điện pixel `[FEN]`, ngày sinh `21 tháng 10`, cung `Thiên Bình` và lời chúc tình bạn ấm áp.
4. **Album kỷ niệm Polaroid**: Khung ảnh Polaroid ghim washi tape, **giữ nguyên 100% độ sắc nét ảnh thật của bạn bè**, hỗ trợ Lightbox toàn màn hình có vuốt cảm ứng (*swipe*) trên di động.
5. **Chiếc bánh kem ước nguyện**: Bánh sinh nhật 2 tầng pixel bakery, chạm vào ngọn nến để thổi tắt lửa, khói bay bồng bềnh và nổ pháo hoa chúc mừng.
6. **Lá thư cuối & Dấu sáp niêm phong**: Bức thư cổ điển với dấu sáp đỏ gạch `[FOR FEN]` cùng nút "XEM LẠI TỪ ĐẦU 🔄".
7. **Trình phát nhạc Mini Cassette**: Máy nghe nhạc retro nổi ở góc màn hình, tự động chơi giai điệu Music Box piano lofi (hoặc file MP3 thật).

---

## 🎨 ĐIỂM NỔI BẬT VỀ THIẾT KẾ & TRẢI NGHIỆM

- **Khung cảnh Pixel Art Đa Tầng (4 Parallax Layers)**:
  - `summer-sky.svg`: Bầu trời xanh hè thiên thanh với gradient dither mịn và dải mây mỏng chân trời.
  - `summer-mountains.svg`: Dãy núi xa mù sương 3 tầng tạo chiều sâu không gian tự nhiên (*Atmospheric Perspective*).
  - `summer-clouds.svg`: Cụm mây trắng hè bồng bềnh có thể tích 3D và viền nắng vàng ấm áp.
  - `summer-meadow.svg`: Triền đồi cỏ xanh hè, hàng rào gỗ đồng quê, cọc mốc kỷ niệm `21.10`, chú cún shiba nhỏ đón gió và thảm hoa dại đa sắc (cánh bướm hồng, cúc vàng, cúc trắng, hoa chuông xanh).
  - Đàn chim trắng bay ngang bầu trời và cánh hoa dại phớt hồng lướt nhẹ theo làn gió hè.
- **Typography Chuẩn Tiếng Việt 100%**:
  - Không bị lỗi dấu ngã, hỏi, nặng hay bị fallback về font mặc định hệ thống.
  - Kết hợp hài hòa giữa `Mali`, `Comfortaa`, `Patrick Hand`, `Quicksand`, `Silkscreen` và `VT323`.
- **Tối ưu Mobile-First & NFC**:
  - Tải tức thì trong chưa đầy 1 giây, siêu nhẹ (tổng tài nguyên chưa tới 50 KB).
  - Giao diện vừa vặn hoàn hảo với màn hình điện thoại iPhone/Android.

---

## 💻 CÔNG NGHỆ SỬ DỤNG (TECH STACK)

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/) (Build siêu tốc, Hot Module Replacement).
- **Icons**: [lucide-react](https://lucide.dev/) (Bộ icon hiện đại, sắc nét).
- **Hiệu ứng pháo hoa**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) (Pháo hoa giấy pastel đa sắc).
- **Âm thanh**: Web Audio API (Bộ tổng hợp nốt nhạc Music Box / Piano Lofi không phụ thuộc file ngoài) + Trình phát nhạc MP3 HTML5 Audio.
- **Styling**: Vanilla CSS Modular + CSS Variables (Quản lý màu sắc tập trung, tối ưu hiệu năng tối đa).
- **Đồ họa**: Vector Pixel SVG chuẩn `shape-rendering="crispEdges"` (Sắc nét tuyệt đối trên mọi độ phân giải Retina/OLED).

---

## 📁 CẤU TRÚC THƯ MỤC DỰ ÁN

```text
girlproject/
├── public/
│   ├── assets/                # Toàn bộ đồ họa Pixel Art SVG
│   │   ├── summer-sky.svg        # Nền trời hè xanh ngắt
│   │   ├── summer-mountains.svg  # Dãy núi xa 3 tầng
│   │   ├── summer-clouds.svg     # Mây trắng hè bồng bềnh
│   │   ├── summer-meadow.svg     # Đồi cỏ, cún shiba, hàng rào & hoa dại
│   │   ├── ui-giftbox.svg        # Hộp quà sinh nhật gỗ mộc
│   │   └── ui-cake.svg           # Bánh kem thổi nến ước nguyện
│   ├── images/                # Nơi đặt ảnh kỷ niệm thật của bạn bè (photo1.jpg,...)
│   ├── music/                 # Nơi đặt file bài hát MP3 (birthday-song.mp3)
│   ├── favicon.svg            # Favicon hiển thị trên tab trình duyệt
│   └── icons.svg              # Sprite icons phụ trợ
├── src/
│   ├── assets/                # Assets nội bộ của src
│   ├── components/            # Các khối giao diện tương tác
│   │   ├── BackgroundDecorations.jsx # Khung cảnh thiên nhiên đa tầng parallax
│   │   ├── BirthdayWish.jsx          # Màn hình 3: Thiệp chúc mừng RPG
│   │   ├── FinalLetter.jsx           # Màn hình 6: Bức thư niêm phong dấu sáp
│   │   ├── GiftUnwrapEffect.jsx      # Màn hình 2: Hiệu ứng mở quà & pháo hoa
│   │   ├── InvitationSection.jsx     # Màn hình 1: Lời mời & hộp quà nhún nhảy
│   │   ├── LightboxModal.jsx         # Modal phóng to xem ảnh (hỗ trợ vuốt chạm)
│   │   ├── MakeAWishCake.jsx         # Màn hình 5: Chiếc bánh kem thổi nến
│   │   ├── MusicPlayer.jsx           # Mini Cassette player góc màn hình
│   │   └── ScrapbookGallery.jsx      # Màn hình 4: Album ảnh Polaroid
│   ├── data/
│   │   └── birthdayConfig.js  # NƠI TÙY BIẾN TOÀN BỘ NỘI DUNG WEBSITE
│   ├── styles/                # Hệ thống CSS phân tầng
│   │   ├── components.css     # Style chi tiết cho từng component
│   │   ├── main.css           # Bố cục khung cảnh & animations
│   │   ├── mobile.css         # Tối ưu giao diện điện thoại & NFC
│   │   └── variables.css      # Bảng mã màu Pixel Art & Typography
│   ├── utils/
│   │   ├── audioSynth.js      # Bộ phát nhạc Piano Lofi tự động
│   │   └── confettiHelper.js  # Cấu hình các đợt bắn pháo hoa giấy
│   ├── App.jsx                # Component điều hướng chính
│   ├── index.css              # Reset CSS nền tảng
│   └── main.jsx               # Điểm khởi chạy React
├── index.html                 # File HTML gốc (Cấu hình Meta tags, Font Google)
├── package.json               # Khai báo thư viện & lệnh chạy
├── vite.config.js             # Cấu hình Vite bundler
└── README.md                  # Hướng dẫn chi tiết dự án
```

---

## 🛠️ HƯỚNG DẪN TÙY BIẾN DỮ LIỆU CÁ NHÂN HÓA

Toàn bộ văn bản, ngày sinh, lời chúc, danh sách ảnh kỷ niệm và cấu hình nhạc được quản lý tập trung tại **duy nhất một file**:
👉 **[`src/data/birthdayConfig.js`](file:///d:/girlproject/src/data/birthdayConfig.js)**

### 1. Đổi tên người nhận & ngày sinh:
Mở `src/data/birthdayConfig.js` và chỉnh sửa:
```javascript
export const birthdayConfig = {
  recipient: {
    name: "Nguyễn Lê Anh Thư",       // Tên người nhận
    nickname: "Ma feng",             // Biệt danh thân mật
    birthDate: "21 tháng 10",        // Ngày sinh nhật
    zodiac: "Thiên Bình ♎ THÁNG 10", // Cung hoàng đạo
    ageBadge: "Happy Birthday Fen ✨",
  },
  ...
```

### 2. Thêm hoặc thay ảnh kỷ niệm thật:
1. Chuẩn bị ảnh chụp của bạn bè (định dạng `.jpg`, `.png`, hoặc `.webp`).
2. Copy các file ảnh vào thư mục: `public/images/`
   *(Ví dụ đặt tên là: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`,...)*
3. Cập nhật mảng `memories` trong `src/data/birthdayConfig.js`:
```javascript
memories: [
  {
    id: 1,
    image: "/images/photo1.jpg",
    title: "Nụ cười rạng rỡ",
    caption: "Mỗi lần fen cười là cả ngày bừng sáng như nắng sớm ✨",
    tag: "Memory #01",
    rotation: "-1.5deg", // Góc nghiêng tự nhiên của ảnh polaroid
  },
  {
    id: 2,
    image: "/images/photo2.jpg",
    title: "Chiếc bánh ngọt ngào",
    caption: "Thêm một tuổi mới với thật nhiều niềm vui và bất ngờ 🍰",
    tag: "Memory #02",
    rotation: "2deg",
  },
  // Thêm bớt số lượng ảnh tùy ý!
]
```
> **Mẹo**: Nếu bạn chưa kịp bỏ ảnh vào thư mục `public/images/`, website sẽ tự động kích hoạt chế độ **Thẻ Minh Họa Pixel Tự Nhiên** với icon hoa dại, tách trà, cún shiba,... cực xinh để không bao giờ bị lỗi ảnh hỏng!

### 3. Đổi bài nhạc MP3 yêu thích:
1. Chuẩn bị file bài hát định dạng `.mp3`.
2. Đổi tên file thành `birthday-song.mp3` và copy vào thư mục:
   👉 `public/music/birthday-song.mp3`
3. Khi người nhận bấm nút mở quà, website sẽ tự động phát bài hát này qua mini cassette player!

---

## 💻 HƯỚNG DẪN CHẠY MÔI TRƯỜNG CỤC BỘ (LOCAL)

### Yêu cầu:
- Máy tính đã cài đặt **Node.js** (Phiên bản 18 trở lên). Tải tại: [nodejs.org](https://nodejs.org/).

### Các bước thực hiện:

1. **Mở terminal (PowerShell hoặc Command Prompt) tại thư mục dự án**:
   ```bash
   cd d:\girlproject
   ```

2. **Cài đặt các thư viện cần thiết** (chỉ cần làm lần đầu):
   ```bash
   npm install
   ```

3. **Chạy server phát triển (Development Server)**:
   ```bash
   npm run dev
   ```
   Terminal sẽ hiển thị đường link:
   ```text
   VITE v8.x.x  ready in 200 ms

   ➜  Local:   http://localhost:5173/
   ➜  Network: use --host to expose
   ```

4. **Mở trình duyệt**:
   Truy cập **http://localhost:5173/** để tận hưởng thiệp sinh nhật! Mọi thay đổi code sẽ được tự động làm mới tức thì (Hot Reload).

5. **Kiểm tra bản build chính thức (Production Build)**:
   ```bash
   npm run build
   ```
   Lệnh này sẽ biên dịch toàn bộ website thành gói tĩnh tối ưu hóa cao trong thư mục `dist/` (chỉ mất ~300ms).

---

## 🐙 HƯỚNG DẪN LƯU TRỮ MÃ NGUỒN LÊN GITHUB

Lưu trữ dự án lên GitHub giúp bạn sao lưu mã nguồn an toàn và liên kết trực tiếp với dịch vụ deploy Vercel.

### Bước 1: Tạo Repository mới trên GitHub
1. Truy cập [github.com](https://github.com/) và đăng nhập tài khoản.
2. Nhấn vào dấu **`+`** ở góc trên bên phải -> Chọn **New repository**.
3. Điền các thông tin:
   - **Repository name**: `birthday-gift` (hoặc tên bất kỳ bạn thích).
   - **Description**: `2D Pixel Art Nature Birthday Website for Ma feng`.
   - **Visibility**: Chọn **Public** (hoặc **Private** nếu muốn giữ bí mật).
   - **Không tích chọn** *Add a README file*, *.gitignore*, hay *license* (vì dự án của bạn đã có sẵn các file này).
4. Nhấn nút **Create repository**.
5. Copy đường dẫn link của repository vừa tạo (Ví dụ: `https://github.com/<tai-khoan-cua-ban>/birthday-gift.git`).

### Bước 2: Đẩy mã nguồn từ máy lên GitHub
Mở terminal tại thư mục `d:\girlproject` và chạy tuần tự các lệnh sau:

```bash
# 1. Khởi tạo kho lưu trữ Git cục bộ
git init

# 2. Thêm toàn bộ các file dự án vào danh sách theo dõi
git add .

# 3. Tạo commit đầu tiên
git commit -m "Initial commit: 2D Pixel Art Nature birthday card for Ma feng"

# 4. Đặt tên nhánh chính là main
git branch -M main

# 5. Liên kết kho lưu trữ máy tính với GitHub (thay URL bằng link repo của bạn)
git remote add origin https://github.com/<tai-khoan-cua-ban>/birthday-gift.git

# 6. Đẩy mã nguồn lên GitHub
git push -u origin main
```

> **Cách cập nhật code lên GitHub cho những lần sau**:
> Mỗi khi bạn thay đổi lời chúc hoặc ảnh mới, chỉ cần chạy 3 lệnh ngắn gọn:
> ```bash
> git add .
> git commit -m "Update birthday photos and wishes"
> git push
> ```

---

## 🚀 HƯỚNG DẪN DEPLOY LÊN VERCEL (MIỄN PHÍ & TỰ ĐỘNG)

Vercel là nền tảng hosting số 1 cho các ứng dụng Vite/React, hoàn toàn miễn phí, có chứng chỉ SSL (HTTPS), đường truyền tốc độ cao toàn cầu và tương thích hoàn hảo với việc quét thẻ NFC trên điện thoại.

### Cách 1: Deploy tự động qua GitHub (Khuyên dùng — Tiện lợi nhất)

1. Truy cập [vercel.com](https://vercel.com/) và đăng nhập bằng tài khoản GitHub của bạn.
2. Tại trang bảng điều khiển (Dashboard), nhấn nút **Add New...** -> Chọn **Project**.
3. Tại danh sách **Import Git Repository**, bạn sẽ thấy repository `birthday-gift` vừa đẩy lên. Nhấn nút **Import**.
4. Cấu hình dự án (Vercel tự động nhận diện hoàn hảo):
   - **Project Name**: Giữ nguyên hoặc đặt tên theo ý muốn (ví dụ: `for-ma-feng`).
   - **Framework Preset**: `Vite` (mặc định).
   - **Root Directory**: `./` (mặc định).
   - **Build and Output Settings**: Giữ mặc định (`npm run build`, output: `dist`).
5. Nhấn nút **Deploy**.
6. Chờ khoảng 30 đến 45 giây, màn hình sẽ bùng nổ pháo hoa chúc mừng! Bạn sẽ nhận được đường link website chính thức dạng:
   👉 **`https://for-ma-feng.vercel.app`**
7. **Tự động hóa**: Từ nay về sau, mỗi khi bạn `git push` code mới lên GitHub, Vercel sẽ tự động build lại website chỉ trong vài giây!

### Cách 2: Deploy trực tiếp từ dòng lệnh (Vercel CLI)

Nếu bạn không muốn liên kết GitHub, bạn có thể deploy thẳng từ máy tính:
1. Cài đặt công cụ Vercel:
   ```bash
   npm install -g vercel
   ```
2. Đăng nhập Vercel:
   ```bash
   vercel login
   ```
3. Chạy lệnh deploy:
   ```bash
   vercel
   ```
   *(Nhấn Enter để đồng ý với tất cả các câu hỏi mặc định của Vercel)*
4. Để xuất bản lên domain chính thức (Production):
   ```bash
   vercel --prod
   ```

---

## 📱 HƯỚNG DẪN GHI LINK VÀO THẺ NFC LÀM QUÀ TẶNG

Thẻ NFC (Near Field Communication) là một món quà công nghệ cực kỳ tinh tế và bất ngờ. Khi người nhận chạm mặt lưng điện thoại vào thẻ, thiệp sinh nhật sẽ tự động bật lên trên màn hình!

### Chuẩn bị:
- 1 thẻ NFC trắng (chuẩn chip **NTAG213**, **NTAG215** hoặc **NTAG216** — có thể mua trên Shopee/Lazada với giá chỉ 5.000đ - 15.000đ/thẻ).
- Điện thoại có NFC (Hầu hết iPhone từ iPhone 7 trở lên và các máy Android hiện đại).

### Các bước ghi thẻ:
1. Cài đặt ứng dụng **NFC Tools** miễn phí:
   - iOS: [App Store - NFC Tools](https://apps.apple.com/app/nfc-tools/id1252962749)
   - Android: [Google Play - NFC Tools](https://play.google.com/store/apps/details?id=com.wakdev.wdnfc)
2. Mở ứng dụng **NFC Tools** trên điện thoại.
3. Chọn tab **Write** (Ghi).
4. Nhấn **Add a record** -> Chọn mục **URL / URI**.
5. Dán đường link Vercel của bạn vào (Ví dụ: `https://for-ma-feng.vercel.app`).
6. Nhấn nút **OK**, sau đó nhấn **Write / 28 Bytes** (Ghi dữ liệu).
7. Chạm thẻ NFC vào mặt lưng điện thoại (vùng gần camera) cho đến khi ứng dụng báo dấu tích xanh ✅ **Write Complete!**
8. **Thử nghiệm**: Đưa thẻ lại gần điện thoại của bạn, một thông báo sẽ xuất hiện để mở thiệp sinh nhật ngay tức khắc!

---

## ❓ KHẮC PHỤC SỰ CỐ THƯỜNG GẶP (FAQ)

### 1. Tại sao nhạc không tự động phát khi vừa mở trang?
> **Giải thích**: Tất cả các trình duyệt hiện đại (Safari trên iOS, Chrome trên Android) đều có chính sách chặn tự động phát âm thanh (*Autoplay Policy*) nếu người dùng chưa tương tác với màn hình.
> **Giải pháp**: Website đã được thiết kế tinh tế để khi người nhận bấm nút **"MỞ QUÀ NGAY NÈ ✨"**, âm thanh sẽ lập tức được kích hoạt mượt mà mà không gặp bất kỳ trở ngại nào.

### 2. Ảnh kỷ niệm đưa vào thư mục `public/images/` không hiển thị?
> **Kiểm tra**:
> - Tên file có phân biệt chữ hoa / chữ thường (ví dụ: `photo1.JPG` khác với `photo1.jpg`). Hãy đổi đuôi ảnh về chữ thường `.jpg`.
> - Đường dẫn trong `birthdayConfig.js` phải bắt đầu bằng dấu `/`, ví dụ: `/images/photo1.jpg`.

### 3. Font chữ tiếng Việt có bị lỗi dấu trên các máy khác không?
> **Trả lời**: Hoàn toàn không. Dự án đã nhúng trực tiếp bộ font Google Fonts (`Mali`, `Comfortaa`, `Patrick Hand`, `Quicksand`) hỗ trợ 100% tiếng Việt với đầy đủ các dấu thanh, kết hợp `line-height` tối ưu để không bao giờ bị cắt dấu trên các màn hình khác nhau.

---

<p align="center">
  Dành tặng <b>Ma feng (Nguyễn Lê Anh Thư)</b> với tất cả sự chân thành và ấm áp! 🐾✨🌻
</p>
