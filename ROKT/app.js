const speechRecognition =
window.webkitSpeechRecognition /*Chrome*/ 
window.speechRecognition; /*FireFox*/

function startListening(){
    const recog = new speechRecognition();
    recog.start();
    recog.onstart = console.log("Started Listening..");
    
    
    recog.onresult = function (data){
        handleResults(data);
    };
    //'data' comes from 'onresult'

}

function handleResults(data){
    let text = data.results[0][0].transcript;
    text = text.toLowerCase();
    

    if (text.includes('instagram')){
        console.log("Opening Instagram...");
        window.open('https://www.instagram.com')
    }
    else if (text.includes('youtube')){
        console.log("Opening YouTube...");
        window.open('https://www.youtube.com')
    }
    else if (text.includes('facebook')){
        console.log("Opening FaceBook...");
        window.open('https://www.facebook.com')
    }
    else if (text.includes('google')){
        console.log("Opening Google...");
        window.open('https://www.google.com')
    }
    else if (text.includes('code.org')){
        console.log("Opening Code.org...");
        window.open('https://code.org')
    }
    else if (text.includes('harry website')){
        console.log("Opening CodeWithHarry Website...");
        window.open('https://www.codewithharry.com')
    }
    else if (text.includes('harry channel')){
        console.log("Opening CodeWithHarry YouTube Channel...");
        window.open('https://www.youtube.com/channel/UCeVMnSShP_Iviwkknt83cww')
    }
    else if (text.includes('harry youtube')){
        console.log("Opening CodeWithHarry YouTube Channel...");
        window.open('https://www.youtube.com/channel/UCeVMnSShP_Iviwkknt83cww')
    }
    else if (text.includes('doraemon')){
        console.log("Opening Doraemon Videos...");
        window.open('https://www.youtube.com/results?search_query=doraemon')
    }
    else if (text.includes('kite videos')){
        console.log("Opening Kite Videos Videos...");
        window.open('https://www.youtube.com/user/dubeysaurabhasc')
    }
    else if (text.includes('kite')){
        console.log("Opening Kite ...");
        window.open('https://kite.zerodha.com')
    }
    else if (text.includes('doormat videos')){
        console.log("Opening It...");
        window.open('https://www.youtube.com/playlist?list=PLJWmsDiZpnw362_X8Zq3JAgrezyx3FJTc')
    }
    else if (text.includes('planting videos')){
        console.log("Opening It...");
        window.open('https://www.youtube.com/channel/UC0rz7pRfX-fcS1tgYBwetkA')
    }
}



function ProcessCommand(UserText){

    if (text.includes('instagram')){
        console.log("Opening Instagram...");
        window.open('https://www.instagram.com')
    }
    else if (text.includes('youtube')){
        console.log("Opening YouTube...");
        window.open('https://www.youtube.com')
    }
    else if (text.includes('facebook')){
        console.log("Opening FaceBook...");
        window.open('https://www.facebook.com')
    }
    else if (text.includes('google')){
        console.log("Opening Google...");
        window.open('https://www.google.com')
    }
    else if (text.includes('code.org')){
        console.log("Opening Code.org...");
        window.open('https://code.org')
    }
    else if (text.includes('harry website')){
        console.log("Opening CodeWithHarry Website...");
        window.open('https://www.codewithharry.com')
    }
    else if (text.includes('harry channel')){
        console.log("Opening CodeWithHarry YouTube Channel...");
        window.open('https://www.youtube.com/channel/UCeVMnSShP_Iviwkknt83cww')
    }
    else if (text.includes('harry youtube')){
        console.log("Opening CodeWithHarry YouTube Channel...");
        window.open('https://www.youtube.com/channel/UCeVMnSShP_Iviwkknt83cww')
    }
    else if (text.includes('doraemon')){
        console.log("Opening Doraemon Videos...");
        window.open('https://www.youtube.com/results?search_query=doraemon')
    }
    else if (text.includes('kite videos')){
        console.log("Opening Kite Videos Videos...");
        window.open('https://www.youtube.com/user/dubeysaurabhasc')
    }
    else if (text.includes('kite')){
        console.log("Opening Kite ...");
        window.open('https://kite.zerodha.com')
    }
    else if (text.includes('doormat videos')){
        console.log("Opening It...");
        window.open('https://www.youtube.com/playlist?list=PLJWmsDiZpnw362_X8Zq3JAgrezyx3FJTc')
    }
    else if (text.includes('planting videos')){
        console.log("Opening It...");
        window.open('https://www.youtube.com/channel/UC0rz7pRfX-fcS1tgYBwetkA')
    }
}







// Call Functions On Load 

microphoneButton.addEventListener("click", startListening);
