
import './App.css';

function App() {
  return (
    <div class="tkb"> 
        <h1>Thời khoá biểu</h1>
    <div class="info">
        <div class=" local" >
            <ul>
                <li>
                    Lớp:12
                </li>
                <li>
                    Giáo viên: Nguyễn văn A
                </li>
                <li>
                    Phòng học:503
                </li>
            </ul>
        </div>
        <div class="time">
            <ul>
                <li>Thời gian học:18h-21h</li>
                <li>Ngày học: thứ 3,6</li>
            </ul>
        </div>
    </div>
    <div class="main" >

        <table>
            <tr>
                <th ></th>
                <th>
                    Thứ 3
                </th>
                <th>Thứ 4</th>
                <th>Thứ 5</th>
            </tr>
            <tr>
                <th>Tuần </th>
                <th>Ngày bắt đầu</th>
                <th> Ngày kết thúc</th>
                <th colspan="3" >Môn học</th>
            </tr>
            <tr>
                <td>01</td>
                <td>1/1/2000</td>
                <td>1/1/2022</td>
                    <td>Toán</td>
                    <td>Văn </td>
                    <td>Anh</td>
            </tr>
            <tr>
                <td>01</td>
                <td>1/1/2000</td>
                <td>1/1/2022</td>
                    <td>Toán</td>
                    <td>Văn </td>
                    <td>Anh</td>
            </tr>
            <tr>
                <td>01</td>
                <td>1/1/2000</td>
                <td>1/1/2022</td>
                    <td>Toán</td>
                    <td>Văn </td>
                    <td>Anh</td>
            </tr>
       </table>
    </div>
</div>
  );
}

export default App;
