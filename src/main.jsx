import { render } from 'preact'
import Container from './Container'
import './style/test.scss'
import './style/notify.scss'
import { toast } from './core/toast'
import Image from './components/Image'

document.addEventListener("keyup", key => {
    switch (key.which) {
        case 49:
            toast.success({
                title: "System",
                description: "ฉันชอบทะเลสาบเพราะมีบรรยากาศสงบ.",
                duration: 60000,
            })
            break;
        case 50:
            toast.error({
                title: "System",
                description: "การอ่านหนังสือช่วยเสริมความรู้ของฉัน.",
                duration: 60000,
            })
            break;
        case 51:
            toast.info({
                title: "System",
                description: "การเรียนรู้ภาษาใหม่เป็นประสบการณ์ที่น่าสนุก.",
                duration: 60000,
            })
            break;
        case 52:
            toast.warning({
                title: "System",
                description: "การออกกำลังกายทุกวันช่วยรักษาสุขภาพของฉัน.",
                duration: 60000,
                priority: "medium",
            })
            break;
        case 53:
            toast.info({
                color: "#df2222",
                icon: <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAY1BMVEX///8AAAD4+Pjm5uYUFBT7+/vU1NTg4ODZ2dm+vr7d3d3r6+vz8/OZmZmSkpK6urrOzs6ysrJUVFRwcHCkpKRERERbW1t5eXlhYWGIiIhqamqCgoLGxsYlJSUbGxusrKw2NjagLeiiAAACJElEQVRoge2X2bKjIBCGu/G4oGwuSVyP5/2fchpIjJlKpiojmYsp/rIQWvlsoWkRICoqKioqKuojqtuxb5z6se3C81mGpISFJ1slxP76EDvCIzzCIzzC/1t4mpus+gy8PqHTpQwO54hDVjGR8zP2Iix8QrldyE+YhYS3WOwvDY/NY/AV88drEx4cmTtcIL+bmcP+jKHgl9POPM22LDAJAxc4363pldoMYeAGd9YZr9PwHQYu96PSfKXunB2b0g0+tXvj9UnV7wEUAK5wvMEPZYENrs6bLV1w8rUSD6WwDc7vEzrjLQ1wfN7rXfhuBM54W09j+6Lbm3BoLldTRSafsx5i/22l/rdFQJpS2JV0StPKZnQfJO3P36P1cBmbM+lCWmFcIKFKY00uvOfDaXGnpXlozhjyD48ty87VbvflCKIWRz+VbP0+NJlPVfSIp/684Lf8xH5DzJ1S9aGUEvUPlNi0ZBhoKnMwFHCUm4SGjNZiJhXYtt0i1p2fS7ddNJKWUTLbW9Oue519M0PFKoAwfIKhpu8apahG6IT6QeLaPAemrvdz60xts0DW21sL/QfPPZxZeD2rwsMTLXkFpbZ8DwczeAdtHWplX7Sw/lP9deDvPF+Zhs7Ded5XIDrI6cUVaLef8Cmc27q2npvSuJyzvdSTMVdSABsU9eHkgnZHZaCj/quyrhlbplL69Z9JevgsOwZlAvTRq6Q8tkGKioqKioqKcvoFlPAXNHL9NlsAAAAASUVORK5CYII=" />,
                position: "top-left",
                title: "มีข้อความใหม่",
                description: <>
                    ฉันชอบทะเลสาบเพราะมีบรรยากาศสงบ.
                    <div className="pile-image">
                        <img src="https://media.discordapp.net/attachments/1039146458521284628/1112242531963502622/digital-painting-mountain-with-colorful-tree-foreground_1.jpg" width="256" alt="" />
                    </div>
                </>,
                duration: 60000,
            })
            break;
        case 54:
            toast.success({
                icon: <div className="item-image" >
                    <Image src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_hybrid&w=740&q=80" />
                </div>,
                title: "คุณได้รับ เงินสด จำนวน 1,000 บาท",
                list: [
                    {
                        type: "success",
                        label: "เพชร",
                        oldCount: 0,
                        count: 1,
                        itemType: "item",
                    },
                    {
                        type: "success",
                        label: "ไม้",
                        oldCount: 0,
                        count: 1,
                        itemType: "item",
                    },
                    {
                        type: "error",
                        label: "หิน",
                        oldCount: 0,
                        count: 1,
                        itemType: "item",
                    },
                ],
                duration: 60000,
                position: "bottom-right"
            })
            break;
        case 55:
            toast.warning({
                color: "#ff999f",
                title: "พบเจอประชาชนขโมยสายไฟ",
                description: "เพศ: <b>ชาย</b><br/>ถนน: <b>ทดสอบ</b><br /> กด <kbd>ALT</kbd> + <kbd>1</kbd> เพื่อรับเคสนี้",
                duration: 60000,
                position: "top-right",
                priority: "high",
            })
            break;
    }
})

render(<Container />, document.getElementById('root'))