// import React, { useEffect } from 'react'
 
// const Chatbot = () => {
//   useEffect(() => {
//     const script = document.createElement('script')
//     script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
//     script.async = true
//     document.body.appendChild(script)
 
//     script.onload = () => {
//       window.botpressWebChat.init({
//         "composerPlaceholder": "Chat with Saarthi",
//         "botConversationDescription": "Developed by Team NyaySaarthi, Saarthi serves to provide comprehensive legal guidance and assistance, specializing in matters concerning courts and legal advice.",
//         "botId": "27a191e9-1e63-4f02-aad1-2faf4d1c4bf2",
//         "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
//         "messagingUrl": "https://messaging.botpress.cloud",
//         "clientId": "27a191e9-1e63-4f02-aad1-2faf4d1c4bf2",
//         "webhookId": "230b1af6-c626-4af9-9306-5a1aad0331fc",
//         "lazySocket": true,
//         "themeName": "orange",
//         "disableNotificationSound":"false",
//         "botName": "Saarthi",
//         "frontendVersion": "v1",
//         "stylesheet": "https://webchat-styler-css.botpress.app/prod/660047e0-1f43-4aaf-9b20-9a0d10f4ab63/v69157/style.css",
//         "showBotInfoPage": true,
//         "enableConversationDeletion": true,
//         "theme": "light",
//         "themeColor": "#fb8300"
//       })
//     }
//   }, [])
 
//   return <div id="webchat" />
// }
 
// export default Chatbot