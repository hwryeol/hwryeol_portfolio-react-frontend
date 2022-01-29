import styles from "./About.module.css"
import image from "../../assets/img/사진.jpg"

function About() {
    return (
        <section id={styles.section}>
            <div id={styles.contents}>
            <img id={styles.image} src={image}/>
            <div id={styles.title}> ABOUT US</div>
            <table id={styles.table}>
                <tr>
                    <th>이름</th>
                    <td>한원렬</td>
                </tr>
                <tr>
                    <th>번호</th>
                    <td>010-5706-3433</td>
                </tr>
                <tr>
                    <th>이메일</th>
                    <td>hwryeol@gmail.com</td>
                </tr>
                 <tr>
                    <th>학력</th>
                    <td>세명대학교 컴퓨터학부</td>
                </tr>
            </table>
            </div>
        </section>
    );
};
export default About;