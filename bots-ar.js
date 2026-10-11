/* Nicks argentinos extra para Radio Intensa (mayoría argentina en la sala).
   Se integra solo: agrega las personas, sus frases, perfiles y géneros. */
window.EXTRA_PERSONAS = [
{nick:"Martín", pais:"Argentina", msgs:[
"Che, {prog} hoy está tremendo",
"Acá desde Rosario, prendido a {prog}",
"¿Vieron lo de recién en {prog}? ¡Muy bueno!",
"Saludos gente, buen programa hoy en {prog}",
"Che, ¿{prog} sale todos los días?",
"Qué buena la música de {prog} hoy",
"Acá laburando con {prog} de fondo",
"¿Alguien más fan de {prog} o soy el único?",
"Buenas noches, {prog} me acompaña siempre",
"Che, qué nivel {prog}, felicitaciones",
"¿Pasan rock nacional en {prog}?",
"Aguante {prog}, che"]},
{nick:"Sole", pais:"Argentina", msgs:[
"¡Hola! Recién me sumo a {prog}, ¿qué tal?",
"Qué lindo programa {prog} hoy",
"Saludos desde La Plata, escuchando {prog}",
"¿Vieron qué bueno estuvo {prog} recién?",
"Me encanta {prog}, no me lo pierdo",
"¿{prog} tiene redes para seguirlos?",
"Acá con unos mates y {prog}, plan perfecto",
"Qué buena onda la gente de {prog}",
"¿Hoy de qué trata {prog}?",
"Buenas, ¿cómo andan todos en {prog}?",
"Che, qué temazo pasaron en {prog}",
"¡Aguante {prog}!"]},
{nick:"Pablo Ríos", pais:"Argentina", msgs:[
"Buenas, acá Pablo, escuchando {prog} como siempre",
"Qué buen programa {prog}, felicitaciones",
"Desde Mendoza, saludos a todos los de {prog}",
"¿Escucharon la nota de recién en {prog}?",
"Che, {prog} cada día mejor",
"Acá en el negocio con {prog} de fondo",
"¿{prog} repite el finde? Me lo perdí",
"Saludos a la barra de {prog}",
"Qué interesante lo que dijeron en {prog}",
"Buenas noches gente de {prog}",
"¿Hacen pedidos en {prog}?",
"{prog} es lo más, che"]},
{nick:"Mica", pais:"Argentina", msgs:[
"¡Holaa! ¿Qué onda {prog} hoy?",
"Qué copado {prog}, me encanta",
"Saludos desde Córdoba, ¡aguante {prog}!",
"¿Vieron lo de recién? ¡Me mató {prog}!",
"Che, ¿{prog} está en Instagram?",
"Acá estudiando con {prog}, me concentra",
"Qué buena la selección musical de {prog}",
"¿Alguien sabe si {prog} hace sorteos?",
"Buenas, me sumo al chat de {prog}",
"¡Qué temazo en {prog} recién!",
"Me río sola con {prog} jaja",
"Saludos a todos los de {prog}"]},
{nick:"Facundo", pais:"Argentina", msgs:[
"Buenas, Facu por acá, escuchando {prog}",
"Qué grande {prog} hoy",
"Desde Tucumán, prendido a {prog}",
"¿Qué les pareció {prog} hoy?",
"Che, buenísimo el programa de {prog}",
"Acá repartiendo con {prog} en la moto",
"¿{prog} sale mañana también?",
"Saludos gente, {prog} la rompe",
"Qué bueno el conductor de {prog}",
"Buenas noches, {prog} siempre presente",
"¿Pasan folclore en {prog}?",
"{prog} un golazo, che"]}
];
window.EXTRA_GENDERS = {"Martín":"m","Sole":"f","Pablo Ríos":"m","Mica":"f","Facundo":"m"};
window.EXTRA_PROFILES = {
"Martín":{edad:32, ocupa:"empleado"},
"Sole":{edad:27, ocupa:"maestra"},
"Pablo Ríos":{edad:35, ocupa:"comerciante"},
"Mica":{edad:22, ocupa:"estudiante"},
"Facundo":{edad:29, ocupa:"repartidor"}
};
/* 88 frases extra por nick (las escriben los ayudantes) */
window.AR_MSGS = {
"Martín":[],
"Sole":[],
"Pablo Ríos":[],
"Mica":[],
"Facundo":[]
};
/* Integración automática al cargar (después del script principal) */
(function(){
  try{
    var P = window.EXTRA_PERSONAS||[];
    P.forEach(function(p){ personas.push(p); });
    Object.assign(botGender, window.EXTRA_GENDERS||{});
    P.forEach(function(p){ botNicks.add(p.nick); botNickSet.add(p.nick); });
    Object.assign(window.NICK_PROFILES||{}, window.EXTRA_PROFILES||{});
    if(window.AR_MSGS) Object.keys(window.AR_MSGS).forEach(function(n){
      var per=null; personas.forEach(function(x){ if(x.nick===n) per=x; });
      if(per && window.AR_MSGS[n].length) per.msgs = per.msgs.concat(window.AR_MSGS[n]);
    });
  }catch(e){}
})();
