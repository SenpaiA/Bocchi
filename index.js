constante
{
   WAConexión ,
   MessageType ,
   presencia ,
   MessageOptions ,
   Mimetype ,
   WALocationMessage ,
   WA_MESSAGE_STUB_TYPES ,
   ReconectarMode ,
   ProxyAgent ,
   GroupSettingChange ,
   waChatKey ,
   mencionado Jid ,
   processTime ,
}  =  require ( "@ adiwajshing / baileys" )
const  qrcode  =  require ( "qrcode-terminal" ) 
 momento  constante =  require ( "momento-zona horaria" ) 
const  fs  =  require ( "fs" ) 
const  { color , bgcolor }  =  require ( './lib/color' )
const  { ayuda }  =  require ( './lib/help' )
const  { donasi }  =  require ( './lib/donasi' )
const  { fetchJson }  =  require ( './lib/fetcher' )
const  { reconocer }  =  require ( './lib/ocr' )
const  { esperar , simih , getBuffer , h2k , generateMessageID , getGroupAdmins , getRandom , banner , start , info , success , close }  =  require ( './lib/functions' )
const  tiktod  =  require ( 'tiktok-scraper' )
const  ffmpeg  =  require ( 'fluent-ffmpeg' )
const  { removeBackgroundFromImageFile }  =  require ( 'remove.bg' )
const  welkom  =  JSON . analizar ( fs . readFileSync ( './src/welkom.json' ) )
const  nsfw  =  JSON . analizar ( fs . readFileSync ( './src/nsfw.json' ) )
const  exclusivo  =  JSON . analizar ( fs . readFileSync ( './src/exclusive.json' ) )
const  samih  =  JSON . analizar ( fs . readFileSync ( './src/simi.json' ) )
const  vcard  =  'COMIENZO: VCARD \ n' 
            +  'VERSIÓN: 3.0 \ n'
            +  'FN: Senpai maid Admin \ n' 
            +  'ORG: Pengembang XBot; \ n' 
            +  'TEL; tipo = CELDA; tipo = VOZ; waid = 593995743368: +593995743368 \ n' 
            +  'FIN: VCARD' 
prefijo  =  '#'
bloqueado  =  [ ]          

/********** CARGAR ARCHIVO **************/

/ ********** FIN DE ARCHIVO *************** /
  
 tiempo  constante =  momento ( ) . tz ( 'Asia / Yakarta' ) . formato ( "HH: mm: ss" )
const  arrayBulan  =  [ 'Januari' ,  'Februari' ,  'Maret' ,  'Abril' ,  'Mei' ,  'Juni' ,  'Juli' ,  'Agustus' ,  'Septiembre' ,  'Octubre' ,  'Noviembre' ,  'Diciembre ' ]
const  bulan  =  arrayBulan [ momento ( ) . formato ( 'MM' )  -  1 ]
const  config  =  {
    XBOT : '🇳🇮⃟᤻ ۞꙰⃪ ° ҒƁƖ ⃪ ࿗ ᭄⃟ ᤻ ⃟꙰ ࿃' , 
    instagram : 'tal vez' , 
    nomer : 'wa.me/+593995743368' ,
    youtube : 'algun dia' , 
    whatsapp : 'Próximamente' , 
    tanggal : `TANGGAL: $ { momento ( ) . formato ( 'DD' ) }  $ { bulan }  $ { momento ( ) . formato ( 'YYYY' ) } ` ,
    waktu : tiempo
}

function  kyun ( segundos ) {
  función  de la almohadilla ( s ) {
    return  ( s  <  10 ? '0' : '' )  +  s ;
  }
  var  horas  =  Matemáticas . piso ( segundos / ( 60 * 60 ) ) ;
  var  minutes  =  Math . piso ( segundos % ( 60 * 60 ) / 60 ) ;
  var  segundos  =  Matemáticas . piso ( segundos % 60 ) ;

  // return pad (horas) + ':' + pad (minutos) + ':' + pad (segundos)
  return  ` $ { pad ( horas ) } HORAS $ { pad ( minutos ) } MINUTOS $ { pad ( segundos ) } SEGUNDOS`
}


const  { tanggal , waktu , instagram , WhatsApp , youtube , nomer , puntuales }  =  config



const  { exec }  =  require ( "child_process" )

 cliente  constante =  nueva  conexión WAC ( )

cliente . en ( 'qr' ,  qr  =>  {
   qrcode . generar ( qr ,  {  pequeño : verdadero  } )
   consola . log ( `[ $ { time } ] el código QR está listo, equipo subrek dulu yak ambipi` )
} )

cliente . on ( 'credenciales actualizadas' ,  ( )  =>  {
   const  authInfo  =  cliente . base64EncodedAuthInfo ( )
   consola . log ( `credenciales actualizadas!` )

   fs . writeFileSync ( './session.json' ,  JSON . stringify ( authInfo ,  null ,  '\ t' ) )
} )

fs . ExisteSync ( './session.json' )  &&  cliente . loadAuthInfo ( './session.json' )

cliente . conectar ( ) ;

// cliente.on ('actualización de presencia de usuario', json => console.log (json.id + 'presencia es =>' + json.type)) || console.log (`$ {time}: Bot de ig: @affis_saputro 123`)

cliente . on ( 'grupo-participantes-actualización' ,  async  ( anu )  =>  {
		if  ( ! welkom . incluye ( anu . jid ) )  return
		prueba  {
			const  mdata  =  aguardar  cliente . groupMetadata ( anu . jid )
			consola . registro ( anu )
			if  ( anu . action  ==  'agregar' )  {
				num  =  anu . participantes [ 0 ]
				prueba  {
					ppimg  =  esperar al  cliente . getProfilePicture ( ` $ { anu . participantes [ 0 ] . split ( '@' ) [ 0 ] } @ c.us` )
				}  atrapar  {
					ppimg  =  'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks  =  `* ❐❯─᤻─⃟᤻─᤻─᤻─᤻─᤻「 ⃞🌎⃞ 」─᤻─᤻─᤻─⃟᤻─᤻─᤻❮❐ * \ n \ nBienvenido @ $ { num . split ( '@' ) [ 0 ] } \ n \ n * ┏━┅┅┅┅┅┅┄⟞⟦⟝┉┉┅┅┅┅━┓ * \ n $ { mdata . sujeto } \ n * ┗━┅┅┅┅┅┅┅┄⟞⟦⟝┅┅┅┉┉━┛ * \ n \ n_ * Espero que se sienta como en casa aquí * _ \ n \ n * S ᤻ i ᤻ n ᤻ e ᤻ c ᤻ e ᤻ s ᤻ it ᤻ a ᤻ a ᤻ y ᤻᤻ u ᤻ d ᤻ a ᤻ * \ n * ❐⃟✓ * Comuniquese de con un administrador \ n * ❐⃟✓ * Este es un bot de bienvenida, stickers y cosas varias`
				dejar  buff  =  esperar  getBuffer ( ppimg )
				cliente . sendMessage ( mdata . id ,  buff ,  MessageType . image ,  { caption : teks ,  contextInfo : { " PublishedJid " : [ num ] } } )
			}  else  if  ( anu . action  ==  'eliminar' )  {
				num  =  anu . participantes [ 0 ]
				prueba  {
					ppimg  =  esperar al  cliente . getProfilePicture ( ` $ { num . split ( '@' ) [ 0 ] } @ c.us` )
				}  atrapar  {
					ppimg  =  'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks  =  `Fue bueno mientras duro \ n @ $ { num . split ( '@' ) [ 0 ] } esperamos su regreso, bye`
				dejar  buff  =  esperar  getBuffer ( ppimg )
				cliente . sendMessage ( mdata . id ,  buff ,  MessageType . image ,  { caption : teks ,  contextInfo : { " PublishedJid " : [ num ] } } )
			}
		}  captura  ( e )  {
			consola . log ( 'Error:% s' ,  color ( e ,  'rojo' ) )
		}
	} )
	cliente . on ( 'CB: Blocklist' ,  json  =>  {
		si  ( bloqueado . de longitud  >  2 )  de retorno
	    para  ( sea  i  de  json [ 1 ] . blocklist )  {
	    	bloqueado . empujar ( i . reemplazar ( 'c.us' , 's.whatsapp.net' ) )
	    }
	} )

	cliente . on ( 'mensaje-nuevo' ,  async  ( mek )  =>  {
		prueba  {
			si  ( ! mek . mensaje )  volver
			if  ( mek . key  &&  mek . key . remoteJid  ==  'status @ broadcast' )  volver
			if  ( mek . key . fromMe )  return
			global . prefijo
			global . obstruido
			 contenido  constante =  JSON . stringify ( mek . mensaje )
			const  de  =  mek . clave . remoteJid
			 tipo  const =  Objeto . llaves ( mek . mensaje ) [ 0 ]
			
			const  { texto , extendedText , contactos , ubicación , liveLocation , imagen , vídeo , etiqueta , documento , audio , producto }  =  MessageType
			 tiempo  constante =  momento . tz ( 'Asia / Yakarta' ) . formato ( 'DD / MM HH: mm: ss' )
			cuerpo  =  ( escriba  ===  'conversación'  &&  mek . mensaje . conversación . comienza con ( prefijo ) ) ? mek . mensaje . conversación : ( type  ==  'imageMessage' )  &&  mek . mensaje . imageMessage . título . startsWith ( prefijo ) ? mek . mensaje . imageMessage .título : ( tipo  ==  'videoMessage' )  &&  mek . mensaje . videoMessage . título . startsWith ( prefijo ) ? mek . mensaje . videoMessage . título : ( tipo  ==  ' mensaje de texto extendido' )  &&  mek . mensaje . extendedTextMessage . texto . startsWith ( prefijo ) ? mek. mensaje . extendedTextMessage . texto : ''
			budy  =  ( escriba  ===  'conversación' ) ? mek . mensaje . conversación : ( escriba  ===  'extendedTextMessage' ) ? mek . mensaje . extendedTextMessage . texto : ''
			 comando  const =  cuerpo . rebanada ( 1 ) . recortar ( ) . dividir ( / + / ) . shift ( ) . toLowerCase ( )
			const  args  =  cuerpo . recortar ( ) . dividir ( / + / ) . rebanada ( 1 )
			const  isCmd  =  cuerpo . startsWith ( prefijo )

			lío  =  {
				espera : '❬❗❭ 𝗘𝗦𝗣𝗘𝗥𝗘, 𝗣𝗥𝗢𝗖𝗘𝗦𝗢 𝗟𝗔𝗥𝗚𝗢' ,
				éxito : '️❬ ✔ ❭ 𝗘𝗫𝗜𝗧𝗢 🖤' ,
				error : {
					palo : 'Bueno, falló; (, intenta repetir: v' ,
					Iv : '𝗟𝗼 𝘀𝗶𝗲𝗻𝘁𝗼 𝗲𝗻𝗹𝗮𝗰𝗲 𝗶𝗻𝘃𝗮́𝗹𝗶𝗱𝗼'
				} ,
				solo : {
					grupo : '❬❗❭ 𝐒𝐎𝐋𝐎 𝐆𝐑𝐔𝐏𝐎' ,
					propietarioG : '❬❗❭ 𝐒𝐎𝐋𝐎 𝐏𝐑𝐎𝐏𝐈𝐄𝐓𝐀𝐑𝐈𝐎' ,
					propietarioB : '❬❗❭ 𝐒𝐎𝐋𝐎 𝐏𝐑𝐎𝐏𝐈𝐄𝐓𝐀𝐑𝐈𝐎' ,
					admin : '❬❗❭ 𝐒𝐎𝐋𝐎 𝐀𝐃𝐌𝐈𝐍' ,
					Bádmin : '❬❗❭ 𝐄𝐋 𝐁𝐎𝐓 𝐃𝐄𝐁𝐄 𝐒𝐄𝐑 𝐀𝐃𝐌𝐈𝐍'
				}
			}

			const  botNumber  =  cliente . usuario . jid
			const  ownerNumber  =  [ "593995743368@s.whatsapp.net" ] 
			const  isGroup  =  desde . termina con ( '@ g.us' )
			 remitente  constante =  isGroup ? mek . participante : mek . clave . remoteJid
			const  groupMetadata  =  isGroup ? esperar al  cliente . groupMetadata ( desde ) : ''
			const  nombre_de_grupo  =  isGroup ? groupMetadata . asunto : ''
			const  groupId  =  isGroup ? groupMetadata . jid : ''
			const  groupMembers  =  isGroup ? groupMetadata . participantes : ''
			const  groupDesc  =  isGroup ? groupMetadata . desc : ''
            		const  groupAdmins  =  isGroup ? getGroupAdmins ( groupMembers ) : ''
			const  isBotGroupAdmins  =  groupAdmins . incluye ( botNumber )  ||  falso
			const  isGroupAdmins  =  groupAdmins . incluye ( remitente )  ||  falso
			const  isWelkom  =  isGroup ? welkom . incluye ( de ) : falso
			const  isNsfw  =  isGroup ? nsfw . incluye ( de ) : falso
			const  isSimi  =  isGroup ? samih . incluye ( de ) : falso
			const  isExclusive  =  isGroup ? exclusivo . incluye ( de ) : falso
			const  isOwner  =  ownerNumber . incluye ( remitente )
			const  isUrl  =  ( url )  =>  {
			    devolver la  URL . match ( new  RegExp ( / https ?: \ / \ / ( www \. ) ? [ -a-zA-Z0-9 @:% ._ + ~ # = ] { 1,256 } \. [ a-zA-Z0- 9 () ] { 1,6 } \ b ( [ -a-zA-Z0-9 () @:% _ +. ~ #? & / = ] * ) / ,  'Gi' ) )
			}
			 respuesta  constante =  ( teks )  =>  {
				cliente . sendMessage ( de ,  teks ,  texto ,  { citado : mek } )
			}
			const  sendMess  =  ( jeje ,  teks )  =>  {
				cliente . sendMessage ( jeje ,  teks ,  texto )
			}
			const  menciona  =  ( teks ,  memberr ,  id )  =>  {
				( id  ==  nulo  ||  id  ==  indefinido  ||  id  ==  falso ) ? cliente . sendMessage ( de ,  teks . trim ( ) ,  extendedText ,  { contextInfo : { " addedJid " : memberr } } ) : cliente . sendMessage ( desde ,  teks . trim ( ) ,  extendedText,  { quoted : mek ,  contextInfo : { " PublishedJid " : memberr } } )
			}

			colores  =  [ 'rojo' , 'blanco' , 'negro' , 'azul' , 'amarillo' , 'verde' ]
			const  isMedia  =  ( tipo  ===  'imageMessage'  ||  tipo  ===  'videoMessage' )
			const  isQuotedImage  =  type  ===  'extendedTextMessage'  &&  contenido . incluye ( 'imageMessage' )
			const  isQuotedVideo  =  type  ===  'extendedTextMessage'  &&  contenido . incluye ( 'videoMessage' )
			const  isQuotedSticker  =  type  ===  'extendedTextMessage'  &&  contenido . incluye ( 'stickerMessage' )
			if  ( ! isGroup  &&  isCmd )  consola . log ( '\ x1b [1; 31m ~ \ x1b [1; 37m>' ,  '[\ x1b [1; 32mEXEC \ x1b [1; 37m]' ,  hora ,  color ( comando ) ,  'desde' ,  color ( remitente . división ( '@' ) [ 0 ] ) ,  'args:' ,  de color ( args . de longitud ) )
			if  ( ! isGroup  && ! isCmd )  consola . log ( '\ x1b [1; 31m ~ \ x1b [1; 37m>' ,  '[\ x1b [1; 31mRECV \ x1b [1; 37m]' ,  hora ,  color ( 'Mensaje' ) ,  'desde' ,  color ( sender . split ( '@' ) [ 0 ] ) ,  'args:' ,  color ( args . length ) )
			if  ( isCmd  &&  isGroup )  consola . log ( '\ x1b [1; 31m ~ \ x1b [1; 37m>' ,  '[\ x1b [1; 32mEXEC \ x1b [1; 37m]' ,  hora ,  color ( comando ) ,  'desde' ,  color ( remitente . split ( '@' ) [ 0 ] ) ,  'in' ,  color ( groupName ) ,  'args:' ,  color ( args . length ))
			if  ( ! isCmd  &&  isGroup )  consola . log ( '\ x1b [1; 31m ~ \ x1b [1; 37m>' ,  '[\ x1b [1; 31mRECV \ x1b [1; 37m]' ,  hora ,  color ( 'Mensaje' ) ,  'desde' ,  color ( sender . split ( '@' ) [ 0 ] ) ,  'in' ,  color ( groupName ) ,  'args:' ,  color ( args . length) )
			cambiar ( comando )  {
				caso  'bisakah' :
					bisakah  =  cuerpo . rebanada ( 1 )
					const  bisa  = [ 'Bisa' , 'Tidak Bisa' , 'Coba Ulangi' ]
					const  keh  =  bisa [ Math . piso ( Math . random ( ) * bisa . length ) ]
					cliente . sendMessage ( de ,  'Pertanyaan: *' + bisakah + '* \ n \ nJawaban:' +  keh ,  texto ,  {  citado : mek  } )
					descanso
				caso  'kapankah' :
					kapankah  =  cuerpo . rebanada ( 1 )
					const  kapan  = [ 'Besok' , 'Lusa' , 'Tadi' , '4 Hari Lagi' , '5 Hari Lagi' , '6 Hari Lagi' , '1 Minggu Lagi' , '2 Minggu Lagi' , '3 Minggu Lagi ' , ' 1 Bulan Lagi ' , ' 2 Bulan Lagi ' , ' 3 Bulan Lagi ' , ' 4 Bulan Lagi ' , ' 5 Bulan Lagi ' , ' 6 Bulan Lagi ' , ' 1 Tahun Lagi ' , ' 2 Tahun Lagi ' , '3 Tahun Lagi', '4 Tahun Lagi' , '5 Tahun Lagi', '6 Tahun Lagi' , '1 Abad lagi' , '3 Hari Lagi' ]
					const  koh  =  kapan [ Math . piso ( Math . random ( ) * kapan . length ) ]
					cliente . sendMessage ( de ,  'Pertanyaan: *' + kapankah + '* \ n \ nJawaban:' +  koh ,  texto ,  {  citado : mek  } )
					descanso
           caso  'apakah' :
					apakah  =  cuerpo . rebanada ( 1 )
					const  apa  = [ 'Iya' , 'Tidak' , 'Bisa Jadi' , 'Coba Ulangi' ]
					const  kah  =  apa [ Matemáticas . piso ( Math . random ( ) * apa . length ) ]
					cliente . sendMessage ( de ,  'Pertanyaan: *' + apakah + '* \ n \ nJawaban:' +  kah ,  texto ,  {  citado : mek  } )
					descanso
				caso  'tasa' :
					tasa  =  cuerpo . rebanada ( 1 )
					const  ra  = [ '4' , '9' , '17' , '28' , '34' , '48' , '59' , '62' , '74' , '83' , '97' , '100 ' , ' 29 ' , ' 94 ' , ' 75 ' , ' 82 ' , ' 41 ' , ' 39 ' ]
					const  te  =  ra [ Math . piso ( Math . random ( ) * ra . length ) ]
					cliente . sendMessage ( de ,  'Pertanyaan: *' + tasa + '* \ n \ nJawaban:' +  te + '%' ,  texto ,  {entre  comillas : mek  } )
					descanso
          caso  'velocidad' :
          caso  'ping' :
            esperar al  cliente . sendMessage ( from ,  `Pong !!!! \ nVelocidad: $ { processTime ( t ,  moment ( ) ) } _Second_` )
            descanso
				caso  'ayuda' :
				caso  'menú' :
					cliente . sendMessage ( de ,  ayuda ( prefijo ) ,  texto )
					descanso
				caso  'donasi' :
				caso  'donar' :
					cliente . sendMessage ( de ,  donasi ( ) ,  texto )
				descanso
				caso  'Iri' :
		        caso  'iri?' :
                caso  'iri' :
                   cliente . sendMessage ( de ,  'sonido'  +  'iri.mp3' ,  {entre comillas : mek ,  ptt : true } )
               descanso
            caso  'abgjago' :
            caso  'abangjago' :
                cliente . sendMessage ( de ,  'sonido'  +  'abangjago' + 'mp3' ,  { citado : mek ,  ptt : true } )
                descanso
            caso  'tarekses' :
            caso  'tariksis' :
            caso  'tareksis' :
            caso  'tareeksis' :
            caso  'tareekses' :
                cliente . sendMessage ( de ,  './sound' + '/tarekses.mp3' ,  {entre comillas : mek ,  ptt : true } )
                descanso
            caso  'welotka' :
            caso  'welutka' :
            caso  'kangcopet' :
                cliente . sendMessage ( dari ,  './sound' + 'welot' + 'mp3' , { citado : mek ,  ptt : true } )
                descanso
				caso  'información' :
					yo  =  cliente . usuario
					uptime  =  proceso . tiempo de actividad ( )
					teks  =  `* Nombre del bot *: $ { me . nombre } \ n * PROPIETARIO *: * Senpai Maid~ * \ n * AUTOR *: AMPIBI \ n * Nombre del bot *: @ $ { me . jid . split ( '@' ) [ 0 ] } \ n * Prefijo *: $ { prefix } \ n * Total de contactos bloqueados *: $ { bloqueados . length } \ n * EL ESTA ACTIVO DESDE HACE *: $ { kyun ( tiempo de actividad ) } `
					buffer  =  aguardar  getBuffer ( me . imgUrl )
					cliente . sendMessage ( desde ,  búfer ,  imagen ,  { título : teks ,  contextInfo : { mencionadoJid : [ me . jid ] } } )
					descanso
					
				caso  'lista de bloqueo' :
					teks  =  '𝗕𝗟𝗢𝗖𝗞 𝗟𝗜𝗦𝗧: \ n'
					para  ( dejar  bloque  de  bloqueado )  {
						teks  + =  `┣ ➢ @ $ { bloque . dividir ( '@' ) [ 0 ] } \ n`
					}
					teks  + =  `𝗧𝗼𝘁𝗮𝗹: $ { bloqueado . longitud } `
					cliente . sendMessage ( de ,  teks . trim ( ) ,  extendedText ,  { quoted : mek ,  contextInfo : { " addedJid " : bloqueado } } )
					descanso
					
                                caso  'hidetag' :
					si  ( ! isGroup )  de retorno  respuesta ( desorden . solamente . grupo )
					if  ( ! isOwner )  return  responder ( 'kamu siapa?' )
					var  valor  =  cuerpo . rebanada ( 9 )
					var  group  =  aguardar al  cliente . groupMetadata ( desde )
					var  member  =  group [ 'participantes' ]
					var  mem  =  [ ]
					miembro . mapa (  async  adm  =>  {
					mem . push ( adm . id . replace ( 'c.us' ,  's.whatsapp.net' ) )
					} )
					var  options  =  {
					texto : valor ,
					contextInfo : {  mencionadoJid : mem  } ,
					citado : mek
					}
					cliente . sendMessage ( desde ,  opciones ,  texto )
					descanso
					
                               caso  'quotemaker' :
					var  gh  =  cuerpo . rebanada ( 12 )
					var  cita  =  gh . split ( "|" ) [ 0 ] ;
					var  wm  =  gh . dividir ( "|" ) [ 1 ] ;
					var  bg  =  gh . dividir ( "|" ) [ 2 ] ;
					const  pref  =  `Uso: \ n $ { prefijo } quotemaker teks | marca de agua | tema \ n \ nEx: \ n $ { prefix } quotemaker ini contoh | bicit | aleatorio`
					if  ( args . length  <  1 )  return  respuesta ( pref )
					responder ( desorden . espera )
					Anu  =  Await  fetchJson ( `https://terhambar.com/aw/qts/?kata= $ { cita } y autor = $ { WM } y tipe = $ { bg } ' ,  { método : 'conseguir' } )
					tampón  =  await  GetBuffer ( anu . resultado )
					cliente . sendMessage ( de ,  búfer ,  imagen ,  { título : 'Nih anjim' ,  citado : mek } )
					descanso
					
                               caso  'phlogo' :
					var  gh  =  cuerpo . rebanada ( 9 )
					var  gbl1  =  gh . split ( "|" ) [ 0 ] ;
					var  gbl2  =  gh . dividir ( "|" ) [ 1 ] ;
					if  ( args . length  <  1 )  return  respuesta ( 'Teksnya mana um' )
					responder ( desorden . espera )
					Anu  =  Await  fetchJson ( `https://mhankbarbars.herokuapp.com/api/textpro?theme=pornhub&text1= $ { gbl1 } y texto2 = $ { gbl2 } ' ,  { método : 'conseguir' } )
					tampón  =  await  GetBuffer ( anu . resultado )
					cliente . sendMessage ( desde ,  búfer ,  imagen ,  { citado : mek } )
					descanso
					
                              caso  'verdad' :
					const  trut  = [ '¿Alguna vez te ha gustado alguien? ¿Cuánto tiempo? ' , ' Si puedes o si quieres, en GC / fuera de GC ¿con quién harás amistad? (¿Puedes ser diferente / del mismo sexo) ' , ' ¿Cuál es tu mayor miedo? ' , ' ¿Alguna vez te ha gustado alguien y has sentido a esa persona como tú también? ' , ' ¿Cómo se llama tu exnovio amigo que una vez te gustó en secreto? ' , ' ¿Alguna vez le has robado el dinero o el padre de tu madre? ¿La Razón? ' , ' ¿Qué te hace feliz cuando estás triste? ' , ' ¿Alguna vez has tenido amor no correspondido? si alguna vez con quien? ¿Cómo te sientes brou? '' ¿te ha engañado la gente? ',' lo más temido ',' quién es la persona más influyente en tu vida ',' qué cosas de orgullo te has puesto este año ',' quién es la persona que puede ponerte cachondo ',' ¿Quién es la persona que alguna vez te puso cachondo ',' (bgi, que es musulmán) nunca rezó en todo el día? ',' ¿Quién es el más cercano a tu tipo ideal de pareja aquí? ',' ¿Con quién le gusta jugar? ',' ¿Con quién? rechazar a la gente? ¿La razón por qué? ',' Menciona el incidente que te hizo daño y que todavía recuerdas ',' ¿Qué has logrado este año? ', '¿Cuál fue tu peor hábito en la escuela?' ]
					const  ttrth  =  trut [ Math . piso ( Math . random ( ) * trut . length ) ]
					truteh  =  aguardar  getBuffer ( `https: // i.ibb.co / K9JQXT2 / d0604dc9ecbfdad5e320d3a8a0506da6.jpg` )
					cliente . sendMessage ( de ,  truteh ,  imagen ,  {  título : '* VERDAD * \ n \ n' +  ttrth ,  citado : mek  } )
					descanso
					
				caso  'atreverse' :
					const  dare  = [ 'Envía un mensaje a tu ex y dile "Aún me gustas' , 'enamoramiento telefónico / novia ahora y ss al jugador' , 'pap a un miembro del grupo' , 'Dile a la chica:" ERES TAN HERMOSA "y quedra estar contigo ' , ' ss llamada reciente de whatsapp ' , ' soltar emoticon" 🦄💨 "cada vez que escribe en gc / pc durante 1 día ' , ' envía una nota de voz y di ¿puedo llamarte bebé? ' , 'suelte la cita de la canción / cita, luego etiquete al miembro apropiado para la cita' , 'usar fotos de perfil anime hasta por 3 días' ,'Cambia el nombre a "Soy una niña linda, Luna" durante 5 horas ',' chatea para contactar con el pedido de acuerdo con tu% de batería, sigue diciéndole "tengo suerte de verte ',' chatea con tu ex y dile" te amo, pgn back ',' registro de voz leído surah al-kautsar ',' dijo "Estoy enamorado de ti, ¿quieres ser mi novia?" al sexo opuesto con el que charlaste por última vez (entrégalo en wa / tele), espera a que responda, si ya ss, pasa aquí','indica tu tipo de novia!','fotos de snap / post novia / crush','grita "ME GUSTA EL CAMOTE" luego envíe usando vn aquí','fotografia tu cara y luego envíasela a uno de tus amigos','envía tu foto con una leyenda, soy un niño adoptado' , 'me gusta el pan nwn' , 'grita "Nehro, te quiero nene" frente a tu casa' , 'Cambie el nombre a "BOWO" durante 24 horas.' , 'Finge estar poseído, por ejemplo: posesión de maung, posesión de langostas, posesión de refrigerador, etc.' ]
					const  der  =  dare [ Math . piso ( Matemáticas . aleatorio ( ) * atrevimiento . longitud ) ]
					tod  =  await  GetBuffer ( `https: // i.ibb.co / K9JQXT2 / d0604dc9ecbfdad5e320d3a8a0506da6.jpg` )
					cliente . sendMessage ( de ,  tod ,  imagen ,  {entre  comillas : mek ,  título : '* RETO * \ n \ n' +  der  } )
					descanso	
					
				caso  'rolette' :
					const  rolet  = [ 'Boom, mala suerte amigo, haz perdido \ nIntente denuevo' , 'Vaya suerte tienes amigo, sobreviviste a esta ronda' , 'Boom, mala suerte amigo, haz perdido \ nIntente denuevo' , 'Vaya suerte tienes amigo, sobreviviste a esta ronda ' , ' Boom, mala suerte amigo, haz perdido \ nIntente denuevo ' , ' Vaya tienes suerte amigo, sobreviviste a esta ronda ' ]
					const  rol  =  rolet [ Math . piso ( Math . random ( ) * rolet . length ) ]
					role  =  aguardar  getBuffer ( `https: // i.ibb.co / M2DZqcb / Ea-PROZJXs-AE4-QQz.jpg` )
					cliente . sendMessage ( de ,  rol ,  imagen ,  {  título : '* Juega con Bocchi * \ n \ n' +  rol ,  citado : mek  } )
					descanso
					
				caso  'oportunidad' :
					if  ( args . length  <  1 )  return  reply ( '¿Que desea probar?' )
					const  texty  =  cuerpo . rebanada ( 8 )
					const  lvpc  =  Matemáticas . piso ( Math . aleatorio ( ) * 101 )  +  1
					cliente . sendMessage ( from ,  `_Segun mis claculos super robot la probabilidad de: _ \ n \ n_ * $ { texty } * _ \ n \ nser en realidad de $ { lvpc } % posibles` , MessageType . text ,  {  quoted : mek }  )
           				descanso
					
				caso  'arg' :
					if  ( args . length  <  1 )  return  responder ( '¿No diras nada?' )
					const  textar  =  cuerpo . rebanada ( 5 )
					Anu  =  Await  fetchJson ( `http://simsumi.herokuapp.com/api?text= $ { Textar } & lang = pt` ,  { método : 'conseguir' } )
					resp  =  ( anu . éxito )
					cliente . sendMessage ( desde ,  ` $ { resp } ` , MessageType . text ,  {  citado : mek }  )
					descanso
					
				caso  'hentai' :
					if  ( ! isNsfw )  return  responder ( 'NSFW no está activo' )
					const  hen  = [ 'https://cdn.nekos.life/erok/ero_kitsune_093.jpg' , '' , 'https://cdn.nekos.life/classic/classic254.gif' , 'https: // cdn. nekos.life/classic/classic_049.gif ' , ' https://cdn.nekos.life/classic/classic_044.gif ' , ' https://cdn.nekos.life/classic/classic_003.gif ' , ' https: //cdn.nekos.life/classic/classic_479.gif ' , ' https://cdn.nekos.life/Random_hentai_gif/Random_hentai_gifNB_1438.gif ' , ' https://cdn.nekos.life/Random_hentai_gif/Random_hentaB10i23 , 'https://cdn.nekos.life/Random_hentai_gif/Random_hentai_gifNB0524.gif ' ,'https://cdn.nekos.life/Random_hentai_gif/Random_hentai_gifNB0852.gif','https://cdn.nekos.life/erok/ero_kitsune_033.png','https://cdn.nekos.life/erok/ero_kitsune_104.jpg','https://cdn.nekos.life/erok/ero_kitsune_004.png','https://cdn.nekos.life/erok/ero_kitsune_071.jpg','https://cdn.nekos.life/erok/ero_kitsune_002.png','https://cdn.nekos.life/erok/ero_kitsune_022.jpg','https://cdn.nekos.life/erok/ero_kitsune_022.jpg','https://cdn.nekos.life/erok/ero_kitsune_055.jpg','https://cdn.nekos.life/erok/ero_kitsune_025.jpg','https://cdn.nekos.life/erok/ero_kitsune_103.jpg','https://cdn.nekos.life/erok/ero_kitsune_028.png' , 'https://cdn.nekos.life/erok/ero_kitsune_014.jpg' , 'https://cdn.nekos.life/erok/ero_kitsune_005 .jpg ' , ' https://cdn.nekos.life/erok/ero_kitsune_079.jpg ' , ' https://cdn.nekos.life/erok/ero_kitsune_046.jpg ' , ' https://cdn.nekos.life /erok/ero_kitsune_077.jpg ' , ]
					const  henta  =  hen [ Math . piso ( Math . aleatorio ( ) * gallina . longitud ) ]
					het  =  aguardar  getBuffer ( ` $ { henta } ` )
					cliente . sendMessage ( de ,  het ,  imagen ,  {  título : 'riko xd' ,  citado : mek  } )
					descanso
				caso  'mamada' :
					if  ( ! isNsfw )  return  responder ( 'NSFW no está activo' )
					Anu  =  Await  fetchJson ( `https:? //tobz-api.herokuapp.com/api/nsfwblowjob apikey = BotWeA` ,  { método : 'conseguir' } )
					imgt  =  ( resultado anu . )
					pok  =  espera  getBuffer ( imgt )
					cliente . sendMessage ( de ,  pok ,  imagen ,  {  citado : mek  } )
					descanso

				caso  'ihentai' :
					if  ( ! isNsfw )  return  responder ( 'NSFW no está activo' )
					anu  =  await  fetchJson ( `https: // nekos.life / api / v2 / img / erok` ,  { método : 'conseguir' } )
					imgt  =  ( anu . url )
					pok  =  espera  getBuffer ( imgt )
					cliente . sendMessage ( de ,  pok ,  imagen ,  {  citado : mek  } )
					descanso	  

				caso  'tetas' :
					if  ( ! isNsfw )  return  responder ( 'NSFW no está activo' )
					anu  =  await  fetchJson ( `https: // nekos.life / api / v2 / img / boobs` ,  { método : 'conseguir' } )
					imgt  =  ( anu . url )
					pok  =  espera  getBuffer ( imgt )
					cliente . sendMessage ( de ,  pok ,  imagen ,  {  citado : mek  } )
					descanso	  
					
				caso  'nsfwyuri' :
					if  ( ! isNsfw )  return  responder ( 'NSFW no está activo' )
					anu  =  await  fetchJson ( `https: // nekos.life / api / v2 / img / yuri` ,  { método : 'conseguir' } )
					imgt  =  ( anu . url )
					pok  =  espera  getBuffer ( imgt )
					cliente . sendMessage ( de ,  pok ,  imagen ,  {  citado : mek  } )
					descanso

				caso  'futanari' :
					if  ( ! isNsfw )  return  responder ( 'NSFW no está activo' )
					anu  =  await  fetchJson ( `https: // nekos.life / api / v2 / img / futanari` ,  { método : 'conseguir' } )
					imgt  =  ( anu . url )
					pok  =  espera  getBuffer ( imgt )
					cliente . sendMessage ( de ,  pok ,  imagen ,  {  citado : mek  } )
					descanso	

				caso  'nsfwneko' :
					if  ( ! isNsfw )  return  responder ( 'NSFW no está activo' )
					anu  =  await  fetchJson ( `https: // nekos.life / api / v2 / img / lewdkemo` ,  { método : 'conseguir' } )
					imgt  =  ( anu . url )
					pok  =  espera  getBuffer ( imgt )
					cliente . sendMessage ( de ,  pok ,  imagen ,  {  citado : mek  } )
					descanso

				
			    	caso  'confirmamas?' :
					const  conf  = [ 'https://i.ibb.co/Z85HKDv/en-un-rato-te-confirmo.jpg' , 'https://i.ibb.co/qncWWRw/Desconfirmo.jpg' , 'https : //i.ibb.co/2qykqmx/confirmamos.jpg ' , ' https://i.ibb.co/C7v9qvq/confirmo.jpg ' ]
					const  conif  =  conf [ Math . piso ( Math . random ( ) * conf . length ) ]
					confirma  =  aguardar  getBuffer ( ` $ { conif } ` )
					cliente . sendMessage ( de ,  confirma ,  imagen ,  {  título : '* EL BOT .... *' ,  citado : mek  } )
					descanso
					
				caso  'waifu' :
				   	anu  =  aguardar  fetchJson ( `https: // arugaz.herokuapp.com / api / waifu` )
				  	buf  =  aguardar  getBuffer ( anu . imagen )
				   	texs  =  `* nombre del anime *: $ { anu . nombre } \ n * deskripsi *: $ { anu . desc } \ n * fuente *: $ { anu . fuente } `
				   	cliente . sendMessage ( de ,  buf ,  imagen ,  {  citado : mek ,  título : ` $ { texs } ` } )
				        descanso
					
	
                		caso  'dewabatch' :
                    			teks  =  cuerpo . rebanada ( 11 )
                    			Anu  =  Await  fetchJson ( `https://arugaz.herokuapp.com/api/dewabatch?q= $ { teks } '  ,  { método : 'conseguir' } )
                    			thum  =  aguardar  getBuffer ( anu . pulgar )
                    			cliente . sendMessage ( de ,  thum ,  image ,  { citado : mek ,  título : ` $ { anu . resultado } ` } )
                 			descanso
					
					
                		caso  'error' :
                     			const  pesan  =  cuerpo . rebanada ( 5 )
                      			si  ( pesan . longitud  >  300 )  devuelva el  cliente . sendMessage ( de ,  '𝗟𝗼 𝘀𝗶𝗲𝗻𝘁𝗼, 𝘁𝗲𝘅𝘁𝗼 𝗱𝗲𝗺𝗮𝘀𝗶𝗮𝗱𝗼 𝗹𝗮𝗿𝗴𝗼, 𝗺𝗮́𝘅𝗶𝗺𝗼 𝟯𝟬𝟬 𝘁𝗲𝘅𝘁𝗼' ,  msgType . text ,  {entre comillas : mek } )
                        		var  nomor  =  mek . partícipe
                       			const  teks1  =  `* [INFORME] * \ nNomor: @ $ { nomor . split ( "@ s.whatsapp.net" ) [ 0 ] } \ nPesan: $ { pesan } `
                      			var  options  =  {
                         		texto : teks1 ,
                        		contextInfo : { mencionadoJid : [ nomor ] } ,
                     			}
                    			cliente . sendMessage ( '51916659000@s.whatsapp.net' ,  opciones ,  texto ,  { citado : mek } )
                    			reply ( 'Se han informado problemas al propietario del BOT, no se responderá a los informes falsos.' )
                    			descanso
					
                		caso  'ssweb' :
					if  ( args . length  <  1 )  return  reply ( '¿Dónde está la url, tío?' )
					teks  =  cuerpo . rebanada ( 7 )
					responder ( desorden . espera )
					Anu  =  Await  fetchJson ( `https://mnazria.herokuapp.com/api/screenshotweb?url= $ { teks } ' )
					buff  =  aguardar  getBuffer ( anu . gambar )
					cliente . sendMessage ( de ,  buff ,  imagen ,  { citado : mek } )
					descanso
					
                		caso  'bucin' :
					gatauda  =  cuerpo . rebanada ( 7 )
					anu  =  await  fetchJson ( `https: // arugaz.herokuapp.com / api / howbucins` ,  { método : 'conseguir' } )
					responder ( anu . desc )
					descanso
					
		        	caso  'persengay' :
					gatauda  =  cuerpo . rebanada ( 11 )
					anu  =  await  fetchJson ( `https: // arugaz.herokuapp.com / api / howbucins` ,  { método : 'conseguir' } )
					responder ( anu . desc + anu . persen )
					descanso
					
				caso  'comillas' :
					gatauda  =  cuerpo . rebanada ( 8 )
					anu  =  await  fetchJson ( `https: // arugaz.herokuapp.com / api / randomquotes` ,  { método : 'conseguir' } )
					responder ( cotizaciones anu . )
					descanso
					
				caso  'cerpen' :
					gatauda  =  cuerpo . rebanada ( 8 )
					anu  =  await  fetchJson ( `https: // arugaz.herokuapp.com / api / cerpen` ,  { método : 'conseguir' } )
					respuesta ( anu . resultado . resultado )
					descanso
					
				caso  'acorde' :
					if  ( args . length  <  1 )  return  reply ( '¿Dónde está el texto, tío?' )
					tels  =  cuerpo . rebanada ( 7 )
					Anu  =  Await  fetchJson ( `https://arugaz.herokuapp.com/api/chord?q= $ { tels } ' ,  { método : 'conseguir' } )
					respuesta ( resultado anu . )
					descanso
					
              		  	caso  'lirik' :
                    			if (args.length < 1) return reply('donde esta el titulo de la cancion, tio')
                    			teha = body.slice(7)
                    			anu = await fetchJson(`https://arugaz.herokuapp.com/api/lirik?judul=${teha}` , {method: 'get'})
                    			reply(anu.result)
                			break
					
                		case 'pokemon':
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=pokemon`, {method: 'get'})
					reply(mess.wait)
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break
					
				case 'meme':
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=meme`, {method: 'get'})
					reply(mess.wait)
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break
				
				case 'cars':
				    	anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=cars`, {method: 'get'})
					reply(mess.wait)
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break
					
				case 'bocchi':
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=bocchi`, {method: 'get'})
					reply(mess.wait)
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break
		
				case 'animegirl':
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime%20girl`, {method: 'get'})
					reply(mess.wait)
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break

				case 'animeimg':
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anime`, {method: 'get'})
					reply(mess.wait)
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break

				case 'loli':
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=loli`, {method: 'get'})
					reply(mess.wait)
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break

                		case 'dogs':
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=anjing`, {method: 'get'})
					reply(mess.wait)
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break
					
				case 'neko':
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=neko`, {method: 'get'})
					reply(mess.wait)
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break

				case 'icon':
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=icon%20anime`, {method: 'get'})
					reply(mess.wait)
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break
		
			   	case 'gato':
					anu = await fetchJson(`https://api.fdci.se/rep.php?gambar=gato`, {method: 'get'})
					reply(mess.wait)
					var n = JSON.parse(JSON.stringify(anu));
					var nimek =  n[Math.floor(Math.random() * n.length)];
					pok = await getBuffer(nimek)
					client.sendMessage(from, pok, image, { quoted: mek })
					break
					
                		case 'spamcall':
                   			if (args.length < 1) return ('ingrese el número de destino')
                   			weha = body.slice(10)
                   			anu = await fetchJson(`https://arugaz.herokuapp.com/api/spamcall?no=${weha}` , {method: 'get'})
                   			client.sendMessage(from, anu.logs, text, {quoted: mek})
                 			break
					
                		case 'indohot':
                   			if (!isNsfw) return reply('NSFW no está activo')
                   			anu = await fetchJson(`https://arugaz.herokuapp.com/api/indohot`, {method: 'get'})
                   			if (anu.error) return reply(anu.error)
                   			hasil = `*judul* \n${anu.result.judul} *genre* \n${anu.result.genre} *durasi* \n${anu.result.durasi} *url* \n${anu.result.url}`
                   			client.sendMessage(from, hasil, text, {quoted: mek})
                   			break
					
				case 'ytmp4':
					if (args.length < 1) return reply('¿Dónde está la URL?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, video, {mimetype: 'video/mp4', filename: `${anu.title}.mp4`, quoted: mek})
					break
					
				case 'ytmp3':
					if (args.length < 1) return reply('¿Dónde está la URL?')
					if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)
					anu = await fetchJson(`https://st4rz.herokuapp.com/api/ytv2?url=${args[0]}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = `*Title* : ${anu.title}`
					thumb = await getBuffer(anu.thumb)
					client.sendMessage(from, thumb, image, {quoted: mek, caption: teks})
					buffer = await getBuffer(anu.result)
					client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
					break
					
				case 'happymod':
					if (args.length < 1) return reply('¿que aplicacion desea buscar?')
				  	data = await fetchJson(`https://tobz-api.herokuapp.com/api/happymod?q=${body.slice(10)}&apikey=BotWeA`, {method: 'get'})
				  	hupo = data.result[0] 
				  	teks = `*➸ Nombre*: ${data.result[0].title}\n\n*➸ Version*: ${hupo.version}\n\n*➸ Peso:* ${hupo.size}\n\n*➸ root*: ${hupo.root}\n\n*➸ Precio*: ${hupo.price}\n\n*➸ Link*: ${hupo.link}\n\n*➸ Descarga*: ${hupo.download}`
				  	buffer = await getBuffer(hupo.image)
				  	client.sendMessage(from, buffer, image, {quoted: mek, caption: `${teks}`})
				  	break
					
                		case 'text3d':
              	    			if (args.length < 1) return reply('¿Dónde está el texto sis?')
                    			teks = `${body.slice(8)}`
                    			if (teks.length > 10) return client.sendMessage(from, 'El texto es largo, un máximo de 10 frases', text, {quoted: mek})
                    			buff = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
                    			client.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`})
			     		break
					
			    	case 'fototiktok':
                    			gatauda = body.slice(12)
                    			anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/tiktokpp?user=${gatauda}`)
			        	buff = await getBuffer(anu.result)
                    			reply(anu.result)
			        	break
					
			    	case 'map':
                			anu = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${body.slice(5)}`, {method: 'get'})
                			buffer = await getBuffer(anu.gambar)
                			client.sendMessage(from, buffer, image, {quoted: mek, caption: `${body.slice(5)}`})
					break
               	 		case 'kbbi':
					if (args.length < 1) return reply('¿Qué quieres buscar?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/kbbi?search=${body.slice(6)}`, {method: 'get'})
					reply('Menurut Kbbi:\n\n'+anu.result)
					break
					
                		case 'artinama':
					if (args.length < 1) return reply('¿Qué quieres buscar?')
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${body.slice(10)}`, {method: 'get'})
					reply('Menurut nama:\n\n'+anu.result)
					break
					
				case 'ocr': 
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('𝐄𝐍𝐕𝐈𝐀𝐑 𝐅𝐎𝐓𝐎𝐒 𝐂𝐎𝐍 𝐓𝐈́𝐓𝐔𝐋𝐎 ${prefix}𝗼𝗰𝗿')
					}
					break
				case 'stiker': 
				case 'sticker':
				case 's':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								client.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`Yah gagal ;(, coba ulangi ^_^`)
							})
							.on('end', function () {
								console.log('Finish')
								buff = fs.readFileSync(ran)
								client.sendMessage(from, buff, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Enviar fotos con subtítulos ${prefix}sticker o respuesta / etiqueta de imagen`)
					}
					break
				case 'getses':
            				if (!isOwner) return reply(mess.only.ownerB)
           			 	const sesPic = await client.getSnapshot()
            				client.sendFile(from, sesPic, 'session.png', '>~<...', id)
            				break
					
				case 'gtts':	
				case 'tts':
					if (args.length < 1) return client.sendMessage(from, 'Código de idioma requerido !!', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return client.sendMessage(from, '¿Qué texto estás haciendo voz? es mi voz :v?', text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 300
					? reply('El texto significa....')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buff = fs.readFileSync(rano)
							if (err) return reply('Bueno, falló ;( , intenta repetir :v')
							client.sendMessage(from, buff, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					break
					
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					prefix = args[0]
					reply(`𝗣𝗿𝗲𝗳𝗶𝘅 𝗯𝗲𝗿𝗵𝗮𝘀𝗶𝗹 𝗱𝗶 𝘂𝗯𝗮𝗵 𝗺𝗲𝗻𝗷𝗮𝗱𝗶 : ${prefix}`)
					break 
					
				case 'hilih': 
					if (args.length < 1) return reply('dame el texto!! >:v')
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
					
				case 'tiktokstalk':
					try {
						if (args.length < 1) return client.sendMessage(from, '𝗤𝗨𝗘 𝗡𝗢𝗠𝗕𝗥𝗘 𝗗𝗘 𝗨𝗦𝗨𝗔𝗥𝗜𝗢 ?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('[𝗘𝗥𝗥𝗢𝗥] 𝗣𝗢𝗦𝗜𝗕𝗟𝗘𝗠𝗘𝗡𝗧𝗘 𝗡𝗢𝗠𝗕𝗥𝗘 𝗗𝗘 𝗨𝗦𝗨𝗔𝗥𝗜𝗢 𝗡𝗢 𝗩𝗔́𝗟𝗜𝗗𝗢')
					}
					break
					
				case 'fitnah':	
				case 'fake':          
               				if (!isGroup) return reply(mess.only.group)
                			arg = body.substring(body.indexOf(' ') + 1)
					isi = arg.split(' |')[0] 
					pesan = arg.split('|')[1] 
					pesan2 = arg.split('|')[2] 
                			reply(pesan, isi, pesan2)
                			break
					
                 		case 'linkgc':
				    	if (!isGroup) return reply(mess.only.group)
				    	if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    	linkgc = await client.groupInviteCode (from)
				    	yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    	client.sendMessage(from, yeh, text, {quoted: mek})
			        	break
					
				case 'tagall':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `┣➥ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
					
				case 'clearall':
					if (!isOwner) return reply(' *YO SOY QUIEN* ?')
					anu = await client.chats.all()
					client.setMaxListeners(25)
					for (let _ of anu) {
						client.deleteChat(_.jid)
					}
					reply('𝗕𝗢𝗥𝗥𝗔𝗥 𝗧𝗢𝗗𝗢 𝗘𝗟 𝗘́𝗫𝗜𝗧𝗢 𝗗𝗘 𝗬𝗔𝗛  :)')
					break
					
			       case 'block':
				 	client.updatePresence(from, Presence.composing) 
				 	client.chatRead (from)
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					client.blockUser (`${body.slice(7)}@c.us`, "add")
					client.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
					
                    		case 'unblock':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
				    	client.blockUser (`${body.slice(9)}@c.us`, "remove")
					client.sendMessage(from, `𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 𝗗𝗶𝘁𝗲𝗿𝗶𝗺𝗮, 𝗺𝗲𝗺𝗯𝘂𝗸𝗮 ${body.slice(9)}@c.us`, text)
					break
					
				case 'leave': 
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					await client.leaveGroup(from, '𝗕𝘆𝗲𝗲', groupId)
                    			break
					
				case 'bc': 
					if (!isOwner) return reply(' *YO SOY QUIEN* ?') 
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `❮ 𝙋𝙀𝙎𝘼𝙉 𝘽𝙍𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${body.slice(4)}`})
						}
						reply('𝘿𝙄𝙁𝙐𝙎𝙄𝙊́𝙉 𝘿𝙀 𝙀́𝙓𝙄𝙏𝙊𝙎 ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `❮ 𝙋𝙀𝙎𝘼𝙉 𝘽𝙍𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${body.slice(4)}`)
						}
						reply('𝘿𝙄𝙁𝙐𝙎𝙄𝙊́𝙉 𝘿𝙀 𝙀́𝙓𝙄𝙏𝙊𝙎 ')
					}
					break
					
			   	case 'setpp': 
                        		if (!isGroup) return reply(mess.only.group)
                       			if (!isGroupAdmins) return reply(mess.only.admin)
                        		if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                       			media = await client.downloadAndSaveMediaMessage(mek)
                         		await client.updateProfilePicture (from, media)
                        		reply('𝗖𝗔𝗠𝗕𝗜𝗢 𝗘𝗫𝗜𝗧𝗢𝗦𝗢 𝗗𝗘 𝗜𝗖𝗢𝗡𝗢 𝗗𝗘 𝗚𝗥𝗨𝗣𝗢')
                			break
					
				case 'add':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('¿Quieres agregar a alguien?')
					if (args[0].startsWith('08')) return reply('Utilice el código de país, mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						client.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('No se pudo agregar el destino, tal vez porque es privado, F')
					}
					break
					
				case 'grup':
				case 'group':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args[0] === 'buka') {
					    reply(`𝗕𝗲𝗿𝗵𝗮𝘀𝗶?? 𝗠𝗲𝗺𝗯𝘂𝗸𝗮 𝗚𝗿𝗼𝘂𝗽 𝗧𝗼𝗱`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, false)
					} else if (args[0] === 'tutup') {
						reply(`𝗕𝗲𝗿𝗵𝗮𝘀𝗶𝗹 𝗠𝗲𝗻𝘂𝘁𝘂𝗽 𝗚𝗿𝗼𝘂𝗽 𝗧𝗼𝗱`)
						client.groupSettingChange(from, GroupSettingChange.messageSend, true)
					}
					break
                    
            			case 'admin':
            			case 'owner':
            			case 'creator':
                  			client.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
       					client.sendMessage(from, 'Este es mi número de propietario >_<, no enviar spam ni bloquearlo',MessageType.text, { quoted: mek} )
           				break
					
           			case 'setname':
                			if (!isGroup) return reply(mess.only.group)
			    		if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                			client.groupUpdateSubject(from, `${body.slice(9)}`)
                			client.sendMessage(from, 'Éxito, cambiar el nombre del grupo', text, {quoted: mek})
                			break
					
                		case 'setdesc':
                			if (!isGroup) return reply(mess.only.group)
			    		if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                			client.groupUpdateDescription(from, `${body.slice(9)}`)
                			client.sendMessage(from, 'Éxito, cambio de descripción del grupo', text, {quoted: mek})
               	 			break
					
           			case 'demote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗔 𝗔𝗟 𝗢𝗕𝗝𝗘𝗧𝗜𝗩𝗢 𝗤𝗨𝗘 𝗤𝗨𝗜𝗘𝗥𝗘𝗦 𝗩𝗢𝗟𝗩𝗘𝗥 𝗠𝗜𝗘𝗠𝗕𝗥𝗢!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝗙𝗨𝗜𝗦𝗧𝗘 𝗔𝗗𝗠𝗜𝗡 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`𝗕𝗨𝗘𝗡𝗢 @${mentioned[0].split('@')[0]} 𝗙𝗨𝗜𝗦𝗧𝗘 𝗔𝗗𝗠𝗜𝗡`, mentioned, true)
						client.groupDemoteAdmin(from, mentioned)
					}
					break
					
				case 'promote':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗔 𝗔𝗟 𝗢𝗕𝗝𝗘𝗧𝗜𝗩𝗢 𝗤𝗨𝗘 𝗤𝗨𝗜𝗘𝗥𝗘𝗦 𝗩𝗢𝗟𝗩𝗘𝗥 𝗔𝗗𝗠𝗜𝗡!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝗙𝗘𝗟𝗜𝗖𝗜𝗧𝗔𝗖𝗜𝗢𝗡𝗘𝗦 𝗣𝗢𝗥 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗜𝗥𝗦𝗘 𝗘𝗡 𝗔𝗗𝗠𝗜𝗡 𝗚𝗥𝗢𝗨𝗣:\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`𝗙𝗘𝗟𝗜𝗖𝗜𝗧𝗔𝗖𝗜𝗢𝗡𝗘𝗦🥳 @${mentioned[0].split('@')[0]} 𝗣𝗢𝗥 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗜𝗥𝗦𝗘 𝗘𝗡 𝗔𝗗𝗠𝗜𝗡 𝗗𝗘𝗟 𝗚𝗥𝗢𝗨𝗣 (+_+)`, mentioned, true)
						client.groupMakeAdmin(from, mentioned)
					}
					break
					
			     	case 'kick':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗔 𝗔𝗟 𝗢𝗕𝗝𝗘𝗧𝗜𝗩𝗢 𝗤𝗨𝗘 𝗤𝗨𝗜𝗘𝗥𝗘𝗦 MATAR')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `𝗔𝘀𝗲𝗸 𝗱𝗮𝗽𝗮𝘁 𝗺𝗮𝗸𝗮𝗻𝗮𝗻,𝗼𝘁𝘄 𝗸𝗶𝗰𝗸 🏃 :\n`
							teks += `@_.split('@')[0]`
						}
						mentions(teks, mentioned, true)
						client.groupRemove(from, mentioned)
					} else {
						mentions(`CHAU CTMR @${mentioned[0].split('@')[0]} 🏃`, mentioned, true)
						client.groupRemove(from, mentioned)
					}
					break
					
				case 'listadmin':
					if (!isGroup) return reply(mess.only.group)
					teks = `LISTA DE ADMINS DEL GRUPO *${groupMetadata.subject}*\n𝗧𝗼𝘁𝗮𝗹 : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
					
				case 'toimg':
					if (!isQuotedSticker) return reply('𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗘 𝗘𝗟 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 !')
					reply(mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Bueno, falló ;( , intenta repetir :v')
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: '𝗟𝗜𝗦𝗧𝗢, 𝗔𝗛𝗢𝗥𝗔 𝗣𝗔𝗚𝗔𝗠𝗘 '})
						fs.unlinkSync(ran)
					})
					break
					
				case 'simih':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isSimi) return reply('𝗬𝗮 𝗮𝗰𝘁𝗶𝘃𝗮𝗱𝗼 !!!')
						samih.push(from)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('❬ 𝗘́𝗫𝗜𝗧𝗢 ❭ 𝗔𝗖𝗧𝗜𝗩𝗔𝗥 𝗟𝗔𝗦 𝗙𝗨𝗡𝗖𝗜𝗢𝗡𝗘𝗦 𝗦𝗜𝗠𝗜 𝗘𝗡 𝗘𝗦𝗧𝗘 𝗚𝗥𝗨𝗣𝗢')
					} else if (Number(args[0]) === 0) {
						samih.splice(from, 1)
						fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
						reply('❬ 𝗘́𝗫𝗜𝗧𝗢 ❭ 𝗗𝗘𝗦𝗔𝗖𝗧𝗜𝗩𝗔𝗥 𝗟𝗔𝗦 𝗙𝗨𝗡𝗖𝗜𝗢𝗡𝗘𝗦 𝗦𝗜𝗠𝗜 𝗘𝗡 𝗘𝗦𝗧𝗘 𝗚𝗥𝗨𝗣𝗢')
					} else {
						reply(' *Escriba el comando 1 para activar, 0 para desactivar* \nEJEMLPO: 𝘀𝗶𝗺𝗶𝗵 𝟭')
					}
					break
					
				case 'nsfw':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('𝗬𝗔 𝗔𝗖𝗧𝗜𝗩𝗢??𝗳 !!')
						nsfw.push(from)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
						reply('❬ 𝗘́𝗫𝗜𝗧𝗢 ❭ 𝗙𝗨𝗡𝗖𝗜𝗢𝗡 𝗗𝗘 𝗡𝗦𝗙𝗪 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗔')
					} else if (Number(args[0]) === 0) {
						nsfw.splice(from, 1)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(nsfw))
						reply('❬ 𝗘́𝗫𝗜𝗧𝗢 ❭ 𝗙𝗨𝗡𝗖𝗜𝗢𝗡 𝗗𝗘 𝗡𝗦𝗙𝗪 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗔')
					} else {
						reply(' *1 PARA ACTIVAR, 0 PARA APAGAR* \nEJEMPLO: 𝗻𝘀𝗳𝘄 𝟭')
					}
					break
					
				case 'exclusive':
					if (!isOwner) return reply(mess.only.ownerB)
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
					if (isNsfw) return reply('𝗬𝗔 𝗔𝗖𝗧𝗜𝗩𝗢!!')
					nsfw.push(from)
					fs.writeFileSync('./src/exclusive.json', JSON.stringify(nsfw))
					reply('❬ 𝗘́𝗫𝗜𝗧𝗢 ❭ 𝗙𝗨𝗡𝗖𝗜𝗢𝗡 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗔')
					} else if (Number(args[0]) === 0) {
					nsfw.splice(from, 1)
					fs.writeFileSync('./src/exclusive.json', JSON.stringify(nsfw))
					reply('❬ 𝗘́𝗫𝗜𝗧𝗢 ❭ *FUNCION DESACTIVADA*')
					} else {
					reply(' *1 PARA ACTIVAR, 0 PARA APAGAR* \nEJEMPLO: #exclusive 𝟭')
					}
					break		
					
				case 'welcome':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return reply('Boo :𝘃')
					if (Number(args[0]) === 1) {
						if (isWelkom) return reply('ACTIVADO !!!')
						welkom.push(from)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('❬ 𝗘́𝗫𝗜𝗧𝗢 ❭ 𝗙𝗨𝗡𝗖𝗜𝗢𝗡 𝗗𝗘 𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗔 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗔 ')
					} else if (Number(args[0]) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./src/welkom.json', JSON.stringify(welkom))
						reply('❬ 𝗘́𝗫𝗜𝗧𝗢 ❭ 𝗙𝗨𝗡𝗖𝗜𝗢𝗡 𝗗𝗘 𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗔 𝗗𝗘𝗦𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗔 ')
					} else {
						reply(' *1 PARA ACTIVAR, 0 PARA APAGAR* \n *EJEMPLO: ${prefix}welcome 1*')
					}
					break
					
				case 'clone':
					if (!isGroup) return reply(mess.only.group)
					if (!isOwner) return reply(' *YO SOY* ?') 
					if (args.length < 1) return reply(' *QUIERO ETIQUETAS EN EL CLON >:v !!!* ')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await client.getProfilePicture(id)
						buffer = await getBuffer(pp)
						client.updateProfilePicture(botNumber, buffer)
						mentions(`La foto de perfil se actualizó correctamente con la foto de perfil @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply(' *Bueno, falló ;( , intenta repetir :v* ')
					}
					break
		
				case 'termux':
					if (!isExclusive) return reply('los comandos no estan activo')
                    			client.sendMessage(from, 'estos son los comnados de legion',MessageType.text, { quoted: mek} )
           				break

				case 'tr-troyano':
					if (!isExclusive) return reply('los comandos no estan activo')
					client.sendMessage(from, '≪━─━─━━─━─◈─━─━━─━─━≫\n\n$ pkg upgrade\n\n$ pkg install bash\n\n$ apt install pv\n\n$ pkg install git\n\n$ git clone https://github.com/Hacking-pch/papaviruz\n\n$ cd papaviruz\n\n$ chmod +x papaviruz.sh\n\n$ bash papaviruz.sh',MessageType.text, { quoted: mek} )
					break
				case 'tr-fotosploit':
					if (!isExclusive) return reply('los comandos no estan activo')
					client.sendMessage(from, '≪━─━─━━─━─◈─━─━━─━─━≫\n\n$ pkg update && pkg upgrade -y\n\n$ pkg install -y php\n\n$ pkg install -y python2\n\n$ pkg install -y git\n\n$ cd $HOME\n\n$ git clone https://github.com/Cesar-Hack-Gray/FotoSploit\n\n$ cd FotoSploit\n\n$ ls\n\n$ bash install.sh\n\n$ ./FotoSploit',MessageType.text, { quoted: mek} )
					break

				case 'tr-spam-mj':
					if (!isExclusive) return reply('los comandos no estan activo')
					client.sendMessage(from, '≪━─━─━━─━─◈─━─━━─━─━≫\n\n$ pkg update && pkg upgrade -y\n\n$ pkg install -y python\n\n$ pkg install -y git\n\n$ git clone https://github.com/TheSpeedX/TBomb\n\n$ ls\n\n$ cd TBomb\n\n$ ./TBomb.sh',MessageType.text, { quoted: mek} )
					break

				case 'tr-hack-facek':
					if (!isExclusive) return reply('los comandos no estan activo')
					client.sendMessage(from, '≪━─━─━━─━─◈─━─━━─━─━≫\n\n$ apt update && pkg upgrade -y\n\n$ pkg install git -y\n\n$ git clone https://github.com/Cesar-Hack-Gray/scam\n\n$ cd scam\n\n$ ls\n\n$ bash install.sh\n\n$ ls\n\n$ ./phishing.sh',MessageType.text, { quoted: mek} )
					break	
					
				case 'blowjob1':
					if (!isNsfw) return reply('los comandos no estan activo')
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/nsfwblowjob?apikey=BotWeA`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(ind.stikga())
					buffer = fs.readFileSync(rano)
					client.sendMessage(from, buffer, sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					break
					
				case 'nangis1':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/cry?apikey=BotWeA`, {method: 'get'})
					reply('「❗」ESPERA UN MINUTO SÍ HERMANO')
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
							  fs.unlinkSync(ranp)
							  if (err) return reply(ind.stikga())
							  buffer = fs.readFileSync(rano)
							  client.sendMessage(from, buffer, sticker, {quoted: mek})
							  fs.unlinkSync(rano)
						  })
					break
					
				case 'cium1':
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu = await fetchJson(`https://tobz-api.herokuapp.com/api/kiss?apikey=BotWeA`, {method: 'get'})
					reply('「❗」 ESPERA UN MINUTO SÍ HERMANO')
						  if (anu.error) return reply(anu.error)
						  exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
							  fs.unlinkSync(ranp)
							  if (err) return reply(ind.stikga())
							  buffer = fs.readFileSync(rano)
							  client.sendMessage(from, buffer, sticker, {quoted: mek})
							  fs.unlinkSync(rano)
						  })
						  break
					
					case 'peluk1':
						  ranp = getRandom('.gif')
						  rano = getRandom('.webp')
						  anu = await fetchJson(`https://tobz-api.herokuapp.com/api/hug?apikey=BotWeA`, {method: 'get'})
						  reply('「❗」 AMOR Pausa 1 MINUTO FUERA ESTE SÍ HERMANO')
						  if (anu.error) return reply(anu.error)
						  exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
							  fs.unlinkSync(ranp)
							  if (err) return reply(ind.stikga())
							  buffer = fs.readFileSync(rano)
							  client.sendMessage(from, buffer, sticker, {quoted: mek})
							  fs.unlinkSync(rano)
						  })
						  break
			
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await client.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							client.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply(' *𝗘𝗡𝗩𝗜𝗔𝗥 𝗙𝗢𝗧𝗢𝗦 𝗖𝗢𝗡 𝗦𝗨𝗕𝗧𝗜́𝗧𝗨𝗟𝗢 𝗢𝗖𝗥* ')
					}
					break
					default:
						if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[ERROR]','red'), '......', color(sender.split('@')[0]))
					}
					}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
