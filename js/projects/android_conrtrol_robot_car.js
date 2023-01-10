const parts = [
    {
        name : "Arduino UNO",
        photo : "../assets/img/projects_img/android_control_robot_car/arduino.jpg"
    },

    {
        name : "20/4 LCD Display",
        photo : "../assets/img/projects_img/android_control_robot_car/lcdDisplay.jpg"
    },

    {
        name : "LCD I2C Driver",
        photo : "../assets/img/projects_img/android_control_robot_car/i2c.jpg"
    },

    {
        name : "L298N Motor Driver",
        photo : "../assets/img/projects_img/android_control_robot_car/l298n.jpg"
    },

    {
        name : "Robot Car Body",
        photo : "../assets/img/projects_img/android_control_robot_car/robotBody.jpg"
    },

    {
        name : "Gear Motor 12V",
        photo : "../assets/img/projects_img/android_control_robot_car/gearMotor.jpg"
    },

    {
        name : "HC-06 Bluetooth",
        photo : "../assets/img/projects_img/android_control_robot_car/hc06.jpg"
    },

    {
        name : "Lithium Battery",
        photo : "../assets/img/projects_img/android_control_robot_car/lithium.jpg"
    },

    {
        name : "battery Case",
        photo : "../assets/img/projects_img/android_control_robot_car/batterycase.jpg"
    },

    {
        name : "Jumper wires",
        photo : "../assets/img/projects_img/android_control_robot_car/jumper.jpg"
    },

    {
        name : "DC Buzzer",
        photo : "../assets/img/projects_img/android_control_robot_car/buzzer.jpg"
    },

    {
        name : "ESP32 Camera",
        photo : "../assets/img/projects_img/android_control_robot_car/esp32.jpg"
    }
]


const allParts = document.getElementById("allParts");

const load_all_parts = () => {
    parts.map(part => {
        const partElement = document.createElement("div");

        partElement.classList.add("part");

        partElement.innerHTML = `
            <div class="partImg">
                <img src="${part.photo}" alt="">
            </div>
            <div class="partName">
                <h4>${part.name}</h4>
            </div>
        `;


        allParts.appendChild(partElement);
    })
}

load_all_parts();