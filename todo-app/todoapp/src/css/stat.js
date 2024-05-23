//one person join

sabhijit @rctestbed: ~/rtc$ node rtc.js
Secure WebSocket server is listening on port 9005
Client connected
Client connected
Received JSON data: {
    statsSessionId: '794359c6-c7d9-4c48-9c9b-aa0d71623077',
        type: 'stats-entry',
            data: '["navigator.mediaDevices.getUserMedia",null,{"video":{"height":{"ideal":720,"max":720,"min":180},"width":{"ideal":1280,"max":1280,"min":320},"facingMode":"user"},"audio":{"autoGainControl":true,"echoCancellation":true,"noiseSuppression":true}},1713259772625]'
}
Received JSON data: {
    statsSessionId: '794359c6-c7d9-4c48-9c9b-aa0d71623077',
        type: 'stats-entry',
            data: '["navigator.mediaDevices.getUserMediaOnFailure",null,"NotFoundError",1713259772666]'
}
Received JSON data: {
    statsSessionId: '794359c6-c7d9-4c48-9c9b-aa0d71623077',
        type: 'stats-entry',
            data: '["navigator.mediaDevices.getUserMedia",null,{"video":false,"audio":{"autoGainControl":true,"echoCancellation":true,"noiseSuppression":true}},1713259772668]'
}
Received JSON data: {
    statsSessionId: '794359c6-c7d9-4c48-9c9b-aa0d71623077',
        type: 'stats-entry',
            data: '["navigator.mediaDevices.getUserMedia",null,{"video":{"height":{"ideal":720,"max":720,"min":180},"width":{"ideal":1280,"max":1280,"min":320},"facingMode":"user"},"audio":false},1713259772669]'
}
Received JSON data: {
    statsSessionId: '794359c6-c7d9-4c48-9c9b-aa0d71623077',
        type: 'stats-entry',
            data: '["navigator.mediaDevices.getUserMediaOnFailure",null,"NotFoundError",1713259772705]'
}
Received JSON data: {
    statsSessionId: '794359c6-c7d9-4c48-9c9b-aa0d71623077',
        type: 'stats-entry',
            data: '["navigator.mediaDevices.getUserMediaOnSuccess",null,{"id":"fa490823-d913-4b6d-aa5e-3adf202aa6ff","tracks":[{"id":"bcc1d426-4d80-4f6d-9503-63a2c87300bb","kind":"video","label":"Hy HD Camera (1bcf:2ced)","enabled":true,"muted":false,"readyState":"live"}]},1713259772817]'
}
Received JSON data: {
    statsSessionId: '794359c6-c7d9-4c48-9c9b-aa0d71623077',
        type: 'stats-entry',
            data: '["faceLandmarks",null,{"duration":0,"faceLandmarks":"camera-on","timestamp":1713259774978},1713259774978]'
}
Received JSON data: {
    statsSessionId: '794359c6-c7d9-4c48-9c9b-aa0d71623077',
        type: 'identity',
            data: [
                'identity',
                null,
                {
                    hosts: [Object],
                    bosh: 'https://rctestbed.pune.cdac.in/http-bind',
                    bridgeChannel: {},
                    testing: {},
                    enableNoAudioDetection: true,
                    enableNoisyMicDetection: true,
                    recordingService: [Object],
                    hiddenDomain: 'recorder.rctestbed.pune.cdac.in',
                    liveStreaming: [Object],
                    channelLastN: -1,
                    p2p: [Object],
                    analytics: [Object],
                    mouseMoveCallbackInterval: 1000,
                    flags: [Object],
                    toolbarConfig: {},
                    defaultLogoUrl: 'images/watermark.svg',
                    deeplinking: [Object],
                    welcomePage: {},
                    prejoinConfig: {},
                    disabledSounds: [],
                    e2ee: {},
                    defaultLocalDisplayName: 'me',
                    defaultRemoteDisplayName: 'Fellow Jitster',
                    transcription: {},
                    speakerStats: {},
                    disableFocus: false,
                    confID: 'rctestbed.pune.cdac.in/test1',
                    applicationName: 'Jitsi Meet',
                    endpointId: '2a42f2b6',
                    confName: 'test1',
                    displayName: 'Caroline-ISI',
                    isBreakoutRoom: false,
                    meetingUniqueId: 'a73662d9-9f8e-4803-9555-400bc4c57ebc'
                },
                1713259775062
            ]
}
Received JSON data: {
    statsSessionId: '794359c6-c7d9-4c48-9c9b-aa0d71623077',
        type: 'stats-entry',
            data: '["conferenceStartTimestamp",null,"1713259752000",1713259775063]'
}
Received JSON data: {
    statsSessionId: '794359c6-c7d9-4c48-9c9b-aa0d71623077',
        type: 'keepalive'
}
Received JSON data: {
    statsSessionId: '794359c6-c7d9-4c48-9c9b-aa0d71623077',
        type: 'keepalive'
}
  ////when second perso joined    



  Received JSON data: {
    statsSessionId: 'c251652e-a8ed-4a5d-817b-c25418486d9e',
        type: 'identity',
            data: [
                'identity',
                null,
                {
                    hosts: [Object],
                    bosh: 'https://rctestbed.pune.cdac.in/http-bind',
                    bridgeChannel: {},
                    testing: {},
                    enableNoAudioDetection: true,
                    enableNoisyMicDetection: true,
                    recordingService: [Object],
                    hiddenDomain: 'recorder.rctestbed.pune.cdac.in',
                    liveStreaming: [Object],
                    channelLastN: -1,
                    p2p: [Object],
                    analytics: [Object],
                    mouseMoveCallbackInterval: 1000,
                    flags: [Object],
                    toolbarConfig: {},
                    defaultLogoUrl: 'images/watermark.svg',
                    deeplinking: [Object],
                    welcomePage: {},
                    prejoinConfig: {},
                    disabledSounds: [],
                    e2ee: {},
                    defaultLocalDisplayName: 'me',
                    defaultRemoteDisplayName: 'Fellow Jitster',
                    transcription: {},
                    speakerStats: {},
                    disableFocus: false,
                    confID: 'rctestbed.pune.cdac.in/test2',
                    applicationName: 'Jitsi Meet',
                    endpointId: 'ee690951',
                    confName: 'test2',
                    displayName: 'Caroline-ISI',
                    isBreakoutRoom: false,
                    meetingUniqueId: 'cdbc109d-b037-49cf-801e-43e3a872076f'
                },
                1713259930347
            ]
}