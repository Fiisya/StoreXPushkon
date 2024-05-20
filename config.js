global.d = new Date()
global.calender = d.toLocaleDateString('id')

// --------------- INFO OWNER ------------- //
global.prefix = "." // command prefix
global.ownNumb = "62895615063060" // isi no kalian
global.ownName = "https://ī.am/alfisyahrial" // isi nama kalian
global.namaCreator ="https://ī.am/alfisyahrial"
global.versionSc ="3.0"
global.namaBot ="𝙁𝙄𝙓𝙓𝙀𝙉 V3"
global.linkgc ="https://chat.whatsapp.com/L5OUiV1WF5EJLU2fDjR62C"
global.namaproduk ="BY 𝙁𝙄𝙓𝙓𝙀𝙉"
global.namaStore ="𝙁𝙄𝙓𝙓𝙀𝙉 𝙎𝙏𝙊𝙍𝙀"
global.packname = '𝙁𝙄𝙓𝙓𝙀𝙉' // ubah aja ini nama sticker
global.author = 'Alfi Syl'



// --------------- BATAS INFO OWNER------------- //

//____________global apikey_________//

global.lol = '' // ISI APIKEY LOL HUMAN LU

//_____________global payment_______//
global.Qris = 'https://telegra.ph/file/74bb8f1625082b28c11e1.jpg'
global.dana = '08984116728'
global.gopay = '08984116728'
global.scan = 'sᴄᴀɴ ǫʀɪs ᴀʟʟ ᴘᴀʏᴍᴇɴᴛ ᴅɪ ᴀᴛᴀs'

//__________________ʙᴀᴛᴀs ᴘᴀʏᴍᴇɴᴛ_____________//

global.domain = '' // Isi Domain Lu
global.apikey = '' // Isi Apikey Plta Lu
global.capikey = '' // Isi Apikey Pltc Lu
global.eggsnya = '' // id eggs yang dipakai
global.location = '' // id location

//__________________GLOBAL TESTI_______________//

global.testi ='' // ISI URL TESTI KALIAN
global.text1 ='ITU TESTI 𝙁𝙄𝙓𝙓𝙀𝙉 KAK' // UBH AJA JADI NAMA MU
global.text2 ='GA BANG? AMAN DONG' // G SH DI HPS

//______________BATAS TESTI_____________//


// --------------- GLOBAL MESS ------------- //
global.mess = {
     delay: '4000', // Set Jeda Atur Di sini 1000 = 1 detik
     eror: 'lagi eror kak maaf ha', 
     wait: 'Wait Kak Lagi Proses',
     group: 'Maaf Kak Fitur Ini Hanya Bisa Digunakan Di Dalam Group', 
     owner: 'lu siapa?\n*GAUSAH SO ASIK*',
     group: "khusus di dalam group",
     inf: "𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗦𝗜 ⚠️\n› sc ini di recode oleh AlfiXD\n› jangan lupa subs yt saya\n› sc ini dijual [ MINAT CALL ME ]\n› happfun your day\n\n𝗥𝗨𝗟𝗘𝗦 𝗣𝗨𝗦𝗛 ‼️\n› maximal push 1 GC isinya 2k member\n  kalo mau di ubah di config.js\n› untuk fitur push yg gada set jeda nya\n  gua setting standard [ 3000 ] kalo mau\n  di ubah tinggal cek di file config.js\n› My *Alfi Syahrial*\n\n\n*LINK TELE :*\n\nhttps://t.me/alfisyahrial\n\n*𝙁𝙄𝙓𝙓𝙀𝙉 𝙊𝙁𝙁𝘾:*\n\nhttps://wa.me/62895615063060"
}
// --------------- BATAS GLOBAL MESS ------------- //

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log(__filename+' updated!')
	delete require.cache[file]
	require(file)
})

/*
// --------------- ABOUT SC------------- //
  › SCWA BY 𝙁𝙄𝙓𝙓𝙀𝙉 𝙊𝙁𝙁𝘾
  › BAILEYES WHISKY
  › PAPIRING CODE 
  › TQ TO
    - Alfa05
    - Quin
    - ZERONE
    - DAFFA
    -ALFI (BEBAN)
*/