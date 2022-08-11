Webcam.set({
    height: 400,
    width: 400,
    image_format: 'png',
    png_quality: 500
})
camera2 = document.getElementById("camt")
Webcam.attach(camera2)

Webcam.set({
    height: 300,
    width: 300,
    image_format: 'png',
    png_quality: 500
})
camera = document.getElementById("cam")
Webcam.attach(camera)
//next

ai1 = "jarvis"

var x = document.getElementById("lokl");

function hi() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
    content = ""
    speechget.start()

}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}
//next
const d = new Date();
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1;
let day = d.getDate();
var year = dateObj.getUTCFullYear();

var hourr = d.getHours();
var minn = d.getMinutes();
var seconds = d.getSeconds()

if (minn == 0) {
    minn = "0" + minn

}
if (minn == 1) {
    minn = "0" + minn

}
if (minn == 2) {
    minn = "0" + minn

}
if (minn == 3) {
    minn = "0" + minn

}
if (minn == 3) {
    minn = "0" + minn

}
if (minn == 4) {
    minn = "0" + minn

}
if (minn == 5) {
    minn = "0" + minn

}
if (minn == 6) {
    minn = "0" + minn

}
if (minn == 7) {
    minn = "0" + minn

}
if (minn == 8) {
    minn = "0" + minn

}
if (minn == 9) {
    minn = "0" + minn

}

if (hourr == 0) {
    hourr = "0" + hourr

}
if (hourr == 1) {
    hourr = "0" + hourr

}
if (hourr == 2) {
    hourr = "0" + hourr

}
if (hourr == 3) {
    hourr = "0" + hourr

}
if (hourr == 3) {
    hourr = "0" + hourr

}
if (hourr == 4) {
    hourr = "0" + hourr

}
if (hourr == 5) {
    hourr = "0" + hourr

}
if (hourr == 6) {
    hourr = "0" + hourr

}
if (hourr == 7) {
    hourr = "0" + hourr

}
if (hourr == 8) {
    hourr = "0" + hourr

}
if (hourr == 9) {
    hourr = "0" + hourr

}

document.getElementById("tim").innerHTML = "  " + hourr + ":" + minn
anh = 60000 - seconds + 10000
setInterval(function () {
    minn = Number(minn) + 1
    document.getElementById("tim").innerHTML = "  " + hourr + ":" + minn
}, anh)

if (month == 1) {
    month = "January"
}

if (month == 2) {
    month = "February"
}
if (month == 3) {
    month = "March"
}
if (month == 4) {
    month = "April"
}
if (month == 5) {
    month = "May"
}
if (month == 6) {
    month = "June"
}
if (month == 7) {
    month = "July"
}
if (month == 8) {
    month = "August"
}
if (month == 9) {
    month = "September"
}
if (month == 10) {
    month = "October"
}
if (month == 11) {
    month = "November"
}
if (month == 12) {
    month = "December"
}
document.getElementById("datein").innerHTML = "<h1 id='mtop'><b>" + day + "</b></h1><h6><b>" + month + ", " + year + "</b></h6>"
console.log(day)
level = 0;
setInterval(() => {
    navigator.getBattery().then(function (battery) {

        var level = battery.level * 100;
        var level = Math.floor(level)
        document.getElementById("bet").innerHTML = level + "%"
        kiko = level


    });
}, 1000);


//next line

var SpeechRecognition = window.webkitSpeechRecognition
var speechget = new SpeechRecognition()
content = ""

window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keypressed = e.keyCode
    console.log(keypressed)
    if (keypressed == 69) {
        location.reload();
    }
    if (keypressed == 35) {
        song_stop_open()
    } 
    if(keypressed == 32){
        if (ai1 == "jarvis") {
            speak1()
        } else if (ai1 == "friday") {
            speak1()
        }
    }
    if(keypressed == 176){
        song_play_open() 
    }
}

speechget.onresult = function (event) {
    console.log(event)

    content = event.results[0][0].transcript;
    console.log(content)
    if (content == "Jarvis") {
        console.log("get ok")
        speak1()
    }
}

function speak1() {
    console.clear();
    var synth = window.speechSynthesis;
    speech_data = "Yes Sir"
    utterThis = new SpeechSynthesisUtterance(speech_data)
    synth.speak(utterThis)
    setInterval(sopo, 1000);

}
var speechgoutt = new SpeechRecognition()

function sopo() {
    speechgoutt.start()
}
var openedWindow;
speechgoutt.onresult = function (event) {
    console.log(event)
    speech_data2 = "";
    content = event.results[0][0].transcript;
    console.log(content)
    if (content == "open YouTube") {
        console.log("get ok")
        openedWindow = window.open("https://www.youtube.com");
        speechgoutt.stop()
        console.clear();
    }
    if (ai1 == "jarvis") {
        if (content == "Jarvis") {
            speak1()
        }
    } else if (ai1 == "friday") {
        if (content == "Friday") {
            speak1()
        }
    }
    if (content == "thank you") {
        var synth = window.speechSynthesis;
        speech_data2 = "Wellcome sir"
        utterThis = new SpeechSynthesisUtterance(speech_data2)
        synth.speak(utterThis)
        speechgoutt.stop()
        console.clear();
    }
        if (content == "close current web") {
        var synth = window.speechSynthesis;
        speech_data2 = "yes sir"
        utterThis = new SpeechSynthesisUtterance(speech_data2)
        synth.speak(utterThis)
        speechgoutt.stop()
        console.clear();
        openedWindow.close();
    }
    if (content == "open white hat junior") {
        console.log("get ok")
        openedWindow = window.open("https://code.whitehatjr.com/s/dashboard");
        speechgoutt.stop()
        console.clear();
    }
    if (content == "get back") {
        openedWindow.close();
        speechgoutt.stop()
        console.clear();
    }

    if (content == "close") {
        window.close();
        speechgoutt.stop()
        console.clear();
    }
    if (content == "tell time") {
        var synth = window.speechSynthesis;
        speech_data2 = document.getElementById("tim").innerHTML
        utterThis = new SpeechSynthesisUtterance(speech_data2)
        synth.speak(utterThis)
        speechgoutt.stop()
        console.clear();
    }
    if (content == "battery level") {
        var synth = window.speechSynthesis;
        speech_data2 = "sir battery level is " + kiko + "percent"
        utterThis = new SpeechSynthesisUtterance(speech_data2)
        synth.speak(utterThis)
        speechgoutt.stop()
        console.clear();
    }
    if (content == "play music") {
dj_song=true;
song_play_open()
        speechgoutt.stop()
        console.clear();
    }
    if (content == "stop music") {

        song_stop_open()
                speechgoutt.stop()
                console.clear();
            }
    if (content == "reload") {
        location.reload();
        speechgoutt.stop()
        console.clear();
    }
    if (content == "who are you") {
        var synth = window.speechSynthesis;
        speech_data2 = "Sir i am your AI program name " + ai1
        utterThis = new SpeechSynthesisUtterance(speech_data2)
        synth.speak(utterThis)
        speechgoutt.stop()
        console.clear();
    }
    if (ai1 == "jarvis") {
        if (content == "Swift AI to Friday") {
            tot()
        }
        if (content == "Swift air to Friday") {
            tot()
        }
        if (content == "shipped to Friday") {
            tot()
        }
        if (content == "shift AI to Friday") {
            tot()
        }
    } else if (ai1 == "friday") {
        if (content == "Swift AI to Jarvis") {
            gtot()
        }
        if (content == "Swift air to Jarvis") {
            gtot()
        }
        if (content == "shipped to Jarvis") {
            gtot()
        }
        if (content == "shift AI to Jarvis") {
            tot()
        }
    }
    if (content == "search") {
        var synth = window.speechSynthesis;
        speech_data2 = "Sir What do you want to search"
        utterThis = new SpeechSynthesisUtterance(speech_data2)
        synth.speak(utterThis)
        setTimeout(function () {
            if (content == "search") {
                var synth = window.speechSynthesis;
                speech_data2 = "Sir please tell again"
                utterThis = new SpeechSynthesisUtterance(speech_data2)
                synth.speak(utterThis)
            } else if (content == "nothing") {
                var synth = window.speechSynthesis;
                speech_data2 = "canceling"
                utterThis = new SpeechSynthesisUtterance(speech_data2)
                synth.speak(utterThis)
            } else {
                openedWindow = window.open("https://www.google.com/search?q=" + content + "&rlz=1C1CHBF_enIN921IN921&oq=div&aqs=chrome.0.69i59l3j69i57j69i60j69i61l2j69i65.2384j0j7&sourceid=chrome&ie=UTF-8")
                var synth = window.speechSynthesis;
                speech_data2 = "Searching about " + content + " from google"
                utterThis = new SpeechSynthesisUtterance(speech_data2)
                synth.speak(utterThis)
            }
        }, 7000);


    }


}

function tot() {
    ai1 = "friday"
    var synth = window.speechSynthesis;
    speech_data2 = "Shifting AI    to   Friday"
    utterThis = new SpeechSynthesisUtterance(speech_data2)
    synth.speak(utterThis)
    speechgoutt.stop()
    console.clear();
    document.getElementById("myloadon").src = "42a8d4625aeb088c45eba5a84ca36325.gif"
    setTimeout(function () {
        document.getElementById("myloadon").src = ""
        //change voice of jarvis
        document.getElementById("onb").innerHTML = "<b>F.R.I.D.A.Y</b>"
        document.title = "F.R.I.D.A.Y";
        ai1 = "friday";
        document.getElementById("ai_act").innerHTML = "Activate Friday"
    }, 6000)
}

function gtot() {
    ai1 = "jarvis"
    var synth = window.speechSynthesis;
    speech_data2 = "Shifting AI    to   jarvis"
    utterThis = new SpeechSynthesisUtterance(speech_data2)
    synth.speak(utterThis)
    speechgoutt.stop()
    console.clear();
    document.getElementById("myloadon").src = "42a8d4625aeb088c45eba5a84ca36325.gif"
    setTimeout(function () {
        document.getElementById("myloadon").src = ""
        //change voice of friday
        document.getElementById("onb").innerHTML = "<b>J.A.R.V.I.S</b>"
        document.title = "J.A.R.V.I.S";
        location.reload()
    }, 6000)
}

function act_jarvic() {
    if (ai1 == "jarvis") {
        speak1()
    } else if (ai1 == "friday") {
        speak1()
    }
}
var songg="";

function song_play_open(){
document.getElementById("srcy").src=""
songs_dj = ["Bijlee Bijlee (Full Video Song)sare teri bijli bijli kahan,bijli bijli song -oh chann di kudi,Ultron.mp3", "Full Video- Get Ready to Fight Reloaded - Baaghi 3 - Tiger S, Shraddha K- Pranaay, Siddharth Basrur.mp3", "HEAVY GHAGHRA- Ajay Hooda, S Surila - Sakshi -  Haryanvi Songs Haryanavi 2021- Mere Devar Ka Byah.mp3", "Lehanga - Jass Manak (Official Video) Satti Dhillon - Punjabi Songs - GK DIGITAL - Geet MP3.mp3", "Party With The Bhoothnath Song (Official) - Bhoothnath Returns - Amitabh Bachchan, Yo Yo Honey Singh.mp3", "Sauda Khara Khara -Good Newwz- Akshay kumar , Kareena , Diljit , Kiara- Sukhbir,Dhvani,Lijo,DjChetas.mp3", "YALGAAR - CARRYMINATI X Wily Frenzy.mp3"]
songg= songs_dj[Math.floor(Math.random() * 8)]
document.getElementById("myAudio").src=songg;
var xsom = document.getElementById("myAudio"); 
xsom.play(); 
}
function song_stop_open(){
    dj_song=false;
    document.getElementById("myAudio").src="";
    var xsom = document.getElementById("myAudio"); 
xsom.stop();
}