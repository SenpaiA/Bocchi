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
            +  'FN: Senpai Admin \ n' 
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
			si  ( mek . key . fromMe )  volver
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
					teks  =  `* Nombre del bot *: $ { me . nombre } \ n * PROPIETARIO *: * Senpai miad * \ n * AUTOR *: AMPIBI \ n * Nombre del bot *: @ $ { me . jid . split ( '@' ) [ 0 ] } \ n * Prefijo *: $ { prefix } \ n * Total de contactos bloqueados *: $ { bloqueados . length } \ n * EL ESTA ACTIVO DESDE HACE *: $ { kyun ( tiempo de actividad ) } `
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
					pok  =  aguardar  getBuffer ( imgt )
					cliente . sendMessage ( de ,  pok ,  imagen ,  {  citado : mek  } )
					descanso

				caso  'ihentai' :
					if  ( ! isNsfw )  return  responder ( 'NSFW no está activo' )
					anu  =  await  fetchJson ( `https: // nekos.life / api / v2 / img / erok` ,  { método : 'conseguir' } )
					imgt  =  ( anu . url )
					pok  =  aguardar  getBuffer ( imgt )
					cliente . sendMessage ( de ,  pok ,  imagen ,  {  citado : mek  } )
					descanso	  

				caso  'tetas' :
					if  ( ! isNsfw )  return  responder ( 'NSFW no está activo' )
					anu  =  await  fetchJson ( `https: // nekos.life / api / v2 / img / boobs` ,  { método : 'conseguir' } )
					imgt  =  ( anu . url )
					pok  =  aguardar  getBuffer ( imgt )
					cliente . sendMessage ( de ,  pok ,  imagen ,  {  citado : mek  } )
					descanso	  
					
				caso  'nsfwyuri' :
					if  ( ! isNsfw )  return  responder ( 'NSFW no está activo' )
					anu  =  await  fetchJson ( `https: // nekos.life / api / v2 / img / yuri` ,  { método : 'conseguir' } )
					imgt  =  ( anu . url )
					pok  =  aguardar  getBuffer ( imgt )
					cliente . sendMessage ( de ,  pok ,  imagen ,  {  citado : mek  } )
					descanso

				caso  'futanari' :
					if  ( ! isNsfw )  return  responder ( 'NSFW no está activo' )
					anu  =  await  fetchJson ( `https: // nekos.life / api / v2 / img / futanari` ,  { método : 'conseguir' } )
					imgt  =  ( anu . url )
					pok  =  aguardar  getBuffer ( imgt )
					cliente . sendMessage ( de ,  pok ,  imagen ,  {  citado : mek  } )
					descanso	

				caso  'nsfwneko' :
					if  ( ! isNsfw )  return  responder ( 'NSFW no está activo' )
					anu  =  await  fetchJson ( `https: // nekos.life / api / v2 / img / lewdkemo` ,  { método : 'conseguir' } )
					imgt  =  ( anu . url )
					pok  =  aguardar  getBuffer ( imgt )
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
                    			cliente . sendMessage ( de ,  thum ,  imagen ,  { citado : mek ,  título : ` $ { anu . resultado } ` } )
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
                    			if  ( args . length  <  1 )  return  reply ( 'donde esta el titulo de la cancion, tio' )
                    			teha  =  cuerpo . rebanada ( 7 )
                    			Anu  =  Await  fetchJson ( `https://arugaz.herokuapp.com/api/lirik?judul= $ { teha } '  ,  { método : 'conseguir' } )
                    			respuesta ( resultado anu . )
                			descanso
					
                		caso  'pokemon' :
					Anu  =  Await  fetchJson ( `https:? //api.fdci.se/rep.php Gambar = pokemon` ,  { método : 'conseguir' } )
					responder ( desorden . espera )
					var  n  =  JSON . analizar ( JSON . stringify ( anu ) ) ;
					var  nimek  =   n [ Math . piso ( Matemáticas . aleatorio ( ) * n . longitud ) ] ;
					pok  =  aguardar  getBuffer ( nimek )
					cliente . sendMessage ( de ,  pok ,  imagen ,  {  citado : mek  } )
					descanso
					
				caso  'meme' :
					Anu  =  Await  fetchJson ( `https:? //api.fdci.se/rep.php Gambar = meme` ,  { método : 'conseguir' } )
					responder ( desorden . espera )
					var  n  =  JSON . analizar ( JSON . stringify ( anu ) ) ;
					var  nimek  =   n [ Math . piso ( Matemáticas . aleatorio ( ) * n . longitud ) ] ;
					pok  =  aguardar  getBuffer ( nimek )
					cliente . sendMessage ( de ,  pok ,  imagen ,  {  citado : mek  } )
					descanso
				
				caso  'coches' :
				    	Anu  =  Await  fetchJson ( `https:? //api.fdci.se/rep.php Gambar = cars` ,  { método : 'conseguir' } )
					responder ( desorden . espera )
					var  n  =  JSON . analizar ( JSON . stringify ( anu ) ) ;
					var  nimek  =   n [ Math . piso ( Matemáticas . aleatorio ( ) * n . longitud ) ] ;
					pok  =  aguardar  getBuffer ( nimek )
					cliente . sendMessage ( de ,  pok ,  imagen ,  {  citado : mek  } )
					descanso
					
				caso  'bocchi' :
					Anu  =  Await  fetchJson ( `https:? //api.fdci.se/rep.php Gambar = bocchi` ,  { método : 'conseguir' } )
					responder ( desorden . espera )
					var  n  =  JSON . analizar ( JSON . stringify ( anu ) ) ;
					var  nimek  =   n [ Math . piso ( Matemáticas . aleatorio ( ) * n . longitud ) ] ;
					pok  =  aguardar  getBuffer ( nimek )
					cliente . sendMessage ( de ,  pok ,  imagen ,  {  citado : mek  } )
					descanso
		
				caso  'animegirl' :
					Anu  =  Await  fetchJson ( `https:? //api.fdci.se/rep.php Gambar = animado 20girl`% ,  { método : 'conseguir' } )
					responder ( desorden . espera )
					var  n  =  JSON . analizar ( JSON . stringify ( anu ) ) ;
					var  nimek  =   n [ Math . piso ( Matemáticas . aleatorio ( ) * n . longitud ) ] ;
					pok  =  aguardar  getBuffer ( nimek )
					cliente . sendMessage ( de ,  pok ,  imagen ,  {  citado : mek  } )
					descanso

				caso  'animeimg' :
					Anu  =  Await  fetchJson ( `https:? //api.fdci.se/rep.php Gambar = anime` ,  { método : 'conseguir' } )
					responder ( desorden . espera )
					var  n  =  JSON . analizar ( JSON . stringify ( anu ) ) ;
					var  nimek  =   n [ Math . piso ( Matemáticas . aleatorio ( ) * n . longitud ) ] ;
					pok  =  aguardar  getBuffer ( nimek )
					cliente . sendMessage ( de ,  pok ,  imagen ,  {  citado : mek  } )
					descanso

				caso  'loli' :
					Anu  =  Await  fetchJson ( `https:? //api.fdci.se/rep.php Gambar = loli` ,  { método : 'conseguir' } )
					responder ( desorden . espera )
					var  n  =  JSON . analizar ( JSON . stringify ( anu ) ) ;
					var  nimek  =   n [ Math . piso ( Matemáticas . aleatorio ( ) * n . longitud ) ] ;
					pok  =  aguardar  getBuffer ( nimek )
					cliente . sendMessage ( de ,  pok ,  imagen ,  {  citado : mek  } )
					descanso

                		caso  'perros' :
					Anu  =  Await  fetchJson ( `https:? //api.fdci.se/rep.php Gambar = anjing` ,  { método : 'conseguir' } )
					responder ( desorden . espera )
					var  n  =  JSON . analizar ( JSON . stringify ( anu ) ) ;
					var  nimek  =   n [ Math . piso ( Matemáticas . aleatorio ( ) * n . longitud ) ] ;
					pok  =  aguardar  getBuffer ( nimek )
					cliente . sendMessage ( de ,  pok ,  imagen ,  {  citado : mek  } )
					descanso
					
				caso  'neko' :
					Anu  =  Await  fetchJson ( `https:? //api.fdci.se/rep.php Gambar = neko` ,  { método : 'conseguir' } )
					responder ( desorden . espera )
					var  n  =  JSON . analizar ( JSON . stringify ( anu ) ) ;
					var  nimek  =   n [ Math . piso ( Matemáticas . aleatorio ( ) * n . longitud ) ] ;
					pok  =  aguardar  getBuffer ( nimek )
					cliente . sendMessage ( de ,  pok ,  imagen ,  {  citado : mek  } )
					descanso

				caso  'icono' :
					Anu  =  Await  fetchJson ( `https:? //api.fdci.se/rep.php Gambar = icono% 20anime` ,  { método : 'conseguir' } )
					responder ( desorden . espera )
					var  n  =  JSON . analizar ( JSON . stringify ( anu ) ) ;
					var  nimek  =   n [ Math . piso ( Matemáticas . aleatorio ( ) * n . longitud ) ] ;
					pok  =  aguardar  getBuffer ( nimek )
					cliente . sendMessage ( de ,  pok ,  imagen ,  {  citado : mek  } )
					descanso
		
			   	caso  'gato' :
					Anu  =  Await  fetchJson ( `https:? //api.fdci.se/rep.php Gambar = gato` ,  { método : 'conseguir' } )
					responder ( desorden . espera )
					var  n  =  JSON . analizar ( JSON . stringify ( anu ) ) ;
					var  nimek  =   n [ Math . piso ( Matemáticas . aleatorio ( ) * n . longitud ) ] ;
					pok  =  aguardar  getBuffer ( nimek )
					cliente . sendMessage ( de ,  pok ,  imagen ,  {  citado : mek  } )
					descanso
					
                		caso  'spamcall' :
                   			if  ( args . length  <  1 )  return  ( 'ingrese el número de destino' )
                   			weha  =  cuerpo . rebanada ( 10 )
                   			Anu  =  Await  fetchJson ( `https://arugaz.herokuapp.com/api/spamcall?no= $ { Weha } '  ,  { método : 'conseguir' } )
                   			cliente . sendMessage ( de ,  anu . registros ,  texto ,  { citado : mek } )
                 			descanso
					
                		caso  'indohot' :
                   			if  ( ! isNsfw )  return  responder ( 'NSFW no está activo' )
                   			anu  =  await  fetchJson ( `https: // arugaz.herokuapp.com / api / indohot` ,  { método : 'conseguir' } )
                   			if  ( anu . error )  devolver  respuesta ( anu . error )
                   			hasil  =  `* judul * \ n $ { anu . resultado . judul } * género * \ n $ { anu . resultado . género } * durasi * \ n $ { anu . resultado . durasi } * url * \ n $ { anu . resultado . url } `
                   			cliente . sendMessage ( de ,  hasil ,  texto ,  { citado : mek } )
                   			descanso
					
				caso  'ytmp4' :
					if  ( args . length  <  1 )  return  reply ( '¿Dónde está la URL?' )
					si ( ! isUrl ( args [ 0 ] )  && ! args [ 0 ] . Incluye ( 'youtu' ) )  de retorno  respuesta ( desorden . error . Iv )
					Anu  =  Await  fetchJson ( `https://st4rz.herokuapp.com/api/ytv2?url= $ { args [ 0 ] } ' ,  { método : 'conseguir' } )
					if  ( anu . error )  devolver  respuesta ( anu . error )
					teks  =  `* Título *: $ { anu . título } `
					pulgar  =  esperar  getBuffer ( anu . pulgar )
					cliente . sendMessage ( de ,  pulgar ,  imagen ,  { citado : mek ,  título : teks } )
					tampón  =  await  GetBuffer ( anu . resultado )
					cliente . sendMessage ( de ,  búfer ,  video ,  { mimetype : 'video / mp4' ,  nombre de archivo : ` $ { anu . title } .mp4` , entre  comillas : mek } )
					descanso
					
				caso  'ytmp3' :
					if  ( args . length  <  1 )  return  reply ( '¿Dónde está la URL?' )
					si ( ! isUrl ( args [ 0 ] )  && ! args [ 0 ] . Incluye ( 'youtu' ) )  de retorno  respuesta ( desorden . error . Iv )
					Anu  =  Await  fetchJson ( `https://st4rz.herokuapp.com/api/ytv2?url= $ { args [ 0 ] } ' ,  { método : 'conseguir' } )
					if  ( anu . error )  devolver  respuesta ( anu . error )
					teks  =  `* Título *: $ { anu . título } `
					pulgar  =  esperar  getBuffer ( anu . pulgar )
					cliente . sendMessage ( de ,  pulgar ,  imagen ,  { citado : mek ,  título : teks } )
					tampón  =  await  GetBuffer ( anu . resultado )
					cliente . sendMessage ( desde ,  búfer ,  audio ,  { mimetype : 'audio / mp4' ,  nombre de archivo : ` $ { anu . title } .mp3` , entre  comillas : mek } )
					descanso
					
				caso  'happymod' :
					if  ( args . length  <  1 )  return  reply ( '¿que aplicacion desea buscar?' )
				  	datos  =  Await  fetchJson ( `https://tobz-api.herokuapp.com/api/happymod?q= $ { cuerpo . rebanada ( 10 ) } y apikey = BotWeA` ,  { método : 'conseguir' } )
				  	hupo  =  datos . resultado [ 0 ] 
				  	teks  =  `* ➸ Nombre *: $ { data . resultado [ 0 ] . title } \ n \ n * ➸ Versión *: $ { hupo . versión } \ n \ n * ➸ Peso: * $ { hupo . tamaño } \ n \ n * ➸ raíz *: $ { hupo . root } \ n \ n * ➸ Precio *: $ { hupo . precio } \ n \ n * ➸ Enlace *: $ { hupo . enlace } \ n \ n * ➸ Descarga *: $ { hupo . descargar }'
				  	buffer  =  aguardar  getBuffer ( imagen hupo . )
				  	cliente . sendMessage ( desde ,  búfer ,  imagen ,  { citado : mek ,  título : ` $ { teks } ` } )
				  	descanso
					
                		caso  'text3d' :
              	    			if  ( args . length  <  1 )  return  reply ( '¿Dónde está el texto sis?' )
                    			teks  =  ` $ { cuerpo . rebanada ( 8 ) } `
                    			si  ( teks . longitud  >  10 )  devuelve el  cliente . sendMessage ( de ,  'El texto es largo, un máximo de 10 frases' ,  texto ,  { citado : mek } )
                    			buff  =  Await  GetBuffer ( `https://docs-jojo.herokuapp.com/api/text3d?text= $ { teks } ' ,  { método : 'conseguir' } )
                    			cliente . sendMessage ( de ,  buff ,  imagen ,  { citado : mek ,  título : ` $ { teks } ` } )
			     		descanso
					
			    	caso  'fototiktok' :
                    			gatauda  =  cuerpo . rebanada ( 12 )
                    			Anu  =  Await  fetchJson ( `https://docs-jojo.herokuapp.com/api/tiktokpp?user= $ { gatauda } ' )
			        	buff  =  await  GetBuffer ( anu . resultado )
                    			respuesta ( resultado anu . )
			        	descanso
					
			    	caso  'mapa' :
                			Anu  =  Await  fetchJson ( `https://mnazria.herokuapp.com/api/maps?search= $ { cuerpo . rebanada ( 5 ) } ` ,  { método : 'conseguir' } )
                			buffer  =  esperar  getBuffer ( anu . gambar )
                			cliente . sendMessage ( desde ,  búfer ,  imagen ,  { citado : mek ,  título : ` $ { cuerpo . segmento ( 5 ) } ` } )
					descanso
               	 		caso  'kbbi' :
					if  ( args . length  <  1 )  return  reply ( '¿Qué quieres buscar?' )
					Anu  =  Await  fetchJson ( `https://mnazria.herokuapp.com/api/kbbi?search= $ { cuerpo . rebanada ( 6 ) } ` ,  { método : 'conseguir' } )
					responder ( 'Menurut Kbbi: \ n \ n' + resultado anu . )
					descanso
					
                		caso  'artinama' :
					if  ( args . length  <  1 )  return  reply ( '¿Qué quieres buscar?' )
					Anu  =  Await  fetchJson ( `https://mnazria.herokuapp.com/api/arti?nama= $ { cuerpo . rebanada ( 10 ) } ` ,  { método : 'conseguir' } )
					responder ( 'Menurut nama: \ n \ n' + resultado anu . )
					descanso
					
				caso  'ocr' :
					if  ( ( isMedia  && ! mek . message . videoMessage  ||  isQuotedImage )  &&  args . length  ==  0 )  {
						const  encmedia  =  isQuotedImage ? JSON . parse ( JSON . stringify ( mek ) . replace ( 'quotedM' , 'm' ) ) . mensaje . extendedTextMessage . contextInfo : mek
						const  media  =  aguardar al  cliente . downloadAndSaveMediaMessage ( encmedia )
						responder ( desorden . espera )
						aguardar  reconocimiento ( medios ,  { lang : 'eng + ind' ,  oem : 1 ,  psm : 3 } )
							. entonces ( teks  =>  {
								responder ( teks . trim ( ) )
								fs . unlinkSync ( medios )
							} )
							. catch ( err  =>  {
								responder ( err . mensaje )
								fs . unlinkSync ( medios )
							} )
					}  más  {
						responder ( '𝐄𝐍𝐕𝐈𝐀𝐑 𝐅𝐎𝐓𝐎𝐒 𝐂𝐎𝐍 𝐓𝐈́𝐓𝐔𝐋𝐎 $ {prefijo} 𝗼𝗰𝗿' )
					}
					descanso
				caso  'stiker' :
				caso  'pegatina' :
				caso  's' :
					if  ( ( isMedia  && ! mek . message . videoMessage  ||  isQuotedImage )  &&  args . length  ==  0 )  {
						const  encmedia  =  isQuotedImage ? JSON . parse ( JSON . stringify ( mek ) . replace ( 'quotedM' , 'm' ) ) . mensaje . extendedTextMessage . contextInfo : mek
						const  media  =  aguardar al  cliente . downloadAndSaveMediaMessage ( encmedia )
						corrió  =  getRandom ( '.webp' )
						aguardar  ffmpeg ( `./ $ { media } ` )
							. entrada ( medios )
							. on ( 'inicio' ,  función  ( cmd )  {
								consola . log ( `Iniciado: $ { cmd } ` )
							} )
							. on ( 'error' ,  function  ( err )  {
								consola . log ( `Error: $ { err } ` )
								fs . unlinkSync ( medios )
								responder ( desorden . error . stick )
							} )
							. en ( 'fin' ,  función  ( )  {
								consola . log ( 'Finalizar' )
								buff  =  fs . readFileSync ( ejecutado )
								cliente . sendMessage ( de ,  buff ,  sticker ,  { citado : mek } )
								fs . unlinkSync ( medios )
								fs . unlinkSync ( ejecutado )
							} )
							. addOutputOptions ( [ `-vcodec` , ` libwebp` , `-vf` , ` scale = 'min (320, iw)': min '(320, ih)': force_original_aspect_ratio = disminución, fps = 15, pad = 320: 320: -1: -1: color=white@0.0, split [a] [b]; [a] palettegen = reserve_transparent = on: transparencia_color = ffffff [p]; [b] [p] paletteuse` ] )
							. toFormat ( 'webp' )
							. salvar ( correr )
					}  else  if  ( ( isMedia  &&  mek . message . videoMessage . seconds  <  11  ||  isQuotedVideo  &&  mek . message . extendedTextMessage . contextInfo . quotedMessage . videoMessage . seconds  <  11 )  &&  args . length  ==  0 )  {
						const  encmedia  =  isQuotedVideo ? JSON . parse ( JSON . stringify ( mek ) . replace ( 'quotedM' , 'm' ) ) . mensaje . extendedTextMessage . contextInfo : mek
						const  media  =  aguardar al  cliente . downloadAndSaveMediaMessage ( encmedia )
						corrió  =  getRandom ( '.webp' )
						responder ( desorden . espera )
						aguardar  ffmpeg ( `./ $ { media } ` )
							. inputFormat ( media . split ( '.' ) [ 1 ] )
							. on ( 'inicio' ,  función  ( cmd )  {
								consola . log ( `Iniciado: $ { cmd } ` )
							} )
							. on ( 'error' ,  function  ( err )  {
								consola . log ( `Error: $ { err } ` )
								fs . unlinkSync ( medios )
								tipe  =  media . endsWith ( '.mp4' ) ? 'video' : 'gif'
								responder ( `Yah gagal; (, coba ulangi ^ _ ^` )
							} )
							. en ( 'fin' ,  función  ( )  {
								consola . log ( 'Finalizar' )
								buff  =  fs . readFileSync ( ejecutado )
								cliente . sendMessage ( de ,  buff ,  sticker ,  { citado : mek } )
								fs . unlinkSync ( medios )
								fs . unlinkSync ( ejecutado )
							} )
							. addOutputOptions ( [ `-vcodec` , ` libwebp` , `-vf` , ` scale = 'min (320, iw)': min '(320, ih)': force_original_aspect_ratio = disminución, fps = 15, pad = 320: 320: -1: -1: color=white@0.0, split [a] [b]; [a] palettegen = reserve_transparent = on: transparencia_color = ffffff [p]; [b] [p] paletteuse` ] )
							. toFormat ( 'webp' )
							. salvar ( correr )
							}  más  {
						responder ( `Enviar fotos con subtítulos $ { prefix } sticker o respuesta / etiqueta de imagen` )
					}
					descanso
				caso  'obtiene' :
            				si  ( ! isOwner )  de retorno  respuesta ( desorden . solamente . ownerB )
           			 	const  sesPic  =  esperar al  cliente . getSnapshot ( )
            				cliente . sendFile ( desde ,  sesPic ,  ' session.png ' ,  '> ~ <...' ,  id )
            				descanso
					
				caso  'gtts' :	
				caso  'tts' :
					if  ( args . length  <  1 )  devuelve el  cliente . sendMessage ( de ,  'Código de idioma requerido !!' ,  texto ,  { citado : mek } )
					const  gtts  =  require ( './lib/gtts' ) ( args [ 0 ] )
					if  ( args . length  <  2 )  devuelve el  cliente . sendMessage ( de ,  '¿Qué texto estás haciendo voz? es mi voz: v?' ,  text ,  { quoted : mek } )
					dtt  =  cuerpo . rebanada ( 9 )
					ranm  =  getRandom ( '.mp3' )
					rano  =  getRandom ( '.ogg' )
					tdt . longitud  >  300
					? responder ( 'El texto significa ....' )
					: gtts . Guardar ( RANM ,  tdt ,  la función ( )  {
						exec ( `ffmpeg -i $ { ranm } -ar 48000 -vn -c: a libopus $ { rano } ` ,  ( err )  =>  {
							fs . unlinkSync ( ranm )
							buff  =  fs . readFileSync ( rano )
							if  ( err )  return  reply ( 'Bueno, falló; (, intenta repetir: v' )
							cliente . sendMessage ( de ,  buff ,  audio ,  { citado : mek ,  ptt : true } )
							fs . unlinkSync ( rano )
						} )
					} )
					descanso
					
				caso  'setprefix' :
					if  ( args . length  <  1 )  return
					si  ( ! isOwner )  de retorno  respuesta ( desorden . solamente . ownerB )
					prefijo  =  argumentos [ 0 ]
					responder ( `𝗣𝗿𝗲𝗳𝗶𝘅 𝗯𝗲𝗿𝗵𝗮𝘀𝗶𝗹 𝗱𝗶 𝘂𝗯𝗮𝗵 𝗺𝗲𝗻𝗷𝗮𝗱𝗶: $ { prefijo } ` )
					descanso 
					
				caso  'hilih' :
					if  ( args . length  <  1 )  return  responder ( 'dame el texto !!>: v' )
					Anu  =  Await  fetchJson ( `https://mhankbarbars.herokuapp.com/api/hilih?teks= $ { cuerpo . rebanada ( 7 ) } ` ,  { método : 'conseguir' } )
					respuesta ( resultado anu . )
					descanso
					
				caso  'tiktokstalk' :
					prueba  {
						if  ( args . length  <  1 )  devuelve el  cliente . sendMessage ( de ,  '𝗤𝗨𝗘 𝗡𝗢𝗠𝗕𝗥𝗘 𝗗𝗘 𝗨𝗦𝗨𝗔𝗥𝗜𝗢?' ,  texto ,  { citado : mek } )
						deje  { usuario , estadísticas }  =  aguardar  tiktod . getUserProfileInfo ( args [ 0 ] )
						responder ( desorden . espera )
						teks  =  `* ID *: $ { usuario . id } \ n * Nombre de usuario *: $ { user . UniqueId } \ n * Apodo *: $ { usuario . apodo } \ n * Seguidores *: $ { stats . followerCount } \ n * Seguimientos *: $ { stats . followingCount } \ n * Publicaciones *: $ { stats . videoCount } \ n * Luv *: $ { stats . corazón } \ n`
						buffer  =  aguardar  getBuffer ( usuario . avatarLarger )
						cliente . sendMessage ( de ,  búfer ,  imagen ,  {entre comillas : mek ,  título : teks } )
					}  captura  ( e )  {
						consola . log ( `Error:` ,  color ( e , 'rojo' ) )
						responder ( '[𝗘𝗥𝗥𝗢𝗥] 𝗣𝗢𝗦𝗜𝗕𝗟𝗘𝗠𝗘𝗡𝗧𝗘 𝗡𝗢𝗠𝗕𝗥𝗘 𝗗𝗘 𝗨𝗦𝗨𝗔𝗥𝗜𝗢 𝗡𝗢 𝗩𝗔́𝗟𝗜𝗗𝗢' )
					}
					descanso
					
				caso  'fitnah' :	
				caso  'falso' :          
               				si  ( ! isGroup )  de retorno  respuesta ( desorden . solamente . grupo )
                			arg  =  cuerpo . subcadena ( cuerpo . indexOf ( '' )  +  1 )
					isi  =  arg . split ( '|' ) [ 0 ] 
					pesan  =  arg . split ( '|' ) [ 1 ] 
					pesan2  =  arg . split ( '|' ) [ 2 ] 
                			responder ( pesan ,  isi ,  pesan2 )
                			descanso
					
                 		caso  'linkgc' :
				    	si  ( ! isGroup )  de retorno  respuesta ( desorden . solamente . grupo )
				    	si  ( ! isBotGroupAdmins )  de retorno  respuesta ( desorden . solamente . Badmin )
				    	linkgc  =  aguardar  cliente . groupInviteCode  ( desde )
				    	yeh  =  `https://chat.whatsapp.com/ $ { linkgc } \ n \ nlink Grupo * $ { groupName } *`
				    	cliente . sendMessage ( de ,  yeh ,  texto ,  { citado : mek } )
			        	descanso
					
				caso  'tagall' :
					si  ( ! isGroup )  de retorno  respuesta ( desorden . solamente . grupo )
					si  ( ! isGroupAdmins )  de retorno  respuesta ( desorden . solamente . administrador )
					miembros_id  =  [ ]
					teks  =  ( args . longitud  >  1 ) ? cuerpo . rebanada ( 8 ) . recortar ( ) : ''
					teks  + =  '\ n \ n'
					para  ( deje  mem  of  groupMembers )  {
						teks  + =  `┣➥ @ $ { mem . jid . dividir ( '@' ) [ 0 ] } \ n`
						miembros_id . empujar ( mem . jid )
					}
					menciones ( teks ,  members_id ,  true )
					descanso
					
				caso  'clear' :
					if  ( ! isOwner )  return  responder ( '* YO SOY QUIEN *?' )
					anu  =  esperar al  cliente . chats . todo ( )
					cliente . setMaxListeners ( 25 )
					para  ( sea  _  de  anu )  {
						cliente . deleteChat ( _ . jid )
					}
					responder ( '𝗕𝗢𝗥𝗥𝗔𝗥 𝗧𝗢𝗗𝗢 𝗘𝗟 𝗘́𝗫𝗜𝗧𝗢 𝗗𝗘 𝗬𝗔𝗛 :)' )
					descanso
					
			       caso  'bloque' :
				 	cliente . updatePresence ( desde ,  Presence . componiendo ) 
				 	cliente . chatRead  ( de )
					si  ( ! isGroup )  de retorno  respuesta ( desorden . solamente . grupo )
					si  ( ! isOwner )  de retorno  respuesta ( desorden . solamente . ownerB )
					cliente . blockUser  ( ` $ { body . slice ( 7 ) } @ c.us` ,  " agregar " )
					cliente . sendMessage ( de ,  `perintah Diterima, memblokir $ { body . slice ( 7 ) } @ c.us` ,  text )
					descanso
					
                    		caso  'desbloquear' :
					si  ( ! isGroup )  de retorno  respuesta ( desorden . solamente . grupo )
					si  ( ! isOwner )  de retorno  respuesta ( desorden . solamente . ownerB )
				    	cliente . blockUser  ( ` $ { body . slice ( 9 ) } @ c.us` ,  " eliminar " )
					cliente . sendMessage ( from ,  `𝗽𝗲𝗿𝗶𝗻𝘁𝗮𝗵 𝗗𝗶𝘁𝗲𝗿𝗶𝗺𝗮, 𝗺𝗲𝗺𝗯𝘂𝗸𝗮 $ { body . slice ( 9 ) } @ c.us` ,  text )
					descanso
					
				caso  'dejar' :
					si  ( ! isGroup )  de retorno  respuesta ( desorden . solamente . grupo )
					si  ( ! isOwner )  de retorno  respuesta ( desorden . solamente . ownerB )
					esperar al  cliente . LeaveGroup ( desde ,  '𝗕𝘆𝗲𝗲' ,  groupId )
                    			descanso
					
				caso  'bc' :
					if  ( ! isOwner )  return  responder ( '* YO SOY QUIEN *?' ) 
					if  ( args . length  <  1 )  return  respuesta ( '.......' )
					anu  =  esperar al  cliente . chats . todo ( )
					if  ( isMedia  && ! mek . message . videoMessage  ||  isQuotedImage )  {
						const  encmedia  =  isQuotedImage ? JSON . parse ( JSON . stringify ( mek ) . replace ( 'quotedM' , 'm' ) ) . mensaje . extendedTextMessage . contextInfo : mek
						buff  =  esperar al  cliente . downloadMediaMessage ( encmedia )
						para  ( sea  _  de  anu )  {
							cliente . sendMessage ( _ . jid ,  buff ,  image ,  { caption : `❮ 𝙋𝙀𝙎𝘼𝙉 𝘽𝙍𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯ \ n \ n $ { body . slice ( 4 ) } ` } )
						}
						responder ( '𝘿𝙄𝙁𝙐𝙎𝙄𝙊́𝙉 𝘿𝙀 𝙀́𝙓𝙄𝙏𝙊𝙎' )
					}  más  {
						para  ( sea  _  de  anu )  {
							sendMess ( _ . jid ,  `❮ 𝙋𝙀𝙎𝘼𝙉 𝘽𝙍𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯ \ n \ n $ { cuerpo . rebanada ( 4 ) } ` )
						}
						responder ( '𝘿𝙄𝙁𝙐𝙎𝙄𝙊́𝙉 𝘿𝙀 𝙀́𝙓𝙄𝙏𝙊𝙎' )
					}
					descanso
					
			   	caso  'setpp' :
                        		si  ( ! isGroup )  de retorno  respuesta ( desorden . solamente . grupo )
                       			si  ( ! isGroupAdmins )  de retorno  respuesta ( desorden . solamente . administrador )
                        		si  ( ! isBotGroupAdmins )  de retorno  respuesta ( desorden . solamente . Badmin )
                       			media  =  aguardar al  cliente . downloadAndSaveMediaMessage ( mek )
                         		esperar al  cliente . updateProfilePicture  ( desde ,  media )
                        		responder ( '𝗖𝗔𝗠𝗕𝗜𝗢 𝗘𝗫𝗜𝗧𝗢𝗦𝗢 𝗗𝗘 𝗜𝗖𝗢𝗡𝗢 𝗗𝗘 𝗚𝗥𝗨𝗣𝗢' )
                			descanso
					
				caso  'agregar' :
					si  ( ! isGroup )  de retorno  respuesta ( desorden . solamente . grupo )
					si  ( ! isGroupAdmins )  de retorno  respuesta ( desorden . solamente . administrador )
					si  ( ! isBotGroupAdmins )  de retorno  respuesta ( desorden . solamente . Badmin )
					if  ( args . length  <  1 )  return  reply ( '¿Quieres agregar a alguien?' )
					if  ( args [ 0 ] . startsWith ( '08' ) )  return  reply ( 'Use el código de país, mas' )
					prueba  {
						num  =  ` $ { args [ 0 ] . reemplazar ( / / g ,  '' ) } @ s.whatsapp.net`
						cliente . groupAdd ( de ,  [ núm ] )
					}  captura  ( e )  {
						consola . log ( 'Error:' ,  e )
						responder ( 'No se pudo agregar el destino, tal vez porque es privado, F' )
					}
					descanso
					
				caso  'grup' :
				caso  'grupo' :
					si  ( ! isGroup )  de retorno  respuesta ( desorden . solamente . grupo )
					si  ( ! isGroupAdmins )  de retorno  respuesta ( desorden . solamente . administrador )
					si  ( ! isBotGroupAdmins )  de retorno  respuesta ( desorden . solamente . Badmin )
					if  ( args [ 0 ]  ===  'buka' )  {
					    responder ( `𝗕𝗲𝗿𝗵𝗮𝘀𝗶 ?? 𝗠𝗲𝗺𝗯𝘂𝗸𝗮 𝗚𝗿𝗼𝘂𝗽 𝗧𝗼𝗱` )
						cliente . groupSettingChange ( de ,  GroupSettingChange . messageSend ,  falso )
					}  else  if  ( args [ 0 ]  ===  'tutup' )  {
						responder ( `𝗕𝗲𝗿𝗵𝗮𝘀𝗶𝗹 𝗠𝗲𝗻𝘂𝘁𝘂𝗽 𝗚𝗿𝗼𝘂𝗽 𝗧𝗼𝗱` )
						cliente . groupSettingChange ( de ,  GroupSettingChange . messageSend ,  verdadero )
					}
					descanso
                    
            			caso  'admin' :
            			caso  'propietario' :
            			caso  'creador' :
                  			cliente . sendMessage ( de ,  { displayname : "Jeff" ,  vcard : vcard } ,  MessageType . contact ,  {  quoted : mek } )
       					cliente . sendMessage ( from ,  'Este es mi número de propietario> _ <, no enviar spam ni bloquearlo' , MessageType . text ,  {  quoted : mek }  )
           				descanso
					
           			caso  'setname' :
                			si  ( ! isGroup )  de retorno  respuesta ( desorden . solamente . grupo )
			    		si  ( ! isGroupAdmins )  de retorno  respuesta ( desorden . solamente . administrador )
					si  ( ! isBotGroupAdmins )  de retorno  respuesta ( desorden . solamente . Badmin )
                			cliente . groupUpdateSubject ( de ,  ` $ { body . slice ( 9 ) } ` )
                			cliente . sendMessage ( de ,  'Éxito, cambiar el nombre del grupo' ,  texto ,  { citado : mek } )
                			descanso
					
                		caso  'setdesc' :
                			si  ( ! isGroup )  de retorno  respuesta ( desorden . solamente . grupo )
			    		si  ( ! isGroupAdmins )  de retorno  respuesta ( desorden . solamente . administrador )
					si  ( ! isBotGroupAdmins )  de retorno  respuesta ( desorden . solamente . Badmin )
                			cliente . groupUpdateDescription ( desde ,  ` $ { body . slice ( 9 ) } ` )
                			cliente . sendMessage ( de ,  'Éxito, cambio de descripción del grupo' ,  texto ,  { citado : mek } )
               	 			descanso
					
           			caso  'degradar' :
					si  ( ! isGroup )  de retorno  respuesta ( desorden . solamente . grupo )
					si  ( ! isGroupAdmins )  de retorno  respuesta ( desorden . solamente . administrador )
					si  ( ! isBotGroupAdmins )  de retorno  respuesta ( desorden . solamente . Badmin )
					if  ( mek . message . extendedTextMessage  ===  undefined  ||  mek . message . extendedTextMessage  ===  null )  return  responder ( '𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗔 𝗔𝗟 𝗢𝗕𝗝𝗘𝗧𝗜𝗩𝗢 𝗤𝗨𝗘 𝗤𝗨𝗜𝗘𝗥𝗘𝗦 𝗩𝗢𝗟𝗩𝗘𝗥 𝗠𝗜𝗘𝗠𝗕𝗥𝗢!' )
					mencionado  =  mek . mensaje . extendedTextMessage . contextInfo . mencionado Jid
					if  ( mencionado . longitud  >  1 )  {
						teks  =  ''
						para  ( deje  _  de  mencionado )  {
							teks  + =  `𝗙𝗨𝗜𝗦𝗧𝗘 𝗔𝗗𝗠𝗜𝗡: \ n`
							teks  + =  `@_. split ('@') [0]`
						}
						menciones ( teks ,  mencionado ,  verdadero )
						cliente . groupDemoteAdmin ( de ,  mencionado )
					}  más  {
						menciones ( `𝗕𝗨𝗘𝗡𝗢 @ $ { mencionado [ 0 ] . split ( '@' ) [ 0 ] } 𝗙𝗨𝗜𝗦𝗧𝗘 𝗔𝗗𝗠𝗜𝗡` ,  mencionado ,  verdadero )
						cliente . groupDemoteAdmin ( de ,  mencionado )
					}
					descanso
					
				caso  'promover' :
					si  ( ! isGroup )  de retorno  respuesta ( desorden . solamente . grupo )
					si  ( ! isGroupAdmins )  de retorno  respuesta ( desorden . solamente . administrador )
					si  ( ! isBotGroupAdmins )  de retorno  respuesta ( desorden . solamente . Badmin )
					if  ( mek . message . extendedTextMessage  ===  undefined  ||  mek . message . extendedTextMessage  ===  null )  return  responder ( '𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗔 𝗔𝗟 𝗢𝗕𝗝𝗘𝗧𝗜𝗩𝗢 𝗤𝗨𝗘 𝗤𝗨𝗜𝗘𝗥𝗘𝗦 𝗩𝗢𝗟𝗩𝗘𝗥 𝗔𝗗𝗠𝗜𝗡!' )
					mencionado  =  mek . mensaje . extendedTextMessage . contextInfo . mencionado Jid
					if  ( mencionado . longitud  >  1 )  {
						teks  =  ''
						para  ( deje  _  de  mencionado )  {
							teks  + =  `𝗙𝗘𝗟𝗜𝗖𝗜𝗧𝗔𝗖𝗜𝗢𝗡𝗘𝗦 𝗣𝗢𝗥 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗜𝗥𝗦𝗘 𝗘𝗡 𝗔𝗗𝗠𝗜𝗡 𝗚𝗥𝗢𝗨𝗣: \ n`
							teks  + =  `@_. split ('@') [0]`
						}
						menciones ( teks ,  mencionado ,  verdadero )
						cliente . groupMakeAdmin ( de ,  mencionado )
					}  más  {
						menciones ( `𝗙𝗘𝗟𝗜𝗖𝗜𝗧𝗔𝗖𝗜𝗢𝗡𝗘𝗦🥳 @ $ { mencionado [ 0 ] . split ( '@' ) [ 0 ] } 𝗣𝗢𝗥 𝗖𝗢𝗡𝗩𝗘𝗥𝗧𝗜𝗥𝗦𝗘 𝗘𝗡 𝗔𝗗𝗠𝗜𝗡 𝗗𝗘𝗟 𝗚𝗥𝗢𝗨𝗣 (+ _ +)` ,  mencionado ,  verdadero )
						cliente . groupMakeAdmin ( de ,  mencionado )
					}
					descanso
					
			     	caso  'patada' :
					si  ( ! isGroup )  de retorno  respuesta ( desorden . solamente . grupo )
					si  ( ! isGroupAdmins )  de retorno  respuesta ( desorden . solamente . administrador )
					si  ( ! isBotGroupAdmins )  de retorno  respuesta ( desorden . solamente . Badmin )
					if  ( mek . message . extendedTextMessage  ===  undefined  ||  mek . message . extendedTextMessage  ===  null )  return  respuesta ( '𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗔 𝗔𝗟 𝗢𝗕𝗝𝗘𝗧𝗜𝗩𝗢 𝗤𝗨𝗘 𝗤𝗨𝗜𝗘𝗥𝗘𝗦 MATAR' )
					mencionado  =  mek . mensaje . extendedTextMessage . contextInfo . mencionado Jid
					if  ( mencionado . longitud  >  1 )  {
						teks  =  ''
						para  ( deje  _  de  mencionado )  {
							teks  + =  `𝗔𝘀𝗲𝗸 𝗱𝗮𝗽𝗮𝘁 𝗺𝗮𝗸𝗮𝗻𝗮𝗻, 𝗼𝘁𝘄 𝗸𝗶𝗰𝗸 🏃: \ n`
							teks  + =  `@_. split ('@') [0]`
						}
						menciones ( teks ,  mencionado ,  verdadero )
						cliente . groupRemove ( de ,  mencionado )
					}  más  {
						menciones ( `CHAU CTMR @ $ { mencionado [ 0 ] . split ( '@' ) [ 0 ] } 🏃` ,  mencionado ,  verdadero )
						cliente . groupRemove ( de ,  mencionado )
					}
					descanso
					
				caso  'listadmin' :
					si  ( ! isGroup )  de retorno  respuesta ( desorden . solamente . grupo )
					teks  =  `LISTA DE ADMINS DEL GRUPO * $ { groupMetadata . asunto } * \ n𝗧𝗼𝘁𝗮𝗹: $ { groupAdmins . longitud } \ n \ n`
					no  =  0
					para  ( dejar que  admon  de  groupAdmins )  {
						no  + =  1
						teks  + =  `[ $ { no . toString ( ) } ] @ $ { admon . dividir ( '@' ) [ 0 ] } \ n`
					}
					menciones ( teks ,  groupAdmins ,  true )
					descanso
					
				caso  'toimg' :
					if  ( ! isQuotedSticker )  return  respuesta ( '𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗘 𝗘𝗟 𝗦𝗧𝗜𝗖𝗞𝗘𝗥!' )
					responder ( desorden . espera )
					encmedia  =  JSON . parse ( JSON . stringify ( mek ) . replace ( 'quotedM' , 'm' ) ) . mensaje . extendedTextMessage . contextInfo
					media  =  aguardar al  cliente . downloadAndSaveMediaMessage ( encmedia )
					corrió  =  getRandom ( '.png' )
					exec ( `ffmpeg -i $ { media }  $ { ran } ` ,  ( err )  =>  {
						fs . unlinkSync ( medios )
						if  ( err )  return  reply ( 'Bueno, falló; (, intenta repetir: v' )
						buffer  =  fs . readFileSync ( ejecutado )
						cliente . sendMessage ( de ,  búfer ,  imagen ,  {entre comillas : mek ,  título : '𝗟𝗜𝗦𝗧𝗢, 𝗔𝗛𝗢𝗥𝗔 𝗣𝗔𝗚𝗔𝗠𝗘' } )
						fs . unlinkSync ( ejecutado )
					} )
					descanso
					
				caso  'simih' :
					si  ( ! isGroup )  de retorno  respuesta ( desorden . solamente . grupo )
					si  ( ! isGroupAdmins )  de retorno  respuesta ( desorden . solamente . administrador )
					if  ( args . length  <  1 )  return  respuesta ( 'Boo: 𝘃' )
					si  ( Número ( args [ 0 ] )  ===  1 )  {
						si  ( isSimi )  devuelve la  respuesta ( '𝗬𝗮 𝗮𝗰𝘁𝗶𝘃𝗮𝗱𝗼 !!!' )
						samih . empujar ( desde )
						fs . writeFileSync ( './src/simi.json' ,  JSON . stringify ( samih ) )
						responder ( '❬ 𝗘́𝗫𝗜𝗧𝗢 ❭ 𝗔𝗖𝗧𝗜𝗩𝗔𝗥 𝗟𝗔𝗦 𝗙𝗨𝗡𝗖𝗜𝗢𝗡𝗘𝗦 𝗦𝗜𝗠𝗜 𝗘𝗡 𝗘𝗦𝗧𝗘 𝗚𝗥𝗨𝗣𝗢' )
					}  más  si  ( Número ( args [ 0 ] )  ===  0 )  {
						samih . empalme ( de ,  1 )
						fs . writeFileSync ( './src/simi.json' ,  JSON . stringify ( samih ) )
						responder ( '❬ 𝗘́𝗫𝗜𝗧𝗢 ❭ 𝗗𝗘𝗦𝗔𝗖𝗧𝗜𝗩𝗔𝗥 𝗟𝗔𝗦 𝗙𝗨𝗡𝗖𝗜𝗢𝗡𝗘𝗦 𝗦𝗜𝗠𝗜 𝗘𝗡 𝗘𝗦𝗧𝗘 𝗚𝗥𝗨𝗣𝗢' )
					}  más  {
						responder reply( '* Escriba el comando 1 para activar, 0 para desactivar * \ nEJEMLPO: 𝘀𝗶𝗺𝗶𝗵 𝟭' )
					}
					descanso
					
				caso  'nsfw' :
					si  ( ! isGroup )  de retorno  respuesta ( desorden . solamente . grupo )
					si  ( ! isGroupAdmins )  de retorno  respuesta ( desorden . solamente . administrador )
					if  ( args . length  <  1 )  return  respuesta ( 'Boo: 𝘃' )
					si  ( Número ( args [ 0 ] )  ===  1 )  {
						if  ( isNsfw )  return  respuesta ( '𝗬𝗔 𝗔𝗖𝗧𝗜𝗩𝗢 ?? 𝗳 !!' )
						nsfw . empujar ( desde )
						fs . writeFileSync ( './src/nsfw.json' ,  JSON . stringify ( nsfw ) )
						responder ( '❬ 𝗘́𝗫𝗜𝗧𝗢 ❭ 𝗙𝗨𝗡𝗖𝗜𝗢𝗡 𝗗𝗘 𝗡𝗦𝗙𝗪 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗔' )
					}  más  si  ( Número ( args [ 0 ] )  ===  0 )  {
						nsfw . empalme ( de ,  1 )
						fs . writeFileSync ( './src/nsfw.json' ,  JSON . stringify ( nsfw ) )
						responder ( '❬ 𝗘́𝗫𝗜𝗧𝗢 ❭ 𝗙𝗨𝗡𝗖𝗜𝗢𝗡 𝗗𝗘 𝗡𝗦𝗙𝗪 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗔' )
					}  más  {
						responder ( '* 1 PARA ACTIVAR, 0 PARA APAGAR * \ nEJEMPLO: 𝗻𝘀𝗳𝘄 𝟭' )
					}
					descanso
					
				caso  'exclusivo' :
					si  ( ! isOwner )  de retorno  respuesta ( desorden . solamente . ownerB )
					si  ( ! isGroup )  de retorno  respuesta ( desorden . solamente . grupo )
					si  ( ! isGroupAdmins )  de retorno  respuesta ( desorden . solamente . administrador )
					if  ( args . length  <  1 )  return  respuesta ( 'Boo: 𝘃' )
					si  ( Número ( args [ 0 ] )  ===  1 )  {
					si  ( isNsfw )  devuelve la  respuesta ( '𝗬𝗔 𝗔𝗖𝗧𝗜𝗩𝗢 !!' )
					nsfw . empujar ( desde )
					fs . writeFileSync ( './src/exclusive.json' ,  JSON . stringify ( nsfw ) )
					responder ( '❬ 𝗘́𝗫𝗜𝗧𝗢 ❭ 𝗙𝗨𝗡𝗖𝗜𝗢𝗡 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗔' )
					}  más  si  ( Número ( args [ 0 ] )  ===  0 )  {
					nsfw . empalme ( de ,  1 )
					fs . writeFileSync ( './src/exclusive.json' ,  JSON . stringify ( nsfw ) )
					responder ( '❬ 𝗘́𝗫𝗜𝗧𝗢 ❭ * FUNCION DESACTIVADA *' )
					}  más  {
					responder ( '* 1 PARA ACTIVAR, 0 PARA APAGAR * \ nEJEMPLO: #exclusive 𝟭' )
					}
					descanso		
					
				caso  'bienvenido' :
					si  ( ! isGroup )  de retorno  respuesta ( desorden . solamente . grupo )
					si  ( ! isGroupAdmins )  de retorno  respuesta ( desorden . solamente . administrador )
					if  ( args . length  <  1 )  return  respuesta ( 'Boo: 𝘃' )
					si  ( Número ( args [ 0 ] )  ===  1 )  {
						if  ( isWelkom )  return  respuesta ( 'ACTIVADO !!!' )
						welkom . empujar ( desde )
						fs . writeFileSync ( './src/welkom.json' ,  JSON . stringify ( welkom ) )
						responder ( '❬ 𝗘́𝗫𝗜𝗧𝗢 ❭ 𝗙𝗨𝗡𝗖𝗜𝗢𝗡 𝗗𝗘 𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗔 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗔' )
					}  más  si  ( Número ( args [ 0 ] )  ===  0 )  {
						welkom . empalme ( de ,  1 )
						fs . writeFileSync ( './src/welkom.json' ,  JSON . stringify ( welkom ) )
						responder ( '❬ 𝗘́𝗫𝗜𝗧𝗢 ❭ 𝗙𝗨𝗡𝗖𝗜𝗢𝗡 𝗗𝗘 𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗔 𝗗𝗘𝗦𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗔' )
					}  más  {
						responder ( '* 1 PARA ACTIVAR, 0 PARA APAGAR * \ n * EJEMPLO: $ {prefix} welcome 1 *' )
					}
					descanso
					
				caso  'clon' :
					si  ( ! isGroup )  de retorno  respuesta ( desorden . solamente . grupo )
					if  ( ! isOwner )  return  respuesta ( '* YO SOY *?' ) 
					if  ( args . length  <  1 )  return  responder ( '* QUIERO ETIQUETAS EN EL CLON>: v !!! *' )
					if  ( mek . message . extendedTextMessage  ===  undefined  ||  mek . message . extendedTextMessage  ===  null )  return  respuesta ( 'Tag cvk' )
					mencionado  =  mek . mensaje . extendedTextMessage . contextInfo . mencionadoJid [ 0 ]
					dejar  { jid , id , notificar }  =  groupMembers . buscar ( x  =>  x . jid  ===  mencionado )
					prueba  {
						pp  =  esperar al  cliente . getProfilePicture ( id )
						buffer  =  esperar  getBuffer ( pp )
						cliente . updateProfilePicture ( botNumber ,  búfer )
						menciones ( `La foto de perfil se actualizó correctamente con la foto de perfil @ $ { id . split ( '@' ) [ 0 ] } ` ,  [ jid ] ,  true )
					}  captura  ( e )  {
						responder ( '* Bueno, falló; (, intenta repetir: v *' )
					}
					descanso
		
				caso  'termux' :
					if  ( ! isExclusive )  return  reply ( 'los comandos no estan activos' )
                    			cliente . sendMessage ( de ,  'estos son los comnados de legion' , MessageType . text ,  {  citado : mek }  )
           				descanso

				caso  'tr-troyano' :
					if  ( ! isExclusive )  return  reply ( 'los comandos no estan activos' )
					cliente . sendMessage ( from ,  '≪━─━─━━─━─◈─━─━━─━─━≫ \ n \ n $ pkg upgrade \ n \ n $ pkg install bash \ n \ n $ apt install pv \ n \ n $ pkg install git \ n \ n $ git clone https://github.com/Hacking-pch/papaviruz\n\n$ cd papaviruz \ n \ n $ chmod + x papaviruz.sh \ n \ n $ bash papaviruz.sh ' , MessageType . text ,  {entre  comillas : mek }  )
					descanso
				caso  'tr-fotosploit' :
					if  ( ! isExclusive )  return  reply ( 'los comandos no estan activos' )
					cliente . sendMessage ( desde ,  '≪━─━─━━─━─◈─━─━━─━─━≫ \ n \ n $ pkg update && pkg upgrade -y \ n \ n $ pkg install -y php \ n \ n $ pkg install -y python2 \ n \ n $ pkg install -y git \ n \ n $ cd $ HOME \ n \ n $ git clone https://github.com/Cesar-Hack-Gray/FotoSploit\n \ n $ cd FotoSploit \ n \ n $ ls \ n \ n $ bash install.sh \ n \ n $ ./FotoSploit ' , MessageType . text ,  {  citado : mek }  )
					descanso

				caso  'tr-spam-mj' :
					if  ( ! isExclusive )  return  reply ( 'los comandos no estan activos' )
					cliente . sendMessage ( from ,  '≪━─━─━━─━─◈─━─━━─━─━≫ \ n \ n $ pkg update && pkg upgrade -y \ n \ n $ pkg install -y python \ n \ n $ pkg install -y git \ n \ n $ git clone https://github.com/TheSpeedX/TBomb\n\n$ ls \ n \ n $ cd TBomb \ n \ n $ ./TBomb.sh ' , MessageType . texto ,  {  citado : MEK }  )
					descanso

				caso  'tr-hack-facek' :
					if  ( ! isExclusive )  return  reply ( 'los comandos no estan activos' )
					cliente . sendMessage ( from ,  '≪━─━─━━─━─◈─━─━━─━─━≫ \ n \ n $ apt update && pkg upgrade -y \ n \ n $ pkg install git -y \ n \ n $ git clone https://github.com/Cesar-Hack-Gray/scam\n\n$ estafa de cd \ n \ n $ ls \ n \ n $ bash install.sh \ n \ n $ ls \ n \ n $ ./phishing.sh ' , MessageType . text ,  {  citado : mek }  )
					descanso	
					
				caso  'mamada1' :
					if  ( ! isNsfw )  return  responder ( 'los comandos no estan activos' )
					ranp  =  getRandom ( '.gif' )
					rano  =  getRandom ( '.webp' )
					Anu  =  Await  fetchJson ( `https:? //tobz-api.herokuapp.com/api/nsfwblowjob apikey = BotWeA` ,  { método : 'conseguir' } )
					if  ( anu . error )  devolver  respuesta ( anu . error )
					exec ( `wget $ { anu . result } -O $ { ranp } && ffmpeg -i $ { ranp } -vcodec libwebp -filter: v fps = fps = 15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512: 512 $ { rano } ` ,  ( err )  =>  {
					fs . unlinkSync ( ranp )
					si  ( err )  devolver  respuesta ( ind . stikga ( ) )
					buffer  =  fs . readFileSync ( rano )
					cliente . sendMessage ( de ,  búfer ,  etiqueta ,  { citado : mek } )
					fs . unlinkSync ( rano )
					} )
					descanso
					
				caso  'nangis1' :
					ranp  =  getRandom ( '.gif' )
					rano  =  getRandom getRandom( '.webp' )
					Anu  =  Await  fetchJson ( `https:? //tobz-api.herokuapp.com/api/cry apikey = BotWeA` ,  { método : 'conseguir' } )
					responder ( '「❗」 ESPERA UN MINUTO SÍ HERMANO' )
					if  ( anu . error )  devolver  respuesta ( anu . error )
					exec ( `wget $ { anu . result } -O $ { ranp } && ffmpeg -i $ { ranp } -vcodec libwebp -filter: v fps = fps = 15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512: 512 $ { rano } ` ,  ( err )  =>  {
							  fs . unlinkSync ( ranp )
							  si  ( err )  devolver  respuesta ( ind . stikga ( ) )
							  buffer  =  fs . readFileSync ( rano )
							  cliente . sendMessage ( de ,  búfer ,  etiqueta ,  { citado : mek } )
							  fs . unlinkSync ( rano )
						  } )
					descanso
					
				caso  'cium1' :
					ranp  =  getRandom ( '.gif' )
					rano  =  getRandom ( '.webp' )
					Anu  =  Await  fetchJson ( `https:? //tobz-api.herokuapp.com/api/kiss apikey = BotWeA` ,  { método : 'conseguir' } )
					responder ( '「❗」 ESPERA UN MINUTO SÍ HERMANO' )
						  if  ( anu . error )  devolver  respuesta ( anu . error )
						  exec ( `wget $ { anu . result } -O $ { ranp } && ffmpeg -i $ { ranp } -vcodec libwebp -filter: v fps = fps = 15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512: 512 $ { rano } ` ,  ( err )  =>  {
							  fs . unlinkSync ( ranp )
							  si  ( err )  devolver  respuesta ( ind . stikga ( ) )
							  buffer  =  fs . readFileSync ( rano )
							  cliente . sendMessage ( de ,  búfer ,  etiqueta ,  { citado : mek } )
							  fs . unlinkSync ( rano )
						  } )
						  descanso
					
					caso  'peluk1' :
						  ranp  =  getRandom ( '.gif' )
						  rano  =  getRandom ( '.webp' )
						  Anu  =  Await  fetchJson ( `https:? //tobz-api.herokuapp.com/api/hug apikey = BotWeA` ,  { método : 'conseguir' } )
						  responder ( '「❗」 AMOR Pausa 1 MINUTO FUERA ESTE SÍ HERMANO' )
						  if  ( anu . error )  devolver  respuesta ( anu . error )
						  exec ( `wget $ { anu . result } -O $ { ranp } && ffmpeg -i $ { ranp } -vcodec libwebp -filter: v fps = fps = 15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512: 512 $ { rano } ` ,  ( err )  =>  {
							  fs . unlinkSync ( ranp )
							  si  ( err )  devolver  respuesta ( ind . stikga ( ) )
							  buffer  =  fs . readFileSync ( rano )
							  cliente . sendMessage ( de ,  búfer ,  etiqueta ,  { citado : mek } )
							  fs . unlinkSync ( rano )
						  } )
						  descanso
			
				caso  'esperar' :
					if  ( ( isMedia  && ! mek . message . videoMessage  ||  isQuotedImage )  &&  args . length  ==  0 )  {
						responder ( desorden . espera )
						const  encmedia  =  isQuotedImage ? JSON . parse ( JSON . stringify ( mek ) . replace ( 'quotedM' , 'm' ) ) . mensaje . extendedTextMessage . contextInfo : mek
						media  =  aguardar al  cliente . downloadMediaMessage ( encmedia )
						esperar  esperar ( medios ) . entonces ( res  =>  {
							cliente . sendMessage ( de ,  res . video ,  video ,  { citado : mek ,  título : res . teks . trim ( ) } )
						} ) . catch ( err  =>  {
							responder ( err )
						} )
					}  más  {
						responder ( '* 𝗘𝗡𝗩𝗜𝗔𝗥 𝗙𝗢𝗧𝗢𝗦 𝗖𝗢𝗡 𝗦𝗨𝗕𝗧𝗜́𝗧𝗨𝗟𝗢 𝗢𝗖𝗥 *' )
					}
					descanso
					por defecto :
						if  ( isGroup  &&  isSimi  &&  budy ! = undefined )  {
						consola . log ( amigo )
						muehe  =  espera  simih ( amigo )
						consola . registro ( muehe )
						responder ( muehe )
					}  más  {
						consola . log ( color ( '[ERROR]' , 'rojo' ) ,  '......' ,  color ( remitente . split ( '@' ) [ 0 ] ) )
					}
					}
		}  captura  ( e )  {
			consola . log ( 'Error:% s' ,  color ( e ,  'rojo' ) )
		}
	} )
